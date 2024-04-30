import { RefreshCcwDot, File, MoreHorizontal } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useReviewsFunctions } from "@/firebase/firbase";
import { useEffect, useState } from "react";
import ReviewsStatusBadge from "@/components/ReviewsStatusBadge";
export default function AdminReviews() {
  const [loading, setLoading] = useState(false);
  const [approvedLoading, setApprovedLoading] = useState(false);
  const [declinedLoading, setDeclinedLoading] = useState(false);
  const [allReviews, setAllReviews] = useState([]);
  const [approvedReviews, setApprovedReviews] = useState([]);
  const [rejectedReviews, setRejectedReviews] = useState([]);

  const { getAllReviews, getAllReviewsbyStatus, updateReviewStatusId } =
    useReviewsFunctions();

  const handleGetReviews = async () => {
    const approvedReviewsData = await getAllReviewsbyStatus("approved");
    const rejectedReviewsData = await getAllReviewsbyStatus("rejected");
    const allReviews = await getAllReviews();
    console.log("setting_reviews_to_state ...");

    setAllReviews(allReviews?.data);
    setApprovedReviews(approvedReviewsData?.data);
    setRejectedReviews(rejectedReviewsData?.data);
    console.log("all_reviews >> ", allReviews);
    console.log("rejected_reviews >> ", rejectedReviewsData);
    console.log("approved_reviews >> ", approvedReviewsData);
  };

  useEffect(() => {
    handleGetReviews();
  }, []);

  // Render Table
  const renderAllReviews = () => {
    console.log("all_reviews >> ", allReviews);
    if (loading) {
      return (
        <TableRow>
          <TableCell colSpan={7} className="text-center">
            Fetching Reviews. Please wait...
          </TableCell>
        </TableRow>
      );
    } else if (!allReviews || allReviews?.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={7} className="text-center">
            No reviews in store
          </TableCell>
        </TableRow>
      );
    } else {
      return allReviews?.map((review, index) => (
        <TableRow>
          <TableCell>
            <div className="font-medium">{review?.name}</div>
            <div className="hidden text-sm text-muted-foreground md:inline">
              {review?.email}
            </div>
          </TableCell>
          <TableCell className="hidden sm:table-cell">
            {review?.rating}
          </TableCell>
          <TableCell className="hidden sm:table-cell">
            <ReviewsStatusBadge status={review?.status} />
          </TableCell>
          <TableCell className="hidden md:table-cell">
            {review?.createdAt}
          </TableCell>
          <TableCell className="text-right">
            <Dialog>
              <DialogTrigger>
                <Button aria-haspopup="true" size="icon" variant="ghost">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>review No #{review?.id}</DialogTitle>
                </DialogHeader>
                <div className="p-4 bg-gray-200 rounded-lg max-h-80 overflow-y-auto">
                  <p className="mb-2 font-semibold underline text-green-600">
                    ID:
                  </p>
                  <p className="mb-2 font-bold">{review?.id}</p>

                  <p className="mb-2 font-semibold underline text-green-600">
                    Status:
                  </p>
                  <p className="mb-2 font-bold">{review?.status}</p>
                  <p className="mb-2 font-semibold underline text-green-600">
                    Message:
                  </p>
                  <p className="mb-2 font-bold">{review?.review}</p>
                  <p className="mb-2 font-semibold underline text-green-600">
                    Created At:
                  </p>
                  <p className="mb-2 font-bold">{review?.createdAt}</p>
                  <p className="mb-2 font-semibold underline text-green-600">
                    Email:
                  </p>
                  <p className="mb-2 font-bold">{review?.email}</p>
                  <p className="mb-2 font-semibold underline text-green-600">
                    Full Name:
                  </p>
                  <p className="mb-2 font-bold">{review?.name}</p>
                  <p className="mb-2 font-semibold underline text-green-600">
                    Ratings:
                  </p>
                  <p className="mb-2 font-bold">{review?.rating}</p>
                </div>
                <div className="my-4 flex justify-around ">
                  <button
                    onClick={() =>
                      handleApproveReview(review?.id, review?.type)
                    }
                    className="bg-none w-1/3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded transition-colors duration-300"
                  >
                    {approvedLoading ? "loading ..." : "Approve"}
                  </button>
                  <button
                    onClick={() => handleRejectReview(review?.id, review?.type)}
                    className="bg-none w-1/3 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold py-1 px-2 rounded transition-colors duration-300"
                  >
                    {declinedLoading ? "loading ..." : "Reject"}
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          </TableCell>
        </TableRow>
      ));
    }
  };
  const renderApprovedReviews = () => {
    console.log("approved_reviews >> ", approvedReviews);
    if (loading) {
      return (
        <TableRow>
          <TableCell colSpan={7} className="text-center">
            Fetching Reviews. Please wait...
          </TableCell>
        </TableRow>
      );
    } else if (!approvedReviews || approvedReviews?.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={7} className="text-center">
            No review in store
          </TableCell>
        </TableRow>
      );
    } else {
      return approvedReviews.map((review, index) => (
        <TableRow>
          <TableCell>
            <div className="font-medium">{review?.full_name}</div>
            <div className="hidden text-sm text-muted-foreground md:inline">
              {review?.email}
            </div>
          </TableCell>
          <TableCell className="hidden sm:table-cell">{review?.type}</TableCell>
          <TableCell className="hidden sm:table-cell">
            <ReviewsStatusBadge status={review?.status} />
          </TableCell>
          <TableCell className="hidden md:table-cell">
            {review?.createdAt}
          </TableCell>
          <TableCell className="text-right">
            <Dialog>
              <DialogTrigger>
                <Button aria-haspopup="true" size="icon" variant="ghost">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>review No #{review?.id}</DialogTitle>
                </DialogHeader>
                <div className="p-4 bg-gray-200 rounded-lg max-h-80 overflow-y-auto">
                  <p className="mb-2 font-semibold">ID:</p>
                  <p className="mb-2 font-bold">{review?.id}</p>

                  <p className="mb-2 font-semibold">Status:</p>
                  <p className="mb-2 font-bold">{review?.status}</p>
                  <p className="mb-2 font-semibold">Message:</p>
                  <p className="mb-2 font-bold">{review?.message}</p>
                  <p className="mb-2 font-semibold">Created At:</p>
                  <p className="mb-2 font-bold">{review?.createdAt}</p>
                  <p className="mb-2 font-semibold">Email:</p>
                  <p className="mb-2 font-bold">{review?.email}</p>
                  <p className="mb-2 font-semibold">Full Name:</p>
                  <p className="mb-2 font-bold">{review?.full_name}</p>
                  <p className="mb-2 font-semibold">Ratings:</p>
                  <p className="mb-2 font-bold">{review?.rating}</p>
                </div>
                <div className="my-4 flex justify-between">
                  <button
                    onClick={() =>
                      handleApproveReview(review?.id, review?.type)
                    }
                    className="bg-none border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded transition-colors duration-300"
                  >
                    {approvedLoading ? "loading ..." : "Approve"}
                  </button>
                  <button
                    onClick={() => handleRejectReview(review?.id, review?.type)}
                    className="bg-none border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold py-1 px-2 rounded transition-colors duration-300"
                  >
                    {declinedLoading ? "loading ..." : "Reject"}
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          </TableCell>
        </TableRow>
      ));
    }
  };
  const renderRejectedReviews = () => {
    console.log("rejected_reviews >> ", rejectedReviews);
    if (loading) {
      return (
        <TableRow>
          <TableCell colSpan={7} className="text-center">
            Fetching Reviews. Please wait...
          </TableCell>
        </TableRow>
      );
    } else if (!rejectedReviews || rejectedReviews.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={7} className="text-center">
            No review in store
          </TableCell>
        </TableRow>
      );
    } else {
      return rejectedReviews.map((review, index) => (
        <TableRow>
          <TableCell>
            <div className="font-medium">{review?.full_name}</div>
            <div className="hidden text-sm text-muted-foreground md:inline">
              {review?.email}
            </div>
          </TableCell>
          <TableCell className="hidden sm:table-cell">{review?.type}</TableCell>
          <TableCell className="hidden sm:table-cell">
            <ReviewsStatusBadge status={review?.status} />
          </TableCell>
          <TableCell className="hidden md:table-cell">
            {review?.createdAt}
          </TableCell>
          <TableCell className="text-right">
            <Dialog>
              <DialogTrigger>
                <Button aria-haspopup="true" size="icon" variant="ghost">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>review No #{review?.id}</DialogTitle>
                </DialogHeader>
                <div className="p-4 bg-gray-200 rounded-lg max-h-80 overflow-y-auto">
                  <p className="mb-2 font-semibold">ID:</p>
                  <p className="mb-2 font-bold">{review?.id}</p>

                  <p className="mb-2 font-semibold">Status:</p>
                  <p className="mb-2 font-bold">{review?.status}</p>
                  <p className="mb-2 font-semibold">Message:</p>
                  <p className="mb-2 font-bold">{review?.message}</p>
                  <p className="mb-2 font-semibold">Created At:</p>
                  <p className="mb-2 font-bold">{review?.createdAt}</p>
                  <p className="mb-2 font-semibold">Email:</p>
                  <p className="mb-2 font-bold">{review?.email}</p>
                  <p className="mb-2 font-semibold">Full Name:</p>
                  <p className="mb-2 font-bold">{review?.full_name}</p>
                  <p className="mb-2 font-semibold">Ratings:</p>
                  <p className="mb-2 font-bold">{review?.rating}</p>
                </div>
                <div className="my-4 flex justify-between">
                  <button
                    onClick={() =>
                      handleApproveReview(review?.id, review?.type)
                    }
                    className="bg-none border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded transition-colors duration-300"
                  >
                    {approvedLoading ? "loading ..." : "Approve"}
                  </button>
                  <button
                    onClick={() => handleRejectReview(review?.id, review?.type)}
                    className="bg-none border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold py-1 px-2 rounded transition-colors duration-300"
                  >
                    {declinedLoading ? "loading ..." : "Reject"}
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          </TableCell>
        </TableRow>
      ));
    }
  };

  // update Quotations
  const handleApproveReview = async (id, type) => {
    setApprovedLoading(true);
    const status = "approved";
    try {
      const updateReviewStatusResponse = await updateReviewStatusId(
        id,
        status,
        type
      );
      if (updateReviewStatusResponse?.success) {
        alert("successfully updated the status of this Review");
        console.log(
          "update_Review_status_response >> ",
          updateReviewStatusResponse
        );
      }
      setApprovedLoading(false);
    } catch (error) {
      console.log("an err aoccured trying to mark Review as fullfiled");
      setApprovedLoading(false);
    }
  };
  const handleRejectReview = async (id, type) => {
    setDeclinedLoading(true);
    const status = "rejected";
    try {
      const updateReviewStatusResponse = await updateReviewStatusId(
        id,
        status,
        type
      );
      if (updateReviewStatusResponse?.success) {
        alert("successfully updated the status of this REVIEW");
        console.log(
          "update_REVIEW_status_response >> ",
          updateReviewStatusResponse
        );
      }
      setDeclinedLoading(false);
    } catch (error) {
      console.log("an err aoccured trying to mark REVIEW as Declined");
      setDeclinedLoading(false);
    }
  };

  return (
    <div>
      <Tabs defaultValue="all">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-1"
              onClick={handleGetReviews}
            >
              <RefreshCcwDot className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Refresh
              </span>
            </Button>
            <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
              <File className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only">Export</span>
            </Button>
          </div>
        </div>
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Reviews</CardTitle>
            <CardDescription>Recent reviews from your store.</CardDescription>
          </CardHeader>
          <CardContent>
            <TabsContent value="all">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Ratings
                    </TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Status
                    </TableHead>
                    <TableHead className="hidden md:table-cell">Date</TableHead>
                    <TableHead className="sr-only">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>{renderAllReviews()}</TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="approved">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden sm:table-cell">Type</TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Status
                    </TableHead>
                    <TableHead className="hidden md:table-cell">Date</TableHead>
                    <TableHead className="sr-only">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>{renderApprovedReviews()}</TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="rejected">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden sm:table-cell">Type</TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Status
                    </TableHead>
                    <TableHead className="hidden md:table-cell">Date</TableHead>
                    <TableHead className="sr-only">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>{renderRejectedReviews()}</TableBody>
              </Table>
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  );
}

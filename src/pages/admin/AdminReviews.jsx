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
import { useQuotationFunctions } from "@/firebase/firbase";
import { useEffect, useState } from "react";
import QuotationStatusBadge from "@/components/QuotationStatusBadge";
export default function AdminReviews() {
  const [loading, setLoading] = useState(false);
  const [fulFilledLoading, setFulFilledLoading] = useState(false);
  const [declinedLoading, setDeclinedLoading] = useState(false);
  const [refundedLoading, setRefundedLoading] = useState(false);
  const [allQuotations, setAllQuotations] = useState([]);
  const [generalQuotations, setGeneralQuotations] = useState([]);
  const [primaryQuotations, setPrimaryQuotations] = useState([]);

  const { getAllQuotationsbyType, updateQuotationStatusId } =
    useQuotationFunctions();

  const handleGetReviews = async () => {
    const primaryQuotationsData = await getAllQuotationsbyType("primary");
    const generalQuotationsData = await getAllQuotationsbyType("general");
    const allQuotations = primaryQuotationsData?.data.concat(
      generalQuotationsData?.data
    );

    console.log("setting_quotations_to_state ...");

    setAllQuotations(allQuotations);
    setGeneralQuotations(generalQuotationsData?.data);
    setPrimaryQuotations(primaryQuotationsData?.data);
    console.log("allQuotations >> ", allQuotations);
  };

  useEffect(() => {
    handleGetQuotations();
  }, []);

  // Render Table
  const renderAllReviews = () => {
    console.log("all_quotations >> ", allQuotations);
    if (loading) {
      return (
        <TableRow>
          <TableCell colSpan={7} className="text-center">
            Fetching Quotations. Please wait...
          </TableCell>
        </TableRow>
      );
    } else if (!allQuotations || allQuotations?.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={7} className="text-center">
            No quotation in store
          </TableCell>
        </TableRow>
      );
    } else {
      return allQuotations?.map((quotation, index) => (
        <TableRow>
          <TableCell>
            <div className="font-medium">{quotation?.full_name}</div>
            <div className="hidden text-sm text-muted-foreground md:inline">
              {quotation?.email}
            </div>
          </TableCell>
          <TableCell className="hidden sm:table-cell">
            {quotation?.type}
          </TableCell>
          <TableCell className="hidden sm:table-cell">
            <QuotationStatusBadge status={quotation?.status} />
          </TableCell>
          <TableCell className="hidden md:table-cell">
            {quotation?.createdAt}
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
                  <DialogTitle>Quotation No #{quotation?.id}</DialogTitle>
                </DialogHeader>
                <div className="p-4 bg-gray-200 rounded-lg max-h-80 overflow-y-auto">
                  <p className="mb-2 font-semibold">ID:</p>
                  <p className="mb-2 font-bold">{quotation?.id}</p>
                  <p className="mb-2 font-semibold">Phone Number:</p>
                  <p className="mb-2 font-bold">{quotation?.phone_number}</p>
                  <p className="mb-2 font-semibold">Status:</p>
                  <p className="mb-2 font-bold">{quotation?.status}</p>
                  <p className="mb-2 font-semibold">Message:</p>
                  <p className="mb-2 font-bold">{quotation?.message}</p>
                  <p className="mb-2 font-semibold">Created At:</p>
                  <p className="mb-2 font-bold">{quotation?.createdAt}</p>
                  <p className="mb-2 font-semibold">Email:</p>
                  <p className="mb-2 font-bold">{quotation?.email}</p>
                  <p className="mb-2 font-semibold">Full Name:</p>
                  <p className="mb-2 font-bold">{quotation?.full_name}</p>
                  <p className="mb-2 font-semibold">Type:</p>
                  <p className="mb-2 font-bold">{quotation?.type}</p>
                </div>
                <div className="my-4 flex justify-between">
                  <button
                    onClick={() =>
                      handleMarkAsFulFilled(quotation?.id, quotation?.type)
                    }
                    className="bg-none border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded transition-colors duration-300"
                  >
                    {fulFilledLoading ? "loading ..." : "Mark as Fulfilled"}
                  </button>
                  <button
                    onClick={() =>
                      handleMarkAsDeclined(quotation?.id, quotation?.type)
                    }
                    className="bg-none border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold py-1 px-2 rounded transition-colors duration-300"
                  >
                    {declinedLoading ? "loading ..." : "Mark as Declined"}
                  </button>
                  <button
                    onClick={() =>
                      handleMarkAsRefunded(quotation?.id, quotation?.type)
                    }
                    className="bg-none border border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-bold py-1 px-2 rounded transition-colors duration-300"
                  >
                    {refundedLoading ? "loading ..." : "Mark as Refunded"}
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
    console.log("primary_quotations >> ", primaryQuotations);
    if (loading) {
      return (
        <TableRow>
          <TableCell colSpan={7} className="text-center">
            Fetching Quotations. Please wait...
          </TableCell>
        </TableRow>
      );
    } else if (!primaryQuotations || primaryQuotations?.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={7} className="text-center">
            No quotation in store
          </TableCell>
        </TableRow>
      );
    } else {
      return primaryQuotations.map((quotation, index) => (
        <TableRow>
          <TableCell>
            <div className="font-medium">{quotation?.full_name}</div>
            <div className="hidden text-sm text-muted-foreground md:inline">
              {quotation?.email}
            </div>
          </TableCell>
          <TableCell className="hidden sm:table-cell">
            {quotation?.type}
          </TableCell>
          <TableCell className="hidden sm:table-cell">
            <QuotationStatusBadge status={quotation?.status} />
          </TableCell>
          <TableCell className="hidden md:table-cell">
            {quotation?.createdAt}
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
                  <DialogTitle>Quotation No #{quotation?.id}</DialogTitle>
                </DialogHeader>
                <div className="p-4 bg-gray-200 rounded-lg max-h-80 overflow-y-auto">
                  <p className="mb-2 font-semibold">ID:</p>
                  <p className="mb-2 font-bold">{quotation?.id}</p>
                  <p className="mb-2 font-semibold">Phone Number:</p>
                  <p className="mb-2 font-bold">{quotation?.phone_number}</p>
                  <p className="mb-2 font-semibold">Status:</p>
                  <p className="mb-2 font-bold">{quotation?.status}</p>
                  <p className="mb-2 font-semibold">Message:</p>
                  <p className="mb-2 font-bold">{quotation?.message}</p>
                  <p className="mb-2 font-semibold">Created At:</p>
                  <p className="mb-2 font-bold">{quotation?.createdAt}</p>
                  <p className="mb-2 font-semibold">Email:</p>
                  <p className="mb-2 font-bold">{quotation?.email}</p>
                  <p className="mb-2 font-semibold">Full Name:</p>
                  <p className="mb-2 font-bold">{quotation?.full_name}</p>
                  <p className="mb-2 font-semibold">Type:</p>
                  <p className="mb-2 font-bold">{quotation?.type}</p>
                </div>
                <div className="my-4 flex justify-between">
                  <button
                    onClick={() =>
                      handleMarkAsFulFilled(quotation?.id, quotation?.type)
                    }
                    className="bg-none border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded transition-colors duration-300"
                  >
                    {fulFilledLoading ? "loading ..." : "Mark as Fulfilled"}
                  </button>
                  <button
                    onClick={() =>
                      handleMarkAsDeclined(quotation?.id, quotation?.type)
                    }
                    className="bg-none border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold py-1 px-2 rounded transition-colors duration-300"
                  >
                    {declinedLoading ? "loading ..." : "Mark as Declined"}
                  </button>
                  <button
                    onClick={() =>
                      handleMarkAsRefunded(quotation?.id, quotation?.type)
                    }
                    className="bg-none border border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-bold py-1 px-2 rounded transition-colors duration-300"
                  >
                    {refundedLoading ? "loading ..." : "Mark as Refunded"}
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
    console.log("general_quotations >> ", generalQuotations);
    if (loading) {
      return (
        <TableRow>
          <TableCell colSpan={7} className="text-center">
            Fetching Quotations. Please wait...
          </TableCell>
        </TableRow>
      );
    } else if (!generalQuotations || generalQuotations.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={7} className="text-center">
            No quotation in store
          </TableCell>
        </TableRow>
      );
    } else {
      return generalQuotations.map((quotation, index) => (
        <TableRow>
          <TableCell>
            <div className="font-medium">{quotation?.full_name}</div>
            <div className="hidden text-sm text-muted-foreground md:inline">
              {quotation?.email}
            </div>
          </TableCell>
          <TableCell className="hidden sm:table-cell">
            {quotation?.type}
          </TableCell>
          <TableCell className="hidden sm:table-cell">
            <QuotationStatusBadge status={quotation?.status} />
          </TableCell>
          <TableCell className="hidden md:table-cell">
            {quotation?.createdAt}
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
                  <DialogTitle>Quotation No #{quotation?.id}</DialogTitle>
                </DialogHeader>
                <div className="p-4 bg-gray-200 rounded-lg max-h-80 overflow-y-auto">
                  <p className="mb-2 font-semibold">ID:</p>
                  <p className="mb-2 font-bold">{quotation?.id}</p>
                  <p className="mb-2 font-semibold">Phone Number:</p>
                  <p className="mb-2 font-bold">{quotation?.phone_number}</p>
                  <p className="mb-2 font-semibold">Status:</p>
                  <p className="mb-2 font-bold">{quotation?.status}</p>
                  <p className="mb-2 font-semibold">Message:</p>
                  <p className="mb-2 font-bold">{quotation?.message}</p>
                  <p className="mb-2 font-semibold">Created At:</p>
                  <p className="mb-2 font-bold">{quotation?.createdAt}</p>
                  <p className="mb-2 font-semibold">Email:</p>
                  <p className="mb-2 font-bold">{quotation?.email}</p>
                  <p className="mb-2 font-semibold">Full Name:</p>
                  <p className="mb-2 font-bold">{quotation?.full_name}</p>
                  <p className="mb-2 font-semibold">Type:</p>
                  <p className="mb-2 font-bold">{quotation?.type}</p>
                </div>
                <div className="my-4 flex justify-between">
                  <button
                    onClick={() =>
                      handleMarkAsFulFilled(quotation?.id, quotation?.type)
                    }
                    className="bg-none border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-2 rounded transition-colors duration-300"
                  >
                    {fulFilledLoading ? "loading ..." : "Mark as Fulfilled"}
                  </button>
                  <button
                    onClick={() =>
                      handleMarkAsDeclined(quotation?.id, quotation?.type)
                    }
                    className="bg-none border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold py-1 px-2 rounded transition-colors duration-300"
                  >
                    {declinedLoading ? "loading ..." : "Mark as Declined"}
                  </button>
                  <button
                    onClick={() =>
                      handleMarkAsRefunded(quotation?.id, quotation?.type)
                    }
                    className="bg-none border border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-bold py-1 px-2 rounded transition-colors duration-300"
                  >
                    {refundedLoading ? "loading ..." : "Mark as Refunded"}
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
    setFulFilledLoading(true);
    const status = "approved";
    try {
      const updateQuotationStatusResponse = await updateQuotationStatusId(
        id,
        status,
        type
      );
      if (updateQuotationStatusResponse?.success) {
        alert("successfully updated the status of this quotation");
        console.log(
          "update_quotation_status_response >> ",
          updateQuotationStatusResponse
        );
      }
      setFulFilledLoading(false);
    } catch (error) {
      console.log("an err aoccured trying to mark quotation as fullfiled");
      setFulFilledLoading(false);
    }
  };
  const handleRejectReview = async (id, type) => {
    setDeclinedLoading(true);
    const status = "rejected";
    try {
      const updateQuotationStatusResponse = await updateQuotationStatusId(
        id,
        status,
        type
      );
      if (updateQuotationStatusResponse?.success) {
        alert("successfully updated the status of this quotation");
        console.log(
          "update_quotation_status_response >> ",
          updateQuotationStatusResponse
        );
      }
      setDeclinedLoading(false);
    } catch (error) {
      console.log("an err aoccured trying to mark quotation as Declined");
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
                <TableBody>{renderAllQuotations()}</TableBody>
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

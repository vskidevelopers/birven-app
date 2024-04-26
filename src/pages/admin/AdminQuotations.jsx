import { ListFilter, File, MoreHorizontal } from "lucide-react";
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
export default function AdminQuotations() {
  const [loading, setLoading] = useState(false);
  const [allQuotations, setAllQuotations] = useState([]);
  const [generalQuotations, setGeneralQuotations] = useState([]);
  const [primaryQuotations, setPrimaryQuotations] = useState([]);

  const { getAllQuotationsbyType } = useQuotationFunctions();

  const handleGetQuotations = async () => {
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
  const renderAllQuotations = () => {
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
            <Badge className="text-xs" variant="secondary">
              {quotation?.status}
            </Badge>
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
                <div>
                  <p>ID: {quotation?.id}</p>
                  <p>Phone Number: {quotation?.phone_number}</p>
                  <p>Status: {quotation?.status}</p>
                  <p>Message: {quotation?.message}</p>
                  <p>Created At: {quotation?.createdAt}</p>
                  <p>Email: {quotation?.email}</p>
                  <p>Full Name: {quotation?.full_name}</p>
                  <p>Type: {quotation?.type}</p>
                </div>
              </DialogContent>
            </Dialog>
          </TableCell>
        </TableRow>
      ));
    }
  };
  const renderPrimaryQuotations = () => {
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
            <Badge className="text-xs" variant="secondary">
              {quotation?.status}
            </Badge>
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
                <div>
                  <p>ID: {quotation?.id}</p>
                  <p>Phone Number: {quotation?.phone_number}</p>
                  <p>Status: {quotation?.status}</p>
                  <p>Message: {quotation?.message}</p>
                  <p>Created At: {quotation?.createdAt}</p>
                  <p>Email: {quotation?.email}</p>
                  <p>Full Name: {quotation?.full_name}</p>
                  <p>Type: {quotation?.type}</p>
                </div>
              </DialogContent>
            </Dialog>
          </TableCell>
        </TableRow>
      ));
    }
  };
  const renderGeneralQuotations = () => {
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
            <Badge className="text-xs" variant="secondary">
              {quotation?.status}
            </Badge>
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
                <div>
                  <p>ID: {quotation?.id}</p>
                  <p>Phone Number: {quotation?.phone_number}</p>
                  <p>Status: {quotation?.status}</p>
                  <p>Message: {quotation?.message}</p>
                  <p>Created At: {quotation?.createdAt}</p>
                  <p>Email: {quotation?.email}</p>
                  <p>Full Name: {quotation?.full_name}</p>
                  <p>Type: {quotation?.type}</p>
                </div>
              </DialogContent>
            </Dialog>
          </TableCell>
        </TableRow>
      ));
    }
  };

  return (
    <div>
      <Tabs defaultValue="all">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="primary">Primary</TabsTrigger>
            <TabsTrigger value="general">General</TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 gap-1 text-sm"
                >
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only">Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Fulfilled
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Declined</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Refunded</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
              <File className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only">Export</span>
            </Button>
          </div>
        </div>
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Quotations</CardTitle>
            <CardDescription>
              Recent quotation requests from your store.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TabsContent value="all">
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
                <TableBody>{renderAllQuotations()}</TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="primary">
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
                <TableBody>{renderPrimaryQuotations()}</TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="general">
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
                <TableBody>{renderGeneralQuotations()}</TableBody>
              </Table>
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  );
}

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { RefreshCcwDot, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TeamMemberCard from "@/components/admin/TeamMemberCard";
import AddTeamMemberForm from "@/components/admin/AddTeamMemberForm";
import { useTeamFunctions } from "@/firebase/firbase";
const teams = [
  {
    id: 1,
    profilePicture: "https://example.com/profile1.jpg",
    name: "Alice Johnson",
    designation: "Team Lead",
    bio: "Alice has over 10 years of experience in project management and is passionate about leading cross-functional teams.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/alicejohnson",
      twitter: "https://twitter.com/alicejohnson",
      github: "https://github.com/alicejohnson",
    },
  },
  {
    id: 2,
    profilePicture: "https://example.com/profile2.jpg",
    name: "Bob Smith",
    designation: "Senior Developer",
    bio: "Bob is a full-stack developer specializing in React and Node.js. He loves contributing to open source projects.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/bobsmith",
      twitter: "https://twitter.com/bobsmith",
      github: "https://github.com/bobsmith",
    },
  },
  {
    id: 3,
    profilePicture: "https://example.com/profile3.jpg",
    name: "Charlie Brown",
    designation: "UI/UX Designer",
    bio: "Charlie has a keen eye for design and a strong background in user experience. He aims to create intuitive interfaces.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/charliebrown",
      twitter: "https://twitter.com/charliebrown",
      dribbble: "https://dribbble.com/charliebrown",
    },
  },
];

export default function AdminTeams() {
  const [loading, setLoading] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);

  const { getAllTeamMembers } = useTeamFunctions();

  const fetchTeamMembers = async () => {
    setLoading(true);
    try {
      const fetchAllTeamMembersResponse = await getAllTeamMembers();
      console.log("get_all_members_response >> ", fetchAllTeamMembersResponse);
      setTeamMembers(fetchAllTeamMembersResponse?.data);
      setLoading(false);
    } catch (error) {
      console.error("error_response_fetching_team_members >> ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("fetching_team_members_please_wait ... ");
    fetchTeamMembers();
  }, []);

  const renderMembers = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center h-full">
          <div className="text-center py-4 px-6">
            Fetching members. Please wait...
          </div>
        </div>
      );
    } else if (!teamMembers || teamMembers.length === 0) {
      return (
        <div className="flex justify-center items-center h-full">
          <div className="text-center py-4 px-6">
            Fetching Members found in the database
          </div>
        </div>
      );
    } else {
      return teamMembers?.map((member, index) => (
        <TeamMemberCard key={index} member={member} />
      ));
    }
  };

  return (
    <div>
      <Tabs defaultValue="all">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            {/* Add more tabs if needed */}
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-1"
              onClick={fetchTeamMembers}
            >
              <RefreshCcwDot className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Refresh
              </span>
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" className="h-8 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add New Member
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add a New Team Member</DialogTitle>

                  <AddTeamMemberForm />
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Team</CardTitle>
            <CardDescription>
              Create and manage team member profiles here
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TabsContent value="all">
              <div className="flex flex-wrap">{renderMembers()}</div>
            </TabsContent>
          </CardContent>
        </Card>
        {/* Add more TabsContent if needed */}
      </Tabs>
    </div>
  );
}

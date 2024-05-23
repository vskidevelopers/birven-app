import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MoreHorizontal } from "lucide-react";
import { useTeamFunctions } from "@/firebase/firbase";

const TeamMemberCard = ({ member }) => {
  const { deleteTeamMember } = useTeamFunctions();
  const handleDelete = async (id) => {
    // Add your delete logic here
    console.log(`Deleting member with id: ${id}`);
    const isConfirmed = window.confirm("Are you sure you want to delete?");

    if (isConfirmed) {
      console.log("Deleting...");
      const deleteTeamMemberResponse = await deleteProduct(id);
      console.log("delete_product_response >> ", deleteProductResponse);
    } else {
      // Cancel delete operation
      console.log("Delete operation canceled.");
    }
  };

  return (
    <Card className="m-4">
      <CardHeader className="flex flex-row">
        <img
          src={member.profilePicture}
          alt={`${member.name}'s profile`}
          className="rounded-full w-16 h-16"
        />
        <div className="ml-4">
          <CardTitle>{member.name}</CardTitle>
          <CardDescription>{member.designation}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p>{member.bio}</p>
      </CardContent>
      <CardFooter>
        {member && (
          <div>
            {member.instagram && (
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="link">Instagram</Button>
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="link">LinkedIn</Button>
              </a>
            )}
            {member.facebook && (
              <a
                href={member.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="link">Facebook</Button>
              </a>
            )}
            {member.twitter && (
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="link">X (formally Twitter)</Button>
              </a>
            )}
          </div>
        )}

        <Dialog>
          <DialogTrigger>
            <Button size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">View More</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{member.name}</DialogTitle>
            </DialogHeader>
            <div className="p-4 bg-gray-200 rounded-lg">
              <p>
                <strong>Full Name:</strong> {member.name}
              </p>
              <p>
                <strong>Designation:</strong> {member.designation}
              </p>
              <p>
                <strong>Bio:</strong> {member.bio}
              </p>
              {member && (
                <div>
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="link">Instagram</Button>
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="link">LinkedIn</Button>
                    </a>
                  )}
                  {member.facebook && (
                    <a
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="link">Facebook</Button>
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="link">X (formerly Twitter)</Button>
                    </a>
                  )}
                </div>
              )}
            </div>
            <div className="flex justify-end mt-4">
              <Button
                variant="destructive"
                onClick={() => handleDelete(member.id)}
              >
                Delete This Member?
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default TeamMemberCard;

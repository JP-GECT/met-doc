"use client";

import { useState } from "react";
import { useRouter } from "next/router";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Plus } from "lucide-react";

// import { projects } from "@/constants/projects";
import { DialogClose } from "@radix-ui/react-dialog";

interface AddProjectProps {
  text?: String;
}

// export default function AddProject({ text }: AddProjectProps) {
const AddProject = ({ text }: AddProjectProps) => {
  const [data, setData] = useState<any>({
    name: "",
    description: "",
    team_leader: "",
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    const router = useRouter();
    router.push("/");
    // const formData = new FormData();
    // formData.append("name", data.name);
    // formData.append("description", data.description);
    // formData.append("team_leader", data.team_leader);
    try {
      // const response = await axios.post(
      //   "http://localhost:3001/create",
      //   formData,
      //   {
      //     headers: {
      //       // "Content-Type": "multipart/form-data",
      //       "Content-Type": "multipart/form-data",
      //     },
      //     // body: JSON.stringify(data),
      //   }
      // );
      const response = await fetch(
        "http://localhost:8000/data/create-new-project",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      console.log("Project created:");
      console.log(response);
      console.log(typeof response);
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full flex gap-2"
        >
          <Plus />
          {text}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Project</DialogTitle>
          <DialogDescription>
            Add a new project to your dashboard
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="name"
              className="text-right"
            >
              Name
            </Label>
            <Input
              id="name"
              name="name"
              onChange={handleChange}
              // defaultValue="Project"
              placeholder="Project name"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="username"
              className="text-right"
            >
              Description
            </Label>
            <Input
              id="description"
              name="description"
              onChange={handleChange}
              // defaultValue="Description of the project"
              placeholder="Description of the project"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="name"
              className="text-right"
            >
              Team Leader
            </Label>
            <Input
              id="team_leader"
              name="team_leader"
              onChange={handleChange}
              // defaultValue="Project"
              placeholder="Team Leader"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="submit"
              onClick={handleSave}
            >
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddProject;

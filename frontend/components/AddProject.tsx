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

import { projects } from "@/constants/projects";
import { DialogClose } from "@radix-ui/react-dialog";

interface AddProjectProps {
  text?: String;
}

export function AddProject({ text }: AddProjectProps) {
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
              id="username"
              // defaultValue="Description of the project"
              placeholder="Description of the project"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="submit"
              onClick={() => {
                console.log(projects);
                projects.push({
                  id: projects.length + 1,
                  name: "new project",
                  description: "new description",
                });
                // console.log(projects);
              }}
            >
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

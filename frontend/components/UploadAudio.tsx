"use client";

import { useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import AudioForm from "./AudioForm";

const UploadAudio = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    // e.preventDefault();
    // const formData = new FormData();
    // formData.append("audio", file);
    console.log(file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        // body: formData,
        body: JSON.stringify({ file: file }),
      });

      // Handle response
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Upload Audio</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload Audio</DialogTitle>
          <DialogDescription>Upload the meeting audio</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            {/* <Label
              htmlFor="name"
              className="text-right"
            >
              Name
            </Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="username"
              className="text-right"
            >
              Username
            </Label> */}
            <AudioForm setFile={setFile} />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant="ghost"
              onClick={(e: any) => {
                console.log(file);
              }}
            >
              Upload
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UploadAudio;

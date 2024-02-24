"use client";

import axios from "axios";

import { useState } from "react";
import { ArrowUp, Mic } from "lucide-react";

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
  // const [file, setFile] = useState(null);
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState<string>("");

  const handleUpload = async (e: any) => {
    // e.preventDefault();
    console.log("Hi");
    if (!file) {
      console.error("No file selected");
      return;
    }
    const formData = new FormData();
    formData.append("audioFile", file);
    formData.append("text", text);
    // formData.append("id", 1);
    console.log(file);

    // try {
    //   const response = await fetch("http://localhost:8000/trans", {
    //     method: "POST",
    //     // headers: {
    //     //   "Content-Type": "application/json",
    //     // },
    //     body: formData,
    //     // body: JSON.stringify({ file: file, id: 1 }),
    //     // body: JSON.stringify({ id: 1 }),
    //     // body: JSON.stringify({ file: file }),
    //   });

    //   // Handle response
    // } catch (error) {
    //   console.error("Error uploading file:", error);
    //   console.log("Here");
    // }
    try {
      const response = await axios.post(
        'http://localhost:8000/transcribe',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log("File uploaded successfully");
      // Optionally, you can perform some action after successful upload
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Upload Audio</Button> */}
        <Button
          variant="ghost"
          className="rounded-full p-3 border-none"
        >
          {/* <ChevronUp /> */}
          {/* <ArrowUpSquare /> */}
          {/* <ArrowUp /> */}
          <Mic className="h-16 w-16" />
          {/* Upload Audio */}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload Audio</DialogTitle>
          <DialogDescription>Upload the meeting audio</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <AudioForm setFile={setFile} />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant="ghost"
              type="submit"
              onClick={handleUpload}
              // onSubmit={handleUpload}
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

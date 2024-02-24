"use client";

import { useState } from "react";

interface AudioFormProps {
  setFile: (file: any) => void;
}

const AudioForm = ({ setFile }: AudioFormProps) => {
  // const [file, setFile] = useState(null);

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  // const handleSubmit = async (e: any) => {
  // e.preventDefault();
  // const formData = new FormData();
  // formData.append("audio", file);
  // console.log(file);

  // try {
  //   const response = await fetch("/api/upload", {
  //     method: "POST",
  //     // body: formData,
  // body: JSON.stringify({ file: file }),
  //   });

  //   // Handle response
  // } catch (error) {
  //   console.error("Error uploading file:", error);
  // }
  // };

  return (
    <form>
      <input
        type="file"
        onChange={handleFileChange}
        className=""
      />
      {/* <button type="submit">Upload</button> */}
    </form>
  );
};

export default AudioForm;

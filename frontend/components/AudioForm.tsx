"use client";

import { useState } from "react";

interface AudioFormProps {
  setFile: (file: any) => void;
}

const AudioForm = ({ setFile }: AudioFormProps) => {
  // const [file, setFile] = useState(null);

  // const handleFileChange = (e: any) => {
  //   setFile(e.target.files[0]);
  // };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <form>
      <input
        type="file"
        onChange={handleFileChange}
        className=""
      />
    </form>
  );
};

export default AudioForm;

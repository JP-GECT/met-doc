"use client";
import Sidebar from "./sidebar";
import { useState } from "react";
import { Plus } from "lucide-react";
import { AddProject } from "@/components/AddProject";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
  projects: any;
  setProjects: any;
}

const page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [projects, setProjects] = useState<any>([]);
  const action = () => {
    setProjects([...projects, "new project"]);
  };
  return (
    <div className=" min-h-screen w-[100%] flex justify-center items-center">
      <AddProject action={action} />
    </div>
  );
};
export default page;

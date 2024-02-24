"use client";
// import { useState } from "react";
import { AddProject } from "@/components/AddProject";
import Stats from "@/components/Stats";

// interface SidebarProps {
//   sidebarOpen: boolean;
//   setSidebarOpen: (arg: boolean) => void;
//   projects: any;
//   setProjects: any;
// }

const page = () => {
  // const [sidebarOpen, setSidebarOpen] = useState(true);
  // const [projects, setProjects] = useState<any>([]);

  return (
    <div className="flex flex-col w-[100%] gap-5">
      <div className="flex justify-between items-center my-8 font-bold mx-5 min-h-[20vh]">
        <span>Projects</span>
        <AddProject text={"Create Project"} />
      </div>
      <div className="min-h-60vh flex gap-3">
        <Stats />
      </div>
    </div>
  );
};
export default page;

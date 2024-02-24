"use client";
// import { useState } from "react";
import { AddProject } from "@/components/AddProject";
import OverallStats from "@/components/OverallStats";

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
      <div className="flex justify-between items-center my-8 font-bold mx-5 min-h-[15vh]">
        <span className="text-3xl">Projects</span>
        <AddProject text={"Create Project"} />
      </div>
      <div className="min-h-60vh flex gap-3">
        <OverallStats />
      </div>
    </div>
  );
};
export default page;

// "use client";

import Link from "next/link";
import { useRef } from "react";

import { projects } from "@/constants/projects";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const sidebar = useRef<any>(null);
  const trigger = useRef<any>(null);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* ============================ Sidebar header============================ */}
      <div className="flex items-center justify-between gap-2 px-6 py-5 lg:py-6">
        <Link
          href="/"
          className="text-[20px] text-white"
        >
          Projects
        </Link>
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden text-white"
        >
          close
        </button>
      </div>
      {/* ============================ Sidebar header============================ */}

      {/* ============================ Sidebar topic search============================ */}

      {/* ============================ Sidebar topic search============================ */}

      {/* ============================ Sidebar topics============================ */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <div className="flex flex-col start justify-between px-6 py-3 text-white hover:bg-gray-700 dark:hover:bg-gray-600">
          <span>Project1</span>
          <span className="text-sm text-gray-400">description</span>
        </div> */}

        {projects.map((project: any) => (
          <div
            key={project.id}
            className="flex flex-col start justify-between px-6 py-3 text-white hover:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer"
          >
            <Link href={`/dashboard/${project.id}`}>{project.name}</Link>
            <span className="text-sm text-gray-400">{project.description}</span>
          </div>
        ))}
      </div>
      {/* ============================ Sidebar topics============================ */}
    </aside>
  );
};

export default Sidebar;

 "use client";

import Link from "next/link";
// import { useRef } from "react";

// import { projects } from "@/constants/projects";
import { getProjectList } from "@/constants/getProjectList";
import { useSharedData } from "@/app/store";



const Sidebar =  () => {
  // const sidebar = useRef<any>(null);
  // const trigger = useRef<any>(null);

  // const response = await getProjectList();
  const { projects, setProjects } = useSharedData();


  // if (response.isError) {
  //   return <div>Error</div>;
  // }

  // const projects = response.data;
  // const projects = [{project_name:"joseph",_id:3435,project_description:"ksajfklajsfkl"},{project_name:"joseph",_id:3435,project_description:"ksajfklajsfkl"},{project_name:"joseph",_id:3435,project_description:"ksajfklajsfkl"}];
  // setProjects(response.data);

  return (
    <aside
     
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72 flex-col overflow-y-hidden bg-[#212b36] duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 
        
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

        {projects.map((project: any, index: number) => (
          <div
            key={index}
            className="flex flex-col start justify-between px-6 py-3 text-white hover:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer"
          >
            <Link href={`/dashboard/${project._id}`}>{project.project_name}</Link>
            <span className="text-sm text-gray-400">{project.project_description}</span>
          </div>
        ))}
      </div>
      {/* ============================ Sidebar topics============================ */}
    </aside>
  );
};

export default Sidebar;

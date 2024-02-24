"use client"
import Sidebar from "./sidebar";
import { useState } from "react";

interface SidebarProps{
  sidebarOpen: boolean;
  setSidebarOpen:(arg:boolean) => void;
}

const page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return <div>        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/></div>;
};
export default page;

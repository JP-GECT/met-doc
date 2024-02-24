import { projects } from "@/constants/projects";
import { dummy } from "@/constants/dummy";

import { getProject } from "@/constants/getProject";

import UploadAudio from "@/components/UploadAudio";
import ProjectStats from "@/components/ProjectStats";
import ProjectTasks from "@/components/ProjectTasks";
import ProjectIssues from "@/components/ProjectIssues";
import SemiCircleChart from "@/components/SemiCircleChart";
import BudgetCard from "@/components/BudgetCard";
import DateCard from "@/components/DateCard";
import NewProject from "@/components/pages/NewProject";
import { TableDemo } from "@/components/TaskTable";
const page = async ({ params }: { params: { id: String } }) => {
  // const project = projects.find((project) => project.id === +params.id);

  const pr = await getProject(params.id);
  console.log(pr)
  if (pr.isError) {
    return <div>Error</div>;
  }

  if (pr.isNew) {
    return <NewProject />;
  }
  const project = pr.data

  return (
    <div className="flex flex-col w-[100%] gap-5 max-h-screen overflow-y-scroll bg-[#624bff]">
      <div>
        <div className="flex justify-between items-center my-8 font-bold mx-5 px-5">
          <span className="text-3xl text-black">{project?.project_name}</span>
          <UploadAudio />
        </div>
        <div className="min-h-[15vh] flex gap-3 mb-5">
          <ProjectStats />
        </div>
      </div>
      <div className="px-5 flex flex-col gap-5">
        {/* <div className="flex justify-between items-center">
          <SemiCircleChart />
          <BudgetCard cost={dummy.estimated_cost} />
          <DateCard end_date={dummy?.scope?.end_date} />
        </div> */}
        {/* <ProjectTasks /> */}
        <TableDemo />

        <div className="flex gap-4">
          <div className="flex-1">
            <ProjectIssues />
          </div>
          <div className="flex-1">
            {/* <SemiCircleChart /> */}
            <h1 className="text-xl font-bold">Summary</h1>
            <p>{dummy.summary}</p>
          </div>
          <div className="mt-10 max-w-[50%] rounded-2xl"></div>
        </div>
        {/* <ProjectTasks /> */}
      </div>
      <div></div>
    </div>
  );
};
export default page;

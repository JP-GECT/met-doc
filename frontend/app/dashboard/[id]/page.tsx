import { projects } from "@/constants/projects";
// import { dummy } from "@/constants/dummy";

import UploadAudio from "@/components/UploadAudio";
import ProjectStats from "@/components/ProjectStats";
import ProjectTasks from "@/components/ProjectTasks";
import ProjectIssues from "@/components/ProjectIssues";
import SemiCircleChart from "@/components/SemiCircleChart";

const page = ({ params }: { params: { id: String } }) => {
  const project = projects.find((project) => project.id === +params.id);

  return (
    <div className="flex flex-col w-[100%] gap-5 max-h-screen overflow-y-scroll">
      <div>
        <div className="flex justify-between items-center my-8 font-bold mx-5 px-5">
          <span className="text-3xl">{project?.name}</span>
          <UploadAudio />
        </div>
        <div className="min-h-[15vh] flex gap-3 mb-5">
          <ProjectStats />
        </div>
      </div>
      <div className="px-5 flex flex-col gap-5">
        <ProjectTasks />
        <div className="flex gap-4">
          <div>
            <ProjectIssues />
          </div>
          <div>
            <SemiCircleChart />
          </div>
          <div className="mt-10 max-w-[60%] rounded-2xl"></div>
        </div>
        {/* <ProjectTasks /> */}
      </div>
      <div></div>
    </div>
  );
};
export default page;

import { projects } from "@/constants/projects";
// import { dummy } from "@/constants/dummy";

import UploadAudio from "@/components/UploadAudio";
import ProjectStats from "@/components/ProjectStats";

const page = ({ params }: { params: { id: String } }) => {
  const project = projects.find((project) => project.id === +params.id);

  return (
    <div className="flex flex-col w-[100%] gap-5">
      <div className="flex justify-between items-center my-8 font-bold mx-5 min-h-[15vh]">
        <span className="text-3xl">{project?.name}</span>
        <UploadAudio />
      </div>
      <div className="min-h-60vh flex gap-3">
        <ProjectStats />
      </div>
    </div>
  );
};
export default page;

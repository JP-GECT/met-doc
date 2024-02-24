// import { projects } from "@/constants/projects";
import { dummy } from "@/constants/dummy";

import UploadAudio from "@/components/UploadAudio";

const page = ({ params }: { params: { id: String } }) => {
  // const project = projects.find((project) => project.id === +params.id);

  //   return <div>Project{params.id}</div>;
  return (
    <div className="w-[100%] flex flex-col justify-center items-center">
      <span>{dummy?.project_name}</span>
      <span>{dummy?.project_description}</span>
      <UploadAudio />
    </div>
  );
};
export default page;

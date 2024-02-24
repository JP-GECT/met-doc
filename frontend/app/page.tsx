
import { Button } from "@/components/ui/button";
import AudioForm from "@/components/AudioForm";
import HomePage from "@/components/pages/HomePage";
// import { useSharedData } from "./store";
import { getProjectList } from "@/constants/getProjectList";

export default async function Home() {

  // await getProjectList()

  // const {projects, setProjects} = useSharedData()
  // const response = await getProjectList()
  // setProjects(response.data)

  return (
    <main className="flex flex-col justify-center items-center">
      <HomePage />
    </main>
  );
}

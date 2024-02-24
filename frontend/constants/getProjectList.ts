import { useSharedData } from "@/app/store";

export const getProjectList = async () => {
  const { projects, setProjects } = useSharedData();

  try {
    const response = await fetch(
      "http://localhost:8000/data/get-project-list",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setProjects(data);
    console.log(data);
    return { data: data };
  } catch (error) {
    return { isError: true };
  }
};

export const getProjectList = async () => {
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
    console.log(data);
    return { data: data };
  } catch (error) {
    return { isError: true };
  }
};

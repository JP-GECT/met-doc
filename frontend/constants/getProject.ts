export const getProject = async (id: any) => {
  try {
    const res = await fetch(`http://localhost:8000/data/get-project/${id}`);
    const data = await res.json();
    if (data.tasks === undefined) {
      return { data: data, isNew: true };
    }
    return { data: data, isNew: false };
  } catch (error) {
    return { data: null, isError: true };
  }
};

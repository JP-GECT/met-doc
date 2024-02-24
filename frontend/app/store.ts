import { create } from "zustand";

interface SharedState {
  projects: any; // Replace with the actual data type
  setProjects: (newProjects: any) => void;
}

export const useSharedData = create<SharedState>((set) => ({
  projects: [{_id: 1, project_name: "project", project_description: "description"}, {_id: 1, project_name: "project", project_description: "description"}],
  setProjects: (newProjects: any) =>
    // set((state) => ({ ...state, data: newProject })),
    set((state) => newProjects),
}));

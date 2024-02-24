import { dummy } from "@/constants/dummy";

const ProjectIssues = () => {
  const issues = dummy.issues;
  return (
    <div>
      <h2 className="font-bold text-2xl text-center">Issues</h2>
      {issues.map((issue: any, index: number) => (
        <p key={index}>{issue}</p>
      ))}
    </div>
  );
};

export default ProjectIssues;

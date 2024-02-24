import StatCard from "./StatCard";

import { project_stats } from "@/constants/stats";

interface StatsProps{
  project:any
}

const Stats = ({project}:StatsProps) => {
  return (
    <div className="flex gap-1 justify-around w-full">
     
        <StatCard
          title='Tasks'
          description='Total Tasks'
          content={project.tasks.length}
          footer=""
        />
         <StatCard
          title='Issues'
          description='Total Issues'
          content={project.issues.length}
          footer=""
        />
         <StatCard
          title='Members'
          description='Total Members'
          content={project.tasks.length}
          footer=""
        />
    </div>
  );
};
export default Stats;

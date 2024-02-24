import StatCard from "./StatCard";

import { project_stats } from "@/constants/stats";

const Stats = () => {
  return (
    <div className="flex gap-5 justify-around w-full">
      {project_stats.map((stat: any) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          description={stat.description}
          content={stat.content}
          footer={stat.footer}
        />
      ))}
    </div>
  );
};
export default Stats;

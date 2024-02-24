import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { dummy } from "@/constants/dummy";
import Avatar from "./Avatar";

const ProjectTasks = () => {
  const assigned_tasks = dummy.assigned;

  return (
    <div className="flex flex-col border-green-300 border-4 py-4">
      <h2 className="font-bold text-2xl text-center">Tasks</h2>
      <Accordion
        type="single"
        collapsible
        className="px-5"
      >
        {/* <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent> */}

        {assigned_tasks.map((task: any, index: number) => (
          <div key={`index`}>
            <AccordionItem value={`item-${index + 1}`}>
              <AccordionTrigger className="">{task.task_name}</AccordionTrigger>
              <AccordionContent className="flex  justify-between">
                <div className="flex gap-2 items-center">
                  <Avatar />
                  <span className=" font-bold">{task.assigned_to}</span>
                </div>
                <span className="font-extrabold">{task.time_estimation}</span>
                <span className="font-bold">{task.priority}</span>
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </div>
  );
};

export default ProjectTasks;

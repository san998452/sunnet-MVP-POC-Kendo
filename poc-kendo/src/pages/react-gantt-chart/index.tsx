import { DefaultTheme, Gantt } from "@dhtmlx/trial-react-gantt";
import TooltipContent from "../../components/constants/TooltipContent";
import { columns, scales, tasks, links } from "../../data";

export default function GanttChart() {
  return (
    <div style={{ height: "500px" }}>
      <DefaultTheme>
        <Gantt scales={scales} columns={columns} tasks={tasks} links={links} tooltip={(data) => <TooltipContent data={data} />}/>
      </DefaultTheme>
    </div>
  );
}

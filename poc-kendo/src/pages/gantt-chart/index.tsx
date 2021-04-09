import { useState } from "react";
import { DefaultTheme, MaterialTheme, Gantt } from "@dhtmlx/trial-react-gantt";
import TooltipContent from "../../components/constants/TooltipContent";
import { columns, scales, tasks, links } from "../../data";

export default function GanttChart() {
  const [isShowGrid, setShowGrid] = useState(false)
  return (
    <div style={{ height: "500px" }}>
      {/* <DefaultTheme> */}
      <button onClick={()=> setShowGrid(!isShowGrid)}>Show/hide Grid</button>
      <MaterialTheme>
        <Gantt
          scales={scales}
          columns={columns}
          tasks={tasks}
          links={links}
          tooltip={(data) => <TooltipContent data={data} />}
          grid={isShowGrid}
        />
      </MaterialTheme>
      {/* </DefaultTheme> */}
    </div>
  );
}

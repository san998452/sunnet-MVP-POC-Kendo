import { useEffect, useState } from "react";
import { DefaultTheme, MaterialTheme, Gantt } from "@dhtmlx/trial-react-gantt";
import TooltipContent from "../../components/constants/TooltipContent";
import { columns, scales, links } from "../../data";
import { exportPDF } from "@progress/kendo-drawing";
import { exportVisual } from "@progress/kendo-react-charts";
import { saveAs } from "@progress/kendo-file-saver";


const tasks =  [
  {
    "id": 1,
    "start_date": "2020-07-19",
    "duration": 20,
    "text": "Test Task",
    "progress": 1
  },
  {
    "id": 2,
    "start_date": "2019-11-17",
    "duration": 17,
    "text": "Task - 2  dsojcqptwxkkqwhrvuqsqpumsgwzrfewkyoypeyzrigujivjog",
    "progress": 93
  },
  {
    "id": 3,
    "start_date": "2021-11-20",
    "duration": 71,
    "text": "Task - 3  mvwhiogaqosrcwetjczczgkgdthdwcxnosaexrqbegolcalcyc",
    "progress": 41
  },
  {
    "id": 4,
    "start_date": "2019-11-24",
    "duration": 23,
    "text": "Task - 4  ctlahhqlmcytozbkgswmhwljrbisirzzyhfdoouaxqplkckpbk",
    "progress": 88
  },
  {
    "id": 5,
    "parent": 2,
    "start_date": "2019-12-30",
    "duration": 19,
    "text": "Task - 5  xjyseaqhgrwfoxxspmzaohsfduvkmwenfpdlenewfmipythpey",
    "progress": 57
  },
  {
    "id": 6,
    "parent": 4,
    "start_date": "2019-07-18",
    "duration": 66,
    "text": "Task - 6  twcylpyrpxgulpsoewynuunzsojjysgrlkgnbsomjtpqigxqcq",
    "progress": 43
  },
  {
    "id": 7,
    "parent": 2,
    "start_date": "2021-01-12",
    "duration": 25,
    "text": "Task - 7  dzltdmcwxkrbvryzbcuwwtemxxpaidqhmgigzgiftmgyezwwld",
    "progress": 98
  },
  {
    "id": 8,
    "parent": 2,
    "start_date": "2021-08-30",
    "duration": 84,
    "text": "Task - 8  necybqhnzjsrbcqpnhdpexqkzqpzznvljipngwqxhatlhuqcxy",
    "progress": 90
  },
  {
    "id": 9,
    "parent": 2,
    "start_date": "2019-12-06",
    "duration": 85,
    "text": "Task - 9  gueohxoljchjcuouttlfxnxsztgdpuyuykpfhdohalaxchotti",
    "progress": 4
  },
  {
    "id": 10,
    "parent": 1,
    "start_date": "2021-05-16",
    "duration": 70,
    "text": "Task - 10  idynzlgktocpmhuzvtiiyfaseeeflftthlarqkwvtesrvtzytq",
    "progress": 86
  }
]

export default function GanttChart() {
  const [isShowGrid, setShowGrid] = useState(false);
  const [ganttTasks, setTasks] = useState([])
  const [isLoading, setLoading] = useState(true)

  let obj = {
    id: null,
    start_date: "2020-11-07",
    duration: 8,
    text: "Gantt Lib",
    progress: 70,
    type: "project"
  }

  let _chart;

  useEffect(()=> {
    const getTasks = async () => {
      let res = await fetch('http://192.168.101.249:8094/api/user/ganttchart/')
      let { data } = await res.json()
      setTasks(data)
      setLoading(false)
    }

    getTasks()
  }, [])

  const onPDFExport = () => {
    const chartVisual = exportVisual(_chart);

    if (chartVisual) {
      exportPDF(chartVisual, {
        paperSize: "A4",
        landscape: true,
      }).then((dataURI) => saveAs(dataURI, "chart.pdf"));
    }
  };

  if(isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div style={{ height: "100vh" }}>
      {/* <button onClick={onPDFExport}>Export PDF</button> */}
      <MaterialTheme>
        <Gantt
          // ref={(cmp) => (_chart = cmp)}
          scales={scales}
          columns={columns}
          tasks={ganttTasks}
          // links={links}
          tooltip={(data) => <TooltipContent data={data} />}
          // grid={isShowGrid}
        />
      </MaterialTheme>
    </div>
  );
}

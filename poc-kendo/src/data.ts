// const scales = [
//     { unit: "month", step: 1, format: "MMMM yyy" },
//     { unit: "day", step: 1, format: "dd" }
// ];

const dayStyle = (a) => {
    const day = a.getDay() === 5 || a.getDay() === 6;
    return day ? "sday" : "";
};

const scales = [
    { unit: "year", step: 1, format: "yyyy" },
  { unit: "month", step: 2, format: "MMMM yyy" },
//   { unit: "week", step: 1, format: "w" },
  { unit: "day", step: 1, format: "d MMM" },
//   { unit: "day", step: 1, format: "d" },
]

const columns = [
    { name: "id", label: "ID", width: "50px"},
    { name: "text", label: "Task name", width: "100%" },
    { name: "start", label: "Start time", align: "center" },
    { name: "duration", label: "Duration", width: "70px", align: "center" },
    { name: "add-task", label: "", width: "50px", align: "center" }
];

const tasks = [
    {
        id: 1,
        open: true,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 2,
        parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 3,
        parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 5,
        parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 6,
        parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 7,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 8,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 9,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 10,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 11,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 12,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 13,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 14,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 15,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 16,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 17,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 18,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 19,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 20,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 21,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 22,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 23,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 24,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 25,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 26,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 27,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 28,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 29,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 30,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 31,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 32,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 33,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 34,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 35,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 36,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 37,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 38,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 39,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 40,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 41,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 42,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 43,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 44,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 45,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 46,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 47,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 48,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 49,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 50,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 51,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 52,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 53,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 54,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 55,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 56,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 57,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 58,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 59,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 60,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 61,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 62,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 63,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 64,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 65,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 66,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 67,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 68,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 69,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 70,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 71,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 72,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 73,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 74,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 75,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 76,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 77,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 78,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 79,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 80,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 81,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 82,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 83,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 84,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 85,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 86,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 87,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 88,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 89,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 90,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 91,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 93,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 94,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 95,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 96,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 97,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 98,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 99,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 100,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 101,
        // open: true,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 102,
        // parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 103,
        // parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 104,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 105,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 106,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 107,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 108,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 109,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 110,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 111,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 112,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 113,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 114,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 115,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 116,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 117,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 118,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 119,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 120,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 121,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 122,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 123,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 124,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 125,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 126,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 127,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 128,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 129,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 130,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 131,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 132,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 133,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 134,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 135,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 136,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 137,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 138,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 139,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 140,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 141,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 142,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 143,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 144,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 145,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 146,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 147,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 148,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 149,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 150,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 151,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 152,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 153,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 154,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 155,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 156,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 157,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 158,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 159,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 160,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 161,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 162,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 163,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 164,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 165,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 166,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 167,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 168,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 169,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 170,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 171,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 172,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 173,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 174,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 175,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 176,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 177,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 178,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 179,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 180,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 181,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 182,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 183,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 184,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 185,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 186,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 187,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 188,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 189,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 190,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 191,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 193,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 194,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 195,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 196,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 197,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 198,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 199,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 200,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 201,
        // open: true,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 202,
        // parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 203,
        // parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 204,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 205,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 206,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 207,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 208,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 209,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 210,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 211,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 212,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 213,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 214,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 215,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 216,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 217,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 218,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 219,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 220,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 221,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 222,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 223,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 224,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 225,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 226,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 227,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 228,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 229,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 230,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 231,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 232,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 233,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 234,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 235,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 236,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 237,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 238,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 239,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 240,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 241,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 242,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 243,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 244,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 245,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 246,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 247,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 248,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 249,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 250,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 251,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 252,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 253,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 254,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 255,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 256,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 257,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 258,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 259,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 260,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 261,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 262,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 263,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 264,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 265,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 266,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 267,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 268,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 269,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 270,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 271,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 272,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 273,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 274,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 275,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 276,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 277,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 278,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 279,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 280,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 281,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 282,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 283,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 284,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 285,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 286,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 287,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 288,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 289,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 290,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 291,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 293,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 294,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 295,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 296,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 297,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 298,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 299,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 300,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 301,
        // open: true,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 302,
        // parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 303,
        // parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 304,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 305,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 306,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 307,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 308,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 309,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 310,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 311,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 312,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 313,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 314,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 315,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 316,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 317,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 318,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 319,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 320,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 321,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 322,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 323,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 324,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 325,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 326,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 327,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 328,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 329,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 330,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 331,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 332,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 333,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 334,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 335,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 336,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 337,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 338,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 339,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 340,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 341,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 342,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 343,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 344,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 345,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 346,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 347,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 348,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 349,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 350,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 351,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 352,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 353,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 354,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 355,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 356,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 357,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 358,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 359,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 360,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 361,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 362,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 363,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 364,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 365,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 366,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 367,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 368,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 369,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 370,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 371,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 372,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 373,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 374,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 375,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 376,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 377,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 378,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 379,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 380,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 381,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 382,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 383,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 384,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 385,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 386,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 387,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 388,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 389,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 390,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 391,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 393,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 394,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 395,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 396,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 397,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 398,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 399,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 400,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 401,
        // open: true,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 402,
        // parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 403,
        // parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 404,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 405,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 406,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 407,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 408,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 409,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 410,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 411,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 412,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 413,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 414,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 415,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 416,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 417,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 418,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 419,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 420,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 421,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 422,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 423,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 424,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 425,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 426,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 427,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 428,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 429,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 430,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 431,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 432,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 433,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 434,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 435,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 436,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 437,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 438,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 439,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 440,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 441,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 442,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 443,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 444,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 445,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 446,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 447,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 448,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 449,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 450,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 451,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 452,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 453,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 454,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 455,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 456,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 457,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 458,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 459,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 460,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 461,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 462,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 463,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 464,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 465,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 466,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 467,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 468,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 469,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 470,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 471,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 472,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 473,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 474,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 475,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 476,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 477,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 478,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 479,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 480,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 481,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 482,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 483,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 484,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 485,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 486,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 487,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 488,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 489,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 490,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 491,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 493,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 494,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 495,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 496,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 497,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 498,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 499,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 500,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 501,
        // open: true,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 502,
        // parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 503,
        // parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 504,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 505,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 506,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 507,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 508,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 509,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 510,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 511,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 512,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 513,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 514,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 515,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 516,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 517,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 518,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 519,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 520,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 521,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 522,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 523,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 524,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 525,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 526,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 527,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 528,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 529,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 530,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 531,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 532,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 533,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 534,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 535,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 536,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 537,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 538,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 539,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 540,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 541,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 542,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 543,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 544,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 545,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 546,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 547,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 548,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 549,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 550,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 551,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 552,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 553,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 554,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 555,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 556,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 557,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 558,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 559,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 560,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 561,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 562,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 563,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 564,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 565,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 566,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 567,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 568,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 569,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 570,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 571,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 572,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 573,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 574,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 575,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 576,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 577,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 578,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 579,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 580,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 581,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 582,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 583,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 584,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 585,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 586,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 587,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 588,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 589,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 590,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 591,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 593,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 594,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 595,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 596,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 597,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 598,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 599,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 600,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 601,
        // open: true,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 602,
        // parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 603,
        // parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 604,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 605,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 606,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 607,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 608,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 609,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 610,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 611,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 612,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 613,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 614,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 615,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 616,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 617,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 618,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 619,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 620,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 621,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 622,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 623,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 624,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 625,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 626,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 627,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 628,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 629,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 630,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 631,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 632,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 633,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 634,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 635,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 636,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 637,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 638,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 639,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 640,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 641,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 642,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 643,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 644,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 645,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 646,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 647,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 648,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 649,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 650,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 651,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 652,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 653,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 654,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 655,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 656,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 657,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 658,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 659,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 660,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 661,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 662,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 663,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 664,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 665,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 666,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 667,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 668,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 669,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 670,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 671,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 672,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 673,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 674,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 675,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 676,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 677,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 678,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 679,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 680,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 681,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 682,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 683,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 684,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 685,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 686,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 687,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 688,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 689,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 690,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 691,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 693,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 694,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 695,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 696,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 697,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 698,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 699,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 700,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 701,
        // open: true,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 702,
        // parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 703,
        // parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 704,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 705,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 706,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 707,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 708,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 709,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 710,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 711,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 712,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 713,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 714,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 715,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 716,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 717,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 718,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 719,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 720,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 721,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 722,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 723,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 724,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 725,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 726,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 727,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 728,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 729,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 730,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 731,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 732,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 733,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 734,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 735,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 736,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 737,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 738,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 739,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 740,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 741,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 742,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 743,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 744,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 745,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 746,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 747,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 748,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 749,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 750,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 751,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 752,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 753,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 754,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 755,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 756,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 757,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 758,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 759,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 760,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 761,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 762,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 763,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 764,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 765,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 766,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 767,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 768,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 769,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 770,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 771,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 772,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 773,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 774,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 775,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 776,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 777,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 778,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 779,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 780,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 781,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 782,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 783,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 784,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 785,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 786,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 787,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 788,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 789,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 790,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 791,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 793,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 794,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 795,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 796,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 797,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 798,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 799,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 800,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 801,
        // open: true,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 802,
        // parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 803,
        // parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 804,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 805,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 806,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 807,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 808,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 809,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 810,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 811,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 812,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 813,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 814,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 815,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 816,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 817,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 818,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 819,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 820,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 821,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 822,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 823,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 824,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 825,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 826,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 827,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 828,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 829,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 830,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 831,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 832,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 833,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 834,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 835,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 836,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 837,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 838,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 839,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 840,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 841,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 842,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 843,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 844,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 845,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 846,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 847,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 848,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 849,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 850,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 851,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 852,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 853,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 854,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 855,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 856,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 857,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 858,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 859,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 860,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 861,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 862,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 863,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 864,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 865,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 866,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 867,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 868,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 869,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 870,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 871,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 872,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 873,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 874,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 875,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 876,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 877,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 878,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 879,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 880,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 881,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 882,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 883,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 884,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 885,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 886,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 887,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 888,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 889,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 890,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 891,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 893,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 894,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 895,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 896,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 897,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 898,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 899,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 900,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 901,
        // open: true,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 902,
        // parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 903,
        // parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 904,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 905,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 906,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 907,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 908,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 909,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 910,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 911,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 912,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 913,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 914,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 915,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 916,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 917,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 918,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 919,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 920,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 921,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 922,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 923,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 924,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 925,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 926,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 927,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 928,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 929,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 930,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 931,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 932,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 933,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 934,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 935,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 936,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 937,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 938,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 939,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 940,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 941,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 942,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 943,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 944,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 945,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 946,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 947,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 948,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 949,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 950,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 951,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 952,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 953,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 954,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 955,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 956,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 957,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 958,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 959,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 960,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 961,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 962,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 963,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 964,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 965,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 966,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 967,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 968,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 969,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 970,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 971,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 972,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 973,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 974,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 975,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 976,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 977,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 978,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 979,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 980,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 981,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 982,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 983,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 984,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 985,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 986,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 987,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 988,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 989,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 990,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 991,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 993,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 994,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 995,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 996,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 997,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 998,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 999,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1000,
        start_date: "2020-11-07",
        duration: 8,
        text: "Gantt Lib",
        progress: 70,
        type: "project"
    },
    {
        id: 1001,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 1002,
        // parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 1003,
        // parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 1004,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 1005,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 1006,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1007,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1008,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1009,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1010,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1011,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1012,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1013,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1014,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1015,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1016,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1017,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1018,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1019,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1020,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1021,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1022,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1023,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1024,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1025,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1026,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1027,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1028,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1029,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1030,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1031,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1032,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1033,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1034,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1035,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1036,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1037,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1038,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1039,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1040,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1041,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1042,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1043,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1044,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1045,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1046,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1047,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1048,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1049,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1050,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1051,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1052,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1053,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1054,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1055,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1056,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1057,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1058,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1059,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1060,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1061,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1062,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1063,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1064,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1065,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1066,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1067,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1068,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1069,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1070,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1071,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1072,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1073,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1074,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1075,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1076,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1077,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1078,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1079,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1080,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1081,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1082,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1083,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1084,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1085,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1086,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1087,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1088,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1089,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1090,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1091,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1093,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1094,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1095,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1096,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1097,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1098,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1099,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1100,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1101,
        // open: true,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 1102,
        // parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 1103,
        // parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 1104,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 1105,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 1106,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1107,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1108,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1109,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1110,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1111,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1112,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1113,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1114,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1115,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1116,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1117,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1118,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1119,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1120,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1121,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1122,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1123,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1124,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1125,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1126,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1127,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1128,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1129,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1130,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1131,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1132,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1133,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1134,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1135,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1136,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1137,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1138,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1139,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1140,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1141,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1142,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1143,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1144,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1145,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1146,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1147,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1148,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1149,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1150,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1151,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1152,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1153,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1154,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1155,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1156,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1157,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1158,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1159,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1160,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1161,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1162,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1163,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1164,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1165,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1166,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1167,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1168,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1169,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1170,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1171,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1172,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1173,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1174,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1175,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1176,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1177,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1178,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1179,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1180,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1181,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1182,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1183,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1184,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1185,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1186,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1187,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1188,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1189,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1190,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1191,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1193,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1194,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1195,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1196,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1197,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1198,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1199,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1200,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1201,
        // open: true,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 1202,
        // parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 1203,
        // parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 1204,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 1205,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 1206,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1207,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1208,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1209,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1210,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1211,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1212,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1213,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1214,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1215,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1216,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1217,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1218,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1219,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1220,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1221,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1222,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1223,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1224,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1225,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1226,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1227,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1228,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1229,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1230,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1231,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1232,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1233,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1234,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1235,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1236,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1237,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1238,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1239,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1240,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1241,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1242,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1243,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1244,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1245,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1246,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1247,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1248,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1249,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1250,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1251,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1252,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1253,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1254,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1255,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1256,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1257,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1258,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1259,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1260,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1261,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1262,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1263,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1264,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1265,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1266,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1267,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1268,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1269,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1270,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1271,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1272,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1273,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1274,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1275,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1276,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1277,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1278,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1279,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1280,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1281,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1282,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1283,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1284,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1285,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1286,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1287,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1288,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1289,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1290,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1291,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1293,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1294,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1295,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1296,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1297,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1298,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1299,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1300,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1301,
        // open: true,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 1302,
        // parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 1303,
        // parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 1304,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 1305,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 1306,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1307,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1308,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1309,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1310,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1311,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1312,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1313,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1314,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1315,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1316,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1317,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1318,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1319,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1320,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1321,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1322,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1323,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1324,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1325,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1326,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1327,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1328,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1329,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1330,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1331,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1332,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1333,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1334,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1335,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1336,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1337,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1338,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1339,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1340,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1341,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1342,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1343,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1344,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1345,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1346,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1347,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1348,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1349,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1350,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1351,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1352,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1353,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1354,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1355,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1356,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1357,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1358,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1359,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1360,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1361,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1362,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1363,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1364,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1365,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1366,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1367,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1368,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1369,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1370,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1371,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1372,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1373,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1374,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1375,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1376,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1377,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1378,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1379,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1380,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1381,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1382,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1383,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1384,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1385,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1386,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1387,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1388,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1389,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1390,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1391,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1393,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1394,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1395,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1396,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1397,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1398,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1399,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1400,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1401,
        // open: true,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 1402,
        // parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 1403,
        // parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 1404,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 1405,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 1406,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1407,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1408,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1409,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1410,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1411,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1412,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1413,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1414,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1415,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1416,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1417,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1418,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1419,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1420,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1421,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1422,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1423,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1424,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1425,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1426,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1427,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1428,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1429,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1430,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1431,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1432,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1433,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1434,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1435,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1436,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1437,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1438,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1439,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1440,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1441,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1442,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1443,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1444,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1445,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1446,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1447,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1448,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1449,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1450,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1451,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1452,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1453,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1454,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1455,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1456,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1457,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1458,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1459,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1460,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1461,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1462,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1463,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1464,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1465,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1466,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1467,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1468,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1469,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1470,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1471,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1472,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1473,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1474,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1475,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1476,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1477,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1478,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1479,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1480,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1481,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1482,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1483,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1484,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1485,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1486,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1487,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1488,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1489,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1490,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1491,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1493,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1494,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1495,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1496,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1497,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1498,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1499,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1500,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1501,
        // open: true,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 1502,
        // parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 1503,
        // parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 1504,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 1505,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 1506,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1507,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1508,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1509,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1510,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1511,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1512,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1513,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1514,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1515,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1516,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1517,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1518,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1519,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1520,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1521,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1522,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1523,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1524,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1525,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1526,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1527,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1528,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1529,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1530,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1531,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1532,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1533,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1534,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1535,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1536,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1537,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1538,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1539,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1540,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1541,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1542,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1543,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1544,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1545,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1546,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1547,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1548,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1549,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1550,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1551,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1552,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1553,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1554,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1555,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1556,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1557,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1558,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1559,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1560,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1561,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1562,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1563,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1564,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1565,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1566,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1567,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1568,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1569,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1570,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1571,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1572,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1573,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1574,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1575,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1576,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1577,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1578,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1579,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1580,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1581,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1582,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1583,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1584,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1585,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1586,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1587,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1588,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1589,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1590,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1591,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1593,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1594,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1595,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1596,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1597,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1598,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1599,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1600,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1601,
        // open: true,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 1602,
        // parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 1603,
        // parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 1604,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 1605,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 1606,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1607,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1608,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1609,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1610,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1611,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1612,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1613,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1614,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1615,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1616,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1617,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1618,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1619,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1620,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1621,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1622,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1623,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1624,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1625,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1626,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1627,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1628,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1629,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1630,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1631,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1632,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1633,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1634,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1635,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1636,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1637,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1638,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1639,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1640,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1641,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1642,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1643,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1644,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1645,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1646,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1647,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1648,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1649,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1650,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1651,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1652,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1653,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1654,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1655,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1656,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1657,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1658,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1659,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1660,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1661,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1662,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1663,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1664,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1665,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1666,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1667,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1668,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1669,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1670,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1671,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1672,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1673,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1674,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1675,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1676,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1677,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1678,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1679,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1680,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1681,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1682,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1683,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1684,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1685,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1686,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1687,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1688,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1689,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1690,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1691,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1693,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1694,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1695,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1696,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1697,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1698,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1699,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1700,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1701,
        // open: true,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 1702,
        // parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 1703,
        // parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 1704,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 1705,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 1706,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1707,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1708,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1709,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1710,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1711,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1712,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1713,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1714,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1715,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1716,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1717,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1718,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1719,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1720,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1721,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1722,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1723,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1724,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1725,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1726,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1727,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1728,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1729,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1730,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1731,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1732,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1733,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1734,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1735,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 736,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1737,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1738,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1739,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1740,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1741,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1742,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1743,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1744,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1745,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1746,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1747,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1748,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1749,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1750,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1751,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1752,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1753,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1754,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1755,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1756,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1757,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1758,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1759,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1760,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1761,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1762,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1763,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1764,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1765,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1766,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1767,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1768,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1769,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1770,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1771,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1772,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1773,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1774,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1775,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1776,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1777,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1778,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1779,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1780,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1781,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1782,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1783,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1784,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1785,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1786,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1787,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1788,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1789,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1790,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1791,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1793,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1794,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1795,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1796,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1797,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1798,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1799,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1800,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1801,
        // open: true,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 1802,
        // parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 1803,
        // parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 1804,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 1805,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 1806,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1807,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1808,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1809,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1810,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1811,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1812,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1813,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1814,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1815,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1816,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1817,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1818,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1819,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1820,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1821,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1822,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1823,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1824,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1825,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1826,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1827,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1828,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1829,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1830,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1831,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1832,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1833,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1834,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1835,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1836,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1837,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1838,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1839,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1840,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1841,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1842,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1843,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1844,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1845,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1846,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1847,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1848,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1849,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1850,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1851,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1852,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1853,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1854,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1855,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1856,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1857,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1858,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1859,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1860,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1861,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1862,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1863,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1864,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1865,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1866,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1867,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1868,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1869,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1870,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1871,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1872,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1873,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1874,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1875,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1876,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1877,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1878,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1879,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1880,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1881,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1882,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1883,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1884,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1885,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1886,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1887,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1888,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1889,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1890,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1891,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1893,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1894,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1895,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1896,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1897,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1898,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1899,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1900,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1901,
        // open: true,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 1902,
        // parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 1903,
        // parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 1904,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 1905,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 1906,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1907,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1908,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1909,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1910,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1911,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1912,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1913,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1914,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1915,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1916,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1917,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1918,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1919,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1920,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1921,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1922,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1923,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1924,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1925,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1926,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1927,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1928,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1929,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1930,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1931,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1932,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1933,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1934,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1935,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1936,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1937,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1938,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1939,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1940,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1941,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1942,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1943,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1944,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1945,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1946,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1947,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1948,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1949,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1950,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1951,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1952,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1953,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1954,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1955,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1956,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1957,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1958,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1959,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1960,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1961,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1962,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1963,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1964,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1965,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1966,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1967,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1968,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1969,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1970,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1971,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1972,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1973,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1974,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1975,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1976,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1977,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1978,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1979,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1980,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1981,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1982,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1983,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1984,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1985,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1986,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1987,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1988,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1989,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1990,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1991,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1993,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1994,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1995,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1996,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1997,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1998,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1999,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2000,
        start_date: "2020-11-07",
        duration: 8,
        text: "Gantt Lib",
        progress: 70,
        type: "project"
    },
    {
        id: 2001,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 2002,
        // parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 1003,
        // parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 2004,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 2005,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 2006,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2007,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2008,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2009,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2010,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2011,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2012,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2013,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2014,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2015,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2016,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2017,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2018,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2019,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2020,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2021,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2022,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2023,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2024,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2025,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2026,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2027,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2028,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2029,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2030,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2031,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2032,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2033,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2034,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2035,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2036,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2037,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2038,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2039,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2040,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2041,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2042,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2043,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2044,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2045,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2046,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2047,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2048,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2049,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2050,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2051,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2052,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2053,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2054,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2055,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2056,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2057,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2058,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2059,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2060,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2061,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2062,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2063,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2064,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2065,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2066,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2067,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2068,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2069,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2070,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2071,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2072,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2073,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2074,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2075,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2076,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2077,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2078,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2079,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2080,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2081,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2082,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2083,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2084,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2085,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2086,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2087,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2088,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2089,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2090,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2091,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2093,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2094,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2095,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2096,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2097,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2098,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2099,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2100,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2101,
        // open: true,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 2102,
        // parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 2103,
        // parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 2104,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 2105,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 2106,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2107,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2108,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2109,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2110,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2111,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2112,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2113,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2114,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2115,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2116,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2117,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2118,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2119,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2120,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2121,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2122,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2123,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2124,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2125,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2126,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2127,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2128,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2129,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2130,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2131,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2132,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2133,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2134,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2135,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2136,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2137,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2138,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2139,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2140,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2141,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2142,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2143,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2144,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2145,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2146,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2147,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2148,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2149,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2150,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2151,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2152,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2153,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2154,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2155,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2156,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2157,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2158,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2159,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2160,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2161,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2162,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2163,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2164,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2165,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2166,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2167,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2168,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2169,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2170,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2171,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2172,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2173,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2174,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2175,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2176,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2177,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2178,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2179,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2180,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2181,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2182,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2183,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2184,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2185,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2186,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2187,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2188,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2189,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2190,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2191,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2193,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2194,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2195,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2196,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2197,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2198,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2199,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2200,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2201,
        // open: true,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 2202,
        // parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 2203,
        // parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 2204,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 2205,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 2206,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2207,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2208,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2209,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2210,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2211,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2212,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2213,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2214,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2215,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2216,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2217,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2218,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2219,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2220,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2221,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2222,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2223,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2224,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2225,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2226,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2227,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2228,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2229,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2230,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2231,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2232,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2233,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2234,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2235,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2236,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2237,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2238,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2239,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2240,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2241,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2242,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2243,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2244,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2245,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2246,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2247,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2248,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2249,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2250,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2251,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2252,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2253,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2254,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2255,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2256,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2257,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2258,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2259,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2260,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2261,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2262,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2263,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2264,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2265,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2266,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2267,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2268,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2269,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2270,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2271,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2272,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2273,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2274,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2275,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2276,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2277,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2278,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2279,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2280,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2281,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2282,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2283,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2284,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2285,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2286,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2287,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2288,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2289,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2290,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2291,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2293,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2294,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2295,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2296,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2297,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2298,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2299,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2300,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1301,
        // open: true,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 1302,
        // parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 1303,
        // parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 1304,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 1305,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 1306,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1307,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1308,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1309,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1310,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1311,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1312,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1313,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1314,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1315,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1316,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1317,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1318,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1319,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1320,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1321,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1322,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1323,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1324,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1325,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1326,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1327,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1328,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1329,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1330,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1331,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1332,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1333,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1334,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1335,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1336,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1337,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1338,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1339,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1340,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1341,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1342,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1343,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1344,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1345,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1346,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1347,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1348,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1349,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1350,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1351,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1352,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1353,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1354,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1355,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1356,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1357,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1358,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1359,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1360,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1361,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1362,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1363,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1364,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1365,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1366,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1367,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1368,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1369,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1370,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1371,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1372,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1373,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1374,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1375,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1376,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1377,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1378,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1379,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1380,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1381,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1382,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1383,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1384,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1385,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1386,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1387,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1388,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1389,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1390,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1391,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1393,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1394,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1395,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1396,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1397,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1398,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1399,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1400,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1401,
        // open: true,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 1402,
        // parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 1403,
        // parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 1404,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 1405,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 1406,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1407,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1408,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1409,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1410,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1411,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1412,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1413,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1414,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1415,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1416,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1417,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1418,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1419,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1420,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1421,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1422,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1423,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1424,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1425,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1426,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1427,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1428,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1429,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1430,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1431,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1432,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1433,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1434,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1435,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1436,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1437,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1438,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1439,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1440,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1441,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1442,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1443,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1444,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1445,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1446,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1447,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1448,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1449,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1450,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1451,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1452,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1453,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1454,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1455,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1456,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1457,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1458,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1459,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1460,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1461,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1462,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1463,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1464,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1465,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1466,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1467,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1468,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1469,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1470,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1471,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1472,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1473,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1474,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1475,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1476,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1477,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1478,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1479,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1480,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1481,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1482,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1483,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1484,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1485,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1486,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1487,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1488,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1489,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1490,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1491,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1493,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1494,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1495,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1496,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1497,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1498,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1499,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1500,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1501,
        // open: true,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 1502,
        // parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 1503,
        // parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 1504,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 1505,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 1506,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1507,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1508,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1509,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1510,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1511,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1512,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1513,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1514,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1515,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1516,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1517,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1518,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1519,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1520,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1521,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1522,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1523,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1524,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1525,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1526,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1527,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1528,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1529,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1530,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1531,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1532,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1533,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1534,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1535,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1536,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1537,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1538,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1539,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1540,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1541,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1542,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1543,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1544,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1545,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1546,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1547,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1548,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1549,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1550,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1551,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1552,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1553,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1554,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1555,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1556,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1557,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1558,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1559,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1560,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1561,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1562,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1563,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1564,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1565,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1566,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1567,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1568,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1569,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1570,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1571,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1572,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1573,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1574,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1575,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1576,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1577,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1578,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1579,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1580,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1581,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1582,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1583,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1584,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1585,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1586,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1587,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1588,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1589,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1590,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1591,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1593,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1594,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1595,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1596,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1597,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1598,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1599,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1600,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1601,
        // open: true,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 1602,
        // parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 1603,
        // parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 1604,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 1605,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 1606,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1607,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1608,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1609,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1610,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1611,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1612,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1613,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1614,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1615,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1616,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1617,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1618,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1619,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1620,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1621,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1622,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1623,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1624,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1625,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1626,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1627,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1628,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1629,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1630,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1631,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1632,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1633,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1634,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1635,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1636,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1637,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1638,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1639,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1640,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1641,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1642,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1643,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1644,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1645,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1646,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1647,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1648,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1649,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1650,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1651,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1652,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1653,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1654,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1655,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1656,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1657,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1658,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1659,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1660,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1661,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1662,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1663,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1664,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1665,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1666,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1667,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1668,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1669,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1670,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1671,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1672,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1673,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1674,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1675,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1676,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1677,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1678,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1679,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1680,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1681,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1682,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1683,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1684,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1685,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1686,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1687,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1688,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1689,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1690,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1691,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1693,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1694,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1695,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1696,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1697,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1698,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1699,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1700,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1701,
        // open: true,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 1702,
        // parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 1703,
        // parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 1704,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 1705,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 1706,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1707,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1708,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1709,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1710,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1711,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1712,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1713,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1714,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1715,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1716,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1717,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1718,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1719,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1720,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1721,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1722,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1723,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1724,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1725,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1726,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1727,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1728,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1729,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1730,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1731,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1732,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1733,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1734,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1735,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 736,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1737,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1738,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1739,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1740,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1741,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1742,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1743,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1744,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1745,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1746,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1747,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1748,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1749,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1750,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1751,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1752,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1753,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1754,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1755,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1756,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1757,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1758,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1759,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1760,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1761,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1762,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1763,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1764,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1765,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1766,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1767,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1768,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1769,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1770,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1771,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1772,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1773,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1774,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1775,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1776,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1777,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1778,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1779,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1780,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1781,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1782,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1783,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1784,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1785,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1786,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1787,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1788,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1789,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1790,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1791,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1793,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1794,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1795,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1796,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1797,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1798,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1799,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1800,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1801,
        // open: true,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 1802,
        // parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 1803,
        // parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 1804,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 1805,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 1806,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1807,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1808,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1809,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1810,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1811,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1812,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1813,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1814,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1815,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1816,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1817,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1818,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1819,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1820,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1821,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1822,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1823,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1824,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1825,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1826,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1827,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1828,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1829,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1830,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1831,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1832,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1833,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1834,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1835,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1836,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1837,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1838,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1839,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1840,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1841,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1842,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1843,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1844,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1845,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1846,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1847,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1848,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1849,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1850,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1851,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1852,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1853,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1854,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1855,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1856,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1857,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1858,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1859,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1860,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1861,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1862,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1863,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1864,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1865,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1866,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1867,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1868,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1869,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1870,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1871,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1872,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1873,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1874,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1875,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1876,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1877,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1878,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1879,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1880,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1881,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1882,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1883,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1884,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1885,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1886,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1887,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1888,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1889,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1890,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1891,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1893,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1894,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1895,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1896,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1897,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1898,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1899,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1900,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1901,
        // open: true,
        start_date: "2020-11-06",
        duration: 8,
        text: "React Gantt Widget",
        progress: 60,
        type: "project"
    },
    {
        id: 1902,
        // parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80
    },
    {
        id: 1903,
        // parent: 1,
        start_date: "2020-11-08",
        duration: 4,
        text: "UI Layer",
        progress: 30
    },
    {
        id: 1904,
        start_date: "2020-11-07",
        duration: 8,
        text: "Documentation",
        progress: 10,
        type: "project"
    },
    {
        id: 1905,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 1,
        text: "Overview",
        progress: 30
    },
    {
        id: 1906,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1907,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1908,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1909,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1910,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1911,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1912,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1913,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1914,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1915,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1916,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1917,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1918,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1919,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1920,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1921,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1922,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1923,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1924,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1925,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1926,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1927,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1928,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1929,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1930,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1931,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1932,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1933,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1934,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1935,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1936,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1937,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1938,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1939,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1940,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1941,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1942,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1943,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1944,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1945,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1946,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1947,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1948,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1949,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1950,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1951,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1952,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1953,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1954,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1955,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1956,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1957,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1958,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1959,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1960,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1961,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1962,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1963,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1964,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1965,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1966,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1967,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1968,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1969,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1970,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1971,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1972,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1973,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1974,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1975,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1976,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1977,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1978,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1979,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1980,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1981,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1982,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1983,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1984,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1985,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1986,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1987,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1988,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1989,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1990,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1991,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1993,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1994,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1995,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1996,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1997,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1998,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 1999,
        // parent: 4,
        start_date: "2020-11-07",
        duration: 8,
        text: "API reference",
        progress: 0
    },
    {
        id: 2000,
        start_date: "2020-11-07",
        duration: 8,
        text: "Gantt Lib",
        progress: 70,
        type: "project"
    }
];

const links = [
    { source: 2, target: 3, type: 0 },
    { source: 1, target: 4, type: 1 },
    { source: 5, target: 6, type: 2 },
    { source: 6, target: 2, type: 3 },
    { source: 776, target: 12, type: 4 },
    { source: 976, target: 122, type: 5 },
    { source: 102, target: 922, type: 6 },
    { source: 2, target: 202, type: 7 },
    { source: 1, target: 1000, type: 8 },
];

export { scales, columns, tasks, links };

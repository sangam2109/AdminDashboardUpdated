export default interface ChartData {
  labels?: string[];
  datasets: {
    label: string;
    data: number[] | { x: number; y: number }[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
    fill?: boolean;
  }[];
}
export default interface ChartOptions {
  scales?: {
    yAxes?: {
      ticks: {
        beginAtZero: boolean;
      };
    }[];
    xAxes?: {
      type: string;
      position: string;
    }[];
  };
  legend?: {
    display: boolean;
  };
  elements?: {
    point: {
      radius: number;
    };
  };
  plugins?: {
    filler?: {
      propagate: boolean;
    };
  };
  responsive?: boolean;
  animation?: {
    animateScale?: boolean;
    animateRotate?: boolean;
  };
}
export const defaultData = {
  startDate: new Date(),
  visitSaleData: {},
  visitSaleOptions: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            display: false,
            min: 0,
            stepSize: 20,
            max: 80,
          },
          gridLines: {
            drawBorder: false,
            color: "rgba(235,237,242,1)",
            zeroLineColor: "rgba(235,237,242,1)",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
            color: "rgba(0,0,0,1)",
            zeroLineColor: "rgba(235,237,242,1)",
          },
          ticks: {
            padding: 20,
            fontColor: "#9c9fa6",
            autoSkip: true,
          },
          categoryPercentage: 0.5,
          barPercentage: 0.5,
        },
      ],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  },
  trafficData: {},
  trafficOptions: {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    legend: false,
  },
  todos: [
    {
      id: 1,
      task: "Pick up kids from school",
      isCompleted: false,
    },
    {
      id: 2,
      task: "Prepare for presentation",
      isCompleted: true,
    },
    {
      id: 3,
      task: "Print Statements",
      isCompleted: false,
    },
    {
      id: 4,
      task: "Create invoice",
      isCompleted: false,
    },
    {
      id: 5,
      task: "Call John",
      isCompleted: true,
    },
    {
      id: 6,
      task: "Meeting with Alisa",
      isCompleted: false,
    },
  ],
  inputValue: "",
};
 export const garadientbuttonTypes = [
   { type: "Primary", class: "btn-gradient-primary" },
   { type: "Secondary", class: "btn-gradient-secondary" },
   { type: "Success", class: "btn-gradient-success" },
   { type: "Danger", class: "btn-gradient-danger" },
   { type: "Warning", class: "btn-gradient-warning" },
   { type: "Info", class: "btn-gradient-info" },
   { type: "Light", class: "btn-gradient-light" },
   { type: "Dark", class: "btn-gradient-dark" },
 ];
 export const simplebuttonTypes = [
   { type: "Primary", class: "btn-primary" },
   { type: "Secondary", class: "btn-secondary" },
   { type: "Success", class: "btn-success" },
   { type: "Danger", class: "btn-danger" },
   { type: "Warning", class: "btn-warning" },
   { type: "Info", class: "btn-info" },
   { type: "Light", class: "btn-light" },
   { type: "Dark", class: "btn-dark" },
 ];
  export const inversebuttonTypes = [
    { type: "Primary", class: "btn-inverse-primary" },
    { type: "Secondary", class: "btn-inverse-secondary" },
    { type: "Success", class: "btn-inverse-success" },
    { type: "Danger", class: "btn-inverse-danger" },
    { type: "Warning", class: "btn-inverse-warning" },
    { type: "Info", class: "btn-inverse-info" },
    { type: "Light", class: "btn-inverse-light" },
    { type: "Dark", class: "btn-inverse-dark" },
  ];
   export const normalbuttonTypes = [
     { type: "Primary", class: "btn-normal-primary" },
     { type: "Secondary", class: "btn-normal-secondary" },
     { type: "Success", class: "btn-normal-success" },
     { type: "Danger", class: "btn-normal-danger" },
     { type: "Warning", class: "btn-normal-warning" },
     { type: "Info", class: "btn-normal-info" },
     { type: "Light", class: "btn-normal-light" },
     { type: "Dark", class: "btn-normal-dark" },
   ];
   
// Chart.defaults.font.size = 16;
// Chart.defaults.font.wight = 500;
// // Chart.defaults.line.height = 23;
// Chart.defaults.color = "#D8E3E9";
// Chart.defaults.gap = 23;
// Chart.defaults.hover.color = "#00BD9D";
// let delayed;

// let myChart = document.getElementById("my-chart").getContext("2d");

// const monthChart = new Chart(myChart, {
//   type: "bar",
//   data: {
  
//     labels: [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ],
//     datasets: [
//       {
//         label: "From $",
//         data: [10, 17, 8, 12, 8, 12, 8, 6, 12, 17, 12, 11],
//         backgroundColor: "#D8E3E9",

//         borderRadius: 9,
//         hoverOffset: 4,
//         hoverBackgroundColor: "#00BD9D",
//       },
//     ],
//   },


//   options: {

//     responsive: true,
//     plugins: {
      
//       legend: {
//         display: false,
//       },
//       title: {
//         display: false,
//       },
//       subtitle: {
//         display: false,
//       },
//       tooltip:{
//         hoverColor: "#00BD9D",
      

//       }
//     },

//     animation: {
//       onComplete: () => {
//         delayed = true;
//       },
//       delay: (context) => {
//         let delay = 0;
//         console.log(context.type);
//         console.log(context.mode);

//         if (context.type === 'data' && context.mode === 'default') {
//           delay = context.dataIndex * 300;
//         }
//         return delay;
//       }
//     },

//     scales: {
//       y: {
//         display: false,


//       },
//       x: {
//         grid: {
//           // drawTicks: false,
//           display: false,
//           drawBorder: false,
//           drawOnChartArea: false,
//           // marginLeft: 50,
//           lineWidth: 5,
//         },
//       },
//     },
//   },

// });

// const tooltipLine = {
//   id: "tooltipLine",
//   beforeDraw: (chart) => {
//     const myChart = chart.myChart;
//     if (chart.tooltip._active && chart.tooltip._active.length) {
//       const myChart = chart.myChart;
//       myChart.save();
//       const activePoint = chart.tooltip._active[0];
//       console.log(activePoint.element.y);

//       myChart.beginPath();
//       myChart.setLineDash([5, 7]);
//       myChart.moveTo(activePoint.element.x, chart.chartArea.top);
//       myChart.lineTo(activePoint.element.x, activePoint.element.y);
//       myChart.lineWidth = 2;
//       myChart.strokeStyle = "#00BD9D";
//       myChart.stroke();
//       myChart.restore();

//       // myChart.beginPath();
//       // myChart.moveTo(activePoint.element.x, activePoint.element.y);
//       // myChart.lineTo(activePoint.element.x, 350);
//       // myChart.lineWidth = 2;
//       // myChart.strokeStyle = "red";
//       // myChart.stroke();
//       // myChart.restore();
//     }
//   },
// };



Chart.defaults.font.size = 16;
Chart.defaults.font.wight = 500;
// Chart.defaults.line.height = 23;
Chart.defaults.color = "#D8E3E9";
Chart.defaults.gap = 23;

let myChart = document.getElementById("my-chart").getContext("2d");


const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "from $",
      data: [10, 19, 8, 12, 8, 12, 8, 6, 10, 17, 10, 11],
      backgroundColor: "#D8E3E9",
      borderRadius: 9,
      textStrokeColor: "#00BD9D",
      hoverBackgroundColor: "#00BD9D",
    
      borderWidth: 1,
      borderRadius: 8,
      borderSkipped: false,
    },
  ],
};

const tooltipLine = {
  id: "tooltipLine",
  beforeDraw: (chart) => {
    if (chart.tooltip._active && chart.tooltip._active.length) {
      const ctx = chart.ctx;
      ctx.save();
      const activePoint = chart.tooltip._active[0];
      ctx.beginPath();
      ctx.setLineDash([2, 5]);
      ctx.moveTo(activePoint.element.x, chart.chartArea.top);
      ctx.lineTo(activePoint.element.x, activePoint.element.y);
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#00BD9D"; 
      ctx.stroke();
      ctx.restore();
    }
  },
};
const config = {
  type: "bar",
  data: data,
  options: {
    scales: {
      y: {
        display: false,
      },
      x: {
        grid: {
          drawBorder: false,
          drawOnChartArea: false,
          display: false,
          lineWidth: 5,
        },
      },
    },
    // responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
  plugins: [tooltipLine],
};

const monthChart = new Chart(myChart, config);








function beforePrintHandler () {
  for (let id in Chart.instances) {
      Chart.instances[id].resize();
  }
}
window.addEventListener('beforeprint', () => {
  myChart.resize(1800, 1800);
});
window.addEventListener('afterprint', () => {
  myChart.resize();
});







$(document).ready(function () {
  $("#color_mode").on("change", function () {
    colorModePreview(this);
  });
});




const MobileNavBtnEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".side-bar");
MobileNavBtnEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});



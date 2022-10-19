Chart.defaults.font.size = 16;
Chart.defaults.font.wight = 500;
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





const body = document.querySelector("body");
const MobileNavBtnEl = document.querySelector(".menu-btn");
const headerEl = document.querySelector(".side-bar");
MobileNavBtnEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open"); 
  body.classList.toggle("blur");
  body.classList.toggle("hidden-overflow");
});




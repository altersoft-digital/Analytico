let myChart = document.getElementById('my-chart').getContext('2d');

const monthChart = new Chart(myChart, {
    type:'bar',
    data: {
        labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets:[{
            label: 'Months',
            data:[
                10,
                20,
                50,
                90,
                70,
                60,
                34,
                20,
                45,
                60,
                20,
                35
            ],
            backgroundColor:[
                '#D8E3E9'
            ],
    
            borderRadius:[
                9.1
            ],
         
        }],
    },
    options:{
        onHover: (event, chartElement) => {
            event.native.target.style.fill = chartElement[0] ? '#00BD9D' : '#D8E3E9';

            if(chartElement.length == 1){
                event.native.target.style.fill = '#00BD9D';
            }
            if(chartElement.length == 0){
                event.native.target.style.fill = '#D8E3E9';
            }

        },
         responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Bar Chart'
        },
       
      },
      scales:{
        y:{
            beginAtZero: true,
            grid: {
                borderWidth:3,
                drawBorder:false,
                drawTicks: false,
                drawOnChartArea: false,
                display: false
            
            },
            ticks:{
                display: false
            }

        },
        x:{
            grid:{
                drawTicks: false,
                display:false,
                drawBorder:false,
                drawOnChartArea: false,
          
        
                lineWidth:  5
            }
        }
    }
  
    },
    

});
const plugin = {
    id: 'custom_canvas_background_color',
    beforeDraw: (chart) => {
      const {ctx} = chart;
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = 'lightGreen';
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
  };
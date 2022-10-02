Chart.defaults.font.size = 16;
Chart.defaults.font.wight = 500;
// Chart.defaults.line.height = 23;
Chart.defaults.color = "#D8E3E9";
Chart.defaults.gap = 23;




let myChart = document.getElementById('my-chart').getContext('2d');

const monthChart = new Chart(myChart, {
    type:'bar',
    data: {
        labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets:[{
            label: 'From # k $',
            data:[
                10,
                17,
                8,
                12,
                8,
                12,
                8,
                6,
                12,
                17,
                12,
                11
            ],
            backgroundColor:[
              
                '#D8E3E9'
            ],
    
            borderRadius:[
                9.1
            ],
            hoverOffset: 4,
            hoverBackgroundColor:   '#00BD9D'
         
        }],
    },

   
    options:{
         responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: false,
          
        },
        subtitle: {
            display:false
        }
       
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
                display: false,
                
                    // backdropPadding: {
                    //     y:20,

                    
                // }
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
 const tooltipLine = {
        id: 'tooltipLine',
        beforeDraw: chart => {
            const myChart = chart.myChart;
            if(chart.tooltip._active && chart.tooltip._active.length){
                const myChart = chart.myChart;
                myChart.save();
                const activePoint = chart.tooltip._active[0];
                console.log(activePoint.element.y)

                myChart.beginPath();
                myChart.setLineDash([5, 7]);
                myChart.moveTo(activePoint.element.x, chart.chartArea.top);
                myChart.lineTo(activePoint.element.x, activePoint.element.y);
                myChart.lineWidth = 2;
                myChart.strokeStyle = 'grey';
                myChart.stroke();
                myChart.restore();

                myChart.beginPath();
                myChart.moveTo(activePoint.element.x, activePoint.element.y);
                myChart.lineTo(activePoint.element.x, 350);
                myChart.lineWidth = 2;
                myChart.strokeStyle = 'red';
                myChart.stroke();
                myChart.restore();

            }
        }
    }









    $(document).ready(function() {
        $("#color_mode").on("change", function () {
            colorModePreview(this);
        })
    });
    
    // function colorModePreview(ele) {
    //     if($(ele).prop("checked") == true){
    //         $('body').addClass('dark-preview');
    //         $('body').removeClass('white-preview');
    //     }
    //     else if($(ele).prop("checked") == false){
    //         $('body').addClass('white-preview');
    //         $('body').removeClass('dark-preview');
    //    }   }
  
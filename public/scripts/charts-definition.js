// Create the charts when the web page loads
window.addEventListener('load', onload);

function onload(event){
  chartC = createCurrentChart();
}

// Create Current Chart
function createCurrentChart() {
  var chart = new Highcharts.Chart({
    chart:{ 
      renderTo:'chart-current',
      type: 'spline' 
    },
    series: [
      {
        name: 'Real-time Current'
      }
    ],
    title: { 
      text: undefined
    },
    plotOptions: {
      line: { 
        animation: false,
        dataLabels: { 
          enabled: true 
        }
      }
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: { second: '%H:%M:%S' }
    },
    yAxis: {
      title: { 
        text: 'Current (Amperes)' 
      }
    },
    credits: { 
      enabled: false 
    }
  });
  return chart;
}
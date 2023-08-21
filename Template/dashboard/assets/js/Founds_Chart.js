/**
 * Dashboard Analytics
 */

'use strict';
/*
var url = 'http://localhost:8080/chart/games/category/mapped'
$.getJSON(url, function(response) {
    incomeChart.updateSeries([{
    name: 'categories',
    series: response
  }])
});
*/

var options = {
    series: [82],
    labels: ['Founds'],
    chart: {
      height: 240,
      type: 'radialBar'
    },
    plotOptions: {
      radialBar: {
        size: 150,
        offsetY: 10,
        startAngle: -150,
        endAngle: 150,
        hollow: {
          size: '55%'
        },
        track: {
          background: cardColor,
          strokeWidth: '100%'
        },
        dataLabels: {
          name: {
            offsetY: 15,
            color: headingColor,
            fontSize: '15px',
            fontWeight: '600',
            fontFamily: 'Public Sans'
          },
          value: {
            offsetY: -25,
            color: headingColor,
            fontSize: '22px',
            fontWeight: '500',
            fontFamily: 'Public Sans'
          }
        }
      }
    },
    colors: [config.colors.primary],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.5,
        gradientToColors: [config.colors.primary],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0.6,
        stops: [30, 70, 100]
      }
    },
    stroke: {
      dashArray: 5
    },
    grid: {
      padding: {
        top: -35,
        bottom: -10
      }
    },
    states: {
      hover: {
        filter: {
          type: 'none'
        }
      },
      active: {
        filter: {
          type: 'none'
        }
      }
    }
  };

var growthChart = new ApexCharts(
    document.querySelector('#growthChart'),
    options
  );
  
growthChart.render();
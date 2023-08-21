/**
 * Dashboard Analytics
 */

'use strict';

var url = 'http://localhost:8080/chart/games/category/mapped'
$.getJSON(url, function(response) {
    incomeChart.updateSeries([{
    name: 'categories',
    data: response
  }])
});

var options = {
    chart: {
        height: 300,
        stacked: true,
        type: 'bar',
        toolbar: { show: false }
    },
    dataLabels: {
        enabled: false
    },
    series: [],
    noData: {
      text: 'Loading...'
    },
    plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '33%',
          borderRadius: 12,
          startingShape: 'rounded',
          endingShape: 'rounded'
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
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '13px',
            colors: [config.colors.secondary]
          }
        }
      },
      xaxis: {
        labels: {
          style: {
            fontSize: '13px',
            colors: [config.colors.secondary]
          }
        },
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      grid: {
        borderColor: borderColor,
        padding: {
          top: 0,
          bottom: -8,
          left: 20,
          right: 20
        }
      },
      legend: {
        show: true,
        horizontalAlign: 'left',
        position: 'top',
        markers: {
          height: 8,
          width: 8,
          radius: 12,
          offsetX: -3
        },
        labels: {
          colors: axisColor
        },
        itemMargin: {
          horizontal: 10
        }
      },
      stroke: {
        curve: 'smooth',
        width: 6,
        lineCap: 'round',
        colors: [config.colors.primary]
      },
      colors: [config.colors.primary, config.colors.info],
      dataLabels: {
        enabled: false
      },
  }

var incomeChart = new ApexCharts(
    document.querySelector('#incomeChart'),
    options
  );
  
incomeChart.render();
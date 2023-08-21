/**
 * Dashboard Analytics
 */

'use strict';
let cardColor, headingColor, axisColor, shadeColor, borderColor;
cardColor = config.colors.white;
headingColor = config.colors.headingColor;
axisColor = config.colors.axisColor;
borderColor = config.colors.borderColor;
var url = 'http://localhost:8080/chart/2/2/mapped'
$.getJSON(url, function(response) {
  totalRevenueChart.updateSeries([{
    name: 'Sales',
    data: response
  }])
});
    
var options = {
  chart: {
      height: 300,
      stacked: true,
      type: 'line',
      toolbar: { show: false }
  },
  dataLabels: {
      enabled: false
  },
  colors: [config.colors.primary, config.colors.info],
  series: [],
  noData: {
    text: 'Loading...'
  },
  stroke: {
    curve: 'smooth',
    width: 6,
    lineCap: 'round',
    colors: [config.colors.primary]
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
  grid: {
    borderColor: borderColor,
    padding: {
      top: 0,
      bottom: -8,
      left: 20,
      right: 20
    }
  },
  yaxis: {
    labels: {
      style: {
        fontSize: '13px',
        colors: axisColor
      }
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
}

var totalRevenueChart = new ApexCharts(
  document.querySelector('#totalRevenueChart'),
  options
);

totalRevenueChart.render();

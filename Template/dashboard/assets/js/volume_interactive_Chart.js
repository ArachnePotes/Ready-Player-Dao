/**
 * Dashboard Analytics
 */

'use strict';
function CoinGeekoTest() {
  const game = document.getElementById("game_selected").value
  const chain = document.getElementById("chain_selected").value
  const range = document.getElementById("time_selected").value
  console.log(game,chain,range)
  var url = new URL('http://localhost:8080/chart/')
  var link_close = url + chain + "/" + game + '/mapped';
  var link_vol = url + chain + "/" + game +  '/volume' +'/mapped';
  console.log(link_close,link_vol)
  $.getJSON(link_close, function(response) {
    totalRevenueChart.updateSeries([{
      name: 'Game Token Price',
      data: response
    }])
  });
  $.getJSON(link_vol, function(response) {
    VolumeChart.updateSeries([{
        name: 'Trading Volume',
        data: response
      }])
    console.log(response)
  });
}

//game_slug = document.getElementById("game").attributes[2].textContent
//timelap = document.getElementById("timelap").attributes[2].textContent
//chain = document.getElementById("chain").attributes[2].textContent
//console.log(chain,game_slug,timelap)

   
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

var VolumeChart = new ApexCharts(
  document.querySelector('#VolumeChart'),
  options
);

VolumeChart.render();
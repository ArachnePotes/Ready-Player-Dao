import  { getChartData  , getValue} from './chart_api.js'

import Chart from 'chart.js/auto'

//let game = 'league-of-kingdoms'
//let currency = 'usd'
//var try1 = await getValue(game,currency)
//var upp = await UpdateChartDB(game,try1,currency)
var newvalue = {
  date_val: 2023,
  close_val: 0
}
const out_data = [
  { date_val: 2010, close_val: 10 },
  { date_val: 2011, close_val: 20 },
  { date_val: 2012, close_val: 15 },
  { date_val: 2013, close_val: 25 },
  { date_val: 2014, close_val: 22 },
  { date_val: 2015, close_val: 30 },
  { date_val: 2016, close_val: 28 },
  newvalue,
];

let chart = await getChartData(2,2)
var data = await getValue('axie-infinity','eth')
const values = [data]
console.log('manual data ',typeof(out_data),out_data)
console.log('get value data',typeof(data),data)
console.log('[] values',typeof(values),values)
console.log('chart return',typeof(chart),chart)
/*
(async function() {
  const data = out_data

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'line',
      data: {
        labels: data.map(row => row.date_val),
        datasets: [
          {
            label: 'close by year',
            data: data.map(row => row.close_val)
          }
        ]
      }
    }
  );
})();*/
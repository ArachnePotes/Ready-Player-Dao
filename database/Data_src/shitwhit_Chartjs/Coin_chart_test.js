
import Chart from 'chart.js/auto'
import { pasame_tabla } from './cosa.js'
//import  { getChartData } from './chart_api.js'


const data = await pasame_tabla();
var  Xaxis = data.map((row) => row.date_val); //works
let   Yaxis = data.map((row) => row.close_val); //works

console.log(data,Xaxis,Yaxis)
/*
(async function () {
  const data = await pasame_tabla();
  Xaxis = data.map((row) => row.date_val); //works
  Yaxis = data.map((row) => row.close_val); //works
  new Chart(document.getElementById("myChart"), {
    type: "line",
    data: {
      labels: Xaxis,
      datasets: [
        {
          label: "close by year",
          data: Yaxis
        }
      ],
    },
  });
})();*/

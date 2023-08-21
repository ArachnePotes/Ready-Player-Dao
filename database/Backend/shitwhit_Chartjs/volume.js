import Chart from 'chart.js/auto'

(async function() {
  const data = [
    {
      close_val: 1900,
      volume: 12000000000,
      high: 2100,
      chain_id: '3',
      Liquity: 1340000000,
      coin_id: 2,
      date_val: '2023-08-03 00:00:00'
    },
    {
      close_val: 2035,
      volume: 14000000000,
      high: 2200.75,
      chain_id: '3',
      Liquity: 1370000000,
      coin_id: 2,
      date_val: '2023-08-05 00:00:00'
    },
    {
      close_val: 1950,
      volume: 13000000000,
      high: 2150.5,
      chain_id: '3',
      Liquity: 1355000000,
      coin_id: 2,
      date_val: '2023-08-04 00:00:00'
    },
    {
      close_val: 2150,
      volume: 16000000000,
      high: 2400.5,
      chain_id: '3',
      Liquity: 1420000000,
      coin_id: 2,
      date_val: '2023-08-08 00:00:00'
    },
    {
      close_val: 1970,
      volume: 13500000000,
      high: 2200.75,
      chain_id: '3',
      Liquity: 1370000000,
      coin_id: 2,
      date_val: '2023-08-05 00:00:00'
    },
    {
      close_val: 2230,
      volume: 16500000000,
      high: 2450,
      chain_id: '3',
      Liquity: 1440000000,
      coin_id: 2,
      date_val: '2023-08-09 00:00:00'
    },
    {
      close_val: 2050,
      volume: 15000000000,
      high: 2275.8,
      chain_id: '3',
      Liquity: 1385000000,
      coin_id: 2,
      date_val: '2023-08-06 00:00:00'
    },
    {
      close_val: 2400,
      volume: 20000000000,
      high: 2550.8,
      chain_id: '3',
      Liquity: 1470000000,
      coin_id: 2,
      date_val: '2023-08-11 00:00:00'
    },
    {
      close_val: 2080,
      volume: 14000000000,
      high: 2200.75,
      chain_id: '3',
      Liquity: 1370000000,
      coin_id: 2,
      date_val: '2023-08-05 00:00:00'
    },
    {
      close_val: 2560,
      volume: 21000000000,
      high: 2900,
      chain_id: '3',
      Liquity: 1600000000,
      coin_id: 2,
      date_val: '2023-08-18 00:00:00'
    },
    {
      close_val: 2200,
      volume: 14500000000,
      high: 2275.8,
      chain_id: '3',
      Liquity: 1385000000,
      coin_id: 2,
      date_val: '2023-08-06 00:00:00'
    },
    {
      close_val: 2700,
      volume: 23000000000,
      high: 2850.5,
      chain_id: '3',
      Liquity: 1580000000,
      coin_id: 2,
      date_val: '2023-08-17 00:00:00'
    },
    {
      close_val: 2330,
      volume: 15000000000,
      high: 2275.8,
      chain_id: '3',
      Liquity: 1385000000,
      coin_id: 2,
      date_val: '2023-08-06 00:00:00'
    },
    {
      close_val: 2900,
      volume: 25000000000,
      high: 3050.2,
      chain_id: '3',
      Liquity: 1660000000,
      coin_id: 2,
      date_val: '2023-08-21 00:00:00'
    },
    {
      close_val: 2440,
      volume: 16000000000,
      high: 2400.5,
      chain_id: '3',
      Liquity: 1420000000,
      coin_id: 2,
      date_val: '2023-08-08 00:00:00'
    },
    {
      close_val: 3050,
      volume: 26000000000,
      high: 3100.8,
      chain_id: '3',
      Liquity: 1680000000,
      coin_id: 2,
      date_val: '2023-08-22 00:00:00'
    },
    {
      close_val: 2550,
      volume: 16500000000,
      high: 2450,
      chain_id: '3',
      Liquity: 1440000000,
      coin_id: 2,
      date_val: '2023-08-09 00:00:00'
    },
    {
      close_val: 3200,
      volume: 27000000000,
      high: 3150.5,
      chain_id: '3',
      Liquity: 1700000000,
      coin_id: 2,
      date_val: '2023-08-23 00:00:00'
    },
    {
      close_val: 2670,
      volume: 17000000000,
      high: 2500.25,
      chain_id: '3',
      Liquity: 1455000000,
      coin_id: 2,
      date_val: '2023-08-10 00:00:00'
    }
  ];

  new Chart(
    document.getElementById('Volume'),
    {
      type: 'line',
      data: {
        labels: data.map(row => row.date_val),
        datasets: [
          /*{
            label: 'Volume variation by Date',
            data: data.map(row => row.volume)
          },
          {
            label: 'Liquity variation by Date',
            data: data.map(row => row.Liquity)
          },*/
          {
            label: 'close variation by Date',
            data: data.map(row => row.close_val)
          }
        ]
      }
    }
  );
})();
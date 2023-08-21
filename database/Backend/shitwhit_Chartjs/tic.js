import Chart from 'chart.js/auto'
let response = await fetch(new Request("https://api.coingecko.com/api/v3/coins/league-of-kingdoms/tickers"), {
  });

let result = JSON.parse(await response.text())
const tick = result['tickers']
//console.log(tick)
/*
{
    base: 'LOKA',
    target: 'USDT',
    market: [Object],
    last: 0.249,
    volume: 137680.76538152611,
    converted_last: [Object],
    converted_volume: [Object],
    trust_score: 'green',
    bid_ask_spread_percentage: 0.120337,
    timestamp: '2023-08-06T20:18:46+00:00',
    last_traded_at: '2023-08-06T20:18:46+00:00',
    last_fetch_at: '2023-08-06T20:18:46+00:00',
    is_anomaly: false,
    is_stale: false,
    trade_url: 'https://www.tokocrypto.com/trade/LOKAUSDT',
    token_info_url: null,
    coin_id: 'league-of-kingdoms',
    target_coin_id: 'tether'
  }
*/

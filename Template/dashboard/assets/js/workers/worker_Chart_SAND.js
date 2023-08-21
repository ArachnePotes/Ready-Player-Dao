function mapper_chart(data) {
  let rubber_to_chart;
  rubber_to_chart = {
    close_val: parseFloat(data.market_data.current_price.usd),
    volume: parseFloat(data.market_data.total_volume.usd),
    high: parseFloat(data.market_data.high_24h.usd),
    chain_id: 1,
    Liquity: parseFloat(data.liquidity_score),
    coin_id: 3, //getCoinID(data.symbol),
  };
  return rubber_to_chart}

function geeko_rubber_data_sand() {
    var Time = 1816000;
    url =
      'https://api.coingecko.com/api/v3/coins/the-sandbox/?localization=true?tickers=true?community_data=true?developer_data=true?vs_currency=usd,eth,btc,matic';
    fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => console.log('request  Success:',res.json().then(
        function(value) {
          let msg = mapper_chart(value)
          //console.log("ANTES DE ENVIAR A API",msg)
          postMessage(msg)
          },
        function(error) {
          console.error('Error:', error) 
        }
      )))
      .then(setTimeout('geeko_rubber_data_sand()', Time));
  }
  

  geeko_rubber_data_sand();
function mapper_coin(data) {
    let rubber_to_coin = {
      coin_id: 4,
      coin_rank: parseInt(data.coingecko_rank),
      coin_Name: data.name,
      coin_slug: data.id,
      coin_symbol: data.symbol,
      coin_address: data.contract_address,
      circulatingSupply: parseInt(data.market_data.circulating_supply),
      totalSupply: parseInt(data.market_data.total_supply),
      maxSupply: parseInt(data.market_data.max_supply)
    };
     return rubber_to_coin
  }
  
  function geeko_shaped_data_ilv() {
    var Time = 1800000;
    url =
      'https://api.coingecko.com/api/v3/coins/illuvium/?localization=true?tickers=true?community_data=true?developer_data=true?vs_currency=usd,eth,btc,matic';
    fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => console.log('request  Success:',res.json().then(
        function(value) {
          let msg = mapper_coin(value)
          //console.log(msg)
          postMessage(msg)
          },
        function(error) {
          console.error('Error:', error) 
        }
      )))
      .then(setTimeout('geeko_shaped_data_ilv()', Time));
  }
  
  
  geeko_shaped_data_ilv();
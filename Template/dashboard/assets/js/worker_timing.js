
function geeko_rubber_data_all_coins() {
    url = "https://api.coingecko.com/api/v3/coins/axie-infinity/?localization=true?tickers=true?community_data=true?developer_data=true?vs_currency=usd,eth,btc,matic"
    
    fetch(url, {
        method: "GET", // or 'PUT'
        //body: JSON.stringify(data), // data can be `string` or {object}!
        //mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:",response))
    //.then( (response)  => postMessage(response))
    .then( setTimeout("geeko_rubber_data_all_coins()",6000))
}


geeko_rubber_data_all_coins();
//const { response } = require("express");
function geeko_rubber_data_all_tickers() {
    url = 'https://api.coingecko.com/api/v3/coins/axie-infinity/tickers/'
    fetch(url, {
        method: "GET", // or 'PUT'
        //body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:",response,postMessage(response)));
        
}


function stopWorker() {
  w.terminate();
  w = undefined;
}

geeko_rubber_data_all_tickers();
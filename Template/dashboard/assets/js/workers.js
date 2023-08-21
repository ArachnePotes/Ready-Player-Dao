let w;
function startWorker(event_dom) {
  if (typeof w == 'undefined') {
  
    var axs = new Worker('../assets/js/workers/worker_Coin_axs.js');//works
    var axs_chart = new Worker('../assets/js/workers/worker_Chart_AXS.js')//works
    var loka = new Worker('../assets/js/workers/worker_LOKA.js');//works
    var loka_chart = new Worker('../assets/js/workers/worker_Chart_LOKA.js');
    var ilv = new Worker('../assets/js/workers/worker_ILV.js');//works
    var ilv_chart = new Worker('../assets/js/workers/worker_Chart_ILV.js');//works
    var sand = new Worker('../assets/js/workers/worker_SAND.js');//works
    var sand_chart = new Worker('../assets/js/workers/worker_Chart_SAND.js');//works
    var uniC = new Worker('../assets/js/workers/worker_cryptoUnicorns.js');//works
    var uniC_chart = new Worker('../assets/js/workers/worker_Chart_cryptoUnicorns.js');//works
    //var split = new Worker('../assets/js/workers/worker_Spliter.js');
    //var split_chart = new Worker('../assets/js/workers/worker_Spliter.js');
    var BigTime = new Worker('../assets/js/workers/worker_BIGTIME.js');//works
    var BigTime_chart = new Worker('../assets/js/workers/worker_Chart_BIGTIME.js');//works
    var pixel = new Worker('../assets/js/workers/worker_PIXEL.js');//works
    var pixel_chart = new Worker('../assets/js/workers/worker_Chart_PIXEL.js');//works
    var castaways = new Worker('../assets/js/workers/worker_castaways.js');//works
    var castaways_chart = new Worker('../assets/js/workers/worker_Chart_castaways.js');//works
    var cc = new Worker('../assets/js/workers/worker_CC.js');//works
    var cc_chart = new Worker('../assets/js/workers/worker_Chart_CC.js');//works
    var champAsc = new Worker('../assets/js/workers/worker_ChampAsc.js');//works
    var champAsc_chart = new Worker('../assets/js/workers/worker_Chart_ChampAsc.js');//works
    var eve = new Worker('../assets/js/workers/worker_EVE.js');//works
    var eve_chart = new Worker('../assets/js/workers/worker_Chart_EVE.js');//works
    var myPetHol = new Worker('../assets/js/workers/worker_mypethol.js');//works
    var myPetHol_chart = new Worker('../assets/js/workers/worker_Chart_mypethol.js');//works
    
  }
  
  axs.onmessage = function (event) {
    const coin = event.data
    let url = 'http://localhost:8080/update/coin';
      function Pushchart(e){
        //const data = // searchCountry(document.getElementById("country").value) 
        const data = {
          "circulatingSupply":coin.circulatingSupply,
          "coin_Name": coin.coin_Name,
          "coin_address": coin.coin_address,
          "coin_id": 2,
          "coin_rank": coin.coin_rank,
          "coin_slug": coin.coin_slug,
          "coin_symbol": coin.coin_symbol,
          "maxSupply": coin.maxSupply,
          "totalSupply": coin.totalSupply
        }    
        console.log(data)
        fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
      }
      Pushchart(event_dom)
  };
  axs_chart.onmessage = function (event) {
    const chart = event.data
    let url = 'http://localhost:8080/update/chart';
      function Pushchart(e){
        //const data = // searchCountry(document.getElementById("country").value) 
        const data = {
          "close_val": chart.close_val,
          "volume": chart.volume,
          "high": chart.high,
          "chain_id": chart.chain_id,
          "Liquity": chart.Liquity,
          "coin_id": 2
        }      
        console.log(data)
        fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
      }
      Pushchart(event_dom)
  };
  loka.onmessage = function (event) {
    const coin = event.data
    let url = 'http://localhost:8080/update/coin';
      function Pushchart(e){
        //const data = // searchCountry(document.getElementById("country").value) 
        const data = {
          "circulatingSupply":coin.circulatingSupply,
          "coin_Name": coin.coin_Name,
          "coin_address": coin.coin_address,
          "coin_id": coin.coin_id,
          "coin_rank": coin.coin_rank,
          "coin_slug": coin.coin_slug,
          "coin_symbol": coin.coin_symbol,
          "maxSupply": coin.maxSupply,
          "totalSupply": coin.totalSupply
        }    
        console.log(data)
        fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
      }
      Pushchart(event_dom)
  };
  loka_chart.onmessage = function (event) {
    const chart = event.data
    let url = 'http://localhost:8080/update/chart';
      function Pushchart(e){
        //const data = // searchCountry(document.getElementById("country").value) 
        const data = {
          "close_val": chart.close_val,
          "volume": chart.volume,
          "high": chart.high,
          "chain_id": chart.chain_id,
          "Liquity": chart.Liquity,
          "coin_id": 5
        }      
        console.log(data)
        fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
      }
      Pushchart(event_dom)
  };
  BigTime.onmessage = function (event) {
    const coin = event.data
    let url = 'http://localhost:8080/update/coin';
      function Pushchart(e){
        //const data = // searchCountry(document.getElementById("country").value) 
        const data = {
          "circulatingSupply":coin.circulatingSupply,
          "coin_Name": coin.coin_Name,
          "coin_address": coin.coin_address,
          "coin_id": coin.coin_id,
          "coin_rank": coin.coin_rank,
          "coin_slug": coin.coin_slug,
          "coin_symbol": coin.coin_symbol,
          "maxSupply": coin.maxSupply,
          "totalSupply": coin.totalSupply
        }    
        console.log(data)
        fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
      }
      Pushchart(event_dom)
  };
  BigTime_chart.onmessage = function (event) {
    const chart = event.data
    let url = 'http://localhost:8080/update/chart';
      function Pushchart(e){
        //const data = // searchCountry(document.getElementById("country").value) 
        const data = {
          "close_val": chart.close_val,
          "volume": chart.volume,
          "high": chart.high,
          "chain_id": chart.chain_id,
          "Liquity": chart.Liquity,
          "coin_id": 7
        }      
        console.log(data)
        fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
      }
      Pushchart(event_dom)
  };
  ilv.onmessage = function (event) {
    const coin = event.data
    let url = 'http://localhost:8080/update/coin';
      function Pushchart(e){
        //const data = // searchCountry(document.getElementById("country").value) 
        const data = {
          "circulatingSupply":coin.circulatingSupply,
          "coin_Name": coin.coin_Name,
          "coin_address": coin.coin_address,
          "coin_id": coin.coin_id,
          "coin_rank": coin.coin_rank,
          "coin_slug": coin.coin_slug,
          "coin_symbol": coin.coin_symbol,
          "maxSupply": coin.maxSupply,
          "totalSupply": coin.totalSupply
        }    
        console.log(data)
        fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
      }
      Pushchart(event_dom)
  };
  ilv_chart.onmessage = function (event) {
    const chart = event.data
    let url = 'http://localhost:8080/update/chart';
      function Pushchart(e){
        //const data = // searchCountry(document.getElementById("country").value) 
        const data = {
          "close_val": chart.close_val,
          "volume": chart.volume,
          "high": chart.high,
          "chain_id": chart.chain_id,
          "Liquity": chart.Liquity,
          "coin_id": 4
        }      
        console.log(data)
        fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
      }
      Pushchart(event_dom)
  };
  sand.onmessage = function (event) {
    const coin = event.data
    let url = 'http://localhost:8080/update/coin';
      function Pushchart(e){
        //const data = // searchCountry(document.getElementById("country").value) 
        const data = {
          "circulatingSupply":coin.circulatingSupply,
          "coin_Name": coin.coin_Name,
          "coin_address": coin.coin_address,
          "coin_id": coin.coin_id,
          "coin_rank": coin.coin_rank,
          "coin_slug": coin.coin_slug,
          "coin_symbol": coin.coin_symbol,
          "maxSupply": coin.maxSupply,
          "totalSupply": coin.totalSupply
        }    
        console.log(data)
        fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
      }
      Pushchart(event_dom)
  };
  sand_chart.onmessage = function (event) {
    const chart = event.data
    let url = 'http://localhost:8080/update/chart';
      function Pushchart(e){
        //const data = // searchCountry(document.getElementById("country").value) 
        const data = {
          "close_val": chart.close_val,
          "volume": chart.volume,
          "high": chart.high,
          "chain_id": chart.chain_id,
          "Liquity": chart.Liquity,
          "coin_id": 3
        }      
        console.log(data)
        fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
      }
      Pushchart(event_dom)
  };
  cc.onmessage = function (event) {
    const coin = event.data
    let url = 'http://localhost:8080/update/coin';
      function Pushchart(e){
        //const data = // searchCountry(document.getElementById("country").value) 
        const data = {
          "circulatingSupply":coin.circulatingSupply,
          "coin_Name": coin.coin_Name,
          "coin_address": coin.coin_address,
          "coin_id": coin.coin_id,
          "coin_rank": coin.coin_rank,
          "coin_slug": coin.coin_slug,
          "coin_symbol": coin.coin_symbol,
          "maxSupply": coin.maxSupply,
          "totalSupply": coin.totalSupply
        }    
        console.log(data)
        fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
      }
      Pushchart(event_dom)
  };
  cc_chart.onmessage = function (event) {
    const chart = event.data
    console.log("hola parcero, esta esuna nft", chart)
    let url = 'http://localhost:8080/update/chart';
      function Pushchart(e){
        //const data = // searchCountry(document.getElementById("country").value) 
        const data = {
          "close_val": chart.close_val,
          "volume": chart.volume,
          "high": chart.high,
          "chain_id": chart.chain_id,
          "Liquity": chart.Liquity,
          "coin_id": chart.coin_id
        }      
        console.log(data)
        fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
      }
      Pushchart(event_dom)
  };
  castaways.onmessage = function (event) {
    const coin = event.data
    let url = 'http://localhost:8080/update/coin';
      function Pushchart(e){
        //const data = // searchCountry(document.getElementById("country").value) 
        const data = {
          "circulatingSupply":coin.circulatingSupply,
          "coin_Name": coin.coin_Name,
          "coin_address": coin.coin_address,
          "coin_id": coin.coin_id,
          "coin_rank": coin.coin_rank,
          "coin_slug": coin.coin_slug,
          "coin_symbol": coin.coin_symbol,
          "maxSupply": coin.maxSupply,
          "totalSupply": coin.totalSupply
        }    
        //console.log(data)
        fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
      }
      Pushchart(event_dom)
  };
  castaways_chart.onmessage = function (event) {
    const chart = event.data
    let url = 'http://localhost:8080/update/chart';
      function Pushchart(e){
        //const data = // searchCountry(document.getElementById("country").value) 
        const data = {
          "close_val": chart.close_val,
          "volume": chart.volume,
          "high": chart.high,
          "chain_id": chart.chain_id,
          "Liquity": chart.Liquity,
          "coin_id": chart.coin_id
        }      
        console.log(data)
        fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
      }
      Pushchart(event_dom)
  };
  eve.onmessage = function (event) {
    const coin = event.data
    let url = 'http://localhost:8080/update/coin';
      function Pushchart(e){
        //const data = // searchCountry(document.getElementById("country").value) 
        const data = {
          "circulatingSupply":coin.circulatingSupply,
          "coin_Name": coin.coin_Name,
          "coin_address": coin.coin_address,
          "coin_id": coin.coin_id,
          "coin_rank": coin.coin_rank,
          "coin_slug": coin.coin_slug,
          "coin_symbol": coin.coin_symbol,
          "maxSupply": coin.maxSupply,
          "totalSupply": coin.totalSupply
        }    
        //console.log(data)
        fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
      }
      Pushchart(event_dom)
  };
  eve_chart.onmessage = function (event) {
    const chart = event.data
    let url = 'http://localhost:8080/update/chart';
      function Pushchart(e){
        //const data = // searchCountry(document.getElementById("country").value) 
        const data = {
          "close_val": chart.close_val,
          "volume": chart.volume,
          "high": chart.high,
          "chain_id": chart.chain_id,
          "Liquity": chart.Liquity,
          "coin_id": chart.coin_id
        }      
        console.log(data)
        fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
      }
      Pushchart(event_dom)
  };
  uniC.onmessage = function (event) {
    const coin = event.data
    let url = 'http://localhost:8080/update/coin';
      function Pushchart(e){
        //const data = // searchCountry(document.getElementById("country").value) 
        const data = {
          "circulatingSupply":coin.circulatingSupply,
          "coin_Name": coin.coin_Name,
          "coin_address": coin.coin_address,
          "coin_id": coin.coin_id,
          "coin_rank": coin.coin_rank,
          "coin_slug": coin.coin_slug,
          "coin_symbol": coin.coin_symbol,
          "maxSupply": coin.maxSupply,
          "totalSupply": coin.totalSupply
        }    
        //console.log(data)
        fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
      }
      Pushchart(event_dom)
  };
  uniC_chart.onmessage = function (event) {
    const chart = event.data
    let url = 'http://localhost:8080/update/chart';
      function Pushchart(e){
        //const data = // searchCountry(document.getElementById("country").value) 
        const data = {
          "close_val": chart.close_val,
          "volume": chart.volume,
          "high": chart.high,
          "chain_id": chart.chain_id,
          "Liquity": chart.Liquity,
          "coin_id": chart.coin_id
        }      
        console.log(data)
        fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
      }
      Pushchart(event_dom)
  };
  pixel.onmessage = function (event) {
    const coin = event.data
    let url = 'http://localhost:8080/update/coin';
      function Pushchart(e){
        //const data = // searchCountry(document.getElementById("country").value) 
        const data = {
          "circulatingSupply":coin.circulatingSupply,
          "coin_Name": coin.coin_Name,
          "coin_address": coin.coin_address,
          "coin_id": coin.coin_id,
          "coin_rank": coin.coin_rank,
          "coin_slug": coin.coin_slug,
          "coin_symbol": coin.coin_symbol,
          "maxSupply": coin.maxSupply,
          "totalSupply": coin.totalSupply
        }    
        //console.log(data)
        fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
      }
      Pushchart(event_dom)
  };
  pixel_chart.onmessage = function (event) {
    const chart = event.data
    let url = 'http://localhost:8080/update/chart';
      function Pushchart(e){
        //const data = // searchCountry(document.getElementById("country").value) 
        const data = {
          "close_val": chart.close_val,
          "volume": chart.volume,
          "high": chart.high,
          "chain_id": chart.chain_id,
          "Liquity": chart.Liquity,
          "coin_id": chart.coin_id
        }      
        console.log(data)
        fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
      }
      Pushchart(event_dom)
  };
  myPetHol.onmessage = function (event) {
    const coin = event.data
    let url = 'http://localhost:8080/update/coin';
      function Pushchart(e){
        //const data = // searchCountry(document.getElementById("country").value) 
        const data = {
          "circulatingSupply":coin.circulatingSupply,
          "coin_Name": coin.coin_Name,
          "coin_address": coin.coin_address,
          "coin_id": coin.coin_id,
          "coin_rank": coin.coin_rank,
          "coin_slug": coin.coin_slug,
          "coin_symbol": coin.coin_symbol,
          "maxSupply": coin.maxSupply,
          "totalSupply": coin.totalSupply
        }    
        //console.log(data)
        fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
      }
      Pushchart(event_dom)
  };
  myPetHol_chart.onmessage = function (event) {
    const chart = event.data
    let url = 'http://localhost:8080/update/chart';
      function Pushchart(e){
        //const data = // searchCountry(document.getElementById("country").value) 
        const data = {
          "close_val": chart.close_val,
          "volume": chart.volume,
          "high": chart.high,
          "chain_id": chart.chain_id,
          "Liquity": chart.Liquity,
          "coin_id": chart.coin_id
        }      
        console.log(data)
        fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
      }
      Pushchart(event_dom)
  };
  champAsc.onmessage = function (event) {
    const coin = event.data
    let url = 'http://localhost:8080/update/coin';
      function Pushchart(e){
        //const data = // searchCountry(document.getElementById("country").value) 
        const data = {
          "circulatingSupply":coin.circulatingSupply,
          "coin_Name": coin.coin_Name,
          "coin_address": coin.coin_address,
          "coin_id": coin.coin_id,
          "coin_rank": coin.coin_rank,
          "coin_slug": coin.coin_slug,
          "coin_symbol": coin.coin_symbol,
          "maxSupply": coin.maxSupply,
          "totalSupply": coin.totalSupply
        }    
        //console.log(data)
        fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
      }
      Pushchart(event_dom)
  };
  champAsc_chart.onmessage = function (event) {
    const chart = event.data
    let url = 'http://localhost:8080/update/chart';
      function Pushchart(e){
        //const data = // searchCountry(document.getElementById("country").value) 
        const data = {
          "close_val": chart.close_val,
          "volume": chart.volume,
          "high": chart.high,
          "chain_id": chart.chain_id,
          "Liquity": chart.Liquity,
          "coin_id": chart.coin_id
        }      
        console.log(data)
        fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
      }
      Pushchart(event_dom)
  };
}


function stopWorker() {
  axs.terminate();
  axs_chart.terminate();
  w = undefined;
}

startWorker();
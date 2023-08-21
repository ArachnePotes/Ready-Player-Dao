import mysql from 'mysql2'
import dotenv from 'dotenv'


dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST ,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise()


/*

let response = await fetch(new Request("https://api.livecoinwatch.com/coins/single"), {
    method: "POST",
    headers: new Headers({
      "content-type": "application/json",
      "x-api-key": process.env.LIVECOIN_API_KEY,
    }),
    body: JSON.stringify({
      currency: "USD",
      code: "ETH",
      meta: true,
    }),
  });

let result = JSON.parse(await response.text())

CoinData = {
    'coin_rank' : coininfoRAW['rank'],
    'coin_Name' : coininfoRAW['name'],
    'coin_slug' : coin_slug, //input
    'coin_symbol' : code, //input
    'coin_address' : contract, //input
    'circulatingSupply' : coininfoRAW['circulatingSupply'],
    'totalSupply' : coininfoRAW['totalSupply'],
    'maxSupply' : coininfoRAW['maxSupply']
}
ChartData = {
    'close_val' : coininfoRAW['rate'],
    'volume' : coininfoRAW['volume'],
    'high' : coininfoRAW["allTimeHighUSD"],
    'liquity' : coininfoRAW['liquidity'],
    'chain_id' : GetChainByCurrency(currency), //or input
    'coin_id' : getCoinID(code),
}
*/
export async function GetChainByCurrency(currency){
    const [result] = await pool.query(` SELECT chain_id FROM readyplayerdao.chain
    where chain_name = ? `, [currency] )
    return result[0]['chain_id']
}

export async function getCoinID(code){
    const [result] = await pool.query(` SELECT coin_id FROM readyplayerdao.coin
    where coin_symbol = ?; `,[code])
    return result[0]['coin_id']
}

//const id_chain = await GetChainByCurrency('ETH');console.log(id_chain)//working
//console.log(result['name'])
//const coin_id = await getCoinID('AXS');console.log(coin_id)//working

//const id_chain = await GetChainByCurrency('USD');console.log(id_chain)//working

export async function getCoinIDbySlug(coin_slug){
  const [result] = await pool.query(` SELECT coin_id FROM readyplayerdao.coin
  where coin_slug = ?; `,[coin_slug])
  return result[0]['coin_id']
}


export async function getChainIdBySlug(chain_slug){
  const [result] = await pool.query(` SELECT chain_name FROM readyplayerdao.chain
  where chain_name = ?; `,[chain_slug])
  return result[0]['chain_name']
}


export async function updateCoin(coin_rank,coin_Name,coin_slug,coin_symbol,coin_address,circulatingSupply,totalSupply,maxSupply,coin_id){
  /**
  rubber_to_coin  =  {
                      coin_rank: data.coingecko_rank,
                      coin_Name: data.name,
                      coin_slug :data.id,
                      coin_symbol: data.symbol,
                      coin_address: data.contract_address,
                      circulatingSupply : data.market_data.circulating_supply, 
                      totalSupply: data.market_data.total_supply, 
                      maxSupply:data.market_data.max_supply
                      }
   */
  const [result] = await pool.query(
    ` UPDATE readyplayerdao.coin SET coin_rank = ? ,coin_Name = ?,coin_slug = ?,coin_symbol = ?,coin_address = ?,circulatingSupply = ?,totalSupply = ?, maxSupply = ? WHERE (coin_id = ?); ` 
    ,[coin_rank,coin_Name,coin_slug,coin_symbol,coin_address,circulatingSupply,totalSupply,maxSupply,coin_id])
  return result.insertId
}

//var id = await getCoinIDbySlug('axie-infinity');console.log(id)
/*const coin_data = {coin_id: 5,
   coin_rank: 817,
    coin_Name: 'League of Kingdoms',
     coin_slug: 'league-of-kingdoms', 
     coin_symbol: 'loka', 
     coin_address: '0x0000000000001',
     circulatingSupply : 1023, 
     totalSupply: 2000, 
     maxSupply:2000}
const upp = await updateCoin(coin_data)
console.log(upp)*/
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

export async function GetChainByCurrency(currency){
    const [result] = await pool.query(` SELECT chain_id FROM readyplayerdao.chain
    where chain_name = ? ; `,[currency])
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

//var id = await getCoinIDbySlug('axie-infinity');console.log(id)
require('mysql2')
require('dotenv').config();

import { getCoinIDbySlug, GetChainByCurrency } from './coin.js'


dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST ,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise()


export async function getChartData(coin_id,chain_id){
    const result = await pool.query(` SELECT close_val, volume, high, chain_id, Liquity, coin_id, date_val FROM readyplayerdao.chart
    where chain_id = ? and coin_id = ?; `,[chain_id,coin_id])
    return result[0]
}


export async function getChart(code){
    const [result] = await pool.query(` SELECT * FROM readyplayerdao.chart
    where chart_id = ?; `,[code])
    return result[0]
}

export async  function UpdateChartDB(coin_slug,data,currency){
    /*
    data Example : 
    {
        "usd": 45.31,
        "usd_market_cap": 256223299.93716887,
        "usd_24h_vol": 8016370.479875076,
        "last_updated_at": 1691428943
    } 
    */
    let coin_id = await getCoinIDbySlug(coin_slug)
    let chain_id = await GetChainByCurrency(currency)
    const [result] = await pool.query(
    ` INSERT INTO  readyplayerdao.chart ( close_val, volume, high, chain_id, coin_id ) VALUES ( ?,?,?,?,? )`,
    [ data[currency] , data[currency + '_24h_vol'] ,data[currency + '_market_cap'], chain_id , coin_id] 
    )
    let id = result.insertId
    return getChart(id)
}

export async  function getValue(coin_slug,currency){
    var url = 'https://api.coingecko.com/api/v3/simple/price?ids='+ coin_slug +'&vs_currencies=' +  currency +'&include_market_cap=true&include_24hr_vol=true&include_24hr_change&include_last_updated_at=true'
    var coingecko = await fetch(url)
    let result = JSON.parse(await coingecko.text())
    //return url
    return result[coin_slug]
}


export async function GameCategories(){
    const result = await pool.query(` SELECT count(game_name) as count , game_category FROM readyplayerdao.game
    group by game_category; `)
    return result[0]
}


export async function UpdateChart_Geeko(chart_shapped){
    /*
    rubber_to_chart = {
                      close_val : data.market_data.market_cap.usd,
                      volume : data.market_data.total_volume.usd,
                      high: data.market_data.high_24h.usd, 
                      chain_id: 1, 
                      Liquity : data.liquidity_score, 
                      coin_id: 2,//getCoinID(data.symbol),
                      date_val : data.market_data.last_updated
                      }
    */ 
    //let coin_id = await getCoinIDbySlug(coin_slug)
    //let chain_id = await GetChainByCurrency(currency)
    const [result] = await pool.query(
    ` INSERT INTO  readyplayerdao.chart ( close_val, volume, high, chain_id, Liquity, coin_id ) VALUES ( ?, ?, ?, ?, ?, ? )`,
    [ 
        chart_shapped['close_val'],
        chart_shapped['volume'],
        chart_shapped['high'],
        chart_shapped['chain_id'],
        chart_shapped['Liquity'],
        chart_shapped['coin_id'],
    ] 
    )
    let id = result.insertId
    return getChart(id)
}

//getChartData_CoinGeeko('usd','the-sandbox','5','30')
//const games = await GameCategories()
//console.log(games)
/* 
let game = 'league-of-kingdoms'
let currency = 'usd'
var try1 = await getValue(game,currency)
var upp = await UpdateChartDB(game,try1,currency)
console.log(upp)
*/
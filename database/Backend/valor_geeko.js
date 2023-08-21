import mysql from 'mysql2'
import dotenv from 'dotenv'
import { getCoinIDbySlug, GetChainByCurrency } from './coin.js'


dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST ,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise()




export async function getChartData_CoinGeeko(chain_slug,coin_slug,decimals,timelap){
    let link = "https://api.coingecko.com/api/v3/coins/"+ coin_slug +"/market_chart/"
    const url = new URL(link)
    url.searchParams.set('vs_currency',chain_slug)
    url.searchParams.set('days',timelap)
    url.searchParams.set('prescision',decimals)
    //console.log(link)
    const response = await fetch(url)
    let result = JSON.parse( await response.text())
    return result
}

export async function MapRawGeeko(result){
    const table = result['prices']
    const chart = table.map((value) => 
        value = {
        "x": value[1],
        "y": new Date(value[0]).toLocaleString()
        })
    return chart
}



// la idea es utilizar web workers para obtener el valor de todo , no siempre sino el de hoy y que se actualize
//const test = await getChartData_CoinGeeko('usd','axie-infinity',"18","30")
//console.log(test)
//const mapedtest = await MapRawGeeko(test)
//console.log(mapedtest)


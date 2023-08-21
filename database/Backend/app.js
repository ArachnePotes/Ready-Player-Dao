import express from "express"
import cors from "cors"; // Importa el paquete cors
import { GetGamesData,GetGameById, AddUserPOST, addUserTsx_ID, addUserTsx } from './User.js'
import { GameCategories,getChartData, getValue , UpdateChartDB ,UpdateChart_Geeko} from "./chart_funtions.js"
import {getChartData_CoinGeeko,MapRawGeeko} from "./valor_geeko.js"
import { getChainIdBySlug, getCoinID,getCoinIDbySlug ,updateCoin} from "./coin.js";

const app = express();
app.use(cors());
app.use( express.json() )

app.get('/games',  async (req, res) => {
    const games = await GetGamesData()
    res.send(games)
  })

app.get("/games/:id",  async (req, res) => {
  /*Http request to get the data of a game based on the id*/
  const id = req.params.id
  const game = await GetGameById(id)
  res.send(game)
})


app.post('/newuser/', async (req, res) => {
  /* POST REQUEST to add User into the database 
  Returns Created and the corresponding data of the table
  */
  const {user_name, last_name,wallet,user_mail,user_country} = req.body
  const user = await AddUserPOST(user_name, last_name,wallet,user_mail,user_country)
  res.sendStatus(201).send(user)
})

app.get("/chart/:chain/:coin/",  async (req, res) => {
  /*Http request to get the data of a game based on the id*/
  const chain = req.params.chain
  const coin = req.params.coin
  const chart = await getChartData(coin,chain)
  res.send(chart)
})


app.post('/tsx', async (req, res) => {
  /* POST REQUEST to add User into the database 
  Returns Created and the corresponding data of the table
  */
  const {coin_id,tsx_hash,user_wallet,recipient_wallet,amount} = req.body
  //const user_id = await GetUserIDbyWallet(user_wallet)
  const tsx = await addUserTsx(coin_id,tsx_hash,user_wallet,recipient_wallet,amount)
  res.sendStatus(201).send(tsx)
})

app.post("/chart/:game/:currency/",  async (req, res) => {
  /*Http request to get the last value of a game based on the slug and curreancy*/
  const game = req.params.game
  const currency = req.params.currency
  var data = await getValue(game,currency)
  var update = await UpdateChartDB(game,data,currency)
  res.sendStatus(201).send(update)
})

app.get("/chart/games/category/mapped",  async (req, res) => {
  /*Http request to get the data of a game based on the id*/
  const chart = await GameCategories()
  const Yaxis = chart.map((value) => 
  value = {
    "x" : value.game_category,
    "y" : value.count
  }); 
  res.send(Yaxis)
})


app.get("/chart/:chain/:coin/mapped",  async (req, res) => {
  /*Http request to get the data of a game based on the id*/
  const chain = req.params.chain
  const coin = req.params.coin
  const chart = await getChartData(coin,chain)
  const Yaxis = chart.map((value) => 
  value = {
    "x" : value.date_val,
    "y" : value.close_val
  }); 
  res.send(Yaxis)
}) 


app.get("/chart/:chain/:game_slug/:timelap/mapped", async (req, res) => {
  /*Http request to get the data of a game based on the id*/
  const chain = req.params.chain
  const game_slug = req.params.game_slug
  const timelap = req.params.timelap
  const coin = getCoinID()
  const chart = await getChartData(coin,chain)
  res.send(chart)
})

app.post("/update/chart",  async (req, res) => {
  /*Http request to get the last value of a game based on the slug and curreancy*/
  //const {coin_id, coin_rank, coin_Name, coin_slug, coin_symbol, coin_address, circulatingSupply , totalSupply, maxSupply } = req.body
  //const user_id = await GetUserIDbyWallet(user_wallet)
  const chart_data = req.body
  const upp = await UpdateChart_Geeko(chart_data)
  res.send(upp)
})

app.post("/update/coin",  async (req, res) => {
  /*Http request to get the last value of a game based on the slug and curreancy*/
  //const {coin_id, coin_rank, coin_Name, coin_slug, coin_symbol, coin_address, circulatingSupply , totalSupply, maxSupply } = req.body
  //const user_id = await GetUserIDbyWallet(user_wallet)
  const coin_data = req.body
  const upp = await updateCoin(coin_data)
  res.send(upp)
})

app.get("/tests/:chain/:game_slug/:timelap", async (req, res) => {
  /*Http request to get the data of a game based on the id*/
  const _chain = req.params.chain
  const _game_slug = req.params.game_slug
  const _timelap = req.params.timelap
  const data = {
    chain : _chain,
    game_slug : _game_slug,
    timelaps : _timelap,
    message : "This is a test"
  }
  const coin = await getCoinIDbySlug(_game_slug)
  const chain_id = await getChainIdBySlug(_chain)
  const chart = await getChartData(2,2)//arreglar con mas datos
  const chart_mapped = chart.map((value) => 
  value = {
    "x" : value.date_val,
    "y" : value.close_val
  }); 
  //const data = await getChartData_CoinGeeko(chain,game_slug,"5",timelap)
  //const chart = await MapRawGeeko(data)
  /*const table = new Object(data['prices'])
  const chart = table.map((value) => 
        value = {
        "x": value[1],
        "y": new Date(value[0]).toLocaleString()
        })*/
  res.status(200).send(chart_mapped)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.sendStatus(500).send('Something broke!')
})

app.listen(8080,() => {
    console.log("Server Running on port 8080")
})



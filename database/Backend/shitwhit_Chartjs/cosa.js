import  { getChartData  , getValue} from './chart_api.js'

export async function pasame_tabla(){
    const tabla = await getChartData(2,2)
    return tabla
}

export async function mapped_close(){
    const  data_raw = await getChartData(2,2)

    return data_raw;
}

//var raw = await getChartData(2,2);console.log(raw)
//var close = await mapped_close();console.log(close)
//var tabla = await pasame_tabla();console.log(tabla)


const today = new Date().toLocaleString() ;
const day7 = new Date(1691909037000).toLocaleString();
console.log(today,"-",day7)


const one = 1690952399*1000 // primero
const month = 1693457999*1000 // 30

const day1 = new Date(one).toLocaleString();
const day30 = new Date(month).toLocaleString();
console.log(day1,"-",day30)

const mon = month  - one
console.log('constante = ',mon,mon/2,mon/2)
const quinc = mon/2
const week = quinc/2
const Month_ago = Date.parse(today) - mon
const quinc_ago = Date.parse(today) - quinc
const week_ago = Date.parse(today) - week
const test1 = new Date(Month_ago).toLocaleString();
const test2 = new Date(quinc_ago).toLocaleString();
const test3 = new Date(week_ago).toLocaleString();
console.log('hace un mes',test1)
console.log('hace quince dias',test2)
console.log('hace una sem ',test3)
//2505600000 1252800000 1252800000
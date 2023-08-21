import { UpdateChart_Geeko } from './chart_funtions.cjs'
let w;
export async function startWorker() {

        if (typeof w == 'undefined') {
          //NFT => NOT FOUND COIN 
          //w = new Worker('../assets/js/geeko_rubber_data_all_coins.js');
          axs = new Worker('./workers/worker_Chart_AXS.js')
          //setTimeout(axs_coin = new Worker('../assets/js/workers/worker_coin_axs.js'),36000)
          //setTimeout(loka = new Worker('../assets/js/workers/worker_LOKA.js'),60*2*1000)
         // setTimeout(pixel = new Worker('../assets/js/workers/worker_pixel.js'),60*3*1000)//NFT
          //setTimeout(castaways = new Worker('../assets/js/workers/worker_castaways.js'),60*4*1000)//NFT
          //setTimeout(cc = new Worker('../assets/js/workers/worker_CC.js'),60*1*1000)NFT
          //setTimeout(champAsc = new Worker('../assets/js/workers/worker_ChampAsc.js'),60*2*1000)//NFT
          //setTimeout(eve = new Worker('../assets/js/workers/worker_EVE.js'),60*3*1000)//NFT
          //setTimeout(ilv = new Worker('../assets/js/workers/worker_ILV.js'),60*4*1000)
          //setTimeout(sand = new Worker('../assets/js/workers/worker_SAND.js'),60*1*1000)
          ////setTimeout(uniC = new Worker('../assets/js/workers/worker_cryptoUnicorns.js'),60*2*1000)//NFT
          ////setTimeout(split = new Worker('../assets/js/workers/worker_Spliter.js'),60*3*1000)//NFT
          //setTimeout(BigTime = new Worker('../assets/js/workers/worker_BIGTIME.js'),60*4*1000)
          ////setTimeout(myPetHol = new Worker('../assets/js/workers/worker_mypethol.js'),60*1*1000)//NFT
          //setTimeout(axs_coin = new Worker('../assets/js/workers/worker_Coin_AXS.js'),1000)
          //setTimeout(loka_coin = new Worker('../assets/js/workers/worker_coin_LOKA.js'),60*2*1000)
          //setTimeout(ilv_coin = new Worker('../assets/js/workers/worker_coin_ILV.js'),60*4*1000)
          //setTimeout(sand_coin = new Worker('../assets/js/workers/worker_coin_SAND.js'),60*1*1000)
          //setTimeout(BigTime_coin = new Worker('../assets/js/workers/worker_coin_BIGTIME.js'),60*4*1000)
        }
        axs.onmessage = function (event) {
          UpdateChart_Geeko(event)//document.getElementById('result').innerHTML = event.data;
          console.log('check DB bro');
        };
        loka.onmessage = function (event) {
          //document.getElementById('result').innerHTML = event.data;
          console.log(event.data);
        };
      }
      function stopWorker() {
        axs.terminate();
        loka.terminate();
        pixel.terminate();
        castaways.terminate();
        cc.terminate();
        champAsc.terminate();
        eve.terminate();
        ilv.terminate();
        sand.terminate();
        uniC.terminate();
        split.terminate();
        BigTime.terminate();
        myPetHol.terminate();
        w = undefined;
       //console.log('worker Started at ../Data_src')
      }
import requests as rq
import json
from pprint import pprint
'''

me toca buscar las ids correctas de algunas monedas
a
'''

url = "https://api.coingecko.com/api/v3/nfts/castle-crush/"
res = rq.get(url)
jfile = json.loads(res.text)
result = open('database\Data_scripts\coin_data_casta.json',"w")
with open('database\Data_scripts\coin_data_casta.json', 'w', encoding='utf-8') as f:
    json.dump(jfile, f, ensure_ascii=False, indent=4)

result.close()
#print(jfile['market_data']['circulating_supply'])
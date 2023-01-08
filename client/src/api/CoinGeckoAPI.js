import axios from 'axios';

const url = 'https://api.coingecko.com/api/v3';

//https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false

export const fetchCoins = () => axios.get(`${url}/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
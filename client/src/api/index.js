import axios from 'axios';

const url = 'http://localhost:5001/posts';

export const fetchTradeDetail = () => axios.get(url);
export const createTradeDetail = (newTrade) => axios.post(url, newTrade);
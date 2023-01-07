import CoinGecko from 'coingecko-api';

const CoinGeckoClient = new CoinGecko();

export const func = async() => {
    let data = await CoinGeckoClient.coins.all();
}
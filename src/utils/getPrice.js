const axios = require('axios');

const getCoingeckoPrice = async id => {
  const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
    params: {
      ids: id,
      vs_currencies: 'usd',
    },
  });
  return response.data[id].usd;
};

const getPancakePrice = async id => {
  const response = await axios.get('https://api.pancakeswap.finance/api/v1/price');
  console.log('YO', response.data.prices[id]);
  return response.data.prices[id];
};

module.exports = {
  getCoingeckoPrice,
  getPancakePrice,
};

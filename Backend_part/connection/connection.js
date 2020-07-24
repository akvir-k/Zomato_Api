const zomato = require('zomato')
var client = zomato.createClient({
    userKey: '84814864419952f87d0bb16ca802042a', //as obtained from [Zomato API](https://developers.zomato.com/apis)
  });

module.exports= client;
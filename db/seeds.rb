User.create(username: 'Demetrius Ford', email: 'demet8@gmail.com', password: 'sdlearn123')
Coin.create([ 
    {
    user_id: 1,
    name: 'USD Coin',
    ticker: 'usdc',
    logo: "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389",
    price: 1.00,
    price_change_24h: -0.000560419114,
    price_change_percentage_24h: -0.05595,
    quantity: 20000.00
    },
    {
    user_id: 1,
    name: 'Bitcoin',
    ticker: 'btc',
    logo: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    price: 40045,
    price_change_24h: -1056.982212832365,
    price_change_percentage_24h: -2.57162,
    quantity: 1.0
    },
    {
    user_id: 1,
    name: 'Ethereum',
    ticker: 'eth',
    logo:"https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    price: 2774.92,
    price_change_24h: -131.0947565989,
    price_change_percentage_24h: -4.51115,
    quantity: 2.0
    },
    {
    user_id: 1,
    name: 'BNB',
    ticker: 'bnb',
    logo: "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",
    price: 396.63,
    price_change_24h: -9.531828542664,
    price_change_percentage_24h: -2.34678,
    quantity: 3.0
    },
    {
    user_id: 1,
    name: 'Dogecoin',
    ticker: 'doge',
    logo: "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256",
    price: 0.138172,
    price_change_24h: -0.002625331733,
    price_change_percentage_24h: -1.86462,
    quantity: 420.0
    }   
    
])


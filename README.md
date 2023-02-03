# binance_websocket_proj
 Use binance Websocket, Subscribe to BTCUSDT kline/candlestick, Store data on MongoDB, Show data with a Get Request.


# Automatic: (First Implementation)

Uncomment the ```// BinanceSocketModule``` in ```src/app.module.ts```, to Subscribe and Store data Automatically when App Starts.

And use

GET /binance/showData:
   
     Show stored data to User

GET /binance/deleteData:
   
     Delete stored data


# OR: API end point to subscribe (Second Implementation)

Without uncommenting BinanceSocketModule use the api to subscribe and get data.

GET /binance/subBtcusdt:
   
     Subscribe to BTCUSDT kline/candlestick and store data on local MongoDB
  
(Implemented all of them with GET so you can easily test it on a browser without the need of POSTMAN)


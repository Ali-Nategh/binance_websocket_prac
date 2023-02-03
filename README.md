# binance_websocket_proj
 Use binance Websocket, Subscribe to BTCUSDT kline/candlestick, Store data on MongoDB, Show data with a Get Request.


# API end points:

GET /binance/subBtcusdt:
   
     Subscribe to BTCUSDT kline/candlestick and store data on local MongoDB
  
GET /binance/showData:
   
     Show stored data to User
  
GET /binance/deleteData:
   
     Delete stored data


(Implemented all of them with GET so you can easily test it on a browser without the need of POSTMAN)



# OR: (Second Implementation)
 Uncomment the ```// BinanceSocketModule``` in ```src/app.module.ts```, to Subscribe and Store data Automatically when App Starts

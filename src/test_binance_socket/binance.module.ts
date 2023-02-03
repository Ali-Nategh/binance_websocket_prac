import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { KlineCandleRepository } from "src/websocket/kline-candle.repository"
import { KlineCandle, KlineCandleSchema } from "src/websocket/schemas/kline-candle.schema"
import { BinanceSocketClient } from "./binance"

@Module({
    imports: [MongooseModule.forFeature([{ name: KlineCandle.name, schema: KlineCandleSchema }])],
    providers: [BinanceSocketClient, KlineCandleRepository],
})
export class BinanceSocketModule { }
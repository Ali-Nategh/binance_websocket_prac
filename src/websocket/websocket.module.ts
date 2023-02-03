import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { RedisCacheModule } from "../test_redis_cache/redis-cache.module"
import { KlineCandleRepository } from "./kline-candle.repository"
import { KlineCandle, KlineCandleSchema } from "./schemas/kline-candle.schema"
import { BinanceController } from "./websocket.controller"
import { BinanceService } from "./websocket.service"

@Module({
    // imports: [RedisCacheModule],
    imports: [MongooseModule.forFeature([{ name: KlineCandle.name, schema: KlineCandleSchema }])],
    providers: [BinanceService, KlineCandleRepository],
    controllers: [BinanceController]
})
export class SocketModule { }
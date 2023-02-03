import { Injectable } from '@nestjs/common';
import Binance from 'binance-api-node';
import { KlineCandleRepository } from './kline-candle.repository';
import { KlineCandle } from './schemas/kline-candle.schema';
// import { RedisCacheService } from '../test_redis_cache/redis-cache.service';
// import { createClient } from '@redis/client';


@Injectable()
export class BinanceService {
    private client: any;

    constructor(
        // private cacheManager: RedisCacheService, // DID NOT WORK
        private readonly klineCandleRepository: KlineCandleRepository
    ) {
        this.client = Binance();
    }

    subscribeToCandle(symbol: string, interval: string) {
        this.client.ws.candles(symbol, interval, async (candlestick: any) => {
            // await this.setRedisValue(candlestick.eventTime, candlestick)
            console.log(candlestick)
            await this.klineCandleRepository.create({
                eventType: null,
                eventTime: null,
                symbol: null,
                kLineInfo: { kline: candlestick },
            })
        });
    }

    async listAllCandles(): Promise<KlineCandle[]> {
        return await this.klineCandleRepository.find({})
    }

    async deleteDatabase() {
        await this.klineCandleRepository.deleteMany({})
    }

    // async listAllBTCUSTD() {
    //     return await this.cacheManager.keys('*');
    // }

    // async setRedisValue(KEY: string, value: any) {
    //     await this.cacheManager.set(KEY, value);
    // }
    // --------------

    // async createRedisValue(data: any) {
    //     const client = createClient({
    //         url: 'redis://localhost:6379'
    //     });
    //     await client.connect();

    //     await client.set('key', 'value');
    //     const value = await client.get('key');
    //     return value;
    // }
}
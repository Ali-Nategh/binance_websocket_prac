import { Controller, Get } from '@nestjs/common';
import { BinanceService } from './websocket.service';

@Controller('binance')
export class BinanceController {
    constructor(private readonly binanceService: BinanceService) { }

    @Get('subBtcusdt')
    // Connect and subscribe to BTCUSDT, Then cache the data in redis
    subscribeBTCUSTD() {
        this.binanceService.subscribeToCandle('btcusdt', '1s');
        return 'subscribed to btcusdt, make a get request to "/binance/showData" to see the data';
    }

    @Get('showData')
    // Return the Cached BTCUSDT data
    async listBTCUSTD() {
        return await this.binanceService.listAllCandles();
    }

    @Get('deleteData')
    // Return the Cached BTCUSDT data
    async deleteDatabase() {
        await this.binanceService.deleteDatabase();
        return 'Stored data deleted successfully'
    }
}

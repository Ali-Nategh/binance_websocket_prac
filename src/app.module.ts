import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { SocketModule } from './websocket/websocket.module';
import { BinanceSocketModule } from './test_binance_socket/binance.module';
import { RedisCacheModule } from './test_redis_cache/redis-cache.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/ws'),
    SocketModule,
    // BinanceSocketModule,
    // RedisCacheModule,
    // ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

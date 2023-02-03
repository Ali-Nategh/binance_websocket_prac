import { CacheModule, Module } from '@nestjs/common';
import { RedisCacheService } from './redis-cache.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';
import { createClient } from '@redis/client';


@Module({
    imports: [
        CacheModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            // useFactory?: (...args: any[]) => Promise<CacheModuleOptions<StoreConfig>> | CacheModuleOptions<StoreConfig>;

            useFactory: async (configService: ConfigService) => ({
                // store: redisStore,
                host: configService.get('127.0.0.1'),
                port: configService.get('6379'),
                ttl: configService.get('6000'),
                max: configService.get('10000')
            })
        })
    ],
    providers: [RedisCacheService],
    exports: [RedisCacheService]
})

// @Module({
//     providers: [
//         {
//             provide: 'REDIS_OPTIONS',
//             useValue: {
//                 url: 'redis://localhost:6379'
//             }
//         },
//         {
//             inject: ['REDIS_OPTIONS'],
//             provide: 'REDIS_CLIENT',
//             useFactory: async (options: { url: string }) => {
//                 const client = createClient(options);
//                 await client.connect();
//                 return client;
//             }
//         }
//     ],
//     exports: ['REDIS_CLIENT'],
// })

export class RedisCacheModule { }

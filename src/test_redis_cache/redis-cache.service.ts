import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisCacheService {
    constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) { }

    async get(key: string): Promise<any> {
        return await this.cache.get(key);
    }

    // async keys(pattern?: string): Promise<any> {
    //     return await this.cache.keys(pattern);
    // }

    async set(key: string, value: any) {
        await this.cache.set(key, value, 6000);
    }

    async reset() {
        await this.cache.reset();
    }

    async del(key: string) {
        await this.cache.del(key);
    }
}
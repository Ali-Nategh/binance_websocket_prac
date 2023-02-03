import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { KlineCandle, KlineCandleDocument } from "./schemas/kline-candle.schema";

@Injectable()
export class KlineCandleRepository {
    constructor(@InjectModel(KlineCandle.name) private klineCandleModel: Model<KlineCandleDocument>) { }

    async findOne(klineCandelFilterQuery: FilterQuery<KlineCandle>): Promise<KlineCandle> {
        return this.klineCandleModel.findOne(klineCandelFilterQuery)
    }

    async find(klineCandelsFilterQuery: FilterQuery<KlineCandle>): Promise<KlineCandle[]> {
        return this.klineCandleModel.find(klineCandelsFilterQuery)
    }

    async create(klineCandle: KlineCandle): Promise<KlineCandle> {
        const newKlineCandle = new this.klineCandleModel(klineCandle)
        return newKlineCandle.save()
    }

    async deleteMany(klineCandelsFilterQuery: FilterQuery<KlineCandle>) {
        return this.klineCandleModel.deleteMany(klineCandelsFilterQuery)
    }
}

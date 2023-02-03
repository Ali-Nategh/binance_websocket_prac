import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type KlineCandleDocument = KlineCandle & Document

@Schema()
export class KlineCandle {
    @Prop()
    eventType: string;

    @Prop()
    eventTime: number;

    @Prop()
    symbol: string;

    @Prop(raw({
        // the "k" part
        t: { type: Number },
        T: { type: Number },
        s: { type: String },
        i: { type: String },
        f: { type: Number },
        L: { type: Number },
        o: { type: String },
        c: { type: String },
        h: { type: String },
        l: { type: String },
        v: { type: String },
        n: { type: Number },
        x: { type: Boolean },
        q: { type: String },
        V: { type: String },
        Q: { type: String },
        B: { type: String },
        // store the whole object
        kline: { type: Object }
    }))
    kLineInfo: Record<string, any>;
}

// A Kline/CandleStick Response:
// {
//     e: 'kline',
//     E: 1675423484000,
//     s: 'BTCUSDT',
//     k: {
//       t: 1675423483000,
//       T: 1675423483999,
//       s: 'BTCUSDT',
//       i: '1s',
//       f: 2623721738,
//       L: 2623721808,
//       o: '23476.23000000',
//       c: '23477.65000000',
//       h: '23478.10000000',
//       l: '23476.23000000',
//       v: '2.34136000',
//       n: 71,
//       x: true,
//       q: '54969.41201440',
//       V: '2.29194000',
//       Q: '53809.17556140',
//       B: '0'
//     }
//   }

// Other Implementations Response:
// {
//   eventType: 'kline',
//   eventTime: 1675421602000,
//   symbol: 'BTCUSDT',
//   startTime: 1675421601000,
//   closeTime: 1675421601999,
//   firstTradeId: 2623577977,
//   lastTradeId: 2623578010,
//   open: '23432.46000000',
//   high: '23432.90000000',
//   low: '23432.02000000',
//   close: '23432.06000000',
//   volume: '1.23076000',
//   trades: 34,
//   interval: '1s',
//   isFinal: true,
//   quoteVolume: '28839.52785780',
//   buyVolume: '0.30743000',
//   quoteBuyVolume: '7203.87831060'
// }

export const KlineCandleSchema = SchemaFactory.createForClass(KlineCandle);
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Params, ParamsSDKType } from "./genesis";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ArithmeticTwapRequest {
    poolId: Long;
    baseAsset: string;
    quoteAsset: string;
    startTime?: Timestamp;
    endTime?: Timestamp;
}
export interface ArithmeticTwapRequestSDKType {
    pool_id: Long;
    base_asset: string;
    quote_asset: string;
    start_time?: TimestampSDKType;
    end_time?: TimestampSDKType;
}
export interface ArithmeticTwapResponse {
    arithmeticTwap: string;
}
export interface ArithmeticTwapResponseSDKType {
    arithmetic_twap: string;
}
export interface ArithmeticTwapToNowRequest {
    poolId: Long;
    baseAsset: string;
    quoteAsset: string;
    startTime?: Timestamp;
}
export interface ArithmeticTwapToNowRequestSDKType {
    pool_id: Long;
    base_asset: string;
    quote_asset: string;
    start_time?: TimestampSDKType;
}
export interface ArithmeticTwapToNowResponse {
    arithmeticTwap: string;
}
export interface ArithmeticTwapToNowResponseSDKType {
    arithmetic_twap: string;
}
export interface ParamsRequest {
}
export interface ParamsRequestSDKType {
}
export interface ParamsResponse {
    params?: Params;
}
export interface ParamsResponseSDKType {
    params?: ParamsSDKType;
}
export declare const ArithmeticTwapRequest: {
    encode(message: ArithmeticTwapRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ArithmeticTwapRequest;
    fromJSON(object: any): ArithmeticTwapRequest;
    toJSON(message: ArithmeticTwapRequest): unknown;
    fromPartial(object: Partial<ArithmeticTwapRequest>): ArithmeticTwapRequest;
};
export declare const ArithmeticTwapResponse: {
    encode(message: ArithmeticTwapResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ArithmeticTwapResponse;
    fromJSON(object: any): ArithmeticTwapResponse;
    toJSON(message: ArithmeticTwapResponse): unknown;
    fromPartial(object: Partial<ArithmeticTwapResponse>): ArithmeticTwapResponse;
};
export declare const ArithmeticTwapToNowRequest: {
    encode(message: ArithmeticTwapToNowRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ArithmeticTwapToNowRequest;
    fromJSON(object: any): ArithmeticTwapToNowRequest;
    toJSON(message: ArithmeticTwapToNowRequest): unknown;
    fromPartial(object: Partial<ArithmeticTwapToNowRequest>): ArithmeticTwapToNowRequest;
};
export declare const ArithmeticTwapToNowResponse: {
    encode(message: ArithmeticTwapToNowResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ArithmeticTwapToNowResponse;
    fromJSON(object: any): ArithmeticTwapToNowResponse;
    toJSON(message: ArithmeticTwapToNowResponse): unknown;
    fromPartial(object: Partial<ArithmeticTwapToNowResponse>): ArithmeticTwapToNowResponse;
};
export declare const ParamsRequest: {
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsRequest;
    fromJSON(_: any): ParamsRequest;
    toJSON(_: ParamsRequest): unknown;
    fromPartial(_: Partial<ParamsRequest>): ParamsRequest;
};
export declare const ParamsResponse: {
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsResponse;
    fromJSON(object: any): ParamsResponse;
    toJSON(message: ParamsResponse): unknown;
    fromPartial(object: Partial<ParamsResponse>): ParamsResponse;
};

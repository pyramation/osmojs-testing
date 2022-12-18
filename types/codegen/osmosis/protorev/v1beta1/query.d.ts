import { Params, ParamsSDKType } from "./params";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { PoolStatistics, PoolStatisticsSDKType, TokenPairArbRoutes, TokenPairArbRoutesSDKType } from "./protorev";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/**
 * QueryGetProtoRevNumberOfTradesRequest is request type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesRequest {
}
/**
 * QueryGetProtoRevNumberOfTradesRequest is request type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesRequestSDKType {
}
/**
 * QueryGetProtoRevNumberOfTradesResponse is response type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesResponse {
    /** number_of_trades is the number of trades the module has executed */
    numberOfTrades: string;
}
/**
 * QueryGetProtoRevNumberOfTradesResponse is response type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesResponseSDKType {
    number_of_trades: string;
}
/**
 * QueryGetProtoRevProfitsByDenomRequest is request type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomRequest {
    /** denom is the denom to query profits by */
    denom: string;
}
/**
 * QueryGetProtoRevProfitsByDenomRequest is request type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomRequestSDKType {
    denom: string;
}
/**
 * QueryGetProtoRevProfitsByDenomResponse is response type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomResponse {
    /** profit is the profits of the module by the selected denom */
    profit?: Coin;
}
/**
 * QueryGetProtoRevProfitsByDenomResponse is response type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomResponseSDKType {
    profit?: CoinSDKType;
}
/**
 * QueryGetProtoRevAllProfitsRequest is request type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsRequest {
}
/**
 * QueryGetProtoRevAllProfitsRequest is request type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsRequestSDKType {
}
/**
 * QueryGetProtoRevAllProfitsResponse is response type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsResponse {
    /** profits is a list of all of the profits from the module */
    profits: Coin[];
}
/**
 * QueryGetProtoRevAllProfitsResponse is response type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsResponseSDKType {
    profits: CoinSDKType[];
}
/**
 * QueryGetProtoRevStatisticsByPoolRequest is request type for the
 * Query/GetProtoRevStatisticsByPool RPC method.
 */
export interface QueryGetProtoRevStatisticsByPoolRequest {
    /** pool_id is the pool id to query statistics by */
    poolId: Long;
}
/**
 * QueryGetProtoRevStatisticsByPoolRequest is request type for the
 * Query/GetProtoRevStatisticsByPool RPC method.
 */
export interface QueryGetProtoRevStatisticsByPoolRequestSDKType {
    pool_id: Long;
}
/**
 * QueryGetProtoRevStatisticsByPoolResponse is response type for the
 * Query/GetProtoRevStatisticsByPool RPC method.
 */
export interface QueryGetProtoRevStatisticsByPoolResponse {
    /**
     * statistics contains the number of trades the module has executed after a
     * swap on a given pool and the profits from the trades
     */
    statistics?: PoolStatistics;
}
/**
 * QueryGetProtoRevStatisticsByPoolResponse is response type for the
 * Query/GetProtoRevStatisticsByPool RPC method.
 */
export interface QueryGetProtoRevStatisticsByPoolResponseSDKType {
    statistics?: PoolStatisticsSDKType;
}
/**
 * QueryGetProtoRevAllStatisticsRequest is request type for the
 * Query/GetProtoRevAllStatistics RPC method.
 */
export interface QueryGetProtoRevAllStatisticsRequest {
}
/**
 * QueryGetProtoRevAllStatisticsRequest is request type for the
 * Query/GetProtoRevAllStatistics RPC method.
 */
export interface QueryGetProtoRevAllStatisticsRequestSDKType {
}
/**
 * QueryGetProtoRevAllStatisticsResponse is response type for the
 * Query/GetProtoRevAllStatistics RPC method.
 */
export interface QueryGetProtoRevAllStatisticsResponse {
    /**
     * statistics contains the number of trades the module has executed after a
     * swap on a given pool and the profits from the trades for all pools
     */
    statistics: PoolStatistics[];
}
/**
 * QueryGetProtoRevAllStatisticsResponse is response type for the
 * Query/GetProtoRevAllStatistics RPC method.
 */
export interface QueryGetProtoRevAllStatisticsResponseSDKType {
    statistics: PoolStatisticsSDKType[];
}
/**
 * QueryGetProtoRevTokenPairArbRoutesRequest is request type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesRequest {
}
/**
 * QueryGetProtoRevTokenPairArbRoutesRequest is request type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesRequestSDKType {
}
/**
 * QueryGetProtoRevTokenPairArbRoutesResponse is response type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesResponse {
    /**
     * routes is a list of all of the hot routes that the module is currently
     * arbitraging
     */
    routes: TokenPairArbRoutes[];
}
/**
 * QueryGetProtoRevTokenPairArbRoutesResponse is response type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesResponseSDKType {
    routes: TokenPairArbRoutesSDKType[];
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetProtoRevNumberOfTradesRequest: {
    encode(_: QueryGetProtoRevNumberOfTradesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevNumberOfTradesRequest;
    fromJSON(_: any): QueryGetProtoRevNumberOfTradesRequest;
    toJSON(_: QueryGetProtoRevNumberOfTradesRequest): unknown;
    fromPartial(_: Partial<QueryGetProtoRevNumberOfTradesRequest>): QueryGetProtoRevNumberOfTradesRequest;
};
export declare const QueryGetProtoRevNumberOfTradesResponse: {
    encode(message: QueryGetProtoRevNumberOfTradesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevNumberOfTradesResponse;
    fromJSON(object: any): QueryGetProtoRevNumberOfTradesResponse;
    toJSON(message: QueryGetProtoRevNumberOfTradesResponse): unknown;
    fromPartial(object: Partial<QueryGetProtoRevNumberOfTradesResponse>): QueryGetProtoRevNumberOfTradesResponse;
};
export declare const QueryGetProtoRevProfitsByDenomRequest: {
    encode(message: QueryGetProtoRevProfitsByDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevProfitsByDenomRequest;
    fromJSON(object: any): QueryGetProtoRevProfitsByDenomRequest;
    toJSON(message: QueryGetProtoRevProfitsByDenomRequest): unknown;
    fromPartial(object: Partial<QueryGetProtoRevProfitsByDenomRequest>): QueryGetProtoRevProfitsByDenomRequest;
};
export declare const QueryGetProtoRevProfitsByDenomResponse: {
    encode(message: QueryGetProtoRevProfitsByDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevProfitsByDenomResponse;
    fromJSON(object: any): QueryGetProtoRevProfitsByDenomResponse;
    toJSON(message: QueryGetProtoRevProfitsByDenomResponse): unknown;
    fromPartial(object: Partial<QueryGetProtoRevProfitsByDenomResponse>): QueryGetProtoRevProfitsByDenomResponse;
};
export declare const QueryGetProtoRevAllProfitsRequest: {
    encode(_: QueryGetProtoRevAllProfitsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevAllProfitsRequest;
    fromJSON(_: any): QueryGetProtoRevAllProfitsRequest;
    toJSON(_: QueryGetProtoRevAllProfitsRequest): unknown;
    fromPartial(_: Partial<QueryGetProtoRevAllProfitsRequest>): QueryGetProtoRevAllProfitsRequest;
};
export declare const QueryGetProtoRevAllProfitsResponse: {
    encode(message: QueryGetProtoRevAllProfitsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevAllProfitsResponse;
    fromJSON(object: any): QueryGetProtoRevAllProfitsResponse;
    toJSON(message: QueryGetProtoRevAllProfitsResponse): unknown;
    fromPartial(object: Partial<QueryGetProtoRevAllProfitsResponse>): QueryGetProtoRevAllProfitsResponse;
};
export declare const QueryGetProtoRevStatisticsByPoolRequest: {
    encode(message: QueryGetProtoRevStatisticsByPoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevStatisticsByPoolRequest;
    fromJSON(object: any): QueryGetProtoRevStatisticsByPoolRequest;
    toJSON(message: QueryGetProtoRevStatisticsByPoolRequest): unknown;
    fromPartial(object: Partial<QueryGetProtoRevStatisticsByPoolRequest>): QueryGetProtoRevStatisticsByPoolRequest;
};
export declare const QueryGetProtoRevStatisticsByPoolResponse: {
    encode(message: QueryGetProtoRevStatisticsByPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevStatisticsByPoolResponse;
    fromJSON(object: any): QueryGetProtoRevStatisticsByPoolResponse;
    toJSON(message: QueryGetProtoRevStatisticsByPoolResponse): unknown;
    fromPartial(object: Partial<QueryGetProtoRevStatisticsByPoolResponse>): QueryGetProtoRevStatisticsByPoolResponse;
};
export declare const QueryGetProtoRevAllStatisticsRequest: {
    encode(_: QueryGetProtoRevAllStatisticsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevAllStatisticsRequest;
    fromJSON(_: any): QueryGetProtoRevAllStatisticsRequest;
    toJSON(_: QueryGetProtoRevAllStatisticsRequest): unknown;
    fromPartial(_: Partial<QueryGetProtoRevAllStatisticsRequest>): QueryGetProtoRevAllStatisticsRequest;
};
export declare const QueryGetProtoRevAllStatisticsResponse: {
    encode(message: QueryGetProtoRevAllStatisticsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevAllStatisticsResponse;
    fromJSON(object: any): QueryGetProtoRevAllStatisticsResponse;
    toJSON(message: QueryGetProtoRevAllStatisticsResponse): unknown;
    fromPartial(object: Partial<QueryGetProtoRevAllStatisticsResponse>): QueryGetProtoRevAllStatisticsResponse;
};
export declare const QueryGetProtoRevTokenPairArbRoutesRequest: {
    encode(_: QueryGetProtoRevTokenPairArbRoutesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevTokenPairArbRoutesRequest;
    fromJSON(_: any): QueryGetProtoRevTokenPairArbRoutesRequest;
    toJSON(_: QueryGetProtoRevTokenPairArbRoutesRequest): unknown;
    fromPartial(_: Partial<QueryGetProtoRevTokenPairArbRoutesRequest>): QueryGetProtoRevTokenPairArbRoutesRequest;
};
export declare const QueryGetProtoRevTokenPairArbRoutesResponse: {
    encode(message: QueryGetProtoRevTokenPairArbRoutesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProtoRevTokenPairArbRoutesResponse;
    fromJSON(object: any): QueryGetProtoRevTokenPairArbRoutesResponse;
    toJSON(message: QueryGetProtoRevTokenPairArbRoutesResponse): unknown;
    fromPartial(object: Partial<QueryGetProtoRevTokenPairArbRoutesResponse>): QueryGetProtoRevTokenPairArbRoutesResponse;
};

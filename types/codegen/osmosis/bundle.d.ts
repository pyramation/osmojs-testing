import * as _127 from "./downtime-detector/v1beta1/downtime_duration";
import * as _128 from "./downtime-detector/v1beta1/genesis";
import * as _129 from "./downtime-detector/v1beta1/query";
import * as _130 from "./epochs/genesis";
import * as _131 from "./epochs/query";
import * as _132 from "./gamm/pool-models/balancer/balancerPool";
import * as _133 from "./gamm/v1beta1/genesis";
import * as _134 from "./gamm/v1beta1/query";
import * as _135 from "./gamm/v1beta1/tx";
import * as _136 from "./gamm/pool-models/balancer/tx/tx";
import * as _137 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _138 from "./gamm/pool-models/stableswap/tx";
import * as _139 from "./gamm/v2/query";
import * as _140 from "./ibc-rate-limit/v1beta1/params";
import * as _141 from "./ibc-rate-limit/v1beta1/query";
import * as _142 from "./incentives/gauge";
import * as _143 from "./incentives/genesis";
import * as _144 from "./incentives/params";
import * as _145 from "./incentives/query";
import * as _146 from "./incentives/tx";
import * as _147 from "./lockup/genesis";
import * as _148 from "./lockup/lock";
import * as _149 from "./lockup/params";
import * as _150 from "./lockup/query";
import * as _151 from "./lockup/tx";
import * as _152 from "./mint/v1beta1/genesis";
import * as _153 from "./mint/v1beta1/mint";
import * as _154 from "./mint/v1beta1/query";
import * as _155 from "./pool-incentives/v1beta1/genesis";
import * as _156 from "./pool-incentives/v1beta1/gov";
import * as _157 from "./pool-incentives/v1beta1/incentives";
import * as _158 from "./pool-incentives/v1beta1/query";
import * as _159 from "./protorev/v1beta1/genesis";
import * as _160 from "./protorev/v1beta1/gov";
import * as _161 from "./protorev/v1beta1/params";
import * as _162 from "./protorev/v1beta1/protorev";
import * as _163 from "./protorev/v1beta1/query";
import * as _164 from "./protorev/v1beta1/tx";
import * as _165 from "./sumtree/v1beta1/tree";
import * as _166 from "./superfluid/genesis";
import * as _167 from "./superfluid/params";
import * as _168 from "./superfluid/query";
import * as _169 from "./superfluid/superfluid";
import * as _170 from "./superfluid/tx";
import * as _171 from "./swaprouter/v1beta1/genesis";
import * as _172 from "./swaprouter/v1beta1/module_route";
import * as _173 from "./swaprouter/v1beta1/query";
import * as _174 from "./swaprouter/v1beta1/swap_route";
import * as _175 from "./swaprouter/v1beta1/tx";
import * as _176 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _177 from "./tokenfactory/v1beta1/genesis";
import * as _178 from "./tokenfactory/v1beta1/params";
import * as _179 from "./tokenfactory/v1beta1/query";
import * as _180 from "./tokenfactory/v1beta1/tx";
import * as _181 from "./twap/v1beta1/genesis";
import * as _182 from "./twap/v1beta1/query";
import * as _183 from "./twap/v1beta1/twap_record";
import * as _184 from "./txfees/v1beta1/feetoken";
import * as _185 from "./txfees/v1beta1/genesis";
import * as _186 from "./txfees/v1beta1/gov";
import * as _187 from "./txfees/v1beta1/query";
import * as _188 from "./valset-pref/v1beta1/query";
import * as _189 from "./valset-pref/v1beta1/state";
import * as _190 from "./valset-pref/v1beta1/tx";
import * as _299 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _300 from "./epochs/query.rpc.Query";
import * as _301 from "./gamm/v1beta1/query.rpc.Query";
import * as _302 from "./gamm/v2/query.rpc.Query";
import * as _303 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _304 from "./incentives/query.rpc.Query";
import * as _305 from "./lockup/query.rpc.Query";
import * as _306 from "./mint/v1beta1/query.rpc.Query";
import * as _307 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _308 from "./protorev/v1beta1/query.rpc.Query";
import * as _309 from "./superfluid/query.rpc.Query";
import * as _310 from "./swaprouter/v1beta1/query.rpc.Query";
import * as _311 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _312 from "./twap/v1beta1/query.rpc.Query";
import * as _313 from "./txfees/v1beta1/query.rpc.Query";
import * as _314 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _315 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _316 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _317 from "./gamm/v1beta1/tx.rpc.msg";
import * as _318 from "./incentives/tx.rpc.msg";
import * as _319 from "./lockup/tx.rpc.msg";
import * as _320 from "./protorev/v1beta1/tx.rpc.msg";
import * as _321 from "./superfluid/tx.rpc.msg";
import * as _322 from "./swaprouter/v1beta1/tx.rpc.msg";
import * as _323 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _324 from "./valset-pref/v1beta1/tx.rpc.msg";
export declare namespace osmosis {
    namespace downtimedetector {
        const v1beta1: {
            QueryClientImpl: typeof _299.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                recoveredSinceDowntimeOfLength(request: _129.RecoveredSinceDowntimeOfLengthRequest): Promise<_129.RecoveredSinceDowntimeOfLengthResponse>;
            };
            RecoveredSinceDowntimeOfLengthRequest: {
                encode(message: _129.RecoveredSinceDowntimeOfLengthRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.RecoveredSinceDowntimeOfLengthRequest;
                fromJSON(object: any): _129.RecoveredSinceDowntimeOfLengthRequest;
                toJSON(message: _129.RecoveredSinceDowntimeOfLengthRequest): unknown;
                fromPartial(object: Partial<_129.RecoveredSinceDowntimeOfLengthRequest>): _129.RecoveredSinceDowntimeOfLengthRequest;
                fromAmino(object: _129.RecoveredSinceDowntimeOfLengthRequestAmino): _129.RecoveredSinceDowntimeOfLengthRequest;
                toAmino(message: _129.RecoveredSinceDowntimeOfLengthRequest): _129.RecoveredSinceDowntimeOfLengthRequestAmino;
            };
            RecoveredSinceDowntimeOfLengthResponse: {
                encode(message: _129.RecoveredSinceDowntimeOfLengthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.RecoveredSinceDowntimeOfLengthResponse;
                fromJSON(object: any): _129.RecoveredSinceDowntimeOfLengthResponse;
                toJSON(message: _129.RecoveredSinceDowntimeOfLengthResponse): unknown;
                fromPartial(object: Partial<_129.RecoveredSinceDowntimeOfLengthResponse>): _129.RecoveredSinceDowntimeOfLengthResponse;
                fromAmino(object: _129.RecoveredSinceDowntimeOfLengthResponseAmino): _129.RecoveredSinceDowntimeOfLengthResponse;
                toAmino(message: _129.RecoveredSinceDowntimeOfLengthResponse): _129.RecoveredSinceDowntimeOfLengthResponseAmino;
            };
            GenesisDowntimeEntry: {
                encode(message: _128.GenesisDowntimeEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.GenesisDowntimeEntry;
                fromJSON(object: any): _128.GenesisDowntimeEntry;
                toJSON(message: _128.GenesisDowntimeEntry): unknown;
                fromPartial(object: Partial<_128.GenesisDowntimeEntry>): _128.GenesisDowntimeEntry;
                fromAmino(object: _128.GenesisDowntimeEntryAmino): _128.GenesisDowntimeEntry;
                toAmino(message: _128.GenesisDowntimeEntry): _128.GenesisDowntimeEntryAmino;
            };
            GenesisState: {
                encode(message: _128.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.GenesisState;
                fromJSON(object: any): _128.GenesisState;
                toJSON(message: _128.GenesisState): unknown;
                fromPartial(object: Partial<_128.GenesisState>): _128.GenesisState;
                fromAmino(object: _128.GenesisStateAmino): _128.GenesisState;
                toAmino(message: _128.GenesisState): _128.GenesisStateAmino;
            };
            downtimeFromJSON(object: any): _127.Downtime;
            downtimeToJSON(object: _127.Downtime): string;
            Downtime: typeof _127.Downtime;
            DowntimeSDKType: typeof _127.Downtime;
            DowntimeAmino: typeof _127.Downtime;
        };
    }
    namespace epochs {
        const v1beta1: {
            QueryClientImpl: typeof _300.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochInfos(request?: _131.QueryEpochsInfoRequest): Promise<_131.QueryEpochsInfoResponse>;
                currentEpoch(request: _131.QueryCurrentEpochRequest): Promise<_131.QueryCurrentEpochResponse>;
            };
            QueryEpochsInfoRequest: {
                encode(_: _131.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryEpochsInfoRequest;
                fromJSON(_: any): _131.QueryEpochsInfoRequest;
                toJSON(_: _131.QueryEpochsInfoRequest): unknown;
                fromPartial(_: Partial<_131.QueryEpochsInfoRequest>): _131.QueryEpochsInfoRequest;
                fromAmino(_: _131.QueryEpochsInfoRequestAmino): _131.QueryEpochsInfoRequest;
                toAmino(_: _131.QueryEpochsInfoRequest): _131.QueryEpochsInfoRequestAmino;
            };
            QueryEpochsInfoResponse: {
                encode(message: _131.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryEpochsInfoResponse;
                fromJSON(object: any): _131.QueryEpochsInfoResponse;
                toJSON(message: _131.QueryEpochsInfoResponse): unknown;
                fromPartial(object: Partial<_131.QueryEpochsInfoResponse>): _131.QueryEpochsInfoResponse;
                fromAmino(object: _131.QueryEpochsInfoResponseAmino): _131.QueryEpochsInfoResponse;
                toAmino(message: _131.QueryEpochsInfoResponse): _131.QueryEpochsInfoResponseAmino;
            };
            QueryCurrentEpochRequest: {
                encode(message: _131.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryCurrentEpochRequest;
                fromJSON(object: any): _131.QueryCurrentEpochRequest;
                toJSON(message: _131.QueryCurrentEpochRequest): unknown;
                fromPartial(object: Partial<_131.QueryCurrentEpochRequest>): _131.QueryCurrentEpochRequest;
                fromAmino(object: _131.QueryCurrentEpochRequestAmino): _131.QueryCurrentEpochRequest;
                toAmino(message: _131.QueryCurrentEpochRequest): _131.QueryCurrentEpochRequestAmino;
            };
            QueryCurrentEpochResponse: {
                encode(message: _131.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryCurrentEpochResponse;
                fromJSON(object: any): _131.QueryCurrentEpochResponse;
                toJSON(message: _131.QueryCurrentEpochResponse): unknown;
                fromPartial(object: Partial<_131.QueryCurrentEpochResponse>): _131.QueryCurrentEpochResponse;
                fromAmino(object: _131.QueryCurrentEpochResponseAmino): _131.QueryCurrentEpochResponse;
                toAmino(message: _131.QueryCurrentEpochResponse): _131.QueryCurrentEpochResponseAmino;
            };
            EpochInfo: {
                encode(message: _130.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.EpochInfo;
                fromJSON(object: any): _130.EpochInfo;
                toJSON(message: _130.EpochInfo): unknown;
                fromPartial(object: Partial<_130.EpochInfo>): _130.EpochInfo;
                fromAmino(object: _130.EpochInfoAmino): _130.EpochInfo;
                toAmino(message: _130.EpochInfo): _130.EpochInfoAmino;
            };
            GenesisState: {
                encode(message: _130.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.GenesisState;
                fromJSON(object: any): _130.GenesisState;
                toJSON(message: _130.GenesisState): unknown;
                fromPartial(object: Partial<_130.GenesisState>): _130.GenesisState;
                fromAmino(object: _130.GenesisStateAmino): _130.GenesisState;
                toAmino(message: _130.GenesisState): _130.GenesisStateAmino;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            MsgClientImpl: typeof _317.MsgClientImpl;
            QueryClientImpl: typeof _301.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                pools(request?: _134.QueryPoolsRequest): Promise<_134.QueryPoolsResponse>;
                numPools(request?: _134.QueryNumPoolsRequest): Promise<_134.QueryNumPoolsResponse>;
                totalLiquidity(request?: _134.QueryTotalLiquidityRequest): Promise<_134.QueryTotalLiquidityResponse>;
                poolsWithFilter(request: _134.QueryPoolsWithFilterRequest): Promise<_134.QueryPoolsWithFilterResponse>;
                pool(request: _134.QueryPoolRequest): Promise<_134.QueryPoolResponse>;
                poolType(request: _134.QueryPoolTypeRequest): Promise<_134.QueryPoolTypeResponse>;
                calcJoinPoolNoSwapShares(request: _134.QueryCalcJoinPoolNoSwapSharesRequest): Promise<_134.QueryCalcJoinPoolNoSwapSharesResponse>;
                calcJoinPoolShares(request: _134.QueryCalcJoinPoolSharesRequest): Promise<_134.QueryCalcJoinPoolSharesResponse>;
                calcExitPoolCoinsFromShares(request: _134.QueryCalcExitPoolCoinsFromSharesRequest): Promise<_134.QueryCalcExitPoolCoinsFromSharesResponse>;
                poolParams(request: _134.QueryPoolParamsRequest): Promise<_134.QueryPoolParamsResponse>;
                totalPoolLiquidity(request: _134.QueryTotalPoolLiquidityRequest): Promise<_134.QueryTotalPoolLiquidityResponse>;
                totalShares(request: _134.QueryTotalSharesRequest): Promise<_134.QueryTotalSharesResponse>;
                spotPrice(request: _134.QuerySpotPriceRequest): Promise<_134.QuerySpotPriceResponse>;
                estimateSwapExactAmountIn(request: _134.QuerySwapExactAmountInRequest): Promise<_134.QuerySwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: _134.QuerySwapExactAmountOutRequest): Promise<_134.QuerySwapExactAmountOutResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    joinPool(value: _135.MsgJoinPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitPool(value: _135.MsgExitPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountIn(value: _135.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _135.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapExternAmountIn(value: _135.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapShareAmountOut(value: _135.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapExternAmountOut(value: _135.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapShareAmountIn(value: _135.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    joinPool(value: _135.MsgJoinPool): {
                        typeUrl: string;
                        value: _135.MsgJoinPool;
                    };
                    exitPool(value: _135.MsgExitPool): {
                        typeUrl: string;
                        value: _135.MsgExitPool;
                    };
                    swapExactAmountIn(value: _135.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _135.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _135.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _135.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _135.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _135.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _135.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _135.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _135.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _135.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _135.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _135.MsgExitSwapShareAmountIn;
                    };
                };
                toJSON: {
                    joinPool(value: _135.MsgJoinPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitPool(value: _135.MsgExitPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountIn(value: _135.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountOut(value: _135.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    joinSwapExternAmountIn(value: _135.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    joinSwapShareAmountOut(value: _135.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitSwapExternAmountOut(value: _135.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitSwapShareAmountIn(value: _135.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    joinPool(value: any): {
                        typeUrl: string;
                        value: _135.MsgJoinPool;
                    };
                    exitPool(value: any): {
                        typeUrl: string;
                        value: _135.MsgExitPool;
                    };
                    swapExactAmountIn(value: any): {
                        typeUrl: string;
                        value: _135.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: any): {
                        typeUrl: string;
                        value: _135.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: any): {
                        typeUrl: string;
                        value: _135.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: any): {
                        typeUrl: string;
                        value: _135.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: any): {
                        typeUrl: string;
                        value: _135.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: any): {
                        typeUrl: string;
                        value: _135.MsgExitSwapShareAmountIn;
                    };
                };
                fromPartial: {
                    joinPool(value: _135.MsgJoinPool): {
                        typeUrl: string;
                        value: _135.MsgJoinPool;
                    };
                    exitPool(value: _135.MsgExitPool): {
                        typeUrl: string;
                        value: _135.MsgExitPool;
                    };
                    swapExactAmountIn(value: _135.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _135.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _135.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _135.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _135.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _135.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _135.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _135.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _135.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _135.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _135.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _135.MsgExitSwapShareAmountIn;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: (message: _135.MsgJoinPool) => _135.MsgJoinPoolAmino;
                    fromAmino: (object: _135.MsgJoinPoolAmino) => _135.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: (message: _135.MsgExitPool) => _135.MsgExitPoolAmino;
                    fromAmino: (object: _135.MsgExitPoolAmino) => _135.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: (message: _135.MsgSwapExactAmountIn) => _135.MsgSwapExactAmountInAmino;
                    fromAmino: (object: _135.MsgSwapExactAmountInAmino) => _135.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: (message: _135.MsgSwapExactAmountOut) => _135.MsgSwapExactAmountOutAmino;
                    fromAmino: (object: _135.MsgSwapExactAmountOutAmino) => _135.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: (message: _135.MsgJoinSwapExternAmountIn) => _135.MsgJoinSwapExternAmountInAmino;
                    fromAmino: (object: _135.MsgJoinSwapExternAmountInAmino) => _135.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: (message: _135.MsgJoinSwapShareAmountOut) => _135.MsgJoinSwapShareAmountOutAmino;
                    fromAmino: (object: _135.MsgJoinSwapShareAmountOutAmino) => _135.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: (message: _135.MsgExitSwapExternAmountOut) => _135.MsgExitSwapExternAmountOutAmino;
                    fromAmino: (object: _135.MsgExitSwapExternAmountOutAmino) => _135.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: (message: _135.MsgExitSwapShareAmountIn) => _135.MsgExitSwapShareAmountInAmino;
                    fromAmino: (object: _135.MsgExitSwapShareAmountInAmino) => _135.MsgExitSwapShareAmountIn;
                };
            };
            MsgJoinPool: {
                encode(message: _135.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgJoinPool;
                fromJSON(object: any): _135.MsgJoinPool;
                toJSON(message: _135.MsgJoinPool): unknown;
                fromPartial(object: Partial<_135.MsgJoinPool>): _135.MsgJoinPool;
                fromAmino(object: _135.MsgJoinPoolAmino): _135.MsgJoinPool;
                toAmino(message: _135.MsgJoinPool): _135.MsgJoinPoolAmino;
            };
            MsgJoinPoolResponse: {
                encode(message: _135.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgJoinPoolResponse;
                fromJSON(object: any): _135.MsgJoinPoolResponse;
                toJSON(message: _135.MsgJoinPoolResponse): unknown;
                fromPartial(object: Partial<_135.MsgJoinPoolResponse>): _135.MsgJoinPoolResponse;
                fromAmino(object: _135.MsgJoinPoolResponseAmino): _135.MsgJoinPoolResponse;
                toAmino(message: _135.MsgJoinPoolResponse): _135.MsgJoinPoolResponseAmino;
            };
            MsgExitPool: {
                encode(message: _135.MsgExitPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgExitPool;
                fromJSON(object: any): _135.MsgExitPool;
                toJSON(message: _135.MsgExitPool): unknown;
                fromPartial(object: Partial<_135.MsgExitPool>): _135.MsgExitPool;
                fromAmino(object: _135.MsgExitPoolAmino): _135.MsgExitPool;
                toAmino(message: _135.MsgExitPool): _135.MsgExitPoolAmino;
            };
            MsgExitPoolResponse: {
                encode(message: _135.MsgExitPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgExitPoolResponse;
                fromJSON(object: any): _135.MsgExitPoolResponse;
                toJSON(message: _135.MsgExitPoolResponse): unknown;
                fromPartial(object: Partial<_135.MsgExitPoolResponse>): _135.MsgExitPoolResponse;
                fromAmino(object: _135.MsgExitPoolResponseAmino): _135.MsgExitPoolResponse;
                toAmino(message: _135.MsgExitPoolResponse): _135.MsgExitPoolResponseAmino;
            };
            SwapAmountInRoute: {
                encode(message: _135.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.SwapAmountInRoute;
                fromJSON(object: any): _135.SwapAmountInRoute;
                toJSON(message: _135.SwapAmountInRoute): unknown;
                fromPartial(object: Partial<_135.SwapAmountInRoute>): _135.SwapAmountInRoute;
                fromAmino(object: _135.SwapAmountInRouteAmino): _135.SwapAmountInRoute;
                toAmino(message: _135.SwapAmountInRoute): _135.SwapAmountInRouteAmino;
            };
            MsgSwapExactAmountIn: {
                encode(message: _135.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgSwapExactAmountIn;
                fromJSON(object: any): _135.MsgSwapExactAmountIn;
                toJSON(message: _135.MsgSwapExactAmountIn): unknown;
                fromPartial(object: Partial<_135.MsgSwapExactAmountIn>): _135.MsgSwapExactAmountIn;
                fromAmino(object: _135.MsgSwapExactAmountInAmino): _135.MsgSwapExactAmountIn;
                toAmino(message: _135.MsgSwapExactAmountIn): _135.MsgSwapExactAmountInAmino;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _135.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgSwapExactAmountInResponse;
                fromJSON(object: any): _135.MsgSwapExactAmountInResponse;
                toJSON(message: _135.MsgSwapExactAmountInResponse): unknown;
                fromPartial(object: Partial<_135.MsgSwapExactAmountInResponse>): _135.MsgSwapExactAmountInResponse;
                fromAmino(object: _135.MsgSwapExactAmountInResponseAmino): _135.MsgSwapExactAmountInResponse;
                toAmino(message: _135.MsgSwapExactAmountInResponse): _135.MsgSwapExactAmountInResponseAmino;
            };
            SwapAmountOutRoute: {
                encode(message: _135.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.SwapAmountOutRoute;
                fromJSON(object: any): _135.SwapAmountOutRoute;
                toJSON(message: _135.SwapAmountOutRoute): unknown;
                fromPartial(object: Partial<_135.SwapAmountOutRoute>): _135.SwapAmountOutRoute;
                fromAmino(object: _135.SwapAmountOutRouteAmino): _135.SwapAmountOutRoute;
                toAmino(message: _135.SwapAmountOutRoute): _135.SwapAmountOutRouteAmino;
            };
            MsgSwapExactAmountOut: {
                encode(message: _135.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgSwapExactAmountOut;
                fromJSON(object: any): _135.MsgSwapExactAmountOut;
                toJSON(message: _135.MsgSwapExactAmountOut): unknown;
                fromPartial(object: Partial<_135.MsgSwapExactAmountOut>): _135.MsgSwapExactAmountOut;
                fromAmino(object: _135.MsgSwapExactAmountOutAmino): _135.MsgSwapExactAmountOut;
                toAmino(message: _135.MsgSwapExactAmountOut): _135.MsgSwapExactAmountOutAmino;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _135.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgSwapExactAmountOutResponse;
                fromJSON(object: any): _135.MsgSwapExactAmountOutResponse;
                toJSON(message: _135.MsgSwapExactAmountOutResponse): unknown;
                fromPartial(object: Partial<_135.MsgSwapExactAmountOutResponse>): _135.MsgSwapExactAmountOutResponse;
                fromAmino(object: _135.MsgSwapExactAmountOutResponseAmino): _135.MsgSwapExactAmountOutResponse;
                toAmino(message: _135.MsgSwapExactAmountOutResponse): _135.MsgSwapExactAmountOutResponseAmino;
            };
            MsgJoinSwapExternAmountIn: {
                encode(message: _135.MsgJoinSwapExternAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgJoinSwapExternAmountIn;
                fromJSON(object: any): _135.MsgJoinSwapExternAmountIn;
                toJSON(message: _135.MsgJoinSwapExternAmountIn): unknown;
                fromPartial(object: Partial<_135.MsgJoinSwapExternAmountIn>): _135.MsgJoinSwapExternAmountIn;
                fromAmino(object: _135.MsgJoinSwapExternAmountInAmino): _135.MsgJoinSwapExternAmountIn;
                toAmino(message: _135.MsgJoinSwapExternAmountIn): _135.MsgJoinSwapExternAmountInAmino;
            };
            MsgJoinSwapExternAmountInResponse: {
                encode(message: _135.MsgJoinSwapExternAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgJoinSwapExternAmountInResponse;
                fromJSON(object: any): _135.MsgJoinSwapExternAmountInResponse;
                toJSON(message: _135.MsgJoinSwapExternAmountInResponse): unknown;
                fromPartial(object: Partial<_135.MsgJoinSwapExternAmountInResponse>): _135.MsgJoinSwapExternAmountInResponse;
                fromAmino(object: _135.MsgJoinSwapExternAmountInResponseAmino): _135.MsgJoinSwapExternAmountInResponse;
                toAmino(message: _135.MsgJoinSwapExternAmountInResponse): _135.MsgJoinSwapExternAmountInResponseAmino;
            };
            MsgJoinSwapShareAmountOut: {
                encode(message: _135.MsgJoinSwapShareAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgJoinSwapShareAmountOut;
                fromJSON(object: any): _135.MsgJoinSwapShareAmountOut;
                toJSON(message: _135.MsgJoinSwapShareAmountOut): unknown;
                fromPartial(object: Partial<_135.MsgJoinSwapShareAmountOut>): _135.MsgJoinSwapShareAmountOut;
                fromAmino(object: _135.MsgJoinSwapShareAmountOutAmino): _135.MsgJoinSwapShareAmountOut;
                toAmino(message: _135.MsgJoinSwapShareAmountOut): _135.MsgJoinSwapShareAmountOutAmino;
            };
            MsgJoinSwapShareAmountOutResponse: {
                encode(message: _135.MsgJoinSwapShareAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgJoinSwapShareAmountOutResponse;
                fromJSON(object: any): _135.MsgJoinSwapShareAmountOutResponse;
                toJSON(message: _135.MsgJoinSwapShareAmountOutResponse): unknown;
                fromPartial(object: Partial<_135.MsgJoinSwapShareAmountOutResponse>): _135.MsgJoinSwapShareAmountOutResponse;
                fromAmino(object: _135.MsgJoinSwapShareAmountOutResponseAmino): _135.MsgJoinSwapShareAmountOutResponse;
                toAmino(message: _135.MsgJoinSwapShareAmountOutResponse): _135.MsgJoinSwapShareAmountOutResponseAmino;
            };
            MsgExitSwapShareAmountIn: {
                encode(message: _135.MsgExitSwapShareAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgExitSwapShareAmountIn;
                fromJSON(object: any): _135.MsgExitSwapShareAmountIn;
                toJSON(message: _135.MsgExitSwapShareAmountIn): unknown;
                fromPartial(object: Partial<_135.MsgExitSwapShareAmountIn>): _135.MsgExitSwapShareAmountIn;
                fromAmino(object: _135.MsgExitSwapShareAmountInAmino): _135.MsgExitSwapShareAmountIn;
                toAmino(message: _135.MsgExitSwapShareAmountIn): _135.MsgExitSwapShareAmountInAmino;
            };
            MsgExitSwapShareAmountInResponse: {
                encode(message: _135.MsgExitSwapShareAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgExitSwapShareAmountInResponse;
                fromJSON(object: any): _135.MsgExitSwapShareAmountInResponse;
                toJSON(message: _135.MsgExitSwapShareAmountInResponse): unknown;
                fromPartial(object: Partial<_135.MsgExitSwapShareAmountInResponse>): _135.MsgExitSwapShareAmountInResponse;
                fromAmino(object: _135.MsgExitSwapShareAmountInResponseAmino): _135.MsgExitSwapShareAmountInResponse;
                toAmino(message: _135.MsgExitSwapShareAmountInResponse): _135.MsgExitSwapShareAmountInResponseAmino;
            };
            MsgExitSwapExternAmountOut: {
                encode(message: _135.MsgExitSwapExternAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgExitSwapExternAmountOut;
                fromJSON(object: any): _135.MsgExitSwapExternAmountOut;
                toJSON(message: _135.MsgExitSwapExternAmountOut): unknown;
                fromPartial(object: Partial<_135.MsgExitSwapExternAmountOut>): _135.MsgExitSwapExternAmountOut;
                fromAmino(object: _135.MsgExitSwapExternAmountOutAmino): _135.MsgExitSwapExternAmountOut;
                toAmino(message: _135.MsgExitSwapExternAmountOut): _135.MsgExitSwapExternAmountOutAmino;
            };
            MsgExitSwapExternAmountOutResponse: {
                encode(message: _135.MsgExitSwapExternAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgExitSwapExternAmountOutResponse;
                fromJSON(object: any): _135.MsgExitSwapExternAmountOutResponse;
                toJSON(message: _135.MsgExitSwapExternAmountOutResponse): unknown;
                fromPartial(object: Partial<_135.MsgExitSwapExternAmountOutResponse>): _135.MsgExitSwapExternAmountOutResponse;
                fromAmino(object: _135.MsgExitSwapExternAmountOutResponseAmino): _135.MsgExitSwapExternAmountOutResponse;
                toAmino(message: _135.MsgExitSwapExternAmountOutResponse): _135.MsgExitSwapExternAmountOutResponseAmino;
            };
            QueryPoolRequest: {
                encode(message: _134.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryPoolRequest;
                fromJSON(object: any): _134.QueryPoolRequest;
                toJSON(message: _134.QueryPoolRequest): unknown;
                fromPartial(object: Partial<_134.QueryPoolRequest>): _134.QueryPoolRequest;
                fromAmino(object: _134.QueryPoolRequestAmino): _134.QueryPoolRequest;
                toAmino(message: _134.QueryPoolRequest): _134.QueryPoolRequestAmino;
            };
            QueryPoolResponse: {
                encode(message: _134.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryPoolResponse;
                fromJSON(object: any): _134.QueryPoolResponse;
                toJSON(message: _134.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_134.QueryPoolResponse>): _134.QueryPoolResponse;
                fromAmino(object: _134.QueryPoolResponseAmino): _134.QueryPoolResponse;
                toAmino(message: _134.QueryPoolResponse): _134.QueryPoolResponseAmino;
            };
            QueryPoolsRequest: {
                encode(message: _134.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryPoolsRequest;
                fromJSON(object: any): _134.QueryPoolsRequest;
                toJSON(message: _134.QueryPoolsRequest): unknown;
                fromPartial(object: Partial<_134.QueryPoolsRequest>): _134.QueryPoolsRequest;
                fromAmino(object: _134.QueryPoolsRequestAmino): _134.QueryPoolsRequest;
                toAmino(message: _134.QueryPoolsRequest): _134.QueryPoolsRequestAmino;
            };
            QueryPoolsResponse: {
                encode(message: _134.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryPoolsResponse;
                fromJSON(object: any): _134.QueryPoolsResponse;
                toJSON(message: _134.QueryPoolsResponse): unknown;
                fromPartial(object: Partial<_134.QueryPoolsResponse>): _134.QueryPoolsResponse;
                fromAmino(object: _134.QueryPoolsResponseAmino): _134.QueryPoolsResponse;
                toAmino(message: _134.QueryPoolsResponse): _134.QueryPoolsResponseAmino;
            };
            QueryNumPoolsRequest: {
                encode(_: _134.QueryNumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryNumPoolsRequest;
                fromJSON(_: any): _134.QueryNumPoolsRequest;
                toJSON(_: _134.QueryNumPoolsRequest): unknown;
                fromPartial(_: Partial<_134.QueryNumPoolsRequest>): _134.QueryNumPoolsRequest;
                fromAmino(_: _134.QueryNumPoolsRequestAmino): _134.QueryNumPoolsRequest;
                toAmino(_: _134.QueryNumPoolsRequest): _134.QueryNumPoolsRequestAmino;
            };
            QueryNumPoolsResponse: {
                encode(message: _134.QueryNumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryNumPoolsResponse;
                fromJSON(object: any): _134.QueryNumPoolsResponse;
                toJSON(message: _134.QueryNumPoolsResponse): unknown;
                fromPartial(object: Partial<_134.QueryNumPoolsResponse>): _134.QueryNumPoolsResponse;
                fromAmino(object: _134.QueryNumPoolsResponseAmino): _134.QueryNumPoolsResponse;
                toAmino(message: _134.QueryNumPoolsResponse): _134.QueryNumPoolsResponseAmino;
            };
            QueryPoolTypeRequest: {
                encode(message: _134.QueryPoolTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryPoolTypeRequest;
                fromJSON(object: any): _134.QueryPoolTypeRequest;
                toJSON(message: _134.QueryPoolTypeRequest): unknown;
                fromPartial(object: Partial<_134.QueryPoolTypeRequest>): _134.QueryPoolTypeRequest;
                fromAmino(object: _134.QueryPoolTypeRequestAmino): _134.QueryPoolTypeRequest;
                toAmino(message: _134.QueryPoolTypeRequest): _134.QueryPoolTypeRequestAmino;
            };
            QueryPoolTypeResponse: {
                encode(message: _134.QueryPoolTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryPoolTypeResponse;
                fromJSON(object: any): _134.QueryPoolTypeResponse;
                toJSON(message: _134.QueryPoolTypeResponse): unknown;
                fromPartial(object: Partial<_134.QueryPoolTypeResponse>): _134.QueryPoolTypeResponse;
                fromAmino(object: _134.QueryPoolTypeResponseAmino): _134.QueryPoolTypeResponse;
                toAmino(message: _134.QueryPoolTypeResponse): _134.QueryPoolTypeResponseAmino;
            };
            QueryCalcJoinPoolSharesRequest: {
                encode(message: _134.QueryCalcJoinPoolSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryCalcJoinPoolSharesRequest;
                fromJSON(object: any): _134.QueryCalcJoinPoolSharesRequest;
                toJSON(message: _134.QueryCalcJoinPoolSharesRequest): unknown;
                fromPartial(object: Partial<_134.QueryCalcJoinPoolSharesRequest>): _134.QueryCalcJoinPoolSharesRequest;
                fromAmino(object: _134.QueryCalcJoinPoolSharesRequestAmino): _134.QueryCalcJoinPoolSharesRequest;
                toAmino(message: _134.QueryCalcJoinPoolSharesRequest): _134.QueryCalcJoinPoolSharesRequestAmino;
            };
            QueryCalcJoinPoolSharesResponse: {
                encode(message: _134.QueryCalcJoinPoolSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryCalcJoinPoolSharesResponse;
                fromJSON(object: any): _134.QueryCalcJoinPoolSharesResponse;
                toJSON(message: _134.QueryCalcJoinPoolSharesResponse): unknown;
                fromPartial(object: Partial<_134.QueryCalcJoinPoolSharesResponse>): _134.QueryCalcJoinPoolSharesResponse;
                fromAmino(object: _134.QueryCalcJoinPoolSharesResponseAmino): _134.QueryCalcJoinPoolSharesResponse;
                toAmino(message: _134.QueryCalcJoinPoolSharesResponse): _134.QueryCalcJoinPoolSharesResponseAmino;
            };
            QueryCalcExitPoolCoinsFromSharesRequest: {
                encode(message: _134.QueryCalcExitPoolCoinsFromSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryCalcExitPoolCoinsFromSharesRequest;
                fromJSON(object: any): _134.QueryCalcExitPoolCoinsFromSharesRequest;
                toJSON(message: _134.QueryCalcExitPoolCoinsFromSharesRequest): unknown;
                fromPartial(object: Partial<_134.QueryCalcExitPoolCoinsFromSharesRequest>): _134.QueryCalcExitPoolCoinsFromSharesRequest;
                fromAmino(object: _134.QueryCalcExitPoolCoinsFromSharesRequestAmino): _134.QueryCalcExitPoolCoinsFromSharesRequest;
                toAmino(message: _134.QueryCalcExitPoolCoinsFromSharesRequest): _134.QueryCalcExitPoolCoinsFromSharesRequestAmino;
            };
            QueryCalcExitPoolCoinsFromSharesResponse: {
                encode(message: _134.QueryCalcExitPoolCoinsFromSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryCalcExitPoolCoinsFromSharesResponse;
                fromJSON(object: any): _134.QueryCalcExitPoolCoinsFromSharesResponse;
                toJSON(message: _134.QueryCalcExitPoolCoinsFromSharesResponse): unknown;
                fromPartial(object: Partial<_134.QueryCalcExitPoolCoinsFromSharesResponse>): _134.QueryCalcExitPoolCoinsFromSharesResponse;
                fromAmino(object: _134.QueryCalcExitPoolCoinsFromSharesResponseAmino): _134.QueryCalcExitPoolCoinsFromSharesResponse;
                toAmino(message: _134.QueryCalcExitPoolCoinsFromSharesResponse): _134.QueryCalcExitPoolCoinsFromSharesResponseAmino;
            };
            QueryPoolParamsRequest: {
                encode(message: _134.QueryPoolParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryPoolParamsRequest;
                fromJSON(object: any): _134.QueryPoolParamsRequest;
                toJSON(message: _134.QueryPoolParamsRequest): unknown;
                fromPartial(object: Partial<_134.QueryPoolParamsRequest>): _134.QueryPoolParamsRequest;
                fromAmino(object: _134.QueryPoolParamsRequestAmino): _134.QueryPoolParamsRequest;
                toAmino(message: _134.QueryPoolParamsRequest): _134.QueryPoolParamsRequestAmino;
            };
            QueryPoolParamsResponse: {
                encode(message: _134.QueryPoolParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryPoolParamsResponse;
                fromJSON(object: any): _134.QueryPoolParamsResponse;
                toJSON(message: _134.QueryPoolParamsResponse): unknown;
                fromPartial(object: Partial<_134.QueryPoolParamsResponse>): _134.QueryPoolParamsResponse;
                fromAmino(object: _134.QueryPoolParamsResponseAmino): _134.QueryPoolParamsResponse;
                toAmino(message: _134.QueryPoolParamsResponse): _134.QueryPoolParamsResponseAmino;
            };
            QueryTotalPoolLiquidityRequest: {
                encode(message: _134.QueryTotalPoolLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryTotalPoolLiquidityRequest;
                fromJSON(object: any): _134.QueryTotalPoolLiquidityRequest;
                toJSON(message: _134.QueryTotalPoolLiquidityRequest): unknown;
                fromPartial(object: Partial<_134.QueryTotalPoolLiquidityRequest>): _134.QueryTotalPoolLiquidityRequest;
                fromAmino(object: _134.QueryTotalPoolLiquidityRequestAmino): _134.QueryTotalPoolLiquidityRequest;
                toAmino(message: _134.QueryTotalPoolLiquidityRequest): _134.QueryTotalPoolLiquidityRequestAmino;
            };
            QueryTotalPoolLiquidityResponse: {
                encode(message: _134.QueryTotalPoolLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryTotalPoolLiquidityResponse;
                fromJSON(object: any): _134.QueryTotalPoolLiquidityResponse;
                toJSON(message: _134.QueryTotalPoolLiquidityResponse): unknown;
                fromPartial(object: Partial<_134.QueryTotalPoolLiquidityResponse>): _134.QueryTotalPoolLiquidityResponse;
                fromAmino(object: _134.QueryTotalPoolLiquidityResponseAmino): _134.QueryTotalPoolLiquidityResponse;
                toAmino(message: _134.QueryTotalPoolLiquidityResponse): _134.QueryTotalPoolLiquidityResponseAmino;
            };
            QueryTotalSharesRequest: {
                encode(message: _134.QueryTotalSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryTotalSharesRequest;
                fromJSON(object: any): _134.QueryTotalSharesRequest;
                toJSON(message: _134.QueryTotalSharesRequest): unknown;
                fromPartial(object: Partial<_134.QueryTotalSharesRequest>): _134.QueryTotalSharesRequest;
                fromAmino(object: _134.QueryTotalSharesRequestAmino): _134.QueryTotalSharesRequest;
                toAmino(message: _134.QueryTotalSharesRequest): _134.QueryTotalSharesRequestAmino;
            };
            QueryTotalSharesResponse: {
                encode(message: _134.QueryTotalSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryTotalSharesResponse;
                fromJSON(object: any): _134.QueryTotalSharesResponse;
                toJSON(message: _134.QueryTotalSharesResponse): unknown;
                fromPartial(object: Partial<_134.QueryTotalSharesResponse>): _134.QueryTotalSharesResponse;
                fromAmino(object: _134.QueryTotalSharesResponseAmino): _134.QueryTotalSharesResponse;
                toAmino(message: _134.QueryTotalSharesResponse): _134.QueryTotalSharesResponseAmino;
            };
            QueryCalcJoinPoolNoSwapSharesRequest: {
                encode(message: _134.QueryCalcJoinPoolNoSwapSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryCalcJoinPoolNoSwapSharesRequest;
                fromJSON(object: any): _134.QueryCalcJoinPoolNoSwapSharesRequest;
                toJSON(message: _134.QueryCalcJoinPoolNoSwapSharesRequest): unknown;
                fromPartial(object: Partial<_134.QueryCalcJoinPoolNoSwapSharesRequest>): _134.QueryCalcJoinPoolNoSwapSharesRequest;
                fromAmino(object: _134.QueryCalcJoinPoolNoSwapSharesRequestAmino): _134.QueryCalcJoinPoolNoSwapSharesRequest;
                toAmino(message: _134.QueryCalcJoinPoolNoSwapSharesRequest): _134.QueryCalcJoinPoolNoSwapSharesRequestAmino;
            };
            QueryCalcJoinPoolNoSwapSharesResponse: {
                encode(message: _134.QueryCalcJoinPoolNoSwapSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryCalcJoinPoolNoSwapSharesResponse;
                fromJSON(object: any): _134.QueryCalcJoinPoolNoSwapSharesResponse;
                toJSON(message: _134.QueryCalcJoinPoolNoSwapSharesResponse): unknown;
                fromPartial(object: Partial<_134.QueryCalcJoinPoolNoSwapSharesResponse>): _134.QueryCalcJoinPoolNoSwapSharesResponse;
                fromAmino(object: _134.QueryCalcJoinPoolNoSwapSharesResponseAmino): _134.QueryCalcJoinPoolNoSwapSharesResponse;
                toAmino(message: _134.QueryCalcJoinPoolNoSwapSharesResponse): _134.QueryCalcJoinPoolNoSwapSharesResponseAmino;
            };
            QuerySpotPriceRequest: {
                encode(message: _134.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QuerySpotPriceRequest;
                fromJSON(object: any): _134.QuerySpotPriceRequest;
                toJSON(message: _134.QuerySpotPriceRequest): unknown;
                fromPartial(object: Partial<_134.QuerySpotPriceRequest>): _134.QuerySpotPriceRequest;
                fromAmino(object: _134.QuerySpotPriceRequestAmino): _134.QuerySpotPriceRequest;
                toAmino(message: _134.QuerySpotPriceRequest): _134.QuerySpotPriceRequestAmino;
            };
            QueryPoolsWithFilterRequest: {
                encode(message: _134.QueryPoolsWithFilterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryPoolsWithFilterRequest;
                fromJSON(object: any): _134.QueryPoolsWithFilterRequest;
                toJSON(message: _134.QueryPoolsWithFilterRequest): unknown;
                fromPartial(object: Partial<_134.QueryPoolsWithFilterRequest>): _134.QueryPoolsWithFilterRequest;
                fromAmino(object: _134.QueryPoolsWithFilterRequestAmino): _134.QueryPoolsWithFilterRequest;
                toAmino(message: _134.QueryPoolsWithFilterRequest): _134.QueryPoolsWithFilterRequestAmino;
            };
            QueryPoolsWithFilterResponse: {
                encode(message: _134.QueryPoolsWithFilterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryPoolsWithFilterResponse;
                fromJSON(object: any): _134.QueryPoolsWithFilterResponse;
                toJSON(message: _134.QueryPoolsWithFilterResponse): unknown;
                fromPartial(object: Partial<_134.QueryPoolsWithFilterResponse>): _134.QueryPoolsWithFilterResponse;
                fromAmino(object: _134.QueryPoolsWithFilterResponseAmino): _134.QueryPoolsWithFilterResponse;
                toAmino(message: _134.QueryPoolsWithFilterResponse): _134.QueryPoolsWithFilterResponseAmino;
            };
            QuerySpotPriceResponse: {
                encode(message: _134.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QuerySpotPriceResponse;
                fromJSON(object: any): _134.QuerySpotPriceResponse;
                toJSON(message: _134.QuerySpotPriceResponse): unknown;
                fromPartial(object: Partial<_134.QuerySpotPriceResponse>): _134.QuerySpotPriceResponse;
                fromAmino(object: _134.QuerySpotPriceResponseAmino): _134.QuerySpotPriceResponse;
                toAmino(message: _134.QuerySpotPriceResponse): _134.QuerySpotPriceResponseAmino;
            };
            QuerySwapExactAmountInRequest: {
                encode(message: _134.QuerySwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QuerySwapExactAmountInRequest;
                fromJSON(object: any): _134.QuerySwapExactAmountInRequest;
                toJSON(message: _134.QuerySwapExactAmountInRequest): unknown;
                fromPartial(object: Partial<_134.QuerySwapExactAmountInRequest>): _134.QuerySwapExactAmountInRequest;
                fromAmino(object: _134.QuerySwapExactAmountInRequestAmino): _134.QuerySwapExactAmountInRequest;
                toAmino(message: _134.QuerySwapExactAmountInRequest): _134.QuerySwapExactAmountInRequestAmino;
            };
            QuerySwapExactAmountInResponse: {
                encode(message: _134.QuerySwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QuerySwapExactAmountInResponse;
                fromJSON(object: any): _134.QuerySwapExactAmountInResponse;
                toJSON(message: _134.QuerySwapExactAmountInResponse): unknown;
                fromPartial(object: Partial<_134.QuerySwapExactAmountInResponse>): _134.QuerySwapExactAmountInResponse;
                fromAmino(object: _134.QuerySwapExactAmountInResponseAmino): _134.QuerySwapExactAmountInResponse;
                toAmino(message: _134.QuerySwapExactAmountInResponse): _134.QuerySwapExactAmountInResponseAmino;
            };
            QuerySwapExactAmountOutRequest: {
                encode(message: _134.QuerySwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QuerySwapExactAmountOutRequest;
                fromJSON(object: any): _134.QuerySwapExactAmountOutRequest;
                toJSON(message: _134.QuerySwapExactAmountOutRequest): unknown;
                fromPartial(object: Partial<_134.QuerySwapExactAmountOutRequest>): _134.QuerySwapExactAmountOutRequest;
                fromAmino(object: _134.QuerySwapExactAmountOutRequestAmino): _134.QuerySwapExactAmountOutRequest;
                toAmino(message: _134.QuerySwapExactAmountOutRequest): _134.QuerySwapExactAmountOutRequestAmino;
            };
            QuerySwapExactAmountOutResponse: {
                encode(message: _134.QuerySwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QuerySwapExactAmountOutResponse;
                fromJSON(object: any): _134.QuerySwapExactAmountOutResponse;
                toJSON(message: _134.QuerySwapExactAmountOutResponse): unknown;
                fromPartial(object: Partial<_134.QuerySwapExactAmountOutResponse>): _134.QuerySwapExactAmountOutResponse;
                fromAmino(object: _134.QuerySwapExactAmountOutResponseAmino): _134.QuerySwapExactAmountOutResponse;
                toAmino(message: _134.QuerySwapExactAmountOutResponse): _134.QuerySwapExactAmountOutResponseAmino;
            };
            QueryTotalLiquidityRequest: {
                encode(_: _134.QueryTotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryTotalLiquidityRequest;
                fromJSON(_: any): _134.QueryTotalLiquidityRequest;
                toJSON(_: _134.QueryTotalLiquidityRequest): unknown;
                fromPartial(_: Partial<_134.QueryTotalLiquidityRequest>): _134.QueryTotalLiquidityRequest;
                fromAmino(_: _134.QueryTotalLiquidityRequestAmino): _134.QueryTotalLiquidityRequest;
                toAmino(_: _134.QueryTotalLiquidityRequest): _134.QueryTotalLiquidityRequestAmino;
            };
            QueryTotalLiquidityResponse: {
                encode(message: _134.QueryTotalLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryTotalLiquidityResponse;
                fromJSON(object: any): _134.QueryTotalLiquidityResponse;
                toJSON(message: _134.QueryTotalLiquidityResponse): unknown;
                fromPartial(object: Partial<_134.QueryTotalLiquidityResponse>): _134.QueryTotalLiquidityResponse;
                fromAmino(object: _134.QueryTotalLiquidityResponseAmino): _134.QueryTotalLiquidityResponse;
                toAmino(message: _134.QueryTotalLiquidityResponse): _134.QueryTotalLiquidityResponseAmino;
            };
            PoolI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _132.Pool | _137.Pool;
            PoolI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            PoolI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino | {
                type: string;
                value: _132.PoolAmino;
            } | {
                type: string;
                value: _137.PoolAmino;
            };
            Params: {
                encode(message: _133.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Params;
                fromJSON(object: any): _133.Params;
                toJSON(message: _133.Params): unknown;
                fromPartial(object: Partial<_133.Params>): _133.Params;
                fromAmino(object: _133.ParamsAmino): _133.Params;
                toAmino(message: _133.Params): _133.ParamsAmino;
            };
            GenesisState: {
                encode(message: _133.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.GenesisState;
                fromJSON(object: any): _133.GenesisState;
                toJSON(message: _133.GenesisState): unknown;
                fromPartial(object: Partial<_133.GenesisState>): _133.GenesisState;
                fromAmino(object: _133.GenesisStateAmino): _133.GenesisState;
                toAmino(message: _133.GenesisState): _133.GenesisStateAmino;
            };
            SmoothWeightChangeParams: {
                encode(message: _132.SmoothWeightChangeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.SmoothWeightChangeParams;
                fromJSON(object: any): _132.SmoothWeightChangeParams;
                toJSON(message: _132.SmoothWeightChangeParams): unknown;
                fromPartial(object: Partial<_132.SmoothWeightChangeParams>): _132.SmoothWeightChangeParams;
                fromAmino(object: _132.SmoothWeightChangeParamsAmino): _132.SmoothWeightChangeParams;
                toAmino(message: _132.SmoothWeightChangeParams): _132.SmoothWeightChangeParamsAmino;
            };
            PoolParams: {
                encode(message: _132.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.PoolParams;
                fromJSON(object: any): _132.PoolParams;
                toJSON(message: _132.PoolParams): unknown;
                fromPartial(object: Partial<_132.PoolParams>): _132.PoolParams;
                fromAmino(object: _132.PoolParamsAmino): _132.PoolParams;
                toAmino(message: _132.PoolParams): _132.PoolParamsAmino;
            };
            PoolAsset: {
                encode(message: _132.PoolAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.PoolAsset;
                fromJSON(object: any): _132.PoolAsset;
                toJSON(message: _132.PoolAsset): unknown;
                fromPartial(object: Partial<_132.PoolAsset>): _132.PoolAsset;
                fromAmino(object: _132.PoolAssetAmino): _132.PoolAsset;
                toAmino(message: _132.PoolAsset): _132.PoolAssetAmino;
            };
            Pool: {
                encode(message: _132.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Pool;
                fromJSON(object: any): _132.Pool;
                toJSON(message: _132.Pool): unknown;
                fromPartial(object: Partial<_132.Pool>): _132.Pool;
                fromAmino(object: _132.PoolAmino): _132.Pool;
                toAmino(message: _132.Pool): _132.PoolAmino;
            };
        };
        namespace poolmodels {
            namespace balancer {
                const v1beta1: {
                    MsgClientImpl: typeof _315.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createBalancerPool(value: _136.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createBalancerPool(value: _136.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _136.MsgCreateBalancerPool;
                            };
                        };
                        toJSON: {
                            createBalancerPool(value: _136.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            createBalancerPool(value: any): {
                                typeUrl: string;
                                value: _136.MsgCreateBalancerPool;
                            };
                        };
                        fromPartial: {
                            createBalancerPool(value: _136.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _136.MsgCreateBalancerPool;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
                            aminoType: string;
                            toAmino: (message: _136.MsgCreateBalancerPool) => _136.MsgCreateBalancerPoolAmino;
                            fromAmino: (object: _136.MsgCreateBalancerPoolAmino) => _136.MsgCreateBalancerPool;
                        };
                    };
                    MsgCreateBalancerPool: {
                        encode(message: _136.MsgCreateBalancerPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.MsgCreateBalancerPool;
                        fromJSON(object: any): _136.MsgCreateBalancerPool;
                        toJSON(message: _136.MsgCreateBalancerPool): unknown;
                        fromPartial(object: Partial<_136.MsgCreateBalancerPool>): _136.MsgCreateBalancerPool;
                        fromAmino(object: _136.MsgCreateBalancerPoolAmino): _136.MsgCreateBalancerPool;
                        toAmino(message: _136.MsgCreateBalancerPool): _136.MsgCreateBalancerPoolAmino;
                    };
                    MsgCreateBalancerPoolResponse: {
                        encode(message: _136.MsgCreateBalancerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.MsgCreateBalancerPoolResponse;
                        fromJSON(object: any): _136.MsgCreateBalancerPoolResponse;
                        toJSON(message: _136.MsgCreateBalancerPoolResponse): unknown;
                        fromPartial(object: Partial<_136.MsgCreateBalancerPoolResponse>): _136.MsgCreateBalancerPoolResponse;
                        fromAmino(object: _136.MsgCreateBalancerPoolResponseAmino): _136.MsgCreateBalancerPoolResponse;
                        toAmino(message: _136.MsgCreateBalancerPoolResponse): _136.MsgCreateBalancerPoolResponseAmino;
                    };
                };
            }
            namespace stableswap {
                const v1beta1: {
                    MsgClientImpl: typeof _316.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createStableswapPool(value: _138.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            stableSwapAdjustScalingFactors(value: _138.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createStableswapPool(value: _138.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _138.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _138.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _138.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        toJSON: {
                            createStableswapPool(value: _138.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: unknown;
                            };
                            stableSwapAdjustScalingFactors(value: _138.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            createStableswapPool(value: any): {
                                typeUrl: string;
                                value: _138.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: any): {
                                typeUrl: string;
                                value: _138.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        fromPartial: {
                            createStableswapPool(value: _138.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _138.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _138.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _138.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
                            aminoType: string;
                            toAmino: (message: _138.MsgCreateStableswapPool) => _138.MsgCreateStableswapPoolAmino;
                            fromAmino: (object: _138.MsgCreateStableswapPoolAmino) => _138.MsgCreateStableswapPool;
                        };
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
                            aminoType: string;
                            toAmino: (message: _138.MsgStableSwapAdjustScalingFactors) => _138.MsgStableSwapAdjustScalingFactorsAmino;
                            fromAmino: (object: _138.MsgStableSwapAdjustScalingFactorsAmino) => _138.MsgStableSwapAdjustScalingFactors;
                        };
                    };
                    MsgCreateStableswapPool: {
                        encode(message: _138.MsgCreateStableswapPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgCreateStableswapPool;
                        fromJSON(object: any): _138.MsgCreateStableswapPool;
                        toJSON(message: _138.MsgCreateStableswapPool): unknown;
                        fromPartial(object: Partial<_138.MsgCreateStableswapPool>): _138.MsgCreateStableswapPool;
                        fromAmino(object: _138.MsgCreateStableswapPoolAmino): _138.MsgCreateStableswapPool;
                        toAmino(message: _138.MsgCreateStableswapPool): _138.MsgCreateStableswapPoolAmino;
                    };
                    MsgCreateStableswapPoolResponse: {
                        encode(message: _138.MsgCreateStableswapPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgCreateStableswapPoolResponse;
                        fromJSON(object: any): _138.MsgCreateStableswapPoolResponse;
                        toJSON(message: _138.MsgCreateStableswapPoolResponse): unknown;
                        fromPartial(object: Partial<_138.MsgCreateStableswapPoolResponse>): _138.MsgCreateStableswapPoolResponse;
                        fromAmino(object: _138.MsgCreateStableswapPoolResponseAmino): _138.MsgCreateStableswapPoolResponse;
                        toAmino(message: _138.MsgCreateStableswapPoolResponse): _138.MsgCreateStableswapPoolResponseAmino;
                    };
                    MsgStableSwapAdjustScalingFactors: {
                        encode(message: _138.MsgStableSwapAdjustScalingFactors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgStableSwapAdjustScalingFactors;
                        fromJSON(object: any): _138.MsgStableSwapAdjustScalingFactors;
                        toJSON(message: _138.MsgStableSwapAdjustScalingFactors): unknown;
                        fromPartial(object: Partial<_138.MsgStableSwapAdjustScalingFactors>): _138.MsgStableSwapAdjustScalingFactors;
                        fromAmino(object: _138.MsgStableSwapAdjustScalingFactorsAmino): _138.MsgStableSwapAdjustScalingFactors;
                        toAmino(message: _138.MsgStableSwapAdjustScalingFactors): _138.MsgStableSwapAdjustScalingFactorsAmino;
                    };
                    MsgStableSwapAdjustScalingFactorsResponse: {
                        encode(_: _138.MsgStableSwapAdjustScalingFactorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgStableSwapAdjustScalingFactorsResponse;
                        fromJSON(_: any): _138.MsgStableSwapAdjustScalingFactorsResponse;
                        toJSON(_: _138.MsgStableSwapAdjustScalingFactorsResponse): unknown;
                        fromPartial(_: Partial<_138.MsgStableSwapAdjustScalingFactorsResponse>): _138.MsgStableSwapAdjustScalingFactorsResponse;
                        fromAmino(_: _138.MsgStableSwapAdjustScalingFactorsResponseAmino): _138.MsgStableSwapAdjustScalingFactorsResponse;
                        toAmino(_: _138.MsgStableSwapAdjustScalingFactorsResponse): _138.MsgStableSwapAdjustScalingFactorsResponseAmino;
                    };
                    PoolParams: {
                        encode(message: _137.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.PoolParams;
                        fromJSON(object: any): _137.PoolParams;
                        toJSON(message: _137.PoolParams): unknown;
                        fromPartial(object: Partial<_137.PoolParams>): _137.PoolParams;
                        fromAmino(object: _137.PoolParamsAmino): _137.PoolParams;
                        toAmino(message: _137.PoolParams): _137.PoolParamsAmino;
                    };
                    Pool: {
                        encode(message: _137.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Pool;
                        fromJSON(object: any): _137.Pool;
                        toJSON(message: _137.Pool): unknown;
                        fromPartial(object: Partial<_137.Pool>): _137.Pool;
                        fromAmino(object: _137.PoolAmino): _137.Pool;
                        toAmino(message: _137.Pool): _137.PoolAmino;
                    };
                };
            }
        }
        const v2: {
            QueryClientImpl: typeof _302.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                spotPrice(request: _139.QuerySpotPriceRequest): Promise<_139.QuerySpotPriceResponse>;
            };
            QuerySpotPriceRequest: {
                encode(message: _139.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QuerySpotPriceRequest;
                fromJSON(object: any): _139.QuerySpotPriceRequest;
                toJSON(message: _139.QuerySpotPriceRequest): unknown;
                fromPartial(object: Partial<_139.QuerySpotPriceRequest>): _139.QuerySpotPriceRequest;
                fromAmino(object: _139.QuerySpotPriceRequestAmino): _139.QuerySpotPriceRequest;
                toAmino(message: _139.QuerySpotPriceRequest): _139.QuerySpotPriceRequestAmino;
            };
            QuerySpotPriceResponse: {
                encode(message: _139.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QuerySpotPriceResponse;
                fromJSON(object: any): _139.QuerySpotPriceResponse;
                toJSON(message: _139.QuerySpotPriceResponse): unknown;
                fromPartial(object: Partial<_139.QuerySpotPriceResponse>): _139.QuerySpotPriceResponse;
                fromAmino(object: _139.QuerySpotPriceResponseAmino): _139.QuerySpotPriceResponse;
                toAmino(message: _139.QuerySpotPriceResponse): _139.QuerySpotPriceResponseAmino;
            };
        };
    }
    namespace ibcratelimit {
        const v1beta1: {
            QueryClientImpl: typeof _303.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _141.QueryParamsRequest): Promise<_141.QueryParamsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _141.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryParamsRequest;
                fromJSON(_: any): _141.QueryParamsRequest;
                toJSON(_: _141.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_141.QueryParamsRequest>): _141.QueryParamsRequest;
                fromAmino(_: _141.QueryParamsRequestAmino): _141.QueryParamsRequest;
                toAmino(_: _141.QueryParamsRequest): _141.QueryParamsRequestAmino;
            };
            QueryParamsResponse: {
                encode(message: _141.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryParamsResponse;
                fromJSON(object: any): _141.QueryParamsResponse;
                toJSON(message: _141.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_141.QueryParamsResponse>): _141.QueryParamsResponse;
                fromAmino(object: _141.QueryParamsResponseAmino): _141.QueryParamsResponse;
                toAmino(message: _141.QueryParamsResponse): _141.QueryParamsResponseAmino;
            };
            Params: {
                encode(message: _140.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Params;
                fromJSON(object: any): _140.Params;
                toJSON(message: _140.Params): unknown;
                fromPartial(object: Partial<_140.Params>): _140.Params;
                fromAmino(object: _140.ParamsAmino): _140.Params;
                toAmino(message: _140.Params): _140.ParamsAmino;
            };
        };
    }
    const incentives: {
        MsgClientImpl: typeof _318.MsgClientImpl;
        QueryClientImpl: typeof _304.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleToDistributeCoins(request?: _145.ModuleToDistributeCoinsRequest): Promise<_145.ModuleToDistributeCoinsResponse>;
            gaugeByID(request: _145.GaugeByIDRequest): Promise<_145.GaugeByIDResponse>;
            gauges(request?: _145.GaugesRequest): Promise<_145.GaugesResponse>;
            activeGauges(request?: _145.ActiveGaugesRequest): Promise<_145.ActiveGaugesResponse>;
            activeGaugesPerDenom(request: _145.ActiveGaugesPerDenomRequest): Promise<_145.ActiveGaugesPerDenomResponse>;
            upcomingGauges(request?: _145.UpcomingGaugesRequest): Promise<_145.UpcomingGaugesResponse>;
            upcomingGaugesPerDenom(request: _145.UpcomingGaugesPerDenomRequest): Promise<_145.UpcomingGaugesPerDenomResponse>;
            rewardsEst(request: _145.RewardsEstRequest): Promise<_145.RewardsEstResponse>;
            lockableDurations(request?: _145.QueryLockableDurationsRequest): Promise<_145.QueryLockableDurationsResponse>;
        };
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createGauge(value: _146.MsgCreateGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToGauge(value: _146.MsgAddToGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _146.MsgCreateGauge): {
                    typeUrl: string;
                    value: _146.MsgCreateGauge;
                };
                addToGauge(value: _146.MsgAddToGauge): {
                    typeUrl: string;
                    value: _146.MsgAddToGauge;
                };
            };
            toJSON: {
                createGauge(value: _146.MsgCreateGauge): {
                    typeUrl: string;
                    value: unknown;
                };
                addToGauge(value: _146.MsgAddToGauge): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                createGauge(value: any): {
                    typeUrl: string;
                    value: _146.MsgCreateGauge;
                };
                addToGauge(value: any): {
                    typeUrl: string;
                    value: _146.MsgAddToGauge;
                };
            };
            fromPartial: {
                createGauge(value: _146.MsgCreateGauge): {
                    typeUrl: string;
                    value: _146.MsgCreateGauge;
                };
                addToGauge(value: _146.MsgAddToGauge): {
                    typeUrl: string;
                    value: _146.MsgAddToGauge;
                };
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: (message: _146.MsgCreateGauge) => _146.MsgCreateGaugeAmino;
                fromAmino: (object: _146.MsgCreateGaugeAmino) => _146.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: (message: _146.MsgAddToGauge) => _146.MsgAddToGaugeAmino;
                fromAmino: (object: _146.MsgAddToGaugeAmino) => _146.MsgAddToGauge;
            };
        };
        MsgCreateGauge: {
            encode(message: _146.MsgCreateGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgCreateGauge;
            fromJSON(object: any): _146.MsgCreateGauge;
            toJSON(message: _146.MsgCreateGauge): unknown;
            fromPartial(object: Partial<_146.MsgCreateGauge>): _146.MsgCreateGauge;
            fromAmino(object: _146.MsgCreateGaugeAmino): _146.MsgCreateGauge;
            toAmino(message: _146.MsgCreateGauge): _146.MsgCreateGaugeAmino;
        };
        MsgCreateGaugeResponse: {
            encode(_: _146.MsgCreateGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgCreateGaugeResponse;
            fromJSON(_: any): _146.MsgCreateGaugeResponse;
            toJSON(_: _146.MsgCreateGaugeResponse): unknown;
            fromPartial(_: Partial<_146.MsgCreateGaugeResponse>): _146.MsgCreateGaugeResponse;
            fromAmino(_: _146.MsgCreateGaugeResponseAmino): _146.MsgCreateGaugeResponse;
            toAmino(_: _146.MsgCreateGaugeResponse): _146.MsgCreateGaugeResponseAmino;
        };
        MsgAddToGauge: {
            encode(message: _146.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgAddToGauge;
            fromJSON(object: any): _146.MsgAddToGauge;
            toJSON(message: _146.MsgAddToGauge): unknown;
            fromPartial(object: Partial<_146.MsgAddToGauge>): _146.MsgAddToGauge;
            fromAmino(object: _146.MsgAddToGaugeAmino): _146.MsgAddToGauge;
            toAmino(message: _146.MsgAddToGauge): _146.MsgAddToGaugeAmino;
        };
        MsgAddToGaugeResponse: {
            encode(_: _146.MsgAddToGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.MsgAddToGaugeResponse;
            fromJSON(_: any): _146.MsgAddToGaugeResponse;
            toJSON(_: _146.MsgAddToGaugeResponse): unknown;
            fromPartial(_: Partial<_146.MsgAddToGaugeResponse>): _146.MsgAddToGaugeResponse;
            fromAmino(_: _146.MsgAddToGaugeResponseAmino): _146.MsgAddToGaugeResponse;
            toAmino(_: _146.MsgAddToGaugeResponse): _146.MsgAddToGaugeResponseAmino;
        };
        ModuleToDistributeCoinsRequest: {
            encode(_: _145.ModuleToDistributeCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ModuleToDistributeCoinsRequest;
            fromJSON(_: any): _145.ModuleToDistributeCoinsRequest;
            toJSON(_: _145.ModuleToDistributeCoinsRequest): unknown;
            fromPartial(_: Partial<_145.ModuleToDistributeCoinsRequest>): _145.ModuleToDistributeCoinsRequest;
            fromAmino(_: _145.ModuleToDistributeCoinsRequestAmino): _145.ModuleToDistributeCoinsRequest;
            toAmino(_: _145.ModuleToDistributeCoinsRequest): _145.ModuleToDistributeCoinsRequestAmino;
        };
        ModuleToDistributeCoinsResponse: {
            encode(message: _145.ModuleToDistributeCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ModuleToDistributeCoinsResponse;
            fromJSON(object: any): _145.ModuleToDistributeCoinsResponse;
            toJSON(message: _145.ModuleToDistributeCoinsResponse): unknown;
            fromPartial(object: Partial<_145.ModuleToDistributeCoinsResponse>): _145.ModuleToDistributeCoinsResponse;
            fromAmino(object: _145.ModuleToDistributeCoinsResponseAmino): _145.ModuleToDistributeCoinsResponse;
            toAmino(message: _145.ModuleToDistributeCoinsResponse): _145.ModuleToDistributeCoinsResponseAmino;
        };
        GaugeByIDRequest: {
            encode(message: _145.GaugeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.GaugeByIDRequest;
            fromJSON(object: any): _145.GaugeByIDRequest;
            toJSON(message: _145.GaugeByIDRequest): unknown;
            fromPartial(object: Partial<_145.GaugeByIDRequest>): _145.GaugeByIDRequest;
            fromAmino(object: _145.GaugeByIDRequestAmino): _145.GaugeByIDRequest;
            toAmino(message: _145.GaugeByIDRequest): _145.GaugeByIDRequestAmino;
        };
        GaugeByIDResponse: {
            encode(message: _145.GaugeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.GaugeByIDResponse;
            fromJSON(object: any): _145.GaugeByIDResponse;
            toJSON(message: _145.GaugeByIDResponse): unknown;
            fromPartial(object: Partial<_145.GaugeByIDResponse>): _145.GaugeByIDResponse;
            fromAmino(object: _145.GaugeByIDResponseAmino): _145.GaugeByIDResponse;
            toAmino(message: _145.GaugeByIDResponse): _145.GaugeByIDResponseAmino;
        };
        GaugesRequest: {
            encode(message: _145.GaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.GaugesRequest;
            fromJSON(object: any): _145.GaugesRequest;
            toJSON(message: _145.GaugesRequest): unknown;
            fromPartial(object: Partial<_145.GaugesRequest>): _145.GaugesRequest;
            fromAmino(object: _145.GaugesRequestAmino): _145.GaugesRequest;
            toAmino(message: _145.GaugesRequest): _145.GaugesRequestAmino;
        };
        GaugesResponse: {
            encode(message: _145.GaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.GaugesResponse;
            fromJSON(object: any): _145.GaugesResponse;
            toJSON(message: _145.GaugesResponse): unknown;
            fromPartial(object: Partial<_145.GaugesResponse>): _145.GaugesResponse;
            fromAmino(object: _145.GaugesResponseAmino): _145.GaugesResponse;
            toAmino(message: _145.GaugesResponse): _145.GaugesResponseAmino;
        };
        ActiveGaugesRequest: {
            encode(message: _145.ActiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ActiveGaugesRequest;
            fromJSON(object: any): _145.ActiveGaugesRequest;
            toJSON(message: _145.ActiveGaugesRequest): unknown;
            fromPartial(object: Partial<_145.ActiveGaugesRequest>): _145.ActiveGaugesRequest;
            fromAmino(object: _145.ActiveGaugesRequestAmino): _145.ActiveGaugesRequest;
            toAmino(message: _145.ActiveGaugesRequest): _145.ActiveGaugesRequestAmino;
        };
        ActiveGaugesResponse: {
            encode(message: _145.ActiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ActiveGaugesResponse;
            fromJSON(object: any): _145.ActiveGaugesResponse;
            toJSON(message: _145.ActiveGaugesResponse): unknown;
            fromPartial(object: Partial<_145.ActiveGaugesResponse>): _145.ActiveGaugesResponse;
            fromAmino(object: _145.ActiveGaugesResponseAmino): _145.ActiveGaugesResponse;
            toAmino(message: _145.ActiveGaugesResponse): _145.ActiveGaugesResponseAmino;
        };
        ActiveGaugesPerDenomRequest: {
            encode(message: _145.ActiveGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ActiveGaugesPerDenomRequest;
            fromJSON(object: any): _145.ActiveGaugesPerDenomRequest;
            toJSON(message: _145.ActiveGaugesPerDenomRequest): unknown;
            fromPartial(object: Partial<_145.ActiveGaugesPerDenomRequest>): _145.ActiveGaugesPerDenomRequest;
            fromAmino(object: _145.ActiveGaugesPerDenomRequestAmino): _145.ActiveGaugesPerDenomRequest;
            toAmino(message: _145.ActiveGaugesPerDenomRequest): _145.ActiveGaugesPerDenomRequestAmino;
        };
        ActiveGaugesPerDenomResponse: {
            encode(message: _145.ActiveGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ActiveGaugesPerDenomResponse;
            fromJSON(object: any): _145.ActiveGaugesPerDenomResponse;
            toJSON(message: _145.ActiveGaugesPerDenomResponse): unknown;
            fromPartial(object: Partial<_145.ActiveGaugesPerDenomResponse>): _145.ActiveGaugesPerDenomResponse;
            fromAmino(object: _145.ActiveGaugesPerDenomResponseAmino): _145.ActiveGaugesPerDenomResponse;
            toAmino(message: _145.ActiveGaugesPerDenomResponse): _145.ActiveGaugesPerDenomResponseAmino;
        };
        UpcomingGaugesRequest: {
            encode(message: _145.UpcomingGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.UpcomingGaugesRequest;
            fromJSON(object: any): _145.UpcomingGaugesRequest;
            toJSON(message: _145.UpcomingGaugesRequest): unknown;
            fromPartial(object: Partial<_145.UpcomingGaugesRequest>): _145.UpcomingGaugesRequest;
            fromAmino(object: _145.UpcomingGaugesRequestAmino): _145.UpcomingGaugesRequest;
            toAmino(message: _145.UpcomingGaugesRequest): _145.UpcomingGaugesRequestAmino;
        };
        UpcomingGaugesResponse: {
            encode(message: _145.UpcomingGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.UpcomingGaugesResponse;
            fromJSON(object: any): _145.UpcomingGaugesResponse;
            toJSON(message: _145.UpcomingGaugesResponse): unknown;
            fromPartial(object: Partial<_145.UpcomingGaugesResponse>): _145.UpcomingGaugesResponse;
            fromAmino(object: _145.UpcomingGaugesResponseAmino): _145.UpcomingGaugesResponse;
            toAmino(message: _145.UpcomingGaugesResponse): _145.UpcomingGaugesResponseAmino;
        };
        UpcomingGaugesPerDenomRequest: {
            encode(message: _145.UpcomingGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.UpcomingGaugesPerDenomRequest;
            fromJSON(object: any): _145.UpcomingGaugesPerDenomRequest;
            toJSON(message: _145.UpcomingGaugesPerDenomRequest): unknown;
            fromPartial(object: Partial<_145.UpcomingGaugesPerDenomRequest>): _145.UpcomingGaugesPerDenomRequest;
            fromAmino(object: _145.UpcomingGaugesPerDenomRequestAmino): _145.UpcomingGaugesPerDenomRequest;
            toAmino(message: _145.UpcomingGaugesPerDenomRequest): _145.UpcomingGaugesPerDenomRequestAmino;
        };
        UpcomingGaugesPerDenomResponse: {
            encode(message: _145.UpcomingGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.UpcomingGaugesPerDenomResponse;
            fromJSON(object: any): _145.UpcomingGaugesPerDenomResponse;
            toJSON(message: _145.UpcomingGaugesPerDenomResponse): unknown;
            fromPartial(object: Partial<_145.UpcomingGaugesPerDenomResponse>): _145.UpcomingGaugesPerDenomResponse;
            fromAmino(object: _145.UpcomingGaugesPerDenomResponseAmino): _145.UpcomingGaugesPerDenomResponse;
            toAmino(message: _145.UpcomingGaugesPerDenomResponse): _145.UpcomingGaugesPerDenomResponseAmino;
        };
        RewardsEstRequest: {
            encode(message: _145.RewardsEstRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.RewardsEstRequest;
            fromJSON(object: any): _145.RewardsEstRequest;
            toJSON(message: _145.RewardsEstRequest): unknown;
            fromPartial(object: Partial<_145.RewardsEstRequest>): _145.RewardsEstRequest;
            fromAmino(object: _145.RewardsEstRequestAmino): _145.RewardsEstRequest;
            toAmino(message: _145.RewardsEstRequest): _145.RewardsEstRequestAmino;
        };
        RewardsEstResponse: {
            encode(message: _145.RewardsEstResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.RewardsEstResponse;
            fromJSON(object: any): _145.RewardsEstResponse;
            toJSON(message: _145.RewardsEstResponse): unknown;
            fromPartial(object: Partial<_145.RewardsEstResponse>): _145.RewardsEstResponse;
            fromAmino(object: _145.RewardsEstResponseAmino): _145.RewardsEstResponse;
            toAmino(message: _145.RewardsEstResponse): _145.RewardsEstResponseAmino;
        };
        QueryLockableDurationsRequest: {
            encode(_: _145.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryLockableDurationsRequest;
            fromJSON(_: any): _145.QueryLockableDurationsRequest;
            toJSON(_: _145.QueryLockableDurationsRequest): unknown;
            fromPartial(_: Partial<_145.QueryLockableDurationsRequest>): _145.QueryLockableDurationsRequest;
            fromAmino(_: _145.QueryLockableDurationsRequestAmino): _145.QueryLockableDurationsRequest;
            toAmino(_: _145.QueryLockableDurationsRequest): _145.QueryLockableDurationsRequestAmino;
        };
        QueryLockableDurationsResponse: {
            encode(message: _145.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryLockableDurationsResponse;
            fromJSON(object: any): _145.QueryLockableDurationsResponse;
            toJSON(message: _145.QueryLockableDurationsResponse): unknown;
            fromPartial(object: Partial<_145.QueryLockableDurationsResponse>): _145.QueryLockableDurationsResponse;
            fromAmino(object: _145.QueryLockableDurationsResponseAmino): _145.QueryLockableDurationsResponse;
            toAmino(message: _145.QueryLockableDurationsResponse): _145.QueryLockableDurationsResponseAmino;
        };
        Params: {
            encode(message: _144.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Params;
            fromJSON(object: any): _144.Params;
            toJSON(message: _144.Params): unknown;
            fromPartial(object: Partial<_144.Params>): _144.Params;
            fromAmino(object: _144.ParamsAmino): _144.Params;
            toAmino(message: _144.Params): _144.ParamsAmino;
        };
        GenesisState: {
            encode(message: _143.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.GenesisState;
            fromJSON(object: any): _143.GenesisState;
            toJSON(message: _143.GenesisState): unknown;
            fromPartial(object: Partial<_143.GenesisState>): _143.GenesisState;
            fromAmino(object: _143.GenesisStateAmino): _143.GenesisState;
            toAmino(message: _143.GenesisState): _143.GenesisStateAmino;
        };
        Gauge: {
            encode(message: _142.Gauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.Gauge;
            fromJSON(object: any): _142.Gauge;
            toJSON(message: _142.Gauge): unknown;
            fromPartial(object: Partial<_142.Gauge>): _142.Gauge;
            fromAmino(object: _142.GaugeAmino): _142.Gauge;
            toAmino(message: _142.Gauge): _142.GaugeAmino;
        };
        LockableDurationsInfo: {
            encode(message: _142.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.LockableDurationsInfo;
            fromJSON(object: any): _142.LockableDurationsInfo;
            toJSON(message: _142.LockableDurationsInfo): unknown;
            fromPartial(object: Partial<_142.LockableDurationsInfo>): _142.LockableDurationsInfo;
            fromAmino(object: _142.LockableDurationsInfoAmino): _142.LockableDurationsInfo;
            toAmino(message: _142.LockableDurationsInfo): _142.LockableDurationsInfoAmino;
        };
    };
    const lockup: {
        MsgClientImpl: typeof _319.MsgClientImpl;
        QueryClientImpl: typeof _305.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleBalance(request?: _150.ModuleBalanceRequest): Promise<_150.ModuleBalanceResponse>;
            moduleLockedAmount(request?: _150.ModuleLockedAmountRequest): Promise<_150.ModuleLockedAmountResponse>;
            accountUnlockableCoins(request: _150.AccountUnlockableCoinsRequest): Promise<_150.AccountUnlockableCoinsResponse>;
            accountUnlockingCoins(request: _150.AccountUnlockingCoinsRequest): Promise<_150.AccountUnlockingCoinsResponse>;
            accountLockedCoins(request: _150.AccountLockedCoinsRequest): Promise<_150.AccountLockedCoinsResponse>;
            accountLockedPastTime(request: _150.AccountLockedPastTimeRequest): Promise<_150.AccountLockedPastTimeResponse>;
            accountLockedPastTimeNotUnlockingOnly(request: _150.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_150.AccountLockedPastTimeNotUnlockingOnlyResponse>;
            accountUnlockedBeforeTime(request: _150.AccountUnlockedBeforeTimeRequest): Promise<_150.AccountUnlockedBeforeTimeResponse>;
            accountLockedPastTimeDenom(request: _150.AccountLockedPastTimeDenomRequest): Promise<_150.AccountLockedPastTimeDenomResponse>;
            lockedDenom(request: _150.LockedDenomRequest): Promise<_150.LockedDenomResponse>;
            lockedByID(request: _150.LockedRequest): Promise<_150.LockedResponse>;
            syntheticLockupsByLockupID(request: _150.SyntheticLockupsByLockupIDRequest): Promise<_150.SyntheticLockupsByLockupIDResponse>;
            accountLockedLongerDuration(request: _150.AccountLockedLongerDurationRequest): Promise<_150.AccountLockedLongerDurationResponse>;
            accountLockedDuration(request: _150.AccountLockedDurationRequest): Promise<_150.AccountLockedDurationResponse>;
            accountLockedLongerDurationNotUnlockingOnly(request: _150.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_150.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
            accountLockedLongerDurationDenom(request: _150.AccountLockedLongerDurationDenomRequest): Promise<_150.AccountLockedLongerDurationDenomResponse>;
            params(request?: _150.QueryParamsRequest): Promise<_150.QueryParamsResponse>;
        };
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _151.MsgLockTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _151.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _151.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                extendLockup(value: _151.MsgExtendLockup): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                forceUnlock(value: _151.MsgForceUnlock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _151.MsgLockTokens): {
                    typeUrl: string;
                    value: _151.MsgLockTokens;
                };
                beginUnlockingAll(value: _151.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _151.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _151.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _151.MsgBeginUnlocking;
                };
                extendLockup(value: _151.MsgExtendLockup): {
                    typeUrl: string;
                    value: _151.MsgExtendLockup;
                };
                forceUnlock(value: _151.MsgForceUnlock): {
                    typeUrl: string;
                    value: _151.MsgForceUnlock;
                };
            };
            toJSON: {
                lockTokens(value: _151.MsgLockTokens): {
                    typeUrl: string;
                    value: unknown;
                };
                beginUnlockingAll(value: _151.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: unknown;
                };
                beginUnlocking(value: _151.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: unknown;
                };
                extendLockup(value: _151.MsgExtendLockup): {
                    typeUrl: string;
                    value: unknown;
                };
                forceUnlock(value: _151.MsgForceUnlock): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                lockTokens(value: any): {
                    typeUrl: string;
                    value: _151.MsgLockTokens;
                };
                beginUnlockingAll(value: any): {
                    typeUrl: string;
                    value: _151.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: any): {
                    typeUrl: string;
                    value: _151.MsgBeginUnlocking;
                };
                extendLockup(value: any): {
                    typeUrl: string;
                    value: _151.MsgExtendLockup;
                };
                forceUnlock(value: any): {
                    typeUrl: string;
                    value: _151.MsgForceUnlock;
                };
            };
            fromPartial: {
                lockTokens(value: _151.MsgLockTokens): {
                    typeUrl: string;
                    value: _151.MsgLockTokens;
                };
                beginUnlockingAll(value: _151.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _151.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _151.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _151.MsgBeginUnlocking;
                };
                extendLockup(value: _151.MsgExtendLockup): {
                    typeUrl: string;
                    value: _151.MsgExtendLockup;
                };
                forceUnlock(value: _151.MsgForceUnlock): {
                    typeUrl: string;
                    value: _151.MsgForceUnlock;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: (message: _151.MsgLockTokens) => _151.MsgLockTokensAmino;
                fromAmino: (object: _151.MsgLockTokensAmino) => _151.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: (message: _151.MsgBeginUnlockingAll) => _151.MsgBeginUnlockingAllAmino;
                fromAmino: (object: _151.MsgBeginUnlockingAllAmino) => _151.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: (message: _151.MsgBeginUnlocking) => _151.MsgBeginUnlockingAmino;
                fromAmino: (object: _151.MsgBeginUnlockingAmino) => _151.MsgBeginUnlocking;
            };
            "/osmosis.lockup.MsgExtendLockup": {
                aminoType: string;
                toAmino: (message: _151.MsgExtendLockup) => _151.MsgExtendLockupAmino;
                fromAmino: (object: _151.MsgExtendLockupAmino) => _151.MsgExtendLockup;
            };
            "/osmosis.lockup.MsgForceUnlock": {
                aminoType: string;
                toAmino: (message: _151.MsgForceUnlock) => _151.MsgForceUnlockAmino;
                fromAmino: (object: _151.MsgForceUnlockAmino) => _151.MsgForceUnlock;
            };
        };
        MsgLockTokens: {
            encode(message: _151.MsgLockTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgLockTokens;
            fromJSON(object: any): _151.MsgLockTokens;
            toJSON(message: _151.MsgLockTokens): unknown;
            fromPartial(object: Partial<_151.MsgLockTokens>): _151.MsgLockTokens;
            fromAmino(object: _151.MsgLockTokensAmino): _151.MsgLockTokens;
            toAmino(message: _151.MsgLockTokens): _151.MsgLockTokensAmino;
        };
        MsgLockTokensResponse: {
            encode(message: _151.MsgLockTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgLockTokensResponse;
            fromJSON(object: any): _151.MsgLockTokensResponse;
            toJSON(message: _151.MsgLockTokensResponse): unknown;
            fromPartial(object: Partial<_151.MsgLockTokensResponse>): _151.MsgLockTokensResponse;
            fromAmino(object: _151.MsgLockTokensResponseAmino): _151.MsgLockTokensResponse;
            toAmino(message: _151.MsgLockTokensResponse): _151.MsgLockTokensResponseAmino;
        };
        MsgBeginUnlockingAll: {
            encode(message: _151.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgBeginUnlockingAll;
            fromJSON(object: any): _151.MsgBeginUnlockingAll;
            toJSON(message: _151.MsgBeginUnlockingAll): unknown;
            fromPartial(object: Partial<_151.MsgBeginUnlockingAll>): _151.MsgBeginUnlockingAll;
            fromAmino(object: _151.MsgBeginUnlockingAllAmino): _151.MsgBeginUnlockingAll;
            toAmino(message: _151.MsgBeginUnlockingAll): _151.MsgBeginUnlockingAllAmino;
        };
        MsgBeginUnlockingAllResponse: {
            encode(message: _151.MsgBeginUnlockingAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgBeginUnlockingAllResponse;
            fromJSON(object: any): _151.MsgBeginUnlockingAllResponse;
            toJSON(message: _151.MsgBeginUnlockingAllResponse): unknown;
            fromPartial(object: Partial<_151.MsgBeginUnlockingAllResponse>): _151.MsgBeginUnlockingAllResponse;
            fromAmino(object: _151.MsgBeginUnlockingAllResponseAmino): _151.MsgBeginUnlockingAllResponse;
            toAmino(message: _151.MsgBeginUnlockingAllResponse): _151.MsgBeginUnlockingAllResponseAmino;
        };
        MsgBeginUnlocking: {
            encode(message: _151.MsgBeginUnlocking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgBeginUnlocking;
            fromJSON(object: any): _151.MsgBeginUnlocking;
            toJSON(message: _151.MsgBeginUnlocking): unknown;
            fromPartial(object: Partial<_151.MsgBeginUnlocking>): _151.MsgBeginUnlocking;
            fromAmino(object: _151.MsgBeginUnlockingAmino): _151.MsgBeginUnlocking;
            toAmino(message: _151.MsgBeginUnlocking): _151.MsgBeginUnlockingAmino;
        };
        MsgBeginUnlockingResponse: {
            encode(message: _151.MsgBeginUnlockingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgBeginUnlockingResponse;
            fromJSON(object: any): _151.MsgBeginUnlockingResponse;
            toJSON(message: _151.MsgBeginUnlockingResponse): unknown;
            fromPartial(object: Partial<_151.MsgBeginUnlockingResponse>): _151.MsgBeginUnlockingResponse;
            fromAmino(object: _151.MsgBeginUnlockingResponseAmino): _151.MsgBeginUnlockingResponse;
            toAmino(message: _151.MsgBeginUnlockingResponse): _151.MsgBeginUnlockingResponseAmino;
        };
        MsgExtendLockup: {
            encode(message: _151.MsgExtendLockup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgExtendLockup;
            fromJSON(object: any): _151.MsgExtendLockup;
            toJSON(message: _151.MsgExtendLockup): unknown;
            fromPartial(object: Partial<_151.MsgExtendLockup>): _151.MsgExtendLockup;
            fromAmino(object: _151.MsgExtendLockupAmino): _151.MsgExtendLockup;
            toAmino(message: _151.MsgExtendLockup): _151.MsgExtendLockupAmino;
        };
        MsgExtendLockupResponse: {
            encode(message: _151.MsgExtendLockupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgExtendLockupResponse;
            fromJSON(object: any): _151.MsgExtendLockupResponse;
            toJSON(message: _151.MsgExtendLockupResponse): unknown;
            fromPartial(object: Partial<_151.MsgExtendLockupResponse>): _151.MsgExtendLockupResponse;
            fromAmino(object: _151.MsgExtendLockupResponseAmino): _151.MsgExtendLockupResponse;
            toAmino(message: _151.MsgExtendLockupResponse): _151.MsgExtendLockupResponseAmino;
        };
        MsgForceUnlock: {
            encode(message: _151.MsgForceUnlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgForceUnlock;
            fromJSON(object: any): _151.MsgForceUnlock;
            toJSON(message: _151.MsgForceUnlock): unknown;
            fromPartial(object: Partial<_151.MsgForceUnlock>): _151.MsgForceUnlock;
            fromAmino(object: _151.MsgForceUnlockAmino): _151.MsgForceUnlock;
            toAmino(message: _151.MsgForceUnlock): _151.MsgForceUnlockAmino;
        };
        MsgForceUnlockResponse: {
            encode(message: _151.MsgForceUnlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgForceUnlockResponse;
            fromJSON(object: any): _151.MsgForceUnlockResponse;
            toJSON(message: _151.MsgForceUnlockResponse): unknown;
            fromPartial(object: Partial<_151.MsgForceUnlockResponse>): _151.MsgForceUnlockResponse;
            fromAmino(object: _151.MsgForceUnlockResponseAmino): _151.MsgForceUnlockResponse;
            toAmino(message: _151.MsgForceUnlockResponse): _151.MsgForceUnlockResponseAmino;
        };
        ModuleBalanceRequest: {
            encode(_: _150.ModuleBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ModuleBalanceRequest;
            fromJSON(_: any): _150.ModuleBalanceRequest;
            toJSON(_: _150.ModuleBalanceRequest): unknown;
            fromPartial(_: Partial<_150.ModuleBalanceRequest>): _150.ModuleBalanceRequest;
            fromAmino(_: _150.ModuleBalanceRequestAmino): _150.ModuleBalanceRequest;
            toAmino(_: _150.ModuleBalanceRequest): _150.ModuleBalanceRequestAmino;
        };
        ModuleBalanceResponse: {
            encode(message: _150.ModuleBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ModuleBalanceResponse;
            fromJSON(object: any): _150.ModuleBalanceResponse;
            toJSON(message: _150.ModuleBalanceResponse): unknown;
            fromPartial(object: Partial<_150.ModuleBalanceResponse>): _150.ModuleBalanceResponse;
            fromAmino(object: _150.ModuleBalanceResponseAmino): _150.ModuleBalanceResponse;
            toAmino(message: _150.ModuleBalanceResponse): _150.ModuleBalanceResponseAmino;
        };
        ModuleLockedAmountRequest: {
            encode(_: _150.ModuleLockedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ModuleLockedAmountRequest;
            fromJSON(_: any): _150.ModuleLockedAmountRequest;
            toJSON(_: _150.ModuleLockedAmountRequest): unknown;
            fromPartial(_: Partial<_150.ModuleLockedAmountRequest>): _150.ModuleLockedAmountRequest;
            fromAmino(_: _150.ModuleLockedAmountRequestAmino): _150.ModuleLockedAmountRequest;
            toAmino(_: _150.ModuleLockedAmountRequest): _150.ModuleLockedAmountRequestAmino;
        };
        ModuleLockedAmountResponse: {
            encode(message: _150.ModuleLockedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ModuleLockedAmountResponse;
            fromJSON(object: any): _150.ModuleLockedAmountResponse;
            toJSON(message: _150.ModuleLockedAmountResponse): unknown;
            fromPartial(object: Partial<_150.ModuleLockedAmountResponse>): _150.ModuleLockedAmountResponse;
            fromAmino(object: _150.ModuleLockedAmountResponseAmino): _150.ModuleLockedAmountResponse;
            toAmino(message: _150.ModuleLockedAmountResponse): _150.ModuleLockedAmountResponseAmino;
        };
        AccountUnlockableCoinsRequest: {
            encode(message: _150.AccountUnlockableCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountUnlockableCoinsRequest;
            fromJSON(object: any): _150.AccountUnlockableCoinsRequest;
            toJSON(message: _150.AccountUnlockableCoinsRequest): unknown;
            fromPartial(object: Partial<_150.AccountUnlockableCoinsRequest>): _150.AccountUnlockableCoinsRequest;
            fromAmino(object: _150.AccountUnlockableCoinsRequestAmino): _150.AccountUnlockableCoinsRequest;
            toAmino(message: _150.AccountUnlockableCoinsRequest): _150.AccountUnlockableCoinsRequestAmino;
        };
        AccountUnlockableCoinsResponse: {
            encode(message: _150.AccountUnlockableCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountUnlockableCoinsResponse;
            fromJSON(object: any): _150.AccountUnlockableCoinsResponse;
            toJSON(message: _150.AccountUnlockableCoinsResponse): unknown;
            fromPartial(object: Partial<_150.AccountUnlockableCoinsResponse>): _150.AccountUnlockableCoinsResponse;
            fromAmino(object: _150.AccountUnlockableCoinsResponseAmino): _150.AccountUnlockableCoinsResponse;
            toAmino(message: _150.AccountUnlockableCoinsResponse): _150.AccountUnlockableCoinsResponseAmino;
        };
        AccountUnlockingCoinsRequest: {
            encode(message: _150.AccountUnlockingCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountUnlockingCoinsRequest;
            fromJSON(object: any): _150.AccountUnlockingCoinsRequest;
            toJSON(message: _150.AccountUnlockingCoinsRequest): unknown;
            fromPartial(object: Partial<_150.AccountUnlockingCoinsRequest>): _150.AccountUnlockingCoinsRequest;
            fromAmino(object: _150.AccountUnlockingCoinsRequestAmino): _150.AccountUnlockingCoinsRequest;
            toAmino(message: _150.AccountUnlockingCoinsRequest): _150.AccountUnlockingCoinsRequestAmino;
        };
        AccountUnlockingCoinsResponse: {
            encode(message: _150.AccountUnlockingCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountUnlockingCoinsResponse;
            fromJSON(object: any): _150.AccountUnlockingCoinsResponse;
            toJSON(message: _150.AccountUnlockingCoinsResponse): unknown;
            fromPartial(object: Partial<_150.AccountUnlockingCoinsResponse>): _150.AccountUnlockingCoinsResponse;
            fromAmino(object: _150.AccountUnlockingCoinsResponseAmino): _150.AccountUnlockingCoinsResponse;
            toAmino(message: _150.AccountUnlockingCoinsResponse): _150.AccountUnlockingCoinsResponseAmino;
        };
        AccountLockedCoinsRequest: {
            encode(message: _150.AccountLockedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedCoinsRequest;
            fromJSON(object: any): _150.AccountLockedCoinsRequest;
            toJSON(message: _150.AccountLockedCoinsRequest): unknown;
            fromPartial(object: Partial<_150.AccountLockedCoinsRequest>): _150.AccountLockedCoinsRequest;
            fromAmino(object: _150.AccountLockedCoinsRequestAmino): _150.AccountLockedCoinsRequest;
            toAmino(message: _150.AccountLockedCoinsRequest): _150.AccountLockedCoinsRequestAmino;
        };
        AccountLockedCoinsResponse: {
            encode(message: _150.AccountLockedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedCoinsResponse;
            fromJSON(object: any): _150.AccountLockedCoinsResponse;
            toJSON(message: _150.AccountLockedCoinsResponse): unknown;
            fromPartial(object: Partial<_150.AccountLockedCoinsResponse>): _150.AccountLockedCoinsResponse;
            fromAmino(object: _150.AccountLockedCoinsResponseAmino): _150.AccountLockedCoinsResponse;
            toAmino(message: _150.AccountLockedCoinsResponse): _150.AccountLockedCoinsResponseAmino;
        };
        AccountLockedPastTimeRequest: {
            encode(message: _150.AccountLockedPastTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedPastTimeRequest;
            fromJSON(object: any): _150.AccountLockedPastTimeRequest;
            toJSON(message: _150.AccountLockedPastTimeRequest): unknown;
            fromPartial(object: Partial<_150.AccountLockedPastTimeRequest>): _150.AccountLockedPastTimeRequest;
            fromAmino(object: _150.AccountLockedPastTimeRequestAmino): _150.AccountLockedPastTimeRequest;
            toAmino(message: _150.AccountLockedPastTimeRequest): _150.AccountLockedPastTimeRequestAmino;
        };
        AccountLockedPastTimeResponse: {
            encode(message: _150.AccountLockedPastTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedPastTimeResponse;
            fromJSON(object: any): _150.AccountLockedPastTimeResponse;
            toJSON(message: _150.AccountLockedPastTimeResponse): unknown;
            fromPartial(object: Partial<_150.AccountLockedPastTimeResponse>): _150.AccountLockedPastTimeResponse;
            fromAmino(object: _150.AccountLockedPastTimeResponseAmino): _150.AccountLockedPastTimeResponse;
            toAmino(message: _150.AccountLockedPastTimeResponse): _150.AccountLockedPastTimeResponseAmino;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            encode(message: _150.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromJSON(object: any): _150.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toJSON(message: _150.AccountLockedPastTimeNotUnlockingOnlyRequest): unknown;
            fromPartial(object: Partial<_150.AccountLockedPastTimeNotUnlockingOnlyRequest>): _150.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromAmino(object: _150.AccountLockedPastTimeNotUnlockingOnlyRequestAmino): _150.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toAmino(message: _150.AccountLockedPastTimeNotUnlockingOnlyRequest): _150.AccountLockedPastTimeNotUnlockingOnlyRequestAmino;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            encode(message: _150.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromJSON(object: any): _150.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toJSON(message: _150.AccountLockedPastTimeNotUnlockingOnlyResponse): unknown;
            fromPartial(object: Partial<_150.AccountLockedPastTimeNotUnlockingOnlyResponse>): _150.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromAmino(object: _150.AccountLockedPastTimeNotUnlockingOnlyResponseAmino): _150.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toAmino(message: _150.AccountLockedPastTimeNotUnlockingOnlyResponse): _150.AccountLockedPastTimeNotUnlockingOnlyResponseAmino;
        };
        AccountUnlockedBeforeTimeRequest: {
            encode(message: _150.AccountUnlockedBeforeTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountUnlockedBeforeTimeRequest;
            fromJSON(object: any): _150.AccountUnlockedBeforeTimeRequest;
            toJSON(message: _150.AccountUnlockedBeforeTimeRequest): unknown;
            fromPartial(object: Partial<_150.AccountUnlockedBeforeTimeRequest>): _150.AccountUnlockedBeforeTimeRequest;
            fromAmino(object: _150.AccountUnlockedBeforeTimeRequestAmino): _150.AccountUnlockedBeforeTimeRequest;
            toAmino(message: _150.AccountUnlockedBeforeTimeRequest): _150.AccountUnlockedBeforeTimeRequestAmino;
        };
        AccountUnlockedBeforeTimeResponse: {
            encode(message: _150.AccountUnlockedBeforeTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountUnlockedBeforeTimeResponse;
            fromJSON(object: any): _150.AccountUnlockedBeforeTimeResponse;
            toJSON(message: _150.AccountUnlockedBeforeTimeResponse): unknown;
            fromPartial(object: Partial<_150.AccountUnlockedBeforeTimeResponse>): _150.AccountUnlockedBeforeTimeResponse;
            fromAmino(object: _150.AccountUnlockedBeforeTimeResponseAmino): _150.AccountUnlockedBeforeTimeResponse;
            toAmino(message: _150.AccountUnlockedBeforeTimeResponse): _150.AccountUnlockedBeforeTimeResponseAmino;
        };
        AccountLockedPastTimeDenomRequest: {
            encode(message: _150.AccountLockedPastTimeDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedPastTimeDenomRequest;
            fromJSON(object: any): _150.AccountLockedPastTimeDenomRequest;
            toJSON(message: _150.AccountLockedPastTimeDenomRequest): unknown;
            fromPartial(object: Partial<_150.AccountLockedPastTimeDenomRequest>): _150.AccountLockedPastTimeDenomRequest;
            fromAmino(object: _150.AccountLockedPastTimeDenomRequestAmino): _150.AccountLockedPastTimeDenomRequest;
            toAmino(message: _150.AccountLockedPastTimeDenomRequest): _150.AccountLockedPastTimeDenomRequestAmino;
        };
        AccountLockedPastTimeDenomResponse: {
            encode(message: _150.AccountLockedPastTimeDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedPastTimeDenomResponse;
            fromJSON(object: any): _150.AccountLockedPastTimeDenomResponse;
            toJSON(message: _150.AccountLockedPastTimeDenomResponse): unknown;
            fromPartial(object: Partial<_150.AccountLockedPastTimeDenomResponse>): _150.AccountLockedPastTimeDenomResponse;
            fromAmino(object: _150.AccountLockedPastTimeDenomResponseAmino): _150.AccountLockedPastTimeDenomResponse;
            toAmino(message: _150.AccountLockedPastTimeDenomResponse): _150.AccountLockedPastTimeDenomResponseAmino;
        };
        LockedDenomRequest: {
            encode(message: _150.LockedDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.LockedDenomRequest;
            fromJSON(object: any): _150.LockedDenomRequest;
            toJSON(message: _150.LockedDenomRequest): unknown;
            fromPartial(object: Partial<_150.LockedDenomRequest>): _150.LockedDenomRequest;
            fromAmino(object: _150.LockedDenomRequestAmino): _150.LockedDenomRequest;
            toAmino(message: _150.LockedDenomRequest): _150.LockedDenomRequestAmino;
        };
        LockedDenomResponse: {
            encode(message: _150.LockedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.LockedDenomResponse;
            fromJSON(object: any): _150.LockedDenomResponse;
            toJSON(message: _150.LockedDenomResponse): unknown;
            fromPartial(object: Partial<_150.LockedDenomResponse>): _150.LockedDenomResponse;
            fromAmino(object: _150.LockedDenomResponseAmino): _150.LockedDenomResponse;
            toAmino(message: _150.LockedDenomResponse): _150.LockedDenomResponseAmino;
        };
        LockedRequest: {
            encode(message: _150.LockedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.LockedRequest;
            fromJSON(object: any): _150.LockedRequest;
            toJSON(message: _150.LockedRequest): unknown;
            fromPartial(object: Partial<_150.LockedRequest>): _150.LockedRequest;
            fromAmino(object: _150.LockedRequestAmino): _150.LockedRequest;
            toAmino(message: _150.LockedRequest): _150.LockedRequestAmino;
        };
        LockedResponse: {
            encode(message: _150.LockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.LockedResponse;
            fromJSON(object: any): _150.LockedResponse;
            toJSON(message: _150.LockedResponse): unknown;
            fromPartial(object: Partial<_150.LockedResponse>): _150.LockedResponse;
            fromAmino(object: _150.LockedResponseAmino): _150.LockedResponse;
            toAmino(message: _150.LockedResponse): _150.LockedResponseAmino;
        };
        SyntheticLockupsByLockupIDRequest: {
            encode(message: _150.SyntheticLockupsByLockupIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.SyntheticLockupsByLockupIDRequest;
            fromJSON(object: any): _150.SyntheticLockupsByLockupIDRequest;
            toJSON(message: _150.SyntheticLockupsByLockupIDRequest): unknown;
            fromPartial(object: Partial<_150.SyntheticLockupsByLockupIDRequest>): _150.SyntheticLockupsByLockupIDRequest;
            fromAmino(object: _150.SyntheticLockupsByLockupIDRequestAmino): _150.SyntheticLockupsByLockupIDRequest;
            toAmino(message: _150.SyntheticLockupsByLockupIDRequest): _150.SyntheticLockupsByLockupIDRequestAmino;
        };
        SyntheticLockupsByLockupIDResponse: {
            encode(message: _150.SyntheticLockupsByLockupIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.SyntheticLockupsByLockupIDResponse;
            fromJSON(object: any): _150.SyntheticLockupsByLockupIDResponse;
            toJSON(message: _150.SyntheticLockupsByLockupIDResponse): unknown;
            fromPartial(object: Partial<_150.SyntheticLockupsByLockupIDResponse>): _150.SyntheticLockupsByLockupIDResponse;
            fromAmino(object: _150.SyntheticLockupsByLockupIDResponseAmino): _150.SyntheticLockupsByLockupIDResponse;
            toAmino(message: _150.SyntheticLockupsByLockupIDResponse): _150.SyntheticLockupsByLockupIDResponseAmino;
        };
        AccountLockedLongerDurationRequest: {
            encode(message: _150.AccountLockedLongerDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedLongerDurationRequest;
            fromJSON(object: any): _150.AccountLockedLongerDurationRequest;
            toJSON(message: _150.AccountLockedLongerDurationRequest): unknown;
            fromPartial(object: Partial<_150.AccountLockedLongerDurationRequest>): _150.AccountLockedLongerDurationRequest;
            fromAmino(object: _150.AccountLockedLongerDurationRequestAmino): _150.AccountLockedLongerDurationRequest;
            toAmino(message: _150.AccountLockedLongerDurationRequest): _150.AccountLockedLongerDurationRequestAmino;
        };
        AccountLockedLongerDurationResponse: {
            encode(message: _150.AccountLockedLongerDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedLongerDurationResponse;
            fromJSON(object: any): _150.AccountLockedLongerDurationResponse;
            toJSON(message: _150.AccountLockedLongerDurationResponse): unknown;
            fromPartial(object: Partial<_150.AccountLockedLongerDurationResponse>): _150.AccountLockedLongerDurationResponse;
            fromAmino(object: _150.AccountLockedLongerDurationResponseAmino): _150.AccountLockedLongerDurationResponse;
            toAmino(message: _150.AccountLockedLongerDurationResponse): _150.AccountLockedLongerDurationResponseAmino;
        };
        AccountLockedDurationRequest: {
            encode(message: _150.AccountLockedDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedDurationRequest;
            fromJSON(object: any): _150.AccountLockedDurationRequest;
            toJSON(message: _150.AccountLockedDurationRequest): unknown;
            fromPartial(object: Partial<_150.AccountLockedDurationRequest>): _150.AccountLockedDurationRequest;
            fromAmino(object: _150.AccountLockedDurationRequestAmino): _150.AccountLockedDurationRequest;
            toAmino(message: _150.AccountLockedDurationRequest): _150.AccountLockedDurationRequestAmino;
        };
        AccountLockedDurationResponse: {
            encode(message: _150.AccountLockedDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedDurationResponse;
            fromJSON(object: any): _150.AccountLockedDurationResponse;
            toJSON(message: _150.AccountLockedDurationResponse): unknown;
            fromPartial(object: Partial<_150.AccountLockedDurationResponse>): _150.AccountLockedDurationResponse;
            fromAmino(object: _150.AccountLockedDurationResponseAmino): _150.AccountLockedDurationResponse;
            toAmino(message: _150.AccountLockedDurationResponse): _150.AccountLockedDurationResponseAmino;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            encode(message: _150.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromJSON(object: any): _150.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toJSON(message: _150.AccountLockedLongerDurationNotUnlockingOnlyRequest): unknown;
            fromPartial(object: Partial<_150.AccountLockedLongerDurationNotUnlockingOnlyRequest>): _150.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromAmino(object: _150.AccountLockedLongerDurationNotUnlockingOnlyRequestAmino): _150.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toAmino(message: _150.AccountLockedLongerDurationNotUnlockingOnlyRequest): _150.AccountLockedLongerDurationNotUnlockingOnlyRequestAmino;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            encode(message: _150.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromJSON(object: any): _150.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toJSON(message: _150.AccountLockedLongerDurationNotUnlockingOnlyResponse): unknown;
            fromPartial(object: Partial<_150.AccountLockedLongerDurationNotUnlockingOnlyResponse>): _150.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromAmino(object: _150.AccountLockedLongerDurationNotUnlockingOnlyResponseAmino): _150.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toAmino(message: _150.AccountLockedLongerDurationNotUnlockingOnlyResponse): _150.AccountLockedLongerDurationNotUnlockingOnlyResponseAmino;
        };
        AccountLockedLongerDurationDenomRequest: {
            encode(message: _150.AccountLockedLongerDurationDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedLongerDurationDenomRequest;
            fromJSON(object: any): _150.AccountLockedLongerDurationDenomRequest;
            toJSON(message: _150.AccountLockedLongerDurationDenomRequest): unknown;
            fromPartial(object: Partial<_150.AccountLockedLongerDurationDenomRequest>): _150.AccountLockedLongerDurationDenomRequest;
            fromAmino(object: _150.AccountLockedLongerDurationDenomRequestAmino): _150.AccountLockedLongerDurationDenomRequest;
            toAmino(message: _150.AccountLockedLongerDurationDenomRequest): _150.AccountLockedLongerDurationDenomRequestAmino;
        };
        AccountLockedLongerDurationDenomResponse: {
            encode(message: _150.AccountLockedLongerDurationDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.AccountLockedLongerDurationDenomResponse;
            fromJSON(object: any): _150.AccountLockedLongerDurationDenomResponse;
            toJSON(message: _150.AccountLockedLongerDurationDenomResponse): unknown;
            fromPartial(object: Partial<_150.AccountLockedLongerDurationDenomResponse>): _150.AccountLockedLongerDurationDenomResponse;
            fromAmino(object: _150.AccountLockedLongerDurationDenomResponseAmino): _150.AccountLockedLongerDurationDenomResponse;
            toAmino(message: _150.AccountLockedLongerDurationDenomResponse): _150.AccountLockedLongerDurationDenomResponseAmino;
        };
        QueryParamsRequest: {
            encode(_: _150.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryParamsRequest;
            fromJSON(_: any): _150.QueryParamsRequest;
            toJSON(_: _150.QueryParamsRequest): unknown;
            fromPartial(_: Partial<_150.QueryParamsRequest>): _150.QueryParamsRequest;
            fromAmino(_: _150.QueryParamsRequestAmino): _150.QueryParamsRequest;
            toAmino(_: _150.QueryParamsRequest): _150.QueryParamsRequestAmino;
        };
        QueryParamsResponse: {
            encode(message: _150.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryParamsResponse;
            fromJSON(object: any): _150.QueryParamsResponse;
            toJSON(message: _150.QueryParamsResponse): unknown;
            fromPartial(object: Partial<_150.QueryParamsResponse>): _150.QueryParamsResponse;
            fromAmino(object: _150.QueryParamsResponseAmino): _150.QueryParamsResponse;
            toAmino(message: _150.QueryParamsResponse): _150.QueryParamsResponseAmino;
        };
        Params: {
            encode(message: _149.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Params;
            fromJSON(object: any): _149.Params;
            toJSON(message: _149.Params): unknown;
            fromPartial(object: Partial<_149.Params>): _149.Params;
            fromAmino(object: _149.ParamsAmino): _149.Params;
            toAmino(message: _149.Params): _149.ParamsAmino;
        };
        lockQueryTypeFromJSON(object: any): _148.LockQueryType;
        lockQueryTypeToJSON(object: _148.LockQueryType): string;
        LockQueryType: typeof _148.LockQueryType;
        LockQueryTypeSDKType: typeof _148.LockQueryType;
        LockQueryTypeAmino: typeof _148.LockQueryType;
        PeriodLock: {
            encode(message: _148.PeriodLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.PeriodLock;
            fromJSON(object: any): _148.PeriodLock;
            toJSON(message: _148.PeriodLock): unknown;
            fromPartial(object: Partial<_148.PeriodLock>): _148.PeriodLock;
            fromAmino(object: _148.PeriodLockAmino): _148.PeriodLock;
            toAmino(message: _148.PeriodLock): _148.PeriodLockAmino;
        };
        QueryCondition: {
            encode(message: _148.QueryCondition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryCondition;
            fromJSON(object: any): _148.QueryCondition;
            toJSON(message: _148.QueryCondition): unknown;
            fromPartial(object: Partial<_148.QueryCondition>): _148.QueryCondition;
            fromAmino(object: _148.QueryConditionAmino): _148.QueryCondition;
            toAmino(message: _148.QueryCondition): _148.QueryConditionAmino;
        };
        SyntheticLock: {
            encode(message: _148.SyntheticLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.SyntheticLock;
            fromJSON(object: any): _148.SyntheticLock;
            toJSON(message: _148.SyntheticLock): unknown;
            fromPartial(object: Partial<_148.SyntheticLock>): _148.SyntheticLock;
            fromAmino(object: _148.SyntheticLockAmino): _148.SyntheticLock;
            toAmino(message: _148.SyntheticLock): _148.SyntheticLockAmino;
        };
        GenesisState: {
            encode(message: _147.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.GenesisState;
            fromJSON(object: any): _147.GenesisState;
            toJSON(message: _147.GenesisState): unknown;
            fromPartial(object: Partial<_147.GenesisState>): _147.GenesisState;
            fromAmino(object: _147.GenesisStateAmino): _147.GenesisState;
            toAmino(message: _147.GenesisState): _147.GenesisStateAmino;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _306.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _154.QueryParamsRequest): Promise<_154.QueryParamsResponse>;
                epochProvisions(request?: _154.QueryEpochProvisionsRequest): Promise<_154.QueryEpochProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _154.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryParamsRequest;
                fromJSON(_: any): _154.QueryParamsRequest;
                toJSON(_: _154.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_154.QueryParamsRequest>): _154.QueryParamsRequest;
                fromAmino(_: _154.QueryParamsRequestAmino): _154.QueryParamsRequest;
                toAmino(_: _154.QueryParamsRequest): _154.QueryParamsRequestAmino;
            };
            QueryParamsResponse: {
                encode(message: _154.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryParamsResponse;
                fromJSON(object: any): _154.QueryParamsResponse;
                toJSON(message: _154.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_154.QueryParamsResponse>): _154.QueryParamsResponse;
                fromAmino(object: _154.QueryParamsResponseAmino): _154.QueryParamsResponse;
                toAmino(message: _154.QueryParamsResponse): _154.QueryParamsResponseAmino;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _154.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryEpochProvisionsRequest;
                fromJSON(_: any): _154.QueryEpochProvisionsRequest;
                toJSON(_: _154.QueryEpochProvisionsRequest): unknown;
                fromPartial(_: Partial<_154.QueryEpochProvisionsRequest>): _154.QueryEpochProvisionsRequest;
                fromAmino(_: _154.QueryEpochProvisionsRequestAmino): _154.QueryEpochProvisionsRequest;
                toAmino(_: _154.QueryEpochProvisionsRequest): _154.QueryEpochProvisionsRequestAmino;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _154.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryEpochProvisionsResponse;
                fromJSON(object: any): _154.QueryEpochProvisionsResponse;
                toJSON(message: _154.QueryEpochProvisionsResponse): unknown;
                fromPartial(object: Partial<_154.QueryEpochProvisionsResponse>): _154.QueryEpochProvisionsResponse;
                fromAmino(object: _154.QueryEpochProvisionsResponseAmino): _154.QueryEpochProvisionsResponse;
                toAmino(message: _154.QueryEpochProvisionsResponse): _154.QueryEpochProvisionsResponseAmino;
            };
            Minter: {
                encode(message: _153.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Minter;
                fromJSON(object: any): _153.Minter;
                toJSON(message: _153.Minter): unknown;
                fromPartial(object: Partial<_153.Minter>): _153.Minter;
                fromAmino(object: _153.MinterAmino): _153.Minter;
                toAmino(message: _153.Minter): _153.MinterAmino;
            };
            WeightedAddress: {
                encode(message: _153.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.WeightedAddress;
                fromJSON(object: any): _153.WeightedAddress;
                toJSON(message: _153.WeightedAddress): unknown;
                fromPartial(object: Partial<_153.WeightedAddress>): _153.WeightedAddress;
                fromAmino(object: _153.WeightedAddressAmino): _153.WeightedAddress;
                toAmino(message: _153.WeightedAddress): _153.WeightedAddressAmino;
            };
            DistributionProportions: {
                encode(message: _153.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.DistributionProportions;
                fromJSON(object: any): _153.DistributionProportions;
                toJSON(message: _153.DistributionProportions): unknown;
                fromPartial(object: Partial<_153.DistributionProportions>): _153.DistributionProportions;
                fromAmino(object: _153.DistributionProportionsAmino): _153.DistributionProportions;
                toAmino(message: _153.DistributionProportions): _153.DistributionProportionsAmino;
            };
            Params: {
                encode(message: _153.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Params;
                fromJSON(object: any): _153.Params;
                toJSON(message: _153.Params): unknown;
                fromPartial(object: Partial<_153.Params>): _153.Params;
                fromAmino(object: _153.ParamsAmino): _153.Params;
                toAmino(message: _153.Params): _153.ParamsAmino;
            };
            GenesisState: {
                encode(message: _152.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.GenesisState;
                fromJSON(object: any): _152.GenesisState;
                toJSON(message: _152.GenesisState): unknown;
                fromPartial(object: Partial<_152.GenesisState>): _152.GenesisState;
                fromAmino(object: _152.GenesisStateAmino): _152.GenesisState;
                toAmino(message: _152.GenesisState): _152.GenesisStateAmino;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryClientImpl: typeof _307.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                gaugeIds(request: _158.QueryGaugeIdsRequest): Promise<_158.QueryGaugeIdsResponse>;
                distrInfo(request?: _158.QueryDistrInfoRequest): Promise<_158.QueryDistrInfoResponse>;
                params(request?: _158.QueryParamsRequest): Promise<_158.QueryParamsResponse>;
                lockableDurations(request?: _158.QueryLockableDurationsRequest): Promise<_158.QueryLockableDurationsResponse>;
                incentivizedPools(request?: _158.QueryIncentivizedPoolsRequest): Promise<_158.QueryIncentivizedPoolsResponse>;
                externalIncentiveGauges(request?: _158.QueryExternalIncentiveGaugesRequest): Promise<_158.QueryExternalIncentiveGaugesResponse>;
            };
            QueryGaugeIdsRequest: {
                encode(message: _158.QueryGaugeIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryGaugeIdsRequest;
                fromJSON(object: any): _158.QueryGaugeIdsRequest;
                toJSON(message: _158.QueryGaugeIdsRequest): unknown;
                fromPartial(object: Partial<_158.QueryGaugeIdsRequest>): _158.QueryGaugeIdsRequest;
                fromAmino(object: _158.QueryGaugeIdsRequestAmino): _158.QueryGaugeIdsRequest;
                toAmino(message: _158.QueryGaugeIdsRequest): _158.QueryGaugeIdsRequestAmino;
            };
            QueryGaugeIdsResponse: {
                encode(message: _158.QueryGaugeIdsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryGaugeIdsResponse;
                fromJSON(object: any): _158.QueryGaugeIdsResponse;
                toJSON(message: _158.QueryGaugeIdsResponse): unknown;
                fromPartial(object: Partial<_158.QueryGaugeIdsResponse>): _158.QueryGaugeIdsResponse;
                fromAmino(object: _158.QueryGaugeIdsResponseAmino): _158.QueryGaugeIdsResponse;
                toAmino(message: _158.QueryGaugeIdsResponse): _158.QueryGaugeIdsResponseAmino;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                encode(message: _158.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromJSON(object: any): _158.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toJSON(message: _158.QueryGaugeIdsResponse_GaugeIdWithDuration): unknown;
                fromPartial(object: Partial<_158.QueryGaugeIdsResponse_GaugeIdWithDuration>): _158.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromAmino(object: _158.QueryGaugeIdsResponse_GaugeIdWithDurationAmino): _158.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toAmino(message: _158.QueryGaugeIdsResponse_GaugeIdWithDuration): _158.QueryGaugeIdsResponse_GaugeIdWithDurationAmino;
            };
            QueryDistrInfoRequest: {
                encode(_: _158.QueryDistrInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryDistrInfoRequest;
                fromJSON(_: any): _158.QueryDistrInfoRequest;
                toJSON(_: _158.QueryDistrInfoRequest): unknown;
                fromPartial(_: Partial<_158.QueryDistrInfoRequest>): _158.QueryDistrInfoRequest;
                fromAmino(_: _158.QueryDistrInfoRequestAmino): _158.QueryDistrInfoRequest;
                toAmino(_: _158.QueryDistrInfoRequest): _158.QueryDistrInfoRequestAmino;
            };
            QueryDistrInfoResponse: {
                encode(message: _158.QueryDistrInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryDistrInfoResponse;
                fromJSON(object: any): _158.QueryDistrInfoResponse;
                toJSON(message: _158.QueryDistrInfoResponse): unknown;
                fromPartial(object: Partial<_158.QueryDistrInfoResponse>): _158.QueryDistrInfoResponse;
                fromAmino(object: _158.QueryDistrInfoResponseAmino): _158.QueryDistrInfoResponse;
                toAmino(message: _158.QueryDistrInfoResponse): _158.QueryDistrInfoResponseAmino;
            };
            QueryParamsRequest: {
                encode(_: _158.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryParamsRequest;
                fromJSON(_: any): _158.QueryParamsRequest;
                toJSON(_: _158.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_158.QueryParamsRequest>): _158.QueryParamsRequest;
                fromAmino(_: _158.QueryParamsRequestAmino): _158.QueryParamsRequest;
                toAmino(_: _158.QueryParamsRequest): _158.QueryParamsRequestAmino;
            };
            QueryParamsResponse: {
                encode(message: _158.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryParamsResponse;
                fromJSON(object: any): _158.QueryParamsResponse;
                toJSON(message: _158.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_158.QueryParamsResponse>): _158.QueryParamsResponse;
                fromAmino(object: _158.QueryParamsResponseAmino): _158.QueryParamsResponse;
                toAmino(message: _158.QueryParamsResponse): _158.QueryParamsResponseAmino;
            };
            QueryLockableDurationsRequest: {
                encode(_: _158.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryLockableDurationsRequest;
                fromJSON(_: any): _158.QueryLockableDurationsRequest;
                toJSON(_: _158.QueryLockableDurationsRequest): unknown;
                fromPartial(_: Partial<_158.QueryLockableDurationsRequest>): _158.QueryLockableDurationsRequest;
                fromAmino(_: _158.QueryLockableDurationsRequestAmino): _158.QueryLockableDurationsRequest;
                toAmino(_: _158.QueryLockableDurationsRequest): _158.QueryLockableDurationsRequestAmino;
            };
            QueryLockableDurationsResponse: {
                encode(message: _158.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryLockableDurationsResponse;
                fromJSON(object: any): _158.QueryLockableDurationsResponse;
                toJSON(message: _158.QueryLockableDurationsResponse): unknown;
                fromPartial(object: Partial<_158.QueryLockableDurationsResponse>): _158.QueryLockableDurationsResponse;
                fromAmino(object: _158.QueryLockableDurationsResponseAmino): _158.QueryLockableDurationsResponse;
                toAmino(message: _158.QueryLockableDurationsResponse): _158.QueryLockableDurationsResponseAmino;
            };
            QueryIncentivizedPoolsRequest: {
                encode(_: _158.QueryIncentivizedPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryIncentivizedPoolsRequest;
                fromJSON(_: any): _158.QueryIncentivizedPoolsRequest;
                toJSON(_: _158.QueryIncentivizedPoolsRequest): unknown;
                fromPartial(_: Partial<_158.QueryIncentivizedPoolsRequest>): _158.QueryIncentivizedPoolsRequest;
                fromAmino(_: _158.QueryIncentivizedPoolsRequestAmino): _158.QueryIncentivizedPoolsRequest;
                toAmino(_: _158.QueryIncentivizedPoolsRequest): _158.QueryIncentivizedPoolsRequestAmino;
            };
            IncentivizedPool: {
                encode(message: _158.IncentivizedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.IncentivizedPool;
                fromJSON(object: any): _158.IncentivizedPool;
                toJSON(message: _158.IncentivizedPool): unknown;
                fromPartial(object: Partial<_158.IncentivizedPool>): _158.IncentivizedPool;
                fromAmino(object: _158.IncentivizedPoolAmino): _158.IncentivizedPool;
                toAmino(message: _158.IncentivizedPool): _158.IncentivizedPoolAmino;
            };
            QueryIncentivizedPoolsResponse: {
                encode(message: _158.QueryIncentivizedPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryIncentivizedPoolsResponse;
                fromJSON(object: any): _158.QueryIncentivizedPoolsResponse;
                toJSON(message: _158.QueryIncentivizedPoolsResponse): unknown;
                fromPartial(object: Partial<_158.QueryIncentivizedPoolsResponse>): _158.QueryIncentivizedPoolsResponse;
                fromAmino(object: _158.QueryIncentivizedPoolsResponseAmino): _158.QueryIncentivizedPoolsResponse;
                toAmino(message: _158.QueryIncentivizedPoolsResponse): _158.QueryIncentivizedPoolsResponseAmino;
            };
            QueryExternalIncentiveGaugesRequest: {
                encode(_: _158.QueryExternalIncentiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryExternalIncentiveGaugesRequest;
                fromJSON(_: any): _158.QueryExternalIncentiveGaugesRequest;
                toJSON(_: _158.QueryExternalIncentiveGaugesRequest): unknown;
                fromPartial(_: Partial<_158.QueryExternalIncentiveGaugesRequest>): _158.QueryExternalIncentiveGaugesRequest;
                fromAmino(_: _158.QueryExternalIncentiveGaugesRequestAmino): _158.QueryExternalIncentiveGaugesRequest;
                toAmino(_: _158.QueryExternalIncentiveGaugesRequest): _158.QueryExternalIncentiveGaugesRequestAmino;
            };
            QueryExternalIncentiveGaugesResponse: {
                encode(message: _158.QueryExternalIncentiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryExternalIncentiveGaugesResponse;
                fromJSON(object: any): _158.QueryExternalIncentiveGaugesResponse;
                toJSON(message: _158.QueryExternalIncentiveGaugesResponse): unknown;
                fromPartial(object: Partial<_158.QueryExternalIncentiveGaugesResponse>): _158.QueryExternalIncentiveGaugesResponse;
                fromAmino(object: _158.QueryExternalIncentiveGaugesResponseAmino): _158.QueryExternalIncentiveGaugesResponse;
                toAmino(message: _158.QueryExternalIncentiveGaugesResponse): _158.QueryExternalIncentiveGaugesResponseAmino;
            };
            Params: {
                encode(message: _157.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Params;
                fromJSON(object: any): _157.Params;
                toJSON(message: _157.Params): unknown;
                fromPartial(object: Partial<_157.Params>): _157.Params;
                fromAmino(object: _157.ParamsAmino): _157.Params;
                toAmino(message: _157.Params): _157.ParamsAmino;
            };
            LockableDurationsInfo: {
                encode(message: _157.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.LockableDurationsInfo;
                fromJSON(object: any): _157.LockableDurationsInfo;
                toJSON(message: _157.LockableDurationsInfo): unknown;
                fromPartial(object: Partial<_157.LockableDurationsInfo>): _157.LockableDurationsInfo;
                fromAmino(object: _157.LockableDurationsInfoAmino): _157.LockableDurationsInfo;
                toAmino(message: _157.LockableDurationsInfo): _157.LockableDurationsInfoAmino;
            };
            DistrInfo: {
                encode(message: _157.DistrInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.DistrInfo;
                fromJSON(object: any): _157.DistrInfo;
                toJSON(message: _157.DistrInfo): unknown;
                fromPartial(object: Partial<_157.DistrInfo>): _157.DistrInfo;
                fromAmino(object: _157.DistrInfoAmino): _157.DistrInfo;
                toAmino(message: _157.DistrInfo): _157.DistrInfoAmino;
            };
            DistrRecord: {
                encode(message: _157.DistrRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.DistrRecord;
                fromJSON(object: any): _157.DistrRecord;
                toJSON(message: _157.DistrRecord): unknown;
                fromPartial(object: Partial<_157.DistrRecord>): _157.DistrRecord;
                fromAmino(object: _157.DistrRecordAmino): _157.DistrRecord;
                toAmino(message: _157.DistrRecord): _157.DistrRecordAmino;
            };
            PoolToGauge: {
                encode(message: _157.PoolToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.PoolToGauge;
                fromJSON(object: any): _157.PoolToGauge;
                toJSON(message: _157.PoolToGauge): unknown;
                fromPartial(object: Partial<_157.PoolToGauge>): _157.PoolToGauge;
                fromAmino(object: _157.PoolToGaugeAmino): _157.PoolToGauge;
                toAmino(message: _157.PoolToGauge): _157.PoolToGaugeAmino;
            };
            PoolToGauges: {
                encode(message: _157.PoolToGauges, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.PoolToGauges;
                fromJSON(object: any): _157.PoolToGauges;
                toJSON(message: _157.PoolToGauges): unknown;
                fromPartial(object: Partial<_157.PoolToGauges>): _157.PoolToGauges;
                fromAmino(object: _157.PoolToGaugesAmino): _157.PoolToGauges;
                toAmino(message: _157.PoolToGauges): _157.PoolToGaugesAmino;
            };
            ReplacePoolIncentivesProposal: {
                encode(message: _156.ReplacePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ReplacePoolIncentivesProposal;
                fromJSON(object: any): _156.ReplacePoolIncentivesProposal;
                toJSON(message: _156.ReplacePoolIncentivesProposal): unknown;
                fromPartial(object: Partial<_156.ReplacePoolIncentivesProposal>): _156.ReplacePoolIncentivesProposal;
                fromAmino(object: _156.ReplacePoolIncentivesProposalAmino): _156.ReplacePoolIncentivesProposal;
                toAmino(message: _156.ReplacePoolIncentivesProposal): _156.ReplacePoolIncentivesProposalAmino;
            };
            UpdatePoolIncentivesProposal: {
                encode(message: _156.UpdatePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.UpdatePoolIncentivesProposal;
                fromJSON(object: any): _156.UpdatePoolIncentivesProposal;
                toJSON(message: _156.UpdatePoolIncentivesProposal): unknown;
                fromPartial(object: Partial<_156.UpdatePoolIncentivesProposal>): _156.UpdatePoolIncentivesProposal;
                fromAmino(object: _156.UpdatePoolIncentivesProposalAmino): _156.UpdatePoolIncentivesProposal;
                toAmino(message: _156.UpdatePoolIncentivesProposal): _156.UpdatePoolIncentivesProposalAmino;
            };
            GenesisState: {
                encode(message: _155.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.GenesisState;
                fromJSON(object: any): _155.GenesisState;
                toJSON(message: _155.GenesisState): unknown;
                fromPartial(object: Partial<_155.GenesisState>): _155.GenesisState;
                fromAmino(object: _155.GenesisStateAmino): _155.GenesisState;
                toAmino(message: _155.GenesisState): _155.GenesisStateAmino;
            };
        };
    }
    namespace protorev {
        const v1beta1: {
            MsgClientImpl: typeof _320.MsgClientImpl;
            QueryClientImpl: typeof _308.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _163.QueryParamsRequest): Promise<_163.QueryParamsResponse>;
                getProtoRevNumberOfTrades(request?: _163.QueryGetProtoRevNumberOfTradesRequest): Promise<_163.QueryGetProtoRevNumberOfTradesResponse>;
                getProtoRevProfitsByDenom(request: _163.QueryGetProtoRevProfitsByDenomRequest): Promise<_163.QueryGetProtoRevProfitsByDenomResponse>;
                getProtoRevAllProfits(request?: _163.QueryGetProtoRevAllProfitsRequest): Promise<_163.QueryGetProtoRevAllProfitsResponse>;
                getProtoRevStatisticsByPool(request: _163.QueryGetProtoRevStatisticsByPoolRequest): Promise<_163.QueryGetProtoRevStatisticsByPoolResponse>;
                getProtoRevAllStatistics(request?: _163.QueryGetProtoRevAllStatisticsRequest): Promise<_163.QueryGetProtoRevAllStatisticsResponse>;
                getProtoRevTokenPairArbRoutes(request?: _163.QueryGetProtoRevTokenPairArbRoutesRequest): Promise<_163.QueryGetProtoRevTokenPairArbRoutesResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setHotRoutes(value: _164.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDeveloperAccount(value: _164.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setHotRoutes(value: _164.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _164.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _164.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _164.MsgSetDeveloperAccount;
                    };
                };
                toJSON: {
                    setHotRoutes(value: _164.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setDeveloperAccount(value: _164.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setHotRoutes(value: any): {
                        typeUrl: string;
                        value: _164.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: any): {
                        typeUrl: string;
                        value: _164.MsgSetDeveloperAccount;
                    };
                };
                fromPartial: {
                    setHotRoutes(value: _164.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _164.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _164.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _164.MsgSetDeveloperAccount;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.protorev.v1beta1.MsgSetHotRoutes": {
                    aminoType: string;
                    toAmino: (message: _164.MsgSetHotRoutes) => _164.MsgSetHotRoutesAmino;
                    fromAmino: (object: _164.MsgSetHotRoutesAmino) => _164.MsgSetHotRoutes;
                };
                "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount": {
                    aminoType: string;
                    toAmino: (message: _164.MsgSetDeveloperAccount) => _164.MsgSetDeveloperAccountAmino;
                    fromAmino: (object: _164.MsgSetDeveloperAccountAmino) => _164.MsgSetDeveloperAccount;
                };
            };
            MsgSetHotRoutes: {
                encode(message: _164.MsgSetHotRoutes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgSetHotRoutes;
                fromJSON(object: any): _164.MsgSetHotRoutes;
                toJSON(message: _164.MsgSetHotRoutes): unknown;
                fromPartial(object: Partial<_164.MsgSetHotRoutes>): _164.MsgSetHotRoutes;
                fromAmino(object: _164.MsgSetHotRoutesAmino): _164.MsgSetHotRoutes;
                toAmino(message: _164.MsgSetHotRoutes): _164.MsgSetHotRoutesAmino;
            };
            MsgSetHotRoutesResponse: {
                encode(_: _164.MsgSetHotRoutesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgSetHotRoutesResponse;
                fromJSON(_: any): _164.MsgSetHotRoutesResponse;
                toJSON(_: _164.MsgSetHotRoutesResponse): unknown;
                fromPartial(_: Partial<_164.MsgSetHotRoutesResponse>): _164.MsgSetHotRoutesResponse;
                fromAmino(_: _164.MsgSetHotRoutesResponseAmino): _164.MsgSetHotRoutesResponse;
                toAmino(_: _164.MsgSetHotRoutesResponse): _164.MsgSetHotRoutesResponseAmino;
            };
            MsgSetDeveloperAccount: {
                encode(message: _164.MsgSetDeveloperAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgSetDeveloperAccount;
                fromJSON(object: any): _164.MsgSetDeveloperAccount;
                toJSON(message: _164.MsgSetDeveloperAccount): unknown;
                fromPartial(object: Partial<_164.MsgSetDeveloperAccount>): _164.MsgSetDeveloperAccount;
                fromAmino(object: _164.MsgSetDeveloperAccountAmino): _164.MsgSetDeveloperAccount;
                toAmino(message: _164.MsgSetDeveloperAccount): _164.MsgSetDeveloperAccountAmino;
            };
            MsgSetDeveloperAccountResponse: {
                encode(_: _164.MsgSetDeveloperAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgSetDeveloperAccountResponse;
                fromJSON(_: any): _164.MsgSetDeveloperAccountResponse;
                toJSON(_: _164.MsgSetDeveloperAccountResponse): unknown;
                fromPartial(_: Partial<_164.MsgSetDeveloperAccountResponse>): _164.MsgSetDeveloperAccountResponse;
                fromAmino(_: _164.MsgSetDeveloperAccountResponseAmino): _164.MsgSetDeveloperAccountResponse;
                toAmino(_: _164.MsgSetDeveloperAccountResponse): _164.MsgSetDeveloperAccountResponseAmino;
            };
            QueryParamsRequest: {
                encode(_: _163.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryParamsRequest;
                fromJSON(_: any): _163.QueryParamsRequest;
                toJSON(_: _163.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_163.QueryParamsRequest>): _163.QueryParamsRequest;
                fromAmino(_: _163.QueryParamsRequestAmino): _163.QueryParamsRequest;
                toAmino(_: _163.QueryParamsRequest): _163.QueryParamsRequestAmino;
            };
            QueryParamsResponse: {
                encode(message: _163.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryParamsResponse;
                fromJSON(object: any): _163.QueryParamsResponse;
                toJSON(message: _163.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_163.QueryParamsResponse>): _163.QueryParamsResponse;
                fromAmino(object: _163.QueryParamsResponseAmino): _163.QueryParamsResponse;
                toAmino(message: _163.QueryParamsResponse): _163.QueryParamsResponseAmino;
            };
            QueryGetProtoRevNumberOfTradesRequest: {
                encode(_: _163.QueryGetProtoRevNumberOfTradesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryGetProtoRevNumberOfTradesRequest;
                fromJSON(_: any): _163.QueryGetProtoRevNumberOfTradesRequest;
                toJSON(_: _163.QueryGetProtoRevNumberOfTradesRequest): unknown;
                fromPartial(_: Partial<_163.QueryGetProtoRevNumberOfTradesRequest>): _163.QueryGetProtoRevNumberOfTradesRequest;
                fromAmino(_: _163.QueryGetProtoRevNumberOfTradesRequestAmino): _163.QueryGetProtoRevNumberOfTradesRequest;
                toAmino(_: _163.QueryGetProtoRevNumberOfTradesRequest): _163.QueryGetProtoRevNumberOfTradesRequestAmino;
            };
            QueryGetProtoRevNumberOfTradesResponse: {
                encode(message: _163.QueryGetProtoRevNumberOfTradesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryGetProtoRevNumberOfTradesResponse;
                fromJSON(object: any): _163.QueryGetProtoRevNumberOfTradesResponse;
                toJSON(message: _163.QueryGetProtoRevNumberOfTradesResponse): unknown;
                fromPartial(object: Partial<_163.QueryGetProtoRevNumberOfTradesResponse>): _163.QueryGetProtoRevNumberOfTradesResponse;
                fromAmino(object: _163.QueryGetProtoRevNumberOfTradesResponseAmino): _163.QueryGetProtoRevNumberOfTradesResponse;
                toAmino(message: _163.QueryGetProtoRevNumberOfTradesResponse): _163.QueryGetProtoRevNumberOfTradesResponseAmino;
            };
            QueryGetProtoRevProfitsByDenomRequest: {
                encode(message: _163.QueryGetProtoRevProfitsByDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryGetProtoRevProfitsByDenomRequest;
                fromJSON(object: any): _163.QueryGetProtoRevProfitsByDenomRequest;
                toJSON(message: _163.QueryGetProtoRevProfitsByDenomRequest): unknown;
                fromPartial(object: Partial<_163.QueryGetProtoRevProfitsByDenomRequest>): _163.QueryGetProtoRevProfitsByDenomRequest;
                fromAmino(object: _163.QueryGetProtoRevProfitsByDenomRequestAmino): _163.QueryGetProtoRevProfitsByDenomRequest;
                toAmino(message: _163.QueryGetProtoRevProfitsByDenomRequest): _163.QueryGetProtoRevProfitsByDenomRequestAmino;
            };
            QueryGetProtoRevProfitsByDenomResponse: {
                encode(message: _163.QueryGetProtoRevProfitsByDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryGetProtoRevProfitsByDenomResponse;
                fromJSON(object: any): _163.QueryGetProtoRevProfitsByDenomResponse;
                toJSON(message: _163.QueryGetProtoRevProfitsByDenomResponse): unknown;
                fromPartial(object: Partial<_163.QueryGetProtoRevProfitsByDenomResponse>): _163.QueryGetProtoRevProfitsByDenomResponse;
                fromAmino(object: _163.QueryGetProtoRevProfitsByDenomResponseAmino): _163.QueryGetProtoRevProfitsByDenomResponse;
                toAmino(message: _163.QueryGetProtoRevProfitsByDenomResponse): _163.QueryGetProtoRevProfitsByDenomResponseAmino;
            };
            QueryGetProtoRevAllProfitsRequest: {
                encode(_: _163.QueryGetProtoRevAllProfitsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryGetProtoRevAllProfitsRequest;
                fromJSON(_: any): _163.QueryGetProtoRevAllProfitsRequest;
                toJSON(_: _163.QueryGetProtoRevAllProfitsRequest): unknown;
                fromPartial(_: Partial<_163.QueryGetProtoRevAllProfitsRequest>): _163.QueryGetProtoRevAllProfitsRequest;
                fromAmino(_: _163.QueryGetProtoRevAllProfitsRequestAmino): _163.QueryGetProtoRevAllProfitsRequest;
                toAmino(_: _163.QueryGetProtoRevAllProfitsRequest): _163.QueryGetProtoRevAllProfitsRequestAmino;
            };
            QueryGetProtoRevAllProfitsResponse: {
                encode(message: _163.QueryGetProtoRevAllProfitsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryGetProtoRevAllProfitsResponse;
                fromJSON(object: any): _163.QueryGetProtoRevAllProfitsResponse;
                toJSON(message: _163.QueryGetProtoRevAllProfitsResponse): unknown;
                fromPartial(object: Partial<_163.QueryGetProtoRevAllProfitsResponse>): _163.QueryGetProtoRevAllProfitsResponse;
                fromAmino(object: _163.QueryGetProtoRevAllProfitsResponseAmino): _163.QueryGetProtoRevAllProfitsResponse;
                toAmino(message: _163.QueryGetProtoRevAllProfitsResponse): _163.QueryGetProtoRevAllProfitsResponseAmino;
            };
            QueryGetProtoRevStatisticsByPoolRequest: {
                encode(message: _163.QueryGetProtoRevStatisticsByPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryGetProtoRevStatisticsByPoolRequest;
                fromJSON(object: any): _163.QueryGetProtoRevStatisticsByPoolRequest;
                toJSON(message: _163.QueryGetProtoRevStatisticsByPoolRequest): unknown;
                fromPartial(object: Partial<_163.QueryGetProtoRevStatisticsByPoolRequest>): _163.QueryGetProtoRevStatisticsByPoolRequest;
                fromAmino(object: _163.QueryGetProtoRevStatisticsByPoolRequestAmino): _163.QueryGetProtoRevStatisticsByPoolRequest;
                toAmino(message: _163.QueryGetProtoRevStatisticsByPoolRequest): _163.QueryGetProtoRevStatisticsByPoolRequestAmino;
            };
            QueryGetProtoRevStatisticsByPoolResponse: {
                encode(message: _163.QueryGetProtoRevStatisticsByPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryGetProtoRevStatisticsByPoolResponse;
                fromJSON(object: any): _163.QueryGetProtoRevStatisticsByPoolResponse;
                toJSON(message: _163.QueryGetProtoRevStatisticsByPoolResponse): unknown;
                fromPartial(object: Partial<_163.QueryGetProtoRevStatisticsByPoolResponse>): _163.QueryGetProtoRevStatisticsByPoolResponse;
                fromAmino(object: _163.QueryGetProtoRevStatisticsByPoolResponseAmino): _163.QueryGetProtoRevStatisticsByPoolResponse;
                toAmino(message: _163.QueryGetProtoRevStatisticsByPoolResponse): _163.QueryGetProtoRevStatisticsByPoolResponseAmino;
            };
            QueryGetProtoRevAllStatisticsRequest: {
                encode(_: _163.QueryGetProtoRevAllStatisticsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryGetProtoRevAllStatisticsRequest;
                fromJSON(_: any): _163.QueryGetProtoRevAllStatisticsRequest;
                toJSON(_: _163.QueryGetProtoRevAllStatisticsRequest): unknown;
                fromPartial(_: Partial<_163.QueryGetProtoRevAllStatisticsRequest>): _163.QueryGetProtoRevAllStatisticsRequest;
                fromAmino(_: _163.QueryGetProtoRevAllStatisticsRequestAmino): _163.QueryGetProtoRevAllStatisticsRequest;
                toAmino(_: _163.QueryGetProtoRevAllStatisticsRequest): _163.QueryGetProtoRevAllStatisticsRequestAmino;
            };
            QueryGetProtoRevAllStatisticsResponse: {
                encode(message: _163.QueryGetProtoRevAllStatisticsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryGetProtoRevAllStatisticsResponse;
                fromJSON(object: any): _163.QueryGetProtoRevAllStatisticsResponse;
                toJSON(message: _163.QueryGetProtoRevAllStatisticsResponse): unknown;
                fromPartial(object: Partial<_163.QueryGetProtoRevAllStatisticsResponse>): _163.QueryGetProtoRevAllStatisticsResponse;
                fromAmino(object: _163.QueryGetProtoRevAllStatisticsResponseAmino): _163.QueryGetProtoRevAllStatisticsResponse;
                toAmino(message: _163.QueryGetProtoRevAllStatisticsResponse): _163.QueryGetProtoRevAllStatisticsResponseAmino;
            };
            QueryGetProtoRevTokenPairArbRoutesRequest: {
                encode(_: _163.QueryGetProtoRevTokenPairArbRoutesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryGetProtoRevTokenPairArbRoutesRequest;
                fromJSON(_: any): _163.QueryGetProtoRevTokenPairArbRoutesRequest;
                toJSON(_: _163.QueryGetProtoRevTokenPairArbRoutesRequest): unknown;
                fromPartial(_: Partial<_163.QueryGetProtoRevTokenPairArbRoutesRequest>): _163.QueryGetProtoRevTokenPairArbRoutesRequest;
                fromAmino(_: _163.QueryGetProtoRevTokenPairArbRoutesRequestAmino): _163.QueryGetProtoRevTokenPairArbRoutesRequest;
                toAmino(_: _163.QueryGetProtoRevTokenPairArbRoutesRequest): _163.QueryGetProtoRevTokenPairArbRoutesRequestAmino;
            };
            QueryGetProtoRevTokenPairArbRoutesResponse: {
                encode(message: _163.QueryGetProtoRevTokenPairArbRoutesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryGetProtoRevTokenPairArbRoutesResponse;
                fromJSON(object: any): _163.QueryGetProtoRevTokenPairArbRoutesResponse;
                toJSON(message: _163.QueryGetProtoRevTokenPairArbRoutesResponse): unknown;
                fromPartial(object: Partial<_163.QueryGetProtoRevTokenPairArbRoutesResponse>): _163.QueryGetProtoRevTokenPairArbRoutesResponse;
                fromAmino(object: _163.QueryGetProtoRevTokenPairArbRoutesResponseAmino): _163.QueryGetProtoRevTokenPairArbRoutesResponse;
                toAmino(message: _163.QueryGetProtoRevTokenPairArbRoutesResponse): _163.QueryGetProtoRevTokenPairArbRoutesResponseAmino;
            };
            TokenPairArbRoutes: {
                encode(message: _162.TokenPairArbRoutes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.TokenPairArbRoutes;
                fromJSON(object: any): _162.TokenPairArbRoutes;
                toJSON(message: _162.TokenPairArbRoutes): unknown;
                fromPartial(object: Partial<_162.TokenPairArbRoutes>): _162.TokenPairArbRoutes;
                fromAmino(object: _162.TokenPairArbRoutesAmino): _162.TokenPairArbRoutes;
                toAmino(message: _162.TokenPairArbRoutes): _162.TokenPairArbRoutesAmino;
            };
            Route: {
                encode(message: _162.Route, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Route;
                fromJSON(object: any): _162.Route;
                toJSON(message: _162.Route): unknown;
                fromPartial(object: Partial<_162.Route>): _162.Route;
                fromAmino(object: _162.RouteAmino): _162.Route;
                toAmino(message: _162.Route): _162.RouteAmino;
            };
            Trade: {
                encode(message: _162.Trade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Trade;
                fromJSON(object: any): _162.Trade;
                toJSON(message: _162.Trade): unknown;
                fromPartial(object: Partial<_162.Trade>): _162.Trade;
                fromAmino(object: _162.TradeAmino): _162.Trade;
                toAmino(message: _162.Trade): _162.TradeAmino;
            };
            PoolStatistics: {
                encode(message: _162.PoolStatistics, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.PoolStatistics;
                fromJSON(object: any): _162.PoolStatistics;
                toJSON(message: _162.PoolStatistics): unknown;
                fromPartial(object: Partial<_162.PoolStatistics>): _162.PoolStatistics;
                fromAmino(object: _162.PoolStatisticsAmino): _162.PoolStatistics;
                toAmino(message: _162.PoolStatistics): _162.PoolStatisticsAmino;
            };
            Params: {
                encode(message: _161.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.Params;
                fromJSON(object: any): _161.Params;
                toJSON(message: _161.Params): unknown;
                fromPartial(object: Partial<_161.Params>): _161.Params;
                fromAmino(object: _161.ParamsAmino): _161.Params;
                toAmino(message: _161.Params): _161.ParamsAmino;
            };
            SetProtoRevEnabledProposal: {
                encode(message: _160.SetProtoRevEnabledProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.SetProtoRevEnabledProposal;
                fromJSON(object: any): _160.SetProtoRevEnabledProposal;
                toJSON(message: _160.SetProtoRevEnabledProposal): unknown;
                fromPartial(object: Partial<_160.SetProtoRevEnabledProposal>): _160.SetProtoRevEnabledProposal;
                fromAmino(object: _160.SetProtoRevEnabledProposalAmino): _160.SetProtoRevEnabledProposal;
                toAmino(message: _160.SetProtoRevEnabledProposal): _160.SetProtoRevEnabledProposalAmino;
            };
            SetProtoRevAdminAccountProposal: {
                encode(message: _160.SetProtoRevAdminAccountProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.SetProtoRevAdminAccountProposal;
                fromJSON(object: any): _160.SetProtoRevAdminAccountProposal;
                toJSON(message: _160.SetProtoRevAdminAccountProposal): unknown;
                fromPartial(object: Partial<_160.SetProtoRevAdminAccountProposal>): _160.SetProtoRevAdminAccountProposal;
                fromAmino(object: _160.SetProtoRevAdminAccountProposalAmino): _160.SetProtoRevAdminAccountProposal;
                toAmino(message: _160.SetProtoRevAdminAccountProposal): _160.SetProtoRevAdminAccountProposalAmino;
            };
            GenesisState: {
                encode(message: _159.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.GenesisState;
                fromJSON(object: any): _159.GenesisState;
                toJSON(message: _159.GenesisState): unknown;
                fromPartial(object: Partial<_159.GenesisState>): _159.GenesisState;
                fromAmino(object: _159.GenesisStateAmino): _159.GenesisState;
                toAmino(message: _159.GenesisState): _159.GenesisStateAmino;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                encode(message: _165.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.Node;
                fromJSON(object: any): _165.Node;
                toJSON(message: _165.Node): unknown;
                fromPartial(object: Partial<_165.Node>): _165.Node;
                fromAmino(object: _165.NodeAmino): _165.Node;
                toAmino(message: _165.Node): _165.NodeAmino;
            };
            Child: {
                encode(message: _165.Child, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.Child;
                fromJSON(object: any): _165.Child;
                toJSON(message: _165.Child): unknown;
                fromPartial(object: Partial<_165.Child>): _165.Child;
                fromAmino(object: _165.ChildAmino): _165.Child;
                toAmino(message: _165.Child): _165.ChildAmino;
            };
            Leaf: {
                encode(message: _165.Leaf, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.Leaf;
                fromJSON(object: any): _165.Leaf;
                toJSON(message: _165.Leaf): unknown;
                fromPartial(object: Partial<_165.Leaf>): _165.Leaf;
                fromAmino(object: _165.LeafAmino): _165.Leaf;
                toAmino(message: _165.Leaf): _165.LeafAmino;
            };
        };
    }
    const superfluid: {
        MsgClientImpl: typeof _321.MsgClientImpl;
        QueryClientImpl: typeof _309.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _168.QueryParamsRequest): Promise<_168.QueryParamsResponse>;
            assetType(request: _168.AssetTypeRequest): Promise<_168.AssetTypeResponse>;
            allAssets(request?: _168.AllAssetsRequest): Promise<_168.AllAssetsResponse>;
            assetMultiplier(request: _168.AssetMultiplierRequest): Promise<_168.AssetMultiplierResponse>;
            allIntermediaryAccounts(request?: _168.AllIntermediaryAccountsRequest): Promise<_168.AllIntermediaryAccountsResponse>;
            connectedIntermediaryAccount(request: _168.ConnectedIntermediaryAccountRequest): Promise<_168.ConnectedIntermediaryAccountResponse>;
            totalDelegationByValidatorForDenom(request: _168.QueryTotalDelegationByValidatorForDenomRequest): Promise<_168.QueryTotalDelegationByValidatorForDenomResponse>;
            totalSuperfluidDelegations(request?: _168.TotalSuperfluidDelegationsRequest): Promise<_168.TotalSuperfluidDelegationsResponse>;
            superfluidDelegationAmount(request: _168.SuperfluidDelegationAmountRequest): Promise<_168.SuperfluidDelegationAmountResponse>;
            superfluidDelegationsByDelegator(request: _168.SuperfluidDelegationsByDelegatorRequest): Promise<_168.SuperfluidDelegationsByDelegatorResponse>;
            superfluidUndelegationsByDelegator(request: _168.SuperfluidUndelegationsByDelegatorRequest): Promise<_168.SuperfluidUndelegationsByDelegatorResponse>;
            superfluidDelegationsByValidatorDenom(request: _168.SuperfluidDelegationsByValidatorDenomRequest): Promise<_168.SuperfluidDelegationsByValidatorDenomResponse>;
            estimateSuperfluidDelegatedAmountByValidatorDenom(request: _168.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_168.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
            totalDelegationByDelegator(request: _168.QueryTotalDelegationByDelegatorRequest): Promise<_168.QueryTotalDelegationByDelegatorResponse>;
            unpoolWhitelist(request?: _168.QueryUnpoolWhitelistRequest): Promise<_168.QueryUnpoolWhitelistResponse>;
        };
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                superfluidDelegate(value: _170.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegate(value: _170.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUnbondLock(value: _170.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lockAndSuperfluidDelegate(value: _170.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unPoolWhitelistedPool(value: _170.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                superfluidDelegate(value: _170.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _170.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _170.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _170.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _170.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _170.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _170.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _170.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _170.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _170.MsgUnPoolWhitelistedPool;
                };
            };
            toJSON: {
                superfluidDelegate(value: _170.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                superfluidUndelegate(value: _170.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                superfluidUnbondLock(value: _170.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: unknown;
                };
                lockAndSuperfluidDelegate(value: _170.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                unPoolWhitelistedPool(value: _170.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                superfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _170.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: any): {
                    typeUrl: string;
                    value: _170.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: any): {
                    typeUrl: string;
                    value: _170.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _170.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: any): {
                    typeUrl: string;
                    value: _170.MsgUnPoolWhitelistedPool;
                };
            };
            fromPartial: {
                superfluidDelegate(value: _170.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _170.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _170.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _170.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _170.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _170.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _170.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _170.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _170.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _170.MsgUnPoolWhitelistedPool;
                };
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: (message: _170.MsgSuperfluidDelegate) => _170.MsgSuperfluidDelegateAmino;
                fromAmino: (object: _170.MsgSuperfluidDelegateAmino) => _170.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: (message: _170.MsgSuperfluidUndelegate) => _170.MsgSuperfluidUndelegateAmino;
                fromAmino: (object: _170.MsgSuperfluidUndelegateAmino) => _170.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: (message: _170.MsgSuperfluidUnbondLock) => _170.MsgSuperfluidUnbondLockAmino;
                fromAmino: (object: _170.MsgSuperfluidUnbondLockAmino) => _170.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: (message: _170.MsgLockAndSuperfluidDelegate) => _170.MsgLockAndSuperfluidDelegateAmino;
                fromAmino: (object: _170.MsgLockAndSuperfluidDelegateAmino) => _170.MsgLockAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
                aminoType: string;
                toAmino: (message: _170.MsgUnPoolWhitelistedPool) => _170.MsgUnPoolWhitelistedPoolAmino;
                fromAmino: (object: _170.MsgUnPoolWhitelistedPoolAmino) => _170.MsgUnPoolWhitelistedPool;
            };
        };
        MsgSuperfluidDelegate: {
            encode(message: _170.MsgSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgSuperfluidDelegate;
            fromJSON(object: any): _170.MsgSuperfluidDelegate;
            toJSON(message: _170.MsgSuperfluidDelegate): unknown;
            fromPartial(object: Partial<_170.MsgSuperfluidDelegate>): _170.MsgSuperfluidDelegate;
            fromAmino(object: _170.MsgSuperfluidDelegateAmino): _170.MsgSuperfluidDelegate;
            toAmino(message: _170.MsgSuperfluidDelegate): _170.MsgSuperfluidDelegateAmino;
        };
        MsgSuperfluidDelegateResponse: {
            encode(_: _170.MsgSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgSuperfluidDelegateResponse;
            fromJSON(_: any): _170.MsgSuperfluidDelegateResponse;
            toJSON(_: _170.MsgSuperfluidDelegateResponse): unknown;
            fromPartial(_: Partial<_170.MsgSuperfluidDelegateResponse>): _170.MsgSuperfluidDelegateResponse;
            fromAmino(_: _170.MsgSuperfluidDelegateResponseAmino): _170.MsgSuperfluidDelegateResponse;
            toAmino(_: _170.MsgSuperfluidDelegateResponse): _170.MsgSuperfluidDelegateResponseAmino;
        };
        MsgSuperfluidUndelegate: {
            encode(message: _170.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgSuperfluidUndelegate;
            fromJSON(object: any): _170.MsgSuperfluidUndelegate;
            toJSON(message: _170.MsgSuperfluidUndelegate): unknown;
            fromPartial(object: Partial<_170.MsgSuperfluidUndelegate>): _170.MsgSuperfluidUndelegate;
            fromAmino(object: _170.MsgSuperfluidUndelegateAmino): _170.MsgSuperfluidUndelegate;
            toAmino(message: _170.MsgSuperfluidUndelegate): _170.MsgSuperfluidUndelegateAmino;
        };
        MsgSuperfluidUndelegateResponse: {
            encode(_: _170.MsgSuperfluidUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgSuperfluidUndelegateResponse;
            fromJSON(_: any): _170.MsgSuperfluidUndelegateResponse;
            toJSON(_: _170.MsgSuperfluidUndelegateResponse): unknown;
            fromPartial(_: Partial<_170.MsgSuperfluidUndelegateResponse>): _170.MsgSuperfluidUndelegateResponse;
            fromAmino(_: _170.MsgSuperfluidUndelegateResponseAmino): _170.MsgSuperfluidUndelegateResponse;
            toAmino(_: _170.MsgSuperfluidUndelegateResponse): _170.MsgSuperfluidUndelegateResponseAmino;
        };
        MsgSuperfluidUnbondLock: {
            encode(message: _170.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgSuperfluidUnbondLock;
            fromJSON(object: any): _170.MsgSuperfluidUnbondLock;
            toJSON(message: _170.MsgSuperfluidUnbondLock): unknown;
            fromPartial(object: Partial<_170.MsgSuperfluidUnbondLock>): _170.MsgSuperfluidUnbondLock;
            fromAmino(object: _170.MsgSuperfluidUnbondLockAmino): _170.MsgSuperfluidUnbondLock;
            toAmino(message: _170.MsgSuperfluidUnbondLock): _170.MsgSuperfluidUnbondLockAmino;
        };
        MsgSuperfluidUnbondLockResponse: {
            encode(_: _170.MsgSuperfluidUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgSuperfluidUnbondLockResponse;
            fromJSON(_: any): _170.MsgSuperfluidUnbondLockResponse;
            toJSON(_: _170.MsgSuperfluidUnbondLockResponse): unknown;
            fromPartial(_: Partial<_170.MsgSuperfluidUnbondLockResponse>): _170.MsgSuperfluidUnbondLockResponse;
            fromAmino(_: _170.MsgSuperfluidUnbondLockResponseAmino): _170.MsgSuperfluidUnbondLockResponse;
            toAmino(_: _170.MsgSuperfluidUnbondLockResponse): _170.MsgSuperfluidUnbondLockResponseAmino;
        };
        MsgLockAndSuperfluidDelegate: {
            encode(message: _170.MsgLockAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgLockAndSuperfluidDelegate;
            fromJSON(object: any): _170.MsgLockAndSuperfluidDelegate;
            toJSON(message: _170.MsgLockAndSuperfluidDelegate): unknown;
            fromPartial(object: Partial<_170.MsgLockAndSuperfluidDelegate>): _170.MsgLockAndSuperfluidDelegate;
            fromAmino(object: _170.MsgLockAndSuperfluidDelegateAmino): _170.MsgLockAndSuperfluidDelegate;
            toAmino(message: _170.MsgLockAndSuperfluidDelegate): _170.MsgLockAndSuperfluidDelegateAmino;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            encode(message: _170.MsgLockAndSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgLockAndSuperfluidDelegateResponse;
            fromJSON(object: any): _170.MsgLockAndSuperfluidDelegateResponse;
            toJSON(message: _170.MsgLockAndSuperfluidDelegateResponse): unknown;
            fromPartial(object: Partial<_170.MsgLockAndSuperfluidDelegateResponse>): _170.MsgLockAndSuperfluidDelegateResponse;
            fromAmino(object: _170.MsgLockAndSuperfluidDelegateResponseAmino): _170.MsgLockAndSuperfluidDelegateResponse;
            toAmino(message: _170.MsgLockAndSuperfluidDelegateResponse): _170.MsgLockAndSuperfluidDelegateResponseAmino;
        };
        MsgUnPoolWhitelistedPool: {
            encode(message: _170.MsgUnPoolWhitelistedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgUnPoolWhitelistedPool;
            fromJSON(object: any): _170.MsgUnPoolWhitelistedPool;
            toJSON(message: _170.MsgUnPoolWhitelistedPool): unknown;
            fromPartial(object: Partial<_170.MsgUnPoolWhitelistedPool>): _170.MsgUnPoolWhitelistedPool;
            fromAmino(object: _170.MsgUnPoolWhitelistedPoolAmino): _170.MsgUnPoolWhitelistedPool;
            toAmino(message: _170.MsgUnPoolWhitelistedPool): _170.MsgUnPoolWhitelistedPoolAmino;
        };
        MsgUnPoolWhitelistedPoolResponse: {
            encode(message: _170.MsgUnPoolWhitelistedPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgUnPoolWhitelistedPoolResponse;
            fromJSON(object: any): _170.MsgUnPoolWhitelistedPoolResponse;
            toJSON(message: _170.MsgUnPoolWhitelistedPoolResponse): unknown;
            fromPartial(object: Partial<_170.MsgUnPoolWhitelistedPoolResponse>): _170.MsgUnPoolWhitelistedPoolResponse;
            fromAmino(object: _170.MsgUnPoolWhitelistedPoolResponseAmino): _170.MsgUnPoolWhitelistedPoolResponse;
            toAmino(message: _170.MsgUnPoolWhitelistedPoolResponse): _170.MsgUnPoolWhitelistedPoolResponseAmino;
        };
        superfluidAssetTypeFromJSON(object: any): _169.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _169.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _169.SuperfluidAssetType;
        SuperfluidAssetTypeSDKType: typeof _169.SuperfluidAssetType;
        SuperfluidAssetTypeAmino: typeof _169.SuperfluidAssetType;
        SuperfluidAsset: {
            encode(message: _169.SuperfluidAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.SuperfluidAsset;
            fromJSON(object: any): _169.SuperfluidAsset;
            toJSON(message: _169.SuperfluidAsset): unknown;
            fromPartial(object: Partial<_169.SuperfluidAsset>): _169.SuperfluidAsset;
            fromAmino(object: _169.SuperfluidAssetAmino): _169.SuperfluidAsset;
            toAmino(message: _169.SuperfluidAsset): _169.SuperfluidAssetAmino;
        };
        SuperfluidIntermediaryAccount: {
            encode(message: _169.SuperfluidIntermediaryAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.SuperfluidIntermediaryAccount;
            fromJSON(object: any): _169.SuperfluidIntermediaryAccount;
            toJSON(message: _169.SuperfluidIntermediaryAccount): unknown;
            fromPartial(object: Partial<_169.SuperfluidIntermediaryAccount>): _169.SuperfluidIntermediaryAccount;
            fromAmino(object: _169.SuperfluidIntermediaryAccountAmino): _169.SuperfluidIntermediaryAccount;
            toAmino(message: _169.SuperfluidIntermediaryAccount): _169.SuperfluidIntermediaryAccountAmino;
        };
        OsmoEquivalentMultiplierRecord: {
            encode(message: _169.OsmoEquivalentMultiplierRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.OsmoEquivalentMultiplierRecord;
            fromJSON(object: any): _169.OsmoEquivalentMultiplierRecord;
            toJSON(message: _169.OsmoEquivalentMultiplierRecord): unknown;
            fromPartial(object: Partial<_169.OsmoEquivalentMultiplierRecord>): _169.OsmoEquivalentMultiplierRecord;
            fromAmino(object: _169.OsmoEquivalentMultiplierRecordAmino): _169.OsmoEquivalentMultiplierRecord;
            toAmino(message: _169.OsmoEquivalentMultiplierRecord): _169.OsmoEquivalentMultiplierRecordAmino;
        };
        SuperfluidDelegationRecord: {
            encode(message: _169.SuperfluidDelegationRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.SuperfluidDelegationRecord;
            fromJSON(object: any): _169.SuperfluidDelegationRecord;
            toJSON(message: _169.SuperfluidDelegationRecord): unknown;
            fromPartial(object: Partial<_169.SuperfluidDelegationRecord>): _169.SuperfluidDelegationRecord;
            fromAmino(object: _169.SuperfluidDelegationRecordAmino): _169.SuperfluidDelegationRecord;
            toAmino(message: _169.SuperfluidDelegationRecord): _169.SuperfluidDelegationRecordAmino;
        };
        LockIdIntermediaryAccountConnection: {
            encode(message: _169.LockIdIntermediaryAccountConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.LockIdIntermediaryAccountConnection;
            fromJSON(object: any): _169.LockIdIntermediaryAccountConnection;
            toJSON(message: _169.LockIdIntermediaryAccountConnection): unknown;
            fromPartial(object: Partial<_169.LockIdIntermediaryAccountConnection>): _169.LockIdIntermediaryAccountConnection;
            fromAmino(object: _169.LockIdIntermediaryAccountConnectionAmino): _169.LockIdIntermediaryAccountConnection;
            toAmino(message: _169.LockIdIntermediaryAccountConnection): _169.LockIdIntermediaryAccountConnectionAmino;
        };
        UnpoolWhitelistedPools: {
            encode(message: _169.UnpoolWhitelistedPools, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.UnpoolWhitelistedPools;
            fromJSON(object: any): _169.UnpoolWhitelistedPools;
            toJSON(message: _169.UnpoolWhitelistedPools): unknown;
            fromPartial(object: Partial<_169.UnpoolWhitelistedPools>): _169.UnpoolWhitelistedPools;
            fromAmino(object: _169.UnpoolWhitelistedPoolsAmino): _169.UnpoolWhitelistedPools;
            toAmino(message: _169.UnpoolWhitelistedPools): _169.UnpoolWhitelistedPoolsAmino;
        };
        QueryParamsRequest: {
            encode(_: _168.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryParamsRequest;
            fromJSON(_: any): _168.QueryParamsRequest;
            toJSON(_: _168.QueryParamsRequest): unknown;
            fromPartial(_: Partial<_168.QueryParamsRequest>): _168.QueryParamsRequest;
            fromAmino(_: _168.QueryParamsRequestAmino): _168.QueryParamsRequest;
            toAmino(_: _168.QueryParamsRequest): _168.QueryParamsRequestAmino;
        };
        QueryParamsResponse: {
            encode(message: _168.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryParamsResponse;
            fromJSON(object: any): _168.QueryParamsResponse;
            toJSON(message: _168.QueryParamsResponse): unknown;
            fromPartial(object: Partial<_168.QueryParamsResponse>): _168.QueryParamsResponse;
            fromAmino(object: _168.QueryParamsResponseAmino): _168.QueryParamsResponse;
            toAmino(message: _168.QueryParamsResponse): _168.QueryParamsResponseAmino;
        };
        AssetTypeRequest: {
            encode(message: _168.AssetTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.AssetTypeRequest;
            fromJSON(object: any): _168.AssetTypeRequest;
            toJSON(message: _168.AssetTypeRequest): unknown;
            fromPartial(object: Partial<_168.AssetTypeRequest>): _168.AssetTypeRequest;
            fromAmino(object: _168.AssetTypeRequestAmino): _168.AssetTypeRequest;
            toAmino(message: _168.AssetTypeRequest): _168.AssetTypeRequestAmino;
        };
        AssetTypeResponse: {
            encode(message: _168.AssetTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.AssetTypeResponse;
            fromJSON(object: any): _168.AssetTypeResponse;
            toJSON(message: _168.AssetTypeResponse): unknown;
            fromPartial(object: Partial<_168.AssetTypeResponse>): _168.AssetTypeResponse;
            fromAmino(object: _168.AssetTypeResponseAmino): _168.AssetTypeResponse;
            toAmino(message: _168.AssetTypeResponse): _168.AssetTypeResponseAmino;
        };
        AllAssetsRequest: {
            encode(_: _168.AllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.AllAssetsRequest;
            fromJSON(_: any): _168.AllAssetsRequest;
            toJSON(_: _168.AllAssetsRequest): unknown;
            fromPartial(_: Partial<_168.AllAssetsRequest>): _168.AllAssetsRequest;
            fromAmino(_: _168.AllAssetsRequestAmino): _168.AllAssetsRequest;
            toAmino(_: _168.AllAssetsRequest): _168.AllAssetsRequestAmino;
        };
        AllAssetsResponse: {
            encode(message: _168.AllAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.AllAssetsResponse;
            fromJSON(object: any): _168.AllAssetsResponse;
            toJSON(message: _168.AllAssetsResponse): unknown;
            fromPartial(object: Partial<_168.AllAssetsResponse>): _168.AllAssetsResponse;
            fromAmino(object: _168.AllAssetsResponseAmino): _168.AllAssetsResponse;
            toAmino(message: _168.AllAssetsResponse): _168.AllAssetsResponseAmino;
        };
        AssetMultiplierRequest: {
            encode(message: _168.AssetMultiplierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.AssetMultiplierRequest;
            fromJSON(object: any): _168.AssetMultiplierRequest;
            toJSON(message: _168.AssetMultiplierRequest): unknown;
            fromPartial(object: Partial<_168.AssetMultiplierRequest>): _168.AssetMultiplierRequest;
            fromAmino(object: _168.AssetMultiplierRequestAmino): _168.AssetMultiplierRequest;
            toAmino(message: _168.AssetMultiplierRequest): _168.AssetMultiplierRequestAmino;
        };
        AssetMultiplierResponse: {
            encode(message: _168.AssetMultiplierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.AssetMultiplierResponse;
            fromJSON(object: any): _168.AssetMultiplierResponse;
            toJSON(message: _168.AssetMultiplierResponse): unknown;
            fromPartial(object: Partial<_168.AssetMultiplierResponse>): _168.AssetMultiplierResponse;
            fromAmino(object: _168.AssetMultiplierResponseAmino): _168.AssetMultiplierResponse;
            toAmino(message: _168.AssetMultiplierResponse): _168.AssetMultiplierResponseAmino;
        };
        SuperfluidIntermediaryAccountInfo: {
            encode(message: _168.SuperfluidIntermediaryAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.SuperfluidIntermediaryAccountInfo;
            fromJSON(object: any): _168.SuperfluidIntermediaryAccountInfo;
            toJSON(message: _168.SuperfluidIntermediaryAccountInfo): unknown;
            fromPartial(object: Partial<_168.SuperfluidIntermediaryAccountInfo>): _168.SuperfluidIntermediaryAccountInfo;
            fromAmino(object: _168.SuperfluidIntermediaryAccountInfoAmino): _168.SuperfluidIntermediaryAccountInfo;
            toAmino(message: _168.SuperfluidIntermediaryAccountInfo): _168.SuperfluidIntermediaryAccountInfoAmino;
        };
        AllIntermediaryAccountsRequest: {
            encode(message: _168.AllIntermediaryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.AllIntermediaryAccountsRequest;
            fromJSON(object: any): _168.AllIntermediaryAccountsRequest;
            toJSON(message: _168.AllIntermediaryAccountsRequest): unknown;
            fromPartial(object: Partial<_168.AllIntermediaryAccountsRequest>): _168.AllIntermediaryAccountsRequest;
            fromAmino(object: _168.AllIntermediaryAccountsRequestAmino): _168.AllIntermediaryAccountsRequest;
            toAmino(message: _168.AllIntermediaryAccountsRequest): _168.AllIntermediaryAccountsRequestAmino;
        };
        AllIntermediaryAccountsResponse: {
            encode(message: _168.AllIntermediaryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.AllIntermediaryAccountsResponse;
            fromJSON(object: any): _168.AllIntermediaryAccountsResponse;
            toJSON(message: _168.AllIntermediaryAccountsResponse): unknown;
            fromPartial(object: Partial<_168.AllIntermediaryAccountsResponse>): _168.AllIntermediaryAccountsResponse;
            fromAmino(object: _168.AllIntermediaryAccountsResponseAmino): _168.AllIntermediaryAccountsResponse;
            toAmino(message: _168.AllIntermediaryAccountsResponse): _168.AllIntermediaryAccountsResponseAmino;
        };
        ConnectedIntermediaryAccountRequest: {
            encode(message: _168.ConnectedIntermediaryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.ConnectedIntermediaryAccountRequest;
            fromJSON(object: any): _168.ConnectedIntermediaryAccountRequest;
            toJSON(message: _168.ConnectedIntermediaryAccountRequest): unknown;
            fromPartial(object: Partial<_168.ConnectedIntermediaryAccountRequest>): _168.ConnectedIntermediaryAccountRequest;
            fromAmino(object: _168.ConnectedIntermediaryAccountRequestAmino): _168.ConnectedIntermediaryAccountRequest;
            toAmino(message: _168.ConnectedIntermediaryAccountRequest): _168.ConnectedIntermediaryAccountRequestAmino;
        };
        ConnectedIntermediaryAccountResponse: {
            encode(message: _168.ConnectedIntermediaryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.ConnectedIntermediaryAccountResponse;
            fromJSON(object: any): _168.ConnectedIntermediaryAccountResponse;
            toJSON(message: _168.ConnectedIntermediaryAccountResponse): unknown;
            fromPartial(object: Partial<_168.ConnectedIntermediaryAccountResponse>): _168.ConnectedIntermediaryAccountResponse;
            fromAmino(object: _168.ConnectedIntermediaryAccountResponseAmino): _168.ConnectedIntermediaryAccountResponse;
            toAmino(message: _168.ConnectedIntermediaryAccountResponse): _168.ConnectedIntermediaryAccountResponseAmino;
        };
        QueryTotalDelegationByValidatorForDenomRequest: {
            encode(message: _168.QueryTotalDelegationByValidatorForDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryTotalDelegationByValidatorForDenomRequest;
            fromJSON(object: any): _168.QueryTotalDelegationByValidatorForDenomRequest;
            toJSON(message: _168.QueryTotalDelegationByValidatorForDenomRequest): unknown;
            fromPartial(object: Partial<_168.QueryTotalDelegationByValidatorForDenomRequest>): _168.QueryTotalDelegationByValidatorForDenomRequest;
            fromAmino(object: _168.QueryTotalDelegationByValidatorForDenomRequestAmino): _168.QueryTotalDelegationByValidatorForDenomRequest;
            toAmino(message: _168.QueryTotalDelegationByValidatorForDenomRequest): _168.QueryTotalDelegationByValidatorForDenomRequestAmino;
        };
        QueryTotalDelegationByValidatorForDenomResponse: {
            encode(message: _168.QueryTotalDelegationByValidatorForDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryTotalDelegationByValidatorForDenomResponse;
            fromJSON(object: any): _168.QueryTotalDelegationByValidatorForDenomResponse;
            toJSON(message: _168.QueryTotalDelegationByValidatorForDenomResponse): unknown;
            fromPartial(object: Partial<_168.QueryTotalDelegationByValidatorForDenomResponse>): _168.QueryTotalDelegationByValidatorForDenomResponse;
            fromAmino(object: _168.QueryTotalDelegationByValidatorForDenomResponseAmino): _168.QueryTotalDelegationByValidatorForDenomResponse;
            toAmino(message: _168.QueryTotalDelegationByValidatorForDenomResponse): _168.QueryTotalDelegationByValidatorForDenomResponseAmino;
        };
        Delegations: {
            encode(message: _168.Delegations, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.Delegations;
            fromJSON(object: any): _168.Delegations;
            toJSON(message: _168.Delegations): unknown;
            fromPartial(object: Partial<_168.Delegations>): _168.Delegations;
            fromAmino(object: _168.DelegationsAmino): _168.Delegations;
            toAmino(message: _168.Delegations): _168.DelegationsAmino;
        };
        TotalSuperfluidDelegationsRequest: {
            encode(_: _168.TotalSuperfluidDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.TotalSuperfluidDelegationsRequest;
            fromJSON(_: any): _168.TotalSuperfluidDelegationsRequest;
            toJSON(_: _168.TotalSuperfluidDelegationsRequest): unknown;
            fromPartial(_: Partial<_168.TotalSuperfluidDelegationsRequest>): _168.TotalSuperfluidDelegationsRequest;
            fromAmino(_: _168.TotalSuperfluidDelegationsRequestAmino): _168.TotalSuperfluidDelegationsRequest;
            toAmino(_: _168.TotalSuperfluidDelegationsRequest): _168.TotalSuperfluidDelegationsRequestAmino;
        };
        TotalSuperfluidDelegationsResponse: {
            encode(message: _168.TotalSuperfluidDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.TotalSuperfluidDelegationsResponse;
            fromJSON(object: any): _168.TotalSuperfluidDelegationsResponse;
            toJSON(message: _168.TotalSuperfluidDelegationsResponse): unknown;
            fromPartial(object: Partial<_168.TotalSuperfluidDelegationsResponse>): _168.TotalSuperfluidDelegationsResponse;
            fromAmino(object: _168.TotalSuperfluidDelegationsResponseAmino): _168.TotalSuperfluidDelegationsResponse;
            toAmino(message: _168.TotalSuperfluidDelegationsResponse): _168.TotalSuperfluidDelegationsResponseAmino;
        };
        SuperfluidDelegationAmountRequest: {
            encode(message: _168.SuperfluidDelegationAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.SuperfluidDelegationAmountRequest;
            fromJSON(object: any): _168.SuperfluidDelegationAmountRequest;
            toJSON(message: _168.SuperfluidDelegationAmountRequest): unknown;
            fromPartial(object: Partial<_168.SuperfluidDelegationAmountRequest>): _168.SuperfluidDelegationAmountRequest;
            fromAmino(object: _168.SuperfluidDelegationAmountRequestAmino): _168.SuperfluidDelegationAmountRequest;
            toAmino(message: _168.SuperfluidDelegationAmountRequest): _168.SuperfluidDelegationAmountRequestAmino;
        };
        SuperfluidDelegationAmountResponse: {
            encode(message: _168.SuperfluidDelegationAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.SuperfluidDelegationAmountResponse;
            fromJSON(object: any): _168.SuperfluidDelegationAmountResponse;
            toJSON(message: _168.SuperfluidDelegationAmountResponse): unknown;
            fromPartial(object: Partial<_168.SuperfluidDelegationAmountResponse>): _168.SuperfluidDelegationAmountResponse;
            fromAmino(object: _168.SuperfluidDelegationAmountResponseAmino): _168.SuperfluidDelegationAmountResponse;
            toAmino(message: _168.SuperfluidDelegationAmountResponse): _168.SuperfluidDelegationAmountResponseAmino;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            encode(message: _168.SuperfluidDelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.SuperfluidDelegationsByDelegatorRequest;
            fromJSON(object: any): _168.SuperfluidDelegationsByDelegatorRequest;
            toJSON(message: _168.SuperfluidDelegationsByDelegatorRequest): unknown;
            fromPartial(object: Partial<_168.SuperfluidDelegationsByDelegatorRequest>): _168.SuperfluidDelegationsByDelegatorRequest;
            fromAmino(object: _168.SuperfluidDelegationsByDelegatorRequestAmino): _168.SuperfluidDelegationsByDelegatorRequest;
            toAmino(message: _168.SuperfluidDelegationsByDelegatorRequest): _168.SuperfluidDelegationsByDelegatorRequestAmino;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            encode(message: _168.SuperfluidDelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.SuperfluidDelegationsByDelegatorResponse;
            fromJSON(object: any): _168.SuperfluidDelegationsByDelegatorResponse;
            toJSON(message: _168.SuperfluidDelegationsByDelegatorResponse): unknown;
            fromPartial(object: Partial<_168.SuperfluidDelegationsByDelegatorResponse>): _168.SuperfluidDelegationsByDelegatorResponse;
            fromAmino(object: _168.SuperfluidDelegationsByDelegatorResponseAmino): _168.SuperfluidDelegationsByDelegatorResponse;
            toAmino(message: _168.SuperfluidDelegationsByDelegatorResponse): _168.SuperfluidDelegationsByDelegatorResponseAmino;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            encode(message: _168.SuperfluidUndelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.SuperfluidUndelegationsByDelegatorRequest;
            fromJSON(object: any): _168.SuperfluidUndelegationsByDelegatorRequest;
            toJSON(message: _168.SuperfluidUndelegationsByDelegatorRequest): unknown;
            fromPartial(object: Partial<_168.SuperfluidUndelegationsByDelegatorRequest>): _168.SuperfluidUndelegationsByDelegatorRequest;
            fromAmino(object: _168.SuperfluidUndelegationsByDelegatorRequestAmino): _168.SuperfluidUndelegationsByDelegatorRequest;
            toAmino(message: _168.SuperfluidUndelegationsByDelegatorRequest): _168.SuperfluidUndelegationsByDelegatorRequestAmino;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            encode(message: _168.SuperfluidUndelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.SuperfluidUndelegationsByDelegatorResponse;
            fromJSON(object: any): _168.SuperfluidUndelegationsByDelegatorResponse;
            toJSON(message: _168.SuperfluidUndelegationsByDelegatorResponse): unknown;
            fromPartial(object: Partial<_168.SuperfluidUndelegationsByDelegatorResponse>): _168.SuperfluidUndelegationsByDelegatorResponse;
            fromAmino(object: _168.SuperfluidUndelegationsByDelegatorResponseAmino): _168.SuperfluidUndelegationsByDelegatorResponse;
            toAmino(message: _168.SuperfluidUndelegationsByDelegatorResponse): _168.SuperfluidUndelegationsByDelegatorResponseAmino;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            encode(message: _168.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.SuperfluidDelegationsByValidatorDenomRequest;
            fromJSON(object: any): _168.SuperfluidDelegationsByValidatorDenomRequest;
            toJSON(message: _168.SuperfluidDelegationsByValidatorDenomRequest): unknown;
            fromPartial(object: Partial<_168.SuperfluidDelegationsByValidatorDenomRequest>): _168.SuperfluidDelegationsByValidatorDenomRequest;
            fromAmino(object: _168.SuperfluidDelegationsByValidatorDenomRequestAmino): _168.SuperfluidDelegationsByValidatorDenomRequest;
            toAmino(message: _168.SuperfluidDelegationsByValidatorDenomRequest): _168.SuperfluidDelegationsByValidatorDenomRequestAmino;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            encode(message: _168.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.SuperfluidDelegationsByValidatorDenomResponse;
            fromJSON(object: any): _168.SuperfluidDelegationsByValidatorDenomResponse;
            toJSON(message: _168.SuperfluidDelegationsByValidatorDenomResponse): unknown;
            fromPartial(object: Partial<_168.SuperfluidDelegationsByValidatorDenomResponse>): _168.SuperfluidDelegationsByValidatorDenomResponse;
            fromAmino(object: _168.SuperfluidDelegationsByValidatorDenomResponseAmino): _168.SuperfluidDelegationsByValidatorDenomResponse;
            toAmino(message: _168.SuperfluidDelegationsByValidatorDenomResponse): _168.SuperfluidDelegationsByValidatorDenomResponseAmino;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            encode(message: _168.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromJSON(object: any): _168.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toJSON(message: _168.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown;
            fromPartial(object: Partial<_168.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>): _168.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromAmino(object: _168.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino): _168.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toAmino(message: _168.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _168.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            encode(message: _168.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromJSON(object: any): _168.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toJSON(message: _168.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown;
            fromPartial(object: Partial<_168.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>): _168.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromAmino(object: _168.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino): _168.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toAmino(message: _168.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _168.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino;
        };
        QueryTotalDelegationByDelegatorRequest: {
            encode(message: _168.QueryTotalDelegationByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryTotalDelegationByDelegatorRequest;
            fromJSON(object: any): _168.QueryTotalDelegationByDelegatorRequest;
            toJSON(message: _168.QueryTotalDelegationByDelegatorRequest): unknown;
            fromPartial(object: Partial<_168.QueryTotalDelegationByDelegatorRequest>): _168.QueryTotalDelegationByDelegatorRequest;
            fromAmino(object: _168.QueryTotalDelegationByDelegatorRequestAmino): _168.QueryTotalDelegationByDelegatorRequest;
            toAmino(message: _168.QueryTotalDelegationByDelegatorRequest): _168.QueryTotalDelegationByDelegatorRequestAmino;
        };
        QueryTotalDelegationByDelegatorResponse: {
            encode(message: _168.QueryTotalDelegationByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryTotalDelegationByDelegatorResponse;
            fromJSON(object: any): _168.QueryTotalDelegationByDelegatorResponse;
            toJSON(message: _168.QueryTotalDelegationByDelegatorResponse): unknown;
            fromPartial(object: Partial<_168.QueryTotalDelegationByDelegatorResponse>): _168.QueryTotalDelegationByDelegatorResponse;
            fromAmino(object: _168.QueryTotalDelegationByDelegatorResponseAmino): _168.QueryTotalDelegationByDelegatorResponse;
            toAmino(message: _168.QueryTotalDelegationByDelegatorResponse): _168.QueryTotalDelegationByDelegatorResponseAmino;
        };
        QueryUnpoolWhitelistRequest: {
            encode(_: _168.QueryUnpoolWhitelistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryUnpoolWhitelistRequest;
            fromJSON(_: any): _168.QueryUnpoolWhitelistRequest;
            toJSON(_: _168.QueryUnpoolWhitelistRequest): unknown;
            fromPartial(_: Partial<_168.QueryUnpoolWhitelistRequest>): _168.QueryUnpoolWhitelistRequest;
            fromAmino(_: _168.QueryUnpoolWhitelistRequestAmino): _168.QueryUnpoolWhitelistRequest;
            toAmino(_: _168.QueryUnpoolWhitelistRequest): _168.QueryUnpoolWhitelistRequestAmino;
        };
        QueryUnpoolWhitelistResponse: {
            encode(message: _168.QueryUnpoolWhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryUnpoolWhitelistResponse;
            fromJSON(object: any): _168.QueryUnpoolWhitelistResponse;
            toJSON(message: _168.QueryUnpoolWhitelistResponse): unknown;
            fromPartial(object: Partial<_168.QueryUnpoolWhitelistResponse>): _168.QueryUnpoolWhitelistResponse;
            fromAmino(object: _168.QueryUnpoolWhitelistResponseAmino): _168.QueryUnpoolWhitelistResponse;
            toAmino(message: _168.QueryUnpoolWhitelistResponse): _168.QueryUnpoolWhitelistResponseAmino;
        };
        Params: {
            encode(message: _167.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.Params;
            fromJSON(object: any): _167.Params;
            toJSON(message: _167.Params): unknown;
            fromPartial(object: Partial<_167.Params>): _167.Params;
            fromAmino(object: _167.ParamsAmino): _167.Params;
            toAmino(message: _167.Params): _167.ParamsAmino;
        };
        GenesisState: {
            encode(message: _166.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.GenesisState;
            fromJSON(object: any): _166.GenesisState;
            toJSON(message: _166.GenesisState): unknown;
            fromPartial(object: Partial<_166.GenesisState>): _166.GenesisState;
            fromAmino(object: _166.GenesisStateAmino): _166.GenesisState;
            toAmino(message: _166.GenesisState): _166.GenesisStateAmino;
        };
    };
    namespace swaprouter {
        const v1beta1: {
            MsgClientImpl: typeof _322.MsgClientImpl;
            QueryClientImpl: typeof _310.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _173.ParamsRequest): Promise<_173.ParamsResponse>;
                estimateSwapExactAmountIn(request: _173.EstimateSwapExactAmountInRequest): Promise<_173.EstimateSwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: _173.EstimateSwapExactAmountOutRequest): Promise<_173.EstimateSwapExactAmountOutResponse>;
                numPools(request?: _173.NumPoolsRequest): Promise<_173.NumPoolsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    swapExactAmountIn(value: _175.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _175.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    swapExactAmountIn(value: _175.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _175.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _175.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _175.MsgSwapExactAmountOut;
                    };
                };
                toJSON: {
                    swapExactAmountIn(value: _175.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountOut(value: _175.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    swapExactAmountIn(value: any): {
                        typeUrl: string;
                        value: _175.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: any): {
                        typeUrl: string;
                        value: _175.MsgSwapExactAmountOut;
                    };
                };
                fromPartial: {
                    swapExactAmountIn(value: _175.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _175.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _175.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _175.MsgSwapExactAmountOut;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: (message: _175.MsgSwapExactAmountIn) => _175.MsgSwapExactAmountInAmino;
                    fromAmino: (object: _175.MsgSwapExactAmountInAmino) => _175.MsgSwapExactAmountIn;
                };
                "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: (message: _175.MsgSwapExactAmountOut) => _175.MsgSwapExactAmountOutAmino;
                    fromAmino: (object: _175.MsgSwapExactAmountOutAmino) => _175.MsgSwapExactAmountOut;
                };
            };
            MsgSwapExactAmountIn: {
                encode(message: _175.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgSwapExactAmountIn;
                fromJSON(object: any): _175.MsgSwapExactAmountIn;
                toJSON(message: _175.MsgSwapExactAmountIn): unknown;
                fromPartial(object: Partial<_175.MsgSwapExactAmountIn>): _175.MsgSwapExactAmountIn;
                fromAmino(object: _175.MsgSwapExactAmountInAmino): _175.MsgSwapExactAmountIn;
                toAmino(message: _175.MsgSwapExactAmountIn): _175.MsgSwapExactAmountInAmino;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _175.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgSwapExactAmountInResponse;
                fromJSON(object: any): _175.MsgSwapExactAmountInResponse;
                toJSON(message: _175.MsgSwapExactAmountInResponse): unknown;
                fromPartial(object: Partial<_175.MsgSwapExactAmountInResponse>): _175.MsgSwapExactAmountInResponse;
                fromAmino(object: _175.MsgSwapExactAmountInResponseAmino): _175.MsgSwapExactAmountInResponse;
                toAmino(message: _175.MsgSwapExactAmountInResponse): _175.MsgSwapExactAmountInResponseAmino;
            };
            MsgSwapExactAmountOut: {
                encode(message: _175.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgSwapExactAmountOut;
                fromJSON(object: any): _175.MsgSwapExactAmountOut;
                toJSON(message: _175.MsgSwapExactAmountOut): unknown;
                fromPartial(object: Partial<_175.MsgSwapExactAmountOut>): _175.MsgSwapExactAmountOut;
                fromAmino(object: _175.MsgSwapExactAmountOutAmino): _175.MsgSwapExactAmountOut;
                toAmino(message: _175.MsgSwapExactAmountOut): _175.MsgSwapExactAmountOutAmino;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _175.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgSwapExactAmountOutResponse;
                fromJSON(object: any): _175.MsgSwapExactAmountOutResponse;
                toJSON(message: _175.MsgSwapExactAmountOutResponse): unknown;
                fromPartial(object: Partial<_175.MsgSwapExactAmountOutResponse>): _175.MsgSwapExactAmountOutResponse;
                fromAmino(object: _175.MsgSwapExactAmountOutResponseAmino): _175.MsgSwapExactAmountOutResponse;
                toAmino(message: _175.MsgSwapExactAmountOutResponse): _175.MsgSwapExactAmountOutResponseAmino;
            };
            SwapAmountInRoute: {
                encode(message: _174.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.SwapAmountInRoute;
                fromJSON(object: any): _174.SwapAmountInRoute;
                toJSON(message: _174.SwapAmountInRoute): unknown;
                fromPartial(object: Partial<_174.SwapAmountInRoute>): _174.SwapAmountInRoute;
                fromAmino(object: _174.SwapAmountInRouteAmino): _174.SwapAmountInRoute;
                toAmino(message: _174.SwapAmountInRoute): _174.SwapAmountInRouteAmino;
            };
            SwapAmountOutRoute: {
                encode(message: _174.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.SwapAmountOutRoute;
                fromJSON(object: any): _174.SwapAmountOutRoute;
                toJSON(message: _174.SwapAmountOutRoute): unknown;
                fromPartial(object: Partial<_174.SwapAmountOutRoute>): _174.SwapAmountOutRoute;
                fromAmino(object: _174.SwapAmountOutRouteAmino): _174.SwapAmountOutRoute;
                toAmino(message: _174.SwapAmountOutRoute): _174.SwapAmountOutRouteAmino;
            };
            ParamsRequest: {
                encode(_: _173.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.ParamsRequest;
                fromJSON(_: any): _173.ParamsRequest;
                toJSON(_: _173.ParamsRequest): unknown;
                fromPartial(_: Partial<_173.ParamsRequest>): _173.ParamsRequest;
                fromAmino(_: _173.ParamsRequestAmino): _173.ParamsRequest;
                toAmino(_: _173.ParamsRequest): _173.ParamsRequestAmino;
            };
            ParamsResponse: {
                encode(message: _173.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.ParamsResponse;
                fromJSON(object: any): _173.ParamsResponse;
                toJSON(message: _173.ParamsResponse): unknown;
                fromPartial(object: Partial<_173.ParamsResponse>): _173.ParamsResponse;
                fromAmino(object: _173.ParamsResponseAmino): _173.ParamsResponse;
                toAmino(message: _173.ParamsResponse): _173.ParamsResponseAmino;
            };
            EstimateSwapExactAmountInRequest: {
                encode(message: _173.EstimateSwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.EstimateSwapExactAmountInRequest;
                fromJSON(object: any): _173.EstimateSwapExactAmountInRequest;
                toJSON(message: _173.EstimateSwapExactAmountInRequest): unknown;
                fromPartial(object: Partial<_173.EstimateSwapExactAmountInRequest>): _173.EstimateSwapExactAmountInRequest;
                fromAmino(object: _173.EstimateSwapExactAmountInRequestAmino): _173.EstimateSwapExactAmountInRequest;
                toAmino(message: _173.EstimateSwapExactAmountInRequest): _173.EstimateSwapExactAmountInRequestAmino;
            };
            EstimateSwapExactAmountInResponse: {
                encode(message: _173.EstimateSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.EstimateSwapExactAmountInResponse;
                fromJSON(object: any): _173.EstimateSwapExactAmountInResponse;
                toJSON(message: _173.EstimateSwapExactAmountInResponse): unknown;
                fromPartial(object: Partial<_173.EstimateSwapExactAmountInResponse>): _173.EstimateSwapExactAmountInResponse;
                fromAmino(object: _173.EstimateSwapExactAmountInResponseAmino): _173.EstimateSwapExactAmountInResponse;
                toAmino(message: _173.EstimateSwapExactAmountInResponse): _173.EstimateSwapExactAmountInResponseAmino;
            };
            EstimateSwapExactAmountOutRequest: {
                encode(message: _173.EstimateSwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.EstimateSwapExactAmountOutRequest;
                fromJSON(object: any): _173.EstimateSwapExactAmountOutRequest;
                toJSON(message: _173.EstimateSwapExactAmountOutRequest): unknown;
                fromPartial(object: Partial<_173.EstimateSwapExactAmountOutRequest>): _173.EstimateSwapExactAmountOutRequest;
                fromAmino(object: _173.EstimateSwapExactAmountOutRequestAmino): _173.EstimateSwapExactAmountOutRequest;
                toAmino(message: _173.EstimateSwapExactAmountOutRequest): _173.EstimateSwapExactAmountOutRequestAmino;
            };
            EstimateSwapExactAmountOutResponse: {
                encode(message: _173.EstimateSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.EstimateSwapExactAmountOutResponse;
                fromJSON(object: any): _173.EstimateSwapExactAmountOutResponse;
                toJSON(message: _173.EstimateSwapExactAmountOutResponse): unknown;
                fromPartial(object: Partial<_173.EstimateSwapExactAmountOutResponse>): _173.EstimateSwapExactAmountOutResponse;
                fromAmino(object: _173.EstimateSwapExactAmountOutResponseAmino): _173.EstimateSwapExactAmountOutResponse;
                toAmino(message: _173.EstimateSwapExactAmountOutResponse): _173.EstimateSwapExactAmountOutResponseAmino;
            };
            NumPoolsRequest: {
                encode(_: _173.NumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.NumPoolsRequest;
                fromJSON(_: any): _173.NumPoolsRequest;
                toJSON(_: _173.NumPoolsRequest): unknown;
                fromPartial(_: Partial<_173.NumPoolsRequest>): _173.NumPoolsRequest;
                fromAmino(_: _173.NumPoolsRequestAmino): _173.NumPoolsRequest;
                toAmino(_: _173.NumPoolsRequest): _173.NumPoolsRequestAmino;
            };
            NumPoolsResponse: {
                encode(message: _173.NumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.NumPoolsResponse;
                fromJSON(object: any): _173.NumPoolsResponse;
                toJSON(message: _173.NumPoolsResponse): unknown;
                fromPartial(object: Partial<_173.NumPoolsResponse>): _173.NumPoolsResponse;
                fromAmino(object: _173.NumPoolsResponseAmino): _173.NumPoolsResponse;
                toAmino(message: _173.NumPoolsResponse): _173.NumPoolsResponseAmino;
            };
            poolTypeFromJSON(object: any): _172.PoolType;
            poolTypeToJSON(object: _172.PoolType): string;
            PoolType: typeof _172.PoolType;
            PoolTypeSDKType: typeof _172.PoolType;
            PoolTypeAmino: typeof _172.PoolType;
            ModuleRoute: {
                encode(message: _172.ModuleRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.ModuleRoute;
                fromJSON(object: any): _172.ModuleRoute;
                toJSON(message: _172.ModuleRoute): unknown;
                fromPartial(object: Partial<_172.ModuleRoute>): _172.ModuleRoute;
                fromAmino(object: _172.ModuleRouteAmino): _172.ModuleRoute;
                toAmino(message: _172.ModuleRoute): _172.ModuleRouteAmino;
            };
            Params: {
                encode(message: _171.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.Params;
                fromJSON(object: any): _171.Params;
                toJSON(message: _171.Params): unknown;
                fromPartial(object: Partial<_171.Params>): _171.Params;
                fromAmino(object: _171.ParamsAmino): _171.Params;
                toAmino(message: _171.Params): _171.ParamsAmino;
            };
            GenesisState: {
                encode(message: _171.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.GenesisState;
                fromJSON(object: any): _171.GenesisState;
                toJSON(message: _171.GenesisState): unknown;
                fromPartial(object: Partial<_171.GenesisState>): _171.GenesisState;
                fromAmino(object: _171.GenesisStateAmino): _171.GenesisState;
                toAmino(message: _171.GenesisState): _171.GenesisStateAmino;
            };
        };
    }
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _323.MsgClientImpl;
            QueryClientImpl: typeof _311.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _179.QueryParamsRequest): Promise<_179.QueryParamsResponse>;
                denomAuthorityMetadata(request: _179.QueryDenomAuthorityMetadataRequest): Promise<_179.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _179.QueryDenomsFromCreatorRequest): Promise<_179.QueryDenomsFromCreatorResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _180.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _180.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _180.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _180.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _180.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _180.MsgCreateDenom): {
                        typeUrl: string;
                        value: _180.MsgCreateDenom;
                    };
                    mint(value: _180.MsgMint): {
                        typeUrl: string;
                        value: _180.MsgMint;
                    };
                    burn(value: _180.MsgBurn): {
                        typeUrl: string;
                        value: _180.MsgBurn;
                    };
                    changeAdmin(value: _180.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _180.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _180.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _180.MsgSetDenomMetadata;
                    };
                };
                toJSON: {
                    createDenom(value: _180.MsgCreateDenom): {
                        typeUrl: string;
                        value: unknown;
                    };
                    mint(value: _180.MsgMint): {
                        typeUrl: string;
                        value: unknown;
                    };
                    burn(value: _180.MsgBurn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    changeAdmin(value: _180.MsgChangeAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setDenomMetadata(value: _180.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _180.MsgCreateDenom;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: _180.MsgMint;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _180.MsgBurn;
                    };
                    changeAdmin(value: any): {
                        typeUrl: string;
                        value: _180.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: any): {
                        typeUrl: string;
                        value: _180.MsgSetDenomMetadata;
                    };
                };
                fromPartial: {
                    createDenom(value: _180.MsgCreateDenom): {
                        typeUrl: string;
                        value: _180.MsgCreateDenom;
                    };
                    mint(value: _180.MsgMint): {
                        typeUrl: string;
                        value: _180.MsgMint;
                    };
                    burn(value: _180.MsgBurn): {
                        typeUrl: string;
                        value: _180.MsgBurn;
                    };
                    changeAdmin(value: _180.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _180.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _180.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _180.MsgSetDenomMetadata;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: (message: _180.MsgCreateDenom) => _180.MsgCreateDenomAmino;
                    fromAmino: (object: _180.MsgCreateDenomAmino) => _180.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: (message: _180.MsgMint) => _180.MsgMintAmino;
                    fromAmino: (object: _180.MsgMintAmino) => _180.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: (message: _180.MsgBurn) => _180.MsgBurnAmino;
                    fromAmino: (object: _180.MsgBurnAmino) => _180.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: (message: _180.MsgChangeAdmin) => _180.MsgChangeAdminAmino;
                    fromAmino: (object: _180.MsgChangeAdminAmino) => _180.MsgChangeAdmin;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: (message: _180.MsgSetDenomMetadata) => _180.MsgSetDenomMetadataAmino;
                    fromAmino: (object: _180.MsgSetDenomMetadataAmino) => _180.MsgSetDenomMetadata;
                };
            };
            MsgCreateDenom: {
                encode(message: _180.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.MsgCreateDenom;
                fromJSON(object: any): _180.MsgCreateDenom;
                toJSON(message: _180.MsgCreateDenom): unknown;
                fromPartial(object: Partial<_180.MsgCreateDenom>): _180.MsgCreateDenom;
                fromAmino(object: _180.MsgCreateDenomAmino): _180.MsgCreateDenom;
                toAmino(message: _180.MsgCreateDenom): _180.MsgCreateDenomAmino;
            };
            MsgCreateDenomResponse: {
                encode(message: _180.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.MsgCreateDenomResponse;
                fromJSON(object: any): _180.MsgCreateDenomResponse;
                toJSON(message: _180.MsgCreateDenomResponse): unknown;
                fromPartial(object: Partial<_180.MsgCreateDenomResponse>): _180.MsgCreateDenomResponse;
                fromAmino(object: _180.MsgCreateDenomResponseAmino): _180.MsgCreateDenomResponse;
                toAmino(message: _180.MsgCreateDenomResponse): _180.MsgCreateDenomResponseAmino;
            };
            MsgMint: {
                encode(message: _180.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.MsgMint;
                fromJSON(object: any): _180.MsgMint;
                toJSON(message: _180.MsgMint): unknown;
                fromPartial(object: Partial<_180.MsgMint>): _180.MsgMint;
                fromAmino(object: _180.MsgMintAmino): _180.MsgMint;
                toAmino(message: _180.MsgMint): _180.MsgMintAmino;
            };
            MsgMintResponse: {
                encode(_: _180.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.MsgMintResponse;
                fromJSON(_: any): _180.MsgMintResponse;
                toJSON(_: _180.MsgMintResponse): unknown;
                fromPartial(_: Partial<_180.MsgMintResponse>): _180.MsgMintResponse;
                fromAmino(_: _180.MsgMintResponseAmino): _180.MsgMintResponse;
                toAmino(_: _180.MsgMintResponse): _180.MsgMintResponseAmino;
            };
            MsgBurn: {
                encode(message: _180.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.MsgBurn;
                fromJSON(object: any): _180.MsgBurn;
                toJSON(message: _180.MsgBurn): unknown;
                fromPartial(object: Partial<_180.MsgBurn>): _180.MsgBurn;
                fromAmino(object: _180.MsgBurnAmino): _180.MsgBurn;
                toAmino(message: _180.MsgBurn): _180.MsgBurnAmino;
            };
            MsgBurnResponse: {
                encode(_: _180.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.MsgBurnResponse;
                fromJSON(_: any): _180.MsgBurnResponse;
                toJSON(_: _180.MsgBurnResponse): unknown;
                fromPartial(_: Partial<_180.MsgBurnResponse>): _180.MsgBurnResponse;
                fromAmino(_: _180.MsgBurnResponseAmino): _180.MsgBurnResponse;
                toAmino(_: _180.MsgBurnResponse): _180.MsgBurnResponseAmino;
            };
            MsgChangeAdmin: {
                encode(message: _180.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.MsgChangeAdmin;
                fromJSON(object: any): _180.MsgChangeAdmin;
                toJSON(message: _180.MsgChangeAdmin): unknown;
                fromPartial(object: Partial<_180.MsgChangeAdmin>): _180.MsgChangeAdmin;
                fromAmino(object: _180.MsgChangeAdminAmino): _180.MsgChangeAdmin;
                toAmino(message: _180.MsgChangeAdmin): _180.MsgChangeAdminAmino;
            };
            MsgChangeAdminResponse: {
                encode(_: _180.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.MsgChangeAdminResponse;
                fromJSON(_: any): _180.MsgChangeAdminResponse;
                toJSON(_: _180.MsgChangeAdminResponse): unknown;
                fromPartial(_: Partial<_180.MsgChangeAdminResponse>): _180.MsgChangeAdminResponse;
                fromAmino(_: _180.MsgChangeAdminResponseAmino): _180.MsgChangeAdminResponse;
                toAmino(_: _180.MsgChangeAdminResponse): _180.MsgChangeAdminResponseAmino;
            };
            MsgSetDenomMetadata: {
                encode(message: _180.MsgSetDenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.MsgSetDenomMetadata;
                fromJSON(object: any): _180.MsgSetDenomMetadata;
                toJSON(message: _180.MsgSetDenomMetadata): unknown;
                fromPartial(object: Partial<_180.MsgSetDenomMetadata>): _180.MsgSetDenomMetadata;
                fromAmino(object: _180.MsgSetDenomMetadataAmino): _180.MsgSetDenomMetadata;
                toAmino(message: _180.MsgSetDenomMetadata): _180.MsgSetDenomMetadataAmino;
            };
            MsgSetDenomMetadataResponse: {
                encode(_: _180.MsgSetDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.MsgSetDenomMetadataResponse;
                fromJSON(_: any): _180.MsgSetDenomMetadataResponse;
                toJSON(_: _180.MsgSetDenomMetadataResponse): unknown;
                fromPartial(_: Partial<_180.MsgSetDenomMetadataResponse>): _180.MsgSetDenomMetadataResponse;
                fromAmino(_: _180.MsgSetDenomMetadataResponseAmino): _180.MsgSetDenomMetadataResponse;
                toAmino(_: _180.MsgSetDenomMetadataResponse): _180.MsgSetDenomMetadataResponseAmino;
            };
            QueryParamsRequest: {
                encode(_: _179.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.QueryParamsRequest;
                fromJSON(_: any): _179.QueryParamsRequest;
                toJSON(_: _179.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_179.QueryParamsRequest>): _179.QueryParamsRequest;
                fromAmino(_: _179.QueryParamsRequestAmino): _179.QueryParamsRequest;
                toAmino(_: _179.QueryParamsRequest): _179.QueryParamsRequestAmino;
            };
            QueryParamsResponse: {
                encode(message: _179.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.QueryParamsResponse;
                fromJSON(object: any): _179.QueryParamsResponse;
                toJSON(message: _179.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_179.QueryParamsResponse>): _179.QueryParamsResponse;
                fromAmino(object: _179.QueryParamsResponseAmino): _179.QueryParamsResponse;
                toAmino(message: _179.QueryParamsResponse): _179.QueryParamsResponseAmino;
            };
            QueryDenomAuthorityMetadataRequest: {
                encode(message: _179.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.QueryDenomAuthorityMetadataRequest;
                fromJSON(object: any): _179.QueryDenomAuthorityMetadataRequest;
                toJSON(message: _179.QueryDenomAuthorityMetadataRequest): unknown;
                fromPartial(object: Partial<_179.QueryDenomAuthorityMetadataRequest>): _179.QueryDenomAuthorityMetadataRequest;
                fromAmino(object: _179.QueryDenomAuthorityMetadataRequestAmino): _179.QueryDenomAuthorityMetadataRequest;
                toAmino(message: _179.QueryDenomAuthorityMetadataRequest): _179.QueryDenomAuthorityMetadataRequestAmino;
            };
            QueryDenomAuthorityMetadataResponse: {
                encode(message: _179.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.QueryDenomAuthorityMetadataResponse;
                fromJSON(object: any): _179.QueryDenomAuthorityMetadataResponse;
                toJSON(message: _179.QueryDenomAuthorityMetadataResponse): unknown;
                fromPartial(object: Partial<_179.QueryDenomAuthorityMetadataResponse>): _179.QueryDenomAuthorityMetadataResponse;
                fromAmino(object: _179.QueryDenomAuthorityMetadataResponseAmino): _179.QueryDenomAuthorityMetadataResponse;
                toAmino(message: _179.QueryDenomAuthorityMetadataResponse): _179.QueryDenomAuthorityMetadataResponseAmino;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _179.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.QueryDenomsFromCreatorRequest;
                fromJSON(object: any): _179.QueryDenomsFromCreatorRequest;
                toJSON(message: _179.QueryDenomsFromCreatorRequest): unknown;
                fromPartial(object: Partial<_179.QueryDenomsFromCreatorRequest>): _179.QueryDenomsFromCreatorRequest;
                fromAmino(object: _179.QueryDenomsFromCreatorRequestAmino): _179.QueryDenomsFromCreatorRequest;
                toAmino(message: _179.QueryDenomsFromCreatorRequest): _179.QueryDenomsFromCreatorRequestAmino;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _179.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.QueryDenomsFromCreatorResponse;
                fromJSON(object: any): _179.QueryDenomsFromCreatorResponse;
                toJSON(message: _179.QueryDenomsFromCreatorResponse): unknown;
                fromPartial(object: Partial<_179.QueryDenomsFromCreatorResponse>): _179.QueryDenomsFromCreatorResponse;
                fromAmino(object: _179.QueryDenomsFromCreatorResponseAmino): _179.QueryDenomsFromCreatorResponse;
                toAmino(message: _179.QueryDenomsFromCreatorResponse): _179.QueryDenomsFromCreatorResponseAmino;
            };
            Params: {
                encode(message: _178.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.Params;
                fromJSON(object: any): _178.Params;
                toJSON(message: _178.Params): unknown;
                fromPartial(object: Partial<_178.Params>): _178.Params;
                fromAmino(object: _178.ParamsAmino): _178.Params;
                toAmino(message: _178.Params): _178.ParamsAmino;
            };
            GenesisState: {
                encode(message: _177.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.GenesisState;
                fromJSON(object: any): _177.GenesisState;
                toJSON(message: _177.GenesisState): unknown;
                fromPartial(object: Partial<_177.GenesisState>): _177.GenesisState;
                fromAmino(object: _177.GenesisStateAmino): _177.GenesisState;
                toAmino(message: _177.GenesisState): _177.GenesisStateAmino;
            };
            GenesisDenom: {
                encode(message: _177.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.GenesisDenom;
                fromJSON(object: any): _177.GenesisDenom;
                toJSON(message: _177.GenesisDenom): unknown;
                fromPartial(object: Partial<_177.GenesisDenom>): _177.GenesisDenom;
                fromAmino(object: _177.GenesisDenomAmino): _177.GenesisDenom;
                toAmino(message: _177.GenesisDenom): _177.GenesisDenomAmino;
            };
            DenomAuthorityMetadata: {
                encode(message: _176.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.DenomAuthorityMetadata;
                fromJSON(object: any): _176.DenomAuthorityMetadata;
                toJSON(message: _176.DenomAuthorityMetadata): unknown;
                fromPartial(object: Partial<_176.DenomAuthorityMetadata>): _176.DenomAuthorityMetadata;
                fromAmino(object: _176.DenomAuthorityMetadataAmino): _176.DenomAuthorityMetadata;
                toAmino(message: _176.DenomAuthorityMetadata): _176.DenomAuthorityMetadataAmino;
            };
        };
    }
    namespace twap {
        const v1beta1: {
            QueryClientImpl: typeof _312.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _182.ParamsRequest): Promise<_182.ParamsResponse>;
                arithmeticTwap(request: _182.ArithmeticTwapRequest): Promise<_182.ArithmeticTwapResponse>;
                arithmeticTwapToNow(request: _182.ArithmeticTwapToNowRequest): Promise<_182.ArithmeticTwapToNowResponse>;
            };
            TwapRecord: {
                encode(message: _183.TwapRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.TwapRecord;
                fromJSON(object: any): _183.TwapRecord;
                toJSON(message: _183.TwapRecord): unknown;
                fromPartial(object: Partial<_183.TwapRecord>): _183.TwapRecord;
                fromAmino(object: _183.TwapRecordAmino): _183.TwapRecord;
                toAmino(message: _183.TwapRecord): _183.TwapRecordAmino;
            };
            ArithmeticTwapRequest: {
                encode(message: _182.ArithmeticTwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.ArithmeticTwapRequest;
                fromJSON(object: any): _182.ArithmeticTwapRequest;
                toJSON(message: _182.ArithmeticTwapRequest): unknown;
                fromPartial(object: Partial<_182.ArithmeticTwapRequest>): _182.ArithmeticTwapRequest;
                fromAmino(object: _182.ArithmeticTwapRequestAmino): _182.ArithmeticTwapRequest;
                toAmino(message: _182.ArithmeticTwapRequest): _182.ArithmeticTwapRequestAmino;
            };
            ArithmeticTwapResponse: {
                encode(message: _182.ArithmeticTwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.ArithmeticTwapResponse;
                fromJSON(object: any): _182.ArithmeticTwapResponse;
                toJSON(message: _182.ArithmeticTwapResponse): unknown;
                fromPartial(object: Partial<_182.ArithmeticTwapResponse>): _182.ArithmeticTwapResponse;
                fromAmino(object: _182.ArithmeticTwapResponseAmino): _182.ArithmeticTwapResponse;
                toAmino(message: _182.ArithmeticTwapResponse): _182.ArithmeticTwapResponseAmino;
            };
            ArithmeticTwapToNowRequest: {
                encode(message: _182.ArithmeticTwapToNowRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.ArithmeticTwapToNowRequest;
                fromJSON(object: any): _182.ArithmeticTwapToNowRequest;
                toJSON(message: _182.ArithmeticTwapToNowRequest): unknown;
                fromPartial(object: Partial<_182.ArithmeticTwapToNowRequest>): _182.ArithmeticTwapToNowRequest;
                fromAmino(object: _182.ArithmeticTwapToNowRequestAmino): _182.ArithmeticTwapToNowRequest;
                toAmino(message: _182.ArithmeticTwapToNowRequest): _182.ArithmeticTwapToNowRequestAmino;
            };
            ArithmeticTwapToNowResponse: {
                encode(message: _182.ArithmeticTwapToNowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.ArithmeticTwapToNowResponse;
                fromJSON(object: any): _182.ArithmeticTwapToNowResponse;
                toJSON(message: _182.ArithmeticTwapToNowResponse): unknown;
                fromPartial(object: Partial<_182.ArithmeticTwapToNowResponse>): _182.ArithmeticTwapToNowResponse;
                fromAmino(object: _182.ArithmeticTwapToNowResponseAmino): _182.ArithmeticTwapToNowResponse;
                toAmino(message: _182.ArithmeticTwapToNowResponse): _182.ArithmeticTwapToNowResponseAmino;
            };
            ParamsRequest: {
                encode(_: _182.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.ParamsRequest;
                fromJSON(_: any): _182.ParamsRequest;
                toJSON(_: _182.ParamsRequest): unknown;
                fromPartial(_: Partial<_182.ParamsRequest>): _182.ParamsRequest;
                fromAmino(_: _182.ParamsRequestAmino): _182.ParamsRequest;
                toAmino(_: _182.ParamsRequest): _182.ParamsRequestAmino;
            };
            ParamsResponse: {
                encode(message: _182.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.ParamsResponse;
                fromJSON(object: any): _182.ParamsResponse;
                toJSON(message: _182.ParamsResponse): unknown;
                fromPartial(object: Partial<_182.ParamsResponse>): _182.ParamsResponse;
                fromAmino(object: _182.ParamsResponseAmino): _182.ParamsResponse;
                toAmino(message: _182.ParamsResponse): _182.ParamsResponseAmino;
            };
            Params: {
                encode(message: _181.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.Params;
                fromJSON(object: any): _181.Params;
                toJSON(message: _181.Params): unknown;
                fromPartial(object: Partial<_181.Params>): _181.Params;
                fromAmino(object: _181.ParamsAmino): _181.Params;
                toAmino(message: _181.Params): _181.ParamsAmino;
            };
            GenesisState: {
                encode(message: _181.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.GenesisState;
                fromJSON(object: any): _181.GenesisState;
                toJSON(message: _181.GenesisState): unknown;
                fromPartial(object: Partial<_181.GenesisState>): _181.GenesisState;
                fromAmino(object: _181.GenesisStateAmino): _181.GenesisState;
                toAmino(message: _181.GenesisState): _181.GenesisStateAmino;
            };
        };
    }
    namespace txfees {
        const v1beta1: {
            QueryClientImpl: typeof _313.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                feeTokens(request?: _187.QueryFeeTokensRequest): Promise<_187.QueryFeeTokensResponse>;
                denomSpotPrice(request: _187.QueryDenomSpotPriceRequest): Promise<_187.QueryDenomSpotPriceResponse>;
                denomPoolId(request: _187.QueryDenomPoolIdRequest): Promise<_187.QueryDenomPoolIdResponse>;
                baseDenom(request?: _187.QueryBaseDenomRequest): Promise<_187.QueryBaseDenomResponse>;
            };
            QueryFeeTokensRequest: {
                encode(_: _187.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryFeeTokensRequest;
                fromJSON(_: any): _187.QueryFeeTokensRequest;
                toJSON(_: _187.QueryFeeTokensRequest): unknown;
                fromPartial(_: Partial<_187.QueryFeeTokensRequest>): _187.QueryFeeTokensRequest;
                fromAmino(_: _187.QueryFeeTokensRequestAmino): _187.QueryFeeTokensRequest;
                toAmino(_: _187.QueryFeeTokensRequest): _187.QueryFeeTokensRequestAmino;
            };
            QueryFeeTokensResponse: {
                encode(message: _187.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryFeeTokensResponse;
                fromJSON(object: any): _187.QueryFeeTokensResponse;
                toJSON(message: _187.QueryFeeTokensResponse): unknown;
                fromPartial(object: Partial<_187.QueryFeeTokensResponse>): _187.QueryFeeTokensResponse;
                fromAmino(object: _187.QueryFeeTokensResponseAmino): _187.QueryFeeTokensResponse;
                toAmino(message: _187.QueryFeeTokensResponse): _187.QueryFeeTokensResponseAmino;
            };
            QueryDenomSpotPriceRequest: {
                encode(message: _187.QueryDenomSpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryDenomSpotPriceRequest;
                fromJSON(object: any): _187.QueryDenomSpotPriceRequest;
                toJSON(message: _187.QueryDenomSpotPriceRequest): unknown;
                fromPartial(object: Partial<_187.QueryDenomSpotPriceRequest>): _187.QueryDenomSpotPriceRequest;
                fromAmino(object: _187.QueryDenomSpotPriceRequestAmino): _187.QueryDenomSpotPriceRequest;
                toAmino(message: _187.QueryDenomSpotPriceRequest): _187.QueryDenomSpotPriceRequestAmino;
            };
            QueryDenomSpotPriceResponse: {
                encode(message: _187.QueryDenomSpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryDenomSpotPriceResponse;
                fromJSON(object: any): _187.QueryDenomSpotPriceResponse;
                toJSON(message: _187.QueryDenomSpotPriceResponse): unknown;
                fromPartial(object: Partial<_187.QueryDenomSpotPriceResponse>): _187.QueryDenomSpotPriceResponse;
                fromAmino(object: _187.QueryDenomSpotPriceResponseAmino): _187.QueryDenomSpotPriceResponse;
                toAmino(message: _187.QueryDenomSpotPriceResponse): _187.QueryDenomSpotPriceResponseAmino;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _187.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryDenomPoolIdRequest;
                fromJSON(object: any): _187.QueryDenomPoolIdRequest;
                toJSON(message: _187.QueryDenomPoolIdRequest): unknown;
                fromPartial(object: Partial<_187.QueryDenomPoolIdRequest>): _187.QueryDenomPoolIdRequest;
                fromAmino(object: _187.QueryDenomPoolIdRequestAmino): _187.QueryDenomPoolIdRequest;
                toAmino(message: _187.QueryDenomPoolIdRequest): _187.QueryDenomPoolIdRequestAmino;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _187.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryDenomPoolIdResponse;
                fromJSON(object: any): _187.QueryDenomPoolIdResponse;
                toJSON(message: _187.QueryDenomPoolIdResponse): unknown;
                fromPartial(object: Partial<_187.QueryDenomPoolIdResponse>): _187.QueryDenomPoolIdResponse;
                fromAmino(object: _187.QueryDenomPoolIdResponseAmino): _187.QueryDenomPoolIdResponse;
                toAmino(message: _187.QueryDenomPoolIdResponse): _187.QueryDenomPoolIdResponseAmino;
            };
            QueryBaseDenomRequest: {
                encode(_: _187.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryBaseDenomRequest;
                fromJSON(_: any): _187.QueryBaseDenomRequest;
                toJSON(_: _187.QueryBaseDenomRequest): unknown;
                fromPartial(_: Partial<_187.QueryBaseDenomRequest>): _187.QueryBaseDenomRequest;
                fromAmino(_: _187.QueryBaseDenomRequestAmino): _187.QueryBaseDenomRequest;
                toAmino(_: _187.QueryBaseDenomRequest): _187.QueryBaseDenomRequestAmino;
            };
            QueryBaseDenomResponse: {
                encode(message: _187.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryBaseDenomResponse;
                fromJSON(object: any): _187.QueryBaseDenomResponse;
                toJSON(message: _187.QueryBaseDenomResponse): unknown;
                fromPartial(object: Partial<_187.QueryBaseDenomResponse>): _187.QueryBaseDenomResponse;
                fromAmino(object: _187.QueryBaseDenomResponseAmino): _187.QueryBaseDenomResponse;
                toAmino(message: _187.QueryBaseDenomResponse): _187.QueryBaseDenomResponseAmino;
            };
            UpdateFeeTokenProposal: {
                encode(message: _186.UpdateFeeTokenProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.UpdateFeeTokenProposal;
                fromJSON(object: any): _186.UpdateFeeTokenProposal;
                toJSON(message: _186.UpdateFeeTokenProposal): unknown;
                fromPartial(object: Partial<_186.UpdateFeeTokenProposal>): _186.UpdateFeeTokenProposal;
                fromAmino(object: _186.UpdateFeeTokenProposalAmino): _186.UpdateFeeTokenProposal;
                toAmino(message: _186.UpdateFeeTokenProposal): _186.UpdateFeeTokenProposalAmino;
            };
            GenesisState: {
                encode(message: _185.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.GenesisState;
                fromJSON(object: any): _185.GenesisState;
                toJSON(message: _185.GenesisState): unknown;
                fromPartial(object: Partial<_185.GenesisState>): _185.GenesisState;
                fromAmino(object: _185.GenesisStateAmino): _185.GenesisState;
                toAmino(message: _185.GenesisState): _185.GenesisStateAmino;
            };
            FeeToken: {
                encode(message: _184.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.FeeToken;
                fromJSON(object: any): _184.FeeToken;
                toJSON(message: _184.FeeToken): unknown;
                fromPartial(object: Partial<_184.FeeToken>): _184.FeeToken;
                fromAmino(object: _184.FeeTokenAmino): _184.FeeToken;
                toAmino(message: _184.FeeToken): _184.FeeTokenAmino;
            };
        };
    }
    namespace valsetpref {
        const v1beta1: {
            MsgClientImpl: typeof _324.MsgClientImpl;
            QueryClientImpl: typeof _314.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                userValidatorPreferences(request: _188.UserValidatorPreferencesRequest): Promise<_188.UserValidatorPreferencesResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setValidatorSetPreference(value: _190.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateToValidatorSet(value: _190.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegateFromValidatorSet(value: _190.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redelegateValidatorSet(value: _190.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegationRewards(value: _190.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setValidatorSetPreference(value: _190.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _190.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _190.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _190.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _190.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _190.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _190.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _190.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _190.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _190.MsgWithdrawDelegationRewards;
                    };
                };
                toJSON: {
                    setValidatorSetPreference(value: _190.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegateToValidatorSet(value: _190.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegateFromValidatorSet(value: _190.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: unknown;
                    };
                    redelegateValidatorSet(value: _190.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegationRewards(value: _190.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setValidatorSetPreference(value: any): {
                        typeUrl: string;
                        value: _190.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: any): {
                        typeUrl: string;
                        value: _190.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: any): {
                        typeUrl: string;
                        value: _190.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: any): {
                        typeUrl: string;
                        value: _190.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: any): {
                        typeUrl: string;
                        value: _190.MsgWithdrawDelegationRewards;
                    };
                };
                fromPartial: {
                    setValidatorSetPreference(value: _190.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _190.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _190.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _190.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _190.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _190.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _190.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _190.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _190.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _190.MsgWithdrawDelegationRewards;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference": {
                    aminoType: string;
                    toAmino: (message: _190.MsgSetValidatorSetPreference) => _190.MsgSetValidatorSetPreferenceAmino;
                    fromAmino: (object: _190.MsgSetValidatorSetPreferenceAmino) => _190.MsgSetValidatorSetPreference;
                };
                "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _190.MsgDelegateToValidatorSet) => _190.MsgDelegateToValidatorSetAmino;
                    fromAmino: (object: _190.MsgDelegateToValidatorSetAmino) => _190.MsgDelegateToValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _190.MsgUndelegateFromValidatorSet) => _190.MsgUndelegateFromValidatorSetAmino;
                    fromAmino: (object: _190.MsgUndelegateFromValidatorSetAmino) => _190.MsgUndelegateFromValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _190.MsgRedelegateValidatorSet) => _190.MsgRedelegateValidatorSetAmino;
                    fromAmino: (object: _190.MsgRedelegateValidatorSetAmino) => _190.MsgRedelegateValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards": {
                    aminoType: string;
                    toAmino: (message: _190.MsgWithdrawDelegationRewards) => _190.MsgWithdrawDelegationRewardsAmino;
                    fromAmino: (object: _190.MsgWithdrawDelegationRewardsAmino) => _190.MsgWithdrawDelegationRewards;
                };
            };
            MsgSetValidatorSetPreference: {
                encode(message: _190.MsgSetValidatorSetPreference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgSetValidatorSetPreference;
                fromJSON(object: any): _190.MsgSetValidatorSetPreference;
                toJSON(message: _190.MsgSetValidatorSetPreference): unknown;
                fromPartial(object: Partial<_190.MsgSetValidatorSetPreference>): _190.MsgSetValidatorSetPreference;
                fromAmino(object: _190.MsgSetValidatorSetPreferenceAmino): _190.MsgSetValidatorSetPreference;
                toAmino(message: _190.MsgSetValidatorSetPreference): _190.MsgSetValidatorSetPreferenceAmino;
            };
            MsgSetValidatorSetPreferenceResponse: {
                encode(_: _190.MsgSetValidatorSetPreferenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgSetValidatorSetPreferenceResponse;
                fromJSON(_: any): _190.MsgSetValidatorSetPreferenceResponse;
                toJSON(_: _190.MsgSetValidatorSetPreferenceResponse): unknown;
                fromPartial(_: Partial<_190.MsgSetValidatorSetPreferenceResponse>): _190.MsgSetValidatorSetPreferenceResponse;
                fromAmino(_: _190.MsgSetValidatorSetPreferenceResponseAmino): _190.MsgSetValidatorSetPreferenceResponse;
                toAmino(_: _190.MsgSetValidatorSetPreferenceResponse): _190.MsgSetValidatorSetPreferenceResponseAmino;
            };
            MsgDelegateToValidatorSet: {
                encode(message: _190.MsgDelegateToValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgDelegateToValidatorSet;
                fromJSON(object: any): _190.MsgDelegateToValidatorSet;
                toJSON(message: _190.MsgDelegateToValidatorSet): unknown;
                fromPartial(object: Partial<_190.MsgDelegateToValidatorSet>): _190.MsgDelegateToValidatorSet;
                fromAmino(object: _190.MsgDelegateToValidatorSetAmino): _190.MsgDelegateToValidatorSet;
                toAmino(message: _190.MsgDelegateToValidatorSet): _190.MsgDelegateToValidatorSetAmino;
            };
            MsgDelegateToValidatorSetResponse: {
                encode(_: _190.MsgDelegateToValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgDelegateToValidatorSetResponse;
                fromJSON(_: any): _190.MsgDelegateToValidatorSetResponse;
                toJSON(_: _190.MsgDelegateToValidatorSetResponse): unknown;
                fromPartial(_: Partial<_190.MsgDelegateToValidatorSetResponse>): _190.MsgDelegateToValidatorSetResponse;
                fromAmino(_: _190.MsgDelegateToValidatorSetResponseAmino): _190.MsgDelegateToValidatorSetResponse;
                toAmino(_: _190.MsgDelegateToValidatorSetResponse): _190.MsgDelegateToValidatorSetResponseAmino;
            };
            MsgUndelegateFromValidatorSet: {
                encode(message: _190.MsgUndelegateFromValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgUndelegateFromValidatorSet;
                fromJSON(object: any): _190.MsgUndelegateFromValidatorSet;
                toJSON(message: _190.MsgUndelegateFromValidatorSet): unknown;
                fromPartial(object: Partial<_190.MsgUndelegateFromValidatorSet>): _190.MsgUndelegateFromValidatorSet;
                fromAmino(object: _190.MsgUndelegateFromValidatorSetAmino): _190.MsgUndelegateFromValidatorSet;
                toAmino(message: _190.MsgUndelegateFromValidatorSet): _190.MsgUndelegateFromValidatorSetAmino;
            };
            MsgUndelegateFromValidatorSetResponse: {
                encode(_: _190.MsgUndelegateFromValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgUndelegateFromValidatorSetResponse;
                fromJSON(_: any): _190.MsgUndelegateFromValidatorSetResponse;
                toJSON(_: _190.MsgUndelegateFromValidatorSetResponse): unknown;
                fromPartial(_: Partial<_190.MsgUndelegateFromValidatorSetResponse>): _190.MsgUndelegateFromValidatorSetResponse;
                fromAmino(_: _190.MsgUndelegateFromValidatorSetResponseAmino): _190.MsgUndelegateFromValidatorSetResponse;
                toAmino(_: _190.MsgUndelegateFromValidatorSetResponse): _190.MsgUndelegateFromValidatorSetResponseAmino;
            };
            MsgRedelegateValidatorSet: {
                encode(message: _190.MsgRedelegateValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgRedelegateValidatorSet;
                fromJSON(object: any): _190.MsgRedelegateValidatorSet;
                toJSON(message: _190.MsgRedelegateValidatorSet): unknown;
                fromPartial(object: Partial<_190.MsgRedelegateValidatorSet>): _190.MsgRedelegateValidatorSet;
                fromAmino(object: _190.MsgRedelegateValidatorSetAmino): _190.MsgRedelegateValidatorSet;
                toAmino(message: _190.MsgRedelegateValidatorSet): _190.MsgRedelegateValidatorSetAmino;
            };
            MsgRedelegateValidatorSetResponse: {
                encode(_: _190.MsgRedelegateValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgRedelegateValidatorSetResponse;
                fromJSON(_: any): _190.MsgRedelegateValidatorSetResponse;
                toJSON(_: _190.MsgRedelegateValidatorSetResponse): unknown;
                fromPartial(_: Partial<_190.MsgRedelegateValidatorSetResponse>): _190.MsgRedelegateValidatorSetResponse;
                fromAmino(_: _190.MsgRedelegateValidatorSetResponseAmino): _190.MsgRedelegateValidatorSetResponse;
                toAmino(_: _190.MsgRedelegateValidatorSetResponse): _190.MsgRedelegateValidatorSetResponseAmino;
            };
            MsgWithdrawDelegationRewards: {
                encode(message: _190.MsgWithdrawDelegationRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgWithdrawDelegationRewards;
                fromJSON(object: any): _190.MsgWithdrawDelegationRewards;
                toJSON(message: _190.MsgWithdrawDelegationRewards): unknown;
                fromPartial(object: Partial<_190.MsgWithdrawDelegationRewards>): _190.MsgWithdrawDelegationRewards;
                fromAmino(object: _190.MsgWithdrawDelegationRewardsAmino): _190.MsgWithdrawDelegationRewards;
                toAmino(message: _190.MsgWithdrawDelegationRewards): _190.MsgWithdrawDelegationRewardsAmino;
            };
            MsgWithdrawDelegationRewardsResponse: {
                encode(_: _190.MsgWithdrawDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgWithdrawDelegationRewardsResponse;
                fromJSON(_: any): _190.MsgWithdrawDelegationRewardsResponse;
                toJSON(_: _190.MsgWithdrawDelegationRewardsResponse): unknown;
                fromPartial(_: Partial<_190.MsgWithdrawDelegationRewardsResponse>): _190.MsgWithdrawDelegationRewardsResponse;
                fromAmino(_: _190.MsgWithdrawDelegationRewardsResponseAmino): _190.MsgWithdrawDelegationRewardsResponse;
                toAmino(_: _190.MsgWithdrawDelegationRewardsResponse): _190.MsgWithdrawDelegationRewardsResponseAmino;
            };
            ValidatorPreference: {
                encode(message: _189.ValidatorPreference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.ValidatorPreference;
                fromJSON(object: any): _189.ValidatorPreference;
                toJSON(message: _189.ValidatorPreference): unknown;
                fromPartial(object: Partial<_189.ValidatorPreference>): _189.ValidatorPreference;
                fromAmino(object: _189.ValidatorPreferenceAmino): _189.ValidatorPreference;
                toAmino(message: _189.ValidatorPreference): _189.ValidatorPreferenceAmino;
            };
            ValidatorSetPreferences: {
                encode(message: _189.ValidatorSetPreferences, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.ValidatorSetPreferences;
                fromJSON(object: any): _189.ValidatorSetPreferences;
                toJSON(message: _189.ValidatorSetPreferences): unknown;
                fromPartial(object: Partial<_189.ValidatorSetPreferences>): _189.ValidatorSetPreferences;
                fromAmino(object: _189.ValidatorSetPreferencesAmino): _189.ValidatorSetPreferences;
                toAmino(message: _189.ValidatorSetPreferences): _189.ValidatorSetPreferencesAmino;
            };
            UserValidatorPreferencesRequest: {
                encode(message: _188.UserValidatorPreferencesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.UserValidatorPreferencesRequest;
                fromJSON(object: any): _188.UserValidatorPreferencesRequest;
                toJSON(message: _188.UserValidatorPreferencesRequest): unknown;
                fromPartial(object: Partial<_188.UserValidatorPreferencesRequest>): _188.UserValidatorPreferencesRequest;
                fromAmino(object: _188.UserValidatorPreferencesRequestAmino): _188.UserValidatorPreferencesRequest;
                toAmino(message: _188.UserValidatorPreferencesRequest): _188.UserValidatorPreferencesRequestAmino;
            };
            UserValidatorPreferencesResponse: {
                encode(message: _188.UserValidatorPreferencesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.UserValidatorPreferencesResponse;
                fromJSON(object: any): _188.UserValidatorPreferencesResponse;
                toJSON(message: _188.UserValidatorPreferencesResponse): unknown;
                fromPartial(object: Partial<_188.UserValidatorPreferencesResponse>): _188.UserValidatorPreferencesResponse;
                fromAmino(object: _188.UserValidatorPreferencesResponseAmino): _188.UserValidatorPreferencesResponse;
                toAmino(message: _188.UserValidatorPreferencesResponse): _188.UserValidatorPreferencesResponseAmino;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            osmosis: {
                gamm: {
                    poolmodels: {
                        balancer: {
                            v1beta1: _315.MsgClientImpl;
                        };
                        stableswap: {
                            v1beta1: _316.MsgClientImpl;
                        };
                    };
                    v1beta1: _317.MsgClientImpl;
                };
                incentives: _318.MsgClientImpl;
                lockup: _319.MsgClientImpl;
                protorev: {
                    v1beta1: _320.MsgClientImpl;
                };
                superfluid: _321.MsgClientImpl;
                swaprouter: {
                    v1beta1: _322.MsgClientImpl;
                };
                tokenfactory: {
                    v1beta1: _323.MsgClientImpl;
                };
                valsetpref: {
                    v1beta1: _324.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            osmosis: {
                downtimedetector: {
                    v1beta1: {
                        recoveredSinceDowntimeOfLength(request: _129.RecoveredSinceDowntimeOfLengthRequest): Promise<_129.RecoveredSinceDowntimeOfLengthResponse>;
                    };
                };
                epochs: {
                    v1beta1: {
                        epochInfos(request?: _131.QueryEpochsInfoRequest): Promise<_131.QueryEpochsInfoResponse>;
                        currentEpoch(request: _131.QueryCurrentEpochRequest): Promise<_131.QueryCurrentEpochResponse>;
                    };
                };
                gamm: {
                    v1beta1: {
                        pools(request?: _134.QueryPoolsRequest): Promise<_134.QueryPoolsResponse>;
                        numPools(request?: _134.QueryNumPoolsRequest): Promise<_134.QueryNumPoolsResponse>;
                        totalLiquidity(request?: _134.QueryTotalLiquidityRequest): Promise<_134.QueryTotalLiquidityResponse>;
                        poolsWithFilter(request: _134.QueryPoolsWithFilterRequest): Promise<_134.QueryPoolsWithFilterResponse>;
                        pool(request: _134.QueryPoolRequest): Promise<_134.QueryPoolResponse>;
                        poolType(request: _134.QueryPoolTypeRequest): Promise<_134.QueryPoolTypeResponse>;
                        calcJoinPoolNoSwapShares(request: _134.QueryCalcJoinPoolNoSwapSharesRequest): Promise<_134.QueryCalcJoinPoolNoSwapSharesResponse>;
                        calcJoinPoolShares(request: _134.QueryCalcJoinPoolSharesRequest): Promise<_134.QueryCalcJoinPoolSharesResponse>;
                        calcExitPoolCoinsFromShares(request: _134.QueryCalcExitPoolCoinsFromSharesRequest): Promise<_134.QueryCalcExitPoolCoinsFromSharesResponse>;
                        poolParams(request: _134.QueryPoolParamsRequest): Promise<_134.QueryPoolParamsResponse>;
                        totalPoolLiquidity(request: _134.QueryTotalPoolLiquidityRequest): Promise<_134.QueryTotalPoolLiquidityResponse>;
                        totalShares(request: _134.QueryTotalSharesRequest): Promise<_134.QueryTotalSharesResponse>;
                        spotPrice(request: _134.QuerySpotPriceRequest): Promise<_134.QuerySpotPriceResponse>;
                        estimateSwapExactAmountIn(request: _134.QuerySwapExactAmountInRequest): Promise<_134.QuerySwapExactAmountInResponse>;
                        estimateSwapExactAmountOut(request: _134.QuerySwapExactAmountOutRequest): Promise<_134.QuerySwapExactAmountOutResponse>;
                    };
                    v2: {
                        spotPrice(request: _139.QuerySpotPriceRequest): Promise<_139.QuerySpotPriceResponse>;
                    };
                };
                ibcratelimit: {
                    v1beta1: {
                        params(request?: _141.QueryParamsRequest): Promise<_141.QueryParamsResponse>;
                    };
                };
                incentives: {
                    moduleToDistributeCoins(request?: _145.ModuleToDistributeCoinsRequest): Promise<_145.ModuleToDistributeCoinsResponse>;
                    gaugeByID(request: _145.GaugeByIDRequest): Promise<_145.GaugeByIDResponse>;
                    gauges(request?: _145.GaugesRequest): Promise<_145.GaugesResponse>;
                    activeGauges(request?: _145.ActiveGaugesRequest): Promise<_145.ActiveGaugesResponse>;
                    activeGaugesPerDenom(request: _145.ActiveGaugesPerDenomRequest): Promise<_145.ActiveGaugesPerDenomResponse>;
                    upcomingGauges(request?: _145.UpcomingGaugesRequest): Promise<_145.UpcomingGaugesResponse>;
                    upcomingGaugesPerDenom(request: _145.UpcomingGaugesPerDenomRequest): Promise<_145.UpcomingGaugesPerDenomResponse>;
                    rewardsEst(request: _145.RewardsEstRequest): Promise<_145.RewardsEstResponse>;
                    lockableDurations(request?: _145.QueryLockableDurationsRequest): Promise<_145.QueryLockableDurationsResponse>;
                };
                lockup: {
                    moduleBalance(request?: _150.ModuleBalanceRequest): Promise<_150.ModuleBalanceResponse>;
                    moduleLockedAmount(request?: _150.ModuleLockedAmountRequest): Promise<_150.ModuleLockedAmountResponse>;
                    accountUnlockableCoins(request: _150.AccountUnlockableCoinsRequest): Promise<_150.AccountUnlockableCoinsResponse>;
                    accountUnlockingCoins(request: _150.AccountUnlockingCoinsRequest): Promise<_150.AccountUnlockingCoinsResponse>;
                    accountLockedCoins(request: _150.AccountLockedCoinsRequest): Promise<_150.AccountLockedCoinsResponse>;
                    accountLockedPastTime(request: _150.AccountLockedPastTimeRequest): Promise<_150.AccountLockedPastTimeResponse>;
                    accountLockedPastTimeNotUnlockingOnly(request: _150.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_150.AccountLockedPastTimeNotUnlockingOnlyResponse>;
                    accountUnlockedBeforeTime(request: _150.AccountUnlockedBeforeTimeRequest): Promise<_150.AccountUnlockedBeforeTimeResponse>;
                    accountLockedPastTimeDenom(request: _150.AccountLockedPastTimeDenomRequest): Promise<_150.AccountLockedPastTimeDenomResponse>;
                    lockedDenom(request: _150.LockedDenomRequest): Promise<_150.LockedDenomResponse>;
                    lockedByID(request: _150.LockedRequest): Promise<_150.LockedResponse>;
                    syntheticLockupsByLockupID(request: _150.SyntheticLockupsByLockupIDRequest): Promise<_150.SyntheticLockupsByLockupIDResponse>;
                    accountLockedLongerDuration(request: _150.AccountLockedLongerDurationRequest): Promise<_150.AccountLockedLongerDurationResponse>;
                    accountLockedDuration(request: _150.AccountLockedDurationRequest): Promise<_150.AccountLockedDurationResponse>;
                    accountLockedLongerDurationNotUnlockingOnly(request: _150.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_150.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
                    accountLockedLongerDurationDenom(request: _150.AccountLockedLongerDurationDenomRequest): Promise<_150.AccountLockedLongerDurationDenomResponse>;
                    params(request?: _150.QueryParamsRequest): Promise<_150.QueryParamsResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _154.QueryParamsRequest): Promise<_154.QueryParamsResponse>;
                        epochProvisions(request?: _154.QueryEpochProvisionsRequest): Promise<_154.QueryEpochProvisionsResponse>;
                    };
                };
                poolincentives: {
                    v1beta1: {
                        gaugeIds(request: _158.QueryGaugeIdsRequest): Promise<_158.QueryGaugeIdsResponse>;
                        distrInfo(request?: _158.QueryDistrInfoRequest): Promise<_158.QueryDistrInfoResponse>;
                        params(request?: _158.QueryParamsRequest): Promise<_158.QueryParamsResponse>;
                        lockableDurations(request?: _158.QueryLockableDurationsRequest): Promise<_158.QueryLockableDurationsResponse>;
                        incentivizedPools(request?: _158.QueryIncentivizedPoolsRequest): Promise<_158.QueryIncentivizedPoolsResponse>;
                        externalIncentiveGauges(request?: _158.QueryExternalIncentiveGaugesRequest): Promise<_158.QueryExternalIncentiveGaugesResponse>;
                    };
                };
                protorev: {
                    v1beta1: {
                        params(request?: _163.QueryParamsRequest): Promise<_163.QueryParamsResponse>;
                        getProtoRevNumberOfTrades(request?: _163.QueryGetProtoRevNumberOfTradesRequest): Promise<_163.QueryGetProtoRevNumberOfTradesResponse>;
                        getProtoRevProfitsByDenom(request: _163.QueryGetProtoRevProfitsByDenomRequest): Promise<_163.QueryGetProtoRevProfitsByDenomResponse>;
                        getProtoRevAllProfits(request?: _163.QueryGetProtoRevAllProfitsRequest): Promise<_163.QueryGetProtoRevAllProfitsResponse>;
                        getProtoRevStatisticsByPool(request: _163.QueryGetProtoRevStatisticsByPoolRequest): Promise<_163.QueryGetProtoRevStatisticsByPoolResponse>;
                        getProtoRevAllStatistics(request?: _163.QueryGetProtoRevAllStatisticsRequest): Promise<_163.QueryGetProtoRevAllStatisticsResponse>;
                        getProtoRevTokenPairArbRoutes(request?: _163.QueryGetProtoRevTokenPairArbRoutesRequest): Promise<_163.QueryGetProtoRevTokenPairArbRoutesResponse>;
                    };
                };
                superfluid: {
                    params(request?: _168.QueryParamsRequest): Promise<_168.QueryParamsResponse>;
                    assetType(request: _168.AssetTypeRequest): Promise<_168.AssetTypeResponse>;
                    allAssets(request?: _168.AllAssetsRequest): Promise<_168.AllAssetsResponse>;
                    assetMultiplier(request: _168.AssetMultiplierRequest): Promise<_168.AssetMultiplierResponse>;
                    allIntermediaryAccounts(request?: _168.AllIntermediaryAccountsRequest): Promise<_168.AllIntermediaryAccountsResponse>;
                    connectedIntermediaryAccount(request: _168.ConnectedIntermediaryAccountRequest): Promise<_168.ConnectedIntermediaryAccountResponse>;
                    totalDelegationByValidatorForDenom(request: _168.QueryTotalDelegationByValidatorForDenomRequest): Promise<_168.QueryTotalDelegationByValidatorForDenomResponse>;
                    totalSuperfluidDelegations(request?: _168.TotalSuperfluidDelegationsRequest): Promise<_168.TotalSuperfluidDelegationsResponse>;
                    superfluidDelegationAmount(request: _168.SuperfluidDelegationAmountRequest): Promise<_168.SuperfluidDelegationAmountResponse>;
                    superfluidDelegationsByDelegator(request: _168.SuperfluidDelegationsByDelegatorRequest): Promise<_168.SuperfluidDelegationsByDelegatorResponse>;
                    superfluidUndelegationsByDelegator(request: _168.SuperfluidUndelegationsByDelegatorRequest): Promise<_168.SuperfluidUndelegationsByDelegatorResponse>;
                    superfluidDelegationsByValidatorDenom(request: _168.SuperfluidDelegationsByValidatorDenomRequest): Promise<_168.SuperfluidDelegationsByValidatorDenomResponse>;
                    estimateSuperfluidDelegatedAmountByValidatorDenom(request: _168.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_168.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
                    totalDelegationByDelegator(request: _168.QueryTotalDelegationByDelegatorRequest): Promise<_168.QueryTotalDelegationByDelegatorResponse>;
                    unpoolWhitelist(request?: _168.QueryUnpoolWhitelistRequest): Promise<_168.QueryUnpoolWhitelistResponse>;
                };
                swaprouter: {
                    v1beta1: {
                        params(request?: _173.ParamsRequest): Promise<_173.ParamsResponse>;
                        estimateSwapExactAmountIn(request: _173.EstimateSwapExactAmountInRequest): Promise<_173.EstimateSwapExactAmountInResponse>;
                        estimateSwapExactAmountOut(request: _173.EstimateSwapExactAmountOutRequest): Promise<_173.EstimateSwapExactAmountOutResponse>;
                        numPools(request?: _173.NumPoolsRequest): Promise<_173.NumPoolsResponse>;
                    };
                };
                tokenfactory: {
                    v1beta1: {
                        params(request?: _179.QueryParamsRequest): Promise<_179.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _179.QueryDenomAuthorityMetadataRequest): Promise<_179.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _179.QueryDenomsFromCreatorRequest): Promise<_179.QueryDenomsFromCreatorResponse>;
                    };
                };
                twap: {
                    v1beta1: {
                        params(request?: _182.ParamsRequest): Promise<_182.ParamsResponse>;
                        arithmeticTwap(request: _182.ArithmeticTwapRequest): Promise<_182.ArithmeticTwapResponse>;
                        arithmeticTwapToNow(request: _182.ArithmeticTwapToNowRequest): Promise<_182.ArithmeticTwapToNowResponse>;
                    };
                };
                txfees: {
                    v1beta1: {
                        feeTokens(request?: _187.QueryFeeTokensRequest): Promise<_187.QueryFeeTokensResponse>;
                        denomSpotPrice(request: _187.QueryDenomSpotPriceRequest): Promise<_187.QueryDenomSpotPriceResponse>;
                        denomPoolId(request: _187.QueryDenomPoolIdRequest): Promise<_187.QueryDenomPoolIdResponse>;
                        baseDenom(request?: _187.QueryBaseDenomRequest): Promise<_187.QueryBaseDenomResponse>;
                    };
                };
                valsetpref: {
                    v1beta1: {
                        userValidatorPreferences(request: _188.UserValidatorPreferencesRequest): Promise<_188.UserValidatorPreferencesResponse>;
                    };
                };
            };
        }>;
    };
}

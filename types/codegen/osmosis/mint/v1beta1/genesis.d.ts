import { Minter, MinterAmino, MinterSDKType, Params, ParamsAmino, ParamsSDKType } from "./mint";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the mint module's genesis state. */
export interface GenesisState {
    /** minter is an abstraction for holding current rewards information. */
    minter?: Minter;
    /** params defines all the paramaters of the mint module. */
    params?: Params;
    /**
     * reduction_started_epoch is the first epoch in which the reduction of mint
     * begins.
     */
    reductionStartedEpoch: Long;
}
/** GenesisState defines the mint module's genesis state. */
export interface GenesisStateAmino {
    /** minter is an abstraction for holding current rewards information. */
    minter?: MinterAmino;
    /** params defines all the paramaters of the mint module. */
    params?: ParamsAmino;
    /**
     * reduction_started_epoch is the first epoch in which the reduction of mint
     * begins.
     */
    reduction_started_epoch: string;
}
/** GenesisState defines the mint module's genesis state. */
export interface GenesisStateSDKType {
    minter?: MinterSDKType;
    params?: ParamsSDKType;
    reduction_started_epoch: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
};

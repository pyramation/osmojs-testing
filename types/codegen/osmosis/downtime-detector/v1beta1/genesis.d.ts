import { Downtime } from "./downtime_duration";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
export interface GenesisDowntimeEntry {
    duration: Downtime;
    lastDowntime?: Timestamp;
}
export interface GenesisDowntimeEntrySDKType {
    duration: Downtime;
    last_downtime?: TimestampSDKType;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisState {
    downtimes: GenesisDowntimeEntry[];
    lastBlockTime?: Timestamp;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisStateSDKType {
    downtimes: GenesisDowntimeEntrySDKType[];
    last_block_time?: TimestampSDKType;
}
export declare const GenesisDowntimeEntry: {
    encode(message: GenesisDowntimeEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisDowntimeEntry;
    fromJSON(object: any): GenesisDowntimeEntry;
    toJSON(message: GenesisDowntimeEntry): unknown;
    fromPartial(object: Partial<GenesisDowntimeEntry>): GenesisDowntimeEntry;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};

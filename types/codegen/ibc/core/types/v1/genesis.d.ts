import { GenesisState as GenesisState1 } from "../../client/v1/genesis";
import { GenesisStateAmino as GenesisState1Amino } from "../../client/v1/genesis";
import { GenesisStateSDKType as GenesisState1SDKType } from "../../client/v1/genesis";
import { GenesisState as GenesisState2 } from "../../connection/v1/genesis";
import { GenesisStateAmino as GenesisState2Amino } from "../../connection/v1/genesis";
import { GenesisStateSDKType as GenesisState2SDKType } from "../../connection/v1/genesis";
import { GenesisState as GenesisState3 } from "../../channel/v1/genesis";
import { GenesisStateAmino as GenesisState3Amino } from "../../channel/v1/genesis";
import { GenesisStateSDKType as GenesisState3SDKType } from "../../channel/v1/genesis";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the ibc module's genesis state. */
export interface GenesisState {
    /** ICS002 - Clients genesis state */
    clientGenesis?: GenesisState1;
    /** ICS003 - Connections genesis state */
    connectionGenesis?: GenesisState2;
    /** ICS004 - Channel genesis state */
    channelGenesis?: GenesisState3;
}
/** GenesisState defines the ibc module's genesis state. */
export interface GenesisStateAmino {
    /** ICS002 - Clients genesis state */
    client_genesis?: GenesisState1Amino;
    /** ICS003 - Connections genesis state */
    connection_genesis?: GenesisState2Amino;
    /** ICS004 - Channel genesis state */
    channel_genesis?: GenesisState3Amino;
}
/** GenesisState defines the ibc module's genesis state. */
export interface GenesisStateSDKType {
    client_genesis?: GenesisState1SDKType;
    connection_genesis?: GenesisState2SDKType;
    channel_genesis?: GenesisState3SDKType;
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

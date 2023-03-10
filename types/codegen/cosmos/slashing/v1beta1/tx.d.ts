import * as _m0 from "protobufjs/minimal";
/** MsgUnjail defines the Msg/Unjail request type */
export interface MsgUnjail {
    validatorAddr: string;
}
/** MsgUnjail defines the Msg/Unjail request type */
export interface MsgUnjailAmino {
    validator_addr: string;
}
/** MsgUnjail defines the Msg/Unjail request type */
export interface MsgUnjailSDKType {
    validator_addr: string;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */
export interface MsgUnjailResponse {
}
/** MsgUnjailResponse defines the Msg/Unjail response type */
export interface MsgUnjailResponseAmino {
}
/** MsgUnjailResponse defines the Msg/Unjail response type */
export interface MsgUnjailResponseSDKType {
}
export declare const MsgUnjail: {
    encode(message: MsgUnjail, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnjail;
    fromJSON(object: any): MsgUnjail;
    toJSON(message: MsgUnjail): unknown;
    fromPartial(object: Partial<MsgUnjail>): MsgUnjail;
    fromAmino(object: MsgUnjailAmino): MsgUnjail;
    toAmino(message: MsgUnjail): MsgUnjailAmino;
};
export declare const MsgUnjailResponse: {
    encode(_: MsgUnjailResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnjailResponse;
    fromJSON(_: any): MsgUnjailResponse;
    toJSON(_: MsgUnjailResponse): unknown;
    fromPartial(_: Partial<MsgUnjailResponse>): MsgUnjailResponse;
    fromAmino(_: MsgUnjailResponseAmino): MsgUnjailResponse;
    toAmino(_: MsgUnjailResponse): MsgUnjailResponseAmino;
};

import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
/** MsgCreateClient defines a message to create an IBC client */
export interface MsgCreateClient {
    /** light client state */
    clientState?: Any;
    /**
     * consensus state associated with the client that corresponds to a given
     * height.
     */
    consensusState?: Any;
    /** signer address */
    signer: string;
}
/** MsgCreateClient defines a message to create an IBC client */
export interface MsgCreateClientAmino {
    /** light client state */
    client_state?: AnyAmino;
    /**
     * consensus state associated with the client that corresponds to a given
     * height.
     */
    consensus_state?: AnyAmino;
    /** signer address */
    signer: string;
}
/** MsgCreateClient defines a message to create an IBC client */
export interface MsgCreateClientSDKType {
    client_state?: AnySDKType;
    consensus_state?: AnySDKType;
    signer: string;
}
/** MsgCreateClientResponse defines the Msg/CreateClient response type. */
export interface MsgCreateClientResponse {
}
/** MsgCreateClientResponse defines the Msg/CreateClient response type. */
export interface MsgCreateClientResponseAmino {
}
/** MsgCreateClientResponse defines the Msg/CreateClient response type. */
export interface MsgCreateClientResponseSDKType {
}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given header.
 */
export interface MsgUpdateClient {
    /** client unique identifier */
    clientId: string;
    /** header to update the light client */
    header?: Any;
    /** signer address */
    signer: string;
}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given header.
 */
export interface MsgUpdateClientAmino {
    /** client unique identifier */
    client_id: string;
    /** header to update the light client */
    header?: AnyAmino;
    /** signer address */
    signer: string;
}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given header.
 */
export interface MsgUpdateClientSDKType {
    client_id: string;
    header?: AnySDKType;
    signer: string;
}
/** MsgUpdateClientResponse defines the Msg/UpdateClient response type. */
export interface MsgUpdateClientResponse {
}
/** MsgUpdateClientResponse defines the Msg/UpdateClient response type. */
export interface MsgUpdateClientResponseAmino {
}
/** MsgUpdateClientResponse defines the Msg/UpdateClient response type. */
export interface MsgUpdateClientResponseSDKType {
}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 */
export interface MsgUpgradeClient {
    /** client unique identifier */
    clientId: string;
    /** upgraded client state */
    clientState?: Any;
    /**
     * upgraded consensus state, only contains enough information to serve as a
     * basis of trust in update logic
     */
    consensusState?: Any;
    /** proof that old chain committed to new client */
    proofUpgradeClient: Uint8Array;
    /** proof that old chain committed to new consensus state */
    proofUpgradeConsensusState: Uint8Array;
    /** signer address */
    signer: string;
}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 */
export interface MsgUpgradeClientAmino {
    /** client unique identifier */
    client_id: string;
    /** upgraded client state */
    client_state?: AnyAmino;
    /**
     * upgraded consensus state, only contains enough information to serve as a
     * basis of trust in update logic
     */
    consensus_state?: AnyAmino;
    /** proof that old chain committed to new client */
    proof_upgrade_client: Uint8Array;
    /** proof that old chain committed to new consensus state */
    proof_upgrade_consensus_state: Uint8Array;
    /** signer address */
    signer: string;
}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 */
export interface MsgUpgradeClientSDKType {
    client_id: string;
    client_state?: AnySDKType;
    consensus_state?: AnySDKType;
    proof_upgrade_client: Uint8Array;
    proof_upgrade_consensus_state: Uint8Array;
    signer: string;
}
/** MsgUpgradeClientResponse defines the Msg/UpgradeClient response type. */
export interface MsgUpgradeClientResponse {
}
/** MsgUpgradeClientResponse defines the Msg/UpgradeClient response type. */
export interface MsgUpgradeClientResponseAmino {
}
/** MsgUpgradeClientResponse defines the Msg/UpgradeClient response type. */
export interface MsgUpgradeClientResponseSDKType {
}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 */
export interface MsgSubmitMisbehaviour {
    /** client unique identifier */
    clientId: string;
    /** misbehaviour used for freezing the light client */
    misbehaviour?: Any;
    /** signer address */
    signer: string;
}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 */
export interface MsgSubmitMisbehaviourAmino {
    /** client unique identifier */
    client_id: string;
    /** misbehaviour used for freezing the light client */
    misbehaviour?: AnyAmino;
    /** signer address */
    signer: string;
}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 */
export interface MsgSubmitMisbehaviourSDKType {
    client_id: string;
    misbehaviour?: AnySDKType;
    signer: string;
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 */
export interface MsgSubmitMisbehaviourResponse {
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 */
export interface MsgSubmitMisbehaviourResponseAmino {
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 */
export interface MsgSubmitMisbehaviourResponseSDKType {
}
export declare const MsgCreateClient: {
    encode(message: MsgCreateClient, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClient;
    fromJSON(object: any): MsgCreateClient;
    toJSON(message: MsgCreateClient): unknown;
    fromPartial(object: Partial<MsgCreateClient>): MsgCreateClient;
    fromAmino(object: MsgCreateClientAmino): MsgCreateClient;
    toAmino(message: MsgCreateClient): MsgCreateClientAmino;
};
export declare const MsgCreateClientResponse: {
    encode(_: MsgCreateClientResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClientResponse;
    fromJSON(_: any): MsgCreateClientResponse;
    toJSON(_: MsgCreateClientResponse): unknown;
    fromPartial(_: Partial<MsgCreateClientResponse>): MsgCreateClientResponse;
    fromAmino(_: MsgCreateClientResponseAmino): MsgCreateClientResponse;
    toAmino(_: MsgCreateClientResponse): MsgCreateClientResponseAmino;
};
export declare const MsgUpdateClient: {
    encode(message: MsgUpdateClient, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClient;
    fromJSON(object: any): MsgUpdateClient;
    toJSON(message: MsgUpdateClient): unknown;
    fromPartial(object: Partial<MsgUpdateClient>): MsgUpdateClient;
    fromAmino(object: MsgUpdateClientAmino): MsgUpdateClient;
    toAmino(message: MsgUpdateClient): MsgUpdateClientAmino;
};
export declare const MsgUpdateClientResponse: {
    encode(_: MsgUpdateClientResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClientResponse;
    fromJSON(_: any): MsgUpdateClientResponse;
    toJSON(_: MsgUpdateClientResponse): unknown;
    fromPartial(_: Partial<MsgUpdateClientResponse>): MsgUpdateClientResponse;
    fromAmino(_: MsgUpdateClientResponseAmino): MsgUpdateClientResponse;
    toAmino(_: MsgUpdateClientResponse): MsgUpdateClientResponseAmino;
};
export declare const MsgUpgradeClient: {
    encode(message: MsgUpgradeClient, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpgradeClient;
    fromJSON(object: any): MsgUpgradeClient;
    toJSON(message: MsgUpgradeClient): unknown;
    fromPartial(object: Partial<MsgUpgradeClient>): MsgUpgradeClient;
    fromAmino(object: MsgUpgradeClientAmino): MsgUpgradeClient;
    toAmino(message: MsgUpgradeClient): MsgUpgradeClientAmino;
};
export declare const MsgUpgradeClientResponse: {
    encode(_: MsgUpgradeClientResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpgradeClientResponse;
    fromJSON(_: any): MsgUpgradeClientResponse;
    toJSON(_: MsgUpgradeClientResponse): unknown;
    fromPartial(_: Partial<MsgUpgradeClientResponse>): MsgUpgradeClientResponse;
    fromAmino(_: MsgUpgradeClientResponseAmino): MsgUpgradeClientResponse;
    toAmino(_: MsgUpgradeClientResponse): MsgUpgradeClientResponseAmino;
};
export declare const MsgSubmitMisbehaviour: {
    encode(message: MsgSubmitMisbehaviour, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitMisbehaviour;
    fromJSON(object: any): MsgSubmitMisbehaviour;
    toJSON(message: MsgSubmitMisbehaviour): unknown;
    fromPartial(object: Partial<MsgSubmitMisbehaviour>): MsgSubmitMisbehaviour;
    fromAmino(object: MsgSubmitMisbehaviourAmino): MsgSubmitMisbehaviour;
    toAmino(message: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourAmino;
};
export declare const MsgSubmitMisbehaviourResponse: {
    encode(_: MsgSubmitMisbehaviourResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitMisbehaviourResponse;
    fromJSON(_: any): MsgSubmitMisbehaviourResponse;
    toJSON(_: MsgSubmitMisbehaviourResponse): unknown;
    fromPartial(_: Partial<MsgSubmitMisbehaviourResponse>): MsgSubmitMisbehaviourResponse;
    fromAmino(_: MsgSubmitMisbehaviourResponseAmino): MsgSubmitMisbehaviourResponse;
    toAmino(_: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponseAmino;
};

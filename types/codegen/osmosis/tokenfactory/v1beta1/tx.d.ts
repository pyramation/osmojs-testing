import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Metadata, MetadataAmino, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 *
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 */
export interface MsgCreateDenom {
    sender: string;
    /** subdenom can be up to 44 "alphanumeric" characters long. */
    subdenom: string;
}
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 *
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 */
export interface MsgCreateDenomAmino {
    sender: string;
    /** subdenom can be up to 44 "alphanumeric" characters long. */
    subdenom: string;
}
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 *
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 */
export interface MsgCreateDenomSDKType {
    sender: string;
    subdenom: string;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponse {
    newTokenDenom: string;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponseAmino {
    new_token_denom: string;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponseSDKType {
    new_token_denom: string;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.  For now, we only support minting to the sender account
 */
export interface MsgMint {
    sender: string;
    amount?: Coin;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.  For now, we only support minting to the sender account
 */
export interface MsgMintAmino {
    sender: string;
    amount?: CoinAmino;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.  For now, we only support minting to the sender account
 */
export interface MsgMintSDKType {
    sender: string;
    amount?: CoinSDKType;
}
export interface MsgMintResponse {
}
export interface MsgMintResponseAmino {
}
export interface MsgMintResponseSDKType {
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 */
export interface MsgBurn {
    sender: string;
    amount?: Coin;
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 */
export interface MsgBurnAmino {
    sender: string;
    amount?: CoinAmino;
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 */
export interface MsgBurnSDKType {
    sender: string;
    amount?: CoinSDKType;
}
export interface MsgBurnResponse {
}
export interface MsgBurnResponseAmino {
}
export interface MsgBurnResponseSDKType {
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 */
export interface MsgChangeAdmin {
    sender: string;
    denom: string;
    newAdmin: string;
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 */
export interface MsgChangeAdminAmino {
    sender: string;
    denom: string;
    new_admin: string;
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 */
export interface MsgChangeAdminSDKType {
    sender: string;
    denom: string;
    new_admin: string;
}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 */
export interface MsgChangeAdminResponse {
}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 */
export interface MsgChangeAdminResponseAmino {
}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 */
export interface MsgChangeAdminResponseSDKType {
}
/**
 * MsgSetDenomMetadata is the sdk.Msg type for allowing an admin account to set
 * the denom's bank metadata
 */
export interface MsgSetDenomMetadata {
    sender: string;
    metadata?: Metadata;
}
/**
 * MsgSetDenomMetadata is the sdk.Msg type for allowing an admin account to set
 * the denom's bank metadata
 */
export interface MsgSetDenomMetadataAmino {
    sender: string;
    metadata?: MetadataAmino;
}
/**
 * MsgSetDenomMetadata is the sdk.Msg type for allowing an admin account to set
 * the denom's bank metadata
 */
export interface MsgSetDenomMetadataSDKType {
    sender: string;
    metadata?: MetadataSDKType;
}
/**
 * MsgSetDenomMetadataResponse defines the response structure for an executed
 * MsgSetDenomMetadata message.
 */
export interface MsgSetDenomMetadataResponse {
}
/**
 * MsgSetDenomMetadataResponse defines the response structure for an executed
 * MsgSetDenomMetadata message.
 */
export interface MsgSetDenomMetadataResponseAmino {
}
/**
 * MsgSetDenomMetadataResponse defines the response structure for an executed
 * MsgSetDenomMetadata message.
 */
export interface MsgSetDenomMetadataResponseSDKType {
}
export declare const MsgCreateDenom: {
    encode(message: MsgCreateDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenom;
    fromJSON(object: any): MsgCreateDenom;
    toJSON(message: MsgCreateDenom): unknown;
    fromPartial(object: Partial<MsgCreateDenom>): MsgCreateDenom;
    fromAmino(object: MsgCreateDenomAmino): MsgCreateDenom;
    toAmino(message: MsgCreateDenom): MsgCreateDenomAmino;
};
export declare const MsgCreateDenomResponse: {
    encode(message: MsgCreateDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenomResponse;
    fromJSON(object: any): MsgCreateDenomResponse;
    toJSON(message: MsgCreateDenomResponse): unknown;
    fromPartial(object: Partial<MsgCreateDenomResponse>): MsgCreateDenomResponse;
    fromAmino(object: MsgCreateDenomResponseAmino): MsgCreateDenomResponse;
    toAmino(message: MsgCreateDenomResponse): MsgCreateDenomResponseAmino;
};
export declare const MsgMint: {
    encode(message: MsgMint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMint;
    fromJSON(object: any): MsgMint;
    toJSON(message: MsgMint): unknown;
    fromPartial(object: Partial<MsgMint>): MsgMint;
    fromAmino(object: MsgMintAmino): MsgMint;
    toAmino(message: MsgMint): MsgMintAmino;
};
export declare const MsgMintResponse: {
    encode(_: MsgMintResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintResponse;
    fromJSON(_: any): MsgMintResponse;
    toJSON(_: MsgMintResponse): unknown;
    fromPartial(_: Partial<MsgMintResponse>): MsgMintResponse;
    fromAmino(_: MsgMintResponseAmino): MsgMintResponse;
    toAmino(_: MsgMintResponse): MsgMintResponseAmino;
};
export declare const MsgBurn: {
    encode(message: MsgBurn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurn;
    fromJSON(object: any): MsgBurn;
    toJSON(message: MsgBurn): unknown;
    fromPartial(object: Partial<MsgBurn>): MsgBurn;
    fromAmino(object: MsgBurnAmino): MsgBurn;
    toAmino(message: MsgBurn): MsgBurnAmino;
};
export declare const MsgBurnResponse: {
    encode(_: MsgBurnResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnResponse;
    fromJSON(_: any): MsgBurnResponse;
    toJSON(_: MsgBurnResponse): unknown;
    fromPartial(_: Partial<MsgBurnResponse>): MsgBurnResponse;
    fromAmino(_: MsgBurnResponseAmino): MsgBurnResponse;
    toAmino(_: MsgBurnResponse): MsgBurnResponseAmino;
};
export declare const MsgChangeAdmin: {
    encode(message: MsgChangeAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeAdmin;
    fromJSON(object: any): MsgChangeAdmin;
    toJSON(message: MsgChangeAdmin): unknown;
    fromPartial(object: Partial<MsgChangeAdmin>): MsgChangeAdmin;
    fromAmino(object: MsgChangeAdminAmino): MsgChangeAdmin;
    toAmino(message: MsgChangeAdmin): MsgChangeAdminAmino;
};
export declare const MsgChangeAdminResponse: {
    encode(_: MsgChangeAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeAdminResponse;
    fromJSON(_: any): MsgChangeAdminResponse;
    toJSON(_: MsgChangeAdminResponse): unknown;
    fromPartial(_: Partial<MsgChangeAdminResponse>): MsgChangeAdminResponse;
    fromAmino(_: MsgChangeAdminResponseAmino): MsgChangeAdminResponse;
    toAmino(_: MsgChangeAdminResponse): MsgChangeAdminResponseAmino;
};
export declare const MsgSetDenomMetadata: {
    encode(message: MsgSetDenomMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDenomMetadata;
    fromJSON(object: any): MsgSetDenomMetadata;
    toJSON(message: MsgSetDenomMetadata): unknown;
    fromPartial(object: Partial<MsgSetDenomMetadata>): MsgSetDenomMetadata;
    fromAmino(object: MsgSetDenomMetadataAmino): MsgSetDenomMetadata;
    toAmino(message: MsgSetDenomMetadata): MsgSetDenomMetadataAmino;
};
export declare const MsgSetDenomMetadataResponse: {
    encode(_: MsgSetDenomMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDenomMetadataResponse;
    fromJSON(_: any): MsgSetDenomMetadataResponse;
    toJSON(_: MsgSetDenomMetadataResponse): unknown;
    fromPartial(_: Partial<MsgSetDenomMetadataResponse>): MsgSetDenomMetadataResponse;
    fromAmino(_: MsgSetDenomMetadataResponseAmino): MsgSetDenomMetadataResponse;
    toAmino(_: MsgSetDenomMetadataResponse): MsgSetDenomMetadataResponseAmino;
};

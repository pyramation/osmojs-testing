import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsAmino, ParamsSDKType, BaseAccount, ModuleAccount } from "./auth";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequestSDKType {
    pagination?: PageRequestSDKType;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponse {
    /** accounts are the existing accounts */
    accounts: (BaseAccount & Any)[] | Any[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponseAmino {
    /** accounts are the existing accounts */
    accounts: AnyAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponseSDKType {
    accounts: AnySDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
    /** address defines the address to query for. */
    address: string;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequestAmino {
    /** address defines the address to query for. */
    address: string;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequestSDKType {
    address: string;
}
/** QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsRequest {
}
/** QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsRequestAmino {
}
/** QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
    /** account defines the account of the corresponding address. */
    account?: (BaseAccount & Any) | undefined;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponseAmino {
    /** account defines the account of the corresponding address. */
    account?: AnyAmino;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponseSDKType {
    account?: AnySDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsResponse {
    accounts: (ModuleAccount & Any)[] | Any[];
}
/** QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsResponseAmino {
    accounts: AnyAmino[];
}
/** QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsResponseSDKType {
    accounts: AnySDKType[];
}
/** Bech32PrefixRequest is the request type for Bech32Prefix rpc method */
export interface Bech32PrefixRequest {
}
/** Bech32PrefixRequest is the request type for Bech32Prefix rpc method */
export interface Bech32PrefixRequestAmino {
}
/** Bech32PrefixRequest is the request type for Bech32Prefix rpc method */
export interface Bech32PrefixRequestSDKType {
}
/** Bech32PrefixResponse is the response type for Bech32Prefix rpc method */
export interface Bech32PrefixResponse {
    bech32Prefix: string;
}
/** Bech32PrefixResponse is the response type for Bech32Prefix rpc method */
export interface Bech32PrefixResponseAmino {
    bech32_prefix: string;
}
/** Bech32PrefixResponse is the response type for Bech32Prefix rpc method */
export interface Bech32PrefixResponseSDKType {
    bech32_prefix: string;
}
/** AddressBytesToStringRequest is the request type for AddressString rpc method */
export interface AddressBytesToStringRequest {
    addressBytes: Uint8Array;
}
/** AddressBytesToStringRequest is the request type for AddressString rpc method */
export interface AddressBytesToStringRequestAmino {
    address_bytes: Uint8Array;
}
/** AddressBytesToStringRequest is the request type for AddressString rpc method */
export interface AddressBytesToStringRequestSDKType {
    address_bytes: Uint8Array;
}
/** AddressBytesToStringResponse is the response type for AddressString rpc method */
export interface AddressBytesToStringResponse {
    addressString: string;
}
/** AddressBytesToStringResponse is the response type for AddressString rpc method */
export interface AddressBytesToStringResponseAmino {
    address_string: string;
}
/** AddressBytesToStringResponse is the response type for AddressString rpc method */
export interface AddressBytesToStringResponseSDKType {
    address_string: string;
}
/** AddressStringToBytesRequest is the request type for AccountBytes rpc method */
export interface AddressStringToBytesRequest {
    addressString: string;
}
/** AddressStringToBytesRequest is the request type for AccountBytes rpc method */
export interface AddressStringToBytesRequestAmino {
    address_string: string;
}
/** AddressStringToBytesRequest is the request type for AccountBytes rpc method */
export interface AddressStringToBytesRequestSDKType {
    address_string: string;
}
/** AddressStringToBytesResponse is the response type for AddressBytes rpc method */
export interface AddressStringToBytesResponse {
    addressBytes: Uint8Array;
}
/** AddressStringToBytesResponse is the response type for AddressBytes rpc method */
export interface AddressStringToBytesResponseAmino {
    address_bytes: Uint8Array;
}
/** AddressStringToBytesResponse is the response type for AddressBytes rpc method */
export interface AddressStringToBytesResponseSDKType {
    address_bytes: Uint8Array;
}
export declare const QueryAccountsRequest: {
    encode(message: QueryAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsRequest;
    fromJSON(object: any): QueryAccountsRequest;
    toJSON(message: QueryAccountsRequest): unknown;
    fromPartial(object: Partial<QueryAccountsRequest>): QueryAccountsRequest;
    fromAmino(object: QueryAccountsRequestAmino): QueryAccountsRequest;
    toAmino(message: QueryAccountsRequest): QueryAccountsRequestAmino;
};
export declare const QueryAccountsResponse: {
    encode(message: QueryAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsResponse;
    fromJSON(object: any): QueryAccountsResponse;
    toJSON(message: QueryAccountsResponse): unknown;
    fromPartial(object: Partial<QueryAccountsResponse>): QueryAccountsResponse;
    fromAmino(object: QueryAccountsResponseAmino): QueryAccountsResponse;
    toAmino(message: QueryAccountsResponse): QueryAccountsResponseAmino;
};
export declare const QueryAccountRequest: {
    encode(message: QueryAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountRequest;
    fromJSON(object: any): QueryAccountRequest;
    toJSON(message: QueryAccountRequest): unknown;
    fromPartial(object: Partial<QueryAccountRequest>): QueryAccountRequest;
    fromAmino(object: QueryAccountRequestAmino): QueryAccountRequest;
    toAmino(message: QueryAccountRequest): QueryAccountRequestAmino;
};
export declare const QueryModuleAccountsRequest: {
    encode(_: QueryModuleAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountsRequest;
    fromJSON(_: any): QueryModuleAccountsRequest;
    toJSON(_: QueryModuleAccountsRequest): unknown;
    fromPartial(_: Partial<QueryModuleAccountsRequest>): QueryModuleAccountsRequest;
    fromAmino(_: QueryModuleAccountsRequestAmino): QueryModuleAccountsRequest;
    toAmino(_: QueryModuleAccountsRequest): QueryModuleAccountsRequestAmino;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
};
export declare const QueryAccountResponse: {
    encode(message: QueryAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountResponse;
    fromJSON(object: any): QueryAccountResponse;
    toJSON(message: QueryAccountResponse): unknown;
    fromPartial(object: Partial<QueryAccountResponse>): QueryAccountResponse;
    fromAmino(object: QueryAccountResponseAmino): QueryAccountResponse;
    toAmino(message: QueryAccountResponse): QueryAccountResponseAmino;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
};
export declare const QueryModuleAccountsResponse: {
    encode(message: QueryModuleAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountsResponse;
    fromJSON(object: any): QueryModuleAccountsResponse;
    toJSON(message: QueryModuleAccountsResponse): unknown;
    fromPartial(object: Partial<QueryModuleAccountsResponse>): QueryModuleAccountsResponse;
    fromAmino(object: QueryModuleAccountsResponseAmino): QueryModuleAccountsResponse;
    toAmino(message: QueryModuleAccountsResponse): QueryModuleAccountsResponseAmino;
};
export declare const Bech32PrefixRequest: {
    encode(_: Bech32PrefixRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Bech32PrefixRequest;
    fromJSON(_: any): Bech32PrefixRequest;
    toJSON(_: Bech32PrefixRequest): unknown;
    fromPartial(_: Partial<Bech32PrefixRequest>): Bech32PrefixRequest;
    fromAmino(_: Bech32PrefixRequestAmino): Bech32PrefixRequest;
    toAmino(_: Bech32PrefixRequest): Bech32PrefixRequestAmino;
};
export declare const Bech32PrefixResponse: {
    encode(message: Bech32PrefixResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Bech32PrefixResponse;
    fromJSON(object: any): Bech32PrefixResponse;
    toJSON(message: Bech32PrefixResponse): unknown;
    fromPartial(object: Partial<Bech32PrefixResponse>): Bech32PrefixResponse;
    fromAmino(object: Bech32PrefixResponseAmino): Bech32PrefixResponse;
    toAmino(message: Bech32PrefixResponse): Bech32PrefixResponseAmino;
};
export declare const AddressBytesToStringRequest: {
    encode(message: AddressBytesToStringRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddressBytesToStringRequest;
    fromJSON(object: any): AddressBytesToStringRequest;
    toJSON(message: AddressBytesToStringRequest): unknown;
    fromPartial(object: Partial<AddressBytesToStringRequest>): AddressBytesToStringRequest;
    fromAmino(object: AddressBytesToStringRequestAmino): AddressBytesToStringRequest;
    toAmino(message: AddressBytesToStringRequest): AddressBytesToStringRequestAmino;
};
export declare const AddressBytesToStringResponse: {
    encode(message: AddressBytesToStringResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddressBytesToStringResponse;
    fromJSON(object: any): AddressBytesToStringResponse;
    toJSON(message: AddressBytesToStringResponse): unknown;
    fromPartial(object: Partial<AddressBytesToStringResponse>): AddressBytesToStringResponse;
    fromAmino(object: AddressBytesToStringResponseAmino): AddressBytesToStringResponse;
    toAmino(message: AddressBytesToStringResponse): AddressBytesToStringResponseAmino;
};
export declare const AddressStringToBytesRequest: {
    encode(message: AddressStringToBytesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddressStringToBytesRequest;
    fromJSON(object: any): AddressStringToBytesRequest;
    toJSON(message: AddressStringToBytesRequest): unknown;
    fromPartial(object: Partial<AddressStringToBytesRequest>): AddressStringToBytesRequest;
    fromAmino(object: AddressStringToBytesRequestAmino): AddressStringToBytesRequest;
    toAmino(message: AddressStringToBytesRequest): AddressStringToBytesRequestAmino;
};
export declare const AddressStringToBytesResponse: {
    encode(message: AddressStringToBytesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddressStringToBytesResponse;
    fromJSON(object: any): AddressStringToBytesResponse;
    toJSON(message: AddressStringToBytesResponse): unknown;
    fromPartial(object: Partial<AddressStringToBytesResponse>): AddressStringToBytesResponse;
    fromAmino(object: AddressStringToBytesResponseAmino): AddressStringToBytesResponse;
    toAmino(message: AddressStringToBytesResponse): AddressStringToBytesResponseAmino;
};
export declare const Cosmos_authAccountI_InterfaceDecoder: (input: _m0.Reader | Uint8Array) => BaseAccount | Any;
export declare const Cosmos_authAccountI_FromAmino: (content: AnyAmino) => Any;
export declare const Cosmos_authAccountI_ToAmino: (content: Any) => AnyAmino | {
    type: string;
    value: import("./auth").BaseAccountAmino;
};
export declare const Cosmos_authModuleAccountI_InterfaceDecoder: (input: _m0.Reader | Uint8Array) => ModuleAccount | Any;
export declare const Cosmos_authModuleAccountI_FromAmino: (content: AnyAmino) => Any;
export declare const Cosmos_authModuleAccountI_ToAmino: (content: Any) => AnyAmino | {
    type: string;
    value: import("./auth").ModuleAccountAmino;
};

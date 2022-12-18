import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** AccessType permission types */
export declare enum AccessType {
    /** ACCESS_TYPE_UNSPECIFIED - AccessTypeUnspecified placeholder for empty value */
    ACCESS_TYPE_UNSPECIFIED = 0,
    /** ACCESS_TYPE_NOBODY - AccessTypeNobody forbidden */
    ACCESS_TYPE_NOBODY = 1,
    /**
     * ACCESS_TYPE_ONLY_ADDRESS - AccessTypeOnlyAddress restricted to a single address
     * Deprecated: use AccessTypeAnyOfAddresses instead
     */
    ACCESS_TYPE_ONLY_ADDRESS = 2,
    /** ACCESS_TYPE_EVERYBODY - AccessTypeEverybody unrestricted */
    ACCESS_TYPE_EVERYBODY = 3,
    /** ACCESS_TYPE_ANY_OF_ADDRESSES - AccessTypeAnyOfAddresses allow any of the addresses */
    ACCESS_TYPE_ANY_OF_ADDRESSES = 4,
    UNRECOGNIZED = -1
}
export declare const AccessTypeSDKType: typeof AccessType;
export declare const AccessTypeAmino: typeof AccessType;
export declare function accessTypeFromJSON(object: any): AccessType;
export declare function accessTypeToJSON(object: AccessType): string;
/** ContractCodeHistoryOperationType actions that caused a code change */
export declare enum ContractCodeHistoryOperationType {
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED - ContractCodeHistoryOperationTypeUnspecified placeholder for empty value */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED = 0,
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT - ContractCodeHistoryOperationTypeInit on chain contract instantiation */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT = 1,
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE - ContractCodeHistoryOperationTypeMigrate code migration */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE = 2,
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS - ContractCodeHistoryOperationTypeGenesis based on genesis data */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS = 3,
    UNRECOGNIZED = -1
}
export declare const ContractCodeHistoryOperationTypeSDKType: typeof ContractCodeHistoryOperationType;
export declare const ContractCodeHistoryOperationTypeAmino: typeof ContractCodeHistoryOperationType;
export declare function contractCodeHistoryOperationTypeFromJSON(object: any): ContractCodeHistoryOperationType;
export declare function contractCodeHistoryOperationTypeToJSON(object: ContractCodeHistoryOperationType): string;
/** AccessTypeParam */
export interface AccessTypeParam {
    value: AccessType;
}
/** AccessTypeParam */
export interface AccessTypeParamAmino {
    value: AccessType;
}
/** AccessTypeParam */
export interface AccessTypeParamSDKType {
    value: AccessType;
}
/** AccessConfig access control type. */
export interface AccessConfig {
    permission: AccessType;
    /**
     * Address
     * Deprecated: replaced by addresses
     */
    address: string;
    addresses: string[];
}
/** AccessConfig access control type. */
export interface AccessConfigAmino {
    permission: AccessType;
    /**
     * Address
     * Deprecated: replaced by addresses
     */
    address: string;
    addresses: string[];
}
/** AccessConfig access control type. */
export interface AccessConfigSDKType {
    permission: AccessType;
    address: string;
    addresses: string[];
}
/** Params defines the set of wasm parameters. */
export interface Params {
    codeUploadAccess?: AccessConfig;
    instantiateDefaultPermission: AccessType;
}
/** Params defines the set of wasm parameters. */
export interface ParamsAmino {
    code_upload_access?: AccessConfigAmino;
    instantiate_default_permission: AccessType;
}
/** Params defines the set of wasm parameters. */
export interface ParamsSDKType {
    code_upload_access?: AccessConfigSDKType;
    instantiate_default_permission: AccessType;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfo {
    /** CodeHash is the unique identifier created by wasmvm */
    codeHash: Uint8Array;
    /** Creator address who initially stored the code */
    creator: string;
    /** InstantiateConfig access control to apply on contract creation, optional */
    instantiateConfig?: AccessConfig;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfoAmino {
    /** CodeHash is the unique identifier created by wasmvm */
    code_hash: Uint8Array;
    /** Creator address who initially stored the code */
    creator: string;
    /** InstantiateConfig access control to apply on contract creation, optional */
    instantiate_config?: AccessConfigAmino;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfoSDKType {
    code_hash: Uint8Array;
    creator: string;
    instantiate_config?: AccessConfigSDKType;
}
/** ContractInfo stores a WASM contract instance */
export interface ContractInfo {
    /** CodeID is the reference to the stored Wasm code */
    codeId: Long;
    /** Creator address who initially instantiated the contract */
    creator: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Created Tx position when the contract was instantiated. */
    created?: AbsoluteTxPosition;
    ibcPortId: string;
    /**
     * Extension is an extension point to store custom metadata within the
     * persistence model.
     */
    extension?: (Any) | undefined;
}
/** ContractInfo stores a WASM contract instance */
export interface ContractInfoAmino {
    /** CodeID is the reference to the stored Wasm code */
    code_id: string;
    /** Creator address who initially instantiated the contract */
    creator: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Created Tx position when the contract was instantiated. */
    created?: AbsoluteTxPositionAmino;
    ibc_port_id: string;
    /**
     * Extension is an extension point to store custom metadata within the
     * persistence model.
     */
    extension?: AnyAmino;
}
/** ContractInfo stores a WASM contract instance */
export interface ContractInfoSDKType {
    code_id: Long;
    creator: string;
    admin: string;
    label: string;
    created?: AbsoluteTxPositionSDKType;
    ibc_port_id: string;
    extension?: AnySDKType;
}
/** ContractCodeHistoryEntry metadata to a contract. */
export interface ContractCodeHistoryEntry {
    operation: ContractCodeHistoryOperationType;
    /** CodeID is the reference to the stored WASM code */
    codeId: Long;
    /** Updated Tx position when the operation was executed. */
    updated?: AbsoluteTxPosition;
    msg: Uint8Array;
}
/** ContractCodeHistoryEntry metadata to a contract. */
export interface ContractCodeHistoryEntryAmino {
    operation: ContractCodeHistoryOperationType;
    /** CodeID is the reference to the stored WASM code */
    code_id: string;
    /** Updated Tx position when the operation was executed. */
    updated?: AbsoluteTxPositionAmino;
    msg: Uint8Array;
}
/** ContractCodeHistoryEntry metadata to a contract. */
export interface ContractCodeHistoryEntrySDKType {
    operation: ContractCodeHistoryOperationType;
    code_id: Long;
    updated?: AbsoluteTxPositionSDKType;
    msg: Uint8Array;
}
/**
 * AbsoluteTxPosition is a unique transaction position that allows for global
 * ordering of transactions.
 */
export interface AbsoluteTxPosition {
    /** BlockHeight is the block the contract was created at */
    blockHeight: Long;
    /**
     * TxIndex is a monotonic counter within the block (actual transaction index,
     * or gas consumed)
     */
    txIndex: Long;
}
/**
 * AbsoluteTxPosition is a unique transaction position that allows for global
 * ordering of transactions.
 */
export interface AbsoluteTxPositionAmino {
    /** BlockHeight is the block the contract was created at */
    block_height: string;
    /**
     * TxIndex is a monotonic counter within the block (actual transaction index,
     * or gas consumed)
     */
    tx_index: string;
}
/**
 * AbsoluteTxPosition is a unique transaction position that allows for global
 * ordering of transactions.
 */
export interface AbsoluteTxPositionSDKType {
    block_height: Long;
    tx_index: Long;
}
/** Model is a struct that holds a KV pair */
export interface Model {
    /** hex-encode key to read it better (this is often ascii) */
    key: Uint8Array;
    /** base64-encode raw value */
    value: Uint8Array;
}
/** Model is a struct that holds a KV pair */
export interface ModelAmino {
    /** hex-encode key to read it better (this is often ascii) */
    key: Uint8Array;
    /** base64-encode raw value */
    value: Uint8Array;
}
/** Model is a struct that holds a KV pair */
export interface ModelSDKType {
    key: Uint8Array;
    value: Uint8Array;
}
export declare const AccessTypeParam: {
    encode(message: AccessTypeParam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccessTypeParam;
    fromJSON(object: any): AccessTypeParam;
    toJSON(message: AccessTypeParam): unknown;
    fromPartial(object: Partial<AccessTypeParam>): AccessTypeParam;
    fromAmino(object: AccessTypeParamAmino): AccessTypeParam;
    toAmino(message: AccessTypeParam): AccessTypeParamAmino;
};
export declare const AccessConfig: {
    encode(message: AccessConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccessConfig;
    fromJSON(object: any): AccessConfig;
    toJSON(message: AccessConfig): unknown;
    fromPartial(object: Partial<AccessConfig>): AccessConfig;
    fromAmino(object: AccessConfigAmino): AccessConfig;
    toAmino(message: AccessConfig): AccessConfigAmino;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
};
export declare const CodeInfo: {
    encode(message: CodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CodeInfo;
    fromJSON(object: any): CodeInfo;
    toJSON(message: CodeInfo): unknown;
    fromPartial(object: Partial<CodeInfo>): CodeInfo;
    fromAmino(object: CodeInfoAmino): CodeInfo;
    toAmino(message: CodeInfo): CodeInfoAmino;
};
export declare const ContractInfo: {
    encode(message: ContractInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractInfo;
    fromJSON(object: any): ContractInfo;
    toJSON(message: ContractInfo): unknown;
    fromPartial(object: Partial<ContractInfo>): ContractInfo;
    fromAmino(object: ContractInfoAmino): ContractInfo;
    toAmino(message: ContractInfo): ContractInfoAmino;
};
export declare const ContractCodeHistoryEntry: {
    encode(message: ContractCodeHistoryEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractCodeHistoryEntry;
    fromJSON(object: any): ContractCodeHistoryEntry;
    toJSON(message: ContractCodeHistoryEntry): unknown;
    fromPartial(object: Partial<ContractCodeHistoryEntry>): ContractCodeHistoryEntry;
    fromAmino(object: ContractCodeHistoryEntryAmino): ContractCodeHistoryEntry;
    toAmino(message: ContractCodeHistoryEntry): ContractCodeHistoryEntryAmino;
};
export declare const AbsoluteTxPosition: {
    encode(message: AbsoluteTxPosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AbsoluteTxPosition;
    fromJSON(object: any): AbsoluteTxPosition;
    toJSON(message: AbsoluteTxPosition): unknown;
    fromPartial(object: Partial<AbsoluteTxPosition>): AbsoluteTxPosition;
    fromAmino(object: AbsoluteTxPositionAmino): AbsoluteTxPosition;
    toAmino(message: AbsoluteTxPosition): AbsoluteTxPositionAmino;
};
export declare const Model: {
    encode(message: Model, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Model;
    fromJSON(object: any): Model;
    toJSON(message: Model): unknown;
    fromPartial(object: Partial<Model>): Model;
    fromAmino(object: ModelAmino): Model;
    toAmino(message: Model): ModelAmino;
};
export declare const ContractInfoExtension_InterfaceDecoder: (input: _m0.Reader | Uint8Array) => Any;
export declare const ContractInfoExtension_FromAmino: (content: AnyAmino) => Any;
export declare const ContractInfoExtension_ToAmino: (content: Any) => AnyAmino;

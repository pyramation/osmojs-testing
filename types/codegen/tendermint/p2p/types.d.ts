import { Timestamp, TimestampAmino, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ProtocolVersion {
    p2p: Long;
    block: Long;
    app: Long;
}
export interface ProtocolVersionAmino {
    p2p: string;
    block: string;
    app: string;
}
export interface ProtocolVersionSDKType {
    p2p: Long;
    block: Long;
    app: Long;
}
export interface NodeInfo {
    protocolVersion?: ProtocolVersion;
    nodeId: string;
    listenAddr: string;
    network: string;
    version: string;
    channels: Uint8Array;
    moniker: string;
    other?: NodeInfoOther;
}
export interface NodeInfoAmino {
    protocol_version?: ProtocolVersionAmino;
    node_id: string;
    listen_addr: string;
    network: string;
    version: string;
    channels: Uint8Array;
    moniker: string;
    other?: NodeInfoOtherAmino;
}
export interface NodeInfoSDKType {
    protocol_version?: ProtocolVersionSDKType;
    node_id: string;
    listen_addr: string;
    network: string;
    version: string;
    channels: Uint8Array;
    moniker: string;
    other?: NodeInfoOtherSDKType;
}
export interface NodeInfoOther {
    txIndex: string;
    rpcAddress: string;
}
export interface NodeInfoOtherAmino {
    tx_index: string;
    rpc_address: string;
}
export interface NodeInfoOtherSDKType {
    tx_index: string;
    rpc_address: string;
}
export interface PeerInfo {
    id: string;
    addressInfo: PeerAddressInfo[];
    lastConnected?: Timestamp;
}
export interface PeerInfoAmino {
    id: string;
    address_info: PeerAddressInfoAmino[];
    last_connected?: TimestampAmino;
}
export interface PeerInfoSDKType {
    id: string;
    address_info: PeerAddressInfoSDKType[];
    last_connected?: TimestampSDKType;
}
export interface PeerAddressInfo {
    address: string;
    lastDialSuccess?: Timestamp;
    lastDialFailure?: Timestamp;
    dialFailures: number;
}
export interface PeerAddressInfoAmino {
    address: string;
    last_dial_success?: TimestampAmino;
    last_dial_failure?: TimestampAmino;
    dial_failures: number;
}
export interface PeerAddressInfoSDKType {
    address: string;
    last_dial_success?: TimestampSDKType;
    last_dial_failure?: TimestampSDKType;
    dial_failures: number;
}
export declare const ProtocolVersion: {
    encode(message: ProtocolVersion, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProtocolVersion;
    fromJSON(object: any): ProtocolVersion;
    toJSON(message: ProtocolVersion): unknown;
    fromPartial(object: Partial<ProtocolVersion>): ProtocolVersion;
    fromAmino(object: ProtocolVersionAmino): ProtocolVersion;
    toAmino(message: ProtocolVersion): ProtocolVersionAmino;
};
export declare const NodeInfo: {
    encode(message: NodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NodeInfo;
    fromJSON(object: any): NodeInfo;
    toJSON(message: NodeInfo): unknown;
    fromPartial(object: Partial<NodeInfo>): NodeInfo;
    fromAmino(object: NodeInfoAmino): NodeInfo;
    toAmino(message: NodeInfo): NodeInfoAmino;
};
export declare const NodeInfoOther: {
    encode(message: NodeInfoOther, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NodeInfoOther;
    fromJSON(object: any): NodeInfoOther;
    toJSON(message: NodeInfoOther): unknown;
    fromPartial(object: Partial<NodeInfoOther>): NodeInfoOther;
    fromAmino(object: NodeInfoOtherAmino): NodeInfoOther;
    toAmino(message: NodeInfoOther): NodeInfoOtherAmino;
};
export declare const PeerInfo: {
    encode(message: PeerInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeerInfo;
    fromJSON(object: any): PeerInfo;
    toJSON(message: PeerInfo): unknown;
    fromPartial(object: Partial<PeerInfo>): PeerInfo;
    fromAmino(object: PeerInfoAmino): PeerInfo;
    toAmino(message: PeerInfo): PeerInfoAmino;
};
export declare const PeerAddressInfo: {
    encode(message: PeerAddressInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeerAddressInfo;
    fromJSON(object: any): PeerAddressInfo;
    toJSON(message: PeerAddressInfo): unknown;
    fromPartial(object: Partial<PeerAddressInfo>): PeerAddressInfo;
    fromAmino(object: PeerAddressInfoAmino): PeerAddressInfo;
    toAmino(message: PeerAddressInfo): PeerAddressInfoAmino;
};

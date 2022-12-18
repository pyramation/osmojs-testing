import { MerklePrefix, MerklePrefixAmino, MerklePrefixSDKType } from "../../commitment/v1/commitment";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * State defines if a connection is in one of the following states:
 * INIT, TRYOPEN, OPEN or UNINITIALIZED.
 */
export declare enum State {
    /** STATE_UNINITIALIZED_UNSPECIFIED - Default State */
    STATE_UNINITIALIZED_UNSPECIFIED = 0,
    /** STATE_INIT - A connection end has just started the opening handshake. */
    STATE_INIT = 1,
    /**
     * STATE_TRYOPEN - A connection end has acknowledged the handshake step on the counterparty
     * chain.
     */
    STATE_TRYOPEN = 2,
    /** STATE_OPEN - A connection end has completed the handshake. */
    STATE_OPEN = 3,
    UNRECOGNIZED = -1
}
export declare const StateSDKType: typeof State;
export declare const StateAmino: typeof State;
export declare function stateFromJSON(object: any): State;
export declare function stateToJSON(object: State): string;
/**
 * ConnectionEnd defines a stateful object on a chain connected to another
 * separate one.
 * NOTE: there must only be 2 defined ConnectionEnds to establish
 * a connection between two chains.
 */
export interface ConnectionEnd {
    /** client associated with this connection. */
    clientId: string;
    /**
     * IBC version which can be utilised to determine encodings or protocols for
     * channels or packets utilising this connection.
     */
    versions: Version[];
    /** current state of the connection end. */
    state: State;
    /** counterparty chain associated with this connection. */
    counterparty?: Counterparty;
    /**
     * delay period that must pass before a consensus state can be used for
     * packet-verification NOTE: delay period logic is only implemented by some
     * clients.
     */
    delayPeriod: Long;
}
/**
 * ConnectionEnd defines a stateful object on a chain connected to another
 * separate one.
 * NOTE: there must only be 2 defined ConnectionEnds to establish
 * a connection between two chains.
 */
export interface ConnectionEndAmino {
    /** client associated with this connection. */
    client_id: string;
    /**
     * IBC version which can be utilised to determine encodings or protocols for
     * channels or packets utilising this connection.
     */
    versions: VersionAmino[];
    /** current state of the connection end. */
    state: State;
    /** counterparty chain associated with this connection. */
    counterparty?: CounterpartyAmino;
    /**
     * delay period that must pass before a consensus state can be used for
     * packet-verification NOTE: delay period logic is only implemented by some
     * clients.
     */
    delay_period: string;
}
/**
 * ConnectionEnd defines a stateful object on a chain connected to another
 * separate one.
 * NOTE: there must only be 2 defined ConnectionEnds to establish
 * a connection between two chains.
 */
export interface ConnectionEndSDKType {
    client_id: string;
    versions: VersionSDKType[];
    state: State;
    counterparty?: CounterpartySDKType;
    delay_period: Long;
}
/**
 * IdentifiedConnection defines a connection with additional connection
 * identifier field.
 */
export interface IdentifiedConnection {
    /** connection identifier. */
    id: string;
    /** client associated with this connection. */
    clientId: string;
    /**
     * IBC version which can be utilised to determine encodings or protocols for
     * channels or packets utilising this connection
     */
    versions: Version[];
    /** current state of the connection end. */
    state: State;
    /** counterparty chain associated with this connection. */
    counterparty?: Counterparty;
    /** delay period associated with this connection. */
    delayPeriod: Long;
}
/**
 * IdentifiedConnection defines a connection with additional connection
 * identifier field.
 */
export interface IdentifiedConnectionAmino {
    /** connection identifier. */
    id: string;
    /** client associated with this connection. */
    client_id: string;
    /**
     * IBC version which can be utilised to determine encodings or protocols for
     * channels or packets utilising this connection
     */
    versions: VersionAmino[];
    /** current state of the connection end. */
    state: State;
    /** counterparty chain associated with this connection. */
    counterparty?: CounterpartyAmino;
    /** delay period associated with this connection. */
    delay_period: string;
}
/**
 * IdentifiedConnection defines a connection with additional connection
 * identifier field.
 */
export interface IdentifiedConnectionSDKType {
    id: string;
    client_id: string;
    versions: VersionSDKType[];
    state: State;
    counterparty?: CounterpartySDKType;
    delay_period: Long;
}
/** Counterparty defines the counterparty chain associated with a connection end. */
export interface Counterparty {
    /**
     * identifies the client on the counterparty chain associated with a given
     * connection.
     */
    clientId: string;
    /**
     * identifies the connection end on the counterparty chain associated with a
     * given connection.
     */
    connectionId: string;
    /** commitment merkle prefix of the counterparty chain. */
    prefix?: MerklePrefix;
}
/** Counterparty defines the counterparty chain associated with a connection end. */
export interface CounterpartyAmino {
    /**
     * identifies the client on the counterparty chain associated with a given
     * connection.
     */
    client_id: string;
    /**
     * identifies the connection end on the counterparty chain associated with a
     * given connection.
     */
    connection_id: string;
    /** commitment merkle prefix of the counterparty chain. */
    prefix?: MerklePrefixAmino;
}
/** Counterparty defines the counterparty chain associated with a connection end. */
export interface CounterpartySDKType {
    client_id: string;
    connection_id: string;
    prefix?: MerklePrefixSDKType;
}
/** ClientPaths define all the connection paths for a client state. */
export interface ClientPaths {
    /** list of connection paths */
    paths: string[];
}
/** ClientPaths define all the connection paths for a client state. */
export interface ClientPathsAmino {
    /** list of connection paths */
    paths: string[];
}
/** ClientPaths define all the connection paths for a client state. */
export interface ClientPathsSDKType {
    paths: string[];
}
/** ConnectionPaths define all the connection paths for a given client state. */
export interface ConnectionPaths {
    /** client state unique identifier */
    clientId: string;
    /** list of connection paths */
    paths: string[];
}
/** ConnectionPaths define all the connection paths for a given client state. */
export interface ConnectionPathsAmino {
    /** client state unique identifier */
    client_id: string;
    /** list of connection paths */
    paths: string[];
}
/** ConnectionPaths define all the connection paths for a given client state. */
export interface ConnectionPathsSDKType {
    client_id: string;
    paths: string[];
}
/**
 * Version defines the versioning scheme used to negotiate the IBC verison in
 * the connection handshake.
 */
export interface Version {
    /** unique version identifier */
    identifier: string;
    /** list of features compatible with the specified identifier */
    features: string[];
}
/**
 * Version defines the versioning scheme used to negotiate the IBC verison in
 * the connection handshake.
 */
export interface VersionAmino {
    /** unique version identifier */
    identifier: string;
    /** list of features compatible with the specified identifier */
    features: string[];
}
/**
 * Version defines the versioning scheme used to negotiate the IBC verison in
 * the connection handshake.
 */
export interface VersionSDKType {
    identifier: string;
    features: string[];
}
/** Params defines the set of Connection parameters. */
export interface Params {
    /**
     * maximum expected time per block (in nanoseconds), used to enforce block delay. This parameter should reflect the
     * largest amount of time that the chain might reasonably take to produce the next block under normal operating
     * conditions. A safe choice is 3-5x the expected time per block.
     */
    maxExpectedTimePerBlock: Long;
}
/** Params defines the set of Connection parameters. */
export interface ParamsAmino {
    /**
     * maximum expected time per block (in nanoseconds), used to enforce block delay. This parameter should reflect the
     * largest amount of time that the chain might reasonably take to produce the next block under normal operating
     * conditions. A safe choice is 3-5x the expected time per block.
     */
    max_expected_time_per_block: string;
}
/** Params defines the set of Connection parameters. */
export interface ParamsSDKType {
    max_expected_time_per_block: Long;
}
export declare const ConnectionEnd: {
    encode(message: ConnectionEnd, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionEnd;
    fromJSON(object: any): ConnectionEnd;
    toJSON(message: ConnectionEnd): unknown;
    fromPartial(object: Partial<ConnectionEnd>): ConnectionEnd;
    fromAmino(object: ConnectionEndAmino): ConnectionEnd;
    toAmino(message: ConnectionEnd): ConnectionEndAmino;
};
export declare const IdentifiedConnection: {
    encode(message: IdentifiedConnection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IdentifiedConnection;
    fromJSON(object: any): IdentifiedConnection;
    toJSON(message: IdentifiedConnection): unknown;
    fromPartial(object: Partial<IdentifiedConnection>): IdentifiedConnection;
    fromAmino(object: IdentifiedConnectionAmino): IdentifiedConnection;
    toAmino(message: IdentifiedConnection): IdentifiedConnectionAmino;
};
export declare const Counterparty: {
    encode(message: Counterparty, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Counterparty;
    fromJSON(object: any): Counterparty;
    toJSON(message: Counterparty): unknown;
    fromPartial(object: Partial<Counterparty>): Counterparty;
    fromAmino(object: CounterpartyAmino): Counterparty;
    toAmino(message: Counterparty): CounterpartyAmino;
};
export declare const ClientPaths: {
    encode(message: ClientPaths, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientPaths;
    fromJSON(object: any): ClientPaths;
    toJSON(message: ClientPaths): unknown;
    fromPartial(object: Partial<ClientPaths>): ClientPaths;
    fromAmino(object: ClientPathsAmino): ClientPaths;
    toAmino(message: ClientPaths): ClientPathsAmino;
};
export declare const ConnectionPaths: {
    encode(message: ConnectionPaths, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionPaths;
    fromJSON(object: any): ConnectionPaths;
    toJSON(message: ConnectionPaths): unknown;
    fromPartial(object: Partial<ConnectionPaths>): ConnectionPaths;
    fromAmino(object: ConnectionPathsAmino): ConnectionPaths;
    toAmino(message: ConnectionPaths): ConnectionPathsAmino;
};
export declare const Version: {
    encode(message: Version, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Version;
    fromJSON(object: any): Version;
    toJSON(message: Version): unknown;
    fromPartial(object: Partial<Version>): Version;
    fromAmino(object: VersionAmino): Version;
    toAmino(message: Version): VersionAmino;
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

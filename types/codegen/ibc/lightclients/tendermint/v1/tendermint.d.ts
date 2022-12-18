import { Duration, DurationAmino, DurationSDKType } from "../../../../google/protobuf/duration";
import { Height, HeightAmino, HeightSDKType } from "../../../core/client/v1/client";
import { ProofSpec, ProofSpecAmino, ProofSpecSDKType } from "../../../../confio/proofs";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../../google/protobuf/timestamp";
import { MerkleRoot, MerkleRootAmino, MerkleRootSDKType } from "../../../core/commitment/v1/commitment";
import { SignedHeader, SignedHeaderAmino, SignedHeaderSDKType } from "../../../../tendermint/types/types";
import { ValidatorSet, ValidatorSetAmino, ValidatorSetSDKType } from "../../../../tendermint/types/validator";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
/**
 * ClientState from Tendermint tracks the current validator set, latest height,
 * and a possible frozen height.
 */
export interface ClientState {
    chainId: string;
    trustLevel?: Fraction;
    /**
     * duration of the period since the LastestTimestamp during which the
     * submitted headers are valid for upgrade
     */
    trustingPeriod?: Duration;
    /** duration of the staking unbonding period */
    unbondingPeriod?: Duration;
    /** defines how much new (untrusted) header's Time can drift into the future. */
    maxClockDrift?: Duration;
    /** Block height when the client was frozen due to a misbehaviour */
    frozenHeight?: Height;
    /** Latest height the client was updated to */
    latestHeight?: Height;
    /** Proof specifications used in verifying counterparty state */
    proofSpecs: ProofSpec[];
    /**
     * Path at which next upgraded client will be committed.
     * Each element corresponds to the key for a single CommitmentProof in the
     * chained proof. NOTE: ClientState must stored under
     * `{upgradePath}/{upgradeHeight}/clientState` ConsensusState must be stored
     * under `{upgradepath}/{upgradeHeight}/consensusState` For SDK chains using
     * the default upgrade module, upgrade_path should be []string{"upgrade",
     * "upgradedIBCState"}`
     */
    upgradePath: string[];
    /**
     * This flag, when set to true, will allow governance to recover a client
     * which has expired
     */
    allowUpdateAfterExpiry: boolean;
    /**
     * This flag, when set to true, will allow governance to unfreeze a client
     * whose chain has experienced a misbehaviour event
     */
    allowUpdateAfterMisbehaviour: boolean;
}
/**
 * ClientState from Tendermint tracks the current validator set, latest height,
 * and a possible frozen height.
 */
export interface ClientStateAmino {
    chain_id: string;
    trust_level?: FractionAmino;
    /**
     * duration of the period since the LastestTimestamp during which the
     * submitted headers are valid for upgrade
     */
    trusting_period?: DurationAmino;
    /** duration of the staking unbonding period */
    unbonding_period?: DurationAmino;
    /** defines how much new (untrusted) header's Time can drift into the future. */
    max_clock_drift?: DurationAmino;
    /** Block height when the client was frozen due to a misbehaviour */
    frozen_height?: HeightAmino;
    /** Latest height the client was updated to */
    latest_height?: HeightAmino;
    /** Proof specifications used in verifying counterparty state */
    proof_specs: ProofSpecAmino[];
    /**
     * Path at which next upgraded client will be committed.
     * Each element corresponds to the key for a single CommitmentProof in the
     * chained proof. NOTE: ClientState must stored under
     * `{upgradePath}/{upgradeHeight}/clientState` ConsensusState must be stored
     * under `{upgradepath}/{upgradeHeight}/consensusState` For SDK chains using
     * the default upgrade module, upgrade_path should be []string{"upgrade",
     * "upgradedIBCState"}`
     */
    upgrade_path: string[];
    /**
     * This flag, when set to true, will allow governance to recover a client
     * which has expired
     */
    allow_update_after_expiry: boolean;
    /**
     * This flag, when set to true, will allow governance to unfreeze a client
     * whose chain has experienced a misbehaviour event
     */
    allow_update_after_misbehaviour: boolean;
}
/**
 * ClientState from Tendermint tracks the current validator set, latest height,
 * and a possible frozen height.
 */
export interface ClientStateSDKType {
    chain_id: string;
    trust_level?: FractionSDKType;
    trusting_period?: DurationSDKType;
    unbonding_period?: DurationSDKType;
    max_clock_drift?: DurationSDKType;
    frozen_height?: HeightSDKType;
    latest_height?: HeightSDKType;
    proof_specs: ProofSpecSDKType[];
    upgrade_path: string[];
    allow_update_after_expiry: boolean;
    allow_update_after_misbehaviour: boolean;
}
/** ConsensusState defines the consensus state from Tendermint. */
export interface ConsensusState {
    /**
     * timestamp that corresponds to the block height in which the ConsensusState
     * was stored.
     */
    timestamp?: Timestamp;
    /** commitment root (i.e app hash) */
    root?: MerkleRoot;
    nextValidatorsHash: Uint8Array;
}
/** ConsensusState defines the consensus state from Tendermint. */
export interface ConsensusStateAmino {
    /**
     * timestamp that corresponds to the block height in which the ConsensusState
     * was stored.
     */
    timestamp?: TimestampAmino;
    /** commitment root (i.e app hash) */
    root?: MerkleRootAmino;
    next_validators_hash: Uint8Array;
}
/** ConsensusState defines the consensus state from Tendermint. */
export interface ConsensusStateSDKType {
    timestamp?: TimestampSDKType;
    root?: MerkleRootSDKType;
    next_validators_hash: Uint8Array;
}
/**
 * Misbehaviour is a wrapper over two conflicting Headers
 * that implements Misbehaviour interface expected by ICS-02
 */
export interface Misbehaviour {
    clientId: string;
    header1?: Header;
    header2?: Header;
}
/**
 * Misbehaviour is a wrapper over two conflicting Headers
 * that implements Misbehaviour interface expected by ICS-02
 */
export interface MisbehaviourAmino {
    client_id: string;
    header_1?: HeaderAmino;
    header_2?: HeaderAmino;
}
/**
 * Misbehaviour is a wrapper over two conflicting Headers
 * that implements Misbehaviour interface expected by ICS-02
 */
export interface MisbehaviourSDKType {
    client_id: string;
    header_1?: HeaderSDKType;
    header_2?: HeaderSDKType;
}
/**
 * Header defines the Tendermint client consensus Header.
 * It encapsulates all the information necessary to update from a trusted
 * Tendermint ConsensusState. The inclusion of TrustedHeight and
 * TrustedValidators allows this update to process correctly, so long as the
 * ConsensusState for the TrustedHeight exists, this removes race conditions
 * among relayers The SignedHeader and ValidatorSet are the new untrusted update
 * fields for the client. The TrustedHeight is the height of a stored
 * ConsensusState on the client that will be used to verify the new untrusted
 * header. The Trusted ConsensusState must be within the unbonding period of
 * current time in order to correctly verify, and the TrustedValidators must
 * hash to TrustedConsensusState.NextValidatorsHash since that is the last
 * trusted validator set at the TrustedHeight.
 */
export interface Header {
    signedHeader?: SignedHeader;
    validatorSet?: ValidatorSet;
    trustedHeight?: Height;
    trustedValidators?: ValidatorSet;
}
/**
 * Header defines the Tendermint client consensus Header.
 * It encapsulates all the information necessary to update from a trusted
 * Tendermint ConsensusState. The inclusion of TrustedHeight and
 * TrustedValidators allows this update to process correctly, so long as the
 * ConsensusState for the TrustedHeight exists, this removes race conditions
 * among relayers The SignedHeader and ValidatorSet are the new untrusted update
 * fields for the client. The TrustedHeight is the height of a stored
 * ConsensusState on the client that will be used to verify the new untrusted
 * header. The Trusted ConsensusState must be within the unbonding period of
 * current time in order to correctly verify, and the TrustedValidators must
 * hash to TrustedConsensusState.NextValidatorsHash since that is the last
 * trusted validator set at the TrustedHeight.
 */
export interface HeaderAmino {
    signed_header?: SignedHeaderAmino;
    validator_set?: ValidatorSetAmino;
    trusted_height?: HeightAmino;
    trusted_validators?: ValidatorSetAmino;
}
/**
 * Header defines the Tendermint client consensus Header.
 * It encapsulates all the information necessary to update from a trusted
 * Tendermint ConsensusState. The inclusion of TrustedHeight and
 * TrustedValidators allows this update to process correctly, so long as the
 * ConsensusState for the TrustedHeight exists, this removes race conditions
 * among relayers The SignedHeader and ValidatorSet are the new untrusted update
 * fields for the client. The TrustedHeight is the height of a stored
 * ConsensusState on the client that will be used to verify the new untrusted
 * header. The Trusted ConsensusState must be within the unbonding period of
 * current time in order to correctly verify, and the TrustedValidators must
 * hash to TrustedConsensusState.NextValidatorsHash since that is the last
 * trusted validator set at the TrustedHeight.
 */
export interface HeaderSDKType {
    signed_header?: SignedHeaderSDKType;
    validator_set?: ValidatorSetSDKType;
    trusted_height?: HeightSDKType;
    trusted_validators?: ValidatorSetSDKType;
}
/**
 * Fraction defines the protobuf message type for tmmath.Fraction that only
 * supports positive values.
 */
export interface Fraction {
    numerator: Long;
    denominator: Long;
}
/**
 * Fraction defines the protobuf message type for tmmath.Fraction that only
 * supports positive values.
 */
export interface FractionAmino {
    numerator: string;
    denominator: string;
}
/**
 * Fraction defines the protobuf message type for tmmath.Fraction that only
 * supports positive values.
 */
export interface FractionSDKType {
    numerator: Long;
    denominator: Long;
}
export declare const ClientState: {
    encode(message: ClientState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientState;
    fromJSON(object: any): ClientState;
    toJSON(message: ClientState): unknown;
    fromPartial(object: Partial<ClientState>): ClientState;
    fromAmino(object: ClientStateAmino): ClientState;
    toAmino(message: ClientState): ClientStateAmino;
};
export declare const ConsensusState: {
    encode(message: ConsensusState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusState;
    fromJSON(object: any): ConsensusState;
    toJSON(message: ConsensusState): unknown;
    fromPartial(object: Partial<ConsensusState>): ConsensusState;
    fromAmino(object: ConsensusStateAmino): ConsensusState;
    toAmino(message: ConsensusState): ConsensusStateAmino;
};
export declare const Misbehaviour: {
    encode(message: Misbehaviour, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Misbehaviour;
    fromJSON(object: any): Misbehaviour;
    toJSON(message: Misbehaviour): unknown;
    fromPartial(object: Partial<Misbehaviour>): Misbehaviour;
    fromAmino(object: MisbehaviourAmino): Misbehaviour;
    toAmino(message: Misbehaviour): MisbehaviourAmino;
};
export declare const Header: {
    encode(message: Header, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Header;
    fromJSON(object: any): Header;
    toJSON(message: Header): unknown;
    fromPartial(object: Partial<Header>): Header;
    fromAmino(object: HeaderAmino): Header;
    toAmino(message: Header): HeaderAmino;
};
export declare const Fraction: {
    encode(message: Fraction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Fraction;
    fromJSON(object: any): Fraction;
    toJSON(message: Fraction): unknown;
    fromPartial(object: Partial<Fraction>): Fraction;
    fromAmino(object: FractionAmino): Fraction;
    toAmino(message: Fraction): FractionAmino;
};

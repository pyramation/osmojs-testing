import { ValidatorPreference, ValidatorPreferenceSDKType } from "./state";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** MsgCreateValidatorSetPreference is a list that holds validator-set. */
export interface MsgSetValidatorSetPreference {
    /** delegator is the user who is trying to create a validator-set. */
    delegator: string;
    /** list of {valAddr, weight} to delegate to */
    preferences: ValidatorPreference[];
}
/** MsgCreateValidatorSetPreference is a list that holds validator-set. */
export interface MsgSetValidatorSetPreferenceSDKType {
    delegator: string;
    preferences: ValidatorPreferenceSDKType[];
}
export interface MsgSetValidatorSetPreferenceResponse {
}
export interface MsgSetValidatorSetPreferenceResponseSDKType {
}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */
export interface MsgDelegateToValidatorSet {
    /** delegator is the user who is trying to delegate. */
    delegator: string;
    /**
     * the amount of tokens the user is trying to delegate.
     * For ex: delegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3, ValC
     * -> 0.2} our staking logic would attempt to delegate 5osmo to A , 3osmo to
     * B, 2osmo to C.
     */
    coin?: Coin;
}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */
export interface MsgDelegateToValidatorSetSDKType {
    delegator: string;
    coin?: CoinSDKType;
}
export interface MsgDelegateToValidatorSetResponse {
}
export interface MsgDelegateToValidatorSetResponseSDKType {
}
export interface MsgUndelegateFromValidatorSet {
    /** delegator is the user who is trying to undelegate. */
    delegator: string;
    /**
     * the amount the user wants to undelegate
     * For ex: Undelegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3,
     * ValC
     * -> 0.2} our undelegate logic would attempt to undelegate 5osmo from A ,
     * 3osmo from B, 2osmo from C
     */
    coin?: Coin;
}
export interface MsgUndelegateFromValidatorSetSDKType {
    delegator: string;
    coin?: CoinSDKType;
}
export interface MsgUndelegateFromValidatorSetResponse {
}
export interface MsgUndelegateFromValidatorSetResponseSDKType {
}
export interface MsgRedelegateValidatorSet {
    /** delegator is the user who is trying to create a validator-set. */
    delegator: string;
    /** list of {valAddr, weight} to delegate to */
    preferences: ValidatorPreference[];
}
export interface MsgRedelegateValidatorSetSDKType {
    delegator: string;
    preferences: ValidatorPreferenceSDKType[];
}
export interface MsgRedelegateValidatorSetResponse {
}
export interface MsgRedelegateValidatorSetResponseSDKType {
}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */
export interface MsgWithdrawDelegationRewards {
    /** delegator is the user who is trying to claim staking rewards. */
    delegator: string;
}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */
export interface MsgWithdrawDelegationRewardsSDKType {
    delegator: string;
}
export interface MsgWithdrawDelegationRewardsResponse {
}
export interface MsgWithdrawDelegationRewardsResponseSDKType {
}
export declare const MsgSetValidatorSetPreference: {
    encode(message: MsgSetValidatorSetPreference, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetValidatorSetPreference;
    fromJSON(object: any): MsgSetValidatorSetPreference;
    toJSON(message: MsgSetValidatorSetPreference): unknown;
    fromPartial(object: Partial<MsgSetValidatorSetPreference>): MsgSetValidatorSetPreference;
};
export declare const MsgSetValidatorSetPreferenceResponse: {
    encode(_: MsgSetValidatorSetPreferenceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetValidatorSetPreferenceResponse;
    fromJSON(_: any): MsgSetValidatorSetPreferenceResponse;
    toJSON(_: MsgSetValidatorSetPreferenceResponse): unknown;
    fromPartial(_: Partial<MsgSetValidatorSetPreferenceResponse>): MsgSetValidatorSetPreferenceResponse;
};
export declare const MsgDelegateToValidatorSet: {
    encode(message: MsgDelegateToValidatorSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateToValidatorSet;
    fromJSON(object: any): MsgDelegateToValidatorSet;
    toJSON(message: MsgDelegateToValidatorSet): unknown;
    fromPartial(object: Partial<MsgDelegateToValidatorSet>): MsgDelegateToValidatorSet;
};
export declare const MsgDelegateToValidatorSetResponse: {
    encode(_: MsgDelegateToValidatorSetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateToValidatorSetResponse;
    fromJSON(_: any): MsgDelegateToValidatorSetResponse;
    toJSON(_: MsgDelegateToValidatorSetResponse): unknown;
    fromPartial(_: Partial<MsgDelegateToValidatorSetResponse>): MsgDelegateToValidatorSetResponse;
};
export declare const MsgUndelegateFromValidatorSet: {
    encode(message: MsgUndelegateFromValidatorSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegateFromValidatorSet;
    fromJSON(object: any): MsgUndelegateFromValidatorSet;
    toJSON(message: MsgUndelegateFromValidatorSet): unknown;
    fromPartial(object: Partial<MsgUndelegateFromValidatorSet>): MsgUndelegateFromValidatorSet;
};
export declare const MsgUndelegateFromValidatorSetResponse: {
    encode(_: MsgUndelegateFromValidatorSetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegateFromValidatorSetResponse;
    fromJSON(_: any): MsgUndelegateFromValidatorSetResponse;
    toJSON(_: MsgUndelegateFromValidatorSetResponse): unknown;
    fromPartial(_: Partial<MsgUndelegateFromValidatorSetResponse>): MsgUndelegateFromValidatorSetResponse;
};
export declare const MsgRedelegateValidatorSet: {
    encode(message: MsgRedelegateValidatorSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedelegateValidatorSet;
    fromJSON(object: any): MsgRedelegateValidatorSet;
    toJSON(message: MsgRedelegateValidatorSet): unknown;
    fromPartial(object: Partial<MsgRedelegateValidatorSet>): MsgRedelegateValidatorSet;
};
export declare const MsgRedelegateValidatorSetResponse: {
    encode(_: MsgRedelegateValidatorSetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedelegateValidatorSetResponse;
    fromJSON(_: any): MsgRedelegateValidatorSetResponse;
    toJSON(_: MsgRedelegateValidatorSetResponse): unknown;
    fromPartial(_: Partial<MsgRedelegateValidatorSetResponse>): MsgRedelegateValidatorSetResponse;
};
export declare const MsgWithdrawDelegationRewards: {
    encode(message: MsgWithdrawDelegationRewards, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawDelegationRewards;
    fromJSON(object: any): MsgWithdrawDelegationRewards;
    toJSON(message: MsgWithdrawDelegationRewards): unknown;
    fromPartial(object: Partial<MsgWithdrawDelegationRewards>): MsgWithdrawDelegationRewards;
};
export declare const MsgWithdrawDelegationRewardsResponse: {
    encode(_: MsgWithdrawDelegationRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawDelegationRewardsResponse;
    fromJSON(_: any): MsgWithdrawDelegationRewardsResponse;
    toJSON(_: MsgWithdrawDelegationRewardsResponse): unknown;
    fromPartial(_: Partial<MsgWithdrawDelegationRewardsResponse>): MsgWithdrawDelegationRewardsResponse;
};

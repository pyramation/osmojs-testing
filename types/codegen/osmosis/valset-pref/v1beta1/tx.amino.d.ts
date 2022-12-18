import { AminoMsg } from "@cosmjs/amino";
import { MsgSetValidatorSetPreference, MsgDelegateToValidatorSet, MsgUndelegateFromValidatorSet, MsgRedelegateValidatorSet, MsgWithdrawDelegationRewards } from "./tx";
export interface AminoMsgSetValidatorSetPreference extends AminoMsg {
    type: "osmosis/valset-pref/MsgSetValidatorSetPreference";
    value: {
        delegator: string;
        preferences: {
            val_oper_address: string;
            weight: string;
        }[];
    };
}
export interface AminoMsgDelegateToValidatorSet extends AminoMsg {
    type: "osmosis/valset-pref/MsgDelegateToValidatorSet";
    value: {
        delegator: string;
        coin: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgUndelegateFromValidatorSet extends AminoMsg {
    type: "osmosis/valset-pref/MsgUndelegateFromValidatorSet";
    value: {
        delegator: string;
        coin: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgRedelegateValidatorSet extends AminoMsg {
    type: "osmosis/valsetpref/redelegate-validator-set";
    value: {
        delegator: string;
        preferences: {
            val_oper_address: string;
            weight: string;
        }[];
    };
}
export interface AminoMsgWithdrawDelegationRewards extends AminoMsg {
    type: "osmosis/valset-pref/MsgWithdrawDelegationRewards";
    value: {
        delegator: string;
    };
}
export declare const AminoConverter: {
    "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference": {
        aminoType: string;
        toAmino: ({ delegator, preferences }: MsgSetValidatorSetPreference) => AminoMsgSetValidatorSetPreference["value"];
        fromAmino: ({ delegator, preferences }: AminoMsgSetValidatorSetPreference["value"]) => MsgSetValidatorSetPreference;
    };
    "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet": {
        aminoType: string;
        toAmino: ({ delegator, coin }: MsgDelegateToValidatorSet) => AminoMsgDelegateToValidatorSet["value"];
        fromAmino: ({ delegator, coin }: AminoMsgDelegateToValidatorSet["value"]) => MsgDelegateToValidatorSet;
    };
    "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet": {
        aminoType: string;
        toAmino: ({ delegator, coin }: MsgUndelegateFromValidatorSet) => AminoMsgUndelegateFromValidatorSet["value"];
        fromAmino: ({ delegator, coin }: AminoMsgUndelegateFromValidatorSet["value"]) => MsgUndelegateFromValidatorSet;
    };
    "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet": {
        aminoType: string;
        toAmino: ({ delegator, preferences }: MsgRedelegateValidatorSet) => AminoMsgRedelegateValidatorSet["value"];
        fromAmino: ({ delegator, preferences }: AminoMsgRedelegateValidatorSet["value"]) => MsgRedelegateValidatorSet;
    };
    "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards": {
        aminoType: string;
        toAmino: ({ delegator }: MsgWithdrawDelegationRewards) => AminoMsgWithdrawDelegationRewards["value"];
        fromAmino: ({ delegator }: AminoMsgWithdrawDelegationRewards["value"]) => MsgWithdrawDelegationRewards;
    };
};

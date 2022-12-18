import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference": {
    aminoType: "osmosis/valset-pref/MsgSetValidatorSetPreference",
    toAmino: ({
      delegator,
      preferences
    }: MsgSetValidatorSetPreference): AminoMsgSetValidatorSetPreference["value"] => {
      return {
        delegator,
        preferences: preferences.map(el0 => ({
          val_oper_address: el0.valOperAddress,
          weight: el0.weight
        }))
      };
    },
    fromAmino: ({
      delegator,
      preferences
    }: AminoMsgSetValidatorSetPreference["value"]): MsgSetValidatorSetPreference => {
      return {
        delegator,
        preferences: preferences.map(el0 => ({
          valOperAddress: el0.val_oper_address,
          weight: el0.weight
        }))
      };
    }
  },
  "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet": {
    aminoType: "osmosis/valset-pref/MsgDelegateToValidatorSet",
    toAmino: ({
      delegator,
      coin
    }: MsgDelegateToValidatorSet): AminoMsgDelegateToValidatorSet["value"] => {
      return {
        delegator,
        coin: {
          denom: coin.denom,
          amount: Long.fromValue(coin.amount).toString()
        }
      };
    },
    fromAmino: ({
      delegator,
      coin
    }: AminoMsgDelegateToValidatorSet["value"]): MsgDelegateToValidatorSet => {
      return {
        delegator,
        coin: {
          denom: coin.denom,
          amount: coin.amount
        }
      };
    }
  },
  "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet": {
    aminoType: "osmosis/valset-pref/MsgUndelegateFromValidatorSet",
    toAmino: ({
      delegator,
      coin
    }: MsgUndelegateFromValidatorSet): AminoMsgUndelegateFromValidatorSet["value"] => {
      return {
        delegator,
        coin: {
          denom: coin.denom,
          amount: Long.fromValue(coin.amount).toString()
        }
      };
    },
    fromAmino: ({
      delegator,
      coin
    }: AminoMsgUndelegateFromValidatorSet["value"]): MsgUndelegateFromValidatorSet => {
      return {
        delegator,
        coin: {
          denom: coin.denom,
          amount: coin.amount
        }
      };
    }
  },
  "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet": {
    aminoType: "osmosis/valsetpref/redelegate-validator-set",
    toAmino: ({
      delegator,
      preferences
    }: MsgRedelegateValidatorSet): AminoMsgRedelegateValidatorSet["value"] => {
      return {
        delegator,
        preferences: preferences.map(el0 => ({
          val_oper_address: el0.valOperAddress,
          weight: el0.weight
        }))
      };
    },
    fromAmino: ({
      delegator,
      preferences
    }: AminoMsgRedelegateValidatorSet["value"]): MsgRedelegateValidatorSet => {
      return {
        delegator,
        preferences: preferences.map(el0 => ({
          valOperAddress: el0.val_oper_address,
          weight: el0.weight
        }))
      };
    }
  },
  "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards": {
    aminoType: "osmosis/valset-pref/MsgWithdrawDelegationRewards",
    toAmino: ({
      delegator
    }: MsgWithdrawDelegationRewards): AminoMsgWithdrawDelegationRewards["value"] => {
      return {
        delegator
      };
    },
    fromAmino: ({
      delegator
    }: AminoMsgWithdrawDelegationRewards["value"]): MsgWithdrawDelegationRewards => {
      return {
        delegator
      };
    }
  }
};
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Pool as Pool1 } from "../pool-models/balancer/balancerPool";
import { Pool as Pool2 } from "../pool-models/stableswap/stableswap_pool";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "../../../helpers";
/** Params holds parameters for the incentives module */

export interface Params {
  poolCreationFee: Coin[];
}
/** Params holds parameters for the incentives module */

export interface ParamsAmino {
  pool_creation_fee: CoinAmino[];
}
/** Params holds parameters for the incentives module */

export interface ParamsSDKType {
  pool_creation_fee: CoinSDKType[];
}
/** GenesisState defines the gamm module's genesis state. */

export interface GenesisState {
  pools: (Pool1 & Pool2 & Any)[] | Any[];
  /** will be renamed to next_pool_id in an upcoming version */

  nextPoolNumber: Long;
  params?: Params;
}
/** GenesisState defines the gamm module's genesis state. */

export interface GenesisStateAmino {
  pools: AnyAmino[];
  /** will be renamed to next_pool_id in an upcoming version */

  next_pool_number: string;
  params?: ParamsAmino;
}
/** GenesisState defines the gamm module's genesis state. */

export interface GenesisStateSDKType {
  pools: AnySDKType[];
  next_pool_number: Long;
  params?: ParamsSDKType;
}

function createBaseParams(): Params {
  return {
    poolCreationFee: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.poolCreationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      poolCreationFee: Array.isArray(object?.poolCreationFee) ? object.poolCreationFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};

    if (message.poolCreationFee) {
      obj.poolCreationFee = message.poolCreationFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.poolCreationFee = [];
    }

    return obj;
  },

  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.poolCreationFee = object.poolCreationFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: ParamsAmino): Params {
    return {
      poolCreationFee: Array.isArray(object?.pool_creation_fee) ? object.pool_creation_fee.map((e: any) => Coin.fromAmino(e)) : []
    };
  },

  toAmino(message: Params): ParamsAmino {
    const obj: any = {};

    if (message.poolCreationFee) {
      obj.pool_creation_fee = message.poolCreationFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.pool_creation_fee = [];
    }

    return obj;
  }

};

function createBaseGenesisState(): GenesisState {
  return {
    pools: [],
    nextPoolNumber: Long.UZERO,
    params: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pools) {
      Any.encode((v! as Any), writer.uint32(10).fork()).ldelim();
    }

    if (!message.nextPoolNumber.isZero()) {
      writer.uint32(16).uint64(message.nextPoolNumber);
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pools.push((PoolI_InterfaceDecoder(reader) as Any));
          break;

        case 2:
          message.nextPoolNumber = (reader.uint64() as Long);
          break;

        case 3:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Any.fromJSON(e)) : [],
      nextPoolNumber: isSet(object.nextPoolNumber) ? Long.fromValue(object.nextPoolNumber) : Long.UZERO,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};

    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }

    message.nextPoolNumber !== undefined && (obj.nextPoolNumber = (message.nextPoolNumber || Long.UZERO).toString());
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.pools = object.pools?.map(e => Any.fromPartial(e)) || [];
    message.nextPoolNumber = object.nextPoolNumber !== undefined && object.nextPoolNumber !== null ? Long.fromValue(object.nextPoolNumber) : Long.UZERO;
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },

  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => PoolI_FromAmino(e)) : [],
      nextPoolNumber: Long.fromString(object.next_pool_number),
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },

  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};

    if (message.pools) {
      obj.pools = message.pools.map(e => e ? PoolI_ToAmino((e as Any)) : undefined);
    } else {
      obj.pools = [];
    }

    obj.next_pool_number = message.nextPoolNumber ? message.nextPoolNumber.toString() : undefined;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  }

};
export const PoolI_InterfaceDecoder = (input: _m0.Reader | Uint8Array): Pool1 | Pool2 | Any => {
  const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
  const data = Any.decode(reader, reader.uint32());

  switch (data.typeUrl) {
    case "/osmosis.gamm.v1beta1.Pool":
      return Pool1.decode(data.value);

    case "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool":
      return Pool2.decode(data.value);

    default:
      return data;
  }
};
export const PoolI_FromAmino = (content: AnyAmino) => {
  switch (content.type) {
    case "osmosis/gamm/BalancerPool":
      return Any.fromPartial({
        typeUrl: "/osmosis.gamm.v1beta1.Pool",
        value: Pool1.encode(Pool1.fromPartial((content.value as DeepPartial<Pool1>))).finish()
      });

    case "osmosis/gamm/StableswapPool":
      return Any.fromPartial({
        typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool",
        value: Pool2.encode(Pool2.fromPartial((content.value as DeepPartial<Pool2>))).finish()
      });

    default:
      return Any.fromAmino(content);
  }
};
export const PoolI_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/osmosis.gamm.v1beta1.Pool":
      return {
        type: "osmosis/gamm/BalancerPool",
        value: Pool1.toAmino(Pool1.decode(content.value))
      };

    case "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool":
      return {
        type: "osmosis/gamm/StableswapPool",
        value: Pool2.toAmino(Pool2.decode(content.value))
      };

    default:
      return Any.toAmino(content);
  }
};
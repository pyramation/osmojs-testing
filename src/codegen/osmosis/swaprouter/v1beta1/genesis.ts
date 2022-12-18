import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "../../../helpers";
/** Params holds parameters for the swaprouter module */

export interface Params {
  poolCreationFee: Coin[];
}
/** Params holds parameters for the swaprouter module */

export interface ParamsAmino {
  pool_creation_fee: CoinAmino[];
}
/** Params holds parameters for the swaprouter module */

export interface ParamsSDKType {
  pool_creation_fee: CoinSDKType[];
}
/** GenesisState defines the swaprouter module's genesis state. */

export interface GenesisState {
  /** the next_pool_id */
  nextPoolId: Long;
  /** params is the container of swaprouter parameters. */

  params?: Params;
}
/** GenesisState defines the swaprouter module's genesis state. */

export interface GenesisStateAmino {
  /** the next_pool_id */
  next_pool_id: string;
  /** params is the container of swaprouter parameters. */

  params?: ParamsAmino;
}
/** GenesisState defines the swaprouter module's genesis state. */

export interface GenesisStateSDKType {
  next_pool_id: Long;
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
    nextPoolId: Long.UZERO,
    params: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nextPoolId.isZero()) {
      writer.uint32(8).uint64(message.nextPoolId);
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
          message.nextPoolId = (reader.uint64() as Long);
          break;

        case 2:
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
      nextPoolId: isSet(object.nextPoolId) ? Long.fromValue(object.nextPoolId) : Long.UZERO,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.nextPoolId !== undefined && (obj.nextPoolId = (message.nextPoolId || Long.UZERO).toString());
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.nextPoolId = object.nextPoolId !== undefined && object.nextPoolId !== null ? Long.fromValue(object.nextPoolId) : Long.UZERO;
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },

  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      nextPoolId: Long.fromString(object.next_pool_id),
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },

  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.next_pool_id = message.nextPoolId ? message.nextPoolId.toString() : undefined;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  }

};
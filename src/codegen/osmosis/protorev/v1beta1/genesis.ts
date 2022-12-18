import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { TokenPairArbRoutes, TokenPairArbRoutesAmino, TokenPairArbRoutesSDKType } from "./protorev";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GenesisState defines the protorev module's genesis state. */

export interface GenesisState {
  /** Module Parameters */
  params?: Params;
  /** Hot routes that are configured on genesis */

  tokenPairs: TokenPairArbRoutes[];
}
/** GenesisState defines the protorev module's genesis state. */

export interface GenesisStateAmino {
  /** Module Parameters */
  params?: ParamsAmino;
  /** Hot routes that are configured on genesis */

  token_pairs: TokenPairArbRoutesAmino[];
}
/** GenesisState defines the protorev module's genesis state. */

export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  token_pairs: TokenPairArbRoutesSDKType[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    tokenPairs: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.tokenPairs) {
      TokenPairArbRoutes.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.tokenPairs.push(TokenPairArbRoutes.decode(reader, reader.uint32()));
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      tokenPairs: Array.isArray(object?.tokenPairs) ? object.tokenPairs.map((e: any) => TokenPairArbRoutes.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.tokenPairs) {
      obj.tokenPairs = message.tokenPairs.map(e => e ? TokenPairArbRoutes.toJSON(e) : undefined);
    } else {
      obj.tokenPairs = [];
    }

    return obj;
  },

  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.tokenPairs = object.tokenPairs?.map(e => TokenPairArbRoutes.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      tokenPairs: Array.isArray(object?.token_pairs) ? object.token_pairs.map((e: any) => TokenPairArbRoutes.fromAmino(e)) : []
    };
  },

  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;

    if (message.tokenPairs) {
      obj.token_pairs = message.tokenPairs.map(e => e ? TokenPairArbRoutes.toAmino(e) : undefined);
    } else {
      obj.token_pairs = [];
    }

    return obj;
  }

};
import { SwapAmountInRoute, SwapAmountInRouteAmino, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteAmino, SwapAmountOutRouteSDKType } from "./swap_route";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** ===================== MsgSwapExactAmountIn */

export interface MsgSwapExactAmountIn {
  sender: string;
  routes: SwapAmountInRoute[];
  tokenIn?: Coin;
  tokenOutMinAmount: string;
}
/** ===================== MsgSwapExactAmountIn */

export interface MsgSwapExactAmountInAmino {
  sender: string;
  routes: SwapAmountInRouteAmino[];
  token_in?: CoinAmino;
  token_out_min_amount: string;
}
/** ===================== MsgSwapExactAmountIn */

export interface MsgSwapExactAmountInSDKType {
  sender: string;
  routes: SwapAmountInRouteSDKType[];
  token_in?: CoinSDKType;
  token_out_min_amount: string;
}
export interface MsgSwapExactAmountInResponse {
  tokenOutAmount: string;
}
export interface MsgSwapExactAmountInResponseAmino {
  token_out_amount: string;
}
export interface MsgSwapExactAmountInResponseSDKType {
  token_out_amount: string;
}
/** ===================== MsgSwapExactAmountOut */

export interface MsgSwapExactAmountOut {
  sender: string;
  routes: SwapAmountOutRoute[];
  tokenInMaxAmount: string;
  tokenOut?: Coin;
}
/** ===================== MsgSwapExactAmountOut */

export interface MsgSwapExactAmountOutAmino {
  sender: string;
  routes: SwapAmountOutRouteAmino[];
  token_in_max_amount: string;
  token_out?: CoinAmino;
}
/** ===================== MsgSwapExactAmountOut */

export interface MsgSwapExactAmountOutSDKType {
  sender: string;
  routes: SwapAmountOutRouteSDKType[];
  token_in_max_amount: string;
  token_out?: CoinSDKType;
}
export interface MsgSwapExactAmountOutResponse {
  tokenInAmount: string;
}
export interface MsgSwapExactAmountOutResponseAmino {
  token_in_amount: string;
}
export interface MsgSwapExactAmountOutResponseSDKType {
  token_in_amount: string;
}

function createBaseMsgSwapExactAmountIn(): MsgSwapExactAmountIn {
  return {
    sender: "",
    routes: [],
    tokenIn: undefined,
    tokenOutMinAmount: ""
  };
}

export const MsgSwapExactAmountIn = {
  encode(message: MsgSwapExactAmountIn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    for (const v of message.routes) {
      SwapAmountInRoute.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(26).fork()).ldelim();
    }

    if (message.tokenOutMinAmount !== "") {
      writer.uint32(34).string(message.tokenOutMinAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountIn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountIn();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
          break;

        case 3:
          message.tokenIn = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.tokenOutMinAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSwapExactAmountIn {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountInRoute.fromJSON(e)) : [],
      tokenIn: isSet(object.tokenIn) ? Coin.fromJSON(object.tokenIn) : undefined,
      tokenOutMinAmount: isSet(object.tokenOutMinAmount) ? String(object.tokenOutMinAmount) : ""
    };
  },

  toJSON(message: MsgSwapExactAmountIn): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);

    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toJSON(e) : undefined);
    } else {
      obj.routes = [];
    }

    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn ? Coin.toJSON(message.tokenIn) : undefined);
    message.tokenOutMinAmount !== undefined && (obj.tokenOutMinAmount = message.tokenOutMinAmount);
    return obj;
  },

  fromPartial(object: Partial<MsgSwapExactAmountIn>): MsgSwapExactAmountIn {
    const message = createBaseMsgSwapExactAmountIn();
    message.sender = object.sender ?? "";
    message.routes = object.routes?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
    message.tokenIn = object.tokenIn !== undefined && object.tokenIn !== null ? Coin.fromPartial(object.tokenIn) : undefined;
    message.tokenOutMinAmount = object.tokenOutMinAmount ?? "";
    return message;
  },

  fromAmino(object: MsgSwapExactAmountInAmino): MsgSwapExactAmountIn {
    return {
      sender: object.sender,
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountInRoute.fromAmino(e)) : [],
      tokenIn: object?.token_in ? Coin.fromAmino(object.token_in) : undefined,
      tokenOutMinAmount: object.token_out_min_amount
    };
  },

  toAmino(message: MsgSwapExactAmountIn): MsgSwapExactAmountInAmino {
    const obj: any = {};
    obj.sender = message.sender;

    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
    } else {
      obj.routes = [];
    }

    obj.token_in = message.tokenIn ? Coin.toAmino(message.tokenIn) : undefined;
    obj.token_out_min_amount = message.tokenOutMinAmount;
    return obj;
  }

};

function createBaseMsgSwapExactAmountInResponse(): MsgSwapExactAmountInResponse {
  return {
    tokenOutAmount: ""
  };
}

export const MsgSwapExactAmountInResponse = {
  encode(message: MsgSwapExactAmountInResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenOutAmount !== "") {
      writer.uint32(10).string(message.tokenOutAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountInResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tokenOutAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSwapExactAmountInResponse {
    return {
      tokenOutAmount: isSet(object.tokenOutAmount) ? String(object.tokenOutAmount) : ""
    };
  },

  toJSON(message: MsgSwapExactAmountInResponse): unknown {
    const obj: any = {};
    message.tokenOutAmount !== undefined && (obj.tokenOutAmount = message.tokenOutAmount);
    return obj;
  },

  fromPartial(object: Partial<MsgSwapExactAmountInResponse>): MsgSwapExactAmountInResponse {
    const message = createBaseMsgSwapExactAmountInResponse();
    message.tokenOutAmount = object.tokenOutAmount ?? "";
    return message;
  },

  fromAmino(object: MsgSwapExactAmountInResponseAmino): MsgSwapExactAmountInResponse {
    return {
      tokenOutAmount: object.token_out_amount
    };
  },

  toAmino(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseAmino {
    const obj: any = {};
    obj.token_out_amount = message.tokenOutAmount;
    return obj;
  }

};

function createBaseMsgSwapExactAmountOut(): MsgSwapExactAmountOut {
  return {
    sender: "",
    routes: [],
    tokenInMaxAmount: "",
    tokenOut: undefined
  };
}

export const MsgSwapExactAmountOut = {
  encode(message: MsgSwapExactAmountOut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    for (const v of message.routes) {
      SwapAmountOutRoute.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.tokenInMaxAmount !== "") {
      writer.uint32(26).string(message.tokenInMaxAmount);
    }

    if (message.tokenOut !== undefined) {
      Coin.encode(message.tokenOut, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountOut {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountOut();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
          break;

        case 3:
          message.tokenInMaxAmount = reader.string();
          break;

        case 4:
          message.tokenOut = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSwapExactAmountOut {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountOutRoute.fromJSON(e)) : [],
      tokenInMaxAmount: isSet(object.tokenInMaxAmount) ? String(object.tokenInMaxAmount) : "",
      tokenOut: isSet(object.tokenOut) ? Coin.fromJSON(object.tokenOut) : undefined
    };
  },

  toJSON(message: MsgSwapExactAmountOut): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);

    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toJSON(e) : undefined);
    } else {
      obj.routes = [];
    }

    message.tokenInMaxAmount !== undefined && (obj.tokenInMaxAmount = message.tokenInMaxAmount);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut ? Coin.toJSON(message.tokenOut) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MsgSwapExactAmountOut>): MsgSwapExactAmountOut {
    const message = createBaseMsgSwapExactAmountOut();
    message.sender = object.sender ?? "";
    message.routes = object.routes?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
    message.tokenInMaxAmount = object.tokenInMaxAmount ?? "";
    message.tokenOut = object.tokenOut !== undefined && object.tokenOut !== null ? Coin.fromPartial(object.tokenOut) : undefined;
    return message;
  },

  fromAmino(object: MsgSwapExactAmountOutAmino): MsgSwapExactAmountOut {
    return {
      sender: object.sender,
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountOutRoute.fromAmino(e)) : [],
      tokenInMaxAmount: object.token_in_max_amount,
      tokenOut: object?.token_out ? Coin.fromAmino(object.token_out) : undefined
    };
  },

  toAmino(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutAmino {
    const obj: any = {};
    obj.sender = message.sender;

    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toAmino(e) : undefined);
    } else {
      obj.routes = [];
    }

    obj.token_in_max_amount = message.tokenInMaxAmount;
    obj.token_out = message.tokenOut ? Coin.toAmino(message.tokenOut) : undefined;
    return obj;
  }

};

function createBaseMsgSwapExactAmountOutResponse(): MsgSwapExactAmountOutResponse {
  return {
    tokenInAmount: ""
  };
}

export const MsgSwapExactAmountOutResponse = {
  encode(message: MsgSwapExactAmountOutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenInAmount !== "") {
      writer.uint32(10).string(message.tokenInAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountOutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountOutResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tokenInAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSwapExactAmountOutResponse {
    return {
      tokenInAmount: isSet(object.tokenInAmount) ? String(object.tokenInAmount) : ""
    };
  },

  toJSON(message: MsgSwapExactAmountOutResponse): unknown {
    const obj: any = {};
    message.tokenInAmount !== undefined && (obj.tokenInAmount = message.tokenInAmount);
    return obj;
  },

  fromPartial(object: Partial<MsgSwapExactAmountOutResponse>): MsgSwapExactAmountOutResponse {
    const message = createBaseMsgSwapExactAmountOutResponse();
    message.tokenInAmount = object.tokenInAmount ?? "";
    return message;
  },

  fromAmino(object: MsgSwapExactAmountOutResponseAmino): MsgSwapExactAmountOutResponse {
    return {
      tokenInAmount: object.token_in_amount
    };
  },

  toAmino(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseAmino {
    const obj: any = {};
    obj.token_in_amount = message.tokenInAmount;
    return obj;
  }

};
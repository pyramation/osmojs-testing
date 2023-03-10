import { Grant, GrantAmino, GrantSDKType, GenericAuthorization } from "./authz";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { SendAuthorization } from "../../bank/v1beta1/authz";
import { StakeAuthorization } from "../../staking/v1beta1/authz";
import { ContractExecutionAuthorization, ContractMigrationAuthorization } from "../../../cosmwasm/wasm/v1/authz";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../helpers";
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */

export interface MsgGrant {
  granter: string;
  grantee: string;
  grant?: Grant;
}
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */

export interface MsgGrantAmino {
  granter: string;
  grantee: string;
  grant?: GrantAmino;
}
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */

export interface MsgGrantSDKType {
  granter: string;
  grantee: string;
  grant?: GrantSDKType;
}
/** MsgExecResponse defines the Msg/MsgExecResponse response type. */

export interface MsgExecResponse {
  results: Uint8Array[];
}
/** MsgExecResponse defines the Msg/MsgExecResponse response type. */

export interface MsgExecResponseAmino {
  results: Uint8Array[];
}
/** MsgExecResponse defines the Msg/MsgExecResponse response type. */

export interface MsgExecResponseSDKType {
  results: Uint8Array[];
}
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */

export interface MsgExec {
  grantee: string;
  /**
   * Authorization Msg requests to execute. Each msg must implement Authorization interface
   * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
   * triple and validate it.
   */

  msgs: (Any)[] | Any[];
}
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */

export interface MsgExecAmino {
  grantee: string;
  /**
   * Authorization Msg requests to execute. Each msg must implement Authorization interface
   * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
   * triple and validate it.
   */

  msgs: AnyAmino[];
}
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */

export interface MsgExecSDKType {
  grantee: string;
  msgs: AnySDKType[];
}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */

export interface MsgGrantResponse {}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */

export interface MsgGrantResponseAmino {}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */

export interface MsgGrantResponseSDKType {}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */

export interface MsgRevoke {
  granter: string;
  grantee: string;
  msgTypeUrl: string;
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */

export interface MsgRevokeAmino {
  granter: string;
  grantee: string;
  msg_type_url: string;
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */

export interface MsgRevokeSDKType {
  granter: string;
  grantee: string;
  msg_type_url: string;
}
/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */

export interface MsgRevokeResponse {}
/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */

export interface MsgRevokeResponseAmino {}
/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */

export interface MsgRevokeResponseSDKType {}

function createBaseMsgGrant(): MsgGrant {
  return {
    granter: "",
    grantee: "",
    grant: undefined
  };
}

export const MsgGrant = {
  encode(message: MsgGrant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }

    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }

    if (message.grant !== undefined) {
      Grant.encode(message.grant, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrant();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;

        case 2:
          message.grantee = reader.string();
          break;

        case 3:
          message.grant = Grant.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgGrant {
    return {
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      grant: isSet(object.grant) ? Grant.fromJSON(object.grant) : undefined
    };
  },

  toJSON(message: MsgGrant): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.grant !== undefined && (obj.grant = message.grant ? Grant.toJSON(message.grant) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MsgGrant>): MsgGrant {
    const message = createBaseMsgGrant();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.grant = object.grant !== undefined && object.grant !== null ? Grant.fromPartial(object.grant) : undefined;
    return message;
  },

  fromAmino(object: MsgGrantAmino): MsgGrant {
    return {
      granter: object.granter,
      grantee: object.grantee,
      grant: object?.grant ? Grant.fromAmino(object.grant) : undefined
    };
  },

  toAmino(message: MsgGrant): MsgGrantAmino {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    obj.grant = message.grant ? Grant.toAmino(message.grant) : undefined;
    return obj;
  }

};

function createBaseMsgExecResponse(): MsgExecResponse {
  return {
    results: []
  };
}

export const MsgExecResponse = {
  encode(message: MsgExecResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      writer.uint32(10).bytes(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.results.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExecResponse {
    return {
      results: Array.isArray(object?.results) ? object.results.map((e: any) => bytesFromBase64(e)) : []
    };
  },

  toJSON(message: MsgExecResponse): unknown {
    const obj: any = {};

    if (message.results) {
      obj.results = message.results.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.results = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgExecResponse>): MsgExecResponse {
    const message = createBaseMsgExecResponse();
    message.results = object.results?.map(e => e) || [];
    return message;
  },

  fromAmino(object: MsgExecResponseAmino): MsgExecResponse {
    return {
      results: Array.isArray(object?.results) ? object.results.map((e: any) => e) : []
    };
  },

  toAmino(message: MsgExecResponse): MsgExecResponseAmino {
    const obj: any = {};

    if (message.results) {
      obj.results = message.results.map(e => e);
    } else {
      obj.results = [];
    }

    return obj;
  }

};

function createBaseMsgExec(): MsgExec {
  return {
    grantee: "",
    msgs: []
  };
}

export const MsgExec = {
  encode(message: MsgExec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }

    for (const v of message.msgs) {
      Any.encode((v! as Any), writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExec();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;

        case 2:
          message.msgs.push((Sdk_MsgcosmosauthzAuthorization_InterfaceDecoder(reader) as Any));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExec {
    return {
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => Any.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgExec): unknown {
    const obj: any = {};
    message.grantee !== undefined && (obj.grantee = message.grantee);

    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.msgs = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgExec>): MsgExec {
    const message = createBaseMsgExec();
    message.grantee = object.grantee ?? "";
    message.msgs = object.msgs?.map(e => Any.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: MsgExecAmino): MsgExec {
    return {
      grantee: object.grantee,
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => Sdk_MsgcosmosauthzAuthorization_FromAmino(e)) : []
    };
  },

  toAmino(message: MsgExec): MsgExecAmino {
    const obj: any = {};
    obj.grantee = message.grantee;

    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? Sdk_MsgcosmosauthzAuthorization_ToAmino((e as Any)) : undefined);
    } else {
      obj.msgs = [];
    }

    return obj;
  }

};

function createBaseMsgGrantResponse(): MsgGrantResponse {
  return {};
}

export const MsgGrantResponse = {
  encode(_: MsgGrantResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgGrantResponse {
    return {};
  },

  toJSON(_: MsgGrantResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgGrantResponse>): MsgGrantResponse {
    const message = createBaseMsgGrantResponse();
    return message;
  },

  fromAmino(_: MsgGrantResponseAmino): MsgGrantResponse {
    return {};
  },

  toAmino(_: MsgGrantResponse): MsgGrantResponseAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgRevoke(): MsgRevoke {
  return {
    granter: "",
    grantee: "",
    msgTypeUrl: ""
  };
}

export const MsgRevoke = {
  encode(message: MsgRevoke, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }

    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }

    if (message.msgTypeUrl !== "") {
      writer.uint32(26).string(message.msgTypeUrl);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevoke {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevoke();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;

        case 2:
          message.grantee = reader.string();
          break;

        case 3:
          message.msgTypeUrl = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRevoke {
    return {
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      msgTypeUrl: isSet(object.msgTypeUrl) ? String(object.msgTypeUrl) : ""
    };
  },

  toJSON(message: MsgRevoke): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
    return obj;
  },

  fromPartial(object: Partial<MsgRevoke>): MsgRevoke {
    const message = createBaseMsgRevoke();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.msgTypeUrl = object.msgTypeUrl ?? "";
    return message;
  },

  fromAmino(object: MsgRevokeAmino): MsgRevoke {
    return {
      granter: object.granter,
      grantee: object.grantee,
      msgTypeUrl: object.msg_type_url
    };
  },

  toAmino(message: MsgRevoke): MsgRevokeAmino {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    obj.msg_type_url = message.msgTypeUrl;
    return obj;
  }

};

function createBaseMsgRevokeResponse(): MsgRevokeResponse {
  return {};
}

export const MsgRevokeResponse = {
  encode(_: MsgRevokeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgRevokeResponse {
    return {};
  },

  toJSON(_: MsgRevokeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgRevokeResponse>): MsgRevokeResponse {
    const message = createBaseMsgRevokeResponse();
    return message;
  },

  fromAmino(_: MsgRevokeResponseAmino): MsgRevokeResponse {
    return {};
  },

  toAmino(_: MsgRevokeResponse): MsgRevokeResponseAmino {
    const obj: any = {};
    return obj;
  }

};
export const Sdk_Msg_InterfaceDecoder = (input: _m0.Reader | Uint8Array): Any => {
  const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
  const data = Any.decode(reader, reader.uint32());

  switch (data.typeUrl) {
    default:
      return data;
  }
};
export const Sdk_Msg_FromAmino = (content: AnyAmino) => {
  return Any.fromAmino(content);
};
export const Sdk_Msg_ToAmino = (content: Any) => {
  return Any.toAmino(content);
};
export const Cosmos_authzAuthorization_InterfaceDecoder = (input: _m0.Reader | Uint8Array): GenericAuthorization | SendAuthorization | StakeAuthorization | ContractExecutionAuthorization | ContractMigrationAuthorization | Any => {
  const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
  const data = Any.decode(reader, reader.uint32());

  switch (data.typeUrl) {
    case "/cosmos.authz.v1beta1.GenericAuthorization":
      return GenericAuthorization.decode(data.value);

    case "/cosmos.bank.v1beta1.SendAuthorization":
      return SendAuthorization.decode(data.value);

    case "/cosmos.staking.v1beta1.StakeAuthorization":
      return StakeAuthorization.decode(data.value);

    case "/cosmwasm.wasm.v1.ContractExecutionAuthorization":
      return ContractExecutionAuthorization.decode(data.value);

    case "/cosmwasm.wasm.v1.ContractMigrationAuthorization":
      return ContractMigrationAuthorization.decode(data.value);

    default:
      return data;
  }
};
export const Cosmos_authzAuthorization_FromAmino = (content: AnyAmino) => {
  switch (content.type) {
    case "cosmos-sdk/GenericAuthorization":
      return Any.fromPartial({
        typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
        value: GenericAuthorization.encode(GenericAuthorization.fromPartial((content.value as DeepPartial<GenericAuthorization>))).finish()
      });

    case "cosmos-sdk/SendAuthorization":
      return Any.fromPartial({
        typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
        value: SendAuthorization.encode(SendAuthorization.fromPartial((content.value as DeepPartial<SendAuthorization>))).finish()
      });

    case "cosmos-sdk/StakeAuthorization":
      return Any.fromPartial({
        typeUrl: "/cosmos.staking.v1beta1.StakeAuthorization",
        value: StakeAuthorization.encode(StakeAuthorization.fromPartial((content.value as DeepPartial<StakeAuthorization>))).finish()
      });

    case "wasm/ContractExecutionAuthorization":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
        value: ContractExecutionAuthorization.encode(ContractExecutionAuthorization.fromPartial((content.value as DeepPartial<ContractExecutionAuthorization>))).finish()
      });

    case "wasm/ContractMigrationAuthorization":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization",
        value: ContractMigrationAuthorization.encode(ContractMigrationAuthorization.fromPartial((content.value as DeepPartial<ContractMigrationAuthorization>))).finish()
      });

    default:
      return Any.fromAmino(content);
  }
};
export const Cosmos_authzAuthorization_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/cosmos.authz.v1beta1.GenericAuthorization":
      return {
        type: "cosmos-sdk/GenericAuthorization",
        value: GenericAuthorization.toAmino(GenericAuthorization.decode(content.value))
      };

    case "/cosmos.bank.v1beta1.SendAuthorization":
      return {
        type: "cosmos-sdk/SendAuthorization",
        value: SendAuthorization.toAmino(SendAuthorization.decode(content.value))
      };

    case "/cosmos.staking.v1beta1.StakeAuthorization":
      return {
        type: "cosmos-sdk/StakeAuthorization",
        value: StakeAuthorization.toAmino(StakeAuthorization.decode(content.value))
      };

    case "/cosmwasm.wasm.v1.ContractExecutionAuthorization":
      return {
        type: "wasm/ContractExecutionAuthorization",
        value: ContractExecutionAuthorization.toAmino(ContractExecutionAuthorization.decode(content.value))
      };

    case "/cosmwasm.wasm.v1.ContractMigrationAuthorization":
      return {
        type: "wasm/ContractMigrationAuthorization",
        value: ContractMigrationAuthorization.toAmino(ContractMigrationAuthorization.decode(content.value))
      };

    default:
      return Any.toAmino(content);
  }
};
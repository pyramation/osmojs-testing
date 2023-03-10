import { ProposalExecutorResult, proposalExecutorResultFromJSON, proposalExecutorResultToJSON } from "./types";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** EventCreateGroup is an event emitted when a group is created. */

export interface EventCreateGroup {
  /** group_id is the unique ID of the group. */
  groupId: Long;
}
/** EventCreateGroup is an event emitted when a group is created. */

export interface EventCreateGroupAmino {
  /** group_id is the unique ID of the group. */
  group_id: string;
}
/** EventCreateGroup is an event emitted when a group is created. */

export interface EventCreateGroupSDKType {
  group_id: Long;
}
/** EventUpdateGroup is an event emitted when a group is updated. */

export interface EventUpdateGroup {
  /** group_id is the unique ID of the group. */
  groupId: Long;
}
/** EventUpdateGroup is an event emitted when a group is updated. */

export interface EventUpdateGroupAmino {
  /** group_id is the unique ID of the group. */
  group_id: string;
}
/** EventUpdateGroup is an event emitted when a group is updated. */

export interface EventUpdateGroupSDKType {
  group_id: Long;
}
/** EventCreateGroupPolicy is an event emitted when a group policy is created. */

export interface EventCreateGroupPolicy {
  /** address is the account address of the group policy. */
  address: string;
}
/** EventCreateGroupPolicy is an event emitted when a group policy is created. */

export interface EventCreateGroupPolicyAmino {
  /** address is the account address of the group policy. */
  address: string;
}
/** EventCreateGroupPolicy is an event emitted when a group policy is created. */

export interface EventCreateGroupPolicySDKType {
  address: string;
}
/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */

export interface EventUpdateGroupPolicy {
  /** address is the account address of the group policy. */
  address: string;
}
/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */

export interface EventUpdateGroupPolicyAmino {
  /** address is the account address of the group policy. */
  address: string;
}
/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */

export interface EventUpdateGroupPolicySDKType {
  address: string;
}
/** EventSubmitProposal is an event emitted when a proposal is created. */

export interface EventSubmitProposal {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: Long;
}
/** EventSubmitProposal is an event emitted when a proposal is created. */

export interface EventSubmitProposalAmino {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id: string;
}
/** EventSubmitProposal is an event emitted when a proposal is created. */

export interface EventSubmitProposalSDKType {
  proposal_id: Long;
}
/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */

export interface EventWithdrawProposal {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: Long;
}
/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */

export interface EventWithdrawProposalAmino {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id: string;
}
/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */

export interface EventWithdrawProposalSDKType {
  proposal_id: Long;
}
/** EventVote is an event emitted when a voter votes on a proposal. */

export interface EventVote {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: Long;
}
/** EventVote is an event emitted when a voter votes on a proposal. */

export interface EventVoteAmino {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id: string;
}
/** EventVote is an event emitted when a voter votes on a proposal. */

export interface EventVoteSDKType {
  proposal_id: Long;
}
/** EventExec is an event emitted when a proposal is executed. */

export interface EventExec {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: Long;
  /** result is the proposal execution result. */

  result: ProposalExecutorResult;
}
/** EventExec is an event emitted when a proposal is executed. */

export interface EventExecAmino {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id: string;
  /** result is the proposal execution result. */

  result: ProposalExecutorResult;
}
/** EventExec is an event emitted when a proposal is executed. */

export interface EventExecSDKType {
  proposal_id: Long;
  result: ProposalExecutorResult;
}
/** EventLeaveGroup is an event emitted when group member leaves the group. */

export interface EventLeaveGroup {
  /** group_id is the unique ID of the group. */
  groupId: Long;
  /** address is the account address of the group member. */

  address: string;
}
/** EventLeaveGroup is an event emitted when group member leaves the group. */

export interface EventLeaveGroupAmino {
  /** group_id is the unique ID of the group. */
  group_id: string;
  /** address is the account address of the group member. */

  address: string;
}
/** EventLeaveGroup is an event emitted when group member leaves the group. */

export interface EventLeaveGroupSDKType {
  group_id: Long;
  address: string;
}

function createBaseEventCreateGroup(): EventCreateGroup {
  return {
    groupId: Long.UZERO
  };
}

export const EventCreateGroup = {
  encode(message: EventCreateGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateGroup();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.groupId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventCreateGroup {
    return {
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO
    };
  },

  toJSON(message: EventCreateGroup): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<EventCreateGroup>): EventCreateGroup {
    const message = createBaseEventCreateGroup();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    return message;
  },

  fromAmino(object: EventCreateGroupAmino): EventCreateGroup {
    return {
      groupId: Long.fromString(object.group_id)
    };
  },

  toAmino(message: EventCreateGroup): EventCreateGroupAmino {
    const obj: any = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    return obj;
  }

};

function createBaseEventUpdateGroup(): EventUpdateGroup {
  return {
    groupId: Long.UZERO
  };
}

export const EventUpdateGroup = {
  encode(message: EventUpdateGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateGroup();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.groupId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventUpdateGroup {
    return {
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO
    };
  },

  toJSON(message: EventUpdateGroup): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<EventUpdateGroup>): EventUpdateGroup {
    const message = createBaseEventUpdateGroup();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    return message;
  },

  fromAmino(object: EventUpdateGroupAmino): EventUpdateGroup {
    return {
      groupId: Long.fromString(object.group_id)
    };
  },

  toAmino(message: EventUpdateGroup): EventUpdateGroupAmino {
    const obj: any = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    return obj;
  }

};

function createBaseEventCreateGroupPolicy(): EventCreateGroupPolicy {
  return {
    address: ""
  };
}

export const EventCreateGroupPolicy = {
  encode(message: EventCreateGroupPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateGroupPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateGroupPolicy();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventCreateGroupPolicy {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: EventCreateGroupPolicy): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: Partial<EventCreateGroupPolicy>): EventCreateGroupPolicy {
    const message = createBaseEventCreateGroupPolicy();
    message.address = object.address ?? "";
    return message;
  },

  fromAmino(object: EventCreateGroupPolicyAmino): EventCreateGroupPolicy {
    return {
      address: object.address
    };
  },

  toAmino(message: EventCreateGroupPolicy): EventCreateGroupPolicyAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  }

};

function createBaseEventUpdateGroupPolicy(): EventUpdateGroupPolicy {
  return {
    address: ""
  };
}

export const EventUpdateGroupPolicy = {
  encode(message: EventUpdateGroupPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateGroupPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateGroupPolicy();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventUpdateGroupPolicy {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: EventUpdateGroupPolicy): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: Partial<EventUpdateGroupPolicy>): EventUpdateGroupPolicy {
    const message = createBaseEventUpdateGroupPolicy();
    message.address = object.address ?? "";
    return message;
  },

  fromAmino(object: EventUpdateGroupPolicyAmino): EventUpdateGroupPolicy {
    return {
      address: object.address
    };
  },

  toAmino(message: EventUpdateGroupPolicy): EventUpdateGroupPolicyAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  }

};

function createBaseEventSubmitProposal(): EventSubmitProposal {
  return {
    proposalId: Long.UZERO
  };
}

export const EventSubmitProposal = {
  encode(message: EventSubmitProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSubmitProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSubmitProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventSubmitProposal {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO
    };
  },

  toJSON(message: EventSubmitProposal): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<EventSubmitProposal>): EventSubmitProposal {
    const message = createBaseEventSubmitProposal();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    return message;
  },

  fromAmino(object: EventSubmitProposalAmino): EventSubmitProposal {
    return {
      proposalId: Long.fromString(object.proposal_id)
    };
  },

  toAmino(message: EventSubmitProposal): EventSubmitProposalAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    return obj;
  }

};

function createBaseEventWithdrawProposal(): EventWithdrawProposal {
  return {
    proposalId: Long.UZERO
  };
}

export const EventWithdrawProposal = {
  encode(message: EventWithdrawProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdrawProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdrawProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventWithdrawProposal {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO
    };
  },

  toJSON(message: EventWithdrawProposal): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<EventWithdrawProposal>): EventWithdrawProposal {
    const message = createBaseEventWithdrawProposal();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    return message;
  },

  fromAmino(object: EventWithdrawProposalAmino): EventWithdrawProposal {
    return {
      proposalId: Long.fromString(object.proposal_id)
    };
  },

  toAmino(message: EventWithdrawProposal): EventWithdrawProposalAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    return obj;
  }

};

function createBaseEventVote(): EventVote {
  return {
    proposalId: Long.UZERO
  };
}

export const EventVote = {
  encode(message: EventVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVote();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventVote {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO
    };
  },

  toJSON(message: EventVote): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<EventVote>): EventVote {
    const message = createBaseEventVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    return message;
  },

  fromAmino(object: EventVoteAmino): EventVote {
    return {
      proposalId: Long.fromString(object.proposal_id)
    };
  },

  toAmino(message: EventVote): EventVoteAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    return obj;
  }

};

function createBaseEventExec(): EventExec {
  return {
    proposalId: Long.UZERO,
    result: 0
  };
}

export const EventExec = {
  encode(message: EventExec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventExec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExec();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        case 2:
          message.result = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventExec {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      result: isSet(object.result) ? proposalExecutorResultFromJSON(object.result) : 0
    };
  },

  toJSON(message: EventExec): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.result !== undefined && (obj.result = proposalExecutorResultToJSON(message.result));
    return obj;
  },

  fromPartial(object: Partial<EventExec>): EventExec {
    const message = createBaseEventExec();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.result = object.result ?? 0;
    return message;
  },

  fromAmino(object: EventExecAmino): EventExec {
    return {
      proposalId: Long.fromString(object.proposal_id),
      result: isSet(object.result) ? proposalExecutorResultFromJSON(object.result) : 0
    };
  },

  toAmino(message: EventExec): EventExecAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.result = message.result;
    return obj;
  }

};

function createBaseEventLeaveGroup(): EventLeaveGroup {
  return {
    groupId: Long.UZERO,
    address: ""
  };
}

export const EventLeaveGroup = {
  encode(message: EventLeaveGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventLeaveGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLeaveGroup();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.groupId = (reader.uint64() as Long);
          break;

        case 2:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventLeaveGroup {
    return {
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: EventLeaveGroup): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: Partial<EventLeaveGroup>): EventLeaveGroup {
    const message = createBaseEventLeaveGroup();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  },

  fromAmino(object: EventLeaveGroupAmino): EventLeaveGroup {
    return {
      groupId: Long.fromString(object.group_id),
      address: object.address
    };
  },

  toAmino(message: EventLeaveGroup): EventLeaveGroupAmino {
    const obj: any = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    obj.address = message.address;
    return obj;
  }

};
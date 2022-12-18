import { AccessConfig, AccessConfigAmino, AccessConfigSDKType } from "./types";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, Long } from "../../../helpers";
/** StoreCodeProposal gov proposal content type to submit WASM code to the system */

export interface StoreCodeProposal {
  $typeUrl?: string;
  /** Title is a short summary */

  title: string;
  /** Description is a human readable text */

  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */

  runAs: string;
  /** WASMByteCode can be raw or gzip compressed */

  wasmByteCode: Uint8Array;
  /** InstantiatePermission to apply on contract creation, optional */

  instantiatePermission?: AccessConfig;
  /** UnpinCode code on upload, optional */

  unpinCode: boolean;
  /** Source is the URL where the code is hosted */

  source: string;
  /**
   * Builder is the docker image used to build the code deterministically, used
   * for smart contract verification
   */

  builder: string;
  /**
   * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
   * contract verification
   */

  codeHash: Uint8Array;
}
/** StoreCodeProposal gov proposal content type to submit WASM code to the system */

export interface StoreCodeProposalAmino {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */

  run_as: string;
  /** WASMByteCode can be raw or gzip compressed */

  wasm_byte_code: string;
  /** InstantiatePermission to apply on contract creation, optional */

  instantiate_permission?: AccessConfigAmino;
  /** UnpinCode code on upload, optional */

  unpin_code: boolean;
  /** Source is the URL where the code is hosted */

  source: string;
  /**
   * Builder is the docker image used to build the code deterministically, used
   * for smart contract verification
   */

  builder: string;
  /**
   * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
   * contract verification
   */

  code_hash: Uint8Array;
}
/** StoreCodeProposal gov proposal content type to submit WASM code to the system */

export interface StoreCodeProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  run_as: string;
  wasm_byte_code: Uint8Array;
  instantiate_permission?: AccessConfigSDKType;
  unpin_code: boolean;
  source: string;
  builder: string;
  code_hash: Uint8Array;
}
/**
 * InstantiateContractProposal gov proposal content type to instantiate a
 * contract.
 */

export interface InstantiateContractProposal {
  $typeUrl?: string;
  /** Title is a short summary */

  title: string;
  /** Description is a human readable text */

  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */

  runAs: string;
  /** Admin is an optional address that can execute migrations */

  admin: string;
  /** CodeID is the reference to the stored WASM code */

  codeId: Long;
  /** Label is optional metadata to be stored with a constract instance. */

  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */

  funds: Coin[];
}
/**
 * InstantiateContractProposal gov proposal content type to instantiate a
 * contract.
 */

export interface InstantiateContractProposalAmino {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */

  run_as: string;
  /** Admin is an optional address that can execute migrations */

  admin: string;
  /** CodeID is the reference to the stored WASM code */

  code_id: string;
  /** Label is optional metadata to be stored with a constract instance. */

  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */

  funds: CoinAmino[];
}
/**
 * InstantiateContractProposal gov proposal content type to instantiate a
 * contract.
 */

export interface InstantiateContractProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  run_as: string;
  admin: string;
  code_id: Long;
  label: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
}
/**
 * InstantiateContract2Proposal gov proposal content type to instantiate
 * contract 2
 */

export interface InstantiateContract2Proposal {
  $typeUrl?: string;
  /** Title is a short summary */

  title: string;
  /** Description is a human readable text */

  description: string;
  /** RunAs is the address that is passed to the contract's enviroment as sender */

  runAs: string;
  /** Admin is an optional address that can execute migrations */

  admin: string;
  /** CodeID is the reference to the stored WASM code */

  codeId: Long;
  /** Label is optional metadata to be stored with a constract instance. */

  label: string;
  /** Msg json encode message to be passed to the contract on instantiation */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */

  funds: Coin[];
  /** Salt is an arbitrary value provided by the sender. Size can be 1 to 64. */

  salt: Uint8Array;
  /**
   * FixMsg include the msg value into the hash for the predictable address.
   * Default is false
   */

  fixMsg: boolean;
}
/**
 * InstantiateContract2Proposal gov proposal content type to instantiate
 * contract 2
 */

export interface InstantiateContract2ProposalAmino {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /** RunAs is the address that is passed to the contract's enviroment as sender */

  run_as: string;
  /** Admin is an optional address that can execute migrations */

  admin: string;
  /** CodeID is the reference to the stored WASM code */

  code_id: string;
  /** Label is optional metadata to be stored with a constract instance. */

  label: string;
  /** Msg json encode message to be passed to the contract on instantiation */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */

  funds: CoinAmino[];
  /** Salt is an arbitrary value provided by the sender. Size can be 1 to 64. */

  salt: Uint8Array;
  /**
   * FixMsg include the msg value into the hash for the predictable address.
   * Default is false
   */

  fix_msg: boolean;
}
/**
 * InstantiateContract2Proposal gov proposal content type to instantiate
 * contract 2
 */

export interface InstantiateContract2ProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  run_as: string;
  admin: string;
  code_id: Long;
  label: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
  salt: Uint8Array;
  fix_msg: boolean;
}
/** MigrateContractProposal gov proposal content type to migrate a contract. */

export interface MigrateContractProposal {
  $typeUrl?: string;
  /** Title is a short summary */

  title: string;
  /** Description is a human readable text */

  description: string;
  /** Contract is the address of the smart contract */

  contract: string;
  /** CodeID references the new WASM code */

  codeId: Long;
  /** Msg json encoded message to be passed to the contract on migration */

  msg: Uint8Array;
}
/** MigrateContractProposal gov proposal content type to migrate a contract. */

export interface MigrateContractProposalAmino {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /** Contract is the address of the smart contract */

  contract: string;
  /** CodeID references the new WASM code */

  code_id: string;
  /** Msg json encoded message to be passed to the contract on migration */

  msg: Uint8Array;
}
/** MigrateContractProposal gov proposal content type to migrate a contract. */

export interface MigrateContractProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  contract: string;
  code_id: Long;
  msg: Uint8Array;
}
/** SudoContractProposal gov proposal content type to call sudo on a contract. */

export interface SudoContractProposal {
  $typeUrl?: string;
  /** Title is a short summary */

  title: string;
  /** Description is a human readable text */

  description: string;
  /** Contract is the address of the smart contract */

  contract: string;
  /** Msg json encoded message to be passed to the contract as sudo */

  msg: Uint8Array;
}
/** SudoContractProposal gov proposal content type to call sudo on a contract. */

export interface SudoContractProposalAmino {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /** Contract is the address of the smart contract */

  contract: string;
  /** Msg json encoded message to be passed to the contract as sudo */

  msg: Uint8Array;
}
/** SudoContractProposal gov proposal content type to call sudo on a contract. */

export interface SudoContractProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  contract: string;
  msg: Uint8Array;
}
/**
 * ExecuteContractProposal gov proposal content type to call execute on a
 * contract.
 */

export interface ExecuteContractProposal {
  $typeUrl?: string;
  /** Title is a short summary */

  title: string;
  /** Description is a human readable text */

  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */

  runAs: string;
  /** Contract is the address of the smart contract */

  contract: string;
  /** Msg json encoded message to be passed to the contract as execute */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */

  funds: Coin[];
}
/**
 * ExecuteContractProposal gov proposal content type to call execute on a
 * contract.
 */

export interface ExecuteContractProposalAmino {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */

  run_as: string;
  /** Contract is the address of the smart contract */

  contract: string;
  /** Msg json encoded message to be passed to the contract as execute */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */

  funds: CoinAmino[];
}
/**
 * ExecuteContractProposal gov proposal content type to call execute on a
 * contract.
 */

export interface ExecuteContractProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  run_as: string;
  contract: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
}
/** UpdateAdminProposal gov proposal content type to set an admin for a contract. */

export interface UpdateAdminProposal {
  $typeUrl?: string;
  /** Title is a short summary */

  title: string;
  /** Description is a human readable text */

  description: string;
  /** NewAdmin address to be set */

  newAdmin: string;
  /** Contract is the address of the smart contract */

  contract: string;
}
/** UpdateAdminProposal gov proposal content type to set an admin for a contract. */

export interface UpdateAdminProposalAmino {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /** NewAdmin address to be set */

  new_admin: string;
  /** Contract is the address of the smart contract */

  contract: string;
}
/** UpdateAdminProposal gov proposal content type to set an admin for a contract. */

export interface UpdateAdminProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  new_admin: string;
  contract: string;
}
/**
 * ClearAdminProposal gov proposal content type to clear the admin of a
 * contract.
 */

export interface ClearAdminProposal {
  $typeUrl?: string;
  /** Title is a short summary */

  title: string;
  /** Description is a human readable text */

  description: string;
  /** Contract is the address of the smart contract */

  contract: string;
}
/**
 * ClearAdminProposal gov proposal content type to clear the admin of a
 * contract.
 */

export interface ClearAdminProposalAmino {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /** Contract is the address of the smart contract */

  contract: string;
}
/**
 * ClearAdminProposal gov proposal content type to clear the admin of a
 * contract.
 */

export interface ClearAdminProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  contract: string;
}
/**
 * PinCodesProposal gov proposal content type to pin a set of code ids in the
 * wasmvm cache.
 */

export interface PinCodesProposal {
  $typeUrl?: string;
  /** Title is a short summary */

  title: string;
  /** Description is a human readable text */

  description: string;
  /** CodeIDs references the new WASM codes */

  codeIds: Long[];
}
/**
 * PinCodesProposal gov proposal content type to pin a set of code ids in the
 * wasmvm cache.
 */

export interface PinCodesProposalAmino {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /** CodeIDs references the new WASM codes */

  code_ids: string[];
}
/**
 * PinCodesProposal gov proposal content type to pin a set of code ids in the
 * wasmvm cache.
 */

export interface PinCodesProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  code_ids: Long[];
}
/**
 * UnpinCodesProposal gov proposal content type to unpin a set of code ids in
 * the wasmvm cache.
 */

export interface UnpinCodesProposal {
  $typeUrl?: string;
  /** Title is a short summary */

  title: string;
  /** Description is a human readable text */

  description: string;
  /** CodeIDs references the WASM codes */

  codeIds: Long[];
}
/**
 * UnpinCodesProposal gov proposal content type to unpin a set of code ids in
 * the wasmvm cache.
 */

export interface UnpinCodesProposalAmino {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /** CodeIDs references the WASM codes */

  code_ids: string[];
}
/**
 * UnpinCodesProposal gov proposal content type to unpin a set of code ids in
 * the wasmvm cache.
 */

export interface UnpinCodesProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  code_ids: Long[];
}
/**
 * AccessConfigUpdate contains the code id and the access config to be
 * applied.
 */

export interface AccessConfigUpdate {
  /** CodeID is the reference to the stored WASM code to be updated */
  codeId: Long;
  /** InstantiatePermission to apply to the set of code ids */

  instantiatePermission?: AccessConfig;
}
/**
 * AccessConfigUpdate contains the code id and the access config to be
 * applied.
 */

export interface AccessConfigUpdateAmino {
  /** CodeID is the reference to the stored WASM code to be updated */
  code_id: string;
  /** InstantiatePermission to apply to the set of code ids */

  instantiate_permission?: AccessConfigAmino;
}
/**
 * AccessConfigUpdate contains the code id and the access config to be
 * applied.
 */

export interface AccessConfigUpdateSDKType {
  code_id: Long;
  instantiate_permission?: AccessConfigSDKType;
}
/**
 * UpdateInstantiateConfigProposal gov proposal content type to update
 * instantiate config to a  set of code ids.
 */

export interface UpdateInstantiateConfigProposal {
  $typeUrl?: string;
  /** Title is a short summary */

  title: string;
  /** Description is a human readable text */

  description: string;
  /**
   * AccessConfigUpdate contains the list of code ids and the access config
   * to be applied.
   */

  accessConfigUpdates: AccessConfigUpdate[];
}
/**
 * UpdateInstantiateConfigProposal gov proposal content type to update
 * instantiate config to a  set of code ids.
 */

export interface UpdateInstantiateConfigProposalAmino {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /**
   * AccessConfigUpdate contains the list of code ids and the access config
   * to be applied.
   */

  access_config_updates: AccessConfigUpdateAmino[];
}
/**
 * UpdateInstantiateConfigProposal gov proposal content type to update
 * instantiate config to a  set of code ids.
 */

export interface UpdateInstantiateConfigProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  access_config_updates: AccessConfigUpdateSDKType[];
}
/**
 * StoreAndInstantiateContractProposal gov proposal content type to store
 * and instantiate the contract.
 */

export interface StoreAndInstantiateContractProposal {
  $typeUrl?: string;
  /** Title is a short summary */

  title: string;
  /** Description is a human readable text */

  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */

  runAs: string;
  /** WASMByteCode can be raw or gzip compressed */

  wasmByteCode: Uint8Array;
  /** InstantiatePermission to apply on contract creation, optional */

  instantiatePermission?: AccessConfig;
  /** UnpinCode code on upload, optional */

  unpinCode: boolean;
  /** Admin is an optional address that can execute migrations */

  admin: string;
  /** Label is optional metadata to be stored with a constract instance. */

  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */

  funds: Coin[];
  /** Source is the URL where the code is hosted */

  source: string;
  /**
   * Builder is the docker image used to build the code deterministically, used
   * for smart contract verification
   */

  builder: string;
  /**
   * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
   * contract verification
   */

  codeHash: Uint8Array;
}
/**
 * StoreAndInstantiateContractProposal gov proposal content type to store
 * and instantiate the contract.
 */

export interface StoreAndInstantiateContractProposalAmino {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */

  run_as: string;
  /** WASMByteCode can be raw or gzip compressed */

  wasm_byte_code: string;
  /** InstantiatePermission to apply on contract creation, optional */

  instantiate_permission?: AccessConfigAmino;
  /** UnpinCode code on upload, optional */

  unpin_code: boolean;
  /** Admin is an optional address that can execute migrations */

  admin: string;
  /** Label is optional metadata to be stored with a constract instance. */

  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */

  funds: CoinAmino[];
  /** Source is the URL where the code is hosted */

  source: string;
  /**
   * Builder is the docker image used to build the code deterministically, used
   * for smart contract verification
   */

  builder: string;
  /**
   * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
   * contract verification
   */

  code_hash: Uint8Array;
}
/**
 * StoreAndInstantiateContractProposal gov proposal content type to store
 * and instantiate the contract.
 */

export interface StoreAndInstantiateContractProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  run_as: string;
  wasm_byte_code: Uint8Array;
  instantiate_permission?: AccessConfigSDKType;
  unpin_code: boolean;
  admin: string;
  label: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
  source: string;
  builder: string;
  code_hash: Uint8Array;
}

function createBaseStoreCodeProposal(): StoreCodeProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
    title: "",
    description: "",
    runAs: "",
    wasmByteCode: new Uint8Array(),
    instantiatePermission: undefined,
    unpinCode: false,
    source: "",
    builder: "",
    codeHash: new Uint8Array()
  };
}

export const StoreCodeProposal = {
  encode(message: StoreCodeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }

    if (message.wasmByteCode.length !== 0) {
      writer.uint32(34).bytes(message.wasmByteCode);
    }

    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(58).fork()).ldelim();
    }

    if (message.unpinCode === true) {
      writer.uint32(64).bool(message.unpinCode);
    }

    if (message.source !== "") {
      writer.uint32(74).string(message.source);
    }

    if (message.builder !== "") {
      writer.uint32(82).string(message.builder);
    }

    if (message.codeHash.length !== 0) {
      writer.uint32(90).bytes(message.codeHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreCodeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreCodeProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.runAs = reader.string();
          break;

        case 4:
          message.wasmByteCode = reader.bytes();
          break;

        case 7:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;

        case 8:
          message.unpinCode = reader.bool();
          break;

        case 9:
          message.source = reader.string();
          break;

        case 10:
          message.builder = reader.string();
          break;

        case 11:
          message.codeHash = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StoreCodeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      runAs: isSet(object.runAs) ? String(object.runAs) : "",
      wasmByteCode: isSet(object.wasmByteCode) ? bytesFromBase64(object.wasmByteCode) : new Uint8Array(),
      instantiatePermission: isSet(object.instantiatePermission) ? AccessConfig.fromJSON(object.instantiatePermission) : undefined,
      unpinCode: isSet(object.unpinCode) ? Boolean(object.unpinCode) : false,
      source: isSet(object.source) ? String(object.source) : "",
      builder: isSet(object.builder) ? String(object.builder) : "",
      codeHash: isSet(object.codeHash) ? bytesFromBase64(object.codeHash) : new Uint8Array()
    };
  },

  toJSON(message: StoreCodeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.runAs !== undefined && (obj.runAs = message.runAs);
    message.wasmByteCode !== undefined && (obj.wasmByteCode = base64FromBytes(message.wasmByteCode !== undefined ? message.wasmByteCode : new Uint8Array()));
    message.instantiatePermission !== undefined && (obj.instantiatePermission = message.instantiatePermission ? AccessConfig.toJSON(message.instantiatePermission) : undefined);
    message.unpinCode !== undefined && (obj.unpinCode = message.unpinCode);
    message.source !== undefined && (obj.source = message.source);
    message.builder !== undefined && (obj.builder = message.builder);
    message.codeHash !== undefined && (obj.codeHash = base64FromBytes(message.codeHash !== undefined ? message.codeHash : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<StoreCodeProposal>): StoreCodeProposal {
    const message = createBaseStoreCodeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
    message.unpinCode = object.unpinCode ?? false;
    message.source = object.source ?? "";
    message.builder = object.builder ?? "";
    message.codeHash = object.codeHash ?? new Uint8Array();
    return message;
  },

  fromAmino(object: StoreCodeProposalAmino): StoreCodeProposal {
    return {
      title: object.title,
      description: object.description,
      runAs: object.run_as,
      wasmByteCode: object.wasm_byte_code,
      instantiatePermission: object?.instantiate_permission ? AccessConfig.fromAmino(object.instantiate_permission) : undefined,
      unpinCode: object.unpin_code,
      source: object.source,
      builder: object.builder,
      codeHash: object.code_hash
    };
  },

  toAmino(message: StoreCodeProposal): StoreCodeProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.run_as = message.runAs;
    obj.wasm_byte_code = message.wasmByteCode;
    obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toAmino(message.instantiatePermission) : undefined;
    obj.unpin_code = message.unpinCode;
    obj.source = message.source;
    obj.builder = message.builder;
    obj.code_hash = message.codeHash;
    return obj;
  }

};

function createBaseInstantiateContractProposal(): InstantiateContractProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
    title: "",
    description: "",
    runAs: "",
    admin: "",
    codeId: Long.UZERO,
    label: "",
    msg: new Uint8Array(),
    funds: []
  };
}

export const InstantiateContractProposal = {
  encode(message: InstantiateContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }

    if (message.admin !== "") {
      writer.uint32(34).string(message.admin);
    }

    if (!message.codeId.isZero()) {
      writer.uint32(40).uint64(message.codeId);
    }

    if (message.label !== "") {
      writer.uint32(50).string(message.label);
    }

    if (message.msg.length !== 0) {
      writer.uint32(58).bytes(message.msg);
    }

    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstantiateContractProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstantiateContractProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.runAs = reader.string();
          break;

        case 4:
          message.admin = reader.string();
          break;

        case 5:
          message.codeId = (reader.uint64() as Long);
          break;

        case 6:
          message.label = reader.string();
          break;

        case 7:
          message.msg = reader.bytes();
          break;

        case 8:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): InstantiateContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      runAs: isSet(object.runAs) ? String(object.runAs) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      label: isSet(object.label) ? String(object.label) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: InstantiateContractProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.runAs !== undefined && (obj.runAs = message.runAs);
    message.admin !== undefined && (obj.admin = message.admin);
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.label !== undefined && (obj.label = message.label);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));

    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }

    return obj;
  },

  fromPartial(object: Partial<InstantiateContractProposal>): InstantiateContractProposal {
    const message = createBaseInstantiateContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.admin = object.admin ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: InstantiateContractProposalAmino): InstantiateContractProposal {
    return {
      title: object.title,
      description: object.description,
      runAs: object.run_as,
      admin: object.admin,
      codeId: Long.fromString(object.code_id),
      label: object.label,
      msg: object.msg,
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromAmino(e)) : []
    };
  },

  toAmino(message: InstantiateContractProposal): InstantiateContractProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.run_as = message.runAs;
    obj.admin = message.admin;
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.label = message.label;
    obj.msg = message.msg;

    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.funds = [];
    }

    return obj;
  }

};

function createBaseInstantiateContract2Proposal(): InstantiateContract2Proposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.InstantiateContract2Proposal",
    title: "",
    description: "",
    runAs: "",
    admin: "",
    codeId: Long.UZERO,
    label: "",
    msg: new Uint8Array(),
    funds: [],
    salt: new Uint8Array(),
    fixMsg: false
  };
}

export const InstantiateContract2Proposal = {
  encode(message: InstantiateContract2Proposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }

    if (message.admin !== "") {
      writer.uint32(34).string(message.admin);
    }

    if (!message.codeId.isZero()) {
      writer.uint32(40).uint64(message.codeId);
    }

    if (message.label !== "") {
      writer.uint32(50).string(message.label);
    }

    if (message.msg.length !== 0) {
      writer.uint32(58).bytes(message.msg);
    }

    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    if (message.salt.length !== 0) {
      writer.uint32(74).bytes(message.salt);
    }

    if (message.fixMsg === true) {
      writer.uint32(80).bool(message.fixMsg);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstantiateContract2Proposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstantiateContract2Proposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.runAs = reader.string();
          break;

        case 4:
          message.admin = reader.string();
          break;

        case 5:
          message.codeId = (reader.uint64() as Long);
          break;

        case 6:
          message.label = reader.string();
          break;

        case 7:
          message.msg = reader.bytes();
          break;

        case 8:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;

        case 9:
          message.salt = reader.bytes();
          break;

        case 10:
          message.fixMsg = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): InstantiateContract2Proposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      runAs: isSet(object.runAs) ? String(object.runAs) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      label: isSet(object.label) ? String(object.label) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : [],
      salt: isSet(object.salt) ? bytesFromBase64(object.salt) : new Uint8Array(),
      fixMsg: isSet(object.fixMsg) ? Boolean(object.fixMsg) : false
    };
  },

  toJSON(message: InstantiateContract2Proposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.runAs !== undefined && (obj.runAs = message.runAs);
    message.admin !== undefined && (obj.admin = message.admin);
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.label !== undefined && (obj.label = message.label);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));

    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }

    message.salt !== undefined && (obj.salt = base64FromBytes(message.salt !== undefined ? message.salt : new Uint8Array()));
    message.fixMsg !== undefined && (obj.fixMsg = message.fixMsg);
    return obj;
  },

  fromPartial(object: Partial<InstantiateContract2Proposal>): InstantiateContract2Proposal {
    const message = createBaseInstantiateContract2Proposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.admin = object.admin ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    message.salt = object.salt ?? new Uint8Array();
    message.fixMsg = object.fixMsg ?? false;
    return message;
  },

  fromAmino(object: InstantiateContract2ProposalAmino): InstantiateContract2Proposal {
    return {
      title: object.title,
      description: object.description,
      runAs: object.run_as,
      admin: object.admin,
      codeId: Long.fromString(object.code_id),
      label: object.label,
      msg: object.msg,
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromAmino(e)) : [],
      salt: object.salt,
      fixMsg: object.fix_msg
    };
  },

  toAmino(message: InstantiateContract2Proposal): InstantiateContract2ProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.run_as = message.runAs;
    obj.admin = message.admin;
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.label = message.label;
    obj.msg = message.msg;

    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.funds = [];
    }

    obj.salt = message.salt;
    obj.fix_msg = message.fixMsg;
    return obj;
  }

};

function createBaseMigrateContractProposal(): MigrateContractProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal",
    title: "",
    description: "",
    contract: "",
    codeId: Long.UZERO,
    msg: new Uint8Array()
  };
}

export const MigrateContractProposal = {
  encode(message: MigrateContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }

    if (!message.codeId.isZero()) {
      writer.uint32(40).uint64(message.codeId);
    }

    if (message.msg.length !== 0) {
      writer.uint32(50).bytes(message.msg);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MigrateContractProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrateContractProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 4:
          message.contract = reader.string();
          break;

        case 5:
          message.codeId = (reader.uint64() as Long);
          break;

        case 6:
          message.msg = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MigrateContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },

  toJSON(message: MigrateContractProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MigrateContractProposal>): MigrateContractProposal {
    const message = createBaseMigrateContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.msg = object.msg ?? new Uint8Array();
    return message;
  },

  fromAmino(object: MigrateContractProposalAmino): MigrateContractProposal {
    return {
      title: object.title,
      description: object.description,
      contract: object.contract,
      codeId: Long.fromString(object.code_id),
      msg: object.msg
    };
  },

  toAmino(message: MigrateContractProposal): MigrateContractProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.contract = message.contract;
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.msg = message.msg;
    return obj;
  }

};

function createBaseSudoContractProposal(): SudoContractProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal",
    title: "",
    description: "",
    contract: "",
    msg: new Uint8Array()
  };
}

export const SudoContractProposal = {
  encode(message: SudoContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }

    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SudoContractProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSudoContractProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.contract = reader.string();
          break;

        case 4:
          message.msg = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SudoContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },

  toJSON(message: SudoContractProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<SudoContractProposal>): SudoContractProposal {
    const message = createBaseSudoContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    return message;
  },

  fromAmino(object: SudoContractProposalAmino): SudoContractProposal {
    return {
      title: object.title,
      description: object.description,
      contract: object.contract,
      msg: object.msg
    };
  },

  toAmino(message: SudoContractProposal): SudoContractProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.contract = message.contract;
    obj.msg = message.msg;
    return obj;
  }

};

function createBaseExecuteContractProposal(): ExecuteContractProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal",
    title: "",
    description: "",
    runAs: "",
    contract: "",
    msg: new Uint8Array(),
    funds: []
  };
}

export const ExecuteContractProposal = {
  encode(message: ExecuteContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }

    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }

    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }

    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecuteContractProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecuteContractProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.runAs = reader.string();
          break;

        case 4:
          message.contract = reader.string();
          break;

        case 5:
          message.msg = reader.bytes();
          break;

        case 6:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ExecuteContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      runAs: isSet(object.runAs) ? String(object.runAs) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: ExecuteContractProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.runAs !== undefined && (obj.runAs = message.runAs);
    message.contract !== undefined && (obj.contract = message.contract);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));

    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }

    return obj;
  },

  fromPartial(object: Partial<ExecuteContractProposal>): ExecuteContractProposal {
    const message = createBaseExecuteContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: ExecuteContractProposalAmino): ExecuteContractProposal {
    return {
      title: object.title,
      description: object.description,
      runAs: object.run_as,
      contract: object.contract,
      msg: object.msg,
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromAmino(e)) : []
    };
  },

  toAmino(message: ExecuteContractProposal): ExecuteContractProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.run_as = message.runAs;
    obj.contract = message.contract;
    obj.msg = message.msg;

    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.funds = [];
    }

    return obj;
  }

};

function createBaseUpdateAdminProposal(): UpdateAdminProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal",
    title: "",
    description: "",
    newAdmin: "",
    contract: ""
  };
}

export const UpdateAdminProposal = {
  encode(message: UpdateAdminProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }

    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAdminProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAdminProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.newAdmin = reader.string();
          break;

        case 4:
          message.contract = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UpdateAdminProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },

  toJSON(message: UpdateAdminProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },

  fromPartial(object: Partial<UpdateAdminProposal>): UpdateAdminProposal {
    const message = createBaseUpdateAdminProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.newAdmin = object.newAdmin ?? "";
    message.contract = object.contract ?? "";
    return message;
  },

  fromAmino(object: UpdateAdminProposalAmino): UpdateAdminProposal {
    return {
      title: object.title,
      description: object.description,
      newAdmin: object.new_admin,
      contract: object.contract
    };
  },

  toAmino(message: UpdateAdminProposal): UpdateAdminProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.new_admin = message.newAdmin;
    obj.contract = message.contract;
    return obj;
  }

};

function createBaseClearAdminProposal(): ClearAdminProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal",
    title: "",
    description: "",
    contract: ""
  };
}

export const ClearAdminProposal = {
  encode(message: ClearAdminProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClearAdminProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClearAdminProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.contract = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ClearAdminProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },

  toJSON(message: ClearAdminProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },

  fromPartial(object: Partial<ClearAdminProposal>): ClearAdminProposal {
    const message = createBaseClearAdminProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    return message;
  },

  fromAmino(object: ClearAdminProposalAmino): ClearAdminProposal {
    return {
      title: object.title,
      description: object.description,
      contract: object.contract
    };
  },

  toAmino(message: ClearAdminProposal): ClearAdminProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.contract = message.contract;
    return obj;
  }

};

function createBasePinCodesProposal(): PinCodesProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal",
    title: "",
    description: "",
    codeIds: []
  };
}

export const PinCodesProposal = {
  encode(message: PinCodesProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    writer.uint32(26).fork();

    for (const v of message.codeIds) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PinCodesProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePinCodesProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.codeIds.push((reader.uint64() as Long));
            }
          } else {
            message.codeIds.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PinCodesProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      codeIds: Array.isArray(object?.codeIds) ? object.codeIds.map((e: any) => Long.fromValue(e)) : []
    };
  },

  toJSON(message: PinCodesProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);

    if (message.codeIds) {
      obj.codeIds = message.codeIds.map(e => (e || Long.UZERO).toString());
    } else {
      obj.codeIds = [];
    }

    return obj;
  },

  fromPartial(object: Partial<PinCodesProposal>): PinCodesProposal {
    const message = createBasePinCodesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.codeIds = object.codeIds?.map(e => Long.fromValue(e)) || [];
    return message;
  },

  fromAmino(object: PinCodesProposalAmino): PinCodesProposal {
    return {
      title: object.title,
      description: object.description,
      codeIds: Array.isArray(object?.code_ids) ? object.code_ids.map((e: any) => e) : []
    };
  },

  toAmino(message: PinCodesProposal): PinCodesProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;

    if (message.codeIds) {
      obj.code_ids = message.codeIds.map(e => e);
    } else {
      obj.code_ids = [];
    }

    return obj;
  }

};

function createBaseUnpinCodesProposal(): UnpinCodesProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal",
    title: "",
    description: "",
    codeIds: []
  };
}

export const UnpinCodesProposal = {
  encode(message: UnpinCodesProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    writer.uint32(26).fork();

    for (const v of message.codeIds) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnpinCodesProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnpinCodesProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.codeIds.push((reader.uint64() as Long));
            }
          } else {
            message.codeIds.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UnpinCodesProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      codeIds: Array.isArray(object?.codeIds) ? object.codeIds.map((e: any) => Long.fromValue(e)) : []
    };
  },

  toJSON(message: UnpinCodesProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);

    if (message.codeIds) {
      obj.codeIds = message.codeIds.map(e => (e || Long.UZERO).toString());
    } else {
      obj.codeIds = [];
    }

    return obj;
  },

  fromPartial(object: Partial<UnpinCodesProposal>): UnpinCodesProposal {
    const message = createBaseUnpinCodesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.codeIds = object.codeIds?.map(e => Long.fromValue(e)) || [];
    return message;
  },

  fromAmino(object: UnpinCodesProposalAmino): UnpinCodesProposal {
    return {
      title: object.title,
      description: object.description,
      codeIds: Array.isArray(object?.code_ids) ? object.code_ids.map((e: any) => e) : []
    };
  },

  toAmino(message: UnpinCodesProposal): UnpinCodesProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;

    if (message.codeIds) {
      obj.code_ids = message.codeIds.map(e => e);
    } else {
      obj.code_ids = [];
    }

    return obj;
  }

};

function createBaseAccessConfigUpdate(): AccessConfigUpdate {
  return {
    codeId: Long.UZERO,
    instantiatePermission: undefined
  };
}

export const AccessConfigUpdate = {
  encode(message: AccessConfigUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }

    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessConfigUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessConfigUpdate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeId = (reader.uint64() as Long);
          break;

        case 2:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccessConfigUpdate {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      instantiatePermission: isSet(object.instantiatePermission) ? AccessConfig.fromJSON(object.instantiatePermission) : undefined
    };
  },

  toJSON(message: AccessConfigUpdate): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.instantiatePermission !== undefined && (obj.instantiatePermission = message.instantiatePermission ? AccessConfig.toJSON(message.instantiatePermission) : undefined);
    return obj;
  },

  fromPartial(object: Partial<AccessConfigUpdate>): AccessConfigUpdate {
    const message = createBaseAccessConfigUpdate();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
    return message;
  },

  fromAmino(object: AccessConfigUpdateAmino): AccessConfigUpdate {
    return {
      codeId: Long.fromString(object.code_id),
      instantiatePermission: object?.instantiate_permission ? AccessConfig.fromAmino(object.instantiate_permission) : undefined
    };
  },

  toAmino(message: AccessConfigUpdate): AccessConfigUpdateAmino {
    const obj: any = {};
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toAmino(message.instantiatePermission) : undefined;
    return obj;
  }

};

function createBaseUpdateInstantiateConfigProposal(): UpdateInstantiateConfigProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
    title: "",
    description: "",
    accessConfigUpdates: []
  };
}

export const UpdateInstantiateConfigProposal = {
  encode(message: UpdateInstantiateConfigProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.accessConfigUpdates) {
      AccessConfigUpdate.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateInstantiateConfigProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateInstantiateConfigProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.accessConfigUpdates.push(AccessConfigUpdate.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UpdateInstantiateConfigProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      accessConfigUpdates: Array.isArray(object?.accessConfigUpdates) ? object.accessConfigUpdates.map((e: any) => AccessConfigUpdate.fromJSON(e)) : []
    };
  },

  toJSON(message: UpdateInstantiateConfigProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);

    if (message.accessConfigUpdates) {
      obj.accessConfigUpdates = message.accessConfigUpdates.map(e => e ? AccessConfigUpdate.toJSON(e) : undefined);
    } else {
      obj.accessConfigUpdates = [];
    }

    return obj;
  },

  fromPartial(object: Partial<UpdateInstantiateConfigProposal>): UpdateInstantiateConfigProposal {
    const message = createBaseUpdateInstantiateConfigProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.accessConfigUpdates = object.accessConfigUpdates?.map(e => AccessConfigUpdate.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: UpdateInstantiateConfigProposalAmino): UpdateInstantiateConfigProposal {
    return {
      title: object.title,
      description: object.description,
      accessConfigUpdates: Array.isArray(object?.access_config_updates) ? object.access_config_updates.map((e: any) => AccessConfigUpdate.fromAmino(e)) : []
    };
  },

  toAmino(message: UpdateInstantiateConfigProposal): UpdateInstantiateConfigProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;

    if (message.accessConfigUpdates) {
      obj.access_config_updates = message.accessConfigUpdates.map(e => e ? AccessConfigUpdate.toAmino(e) : undefined);
    } else {
      obj.access_config_updates = [];
    }

    return obj;
  }

};

function createBaseStoreAndInstantiateContractProposal(): StoreAndInstantiateContractProposal {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal",
    title: "",
    description: "",
    runAs: "",
    wasmByteCode: new Uint8Array(),
    instantiatePermission: undefined,
    unpinCode: false,
    admin: "",
    label: "",
    msg: new Uint8Array(),
    funds: [],
    source: "",
    builder: "",
    codeHash: new Uint8Array()
  };
}

export const StoreAndInstantiateContractProposal = {
  encode(message: StoreAndInstantiateContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }

    if (message.wasmByteCode.length !== 0) {
      writer.uint32(34).bytes(message.wasmByteCode);
    }

    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(42).fork()).ldelim();
    }

    if (message.unpinCode === true) {
      writer.uint32(48).bool(message.unpinCode);
    }

    if (message.admin !== "") {
      writer.uint32(58).string(message.admin);
    }

    if (message.label !== "") {
      writer.uint32(66).string(message.label);
    }

    if (message.msg.length !== 0) {
      writer.uint32(74).bytes(message.msg);
    }

    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(82).fork()).ldelim();
    }

    if (message.source !== "") {
      writer.uint32(90).string(message.source);
    }

    if (message.builder !== "") {
      writer.uint32(98).string(message.builder);
    }

    if (message.codeHash.length !== 0) {
      writer.uint32(106).bytes(message.codeHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreAndInstantiateContractProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreAndInstantiateContractProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.runAs = reader.string();
          break;

        case 4:
          message.wasmByteCode = reader.bytes();
          break;

        case 5:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;

        case 6:
          message.unpinCode = reader.bool();
          break;

        case 7:
          message.admin = reader.string();
          break;

        case 8:
          message.label = reader.string();
          break;

        case 9:
          message.msg = reader.bytes();
          break;

        case 10:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;

        case 11:
          message.source = reader.string();
          break;

        case 12:
          message.builder = reader.string();
          break;

        case 13:
          message.codeHash = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StoreAndInstantiateContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      runAs: isSet(object.runAs) ? String(object.runAs) : "",
      wasmByteCode: isSet(object.wasmByteCode) ? bytesFromBase64(object.wasmByteCode) : new Uint8Array(),
      instantiatePermission: isSet(object.instantiatePermission) ? AccessConfig.fromJSON(object.instantiatePermission) : undefined,
      unpinCode: isSet(object.unpinCode) ? Boolean(object.unpinCode) : false,
      admin: isSet(object.admin) ? String(object.admin) : "",
      label: isSet(object.label) ? String(object.label) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : [],
      source: isSet(object.source) ? String(object.source) : "",
      builder: isSet(object.builder) ? String(object.builder) : "",
      codeHash: isSet(object.codeHash) ? bytesFromBase64(object.codeHash) : new Uint8Array()
    };
  },

  toJSON(message: StoreAndInstantiateContractProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.runAs !== undefined && (obj.runAs = message.runAs);
    message.wasmByteCode !== undefined && (obj.wasmByteCode = base64FromBytes(message.wasmByteCode !== undefined ? message.wasmByteCode : new Uint8Array()));
    message.instantiatePermission !== undefined && (obj.instantiatePermission = message.instantiatePermission ? AccessConfig.toJSON(message.instantiatePermission) : undefined);
    message.unpinCode !== undefined && (obj.unpinCode = message.unpinCode);
    message.admin !== undefined && (obj.admin = message.admin);
    message.label !== undefined && (obj.label = message.label);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));

    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }

    message.source !== undefined && (obj.source = message.source);
    message.builder !== undefined && (obj.builder = message.builder);
    message.codeHash !== undefined && (obj.codeHash = base64FromBytes(message.codeHash !== undefined ? message.codeHash : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<StoreAndInstantiateContractProposal>): StoreAndInstantiateContractProposal {
    const message = createBaseStoreAndInstantiateContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
    message.unpinCode = object.unpinCode ?? false;
    message.admin = object.admin ?? "";
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    message.source = object.source ?? "";
    message.builder = object.builder ?? "";
    message.codeHash = object.codeHash ?? new Uint8Array();
    return message;
  },

  fromAmino(object: StoreAndInstantiateContractProposalAmino): StoreAndInstantiateContractProposal {
    return {
      title: object.title,
      description: object.description,
      runAs: object.run_as,
      wasmByteCode: object.wasm_byte_code,
      instantiatePermission: object?.instantiate_permission ? AccessConfig.fromAmino(object.instantiate_permission) : undefined,
      unpinCode: object.unpin_code,
      admin: object.admin,
      label: object.label,
      msg: object.msg,
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromAmino(e)) : [],
      source: object.source,
      builder: object.builder,
      codeHash: object.code_hash
    };
  },

  toAmino(message: StoreAndInstantiateContractProposal): StoreAndInstantiateContractProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.run_as = message.runAs;
    obj.wasm_byte_code = message.wasmByteCode;
    obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toAmino(message.instantiatePermission) : undefined;
    obj.unpin_code = message.unpinCode;
    obj.admin = message.admin;
    obj.label = message.label;
    obj.msg = message.msg;

    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.funds = [];
    }

    obj.source = message.source;
    obj.builder = message.builder;
    obj.code_hash = message.codeHash;
    return obj;
  }

};
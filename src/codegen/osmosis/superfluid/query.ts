import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { SuperfluidAssetType, SuperfluidAsset, SuperfluidAssetAmino, SuperfluidAssetSDKType, OsmoEquivalentMultiplierRecord, OsmoEquivalentMultiplierRecordAmino, OsmoEquivalentMultiplierRecordSDKType, SuperfluidDelegationRecord, SuperfluidDelegationRecordAmino, SuperfluidDelegationRecordSDKType, superfluidAssetTypeFromJSON, superfluidAssetTypeToJSON } from "./superfluid";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock, SyntheticLockAmino, SyntheticLockSDKType } from "../lockup/lock";
import { DelegationResponse, DelegationResponseAmino, DelegationResponseSDKType } from "../../cosmos/staking/v1beta1/staking";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long } from "../../helpers";
export interface QueryParamsRequest {}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface AssetTypeRequest {
  denom: string;
}
export interface AssetTypeRequestAmino {
  denom: string;
}
export interface AssetTypeRequestSDKType {
  denom: string;
}
export interface AssetTypeResponse {
  assetType: SuperfluidAssetType;
}
export interface AssetTypeResponseAmino {
  asset_type: SuperfluidAssetType;
}
export interface AssetTypeResponseSDKType {
  asset_type: SuperfluidAssetType;
}
export interface AllAssetsRequest {}
export interface AllAssetsRequestAmino {}
export interface AllAssetsRequestSDKType {}
export interface AllAssetsResponse {
  assets: SuperfluidAsset[];
}
export interface AllAssetsResponseAmino {
  assets: SuperfluidAssetAmino[];
}
export interface AllAssetsResponseSDKType {
  assets: SuperfluidAssetSDKType[];
}
export interface AssetMultiplierRequest {
  denom: string;
}
export interface AssetMultiplierRequestAmino {
  denom: string;
}
export interface AssetMultiplierRequestSDKType {
  denom: string;
}
export interface AssetMultiplierResponse {
  osmoEquivalentMultiplier?: OsmoEquivalentMultiplierRecord;
}
export interface AssetMultiplierResponseAmino {
  osmo_equivalent_multiplier?: OsmoEquivalentMultiplierRecordAmino;
}
export interface AssetMultiplierResponseSDKType {
  osmo_equivalent_multiplier?: OsmoEquivalentMultiplierRecordSDKType;
}
export interface SuperfluidIntermediaryAccountInfo {
  denom: string;
  valAddr: string;
  gaugeId: Long;
  address: string;
}
export interface SuperfluidIntermediaryAccountInfoAmino {
  denom: string;
  val_addr: string;
  gauge_id: string;
  address: string;
}
export interface SuperfluidIntermediaryAccountInfoSDKType {
  denom: string;
  val_addr: string;
  gauge_id: Long;
  address: string;
}
export interface AllIntermediaryAccountsRequest {
  pagination?: PageRequest;
}
export interface AllIntermediaryAccountsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface AllIntermediaryAccountsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface AllIntermediaryAccountsResponse {
  accounts: SuperfluidIntermediaryAccountInfo[];
  pagination?: PageResponse;
}
export interface AllIntermediaryAccountsResponseAmino {
  accounts: SuperfluidIntermediaryAccountInfoAmino[];
  pagination?: PageResponseAmino;
}
export interface AllIntermediaryAccountsResponseSDKType {
  accounts: SuperfluidIntermediaryAccountInfoSDKType[];
  pagination?: PageResponseSDKType;
}
export interface ConnectedIntermediaryAccountRequest {
  lockId: Long;
}
export interface ConnectedIntermediaryAccountRequestAmino {
  lock_id: string;
}
export interface ConnectedIntermediaryAccountRequestSDKType {
  lock_id: Long;
}
export interface ConnectedIntermediaryAccountResponse {
  account?: SuperfluidIntermediaryAccountInfo;
}
export interface ConnectedIntermediaryAccountResponseAmino {
  account?: SuperfluidIntermediaryAccountInfoAmino;
}
export interface ConnectedIntermediaryAccountResponseSDKType {
  account?: SuperfluidIntermediaryAccountInfoSDKType;
}
export interface QueryTotalDelegationByValidatorForDenomRequest {
  denom: string;
}
export interface QueryTotalDelegationByValidatorForDenomRequestAmino {
  denom: string;
}
export interface QueryTotalDelegationByValidatorForDenomRequestSDKType {
  denom: string;
}
export interface QueryTotalDelegationByValidatorForDenomResponse {
  assets: Delegations[];
}
export interface QueryTotalDelegationByValidatorForDenomResponseAmino {
  assets: DelegationsAmino[];
}
export interface QueryTotalDelegationByValidatorForDenomResponseSDKType {
  assets: DelegationsSDKType[];
}
export interface Delegations {
  valAddr: string;
  amountSfsd: string;
  osmoEquivalent: string;
}
export interface DelegationsAmino {
  val_addr: string;
  amount_sfsd: string;
  osmo_equivalent: string;
}
export interface DelegationsSDKType {
  val_addr: string;
  amount_sfsd: string;
  osmo_equivalent: string;
}
export interface TotalSuperfluidDelegationsRequest {}
export interface TotalSuperfluidDelegationsRequestAmino {}
export interface TotalSuperfluidDelegationsRequestSDKType {}
export interface TotalSuperfluidDelegationsResponse {
  totalDelegations: string;
}
export interface TotalSuperfluidDelegationsResponseAmino {
  total_delegations: string;
}
export interface TotalSuperfluidDelegationsResponseSDKType {
  total_delegations: string;
}
export interface SuperfluidDelegationAmountRequest {
  delegatorAddress: string;
  validatorAddress: string;
  denom: string;
}
export interface SuperfluidDelegationAmountRequestAmino {
  delegator_address: string;
  validator_address: string;
  denom: string;
}
export interface SuperfluidDelegationAmountRequestSDKType {
  delegator_address: string;
  validator_address: string;
  denom: string;
}
export interface SuperfluidDelegationAmountResponse {
  amount: Coin[];
}
export interface SuperfluidDelegationAmountResponseAmino {
  amount: CoinAmino[];
}
export interface SuperfluidDelegationAmountResponseSDKType {
  amount: CoinSDKType[];
}
export interface SuperfluidDelegationsByDelegatorRequest {
  delegatorAddress: string;
}
export interface SuperfluidDelegationsByDelegatorRequestAmino {
  delegator_address: string;
}
export interface SuperfluidDelegationsByDelegatorRequestSDKType {
  delegator_address: string;
}
export interface SuperfluidDelegationsByDelegatorResponse {
  superfluidDelegationRecords: SuperfluidDelegationRecord[];
  totalDelegatedCoins: Coin[];
  totalEquivalentStakedAmount?: Coin;
}
export interface SuperfluidDelegationsByDelegatorResponseAmino {
  superfluid_delegation_records: SuperfluidDelegationRecordAmino[];
  total_delegated_coins: CoinAmino[];
  total_equivalent_staked_amount?: CoinAmino;
}
export interface SuperfluidDelegationsByDelegatorResponseSDKType {
  superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
  total_delegated_coins: CoinSDKType[];
  total_equivalent_staked_amount?: CoinSDKType;
}
export interface SuperfluidUndelegationsByDelegatorRequest {
  delegatorAddress: string;
  denom: string;
}
export interface SuperfluidUndelegationsByDelegatorRequestAmino {
  delegator_address: string;
  denom: string;
}
export interface SuperfluidUndelegationsByDelegatorRequestSDKType {
  delegator_address: string;
  denom: string;
}
export interface SuperfluidUndelegationsByDelegatorResponse {
  superfluidDelegationRecords: SuperfluidDelegationRecord[];
  totalUndelegatedCoins: Coin[];
  syntheticLocks: SyntheticLock[];
}
export interface SuperfluidUndelegationsByDelegatorResponseAmino {
  superfluid_delegation_records: SuperfluidDelegationRecordAmino[];
  total_undelegated_coins: CoinAmino[];
  synthetic_locks: SyntheticLockAmino[];
}
export interface SuperfluidUndelegationsByDelegatorResponseSDKType {
  superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
  total_undelegated_coins: CoinSDKType[];
  synthetic_locks: SyntheticLockSDKType[];
}
export interface SuperfluidDelegationsByValidatorDenomRequest {
  validatorAddress: string;
  denom: string;
}
export interface SuperfluidDelegationsByValidatorDenomRequestAmino {
  validator_address: string;
  denom: string;
}
export interface SuperfluidDelegationsByValidatorDenomRequestSDKType {
  validator_address: string;
  denom: string;
}
export interface SuperfluidDelegationsByValidatorDenomResponse {
  superfluidDelegationRecords: SuperfluidDelegationRecord[];
}
export interface SuperfluidDelegationsByValidatorDenomResponseAmino {
  superfluid_delegation_records: SuperfluidDelegationRecordAmino[];
}
export interface SuperfluidDelegationsByValidatorDenomResponseSDKType {
  superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
  validatorAddress: string;
  denom: string;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino {
  validator_address: string;
  denom: string;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType {
  validator_address: string;
  denom: string;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
  totalDelegatedCoins: Coin[];
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino {
  total_delegated_coins: CoinAmino[];
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType {
  total_delegated_coins: CoinSDKType[];
}
export interface QueryTotalDelegationByDelegatorRequest {
  delegatorAddress: string;
}
export interface QueryTotalDelegationByDelegatorRequestAmino {
  delegator_address: string;
}
export interface QueryTotalDelegationByDelegatorRequestSDKType {
  delegator_address: string;
}
export interface QueryTotalDelegationByDelegatorResponse {
  superfluidDelegationRecords: SuperfluidDelegationRecord[];
  delegationResponse: DelegationResponse[];
  totalDelegatedCoins: Coin[];
  totalEquivalentStakedAmount?: Coin;
}
export interface QueryTotalDelegationByDelegatorResponseAmino {
  superfluid_delegation_records: SuperfluidDelegationRecordAmino[];
  delegation_response: DelegationResponseAmino[];
  total_delegated_coins: CoinAmino[];
  total_equivalent_staked_amount?: CoinAmino;
}
export interface QueryTotalDelegationByDelegatorResponseSDKType {
  superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
  delegation_response: DelegationResponseSDKType[];
  total_delegated_coins: CoinSDKType[];
  total_equivalent_staked_amount?: CoinSDKType;
}
export interface QueryUnpoolWhitelistRequest {}
export interface QueryUnpoolWhitelistRequestAmino {}
export interface QueryUnpoolWhitelistRequestSDKType {}
export interface QueryUnpoolWhitelistResponse {
  poolIds: Long[];
}
export interface QueryUnpoolWhitelistResponseAmino {
  pool_ids: string[];
}
export interface QueryUnpoolWhitelistResponseSDKType {
  pool_ids: Long[];
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },

  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },

  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },

  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },

  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  }

};

function createBaseAssetTypeRequest(): AssetTypeRequest {
  return {
    denom: ""
  };
}

export const AssetTypeRequest = {
  encode(message: AssetTypeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetTypeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetTypeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AssetTypeRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: AssetTypeRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: Partial<AssetTypeRequest>): AssetTypeRequest {
    const message = createBaseAssetTypeRequest();
    message.denom = object.denom ?? "";
    return message;
  },

  fromAmino(object: AssetTypeRequestAmino): AssetTypeRequest {
    return {
      denom: object.denom
    };
  },

  toAmino(message: AssetTypeRequest): AssetTypeRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  }

};

function createBaseAssetTypeResponse(): AssetTypeResponse {
  return {
    assetType: 0
  };
}

export const AssetTypeResponse = {
  encode(message: AssetTypeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetType !== 0) {
      writer.uint32(8).int32(message.assetType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetTypeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetTypeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.assetType = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AssetTypeResponse {
    return {
      assetType: isSet(object.assetType) ? superfluidAssetTypeFromJSON(object.assetType) : 0
    };
  },

  toJSON(message: AssetTypeResponse): unknown {
    const obj: any = {};
    message.assetType !== undefined && (obj.assetType = superfluidAssetTypeToJSON(message.assetType));
    return obj;
  },

  fromPartial(object: Partial<AssetTypeResponse>): AssetTypeResponse {
    const message = createBaseAssetTypeResponse();
    message.assetType = object.assetType ?? 0;
    return message;
  },

  fromAmino(object: AssetTypeResponseAmino): AssetTypeResponse {
    return {
      assetType: isSet(object.asset_type) ? superfluidAssetTypeFromJSON(object.asset_type) : 0
    };
  },

  toAmino(message: AssetTypeResponse): AssetTypeResponseAmino {
    const obj: any = {};
    obj.asset_type = message.assetType;
    return obj;
  }

};

function createBaseAllAssetsRequest(): AllAssetsRequest {
  return {};
}

export const AllAssetsRequest = {
  encode(_: AllAssetsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllAssetsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllAssetsRequest();

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

  fromJSON(_: any): AllAssetsRequest {
    return {};
  },

  toJSON(_: AllAssetsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<AllAssetsRequest>): AllAssetsRequest {
    const message = createBaseAllAssetsRequest();
    return message;
  },

  fromAmino(_: AllAssetsRequestAmino): AllAssetsRequest {
    return {};
  },

  toAmino(_: AllAssetsRequest): AllAssetsRequestAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseAllAssetsResponse(): AllAssetsResponse {
  return {
    assets: []
  };
}

export const AllAssetsResponse = {
  encode(message: AllAssetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.assets) {
      SuperfluidAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllAssetsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllAssetsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.assets.push(SuperfluidAsset.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AllAssetsResponse {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => SuperfluidAsset.fromJSON(e)) : []
    };
  },

  toJSON(message: AllAssetsResponse): unknown {
    const obj: any = {};

    if (message.assets) {
      obj.assets = message.assets.map(e => e ? SuperfluidAsset.toJSON(e) : undefined);
    } else {
      obj.assets = [];
    }

    return obj;
  },

  fromPartial(object: Partial<AllAssetsResponse>): AllAssetsResponse {
    const message = createBaseAllAssetsResponse();
    message.assets = object.assets?.map(e => SuperfluidAsset.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: AllAssetsResponseAmino): AllAssetsResponse {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => SuperfluidAsset.fromAmino(e)) : []
    };
  },

  toAmino(message: AllAssetsResponse): AllAssetsResponseAmino {
    const obj: any = {};

    if (message.assets) {
      obj.assets = message.assets.map(e => e ? SuperfluidAsset.toAmino(e) : undefined);
    } else {
      obj.assets = [];
    }

    return obj;
  }

};

function createBaseAssetMultiplierRequest(): AssetMultiplierRequest {
  return {
    denom: ""
  };
}

export const AssetMultiplierRequest = {
  encode(message: AssetMultiplierRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetMultiplierRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetMultiplierRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AssetMultiplierRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: AssetMultiplierRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: Partial<AssetMultiplierRequest>): AssetMultiplierRequest {
    const message = createBaseAssetMultiplierRequest();
    message.denom = object.denom ?? "";
    return message;
  },

  fromAmino(object: AssetMultiplierRequestAmino): AssetMultiplierRequest {
    return {
      denom: object.denom
    };
  },

  toAmino(message: AssetMultiplierRequest): AssetMultiplierRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  }

};

function createBaseAssetMultiplierResponse(): AssetMultiplierResponse {
  return {
    osmoEquivalentMultiplier: undefined
  };
}

export const AssetMultiplierResponse = {
  encode(message: AssetMultiplierResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.osmoEquivalentMultiplier !== undefined) {
      OsmoEquivalentMultiplierRecord.encode(message.osmoEquivalentMultiplier, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetMultiplierResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetMultiplierResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.osmoEquivalentMultiplier = OsmoEquivalentMultiplierRecord.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AssetMultiplierResponse {
    return {
      osmoEquivalentMultiplier: isSet(object.osmoEquivalentMultiplier) ? OsmoEquivalentMultiplierRecord.fromJSON(object.osmoEquivalentMultiplier) : undefined
    };
  },

  toJSON(message: AssetMultiplierResponse): unknown {
    const obj: any = {};
    message.osmoEquivalentMultiplier !== undefined && (obj.osmoEquivalentMultiplier = message.osmoEquivalentMultiplier ? OsmoEquivalentMultiplierRecord.toJSON(message.osmoEquivalentMultiplier) : undefined);
    return obj;
  },

  fromPartial(object: Partial<AssetMultiplierResponse>): AssetMultiplierResponse {
    const message = createBaseAssetMultiplierResponse();
    message.osmoEquivalentMultiplier = object.osmoEquivalentMultiplier !== undefined && object.osmoEquivalentMultiplier !== null ? OsmoEquivalentMultiplierRecord.fromPartial(object.osmoEquivalentMultiplier) : undefined;
    return message;
  },

  fromAmino(object: AssetMultiplierResponseAmino): AssetMultiplierResponse {
    return {
      osmoEquivalentMultiplier: object?.osmo_equivalent_multiplier ? OsmoEquivalentMultiplierRecord.fromAmino(object.osmo_equivalent_multiplier) : undefined
    };
  },

  toAmino(message: AssetMultiplierResponse): AssetMultiplierResponseAmino {
    const obj: any = {};
    obj.osmo_equivalent_multiplier = message.osmoEquivalentMultiplier ? OsmoEquivalentMultiplierRecord.toAmino(message.osmoEquivalentMultiplier) : undefined;
    return obj;
  }

};

function createBaseSuperfluidIntermediaryAccountInfo(): SuperfluidIntermediaryAccountInfo {
  return {
    denom: "",
    valAddr: "",
    gaugeId: Long.UZERO,
    address: ""
  };
}

export const SuperfluidIntermediaryAccountInfo = {
  encode(message: SuperfluidIntermediaryAccountInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.valAddr !== "") {
      writer.uint32(18).string(message.valAddr);
    }

    if (!message.gaugeId.isZero()) {
      writer.uint32(24).uint64(message.gaugeId);
    }

    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidIntermediaryAccountInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidIntermediaryAccountInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.valAddr = reader.string();
          break;

        case 3:
          message.gaugeId = (reader.uint64() as Long);
          break;

        case 4:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SuperfluidIntermediaryAccountInfo {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      valAddr: isSet(object.valAddr) ? String(object.valAddr) : "",
      gaugeId: isSet(object.gaugeId) ? Long.fromValue(object.gaugeId) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: SuperfluidIntermediaryAccountInfo): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: Partial<SuperfluidIntermediaryAccountInfo>): SuperfluidIntermediaryAccountInfo {
    const message = createBaseSuperfluidIntermediaryAccountInfo();
    message.denom = object.denom ?? "";
    message.valAddr = object.valAddr ?? "";
    message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? Long.fromValue(object.gaugeId) : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  },

  fromAmino(object: SuperfluidIntermediaryAccountInfoAmino): SuperfluidIntermediaryAccountInfo {
    return {
      denom: object.denom,
      valAddr: object.val_addr,
      gaugeId: Long.fromString(object.gauge_id),
      address: object.address
    };
  },

  toAmino(message: SuperfluidIntermediaryAccountInfo): SuperfluidIntermediaryAccountInfoAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.val_addr = message.valAddr;
    obj.gauge_id = message.gaugeId ? message.gaugeId.toString() : undefined;
    obj.address = message.address;
    return obj;
  }

};

function createBaseAllIntermediaryAccountsRequest(): AllIntermediaryAccountsRequest {
  return {
    pagination: undefined
  };
}

export const AllIntermediaryAccountsRequest = {
  encode(message: AllIntermediaryAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllIntermediaryAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllIntermediaryAccountsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AllIntermediaryAccountsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: AllIntermediaryAccountsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<AllIntermediaryAccountsRequest>): AllIntermediaryAccountsRequest {
    const message = createBaseAllIntermediaryAccountsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: AllIntermediaryAccountsRequestAmino): AllIntermediaryAccountsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: AllIntermediaryAccountsRequest): AllIntermediaryAccountsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  }

};

function createBaseAllIntermediaryAccountsResponse(): AllIntermediaryAccountsResponse {
  return {
    accounts: [],
    pagination: undefined
  };
}

export const AllIntermediaryAccountsResponse = {
  encode(message: AllIntermediaryAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      SuperfluidIntermediaryAccountInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllIntermediaryAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllIntermediaryAccountsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.accounts.push(SuperfluidIntermediaryAccountInfo.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AllIntermediaryAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => SuperfluidIntermediaryAccountInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: AllIntermediaryAccountsResponse): unknown {
    const obj: any = {};

    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? SuperfluidIntermediaryAccountInfo.toJSON(e) : undefined);
    } else {
      obj.accounts = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<AllIntermediaryAccountsResponse>): AllIntermediaryAccountsResponse {
    const message = createBaseAllIntermediaryAccountsResponse();
    message.accounts = object.accounts?.map(e => SuperfluidIntermediaryAccountInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: AllIntermediaryAccountsResponseAmino): AllIntermediaryAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => SuperfluidIntermediaryAccountInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: AllIntermediaryAccountsResponse): AllIntermediaryAccountsResponseAmino {
    const obj: any = {};

    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? SuperfluidIntermediaryAccountInfo.toAmino(e) : undefined);
    } else {
      obj.accounts = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  }

};

function createBaseConnectedIntermediaryAccountRequest(): ConnectedIntermediaryAccountRequest {
  return {
    lockId: Long.UZERO
  };
}

export const ConnectedIntermediaryAccountRequest = {
  encode(message: ConnectedIntermediaryAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectedIntermediaryAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectedIntermediaryAccountRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.lockId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ConnectedIntermediaryAccountRequest {
    return {
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO
    };
  },

  toJSON(message: ConnectedIntermediaryAccountRequest): unknown {
    const obj: any = {};
    message.lockId !== undefined && (obj.lockId = (message.lockId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<ConnectedIntermediaryAccountRequest>): ConnectedIntermediaryAccountRequest {
    const message = createBaseConnectedIntermediaryAccountRequest();
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    return message;
  },

  fromAmino(object: ConnectedIntermediaryAccountRequestAmino): ConnectedIntermediaryAccountRequest {
    return {
      lockId: Long.fromString(object.lock_id)
    };
  },

  toAmino(message: ConnectedIntermediaryAccountRequest): ConnectedIntermediaryAccountRequestAmino {
    const obj: any = {};
    obj.lock_id = message.lockId ? message.lockId.toString() : undefined;
    return obj;
  }

};

function createBaseConnectedIntermediaryAccountResponse(): ConnectedIntermediaryAccountResponse {
  return {
    account: undefined
  };
}

export const ConnectedIntermediaryAccountResponse = {
  encode(message: ConnectedIntermediaryAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== undefined) {
      SuperfluidIntermediaryAccountInfo.encode(message.account, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectedIntermediaryAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectedIntermediaryAccountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.account = SuperfluidIntermediaryAccountInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ConnectedIntermediaryAccountResponse {
    return {
      account: isSet(object.account) ? SuperfluidIntermediaryAccountInfo.fromJSON(object.account) : undefined
    };
  },

  toJSON(message: ConnectedIntermediaryAccountResponse): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account ? SuperfluidIntermediaryAccountInfo.toJSON(message.account) : undefined);
    return obj;
  },

  fromPartial(object: Partial<ConnectedIntermediaryAccountResponse>): ConnectedIntermediaryAccountResponse {
    const message = createBaseConnectedIntermediaryAccountResponse();
    message.account = object.account !== undefined && object.account !== null ? SuperfluidIntermediaryAccountInfo.fromPartial(object.account) : undefined;
    return message;
  },

  fromAmino(object: ConnectedIntermediaryAccountResponseAmino): ConnectedIntermediaryAccountResponse {
    return {
      account: object?.account ? SuperfluidIntermediaryAccountInfo.fromAmino(object.account) : undefined
    };
  },

  toAmino(message: ConnectedIntermediaryAccountResponse): ConnectedIntermediaryAccountResponseAmino {
    const obj: any = {};
    obj.account = message.account ? SuperfluidIntermediaryAccountInfo.toAmino(message.account) : undefined;
    return obj;
  }

};

function createBaseQueryTotalDelegationByValidatorForDenomRequest(): QueryTotalDelegationByValidatorForDenomRequest {
  return {
    denom: ""
  };
}

export const QueryTotalDelegationByValidatorForDenomRequest = {
  encode(message: QueryTotalDelegationByValidatorForDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalDelegationByValidatorForDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalDelegationByValidatorForDenomRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTotalDelegationByValidatorForDenomRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: QueryTotalDelegationByValidatorForDenomRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: Partial<QueryTotalDelegationByValidatorForDenomRequest>): QueryTotalDelegationByValidatorForDenomRequest {
    const message = createBaseQueryTotalDelegationByValidatorForDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },

  fromAmino(object: QueryTotalDelegationByValidatorForDenomRequestAmino): QueryTotalDelegationByValidatorForDenomRequest {
    return {
      denom: object.denom
    };
  },

  toAmino(message: QueryTotalDelegationByValidatorForDenomRequest): QueryTotalDelegationByValidatorForDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  }

};

function createBaseQueryTotalDelegationByValidatorForDenomResponse(): QueryTotalDelegationByValidatorForDenomResponse {
  return {
    assets: []
  };
}

export const QueryTotalDelegationByValidatorForDenomResponse = {
  encode(message: QueryTotalDelegationByValidatorForDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.assets) {
      Delegations.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalDelegationByValidatorForDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalDelegationByValidatorForDenomResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.assets.push(Delegations.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTotalDelegationByValidatorForDenomResponse {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => Delegations.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryTotalDelegationByValidatorForDenomResponse): unknown {
    const obj: any = {};

    if (message.assets) {
      obj.assets = message.assets.map(e => e ? Delegations.toJSON(e) : undefined);
    } else {
      obj.assets = [];
    }

    return obj;
  },

  fromPartial(object: Partial<QueryTotalDelegationByValidatorForDenomResponse>): QueryTotalDelegationByValidatorForDenomResponse {
    const message = createBaseQueryTotalDelegationByValidatorForDenomResponse();
    message.assets = object.assets?.map(e => Delegations.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: QueryTotalDelegationByValidatorForDenomResponseAmino): QueryTotalDelegationByValidatorForDenomResponse {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => Delegations.fromAmino(e)) : []
    };
  },

  toAmino(message: QueryTotalDelegationByValidatorForDenomResponse): QueryTotalDelegationByValidatorForDenomResponseAmino {
    const obj: any = {};

    if (message.assets) {
      obj.assets = message.assets.map(e => e ? Delegations.toAmino(e) : undefined);
    } else {
      obj.assets = [];
    }

    return obj;
  }

};

function createBaseDelegations(): Delegations {
  return {
    valAddr: "",
    amountSfsd: "",
    osmoEquivalent: ""
  };
}

export const Delegations = {
  encode(message: Delegations, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valAddr !== "") {
      writer.uint32(10).string(message.valAddr);
    }

    if (message.amountSfsd !== "") {
      writer.uint32(18).string(message.amountSfsd);
    }

    if (message.osmoEquivalent !== "") {
      writer.uint32(26).string(message.osmoEquivalent);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Delegations {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegations();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.valAddr = reader.string();
          break;

        case 2:
          message.amountSfsd = reader.string();
          break;

        case 3:
          message.osmoEquivalent = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Delegations {
    return {
      valAddr: isSet(object.valAddr) ? String(object.valAddr) : "",
      amountSfsd: isSet(object.amountSfsd) ? String(object.amountSfsd) : "",
      osmoEquivalent: isSet(object.osmoEquivalent) ? String(object.osmoEquivalent) : ""
    };
  },

  toJSON(message: Delegations): unknown {
    const obj: any = {};
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    message.amountSfsd !== undefined && (obj.amountSfsd = message.amountSfsd);
    message.osmoEquivalent !== undefined && (obj.osmoEquivalent = message.osmoEquivalent);
    return obj;
  },

  fromPartial(object: Partial<Delegations>): Delegations {
    const message = createBaseDelegations();
    message.valAddr = object.valAddr ?? "";
    message.amountSfsd = object.amountSfsd ?? "";
    message.osmoEquivalent = object.osmoEquivalent ?? "";
    return message;
  },

  fromAmino(object: DelegationsAmino): Delegations {
    return {
      valAddr: object.val_addr,
      amountSfsd: object.amount_sfsd,
      osmoEquivalent: object.osmo_equivalent
    };
  },

  toAmino(message: Delegations): DelegationsAmino {
    const obj: any = {};
    obj.val_addr = message.valAddr;
    obj.amount_sfsd = message.amountSfsd;
    obj.osmo_equivalent = message.osmoEquivalent;
    return obj;
  }

};

function createBaseTotalSuperfluidDelegationsRequest(): TotalSuperfluidDelegationsRequest {
  return {};
}

export const TotalSuperfluidDelegationsRequest = {
  encode(_: TotalSuperfluidDelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TotalSuperfluidDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalSuperfluidDelegationsRequest();

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

  fromJSON(_: any): TotalSuperfluidDelegationsRequest {
    return {};
  },

  toJSON(_: TotalSuperfluidDelegationsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<TotalSuperfluidDelegationsRequest>): TotalSuperfluidDelegationsRequest {
    const message = createBaseTotalSuperfluidDelegationsRequest();
    return message;
  },

  fromAmino(_: TotalSuperfluidDelegationsRequestAmino): TotalSuperfluidDelegationsRequest {
    return {};
  },

  toAmino(_: TotalSuperfluidDelegationsRequest): TotalSuperfluidDelegationsRequestAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseTotalSuperfluidDelegationsResponse(): TotalSuperfluidDelegationsResponse {
  return {
    totalDelegations: ""
  };
}

export const TotalSuperfluidDelegationsResponse = {
  encode(message: TotalSuperfluidDelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalDelegations !== "") {
      writer.uint32(10).string(message.totalDelegations);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TotalSuperfluidDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalSuperfluidDelegationsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.totalDelegations = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TotalSuperfluidDelegationsResponse {
    return {
      totalDelegations: isSet(object.totalDelegations) ? String(object.totalDelegations) : ""
    };
  },

  toJSON(message: TotalSuperfluidDelegationsResponse): unknown {
    const obj: any = {};
    message.totalDelegations !== undefined && (obj.totalDelegations = message.totalDelegations);
    return obj;
  },

  fromPartial(object: Partial<TotalSuperfluidDelegationsResponse>): TotalSuperfluidDelegationsResponse {
    const message = createBaseTotalSuperfluidDelegationsResponse();
    message.totalDelegations = object.totalDelegations ?? "";
    return message;
  },

  fromAmino(object: TotalSuperfluidDelegationsResponseAmino): TotalSuperfluidDelegationsResponse {
    return {
      totalDelegations: object.total_delegations
    };
  },

  toAmino(message: TotalSuperfluidDelegationsResponse): TotalSuperfluidDelegationsResponseAmino {
    const obj: any = {};
    obj.total_delegations = message.totalDelegations;
    return obj;
  }

};

function createBaseSuperfluidDelegationAmountRequest(): SuperfluidDelegationAmountRequest {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    denom: ""
  };
}

export const SuperfluidDelegationAmountRequest = {
  encode(message: SuperfluidDelegationAmountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationAmountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationAmountRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        case 3:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SuperfluidDelegationAmountRequest {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: SuperfluidDelegationAmountRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: Partial<SuperfluidDelegationAmountRequest>): SuperfluidDelegationAmountRequest {
    const message = createBaseSuperfluidDelegationAmountRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },

  fromAmino(object: SuperfluidDelegationAmountRequestAmino): SuperfluidDelegationAmountRequest {
    return {
      delegatorAddress: object.delegator_address,
      validatorAddress: object.validator_address,
      denom: object.denom
    };
  },

  toAmino(message: SuperfluidDelegationAmountRequest): SuperfluidDelegationAmountRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    obj.denom = message.denom;
    return obj;
  }

};

function createBaseSuperfluidDelegationAmountResponse(): SuperfluidDelegationAmountResponse {
  return {
    amount: []
  };
}

export const SuperfluidDelegationAmountResponse = {
  encode(message: SuperfluidDelegationAmountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationAmountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationAmountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SuperfluidDelegationAmountResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: SuperfluidDelegationAmountResponse): unknown {
    const obj: any = {};

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  },

  fromPartial(object: Partial<SuperfluidDelegationAmountResponse>): SuperfluidDelegationAmountResponse {
    const message = createBaseSuperfluidDelegationAmountResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: SuperfluidDelegationAmountResponseAmino): SuperfluidDelegationAmountResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },

  toAmino(message: SuperfluidDelegationAmountResponse): SuperfluidDelegationAmountResponseAmino {
    const obj: any = {};

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  }

};

function createBaseSuperfluidDelegationsByDelegatorRequest(): SuperfluidDelegationsByDelegatorRequest {
  return {
    delegatorAddress: ""
  };
}

export const SuperfluidDelegationsByDelegatorRequest = {
  encode(message: SuperfluidDelegationsByDelegatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationsByDelegatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationsByDelegatorRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SuperfluidDelegationsByDelegatorRequest {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : ""
    };
  },

  toJSON(message: SuperfluidDelegationsByDelegatorRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },

  fromPartial(object: Partial<SuperfluidDelegationsByDelegatorRequest>): SuperfluidDelegationsByDelegatorRequest {
    const message = createBaseSuperfluidDelegationsByDelegatorRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },

  fromAmino(object: SuperfluidDelegationsByDelegatorRequestAmino): SuperfluidDelegationsByDelegatorRequest {
    return {
      delegatorAddress: object.delegator_address
    };
  },

  toAmino(message: SuperfluidDelegationsByDelegatorRequest): SuperfluidDelegationsByDelegatorRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    return obj;
  }

};

function createBaseSuperfluidDelegationsByDelegatorResponse(): SuperfluidDelegationsByDelegatorResponse {
  return {
    superfluidDelegationRecords: [],
    totalDelegatedCoins: [],
    totalEquivalentStakedAmount: undefined
  };
}

export const SuperfluidDelegationsByDelegatorResponse = {
  encode(message: SuperfluidDelegationsByDelegatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.superfluidDelegationRecords) {
      SuperfluidDelegationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.totalDelegatedCoins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.totalEquivalentStakedAmount !== undefined) {
      Coin.encode(message.totalEquivalentStakedAmount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationsByDelegatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationsByDelegatorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(SuperfluidDelegationRecord.decode(reader, reader.uint32()));
          break;

        case 2:
          message.totalDelegatedCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.totalEquivalentStakedAmount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SuperfluidDelegationsByDelegatorResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluidDelegationRecords) ? object.superfluidDelegationRecords.map((e: any) => SuperfluidDelegationRecord.fromJSON(e)) : [],
      totalDelegatedCoins: Array.isArray(object?.totalDelegatedCoins) ? object.totalDelegatedCoins.map((e: any) => Coin.fromJSON(e)) : [],
      totalEquivalentStakedAmount: isSet(object.totalEquivalentStakedAmount) ? Coin.fromJSON(object.totalEquivalentStakedAmount) : undefined
    };
  },

  toJSON(message: SuperfluidDelegationsByDelegatorResponse): unknown {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluidDelegationRecords = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toJSON(e) : undefined);
    } else {
      obj.superfluidDelegationRecords = [];
    }

    if (message.totalDelegatedCoins) {
      obj.totalDelegatedCoins = message.totalDelegatedCoins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalDelegatedCoins = [];
    }

    message.totalEquivalentStakedAmount !== undefined && (obj.totalEquivalentStakedAmount = message.totalEquivalentStakedAmount ? Coin.toJSON(message.totalEquivalentStakedAmount) : undefined);
    return obj;
  },

  fromPartial(object: Partial<SuperfluidDelegationsByDelegatorResponse>): SuperfluidDelegationsByDelegatorResponse {
    const message = createBaseSuperfluidDelegationsByDelegatorResponse();
    message.superfluidDelegationRecords = object.superfluidDelegationRecords?.map(e => SuperfluidDelegationRecord.fromPartial(e)) || [];
    message.totalDelegatedCoins = object.totalDelegatedCoins?.map(e => Coin.fromPartial(e)) || [];
    message.totalEquivalentStakedAmount = object.totalEquivalentStakedAmount !== undefined && object.totalEquivalentStakedAmount !== null ? Coin.fromPartial(object.totalEquivalentStakedAmount) : undefined;
    return message;
  },

  fromAmino(object: SuperfluidDelegationsByDelegatorResponseAmino): SuperfluidDelegationsByDelegatorResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e: any) => SuperfluidDelegationRecord.fromAmino(e)) : [],
      totalDelegatedCoins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e: any) => Coin.fromAmino(e)) : [],
      totalEquivalentStakedAmount: object?.total_equivalent_staked_amount ? Coin.fromAmino(object.total_equivalent_staked_amount) : undefined
    };
  },

  toAmino(message: SuperfluidDelegationsByDelegatorResponse): SuperfluidDelegationsByDelegatorResponseAmino {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toAmino(e) : undefined);
    } else {
      obj.superfluid_delegation_records = [];
    }

    if (message.totalDelegatedCoins) {
      obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_delegated_coins = [];
    }

    obj.total_equivalent_staked_amount = message.totalEquivalentStakedAmount ? Coin.toAmino(message.totalEquivalentStakedAmount) : undefined;
    return obj;
  }

};

function createBaseSuperfluidUndelegationsByDelegatorRequest(): SuperfluidUndelegationsByDelegatorRequest {
  return {
    delegatorAddress: "",
    denom: ""
  };
}

export const SuperfluidUndelegationsByDelegatorRequest = {
  encode(message: SuperfluidUndelegationsByDelegatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidUndelegationsByDelegatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidUndelegationsByDelegatorRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SuperfluidUndelegationsByDelegatorRequest {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: SuperfluidUndelegationsByDelegatorRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: Partial<SuperfluidUndelegationsByDelegatorRequest>): SuperfluidUndelegationsByDelegatorRequest {
    const message = createBaseSuperfluidUndelegationsByDelegatorRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },

  fromAmino(object: SuperfluidUndelegationsByDelegatorRequestAmino): SuperfluidUndelegationsByDelegatorRequest {
    return {
      delegatorAddress: object.delegator_address,
      denom: object.denom
    };
  },

  toAmino(message: SuperfluidUndelegationsByDelegatorRequest): SuperfluidUndelegationsByDelegatorRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.denom = message.denom;
    return obj;
  }

};

function createBaseSuperfluidUndelegationsByDelegatorResponse(): SuperfluidUndelegationsByDelegatorResponse {
  return {
    superfluidDelegationRecords: [],
    totalUndelegatedCoins: [],
    syntheticLocks: []
  };
}

export const SuperfluidUndelegationsByDelegatorResponse = {
  encode(message: SuperfluidUndelegationsByDelegatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.superfluidDelegationRecords) {
      SuperfluidDelegationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.totalUndelegatedCoins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.syntheticLocks) {
      SyntheticLock.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidUndelegationsByDelegatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidUndelegationsByDelegatorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(SuperfluidDelegationRecord.decode(reader, reader.uint32()));
          break;

        case 2:
          message.totalUndelegatedCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.syntheticLocks.push(SyntheticLock.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SuperfluidUndelegationsByDelegatorResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluidDelegationRecords) ? object.superfluidDelegationRecords.map((e: any) => SuperfluidDelegationRecord.fromJSON(e)) : [],
      totalUndelegatedCoins: Array.isArray(object?.totalUndelegatedCoins) ? object.totalUndelegatedCoins.map((e: any) => Coin.fromJSON(e)) : [],
      syntheticLocks: Array.isArray(object?.syntheticLocks) ? object.syntheticLocks.map((e: any) => SyntheticLock.fromJSON(e)) : []
    };
  },

  toJSON(message: SuperfluidUndelegationsByDelegatorResponse): unknown {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluidDelegationRecords = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toJSON(e) : undefined);
    } else {
      obj.superfluidDelegationRecords = [];
    }

    if (message.totalUndelegatedCoins) {
      obj.totalUndelegatedCoins = message.totalUndelegatedCoins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalUndelegatedCoins = [];
    }

    if (message.syntheticLocks) {
      obj.syntheticLocks = message.syntheticLocks.map(e => e ? SyntheticLock.toJSON(e) : undefined);
    } else {
      obj.syntheticLocks = [];
    }

    return obj;
  },

  fromPartial(object: Partial<SuperfluidUndelegationsByDelegatorResponse>): SuperfluidUndelegationsByDelegatorResponse {
    const message = createBaseSuperfluidUndelegationsByDelegatorResponse();
    message.superfluidDelegationRecords = object.superfluidDelegationRecords?.map(e => SuperfluidDelegationRecord.fromPartial(e)) || [];
    message.totalUndelegatedCoins = object.totalUndelegatedCoins?.map(e => Coin.fromPartial(e)) || [];
    message.syntheticLocks = object.syntheticLocks?.map(e => SyntheticLock.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: SuperfluidUndelegationsByDelegatorResponseAmino): SuperfluidUndelegationsByDelegatorResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e: any) => SuperfluidDelegationRecord.fromAmino(e)) : [],
      totalUndelegatedCoins: Array.isArray(object?.total_undelegated_coins) ? object.total_undelegated_coins.map((e: any) => Coin.fromAmino(e)) : [],
      syntheticLocks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e: any) => SyntheticLock.fromAmino(e)) : []
    };
  },

  toAmino(message: SuperfluidUndelegationsByDelegatorResponse): SuperfluidUndelegationsByDelegatorResponseAmino {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toAmino(e) : undefined);
    } else {
      obj.superfluid_delegation_records = [];
    }

    if (message.totalUndelegatedCoins) {
      obj.total_undelegated_coins = message.totalUndelegatedCoins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_undelegated_coins = [];
    }

    if (message.syntheticLocks) {
      obj.synthetic_locks = message.syntheticLocks.map(e => e ? SyntheticLock.toAmino(e) : undefined);
    } else {
      obj.synthetic_locks = [];
    }

    return obj;
  }

};

function createBaseSuperfluidDelegationsByValidatorDenomRequest(): SuperfluidDelegationsByValidatorDenomRequest {
  return {
    validatorAddress: "",
    denom: ""
  };
}

export const SuperfluidDelegationsByValidatorDenomRequest = {
  encode(message: SuperfluidDelegationsByValidatorDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationsByValidatorDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationsByValidatorDenomRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SuperfluidDelegationsByValidatorDenomRequest {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: SuperfluidDelegationsByValidatorDenomRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: Partial<SuperfluidDelegationsByValidatorDenomRequest>): SuperfluidDelegationsByValidatorDenomRequest {
    const message = createBaseSuperfluidDelegationsByValidatorDenomRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },

  fromAmino(object: SuperfluidDelegationsByValidatorDenomRequestAmino): SuperfluidDelegationsByValidatorDenomRequest {
    return {
      validatorAddress: object.validator_address,
      denom: object.denom
    };
  },

  toAmino(message: SuperfluidDelegationsByValidatorDenomRequest): SuperfluidDelegationsByValidatorDenomRequestAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    obj.denom = message.denom;
    return obj;
  }

};

function createBaseSuperfluidDelegationsByValidatorDenomResponse(): SuperfluidDelegationsByValidatorDenomResponse {
  return {
    superfluidDelegationRecords: []
  };
}

export const SuperfluidDelegationsByValidatorDenomResponse = {
  encode(message: SuperfluidDelegationsByValidatorDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.superfluidDelegationRecords) {
      SuperfluidDelegationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationsByValidatorDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationsByValidatorDenomResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(SuperfluidDelegationRecord.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SuperfluidDelegationsByValidatorDenomResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluidDelegationRecords) ? object.superfluidDelegationRecords.map((e: any) => SuperfluidDelegationRecord.fromJSON(e)) : []
    };
  },

  toJSON(message: SuperfluidDelegationsByValidatorDenomResponse): unknown {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluidDelegationRecords = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toJSON(e) : undefined);
    } else {
      obj.superfluidDelegationRecords = [];
    }

    return obj;
  },

  fromPartial(object: Partial<SuperfluidDelegationsByValidatorDenomResponse>): SuperfluidDelegationsByValidatorDenomResponse {
    const message = createBaseSuperfluidDelegationsByValidatorDenomResponse();
    message.superfluidDelegationRecords = object.superfluidDelegationRecords?.map(e => SuperfluidDelegationRecord.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: SuperfluidDelegationsByValidatorDenomResponseAmino): SuperfluidDelegationsByValidatorDenomResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e: any) => SuperfluidDelegationRecord.fromAmino(e)) : []
    };
  },

  toAmino(message: SuperfluidDelegationsByValidatorDenomResponse): SuperfluidDelegationsByValidatorDenomResponseAmino {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toAmino(e) : undefined);
    } else {
      obj.superfluid_delegation_records = [];
    }

    return obj;
  }

};

function createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest(): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
  return {
    validatorAddress: "",
    denom: ""
  };
}

export const EstimateSuperfluidDelegatedAmountByValidatorDenomRequest = {
  encode(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: Partial<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },

  fromAmino(object: EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    return {
      validatorAddress: object.validator_address,
      denom: object.denom
    };
  },

  toAmino(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    obj.denom = message.denom;
    return obj;
  }

};

function createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse(): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
  return {
    totalDelegatedCoins: []
  };
}

export const EstimateSuperfluidDelegatedAmountByValidatorDenomResponse = {
  encode(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.totalDelegatedCoins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.totalDelegatedCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    return {
      totalDelegatedCoins: Array.isArray(object?.totalDelegatedCoins) ? object.totalDelegatedCoins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown {
    const obj: any = {};

    if (message.totalDelegatedCoins) {
      obj.totalDelegatedCoins = message.totalDelegatedCoins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalDelegatedCoins = [];
    }

    return obj;
  },

  fromPartial(object: Partial<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();
    message.totalDelegatedCoins = object.totalDelegatedCoins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    return {
      totalDelegatedCoins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },

  toAmino(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino {
    const obj: any = {};

    if (message.totalDelegatedCoins) {
      obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_delegated_coins = [];
    }

    return obj;
  }

};

function createBaseQueryTotalDelegationByDelegatorRequest(): QueryTotalDelegationByDelegatorRequest {
  return {
    delegatorAddress: ""
  };
}

export const QueryTotalDelegationByDelegatorRequest = {
  encode(message: QueryTotalDelegationByDelegatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalDelegationByDelegatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalDelegationByDelegatorRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTotalDelegationByDelegatorRequest {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : ""
    };
  },

  toJSON(message: QueryTotalDelegationByDelegatorRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },

  fromPartial(object: Partial<QueryTotalDelegationByDelegatorRequest>): QueryTotalDelegationByDelegatorRequest {
    const message = createBaseQueryTotalDelegationByDelegatorRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },

  fromAmino(object: QueryTotalDelegationByDelegatorRequestAmino): QueryTotalDelegationByDelegatorRequest {
    return {
      delegatorAddress: object.delegator_address
    };
  },

  toAmino(message: QueryTotalDelegationByDelegatorRequest): QueryTotalDelegationByDelegatorRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    return obj;
  }

};

function createBaseQueryTotalDelegationByDelegatorResponse(): QueryTotalDelegationByDelegatorResponse {
  return {
    superfluidDelegationRecords: [],
    delegationResponse: [],
    totalDelegatedCoins: [],
    totalEquivalentStakedAmount: undefined
  };
}

export const QueryTotalDelegationByDelegatorResponse = {
  encode(message: QueryTotalDelegationByDelegatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.superfluidDelegationRecords) {
      SuperfluidDelegationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.delegationResponse) {
      DelegationResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.totalDelegatedCoins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.totalEquivalentStakedAmount !== undefined) {
      Coin.encode(message.totalEquivalentStakedAmount, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalDelegationByDelegatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalDelegationByDelegatorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(SuperfluidDelegationRecord.decode(reader, reader.uint32()));
          break;

        case 2:
          message.delegationResponse.push(DelegationResponse.decode(reader, reader.uint32()));
          break;

        case 3:
          message.totalDelegatedCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.totalEquivalentStakedAmount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTotalDelegationByDelegatorResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluidDelegationRecords) ? object.superfluidDelegationRecords.map((e: any) => SuperfluidDelegationRecord.fromJSON(e)) : [],
      delegationResponse: Array.isArray(object?.delegationResponse) ? object.delegationResponse.map((e: any) => DelegationResponse.fromJSON(e)) : [],
      totalDelegatedCoins: Array.isArray(object?.totalDelegatedCoins) ? object.totalDelegatedCoins.map((e: any) => Coin.fromJSON(e)) : [],
      totalEquivalentStakedAmount: isSet(object.totalEquivalentStakedAmount) ? Coin.fromJSON(object.totalEquivalentStakedAmount) : undefined
    };
  },

  toJSON(message: QueryTotalDelegationByDelegatorResponse): unknown {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluidDelegationRecords = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toJSON(e) : undefined);
    } else {
      obj.superfluidDelegationRecords = [];
    }

    if (message.delegationResponse) {
      obj.delegationResponse = message.delegationResponse.map(e => e ? DelegationResponse.toJSON(e) : undefined);
    } else {
      obj.delegationResponse = [];
    }

    if (message.totalDelegatedCoins) {
      obj.totalDelegatedCoins = message.totalDelegatedCoins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalDelegatedCoins = [];
    }

    message.totalEquivalentStakedAmount !== undefined && (obj.totalEquivalentStakedAmount = message.totalEquivalentStakedAmount ? Coin.toJSON(message.totalEquivalentStakedAmount) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryTotalDelegationByDelegatorResponse>): QueryTotalDelegationByDelegatorResponse {
    const message = createBaseQueryTotalDelegationByDelegatorResponse();
    message.superfluidDelegationRecords = object.superfluidDelegationRecords?.map(e => SuperfluidDelegationRecord.fromPartial(e)) || [];
    message.delegationResponse = object.delegationResponse?.map(e => DelegationResponse.fromPartial(e)) || [];
    message.totalDelegatedCoins = object.totalDelegatedCoins?.map(e => Coin.fromPartial(e)) || [];
    message.totalEquivalentStakedAmount = object.totalEquivalentStakedAmount !== undefined && object.totalEquivalentStakedAmount !== null ? Coin.fromPartial(object.totalEquivalentStakedAmount) : undefined;
    return message;
  },

  fromAmino(object: QueryTotalDelegationByDelegatorResponseAmino): QueryTotalDelegationByDelegatorResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e: any) => SuperfluidDelegationRecord.fromAmino(e)) : [],
      delegationResponse: Array.isArray(object?.delegation_response) ? object.delegation_response.map((e: any) => DelegationResponse.fromAmino(e)) : [],
      totalDelegatedCoins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e: any) => Coin.fromAmino(e)) : [],
      totalEquivalentStakedAmount: object?.total_equivalent_staked_amount ? Coin.fromAmino(object.total_equivalent_staked_amount) : undefined
    };
  },

  toAmino(message: QueryTotalDelegationByDelegatorResponse): QueryTotalDelegationByDelegatorResponseAmino {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toAmino(e) : undefined);
    } else {
      obj.superfluid_delegation_records = [];
    }

    if (message.delegationResponse) {
      obj.delegation_response = message.delegationResponse.map(e => e ? DelegationResponse.toAmino(e) : undefined);
    } else {
      obj.delegation_response = [];
    }

    if (message.totalDelegatedCoins) {
      obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_delegated_coins = [];
    }

    obj.total_equivalent_staked_amount = message.totalEquivalentStakedAmount ? Coin.toAmino(message.totalEquivalentStakedAmount) : undefined;
    return obj;
  }

};

function createBaseQueryUnpoolWhitelistRequest(): QueryUnpoolWhitelistRequest {
  return {};
}

export const QueryUnpoolWhitelistRequest = {
  encode(_: QueryUnpoolWhitelistRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnpoolWhitelistRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnpoolWhitelistRequest();

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

  fromJSON(_: any): QueryUnpoolWhitelistRequest {
    return {};
  },

  toJSON(_: QueryUnpoolWhitelistRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryUnpoolWhitelistRequest>): QueryUnpoolWhitelistRequest {
    const message = createBaseQueryUnpoolWhitelistRequest();
    return message;
  },

  fromAmino(_: QueryUnpoolWhitelistRequestAmino): QueryUnpoolWhitelistRequest {
    return {};
  },

  toAmino(_: QueryUnpoolWhitelistRequest): QueryUnpoolWhitelistRequestAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryUnpoolWhitelistResponse(): QueryUnpoolWhitelistResponse {
  return {
    poolIds: []
  };
}

export const QueryUnpoolWhitelistResponse = {
  encode(message: QueryUnpoolWhitelistResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();

    for (const v of message.poolIds) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnpoolWhitelistResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnpoolWhitelistResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.poolIds.push((reader.uint64() as Long));
            }
          } else {
            message.poolIds.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryUnpoolWhitelistResponse {
    return {
      poolIds: Array.isArray(object?.poolIds) ? object.poolIds.map((e: any) => Long.fromValue(e)) : []
    };
  },

  toJSON(message: QueryUnpoolWhitelistResponse): unknown {
    const obj: any = {};

    if (message.poolIds) {
      obj.poolIds = message.poolIds.map(e => (e || Long.UZERO).toString());
    } else {
      obj.poolIds = [];
    }

    return obj;
  },

  fromPartial(object: Partial<QueryUnpoolWhitelistResponse>): QueryUnpoolWhitelistResponse {
    const message = createBaseQueryUnpoolWhitelistResponse();
    message.poolIds = object.poolIds?.map(e => Long.fromValue(e)) || [];
    return message;
  },

  fromAmino(object: QueryUnpoolWhitelistResponseAmino): QueryUnpoolWhitelistResponse {
    return {
      poolIds: Array.isArray(object?.pool_ids) ? object.pool_ids.map((e: any) => e) : []
    };
  },

  toAmino(message: QueryUnpoolWhitelistResponse): QueryUnpoolWhitelistResponseAmino {
    const obj: any = {};

    if (message.poolIds) {
      obj.pool_ids = message.poolIds.map(e => e);
    } else {
      obj.pool_ids = [];
    }

    return obj;
  }

};
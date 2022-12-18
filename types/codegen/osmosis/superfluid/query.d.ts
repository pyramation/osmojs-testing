import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { SuperfluidAssetType, SuperfluidAsset, SuperfluidAssetSDKType, OsmoEquivalentMultiplierRecord, OsmoEquivalentMultiplierRecordSDKType, SuperfluidDelegationRecord, SuperfluidDelegationRecordSDKType } from "./superfluid";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock, SyntheticLockSDKType } from "../lockup/lock";
import { DelegationResponse, DelegationResponseSDKType } from "../../cosmos/staking/v1beta1/staking";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
export interface QueryParamsRequest {
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export interface AssetTypeRequest {
    denom: string;
}
export interface AssetTypeRequestSDKType {
    denom: string;
}
export interface AssetTypeResponse {
    assetType: SuperfluidAssetType;
}
export interface AssetTypeResponseSDKType {
    asset_type: SuperfluidAssetType;
}
export interface AllAssetsRequest {
}
export interface AllAssetsRequestSDKType {
}
export interface AllAssetsResponse {
    assets: SuperfluidAsset[];
}
export interface AllAssetsResponseSDKType {
    assets: SuperfluidAssetSDKType[];
}
export interface AssetMultiplierRequest {
    denom: string;
}
export interface AssetMultiplierRequestSDKType {
    denom: string;
}
export interface AssetMultiplierResponse {
    osmoEquivalentMultiplier?: OsmoEquivalentMultiplierRecord;
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
export interface SuperfluidIntermediaryAccountInfoSDKType {
    denom: string;
    val_addr: string;
    gauge_id: Long;
    address: string;
}
export interface AllIntermediaryAccountsRequest {
    pagination?: PageRequest;
}
export interface AllIntermediaryAccountsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface AllIntermediaryAccountsResponse {
    accounts: SuperfluidIntermediaryAccountInfo[];
    pagination?: PageResponse;
}
export interface AllIntermediaryAccountsResponseSDKType {
    accounts: SuperfluidIntermediaryAccountInfoSDKType[];
    pagination?: PageResponseSDKType;
}
export interface ConnectedIntermediaryAccountRequest {
    lockId: Long;
}
export interface ConnectedIntermediaryAccountRequestSDKType {
    lock_id: Long;
}
export interface ConnectedIntermediaryAccountResponse {
    account?: SuperfluidIntermediaryAccountInfo;
}
export interface ConnectedIntermediaryAccountResponseSDKType {
    account?: SuperfluidIntermediaryAccountInfoSDKType;
}
export interface QueryTotalDelegationByValidatorForDenomRequest {
    denom: string;
}
export interface QueryTotalDelegationByValidatorForDenomRequestSDKType {
    denom: string;
}
export interface QueryTotalDelegationByValidatorForDenomResponse {
    assets: Delegations[];
}
export interface QueryTotalDelegationByValidatorForDenomResponseSDKType {
    assets: DelegationsSDKType[];
}
export interface Delegations {
    valAddr: string;
    amountSfsd: string;
    osmoEquivalent: string;
}
export interface DelegationsSDKType {
    val_addr: string;
    amount_sfsd: string;
    osmo_equivalent: string;
}
export interface TotalSuperfluidDelegationsRequest {
}
export interface TotalSuperfluidDelegationsRequestSDKType {
}
export interface TotalSuperfluidDelegationsResponse {
    totalDelegations: string;
}
export interface TotalSuperfluidDelegationsResponseSDKType {
    total_delegations: string;
}
export interface SuperfluidDelegationAmountRequest {
    delegatorAddress: string;
    validatorAddress: string;
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
export interface SuperfluidDelegationAmountResponseSDKType {
    amount: CoinSDKType[];
}
export interface SuperfluidDelegationsByDelegatorRequest {
    delegatorAddress: string;
}
export interface SuperfluidDelegationsByDelegatorRequestSDKType {
    delegator_address: string;
}
export interface SuperfluidDelegationsByDelegatorResponse {
    superfluidDelegationRecords: SuperfluidDelegationRecord[];
    totalDelegatedCoins: Coin[];
    totalEquivalentStakedAmount?: Coin;
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
export interface SuperfluidUndelegationsByDelegatorRequestSDKType {
    delegator_address: string;
    denom: string;
}
export interface SuperfluidUndelegationsByDelegatorResponse {
    superfluidDelegationRecords: SuperfluidDelegationRecord[];
    totalUndelegatedCoins: Coin[];
    syntheticLocks: SyntheticLock[];
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
export interface SuperfluidDelegationsByValidatorDenomRequestSDKType {
    validator_address: string;
    denom: string;
}
export interface SuperfluidDelegationsByValidatorDenomResponse {
    superfluidDelegationRecords: SuperfluidDelegationRecord[];
}
export interface SuperfluidDelegationsByValidatorDenomResponseSDKType {
    superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    validatorAddress: string;
    denom: string;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType {
    validator_address: string;
    denom: string;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    totalDelegatedCoins: Coin[];
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType {
    total_delegated_coins: CoinSDKType[];
}
export interface QueryTotalDelegationByDelegatorRequest {
    delegatorAddress: string;
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
export interface QueryTotalDelegationByDelegatorResponseSDKType {
    superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
    delegation_response: DelegationResponseSDKType[];
    total_delegated_coins: CoinSDKType[];
    total_equivalent_staked_amount?: CoinSDKType;
}
export interface QueryUnpoolWhitelistRequest {
}
export interface QueryUnpoolWhitelistRequestSDKType {
}
export interface QueryUnpoolWhitelistResponse {
    poolIds: Long[];
}
export interface QueryUnpoolWhitelistResponseSDKType {
    pool_ids: Long[];
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const AssetTypeRequest: {
    encode(message: AssetTypeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetTypeRequest;
    fromJSON(object: any): AssetTypeRequest;
    toJSON(message: AssetTypeRequest): unknown;
    fromPartial(object: Partial<AssetTypeRequest>): AssetTypeRequest;
};
export declare const AssetTypeResponse: {
    encode(message: AssetTypeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetTypeResponse;
    fromJSON(object: any): AssetTypeResponse;
    toJSON(message: AssetTypeResponse): unknown;
    fromPartial(object: Partial<AssetTypeResponse>): AssetTypeResponse;
};
export declare const AllAssetsRequest: {
    encode(_: AllAssetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllAssetsRequest;
    fromJSON(_: any): AllAssetsRequest;
    toJSON(_: AllAssetsRequest): unknown;
    fromPartial(_: Partial<AllAssetsRequest>): AllAssetsRequest;
};
export declare const AllAssetsResponse: {
    encode(message: AllAssetsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllAssetsResponse;
    fromJSON(object: any): AllAssetsResponse;
    toJSON(message: AllAssetsResponse): unknown;
    fromPartial(object: Partial<AllAssetsResponse>): AllAssetsResponse;
};
export declare const AssetMultiplierRequest: {
    encode(message: AssetMultiplierRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetMultiplierRequest;
    fromJSON(object: any): AssetMultiplierRequest;
    toJSON(message: AssetMultiplierRequest): unknown;
    fromPartial(object: Partial<AssetMultiplierRequest>): AssetMultiplierRequest;
};
export declare const AssetMultiplierResponse: {
    encode(message: AssetMultiplierResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetMultiplierResponse;
    fromJSON(object: any): AssetMultiplierResponse;
    toJSON(message: AssetMultiplierResponse): unknown;
    fromPartial(object: Partial<AssetMultiplierResponse>): AssetMultiplierResponse;
};
export declare const SuperfluidIntermediaryAccountInfo: {
    encode(message: SuperfluidIntermediaryAccountInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidIntermediaryAccountInfo;
    fromJSON(object: any): SuperfluidIntermediaryAccountInfo;
    toJSON(message: SuperfluidIntermediaryAccountInfo): unknown;
    fromPartial(object: Partial<SuperfluidIntermediaryAccountInfo>): SuperfluidIntermediaryAccountInfo;
};
export declare const AllIntermediaryAccountsRequest: {
    encode(message: AllIntermediaryAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllIntermediaryAccountsRequest;
    fromJSON(object: any): AllIntermediaryAccountsRequest;
    toJSON(message: AllIntermediaryAccountsRequest): unknown;
    fromPartial(object: Partial<AllIntermediaryAccountsRequest>): AllIntermediaryAccountsRequest;
};
export declare const AllIntermediaryAccountsResponse: {
    encode(message: AllIntermediaryAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllIntermediaryAccountsResponse;
    fromJSON(object: any): AllIntermediaryAccountsResponse;
    toJSON(message: AllIntermediaryAccountsResponse): unknown;
    fromPartial(object: Partial<AllIntermediaryAccountsResponse>): AllIntermediaryAccountsResponse;
};
export declare const ConnectedIntermediaryAccountRequest: {
    encode(message: ConnectedIntermediaryAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectedIntermediaryAccountRequest;
    fromJSON(object: any): ConnectedIntermediaryAccountRequest;
    toJSON(message: ConnectedIntermediaryAccountRequest): unknown;
    fromPartial(object: Partial<ConnectedIntermediaryAccountRequest>): ConnectedIntermediaryAccountRequest;
};
export declare const ConnectedIntermediaryAccountResponse: {
    encode(message: ConnectedIntermediaryAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectedIntermediaryAccountResponse;
    fromJSON(object: any): ConnectedIntermediaryAccountResponse;
    toJSON(message: ConnectedIntermediaryAccountResponse): unknown;
    fromPartial(object: Partial<ConnectedIntermediaryAccountResponse>): ConnectedIntermediaryAccountResponse;
};
export declare const QueryTotalDelegationByValidatorForDenomRequest: {
    encode(message: QueryTotalDelegationByValidatorForDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalDelegationByValidatorForDenomRequest;
    fromJSON(object: any): QueryTotalDelegationByValidatorForDenomRequest;
    toJSON(message: QueryTotalDelegationByValidatorForDenomRequest): unknown;
    fromPartial(object: Partial<QueryTotalDelegationByValidatorForDenomRequest>): QueryTotalDelegationByValidatorForDenomRequest;
};
export declare const QueryTotalDelegationByValidatorForDenomResponse: {
    encode(message: QueryTotalDelegationByValidatorForDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalDelegationByValidatorForDenomResponse;
    fromJSON(object: any): QueryTotalDelegationByValidatorForDenomResponse;
    toJSON(message: QueryTotalDelegationByValidatorForDenomResponse): unknown;
    fromPartial(object: Partial<QueryTotalDelegationByValidatorForDenomResponse>): QueryTotalDelegationByValidatorForDenomResponse;
};
export declare const Delegations: {
    encode(message: Delegations, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Delegations;
    fromJSON(object: any): Delegations;
    toJSON(message: Delegations): unknown;
    fromPartial(object: Partial<Delegations>): Delegations;
};
export declare const TotalSuperfluidDelegationsRequest: {
    encode(_: TotalSuperfluidDelegationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TotalSuperfluidDelegationsRequest;
    fromJSON(_: any): TotalSuperfluidDelegationsRequest;
    toJSON(_: TotalSuperfluidDelegationsRequest): unknown;
    fromPartial(_: Partial<TotalSuperfluidDelegationsRequest>): TotalSuperfluidDelegationsRequest;
};
export declare const TotalSuperfluidDelegationsResponse: {
    encode(message: TotalSuperfluidDelegationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TotalSuperfluidDelegationsResponse;
    fromJSON(object: any): TotalSuperfluidDelegationsResponse;
    toJSON(message: TotalSuperfluidDelegationsResponse): unknown;
    fromPartial(object: Partial<TotalSuperfluidDelegationsResponse>): TotalSuperfluidDelegationsResponse;
};
export declare const SuperfluidDelegationAmountRequest: {
    encode(message: SuperfluidDelegationAmountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationAmountRequest;
    fromJSON(object: any): SuperfluidDelegationAmountRequest;
    toJSON(message: SuperfluidDelegationAmountRequest): unknown;
    fromPartial(object: Partial<SuperfluidDelegationAmountRequest>): SuperfluidDelegationAmountRequest;
};
export declare const SuperfluidDelegationAmountResponse: {
    encode(message: SuperfluidDelegationAmountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationAmountResponse;
    fromJSON(object: any): SuperfluidDelegationAmountResponse;
    toJSON(message: SuperfluidDelegationAmountResponse): unknown;
    fromPartial(object: Partial<SuperfluidDelegationAmountResponse>): SuperfluidDelegationAmountResponse;
};
export declare const SuperfluidDelegationsByDelegatorRequest: {
    encode(message: SuperfluidDelegationsByDelegatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationsByDelegatorRequest;
    fromJSON(object: any): SuperfluidDelegationsByDelegatorRequest;
    toJSON(message: SuperfluidDelegationsByDelegatorRequest): unknown;
    fromPartial(object: Partial<SuperfluidDelegationsByDelegatorRequest>): SuperfluidDelegationsByDelegatorRequest;
};
export declare const SuperfluidDelegationsByDelegatorResponse: {
    encode(message: SuperfluidDelegationsByDelegatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationsByDelegatorResponse;
    fromJSON(object: any): SuperfluidDelegationsByDelegatorResponse;
    toJSON(message: SuperfluidDelegationsByDelegatorResponse): unknown;
    fromPartial(object: Partial<SuperfluidDelegationsByDelegatorResponse>): SuperfluidDelegationsByDelegatorResponse;
};
export declare const SuperfluidUndelegationsByDelegatorRequest: {
    encode(message: SuperfluidUndelegationsByDelegatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidUndelegationsByDelegatorRequest;
    fromJSON(object: any): SuperfluidUndelegationsByDelegatorRequest;
    toJSON(message: SuperfluidUndelegationsByDelegatorRequest): unknown;
    fromPartial(object: Partial<SuperfluidUndelegationsByDelegatorRequest>): SuperfluidUndelegationsByDelegatorRequest;
};
export declare const SuperfluidUndelegationsByDelegatorResponse: {
    encode(message: SuperfluidUndelegationsByDelegatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidUndelegationsByDelegatorResponse;
    fromJSON(object: any): SuperfluidUndelegationsByDelegatorResponse;
    toJSON(message: SuperfluidUndelegationsByDelegatorResponse): unknown;
    fromPartial(object: Partial<SuperfluidUndelegationsByDelegatorResponse>): SuperfluidUndelegationsByDelegatorResponse;
};
export declare const SuperfluidDelegationsByValidatorDenomRequest: {
    encode(message: SuperfluidDelegationsByValidatorDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationsByValidatorDenomRequest;
    fromJSON(object: any): SuperfluidDelegationsByValidatorDenomRequest;
    toJSON(message: SuperfluidDelegationsByValidatorDenomRequest): unknown;
    fromPartial(object: Partial<SuperfluidDelegationsByValidatorDenomRequest>): SuperfluidDelegationsByValidatorDenomRequest;
};
export declare const SuperfluidDelegationsByValidatorDenomResponse: {
    encode(message: SuperfluidDelegationsByValidatorDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationsByValidatorDenomResponse;
    fromJSON(object: any): SuperfluidDelegationsByValidatorDenomResponse;
    toJSON(message: SuperfluidDelegationsByValidatorDenomResponse): unknown;
    fromPartial(object: Partial<SuperfluidDelegationsByValidatorDenomResponse>): SuperfluidDelegationsByValidatorDenomResponse;
};
export declare const EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
    encode(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    fromJSON(object: any): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    toJSON(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown;
    fromPartial(object: Partial<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
};
export declare const EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
    encode(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    fromJSON(object: any): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    toJSON(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown;
    fromPartial(object: Partial<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
};
export declare const QueryTotalDelegationByDelegatorRequest: {
    encode(message: QueryTotalDelegationByDelegatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalDelegationByDelegatorRequest;
    fromJSON(object: any): QueryTotalDelegationByDelegatorRequest;
    toJSON(message: QueryTotalDelegationByDelegatorRequest): unknown;
    fromPartial(object: Partial<QueryTotalDelegationByDelegatorRequest>): QueryTotalDelegationByDelegatorRequest;
};
export declare const QueryTotalDelegationByDelegatorResponse: {
    encode(message: QueryTotalDelegationByDelegatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalDelegationByDelegatorResponse;
    fromJSON(object: any): QueryTotalDelegationByDelegatorResponse;
    toJSON(message: QueryTotalDelegationByDelegatorResponse): unknown;
    fromPartial(object: Partial<QueryTotalDelegationByDelegatorResponse>): QueryTotalDelegationByDelegatorResponse;
};
export declare const QueryUnpoolWhitelistRequest: {
    encode(_: QueryUnpoolWhitelistRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnpoolWhitelistRequest;
    fromJSON(_: any): QueryUnpoolWhitelistRequest;
    toJSON(_: QueryUnpoolWhitelistRequest): unknown;
    fromPartial(_: Partial<QueryUnpoolWhitelistRequest>): QueryUnpoolWhitelistRequest;
};
export declare const QueryUnpoolWhitelistResponse: {
    encode(message: QueryUnpoolWhitelistResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnpoolWhitelistResponse;
    fromJSON(object: any): QueryUnpoolWhitelistResponse;
    toJSON(message: QueryUnpoolWhitelistResponse): unknown;
    fromPartial(object: Partial<QueryUnpoolWhitelistResponse>): QueryUnpoolWhitelistResponse;
};

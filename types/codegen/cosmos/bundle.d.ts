import * as _3 from "./app/v1alpha1/config";
import * as _4 from "./app/v1alpha1/module";
import * as _5 from "./app/v1alpha1/query";
import * as _6 from "./auth/v1beta1/auth";
import * as _7 from "./auth/v1beta1/genesis";
import * as _8 from "./auth/v1beta1/query";
import * as _9 from "./authz/v1beta1/authz";
import * as _10 from "./authz/v1beta1/event";
import * as _11 from "./authz/v1beta1/genesis";
import * as _12 from "./authz/v1beta1/query";
import * as _13 from "./authz/v1beta1/tx";
import * as _14 from "./bank/v1beta1/authz";
import * as _15 from "./bank/v1beta1/bank";
import * as _16 from "./bank/v1beta1/genesis";
import * as _17 from "./bank/v1beta1/query";
import * as _18 from "./bank/v1beta1/tx";
import * as _19 from "./base/abci/v1beta1/abci";
import * as _20 from "./base/kv/v1beta1/kv";
import * as _21 from "./base/query/v1beta1/pagination";
import * as _22 from "./base/reflection/v1beta1/reflection";
import * as _23 from "./base/reflection/v2alpha1/reflection";
import * as _24 from "./base/snapshots/v1beta1/snapshot";
import * as _25 from "./base/store/v1beta1/commit_info";
import * as _26 from "./base/store/v1beta1/listening";
import * as _27 from "./base/tendermint/v1beta1/query";
import * as _28 from "./base/v1beta1/coin";
import * as _29 from "./capability/v1beta1/capability";
import * as _30 from "./capability/v1beta1/genesis";
import * as _31 from "./crisis/v1beta1/genesis";
import * as _32 from "./crisis/v1beta1/tx";
import * as _33 from "./crypto/ed25519/keys";
import * as _34 from "./crypto/hd/v1/hd";
import * as _35 from "./crypto/keyring/v1/record";
import * as _36 from "./crypto/multisig/keys";
import * as _37 from "./crypto/secp256k1/keys";
import * as _38 from "./crypto/secp256r1/keys";
import * as _39 from "./distribution/v1beta1/distribution";
import * as _40 from "./distribution/v1beta1/genesis";
import * as _41 from "./distribution/v1beta1/query";
import * as _42 from "./distribution/v1beta1/tx";
import * as _43 from "./evidence/v1beta1/evidence";
import * as _44 from "./evidence/v1beta1/genesis";
import * as _45 from "./evidence/v1beta1/query";
import * as _46 from "./evidence/v1beta1/tx";
import * as _47 from "./feegrant/v1beta1/feegrant";
import * as _48 from "./feegrant/v1beta1/genesis";
import * as _49 from "./feegrant/v1beta1/query";
import * as _50 from "./feegrant/v1beta1/tx";
import * as _51 from "./genutil/v1beta1/genesis";
import * as _52 from "./gov/v1/genesis";
import * as _53 from "./gov/v1/gov";
import * as _54 from "./gov/v1/query";
import * as _55 from "./gov/v1/tx";
import * as _56 from "./gov/v1beta1/genesis";
import * as _57 from "./gov/v1beta1/gov";
import * as _58 from "./gov/v1beta1/query";
import * as _59 from "./gov/v1beta1/tx";
import * as _60 from "./group/v1/events";
import * as _61 from "./group/v1/genesis";
import * as _62 from "./group/v1/query";
import * as _63 from "./group/v1/tx";
import * as _64 from "./group/v1/types";
import * as _65 from "./mint/v1beta1/genesis";
import * as _66 from "./mint/v1beta1/mint";
import * as _67 from "./mint/v1beta1/query";
import * as _69 from "./nft/v1beta1/event";
import * as _70 from "./nft/v1beta1/genesis";
import * as _71 from "./nft/v1beta1/nft";
import * as _72 from "./nft/v1beta1/query";
import * as _73 from "./nft/v1beta1/tx";
import * as _74 from "./orm/v1/orm";
import * as _75 from "./orm/v1alpha1/schema";
import * as _76 from "./params/v1beta1/params";
import * as _77 from "./params/v1beta1/query";
import * as _78 from "./slashing/v1beta1/genesis";
import * as _79 from "./slashing/v1beta1/query";
import * as _80 from "./slashing/v1beta1/slashing";
import * as _81 from "./slashing/v1beta1/tx";
import * as _82 from "./staking/v1beta1/authz";
import * as _83 from "./staking/v1beta1/genesis";
import * as _84 from "./staking/v1beta1/query";
import * as _85 from "./staking/v1beta1/staking";
import * as _86 from "./staking/v1beta1/tx";
import * as _87 from "./tx/signing/v1beta1/signing";
import * as _88 from "./tx/v1beta1/service";
import * as _89 from "./tx/v1beta1/tx";
import * as _90 from "./upgrade/v1beta1/query";
import * as _91 from "./upgrade/v1beta1/tx";
import * as _92 from "./upgrade/v1beta1/upgrade";
import * as _93 from "./vesting/v1beta1/tx";
import * as _94 from "./vesting/v1beta1/vesting";
import * as _230 from "./app/v1alpha1/query.rpc.Query";
import * as _231 from "./auth/v1beta1/query.rpc.Query";
import * as _232 from "./authz/v1beta1/query.rpc.Query";
import * as _233 from "./bank/v1beta1/query.rpc.Query";
import * as _234 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _235 from "./distribution/v1beta1/query.rpc.Query";
import * as _236 from "./evidence/v1beta1/query.rpc.Query";
import * as _237 from "./feegrant/v1beta1/query.rpc.Query";
import * as _238 from "./gov/v1/query.rpc.Query";
import * as _239 from "./gov/v1beta1/query.rpc.Query";
import * as _240 from "./group/v1/query.rpc.Query";
import * as _241 from "./mint/v1beta1/query.rpc.Query";
import * as _242 from "./nft/v1beta1/query.rpc.Query";
import * as _243 from "./params/v1beta1/query.rpc.Query";
import * as _244 from "./slashing/v1beta1/query.rpc.Query";
import * as _245 from "./staking/v1beta1/query.rpc.Query";
import * as _246 from "./tx/v1beta1/service.rpc.Service";
import * as _247 from "./upgrade/v1beta1/query.rpc.Query";
import * as _248 from "./authz/v1beta1/tx.rpc.msg";
import * as _249 from "./bank/v1beta1/tx.rpc.msg";
import * as _250 from "./crisis/v1beta1/tx.rpc.msg";
import * as _251 from "./distribution/v1beta1/tx.rpc.msg";
import * as _252 from "./evidence/v1beta1/tx.rpc.msg";
import * as _253 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _254 from "./gov/v1/tx.rpc.msg";
import * as _255 from "./gov/v1beta1/tx.rpc.msg";
import * as _256 from "./group/v1/tx.rpc.msg";
import * as _257 from "./nft/v1beta1/tx.rpc.msg";
import * as _258 from "./slashing/v1beta1/tx.rpc.msg";
import * as _259 from "./staking/v1beta1/tx.rpc.msg";
import * as _260 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _261 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        const v1alpha1: {
            QueryClientImpl: typeof _230.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _5.QueryConfigRequest): Promise<_5.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _5.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryConfigRequest;
                fromJSON(_: any): _5.QueryConfigRequest;
                toJSON(_: _5.QueryConfigRequest): unknown;
                fromPartial(_: Partial<_5.QueryConfigRequest>): _5.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _5.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryConfigResponse;
                fromJSON(object: any): _5.QueryConfigResponse;
                toJSON(message: _5.QueryConfigResponse): unknown;
                fromPartial(object: Partial<_5.QueryConfigResponse>): _5.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _4.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.ModuleDescriptor;
                fromJSON(object: any): _4.ModuleDescriptor;
                toJSON(message: _4.ModuleDescriptor): unknown;
                fromPartial(object: Partial<_4.ModuleDescriptor>): _4.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _4.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.PackageReference;
                fromJSON(object: any): _4.PackageReference;
                toJSON(message: _4.PackageReference): unknown;
                fromPartial(object: Partial<_4.PackageReference>): _4.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _4.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MigrateFromInfo;
                fromJSON(object: any): _4.MigrateFromInfo;
                toJSON(message: _4.MigrateFromInfo): unknown;
                fromPartial(object: Partial<_4.MigrateFromInfo>): _4.MigrateFromInfo;
            };
            Config: {
                encode(message: _3.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.Config;
                fromJSON(object: any): _3.Config;
                toJSON(message: _3.Config): unknown;
                fromPartial(object: Partial<_3.Config>): _3.Config;
            };
            ModuleConfig: {
                encode(message: _3.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.ModuleConfig;
                fromJSON(object: any): _3.ModuleConfig;
                toJSON(message: _3.ModuleConfig): unknown;
                fromPartial(object: Partial<_3.ModuleConfig>): _3.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _231.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _8.QueryAccountsRequest): Promise<_8.QueryAccountsResponse>;
                account(request: _8.QueryAccountRequest): Promise<_8.QueryAccountResponse>;
                params(request?: _8.QueryParamsRequest): Promise<_8.QueryParamsResponse>;
                moduleAccounts(request?: _8.QueryModuleAccountsRequest): Promise<_8.QueryModuleAccountsResponse>;
                bech32Prefix(request?: _8.Bech32PrefixRequest): Promise<_8.Bech32PrefixResponse>;
                addressBytesToString(request: _8.AddressBytesToStringRequest): Promise<_8.AddressBytesToStringResponse>;
                addressStringToBytes(request: _8.AddressStringToBytesRequest): Promise<_8.AddressStringToBytesResponse>;
            };
            QueryAccountsRequest: {
                encode(message: _8.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryAccountsRequest;
                fromJSON(object: any): _8.QueryAccountsRequest;
                toJSON(message: _8.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_8.QueryAccountsRequest>): _8.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _8.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryAccountsResponse;
                fromJSON(object: any): _8.QueryAccountsResponse;
                toJSON(message: _8.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_8.QueryAccountsResponse>): _8.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _8.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryAccountRequest;
                fromJSON(object: any): _8.QueryAccountRequest;
                toJSON(message: _8.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_8.QueryAccountRequest>): _8.QueryAccountRequest;
            };
            QueryModuleAccountsRequest: {
                encode(_: _8.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryModuleAccountsRequest;
                fromJSON(_: any): _8.QueryModuleAccountsRequest;
                toJSON(_: _8.QueryModuleAccountsRequest): unknown;
                fromPartial(_: Partial<_8.QueryModuleAccountsRequest>): _8.QueryModuleAccountsRequest;
            };
            QueryParamsResponse: {
                encode(message: _8.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryParamsResponse;
                fromJSON(object: any): _8.QueryParamsResponse;
                toJSON(message: _8.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_8.QueryParamsResponse>): _8.QueryParamsResponse;
            };
            QueryAccountResponse: {
                encode(message: _8.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryAccountResponse;
                fromJSON(object: any): _8.QueryAccountResponse;
                toJSON(message: _8.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_8.QueryAccountResponse>): _8.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _8.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryParamsRequest;
                fromJSON(_: any): _8.QueryParamsRequest;
                toJSON(_: _8.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_8.QueryParamsRequest>): _8.QueryParamsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _8.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryModuleAccountsResponse;
                fromJSON(object: any): _8.QueryModuleAccountsResponse;
                toJSON(message: _8.QueryModuleAccountsResponse): unknown;
                fromPartial(object: Partial<_8.QueryModuleAccountsResponse>): _8.QueryModuleAccountsResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _8.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Bech32PrefixRequest;
                fromJSON(_: any): _8.Bech32PrefixRequest;
                toJSON(_: _8.Bech32PrefixRequest): unknown;
                fromPartial(_: Partial<_8.Bech32PrefixRequest>): _8.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _8.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Bech32PrefixResponse;
                fromJSON(object: any): _8.Bech32PrefixResponse;
                toJSON(message: _8.Bech32PrefixResponse): unknown;
                fromPartial(object: Partial<_8.Bech32PrefixResponse>): _8.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _8.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.AddressBytesToStringRequest;
                fromJSON(object: any): _8.AddressBytesToStringRequest;
                toJSON(message: _8.AddressBytesToStringRequest): unknown;
                fromPartial(object: Partial<_8.AddressBytesToStringRequest>): _8.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _8.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.AddressBytesToStringResponse;
                fromJSON(object: any): _8.AddressBytesToStringResponse;
                toJSON(message: _8.AddressBytesToStringResponse): unknown;
                fromPartial(object: Partial<_8.AddressBytesToStringResponse>): _8.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _8.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.AddressStringToBytesRequest;
                fromJSON(object: any): _8.AddressStringToBytesRequest;
                toJSON(message: _8.AddressStringToBytesRequest): unknown;
                fromPartial(object: Partial<_8.AddressStringToBytesRequest>): _8.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _8.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.AddressStringToBytesResponse;
                fromJSON(object: any): _8.AddressStringToBytesResponse;
                toJSON(message: _8.AddressStringToBytesResponse): unknown;
                fromPartial(object: Partial<_8.AddressStringToBytesResponse>): _8.AddressStringToBytesResponse;
            };
            Cosmos_authAccountI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _6.BaseAccount;
            Cosmos_authModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _6.ModuleAccount;
            GenesisState: {
                encode(message: _7.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.GenesisState;
                fromJSON(object: any): _7.GenesisState;
                toJSON(message: _7.GenesisState): unknown;
                fromPartial(object: Partial<_7.GenesisState>): _7.GenesisState;
            };
            BaseAccount: {
                encode(message: _6.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.BaseAccount;
                fromJSON(object: any): _6.BaseAccount;
                toJSON(message: _6.BaseAccount): unknown;
                fromPartial(object: Partial<_6.BaseAccount>): _6.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _6.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.ModuleAccount;
                fromJSON(object: any): _6.ModuleAccount;
                toJSON(message: _6.ModuleAccount): unknown;
                fromPartial(object: Partial<_6.ModuleAccount>): _6.ModuleAccount;
            };
            Params: {
                encode(message: _6.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.Params;
                fromJSON(object: any): _6.Params;
                toJSON(message: _6.Params): unknown;
                fromPartial(object: Partial<_6.Params>): _6.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _248.MsgClientImpl;
            QueryClientImpl: typeof _232.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _12.QueryGrantsRequest): Promise<_12.QueryGrantsResponse>;
                granterGrants(request: _12.QueryGranterGrantsRequest): Promise<_12.QueryGranterGrantsResponse>;
                granteeGrants(request: _12.QueryGranteeGrantsRequest): Promise<_12.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _13.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _13.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _13.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _13.MsgGrant): {
                        typeUrl: string;
                        value: _13.MsgGrant;
                    };
                    exec(value: _13.MsgExec): {
                        typeUrl: string;
                        value: _13.MsgExec;
                    };
                    revoke(value: _13.MsgRevoke): {
                        typeUrl: string;
                        value: _13.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _13.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _13.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _13.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _13.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _13.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _13.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _13.MsgGrant): {
                        typeUrl: string;
                        value: _13.MsgGrant;
                    };
                    exec(value: _13.MsgExec): {
                        typeUrl: string;
                        value: _13.MsgExec;
                    };
                    revoke(value: _13.MsgRevoke): {
                        typeUrl: string;
                        value: _13.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _13.MsgGrant) => {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    };
                    fromAmino: ({ granter, grantee, grant }: {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    }) => _13.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _13.MsgExec) => {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    };
                    fromAmino: ({ grantee, msgs }: {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    }) => _13.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _13.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _13.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _13.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgGrant;
                fromJSON(object: any): _13.MsgGrant;
                toJSON(message: _13.MsgGrant): unknown;
                fromPartial(object: Partial<_13.MsgGrant>): _13.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _13.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgExecResponse;
                fromJSON(object: any): _13.MsgExecResponse;
                toJSON(message: _13.MsgExecResponse): unknown;
                fromPartial(object: Partial<_13.MsgExecResponse>): _13.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _13.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgExec;
                fromJSON(object: any): _13.MsgExec;
                toJSON(message: _13.MsgExec): unknown;
                fromPartial(object: Partial<_13.MsgExec>): _13.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _13.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgGrantResponse;
                fromJSON(_: any): _13.MsgGrantResponse;
                toJSON(_: _13.MsgGrantResponse): unknown;
                fromPartial(_: Partial<_13.MsgGrantResponse>): _13.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _13.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgRevoke;
                fromJSON(object: any): _13.MsgRevoke;
                toJSON(message: _13.MsgRevoke): unknown;
                fromPartial(object: Partial<_13.MsgRevoke>): _13.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _13.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgRevokeResponse;
                fromJSON(_: any): _13.MsgRevokeResponse;
                toJSON(_: _13.MsgRevokeResponse): unknown;
                fromPartial(_: Partial<_13.MsgRevokeResponse>): _13.MsgRevokeResponse;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Cosmos_authzAuthorization_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _14.SendAuthorization | _82.StakeAuthorization | _9.GenericAuthorization;
            QueryGrantsRequest: {
                encode(message: _12.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryGrantsRequest;
                fromJSON(object: any): _12.QueryGrantsRequest;
                toJSON(message: _12.QueryGrantsRequest): unknown;
                fromPartial(object: Partial<_12.QueryGrantsRequest>): _12.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _12.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryGrantsResponse;
                fromJSON(object: any): _12.QueryGrantsResponse;
                toJSON(message: _12.QueryGrantsResponse): unknown;
                fromPartial(object: Partial<_12.QueryGrantsResponse>): _12.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _12.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryGranterGrantsRequest;
                fromJSON(object: any): _12.QueryGranterGrantsRequest;
                toJSON(message: _12.QueryGranterGrantsRequest): unknown;
                fromPartial(object: Partial<_12.QueryGranterGrantsRequest>): _12.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _12.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryGranterGrantsResponse;
                fromJSON(object: any): _12.QueryGranterGrantsResponse;
                toJSON(message: _12.QueryGranterGrantsResponse): unknown;
                fromPartial(object: Partial<_12.QueryGranterGrantsResponse>): _12.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _12.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryGranteeGrantsRequest;
                fromJSON(object: any): _12.QueryGranteeGrantsRequest;
                toJSON(message: _12.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: Partial<_12.QueryGranteeGrantsRequest>): _12.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _12.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryGranteeGrantsResponse;
                fromJSON(object: any): _12.QueryGranteeGrantsResponse;
                toJSON(message: _12.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: Partial<_12.QueryGranteeGrantsResponse>): _12.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _11.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.GenesisState;
                fromJSON(object: any): _11.GenesisState;
                toJSON(message: _11.GenesisState): unknown;
                fromPartial(object: Partial<_11.GenesisState>): _11.GenesisState;
            };
            EventGrant: {
                encode(message: _10.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.EventGrant;
                fromJSON(object: any): _10.EventGrant;
                toJSON(message: _10.EventGrant): unknown;
                fromPartial(object: Partial<_10.EventGrant>): _10.EventGrant;
            };
            EventRevoke: {
                encode(message: _10.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.EventRevoke;
                fromJSON(object: any): _10.EventRevoke;
                toJSON(message: _10.EventRevoke): unknown;
                fromPartial(object: Partial<_10.EventRevoke>): _10.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _9.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.GenericAuthorization;
                fromJSON(object: any): _9.GenericAuthorization;
                toJSON(message: _9.GenericAuthorization): unknown;
                fromPartial(object: Partial<_9.GenericAuthorization>): _9.GenericAuthorization;
            };
            Grant: {
                encode(message: _9.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Grant;
                fromJSON(object: any): _9.Grant;
                toJSON(message: _9.Grant): unknown;
                fromPartial(object: Partial<_9.Grant>): _9.Grant;
            };
            GrantAuthorization: {
                encode(message: _9.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.GrantAuthorization;
                fromJSON(object: any): _9.GrantAuthorization;
                toJSON(message: _9.GrantAuthorization): unknown;
                fromPartial(object: Partial<_9.GrantAuthorization>): _9.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _9.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.GrantQueueItem;
                fromJSON(object: any): _9.GrantQueueItem;
                toJSON(message: _9.GrantQueueItem): unknown;
                fromPartial(object: Partial<_9.GrantQueueItem>): _9.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _249.MsgClientImpl;
            QueryClientImpl: typeof _233.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _17.QueryBalanceRequest): Promise<_17.QueryBalanceResponse>;
                allBalances(request: _17.QueryAllBalancesRequest): Promise<_17.QueryAllBalancesResponse>;
                spendableBalances(request: _17.QuerySpendableBalancesRequest): Promise<_17.QuerySpendableBalancesResponse>;
                totalSupply(request?: _17.QueryTotalSupplyRequest): Promise<_17.QueryTotalSupplyResponse>;
                supplyOf(request: _17.QuerySupplyOfRequest): Promise<_17.QuerySupplyOfResponse>;
                params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                denomMetadata(request: _17.QueryDenomMetadataRequest): Promise<_17.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _17.QueryDenomsMetadataRequest): Promise<_17.QueryDenomsMetadataResponse>;
                denomOwners(request: _17.QueryDenomOwnersRequest): Promise<_17.QueryDenomOwnersResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _18.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _18.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _18.MsgSend): {
                        typeUrl: string;
                        value: _18.MsgSend;
                    };
                    multiSend(value: _18.MsgMultiSend): {
                        typeUrl: string;
                        value: _18.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _18.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _18.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _18.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _18.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _18.MsgSend): {
                        typeUrl: string;
                        value: _18.MsgSend;
                    };
                    multiSend(value: _18.MsgMultiSend): {
                        typeUrl: string;
                        value: _18.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _18.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _18.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _18.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _18.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _18.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgSend;
                fromJSON(object: any): _18.MsgSend;
                toJSON(message: _18.MsgSend): unknown;
                fromPartial(object: Partial<_18.MsgSend>): _18.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _18.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgSendResponse;
                fromJSON(_: any): _18.MsgSendResponse;
                toJSON(_: _18.MsgSendResponse): unknown;
                fromPartial(_: Partial<_18.MsgSendResponse>): _18.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _18.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgMultiSend;
                fromJSON(object: any): _18.MsgMultiSend;
                toJSON(message: _18.MsgMultiSend): unknown;
                fromPartial(object: Partial<_18.MsgMultiSend>): _18.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _18.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgMultiSendResponse;
                fromJSON(_: any): _18.MsgMultiSendResponse;
                toJSON(_: _18.MsgMultiSendResponse): unknown;
                fromPartial(_: Partial<_18.MsgMultiSendResponse>): _18.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _17.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryBalanceRequest;
                fromJSON(object: any): _17.QueryBalanceRequest;
                toJSON(message: _17.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_17.QueryBalanceRequest>): _17.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _17.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryBalanceResponse;
                fromJSON(object: any): _17.QueryBalanceResponse;
                toJSON(message: _17.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_17.QueryBalanceResponse>): _17.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _17.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryAllBalancesRequest;
                fromJSON(object: any): _17.QueryAllBalancesRequest;
                toJSON(message: _17.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_17.QueryAllBalancesRequest>): _17.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _17.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryAllBalancesResponse;
                fromJSON(object: any): _17.QueryAllBalancesResponse;
                toJSON(message: _17.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_17.QueryAllBalancesResponse>): _17.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _17.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QuerySpendableBalancesRequest;
                fromJSON(object: any): _17.QuerySpendableBalancesRequest;
                toJSON(message: _17.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: Partial<_17.QuerySpendableBalancesRequest>): _17.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _17.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QuerySpendableBalancesResponse;
                fromJSON(object: any): _17.QuerySpendableBalancesResponse;
                toJSON(message: _17.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: Partial<_17.QuerySpendableBalancesResponse>): _17.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _17.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryTotalSupplyRequest;
                fromJSON(object: any): _17.QueryTotalSupplyRequest;
                toJSON(message: _17.QueryTotalSupplyRequest): unknown;
                fromPartial(object: Partial<_17.QueryTotalSupplyRequest>): _17.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _17.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryTotalSupplyResponse;
                fromJSON(object: any): _17.QueryTotalSupplyResponse;
                toJSON(message: _17.QueryTotalSupplyResponse): unknown;
                fromPartial(object: Partial<_17.QueryTotalSupplyResponse>): _17.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _17.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QuerySupplyOfRequest;
                fromJSON(object: any): _17.QuerySupplyOfRequest;
                toJSON(message: _17.QuerySupplyOfRequest): unknown;
                fromPartial(object: Partial<_17.QuerySupplyOfRequest>): _17.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _17.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QuerySupplyOfResponse;
                fromJSON(object: any): _17.QuerySupplyOfResponse;
                toJSON(message: _17.QuerySupplyOfResponse): unknown;
                fromPartial(object: Partial<_17.QuerySupplyOfResponse>): _17.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _17.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryParamsRequest;
                fromJSON(_: any): _17.QueryParamsRequest;
                toJSON(_: _17.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_17.QueryParamsRequest>): _17.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _17.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryParamsResponse;
                fromJSON(object: any): _17.QueryParamsResponse;
                toJSON(message: _17.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_17.QueryParamsResponse>): _17.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _17.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryDenomsMetadataRequest;
                fromJSON(object: any): _17.QueryDenomsMetadataRequest;
                toJSON(message: _17.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: Partial<_17.QueryDenomsMetadataRequest>): _17.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _17.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryDenomsMetadataResponse;
                fromJSON(object: any): _17.QueryDenomsMetadataResponse;
                toJSON(message: _17.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: Partial<_17.QueryDenomsMetadataResponse>): _17.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _17.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryDenomMetadataRequest;
                fromJSON(object: any): _17.QueryDenomMetadataRequest;
                toJSON(message: _17.QueryDenomMetadataRequest): unknown;
                fromPartial(object: Partial<_17.QueryDenomMetadataRequest>): _17.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _17.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryDenomMetadataResponse;
                fromJSON(object: any): _17.QueryDenomMetadataResponse;
                toJSON(message: _17.QueryDenomMetadataResponse): unknown;
                fromPartial(object: Partial<_17.QueryDenomMetadataResponse>): _17.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _17.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryDenomOwnersRequest;
                fromJSON(object: any): _17.QueryDenomOwnersRequest;
                toJSON(message: _17.QueryDenomOwnersRequest): unknown;
                fromPartial(object: Partial<_17.QueryDenomOwnersRequest>): _17.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _17.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.DenomOwner;
                fromJSON(object: any): _17.DenomOwner;
                toJSON(message: _17.DenomOwner): unknown;
                fromPartial(object: Partial<_17.DenomOwner>): _17.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _17.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryDenomOwnersResponse;
                fromJSON(object: any): _17.QueryDenomOwnersResponse;
                toJSON(message: _17.QueryDenomOwnersResponse): unknown;
                fromPartial(object: Partial<_17.QueryDenomOwnersResponse>): _17.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _16.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.GenesisState;
                fromJSON(object: any): _16.GenesisState;
                toJSON(message: _16.GenesisState): unknown;
                fromPartial(object: Partial<_16.GenesisState>): _16.GenesisState;
            };
            Balance: {
                encode(message: _16.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.Balance;
                fromJSON(object: any): _16.Balance;
                toJSON(message: _16.Balance): unknown;
                fromPartial(object: Partial<_16.Balance>): _16.Balance;
            };
            Params: {
                encode(message: _15.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Params;
                fromJSON(object: any): _15.Params;
                toJSON(message: _15.Params): unknown;
                fromPartial(object: Partial<_15.Params>): _15.Params;
            };
            SendEnabled: {
                encode(message: _15.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.SendEnabled;
                fromJSON(object: any): _15.SendEnabled;
                toJSON(message: _15.SendEnabled): unknown;
                fromPartial(object: Partial<_15.SendEnabled>): _15.SendEnabled;
            };
            Input: {
                encode(message: _15.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Input;
                fromJSON(object: any): _15.Input;
                toJSON(message: _15.Input): unknown;
                fromPartial(object: Partial<_15.Input>): _15.Input;
            };
            Output: {
                encode(message: _15.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Output;
                fromJSON(object: any): _15.Output;
                toJSON(message: _15.Output): unknown;
                fromPartial(object: Partial<_15.Output>): _15.Output;
            };
            Supply: {
                encode(message: _15.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Supply;
                fromJSON(object: any): _15.Supply;
                toJSON(message: _15.Supply): unknown;
                fromPartial(object: Partial<_15.Supply>): _15.Supply;
            };
            DenomUnit: {
                encode(message: _15.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.DenomUnit;
                fromJSON(object: any): _15.DenomUnit;
                toJSON(message: _15.DenomUnit): unknown;
                fromPartial(object: Partial<_15.DenomUnit>): _15.DenomUnit;
            };
            Metadata: {
                encode(message: _15.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Metadata;
                fromJSON(object: any): _15.Metadata;
                toJSON(message: _15.Metadata): unknown;
                fromPartial(object: Partial<_15.Metadata>): _15.Metadata;
            };
            SendAuthorization: {
                encode(message: _14.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.SendAuthorization;
                fromJSON(object: any): _14.SendAuthorization;
                toJSON(message: _14.SendAuthorization): unknown;
                fromPartial(object: Partial<_14.SendAuthorization>): _14.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _19.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.TxResponse;
                    fromJSON(object: any): _19.TxResponse;
                    toJSON(message: _19.TxResponse): unknown;
                    fromPartial(object: Partial<_19.TxResponse>): _19.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _19.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.ABCIMessageLog;
                    fromJSON(object: any): _19.ABCIMessageLog;
                    toJSON(message: _19.ABCIMessageLog): unknown;
                    fromPartial(object: Partial<_19.ABCIMessageLog>): _19.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _19.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.StringEvent;
                    fromJSON(object: any): _19.StringEvent;
                    toJSON(message: _19.StringEvent): unknown;
                    fromPartial(object: Partial<_19.StringEvent>): _19.StringEvent;
                };
                Attribute: {
                    encode(message: _19.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Attribute;
                    fromJSON(object: any): _19.Attribute;
                    toJSON(message: _19.Attribute): unknown;
                    fromPartial(object: Partial<_19.Attribute>): _19.Attribute;
                };
                GasInfo: {
                    encode(message: _19.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.GasInfo;
                    fromJSON(object: any): _19.GasInfo;
                    toJSON(message: _19.GasInfo): unknown;
                    fromPartial(object: Partial<_19.GasInfo>): _19.GasInfo;
                };
                Result: {
                    encode(message: _19.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Result;
                    fromJSON(object: any): _19.Result;
                    toJSON(message: _19.Result): unknown;
                    fromPartial(object: Partial<_19.Result>): _19.Result;
                };
                SimulationResponse: {
                    encode(message: _19.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.SimulationResponse;
                    fromJSON(object: any): _19.SimulationResponse;
                    toJSON(message: _19.SimulationResponse): unknown;
                    fromPartial(object: Partial<_19.SimulationResponse>): _19.SimulationResponse;
                };
                MsgData: {
                    encode(message: _19.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgData;
                    fromJSON(object: any): _19.MsgData;
                    toJSON(message: _19.MsgData): unknown;
                    fromPartial(object: Partial<_19.MsgData>): _19.MsgData;
                };
                TxMsgData: {
                    encode(message: _19.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.TxMsgData;
                    fromJSON(object: any): _19.TxMsgData;
                    toJSON(message: _19.TxMsgData): unknown;
                    fromPartial(object: Partial<_19.TxMsgData>): _19.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _19.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.SearchTxsResult;
                    fromJSON(object: any): _19.SearchTxsResult;
                    toJSON(message: _19.SearchTxsResult): unknown;
                    fromPartial(object: Partial<_19.SearchTxsResult>): _19.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _20.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Pairs;
                    fromJSON(object: any): _20.Pairs;
                    toJSON(message: _20.Pairs): unknown;
                    fromPartial(object: Partial<_20.Pairs>): _20.Pairs;
                };
                Pair: {
                    encode(message: _20.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Pair;
                    fromJSON(object: any): _20.Pair;
                    toJSON(message: _20.Pair): unknown;
                    fromPartial(object: Partial<_20.Pair>): _20.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _21.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.PageRequest;
                    fromJSON(object: any): _21.PageRequest;
                    toJSON(message: _21.PageRequest): unknown;
                    fromPartial(object: Partial<_21.PageRequest>): _21.PageRequest;
                };
                PageResponse: {
                    encode(message: _21.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.PageResponse;
                    fromJSON(object: any): _21.PageResponse;
                    toJSON(message: _21.PageResponse): unknown;
                    fromPartial(object: Partial<_21.PageResponse>): _21.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _22.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ListAllInterfacesRequest;
                    fromJSON(_: any): _22.ListAllInterfacesRequest;
                    toJSON(_: _22.ListAllInterfacesRequest): unknown;
                    fromPartial(_: Partial<_22.ListAllInterfacesRequest>): _22.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _22.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ListAllInterfacesResponse;
                    fromJSON(object: any): _22.ListAllInterfacesResponse;
                    toJSON(message: _22.ListAllInterfacesResponse): unknown;
                    fromPartial(object: Partial<_22.ListAllInterfacesResponse>): _22.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _22.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ListImplementationsRequest;
                    fromJSON(object: any): _22.ListImplementationsRequest;
                    toJSON(message: _22.ListImplementationsRequest): unknown;
                    fromPartial(object: Partial<_22.ListImplementationsRequest>): _22.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _22.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ListImplementationsResponse;
                    fromJSON(object: any): _22.ListImplementationsResponse;
                    toJSON(message: _22.ListImplementationsResponse): unknown;
                    fromPartial(object: Partial<_22.ListImplementationsResponse>): _22.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _23.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.AppDescriptor;
                    fromJSON(object: any): _23.AppDescriptor;
                    toJSON(message: _23.AppDescriptor): unknown;
                    fromPartial(object: Partial<_23.AppDescriptor>): _23.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _23.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.TxDescriptor;
                    fromJSON(object: any): _23.TxDescriptor;
                    toJSON(message: _23.TxDescriptor): unknown;
                    fromPartial(object: Partial<_23.TxDescriptor>): _23.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _23.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.AuthnDescriptor;
                    fromJSON(object: any): _23.AuthnDescriptor;
                    toJSON(message: _23.AuthnDescriptor): unknown;
                    fromPartial(object: Partial<_23.AuthnDescriptor>): _23.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _23.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SigningModeDescriptor;
                    fromJSON(object: any): _23.SigningModeDescriptor;
                    toJSON(message: _23.SigningModeDescriptor): unknown;
                    fromPartial(object: Partial<_23.SigningModeDescriptor>): _23.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _23.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ChainDescriptor;
                    fromJSON(object: any): _23.ChainDescriptor;
                    toJSON(message: _23.ChainDescriptor): unknown;
                    fromPartial(object: Partial<_23.ChainDescriptor>): _23.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _23.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.CodecDescriptor;
                    fromJSON(object: any): _23.CodecDescriptor;
                    toJSON(message: _23.CodecDescriptor): unknown;
                    fromPartial(object: Partial<_23.CodecDescriptor>): _23.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _23.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.InterfaceDescriptor;
                    fromJSON(object: any): _23.InterfaceDescriptor;
                    toJSON(message: _23.InterfaceDescriptor): unknown;
                    fromPartial(object: Partial<_23.InterfaceDescriptor>): _23.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _23.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _23.InterfaceImplementerDescriptor;
                    toJSON(message: _23.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: Partial<_23.InterfaceImplementerDescriptor>): _23.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _23.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _23.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _23.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: Partial<_23.InterfaceAcceptingMessageDescriptor>): _23.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _23.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ConfigurationDescriptor;
                    fromJSON(object: any): _23.ConfigurationDescriptor;
                    toJSON(message: _23.ConfigurationDescriptor): unknown;
                    fromPartial(object: Partial<_23.ConfigurationDescriptor>): _23.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _23.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgDescriptor;
                    fromJSON(object: any): _23.MsgDescriptor;
                    toJSON(message: _23.MsgDescriptor): unknown;
                    fromPartial(object: Partial<_23.MsgDescriptor>): _23.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _23.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _23.GetAuthnDescriptorRequest;
                    toJSON(_: _23.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: Partial<_23.GetAuthnDescriptorRequest>): _23.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _23.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _23.GetAuthnDescriptorResponse;
                    toJSON(message: _23.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: Partial<_23.GetAuthnDescriptorResponse>): _23.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _23.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetChainDescriptorRequest;
                    fromJSON(_: any): _23.GetChainDescriptorRequest;
                    toJSON(_: _23.GetChainDescriptorRequest): unknown;
                    fromPartial(_: Partial<_23.GetChainDescriptorRequest>): _23.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _23.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetChainDescriptorResponse;
                    fromJSON(object: any): _23.GetChainDescriptorResponse;
                    toJSON(message: _23.GetChainDescriptorResponse): unknown;
                    fromPartial(object: Partial<_23.GetChainDescriptorResponse>): _23.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _23.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetCodecDescriptorRequest;
                    fromJSON(_: any): _23.GetCodecDescriptorRequest;
                    toJSON(_: _23.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: Partial<_23.GetCodecDescriptorRequest>): _23.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _23.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetCodecDescriptorResponse;
                    fromJSON(object: any): _23.GetCodecDescriptorResponse;
                    toJSON(message: _23.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: Partial<_23.GetCodecDescriptorResponse>): _23.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _23.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _23.GetConfigurationDescriptorRequest;
                    toJSON(_: _23.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: Partial<_23.GetConfigurationDescriptorRequest>): _23.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _23.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _23.GetConfigurationDescriptorResponse;
                    toJSON(message: _23.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: Partial<_23.GetConfigurationDescriptorResponse>): _23.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _23.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _23.GetQueryServicesDescriptorRequest;
                    toJSON(_: _23.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: Partial<_23.GetQueryServicesDescriptorRequest>): _23.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _23.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _23.GetQueryServicesDescriptorResponse;
                    toJSON(message: _23.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: Partial<_23.GetQueryServicesDescriptorResponse>): _23.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _23.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetTxDescriptorRequest;
                    fromJSON(_: any): _23.GetTxDescriptorRequest;
                    toJSON(_: _23.GetTxDescriptorRequest): unknown;
                    fromPartial(_: Partial<_23.GetTxDescriptorRequest>): _23.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _23.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetTxDescriptorResponse;
                    fromJSON(object: any): _23.GetTxDescriptorResponse;
                    toJSON(message: _23.GetTxDescriptorResponse): unknown;
                    fromPartial(object: Partial<_23.GetTxDescriptorResponse>): _23.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _23.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryServicesDescriptor;
                    fromJSON(object: any): _23.QueryServicesDescriptor;
                    toJSON(message: _23.QueryServicesDescriptor): unknown;
                    fromPartial(object: Partial<_23.QueryServicesDescriptor>): _23.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _23.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryServiceDescriptor;
                    fromJSON(object: any): _23.QueryServiceDescriptor;
                    toJSON(message: _23.QueryServiceDescriptor): unknown;
                    fromPartial(object: Partial<_23.QueryServiceDescriptor>): _23.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _23.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryMethodDescriptor;
                    fromJSON(object: any): _23.QueryMethodDescriptor;
                    toJSON(message: _23.QueryMethodDescriptor): unknown;
                    fromPartial(object: Partial<_23.QueryMethodDescriptor>): _23.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _24.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Snapshot;
                    fromJSON(object: any): _24.Snapshot;
                    toJSON(message: _24.Snapshot): unknown;
                    fromPartial(object: Partial<_24.Snapshot>): _24.Snapshot;
                };
                Metadata: {
                    encode(message: _24.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Metadata;
                    fromJSON(object: any): _24.Metadata;
                    toJSON(message: _24.Metadata): unknown;
                    fromPartial(object: Partial<_24.Metadata>): _24.Metadata;
                };
                SnapshotItem: {
                    encode(message: _24.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SnapshotItem;
                    fromJSON(object: any): _24.SnapshotItem;
                    toJSON(message: _24.SnapshotItem): unknown;
                    fromPartial(object: Partial<_24.SnapshotItem>): _24.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _24.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SnapshotStoreItem;
                    fromJSON(object: any): _24.SnapshotStoreItem;
                    toJSON(message: _24.SnapshotStoreItem): unknown;
                    fromPartial(object: Partial<_24.SnapshotStoreItem>): _24.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _24.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SnapshotIAVLItem;
                    fromJSON(object: any): _24.SnapshotIAVLItem;
                    toJSON(message: _24.SnapshotIAVLItem): unknown;
                    fromPartial(object: Partial<_24.SnapshotIAVLItem>): _24.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _24.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SnapshotExtensionMeta;
                    fromJSON(object: any): _24.SnapshotExtensionMeta;
                    toJSON(message: _24.SnapshotExtensionMeta): unknown;
                    fromPartial(object: Partial<_24.SnapshotExtensionMeta>): _24.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _24.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SnapshotExtensionPayload;
                    fromJSON(object: any): _24.SnapshotExtensionPayload;
                    toJSON(message: _24.SnapshotExtensionPayload): unknown;
                    fromPartial(object: Partial<_24.SnapshotExtensionPayload>): _24.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _24.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SnapshotKVItem;
                    fromJSON(object: any): _24.SnapshotKVItem;
                    toJSON(message: _24.SnapshotKVItem): unknown;
                    fromPartial(object: Partial<_24.SnapshotKVItem>): _24.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _24.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SnapshotSchema;
                    fromJSON(object: any): _24.SnapshotSchema;
                    toJSON(message: _24.SnapshotSchema): unknown;
                    fromPartial(object: Partial<_24.SnapshotSchema>): _24.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _26.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.StoreKVPair;
                    fromJSON(object: any): _26.StoreKVPair;
                    toJSON(message: _26.StoreKVPair): unknown;
                    fromPartial(object: Partial<_26.StoreKVPair>): _26.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _25.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.CommitInfo;
                    fromJSON(object: any): _25.CommitInfo;
                    toJSON(message: _25.CommitInfo): unknown;
                    fromPartial(object: Partial<_25.CommitInfo>): _25.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _25.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.StoreInfo;
                    fromJSON(object: any): _25.StoreInfo;
                    toJSON(message: _25.StoreInfo): unknown;
                    fromPartial(object: Partial<_25.StoreInfo>): _25.StoreInfo;
                };
                CommitID: {
                    encode(message: _25.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.CommitID;
                    fromJSON(object: any): _25.CommitID;
                    toJSON(message: _25.CommitID): unknown;
                    fromPartial(object: Partial<_25.CommitID>): _25.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _234.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _27.GetNodeInfoRequest): Promise<_27.GetNodeInfoResponse>;
                    getSyncing(request?: _27.GetSyncingRequest): Promise<_27.GetSyncingResponse>;
                    getLatestBlock(request?: _27.GetLatestBlockRequest): Promise<_27.GetLatestBlockResponse>;
                    getBlockByHeight(request: _27.GetBlockByHeightRequest): Promise<_27.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _27.GetLatestValidatorSetRequest): Promise<_27.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _27.GetValidatorSetByHeightRequest): Promise<_27.GetValidatorSetByHeightResponse>;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _27.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _27.GetValidatorSetByHeightRequest;
                    toJSON(message: _27.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: Partial<_27.GetValidatorSetByHeightRequest>): _27.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _27.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _27.GetValidatorSetByHeightResponse;
                    toJSON(message: _27.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: Partial<_27.GetValidatorSetByHeightResponse>): _27.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _27.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _27.GetLatestValidatorSetRequest;
                    toJSON(message: _27.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: Partial<_27.GetLatestValidatorSetRequest>): _27.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _27.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _27.GetLatestValidatorSetResponse;
                    toJSON(message: _27.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: Partial<_27.GetLatestValidatorSetResponse>): _27.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _27.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Validator;
                    fromJSON(object: any): _27.Validator;
                    toJSON(message: _27.Validator): unknown;
                    fromPartial(object: Partial<_27.Validator>): _27.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _27.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetBlockByHeightRequest;
                    fromJSON(object: any): _27.GetBlockByHeightRequest;
                    toJSON(message: _27.GetBlockByHeightRequest): unknown;
                    fromPartial(object: Partial<_27.GetBlockByHeightRequest>): _27.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _27.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetBlockByHeightResponse;
                    fromJSON(object: any): _27.GetBlockByHeightResponse;
                    toJSON(message: _27.GetBlockByHeightResponse): unknown;
                    fromPartial(object: Partial<_27.GetBlockByHeightResponse>): _27.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _27.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetLatestBlockRequest;
                    fromJSON(_: any): _27.GetLatestBlockRequest;
                    toJSON(_: _27.GetLatestBlockRequest): unknown;
                    fromPartial(_: Partial<_27.GetLatestBlockRequest>): _27.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _27.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetLatestBlockResponse;
                    fromJSON(object: any): _27.GetLatestBlockResponse;
                    toJSON(message: _27.GetLatestBlockResponse): unknown;
                    fromPartial(object: Partial<_27.GetLatestBlockResponse>): _27.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _27.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetSyncingRequest;
                    fromJSON(_: any): _27.GetSyncingRequest;
                    toJSON(_: _27.GetSyncingRequest): unknown;
                    fromPartial(_: Partial<_27.GetSyncingRequest>): _27.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _27.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetSyncingResponse;
                    fromJSON(object: any): _27.GetSyncingResponse;
                    toJSON(message: _27.GetSyncingResponse): unknown;
                    fromPartial(object: Partial<_27.GetSyncingResponse>): _27.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _27.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetNodeInfoRequest;
                    fromJSON(_: any): _27.GetNodeInfoRequest;
                    toJSON(_: _27.GetNodeInfoRequest): unknown;
                    fromPartial(_: Partial<_27.GetNodeInfoRequest>): _27.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _27.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetNodeInfoResponse;
                    fromJSON(object: any): _27.GetNodeInfoResponse;
                    toJSON(message: _27.GetNodeInfoResponse): unknown;
                    fromPartial(object: Partial<_27.GetNodeInfoResponse>): _27.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _27.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.VersionInfo;
                    fromJSON(object: any): _27.VersionInfo;
                    toJSON(message: _27.VersionInfo): unknown;
                    fromPartial(object: Partial<_27.VersionInfo>): _27.VersionInfo;
                };
                Module: {
                    encode(message: _27.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Module;
                    fromJSON(object: any): _27.Module;
                    toJSON(message: _27.Module): unknown;
                    fromPartial(object: Partial<_27.Module>): _27.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _28.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Coin;
                fromJSON(object: any): _28.Coin;
                toJSON(message: _28.Coin): unknown;
                fromPartial(object: Partial<_28.Coin>): _28.Coin;
            };
            DecCoin: {
                encode(message: _28.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.DecCoin;
                fromJSON(object: any): _28.DecCoin;
                toJSON(message: _28.DecCoin): unknown;
                fromPartial(object: Partial<_28.DecCoin>): _28.DecCoin;
            };
            IntProto: {
                encode(message: _28.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.IntProto;
                fromJSON(object: any): _28.IntProto;
                toJSON(message: _28.IntProto): unknown;
                fromPartial(object: Partial<_28.IntProto>): _28.IntProto;
            };
            DecProto: {
                encode(message: _28.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.DecProto;
                fromJSON(object: any): _28.DecProto;
                toJSON(message: _28.DecProto): unknown;
                fromPartial(object: Partial<_28.DecProto>): _28.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _30.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GenesisOwners;
                fromJSON(object: any): _30.GenesisOwners;
                toJSON(message: _30.GenesisOwners): unknown;
                fromPartial(object: Partial<_30.GenesisOwners>): _30.GenesisOwners;
            };
            GenesisState: {
                encode(message: _30.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GenesisState;
                fromJSON(object: any): _30.GenesisState;
                toJSON(message: _30.GenesisState): unknown;
                fromPartial(object: Partial<_30.GenesisState>): _30.GenesisState;
            };
            Capability: {
                encode(message: _29.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Capability;
                fromJSON(object: any): _29.Capability;
                toJSON(message: _29.Capability): unknown;
                fromPartial(object: Partial<_29.Capability>): _29.Capability;
            };
            Owner: {
                encode(message: _29.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Owner;
                fromJSON(object: any): _29.Owner;
                toJSON(message: _29.Owner): unknown;
                fromPartial(object: Partial<_29.Owner>): _29.Owner;
            };
            CapabilityOwners: {
                encode(message: _29.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.CapabilityOwners;
                fromJSON(object: any): _29.CapabilityOwners;
                toJSON(message: _29.CapabilityOwners): unknown;
                fromPartial(object: Partial<_29.CapabilityOwners>): _29.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _250.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _32.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _32.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _32.MsgVerifyInvariant;
                    };
                };
                toJSON: {
                    verifyInvariant(value: _32.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _32.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _32.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _32.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _32.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _32.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _32.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgVerifyInvariant;
                fromJSON(object: any): _32.MsgVerifyInvariant;
                toJSON(message: _32.MsgVerifyInvariant): unknown;
                fromPartial(object: Partial<_32.MsgVerifyInvariant>): _32.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _32.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgVerifyInvariantResponse;
                fromJSON(_: any): _32.MsgVerifyInvariantResponse;
                toJSON(_: _32.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: Partial<_32.MsgVerifyInvariantResponse>): _32.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _31.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.GenesisState;
                fromJSON(object: any): _31.GenesisState;
                toJSON(message: _31.GenesisState): unknown;
                fromPartial(object: Partial<_31.GenesisState>): _31.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _33.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.PubKey;
                fromJSON(object: any): _33.PubKey;
                toJSON(message: _33.PubKey): unknown;
                fromPartial(object: Partial<_33.PubKey>): _33.PubKey;
            };
            PrivKey: {
                encode(message: _33.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.PrivKey;
                fromJSON(object: any): _33.PrivKey;
                toJSON(message: _33.PrivKey): unknown;
                fromPartial(object: Partial<_33.PrivKey>): _33.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _34.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.BIP44Params;
                    fromJSON(object: any): _34.BIP44Params;
                    toJSON(message: _34.BIP44Params): unknown;
                    fromPartial(object: Partial<_34.BIP44Params>): _34.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _35.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Record;
                    fromJSON(object: any): _35.Record;
                    toJSON(message: _35.Record): unknown;
                    fromPartial(object: Partial<_35.Record>): _35.Record;
                };
                Record_Local: {
                    encode(message: _35.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Record_Local;
                    fromJSON(object: any): _35.Record_Local;
                    toJSON(message: _35.Record_Local): unknown;
                    fromPartial(object: Partial<_35.Record_Local>): _35.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _35.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Record_Ledger;
                    fromJSON(object: any): _35.Record_Ledger;
                    toJSON(message: _35.Record_Ledger): unknown;
                    fromPartial(object: Partial<_35.Record_Ledger>): _35.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _35.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Record_Multi;
                    fromJSON(_: any): _35.Record_Multi;
                    toJSON(_: _35.Record_Multi): unknown;
                    fromPartial(_: Partial<_35.Record_Multi>): _35.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _35.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Record_Offline;
                    fromJSON(_: any): _35.Record_Offline;
                    toJSON(_: _35.Record_Offline): unknown;
                    fromPartial(_: Partial<_35.Record_Offline>): _35.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _36.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.LegacyAminoPubKey;
                fromJSON(object: any): _36.LegacyAminoPubKey;
                toJSON(message: _36.LegacyAminoPubKey): unknown;
                fromPartial(object: Partial<_36.LegacyAminoPubKey>): _36.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _37.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.PubKey;
                fromJSON(object: any): _37.PubKey;
                toJSON(message: _37.PubKey): unknown;
                fromPartial(object: Partial<_37.PubKey>): _37.PubKey;
            };
            PrivKey: {
                encode(message: _37.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.PrivKey;
                fromJSON(object: any): _37.PrivKey;
                toJSON(message: _37.PrivKey): unknown;
                fromPartial(object: Partial<_37.PrivKey>): _37.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _38.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.PubKey;
                fromJSON(object: any): _38.PubKey;
                toJSON(message: _38.PubKey): unknown;
                fromPartial(object: Partial<_38.PubKey>): _38.PubKey;
            };
            PrivKey: {
                encode(message: _38.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.PrivKey;
                fromJSON(object: any): _38.PrivKey;
                toJSON(message: _38.PrivKey): unknown;
                fromPartial(object: Partial<_38.PrivKey>): _38.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _251.MsgClientImpl;
            QueryClientImpl: typeof _235.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
                validatorOutstandingRewards(request: _41.QueryValidatorOutstandingRewardsRequest): Promise<_41.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _41.QueryValidatorCommissionRequest): Promise<_41.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _41.QueryValidatorSlashesRequest): Promise<_41.QueryValidatorSlashesResponse>;
                delegationRewards(request: _41.QueryDelegationRewardsRequest): Promise<_41.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _41.QueryDelegationTotalRewardsRequest): Promise<_41.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _41.QueryDelegatorValidatorsRequest): Promise<_41.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _41.QueryDelegatorWithdrawAddressRequest): Promise<_41.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _41.QueryCommunityPoolRequest): Promise<_41.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _42.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _42.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _42.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _42.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _42.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _42.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _42.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _42.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _42.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _42.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _42.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _42.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _42.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _42.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _42.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _42.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _42.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _42.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _42.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _42.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _42.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _42.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _42.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _42.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _42.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _42.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _42.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _42.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _42.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _42.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _42.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _42.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _42.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _42.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _42.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _42.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _42.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgSetWithdrawAddress;
                fromJSON(object: any): _42.MsgSetWithdrawAddress;
                toJSON(message: _42.MsgSetWithdrawAddress): unknown;
                fromPartial(object: Partial<_42.MsgSetWithdrawAddress>): _42.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _42.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _42.MsgSetWithdrawAddressResponse;
                toJSON(_: _42.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: Partial<_42.MsgSetWithdrawAddressResponse>): _42.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _42.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _42.MsgWithdrawDelegatorReward;
                toJSON(message: _42.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: Partial<_42.MsgWithdrawDelegatorReward>): _42.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _42.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _42.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _42.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: Partial<_42.MsgWithdrawDelegatorRewardResponse>): _42.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _42.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _42.MsgWithdrawValidatorCommission;
                toJSON(message: _42.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: Partial<_42.MsgWithdrawValidatorCommission>): _42.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _42.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _42.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _42.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_42.MsgWithdrawValidatorCommissionResponse>): _42.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _42.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgFundCommunityPool;
                fromJSON(object: any): _42.MsgFundCommunityPool;
                toJSON(message: _42.MsgFundCommunityPool): unknown;
                fromPartial(object: Partial<_42.MsgFundCommunityPool>): _42.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _42.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _42.MsgFundCommunityPoolResponse;
                toJSON(_: _42.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: Partial<_42.MsgFundCommunityPoolResponse>): _42.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _41.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryParamsRequest;
                fromJSON(_: any): _41.QueryParamsRequest;
                toJSON(_: _41.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_41.QueryParamsRequest>): _41.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _41.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryParamsResponse;
                fromJSON(object: any): _41.QueryParamsResponse;
                toJSON(message: _41.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_41.QueryParamsResponse>): _41.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _41.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _41.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _41.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: Partial<_41.QueryValidatorOutstandingRewardsRequest>): _41.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _41.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _41.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _41.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: Partial<_41.QueryValidatorOutstandingRewardsResponse>): _41.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _41.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryValidatorCommissionRequest;
                fromJSON(object: any): _41.QueryValidatorCommissionRequest;
                toJSON(message: _41.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: Partial<_41.QueryValidatorCommissionRequest>): _41.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _41.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryValidatorCommissionResponse;
                fromJSON(object: any): _41.QueryValidatorCommissionResponse;
                toJSON(message: _41.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_41.QueryValidatorCommissionResponse>): _41.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _41.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryValidatorSlashesRequest;
                fromJSON(object: any): _41.QueryValidatorSlashesRequest;
                toJSON(message: _41.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: Partial<_41.QueryValidatorSlashesRequest>): _41.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _41.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryValidatorSlashesResponse;
                fromJSON(object: any): _41.QueryValidatorSlashesResponse;
                toJSON(message: _41.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: Partial<_41.QueryValidatorSlashesResponse>): _41.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _41.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegationRewardsRequest;
                fromJSON(object: any): _41.QueryDelegationRewardsRequest;
                toJSON(message: _41.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: Partial<_41.QueryDelegationRewardsRequest>): _41.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _41.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegationRewardsResponse;
                fromJSON(object: any): _41.QueryDelegationRewardsResponse;
                toJSON(message: _41.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: Partial<_41.QueryDelegationRewardsResponse>): _41.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _41.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _41.QueryDelegationTotalRewardsRequest;
                toJSON(message: _41.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: Partial<_41.QueryDelegationTotalRewardsRequest>): _41.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _41.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _41.QueryDelegationTotalRewardsResponse;
                toJSON(message: _41.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: Partial<_41.QueryDelegationTotalRewardsResponse>): _41.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _41.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _41.QueryDelegatorValidatorsRequest;
                toJSON(message: _41.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_41.QueryDelegatorValidatorsRequest>): _41.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _41.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _41.QueryDelegatorValidatorsResponse;
                toJSON(message: _41.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_41.QueryDelegatorValidatorsResponse>): _41.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _41.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _41.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _41.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: Partial<_41.QueryDelegatorWithdrawAddressRequest>): _41.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _41.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _41.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _41.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: Partial<_41.QueryDelegatorWithdrawAddressResponse>): _41.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _41.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryCommunityPoolRequest;
                fromJSON(_: any): _41.QueryCommunityPoolRequest;
                toJSON(_: _41.QueryCommunityPoolRequest): unknown;
                fromPartial(_: Partial<_41.QueryCommunityPoolRequest>): _41.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _41.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryCommunityPoolResponse;
                fromJSON(object: any): _41.QueryCommunityPoolResponse;
                toJSON(message: _41.QueryCommunityPoolResponse): unknown;
                fromPartial(object: Partial<_41.QueryCommunityPoolResponse>): _41.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _40.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.DelegatorWithdrawInfo;
                fromJSON(object: any): _40.DelegatorWithdrawInfo;
                toJSON(message: _40.DelegatorWithdrawInfo): unknown;
                fromPartial(object: Partial<_40.DelegatorWithdrawInfo>): _40.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _40.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _40.ValidatorOutstandingRewardsRecord;
                toJSON(message: _40.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: Partial<_40.ValidatorOutstandingRewardsRecord>): _40.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _40.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _40.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _40.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: Partial<_40.ValidatorAccumulatedCommissionRecord>): _40.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _40.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _40.ValidatorHistoricalRewardsRecord;
                toJSON(message: _40.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: Partial<_40.ValidatorHistoricalRewardsRecord>): _40.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _40.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _40.ValidatorCurrentRewardsRecord;
                toJSON(message: _40.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: Partial<_40.ValidatorCurrentRewardsRecord>): _40.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _40.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.DelegatorStartingInfoRecord;
                fromJSON(object: any): _40.DelegatorStartingInfoRecord;
                toJSON(message: _40.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: Partial<_40.DelegatorStartingInfoRecord>): _40.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _40.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ValidatorSlashEventRecord;
                fromJSON(object: any): _40.ValidatorSlashEventRecord;
                toJSON(message: _40.ValidatorSlashEventRecord): unknown;
                fromPartial(object: Partial<_40.ValidatorSlashEventRecord>): _40.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _40.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.GenesisState;
                fromJSON(object: any): _40.GenesisState;
                toJSON(message: _40.GenesisState): unknown;
                fromPartial(object: Partial<_40.GenesisState>): _40.GenesisState;
            };
            Params: {
                encode(message: _39.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.Params;
                fromJSON(object: any): _39.Params;
                toJSON(message: _39.Params): unknown;
                fromPartial(object: Partial<_39.Params>): _39.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _39.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorHistoricalRewards;
                fromJSON(object: any): _39.ValidatorHistoricalRewards;
                toJSON(message: _39.ValidatorHistoricalRewards): unknown;
                fromPartial(object: Partial<_39.ValidatorHistoricalRewards>): _39.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _39.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorCurrentRewards;
                fromJSON(object: any): _39.ValidatorCurrentRewards;
                toJSON(message: _39.ValidatorCurrentRewards): unknown;
                fromPartial(object: Partial<_39.ValidatorCurrentRewards>): _39.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _39.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorAccumulatedCommission;
                fromJSON(object: any): _39.ValidatorAccumulatedCommission;
                toJSON(message: _39.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: Partial<_39.ValidatorAccumulatedCommission>): _39.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _39.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorOutstandingRewards;
                fromJSON(object: any): _39.ValidatorOutstandingRewards;
                toJSON(message: _39.ValidatorOutstandingRewards): unknown;
                fromPartial(object: Partial<_39.ValidatorOutstandingRewards>): _39.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _39.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorSlashEvent;
                fromJSON(object: any): _39.ValidatorSlashEvent;
                toJSON(message: _39.ValidatorSlashEvent): unknown;
                fromPartial(object: Partial<_39.ValidatorSlashEvent>): _39.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _39.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorSlashEvents;
                fromJSON(object: any): _39.ValidatorSlashEvents;
                toJSON(message: _39.ValidatorSlashEvents): unknown;
                fromPartial(object: Partial<_39.ValidatorSlashEvents>): _39.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _39.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.FeePool;
                fromJSON(object: any): _39.FeePool;
                toJSON(message: _39.FeePool): unknown;
                fromPartial(object: Partial<_39.FeePool>): _39.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _39.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.CommunityPoolSpendProposal;
                fromJSON(object: any): _39.CommunityPoolSpendProposal;
                toJSON(message: _39.CommunityPoolSpendProposal): unknown;
                fromPartial(object: Partial<_39.CommunityPoolSpendProposal>): _39.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _39.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.DelegatorStartingInfo;
                fromJSON(object: any): _39.DelegatorStartingInfo;
                toJSON(message: _39.DelegatorStartingInfo): unknown;
                fromPartial(object: Partial<_39.DelegatorStartingInfo>): _39.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _39.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.DelegationDelegatorReward;
                fromJSON(object: any): _39.DelegationDelegatorReward;
                toJSON(message: _39.DelegationDelegatorReward): unknown;
                fromPartial(object: Partial<_39.DelegationDelegatorReward>): _39.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _39.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _39.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _39.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: Partial<_39.CommunityPoolSpendProposalWithDeposit>): _39.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _252.MsgClientImpl;
            QueryClientImpl: typeof _236.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _45.QueryEvidenceRequest): Promise<_45.QueryEvidenceResponse>;
                allEvidence(request?: _45.QueryAllEvidenceRequest): Promise<_45.QueryAllEvidenceResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _46.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _46.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _46.MsgSubmitEvidence;
                    };
                };
                toJSON: {
                    submitEvidence(value: _46.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _46.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _46.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _46.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _46.MsgSubmitEvidence) => {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ submitter, evidence }: {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _46.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _46.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.MsgSubmitEvidence;
                fromJSON(object: any): _46.MsgSubmitEvidence;
                toJSON(message: _46.MsgSubmitEvidence): unknown;
                fromPartial(object: Partial<_46.MsgSubmitEvidence>): _46.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _46.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _46.MsgSubmitEvidenceResponse;
                toJSON(message: _46.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: Partial<_46.MsgSubmitEvidenceResponse>): _46.MsgSubmitEvidenceResponse;
            };
            Cosmos_evidenceEvidence_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            QueryEvidenceRequest: {
                encode(message: _45.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.QueryEvidenceRequest;
                fromJSON(object: any): _45.QueryEvidenceRequest;
                toJSON(message: _45.QueryEvidenceRequest): unknown;
                fromPartial(object: Partial<_45.QueryEvidenceRequest>): _45.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _45.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.QueryEvidenceResponse;
                fromJSON(object: any): _45.QueryEvidenceResponse;
                toJSON(message: _45.QueryEvidenceResponse): unknown;
                fromPartial(object: Partial<_45.QueryEvidenceResponse>): _45.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _45.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.QueryAllEvidenceRequest;
                fromJSON(object: any): _45.QueryAllEvidenceRequest;
                toJSON(message: _45.QueryAllEvidenceRequest): unknown;
                fromPartial(object: Partial<_45.QueryAllEvidenceRequest>): _45.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _45.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.QueryAllEvidenceResponse;
                fromJSON(object: any): _45.QueryAllEvidenceResponse;
                toJSON(message: _45.QueryAllEvidenceResponse): unknown;
                fromPartial(object: Partial<_45.QueryAllEvidenceResponse>): _45.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _44.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.GenesisState;
                fromJSON(object: any): _44.GenesisState;
                toJSON(message: _44.GenesisState): unknown;
                fromPartial(object: Partial<_44.GenesisState>): _44.GenesisState;
            };
            Equivocation: {
                encode(message: _43.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.Equivocation;
                fromJSON(object: any): _43.Equivocation;
                toJSON(message: _43.Equivocation): unknown;
                fromPartial(object: Partial<_43.Equivocation>): _43.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _253.MsgClientImpl;
            QueryClientImpl: typeof _237.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _49.QueryAllowanceRequest): Promise<_49.QueryAllowanceResponse>;
                allowances(request: _49.QueryAllowancesRequest): Promise<_49.QueryAllowancesResponse>;
                allowancesByGranter(request: _49.QueryAllowancesByGranterRequest): Promise<_49.QueryAllowancesByGranterResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _50.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _50.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _50.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _50.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _50.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _50.MsgRevokeAllowance;
                    };
                };
                toJSON: {
                    grantAllowance(value: _50.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _50.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _50.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _50.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _50.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _50.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _50.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _50.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _50.MsgGrantAllowance) => {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ granter, grantee, allowance }: {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _50.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _50.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _50.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _50.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgGrantAllowance;
                fromJSON(object: any): _50.MsgGrantAllowance;
                toJSON(message: _50.MsgGrantAllowance): unknown;
                fromPartial(object: Partial<_50.MsgGrantAllowance>): _50.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _50.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgGrantAllowanceResponse;
                fromJSON(_: any): _50.MsgGrantAllowanceResponse;
                toJSON(_: _50.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: Partial<_50.MsgGrantAllowanceResponse>): _50.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _50.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgRevokeAllowance;
                fromJSON(object: any): _50.MsgRevokeAllowance;
                toJSON(message: _50.MsgRevokeAllowance): unknown;
                fromPartial(object: Partial<_50.MsgRevokeAllowance>): _50.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _50.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _50.MsgRevokeAllowanceResponse;
                toJSON(_: _50.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: Partial<_50.MsgRevokeAllowanceResponse>): _50.MsgRevokeAllowanceResponse;
            };
            Cosmos_feegrantFeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _47.BasicAllowance | _47.PeriodicAllowance | _47.AllowedMsgAllowance;
            QueryAllowanceRequest: {
                encode(message: _49.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryAllowanceRequest;
                fromJSON(object: any): _49.QueryAllowanceRequest;
                toJSON(message: _49.QueryAllowanceRequest): unknown;
                fromPartial(object: Partial<_49.QueryAllowanceRequest>): _49.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _49.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryAllowanceResponse;
                fromJSON(object: any): _49.QueryAllowanceResponse;
                toJSON(message: _49.QueryAllowanceResponse): unknown;
                fromPartial(object: Partial<_49.QueryAllowanceResponse>): _49.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _49.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryAllowancesRequest;
                fromJSON(object: any): _49.QueryAllowancesRequest;
                toJSON(message: _49.QueryAllowancesRequest): unknown;
                fromPartial(object: Partial<_49.QueryAllowancesRequest>): _49.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _49.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryAllowancesResponse;
                fromJSON(object: any): _49.QueryAllowancesResponse;
                toJSON(message: _49.QueryAllowancesResponse): unknown;
                fromPartial(object: Partial<_49.QueryAllowancesResponse>): _49.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _49.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _49.QueryAllowancesByGranterRequest;
                toJSON(message: _49.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: Partial<_49.QueryAllowancesByGranterRequest>): _49.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _49.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _49.QueryAllowancesByGranterResponse;
                toJSON(message: _49.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: Partial<_49.QueryAllowancesByGranterResponse>): _49.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _48.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.GenesisState;
                fromJSON(object: any): _48.GenesisState;
                toJSON(message: _48.GenesisState): unknown;
                fromPartial(object: Partial<_48.GenesisState>): _48.GenesisState;
            };
            BasicAllowance: {
                encode(message: _47.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.BasicAllowance;
                fromJSON(object: any): _47.BasicAllowance;
                toJSON(message: _47.BasicAllowance): unknown;
                fromPartial(object: Partial<_47.BasicAllowance>): _47.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _47.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.PeriodicAllowance;
                fromJSON(object: any): _47.PeriodicAllowance;
                toJSON(message: _47.PeriodicAllowance): unknown;
                fromPartial(object: Partial<_47.PeriodicAllowance>): _47.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _47.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.AllowedMsgAllowance;
                fromJSON(object: any): _47.AllowedMsgAllowance;
                toJSON(message: _47.AllowedMsgAllowance): unknown;
                fromPartial(object: Partial<_47.AllowedMsgAllowance>): _47.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _47.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.Grant;
                fromJSON(object: any): _47.Grant;
                toJSON(message: _47.Grant): unknown;
                fromPartial(object: Partial<_47.Grant>): _47.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _51.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.GenesisState;
                fromJSON(object: any): _51.GenesisState;
                toJSON(message: _51.GenesisState): unknown;
                fromPartial(object: Partial<_51.GenesisState>): _51.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _254.MsgClientImpl;
            QueryClientImpl: typeof _238.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _54.QueryProposalRequest): Promise<_54.QueryProposalResponse>;
                proposals(request: _54.QueryProposalsRequest): Promise<_54.QueryProposalsResponse>;
                vote(request: _54.QueryVoteRequest): Promise<_54.QueryVoteResponse>;
                votes(request: _54.QueryVotesRequest): Promise<_54.QueryVotesResponse>;
                params(request: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                deposit(request: _54.QueryDepositRequest): Promise<_54.QueryDepositResponse>;
                deposits(request: _54.QueryDepositsRequest): Promise<_54.QueryDepositsResponse>;
                tallyResult(request: _54.QueryTallyResultRequest): Promise<_54.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _55.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _55.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _55.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _55.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _55.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _55.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _55.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _55.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _55.MsgExecLegacyContent;
                    };
                    vote(value: _55.MsgVote): {
                        typeUrl: string;
                        value: _55.MsgVote;
                    };
                    voteWeighted(value: _55.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _55.MsgVoteWeighted;
                    };
                    deposit(value: _55.MsgDeposit): {
                        typeUrl: string;
                        value: _55.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _55.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _55.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _55.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _55.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _55.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _55.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _55.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _55.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _55.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _55.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _55.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _55.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _55.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _55.MsgExecLegacyContent;
                    };
                    vote(value: _55.MsgVote): {
                        typeUrl: string;
                        value: _55.MsgVote;
                    };
                    voteWeighted(value: _55.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _55.MsgVoteWeighted;
                    };
                    deposit(value: _55.MsgDeposit): {
                        typeUrl: string;
                        value: _55.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _55.MsgSubmitProposal) => {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    };
                    fromAmino: ({ messages, initial_deposit, proposer, metadata }: {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    }) => _55.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _55.MsgExecLegacyContent) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    };
                    fromAmino: ({ content, authority }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    }) => _55.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _55.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    }) => _55.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _55.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, options, metadata }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    }) => _55.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _55.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _55.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _55.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgSubmitProposal;
                fromJSON(object: any): _55.MsgSubmitProposal;
                toJSON(message: _55.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_55.MsgSubmitProposal>): _55.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _55.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgSubmitProposalResponse;
                fromJSON(object: any): _55.MsgSubmitProposalResponse;
                toJSON(message: _55.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_55.MsgSubmitProposalResponse>): _55.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _55.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgExecLegacyContent;
                fromJSON(object: any): _55.MsgExecLegacyContent;
                toJSON(message: _55.MsgExecLegacyContent): unknown;
                fromPartial(object: Partial<_55.MsgExecLegacyContent>): _55.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _55.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgExecLegacyContentResponse;
                fromJSON(_: any): _55.MsgExecLegacyContentResponse;
                toJSON(_: _55.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: Partial<_55.MsgExecLegacyContentResponse>): _55.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _55.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgVote;
                fromJSON(object: any): _55.MsgVote;
                toJSON(message: _55.MsgVote): unknown;
                fromPartial(object: Partial<_55.MsgVote>): _55.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _55.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgVoteResponse;
                fromJSON(_: any): _55.MsgVoteResponse;
                toJSON(_: _55.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_55.MsgVoteResponse>): _55.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _55.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgVoteWeighted;
                fromJSON(object: any): _55.MsgVoteWeighted;
                toJSON(message: _55.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_55.MsgVoteWeighted>): _55.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _55.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgVoteWeightedResponse;
                fromJSON(_: any): _55.MsgVoteWeightedResponse;
                toJSON(_: _55.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_55.MsgVoteWeightedResponse>): _55.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _55.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgDeposit;
                fromJSON(object: any): _55.MsgDeposit;
                toJSON(message: _55.MsgDeposit): unknown;
                fromPartial(object: Partial<_55.MsgDeposit>): _55.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _55.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgDepositResponse;
                fromJSON(_: any): _55.MsgDepositResponse;
                toJSON(_: _55.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_55.MsgDepositResponse>): _55.MsgDepositResponse;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _39.CommunityPoolSpendProposal | _39.CommunityPoolSpendProposalWithDeposit | _76.ParameterChangeProposal | _92.SoftwareUpgradeProposal | _92.CancelSoftwareUpgradeProposal | import("../ibc/core/client/v1/client").ClientUpdateProposal | import("../ibc/core/client/v1/client").UpgradeProposal | import("../osmosis/pool-incentives/v1beta1/gov").ReplacePoolIncentivesProposal | import("../osmosis/pool-incentives/v1beta1/gov").UpdatePoolIncentivesProposal | import("../osmosis/protorev/v1beta1/gov").SetProtoRevEnabledProposal | import("../osmosis/protorev/v1beta1/gov").SetProtoRevAdminAccountProposal | import("../osmosis/superfluid/v1beta1/gov").SetSuperfluidAssetsProposal | import("../osmosis/superfluid/v1beta1/gov").RemoveSuperfluidAssetsProposal | import("../osmosis/superfluid/v1beta1/gov").UpdateUnpoolWhiteListProposal | import("../osmosis/txfees/v1beta1/gov").UpdateFeeTokenProposal | _57.TextProposal;
            QueryProposalRequest: {
                encode(message: _54.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryProposalRequest;
                fromJSON(object: any): _54.QueryProposalRequest;
                toJSON(message: _54.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_54.QueryProposalRequest>): _54.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _54.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryProposalResponse;
                fromJSON(object: any): _54.QueryProposalResponse;
                toJSON(message: _54.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_54.QueryProposalResponse>): _54.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _54.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryProposalsRequest;
                fromJSON(object: any): _54.QueryProposalsRequest;
                toJSON(message: _54.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_54.QueryProposalsRequest>): _54.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _54.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryProposalsResponse;
                fromJSON(object: any): _54.QueryProposalsResponse;
                toJSON(message: _54.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_54.QueryProposalsResponse>): _54.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _54.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryVoteRequest;
                fromJSON(object: any): _54.QueryVoteRequest;
                toJSON(message: _54.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_54.QueryVoteRequest>): _54.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _54.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryVoteResponse;
                fromJSON(object: any): _54.QueryVoteResponse;
                toJSON(message: _54.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_54.QueryVoteResponse>): _54.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _54.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryVotesRequest;
                fromJSON(object: any): _54.QueryVotesRequest;
                toJSON(message: _54.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_54.QueryVotesRequest>): _54.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _54.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryVotesResponse;
                fromJSON(object: any): _54.QueryVotesResponse;
                toJSON(message: _54.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_54.QueryVotesResponse>): _54.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _54.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryParamsRequest;
                fromJSON(object: any): _54.QueryParamsRequest;
                toJSON(message: _54.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_54.QueryParamsRequest>): _54.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _54.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryParamsResponse;
                fromJSON(object: any): _54.QueryParamsResponse;
                toJSON(message: _54.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_54.QueryParamsResponse>): _54.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _54.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryDepositRequest;
                fromJSON(object: any): _54.QueryDepositRequest;
                toJSON(message: _54.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_54.QueryDepositRequest>): _54.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _54.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryDepositResponse;
                fromJSON(object: any): _54.QueryDepositResponse;
                toJSON(message: _54.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_54.QueryDepositResponse>): _54.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _54.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryDepositsRequest;
                fromJSON(object: any): _54.QueryDepositsRequest;
                toJSON(message: _54.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_54.QueryDepositsRequest>): _54.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _54.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryDepositsResponse;
                fromJSON(object: any): _54.QueryDepositsResponse;
                toJSON(message: _54.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_54.QueryDepositsResponse>): _54.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _54.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryTallyResultRequest;
                fromJSON(object: any): _54.QueryTallyResultRequest;
                toJSON(message: _54.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_54.QueryTallyResultRequest>): _54.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _54.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryTallyResultResponse;
                fromJSON(object: any): _54.QueryTallyResultResponse;
                toJSON(message: _54.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_54.QueryTallyResultResponse>): _54.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _53.VoteOption;
            voteOptionToJSON(object: _53.VoteOption): string;
            proposalStatusFromJSON(object: any): _53.ProposalStatus;
            proposalStatusToJSON(object: _53.ProposalStatus): string;
            VoteOption: typeof _53.VoteOption;
            VoteOptionSDKType: typeof _53.VoteOption;
            ProposalStatus: typeof _53.ProposalStatus;
            ProposalStatusSDKType: typeof _53.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _53.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.WeightedVoteOption;
                fromJSON(object: any): _53.WeightedVoteOption;
                toJSON(message: _53.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_53.WeightedVoteOption>): _53.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _53.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Deposit;
                fromJSON(object: any): _53.Deposit;
                toJSON(message: _53.Deposit): unknown;
                fromPartial(object: Partial<_53.Deposit>): _53.Deposit;
            };
            Proposal: {
                encode(message: _53.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Proposal;
                fromJSON(object: any): _53.Proposal;
                toJSON(message: _53.Proposal): unknown;
                fromPartial(object: Partial<_53.Proposal>): _53.Proposal;
            };
            TallyResult: {
                encode(message: _53.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.TallyResult;
                fromJSON(object: any): _53.TallyResult;
                toJSON(message: _53.TallyResult): unknown;
                fromPartial(object: Partial<_53.TallyResult>): _53.TallyResult;
            };
            Vote: {
                encode(message: _53.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Vote;
                fromJSON(object: any): _53.Vote;
                toJSON(message: _53.Vote): unknown;
                fromPartial(object: Partial<_53.Vote>): _53.Vote;
            };
            DepositParams: {
                encode(message: _53.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.DepositParams;
                fromJSON(object: any): _53.DepositParams;
                toJSON(message: _53.DepositParams): unknown;
                fromPartial(object: Partial<_53.DepositParams>): _53.DepositParams;
            };
            VotingParams: {
                encode(message: _53.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.VotingParams;
                fromJSON(object: any): _53.VotingParams;
                toJSON(message: _53.VotingParams): unknown;
                fromPartial(object: Partial<_53.VotingParams>): _53.VotingParams;
            };
            TallyParams: {
                encode(message: _53.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.TallyParams;
                fromJSON(object: any): _53.TallyParams;
                toJSON(message: _53.TallyParams): unknown;
                fromPartial(object: Partial<_53.TallyParams>): _53.TallyParams;
            };
            GenesisState: {
                encode(message: _52.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.GenesisState;
                fromJSON(object: any): _52.GenesisState;
                toJSON(message: _52.GenesisState): unknown;
                fromPartial(object: Partial<_52.GenesisState>): _52.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _255.MsgClientImpl;
            QueryClientImpl: typeof _239.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _58.QueryProposalRequest): Promise<_58.QueryProposalResponse>;
                proposals(request: _58.QueryProposalsRequest): Promise<_58.QueryProposalsResponse>;
                vote(request: _58.QueryVoteRequest): Promise<_58.QueryVoteResponse>;
                votes(request: _58.QueryVotesRequest): Promise<_58.QueryVotesResponse>;
                params(request: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                deposit(request: _58.QueryDepositRequest): Promise<_58.QueryDepositResponse>;
                deposits(request: _58.QueryDepositsRequest): Promise<_58.QueryDepositsResponse>;
                tallyResult(request: _58.QueryTallyResultRequest): Promise<_58.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _59.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _59.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _59.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _59.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _59.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _59.MsgSubmitProposal;
                    };
                    vote(value: _59.MsgVote): {
                        typeUrl: string;
                        value: _59.MsgVote;
                    };
                    voteWeighted(value: _59.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _59.MsgVoteWeighted;
                    };
                    deposit(value: _59.MsgDeposit): {
                        typeUrl: string;
                        value: _59.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _59.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _59.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _59.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _59.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _59.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _59.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _59.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _59.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _59.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _59.MsgSubmitProposal;
                    };
                    vote(value: _59.MsgVote): {
                        typeUrl: string;
                        value: _59.MsgVote;
                    };
                    voteWeighted(value: _59.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _59.MsgVoteWeighted;
                    };
                    deposit(value: _59.MsgDeposit): {
                        typeUrl: string;
                        value: _59.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _59.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _59.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _59.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _59.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _59.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _59.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _59.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _59.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _59.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgSubmitProposal;
                fromJSON(object: any): _59.MsgSubmitProposal;
                toJSON(message: _59.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_59.MsgSubmitProposal>): _59.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _59.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgSubmitProposalResponse;
                fromJSON(object: any): _59.MsgSubmitProposalResponse;
                toJSON(message: _59.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_59.MsgSubmitProposalResponse>): _59.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _59.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgVote;
                fromJSON(object: any): _59.MsgVote;
                toJSON(message: _59.MsgVote): unknown;
                fromPartial(object: Partial<_59.MsgVote>): _59.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _59.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgVoteResponse;
                fromJSON(_: any): _59.MsgVoteResponse;
                toJSON(_: _59.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_59.MsgVoteResponse>): _59.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _59.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgVoteWeighted;
                fromJSON(object: any): _59.MsgVoteWeighted;
                toJSON(message: _59.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_59.MsgVoteWeighted>): _59.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _59.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgVoteWeightedResponse;
                fromJSON(_: any): _59.MsgVoteWeightedResponse;
                toJSON(_: _59.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_59.MsgVoteWeightedResponse>): _59.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _59.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgDeposit;
                fromJSON(object: any): _59.MsgDeposit;
                toJSON(message: _59.MsgDeposit): unknown;
                fromPartial(object: Partial<_59.MsgDeposit>): _59.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _59.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgDepositResponse;
                fromJSON(_: any): _59.MsgDepositResponse;
                toJSON(_: _59.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_59.MsgDepositResponse>): _59.MsgDepositResponse;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _39.CommunityPoolSpendProposal | _39.CommunityPoolSpendProposalWithDeposit | _76.ParameterChangeProposal | _92.SoftwareUpgradeProposal | _92.CancelSoftwareUpgradeProposal | import("../ibc/core/client/v1/client").ClientUpdateProposal | import("../ibc/core/client/v1/client").UpgradeProposal | import("../osmosis/pool-incentives/v1beta1/gov").ReplacePoolIncentivesProposal | import("../osmosis/pool-incentives/v1beta1/gov").UpdatePoolIncentivesProposal | import("../osmosis/protorev/v1beta1/gov").SetProtoRevEnabledProposal | import("../osmosis/protorev/v1beta1/gov").SetProtoRevAdminAccountProposal | import("../osmosis/superfluid/v1beta1/gov").SetSuperfluidAssetsProposal | import("../osmosis/superfluid/v1beta1/gov").RemoveSuperfluidAssetsProposal | import("../osmosis/superfluid/v1beta1/gov").UpdateUnpoolWhiteListProposal | import("../osmosis/txfees/v1beta1/gov").UpdateFeeTokenProposal | _57.TextProposal;
            QueryProposalRequest: {
                encode(message: _58.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryProposalRequest;
                fromJSON(object: any): _58.QueryProposalRequest;
                toJSON(message: _58.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_58.QueryProposalRequest>): _58.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _58.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryProposalResponse;
                fromJSON(object: any): _58.QueryProposalResponse;
                toJSON(message: _58.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_58.QueryProposalResponse>): _58.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _58.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryProposalsRequest;
                fromJSON(object: any): _58.QueryProposalsRequest;
                toJSON(message: _58.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_58.QueryProposalsRequest>): _58.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _58.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryProposalsResponse;
                fromJSON(object: any): _58.QueryProposalsResponse;
                toJSON(message: _58.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_58.QueryProposalsResponse>): _58.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _58.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryVoteRequest;
                fromJSON(object: any): _58.QueryVoteRequest;
                toJSON(message: _58.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_58.QueryVoteRequest>): _58.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _58.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryVoteResponse;
                fromJSON(object: any): _58.QueryVoteResponse;
                toJSON(message: _58.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_58.QueryVoteResponse>): _58.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _58.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryVotesRequest;
                fromJSON(object: any): _58.QueryVotesRequest;
                toJSON(message: _58.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_58.QueryVotesRequest>): _58.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _58.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryVotesResponse;
                fromJSON(object: any): _58.QueryVotesResponse;
                toJSON(message: _58.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_58.QueryVotesResponse>): _58.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _58.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryParamsRequest;
                fromJSON(object: any): _58.QueryParamsRequest;
                toJSON(message: _58.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_58.QueryParamsRequest>): _58.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _58.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryParamsResponse;
                fromJSON(object: any): _58.QueryParamsResponse;
                toJSON(message: _58.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_58.QueryParamsResponse>): _58.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _58.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryDepositRequest;
                fromJSON(object: any): _58.QueryDepositRequest;
                toJSON(message: _58.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_58.QueryDepositRequest>): _58.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _58.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryDepositResponse;
                fromJSON(object: any): _58.QueryDepositResponse;
                toJSON(message: _58.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_58.QueryDepositResponse>): _58.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _58.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryDepositsRequest;
                fromJSON(object: any): _58.QueryDepositsRequest;
                toJSON(message: _58.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_58.QueryDepositsRequest>): _58.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _58.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryDepositsResponse;
                fromJSON(object: any): _58.QueryDepositsResponse;
                toJSON(message: _58.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_58.QueryDepositsResponse>): _58.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _58.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryTallyResultRequest;
                fromJSON(object: any): _58.QueryTallyResultRequest;
                toJSON(message: _58.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_58.QueryTallyResultRequest>): _58.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _58.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryTallyResultResponse;
                fromJSON(object: any): _58.QueryTallyResultResponse;
                toJSON(message: _58.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_58.QueryTallyResultResponse>): _58.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _57.VoteOption;
            voteOptionToJSON(object: _57.VoteOption): string;
            proposalStatusFromJSON(object: any): _57.ProposalStatus;
            proposalStatusToJSON(object: _57.ProposalStatus): string;
            VoteOption: typeof _57.VoteOption;
            VoteOptionSDKType: typeof _57.VoteOption;
            ProposalStatus: typeof _57.ProposalStatus;
            ProposalStatusSDKType: typeof _57.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _57.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.WeightedVoteOption;
                fromJSON(object: any): _57.WeightedVoteOption;
                toJSON(message: _57.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_57.WeightedVoteOption>): _57.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _57.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.TextProposal;
                fromJSON(object: any): _57.TextProposal;
                toJSON(message: _57.TextProposal): unknown;
                fromPartial(object: Partial<_57.TextProposal>): _57.TextProposal;
            };
            Deposit: {
                encode(message: _57.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Deposit;
                fromJSON(object: any): _57.Deposit;
                toJSON(message: _57.Deposit): unknown;
                fromPartial(object: Partial<_57.Deposit>): _57.Deposit;
            };
            Proposal: {
                encode(message: _57.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Proposal;
                fromJSON(object: any): _57.Proposal;
                toJSON(message: _57.Proposal): unknown;
                fromPartial(object: Partial<_57.Proposal>): _57.Proposal;
            };
            TallyResult: {
                encode(message: _57.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.TallyResult;
                fromJSON(object: any): _57.TallyResult;
                toJSON(message: _57.TallyResult): unknown;
                fromPartial(object: Partial<_57.TallyResult>): _57.TallyResult;
            };
            Vote: {
                encode(message: _57.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Vote;
                fromJSON(object: any): _57.Vote;
                toJSON(message: _57.Vote): unknown;
                fromPartial(object: Partial<_57.Vote>): _57.Vote;
            };
            DepositParams: {
                encode(message: _57.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.DepositParams;
                fromJSON(object: any): _57.DepositParams;
                toJSON(message: _57.DepositParams): unknown;
                fromPartial(object: Partial<_57.DepositParams>): _57.DepositParams;
            };
            VotingParams: {
                encode(message: _57.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.VotingParams;
                fromJSON(object: any): _57.VotingParams;
                toJSON(message: _57.VotingParams): unknown;
                fromPartial(object: Partial<_57.VotingParams>): _57.VotingParams;
            };
            TallyParams: {
                encode(message: _57.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.TallyParams;
                fromJSON(object: any): _57.TallyParams;
                toJSON(message: _57.TallyParams): unknown;
                fromPartial(object: Partial<_57.TallyParams>): _57.TallyParams;
            };
            GenesisState: {
                encode(message: _56.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.GenesisState;
                fromJSON(object: any): _56.GenesisState;
                toJSON(message: _56.GenesisState): unknown;
                fromPartial(object: Partial<_56.GenesisState>): _56.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _256.MsgClientImpl;
            QueryClientImpl: typeof _240.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _62.QueryGroupInfoRequest): Promise<_62.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _62.QueryGroupPolicyInfoRequest): Promise<_62.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _62.QueryGroupMembersRequest): Promise<_62.QueryGroupMembersResponse>;
                groupsByAdmin(request: _62.QueryGroupsByAdminRequest): Promise<_62.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _62.QueryGroupPoliciesByGroupRequest): Promise<_62.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _62.QueryGroupPoliciesByAdminRequest): Promise<_62.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _62.QueryProposalRequest): Promise<_62.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _62.QueryProposalsByGroupPolicyRequest): Promise<_62.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _62.QueryVoteByProposalVoterRequest): Promise<_62.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _62.QueryVotesByProposalRequest): Promise<_62.QueryVotesByProposalResponse>;
                votesByVoter(request: _62.QueryVotesByVoterRequest): Promise<_62.QueryVotesByVoterResponse>;
                groupsByMember(request: _62.QueryGroupsByMemberRequest): Promise<_62.QueryGroupsByMemberResponse>;
                tallyResult(request: _62.QueryTallyResultRequest): Promise<_62.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _63.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _63.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _63.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _63.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _63.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _63.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _63.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _63.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _63.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _63.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _63.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _63.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _63.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _63.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _63.MsgCreateGroup): {
                        typeUrl: string;
                        value: _63.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _63.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _63.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _63.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _63.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _63.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _63.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _63.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _63.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _63.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _63.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _63.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _63.MsgWithdrawProposal;
                    };
                    vote(value: _63.MsgVote): {
                        typeUrl: string;
                        value: _63.MsgVote;
                    };
                    exec(value: _63.MsgExec): {
                        typeUrl: string;
                        value: _63.MsgExec;
                    };
                    leaveGroup(value: _63.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _63.MsgLeaveGroup;
                    };
                };
                toJSON: {
                    createGroup(value: _63.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _63.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _63.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _63.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupPolicy(value: _63.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupWithPolicy(value: _63.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyAdmin(value: _63.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyDecisionPolicy(value: _63.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyMetadata(value: _63.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitProposal(value: _63.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawProposal(value: _63.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _63.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _63.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    leaveGroup(value: _63.MsgLeaveGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _63.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _63.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _63.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _63.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _63.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _63.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _63.MsgCreateGroup): {
                        typeUrl: string;
                        value: _63.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _63.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _63.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _63.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _63.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _63.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _63.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _63.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _63.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _63.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _63.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _63.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _63.MsgWithdrawProposal;
                    };
                    vote(value: _63.MsgVote): {
                        typeUrl: string;
                        value: _63.MsgVote;
                    };
                    exec(value: _63.MsgExec): {
                        typeUrl: string;
                        value: _63.MsgExec;
                    };
                    leaveGroup(value: _63.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _63.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _63.MsgCreateGroup) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ admin, members, metadata }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        metadata: string;
                    }) => _63.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _63.MsgUpdateGroupMembers) => {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                    };
                    fromAmino: ({ admin, group_id, member_updates }: {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                    }) => _63.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _63.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _63.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _63.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _63.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _63.MsgCreateGroupPolicy) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, group_id, metadata, decision_policy }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _63.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _63.MsgCreateGroupWithPolicy) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, members, group_metadata, group_policy_metadata, group_policy_as_admin, decision_policy }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _63.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, address, newAdmin }: _63.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, address, new_admin }: {
                        admin: string;
                        address: string;
                        new_admin: string;
                    }) => _63.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, address, decisionPolicy }: _63.MsgUpdateGroupPolicyDecisionPolicy) => {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, address, decision_policy }: {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _63.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, address, metadata }: _63.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, address, metadata }: {
                        admin: string;
                        address: string;
                        metadata: string;
                    }) => _63.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ address, proposers, metadata, messages, exec }: _63.MsgSubmitProposal) => {
                        address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    };
                    fromAmino: ({ address, proposers, metadata, messages, exec }: {
                        address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    }) => _63.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _63.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _63.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _63.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata, exec }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    }) => _63.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, signer }: _63.MsgExec) => {
                        proposal_id: string;
                        signer: string;
                    };
                    fromAmino: ({ proposal_id, signer }: {
                        proposal_id: string;
                        signer: string;
                    }) => _63.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _63.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _63.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _64.VoteOption;
            voteOptionToJSON(object: _64.VoteOption): string;
            proposalStatusFromJSON(object: any): _64.ProposalStatus;
            proposalStatusToJSON(object: _64.ProposalStatus): string;
            proposalResultFromJSON(object: any): _64.ProposalResult;
            proposalResultToJSON(object: _64.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _64.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _64.ProposalExecutorResult): string;
            VoteOption: typeof _64.VoteOption;
            VoteOptionSDKType: typeof _64.VoteOption;
            ProposalStatus: typeof _64.ProposalStatus;
            ProposalStatusSDKType: typeof _64.ProposalStatus;
            ProposalResult: typeof _64.ProposalResult;
            ProposalResultSDKType: typeof _64.ProposalResult;
            ProposalExecutorResult: typeof _64.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _64.ProposalExecutorResult;
            Member: {
                encode(message: _64.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Member;
                fromJSON(object: any): _64.Member;
                toJSON(message: _64.Member): unknown;
                fromPartial(object: Partial<_64.Member>): _64.Member;
            };
            Members: {
                encode(message: _64.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Members;
                fromJSON(object: any): _64.Members;
                toJSON(message: _64.Members): unknown;
                fromPartial(object: Partial<_64.Members>): _64.Members;
            };
            ThresholdDecisionPolicy: {
                encode(message: _64.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ThresholdDecisionPolicy;
                fromJSON(object: any): _64.ThresholdDecisionPolicy;
                toJSON(message: _64.ThresholdDecisionPolicy): unknown;
                fromPartial(object: Partial<_64.ThresholdDecisionPolicy>): _64.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _64.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.PercentageDecisionPolicy;
                fromJSON(object: any): _64.PercentageDecisionPolicy;
                toJSON(message: _64.PercentageDecisionPolicy): unknown;
                fromPartial(object: Partial<_64.PercentageDecisionPolicy>): _64.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _64.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.DecisionPolicyWindows;
                fromJSON(object: any): _64.DecisionPolicyWindows;
                toJSON(message: _64.DecisionPolicyWindows): unknown;
                fromPartial(object: Partial<_64.DecisionPolicyWindows>): _64.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _64.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GroupInfo;
                fromJSON(object: any): _64.GroupInfo;
                toJSON(message: _64.GroupInfo): unknown;
                fromPartial(object: Partial<_64.GroupInfo>): _64.GroupInfo;
            };
            GroupMember: {
                encode(message: _64.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GroupMember;
                fromJSON(object: any): _64.GroupMember;
                toJSON(message: _64.GroupMember): unknown;
                fromPartial(object: Partial<_64.GroupMember>): _64.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _64.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GroupPolicyInfo;
                fromJSON(object: any): _64.GroupPolicyInfo;
                toJSON(message: _64.GroupPolicyInfo): unknown;
                fromPartial(object: Partial<_64.GroupPolicyInfo>): _64.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _64.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Proposal;
                fromJSON(object: any): _64.Proposal;
                toJSON(message: _64.Proposal): unknown;
                fromPartial(object: Partial<_64.Proposal>): _64.Proposal;
            };
            TallyResult: {
                encode(message: _64.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.TallyResult;
                fromJSON(object: any): _64.TallyResult;
                toJSON(message: _64.TallyResult): unknown;
                fromPartial(object: Partial<_64.TallyResult>): _64.TallyResult;
            };
            Vote: {
                encode(message: _64.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Vote;
                fromJSON(object: any): _64.Vote;
                toJSON(message: _64.Vote): unknown;
                fromPartial(object: Partial<_64.Vote>): _64.Vote;
            };
            Cosmos_groupDecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _64.ThresholdDecisionPolicy | _64.PercentageDecisionPolicy;
            execFromJSON(object: any): _63.Exec;
            execToJSON(object: _63.Exec): string;
            Exec: typeof _63.Exec;
            ExecSDKType: typeof _63.Exec;
            MsgCreateGroup: {
                encode(message: _63.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgCreateGroup;
                fromJSON(object: any): _63.MsgCreateGroup;
                toJSON(message: _63.MsgCreateGroup): unknown;
                fromPartial(object: Partial<_63.MsgCreateGroup>): _63.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _63.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgCreateGroupResponse;
                fromJSON(object: any): _63.MsgCreateGroupResponse;
                toJSON(message: _63.MsgCreateGroupResponse): unknown;
                fromPartial(object: Partial<_63.MsgCreateGroupResponse>): _63.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _63.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupMembers;
                fromJSON(object: any): _63.MsgUpdateGroupMembers;
                toJSON(message: _63.MsgUpdateGroupMembers): unknown;
                fromPartial(object: Partial<_63.MsgUpdateGroupMembers>): _63.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _63.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _63.MsgUpdateGroupMembersResponse;
                toJSON(_: _63.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: Partial<_63.MsgUpdateGroupMembersResponse>): _63.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _63.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupAdmin;
                fromJSON(object: any): _63.MsgUpdateGroupAdmin;
                toJSON(message: _63.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: Partial<_63.MsgUpdateGroupAdmin>): _63.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _63.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _63.MsgUpdateGroupAdminResponse;
                toJSON(_: _63.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: Partial<_63.MsgUpdateGroupAdminResponse>): _63.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _63.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupMetadata;
                fromJSON(object: any): _63.MsgUpdateGroupMetadata;
                toJSON(message: _63.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: Partial<_63.MsgUpdateGroupMetadata>): _63.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _63.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _63.MsgUpdateGroupMetadataResponse;
                toJSON(_: _63.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: Partial<_63.MsgUpdateGroupMetadataResponse>): _63.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _63.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgCreateGroupPolicy;
                fromJSON(object: any): _63.MsgCreateGroupPolicy;
                toJSON(message: _63.MsgCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_63.MsgCreateGroupPolicy>): _63.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _63.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _63.MsgCreateGroupPolicyResponse;
                toJSON(message: _63.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_63.MsgCreateGroupPolicyResponse>): _63.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _63.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _63.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _63.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: Partial<_63.MsgUpdateGroupPolicyAdmin>): _63.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _63.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _63.MsgCreateGroupWithPolicy;
                toJSON(message: _63.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: Partial<_63.MsgCreateGroupWithPolicy>): _63.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _63.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _63.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _63.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: Partial<_63.MsgCreateGroupWithPolicyResponse>): _63.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _63.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _63.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _63.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: Partial<_63.MsgUpdateGroupPolicyAdminResponse>): _63.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _63.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _63.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _63.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: Partial<_63.MsgUpdateGroupPolicyDecisionPolicy>): _63.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _63.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _63.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _63.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: Partial<_63.MsgUpdateGroupPolicyDecisionPolicyResponse>): _63.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _63.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _63.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _63.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: Partial<_63.MsgUpdateGroupPolicyMetadata>): _63.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _63.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _63.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _63.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: Partial<_63.MsgUpdateGroupPolicyMetadataResponse>): _63.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _63.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgSubmitProposal;
                fromJSON(object: any): _63.MsgSubmitProposal;
                toJSON(message: _63.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_63.MsgSubmitProposal>): _63.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _63.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgSubmitProposalResponse;
                fromJSON(object: any): _63.MsgSubmitProposalResponse;
                toJSON(message: _63.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_63.MsgSubmitProposalResponse>): _63.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _63.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgWithdrawProposal;
                fromJSON(object: any): _63.MsgWithdrawProposal;
                toJSON(message: _63.MsgWithdrawProposal): unknown;
                fromPartial(object: Partial<_63.MsgWithdrawProposal>): _63.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _63.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgWithdrawProposalResponse;
                fromJSON(_: any): _63.MsgWithdrawProposalResponse;
                toJSON(_: _63.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: Partial<_63.MsgWithdrawProposalResponse>): _63.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _63.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgVote;
                fromJSON(object: any): _63.MsgVote;
                toJSON(message: _63.MsgVote): unknown;
                fromPartial(object: Partial<_63.MsgVote>): _63.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _63.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgVoteResponse;
                fromJSON(_: any): _63.MsgVoteResponse;
                toJSON(_: _63.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_63.MsgVoteResponse>): _63.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _63.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgExec;
                fromJSON(object: any): _63.MsgExec;
                toJSON(message: _63.MsgExec): unknown;
                fromPartial(object: Partial<_63.MsgExec>): _63.MsgExec;
            };
            MsgExecResponse: {
                encode(_: _63.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgExecResponse;
                fromJSON(_: any): _63.MsgExecResponse;
                toJSON(_: _63.MsgExecResponse): unknown;
                fromPartial(_: Partial<_63.MsgExecResponse>): _63.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _63.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgLeaveGroup;
                fromJSON(object: any): _63.MsgLeaveGroup;
                toJSON(message: _63.MsgLeaveGroup): unknown;
                fromPartial(object: Partial<_63.MsgLeaveGroup>): _63.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _63.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgLeaveGroupResponse;
                fromJSON(_: any): _63.MsgLeaveGroupResponse;
                toJSON(_: _63.MsgLeaveGroupResponse): unknown;
                fromPartial(_: Partial<_63.MsgLeaveGroupResponse>): _63.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _62.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupInfoRequest;
                fromJSON(object: any): _62.QueryGroupInfoRequest;
                toJSON(message: _62.QueryGroupInfoRequest): unknown;
                fromPartial(object: Partial<_62.QueryGroupInfoRequest>): _62.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _62.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupInfoResponse;
                fromJSON(object: any): _62.QueryGroupInfoResponse;
                toJSON(message: _62.QueryGroupInfoResponse): unknown;
                fromPartial(object: Partial<_62.QueryGroupInfoResponse>): _62.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _62.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _62.QueryGroupPolicyInfoRequest;
                toJSON(message: _62.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: Partial<_62.QueryGroupPolicyInfoRequest>): _62.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _62.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _62.QueryGroupPolicyInfoResponse;
                toJSON(message: _62.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: Partial<_62.QueryGroupPolicyInfoResponse>): _62.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _62.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupMembersRequest;
                fromJSON(object: any): _62.QueryGroupMembersRequest;
                toJSON(message: _62.QueryGroupMembersRequest): unknown;
                fromPartial(object: Partial<_62.QueryGroupMembersRequest>): _62.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _62.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupMembersResponse;
                fromJSON(object: any): _62.QueryGroupMembersResponse;
                toJSON(message: _62.QueryGroupMembersResponse): unknown;
                fromPartial(object: Partial<_62.QueryGroupMembersResponse>): _62.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _62.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupsByAdminRequest;
                fromJSON(object: any): _62.QueryGroupsByAdminRequest;
                toJSON(message: _62.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: Partial<_62.QueryGroupsByAdminRequest>): _62.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _62.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupsByAdminResponse;
                fromJSON(object: any): _62.QueryGroupsByAdminResponse;
                toJSON(message: _62.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: Partial<_62.QueryGroupsByAdminResponse>): _62.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _62.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _62.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _62.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: Partial<_62.QueryGroupPoliciesByGroupRequest>): _62.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _62.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _62.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _62.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: Partial<_62.QueryGroupPoliciesByGroupResponse>): _62.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _62.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _62.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _62.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: Partial<_62.QueryGroupPoliciesByAdminRequest>): _62.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _62.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _62.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _62.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: Partial<_62.QueryGroupPoliciesByAdminResponse>): _62.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _62.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryProposalRequest;
                fromJSON(object: any): _62.QueryProposalRequest;
                toJSON(message: _62.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_62.QueryProposalRequest>): _62.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _62.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryProposalResponse;
                fromJSON(object: any): _62.QueryProposalResponse;
                toJSON(message: _62.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_62.QueryProposalResponse>): _62.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _62.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _62.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _62.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: Partial<_62.QueryProposalsByGroupPolicyRequest>): _62.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _62.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _62.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _62.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_62.QueryProposalsByGroupPolicyResponse>): _62.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _62.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _62.QueryVoteByProposalVoterRequest;
                toJSON(message: _62.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: Partial<_62.QueryVoteByProposalVoterRequest>): _62.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _62.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _62.QueryVoteByProposalVoterResponse;
                toJSON(message: _62.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: Partial<_62.QueryVoteByProposalVoterResponse>): _62.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _62.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryVotesByProposalRequest;
                fromJSON(object: any): _62.QueryVotesByProposalRequest;
                toJSON(message: _62.QueryVotesByProposalRequest): unknown;
                fromPartial(object: Partial<_62.QueryVotesByProposalRequest>): _62.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _62.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryVotesByProposalResponse;
                fromJSON(object: any): _62.QueryVotesByProposalResponse;
                toJSON(message: _62.QueryVotesByProposalResponse): unknown;
                fromPartial(object: Partial<_62.QueryVotesByProposalResponse>): _62.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _62.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryVotesByVoterRequest;
                fromJSON(object: any): _62.QueryVotesByVoterRequest;
                toJSON(message: _62.QueryVotesByVoterRequest): unknown;
                fromPartial(object: Partial<_62.QueryVotesByVoterRequest>): _62.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _62.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryVotesByVoterResponse;
                fromJSON(object: any): _62.QueryVotesByVoterResponse;
                toJSON(message: _62.QueryVotesByVoterResponse): unknown;
                fromPartial(object: Partial<_62.QueryVotesByVoterResponse>): _62.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _62.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupsByMemberRequest;
                fromJSON(object: any): _62.QueryGroupsByMemberRequest;
                toJSON(message: _62.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: Partial<_62.QueryGroupsByMemberRequest>): _62.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _62.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupsByMemberResponse;
                fromJSON(object: any): _62.QueryGroupsByMemberResponse;
                toJSON(message: _62.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: Partial<_62.QueryGroupsByMemberResponse>): _62.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _62.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryTallyResultRequest;
                fromJSON(object: any): _62.QueryTallyResultRequest;
                toJSON(message: _62.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_62.QueryTallyResultRequest>): _62.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _62.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryTallyResultResponse;
                fromJSON(object: any): _62.QueryTallyResultResponse;
                toJSON(message: _62.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_62.QueryTallyResultResponse>): _62.QueryTallyResultResponse;
            };
            GenesisState: {
                encode(message: _61.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.GenesisState;
                fromJSON(object: any): _61.GenesisState;
                toJSON(message: _61.GenesisState): unknown;
                fromPartial(object: Partial<_61.GenesisState>): _61.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _60.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventCreateGroup;
                fromJSON(object: any): _60.EventCreateGroup;
                toJSON(message: _60.EventCreateGroup): unknown;
                fromPartial(object: Partial<_60.EventCreateGroup>): _60.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _60.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventUpdateGroup;
                fromJSON(object: any): _60.EventUpdateGroup;
                toJSON(message: _60.EventUpdateGroup): unknown;
                fromPartial(object: Partial<_60.EventUpdateGroup>): _60.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _60.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventCreateGroupPolicy;
                fromJSON(object: any): _60.EventCreateGroupPolicy;
                toJSON(message: _60.EventCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_60.EventCreateGroupPolicy>): _60.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _60.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventUpdateGroupPolicy;
                fromJSON(object: any): _60.EventUpdateGroupPolicy;
                toJSON(message: _60.EventUpdateGroupPolicy): unknown;
                fromPartial(object: Partial<_60.EventUpdateGroupPolicy>): _60.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _60.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventSubmitProposal;
                fromJSON(object: any): _60.EventSubmitProposal;
                toJSON(message: _60.EventSubmitProposal): unknown;
                fromPartial(object: Partial<_60.EventSubmitProposal>): _60.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _60.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventWithdrawProposal;
                fromJSON(object: any): _60.EventWithdrawProposal;
                toJSON(message: _60.EventWithdrawProposal): unknown;
                fromPartial(object: Partial<_60.EventWithdrawProposal>): _60.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _60.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventVote;
                fromJSON(object: any): _60.EventVote;
                toJSON(message: _60.EventVote): unknown;
                fromPartial(object: Partial<_60.EventVote>): _60.EventVote;
            };
            EventExec: {
                encode(message: _60.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventExec;
                fromJSON(object: any): _60.EventExec;
                toJSON(message: _60.EventExec): unknown;
                fromPartial(object: Partial<_60.EventExec>): _60.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _60.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventLeaveGroup;
                fromJSON(object: any): _60.EventLeaveGroup;
                toJSON(message: _60.EventLeaveGroup): unknown;
                fromPartial(object: Partial<_60.EventLeaveGroup>): _60.EventLeaveGroup;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _241.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
                inflation(request?: _67.QueryInflationRequest): Promise<_67.QueryInflationResponse>;
                annualProvisions(request?: _67.QueryAnnualProvisionsRequest): Promise<_67.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _67.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryParamsRequest;
                fromJSON(_: any): _67.QueryParamsRequest;
                toJSON(_: _67.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_67.QueryParamsRequest>): _67.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _67.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryParamsResponse;
                fromJSON(object: any): _67.QueryParamsResponse;
                toJSON(message: _67.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_67.QueryParamsResponse>): _67.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _67.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryInflationRequest;
                fromJSON(_: any): _67.QueryInflationRequest;
                toJSON(_: _67.QueryInflationRequest): unknown;
                fromPartial(_: Partial<_67.QueryInflationRequest>): _67.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _67.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryInflationResponse;
                fromJSON(object: any): _67.QueryInflationResponse;
                toJSON(message: _67.QueryInflationResponse): unknown;
                fromPartial(object: Partial<_67.QueryInflationResponse>): _67.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _67.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _67.QueryAnnualProvisionsRequest;
                toJSON(_: _67.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: Partial<_67.QueryAnnualProvisionsRequest>): _67.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _67.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _67.QueryAnnualProvisionsResponse;
                toJSON(message: _67.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: Partial<_67.QueryAnnualProvisionsResponse>): _67.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _66.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.Minter;
                fromJSON(object: any): _66.Minter;
                toJSON(message: _66.Minter): unknown;
                fromPartial(object: Partial<_66.Minter>): _66.Minter;
            };
            Params: {
                encode(message: _66.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.Params;
                fromJSON(object: any): _66.Params;
                toJSON(message: _66.Params): unknown;
                fromPartial(object: Partial<_66.Params>): _66.Params;
            };
            GenesisState: {
                encode(message: _65.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.GenesisState;
                fromJSON(object: any): _65.GenesisState;
                toJSON(message: _65.GenesisState): unknown;
                fromPartial(object: Partial<_65.GenesisState>): _65.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _257.MsgClientImpl;
            QueryClientImpl: typeof _242.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _72.QueryBalanceRequest): Promise<_72.QueryBalanceResponse>;
                owner(request: _72.QueryOwnerRequest): Promise<_72.QueryOwnerResponse>;
                supply(request: _72.QuerySupplyRequest): Promise<_72.QuerySupplyResponse>;
                nFTs(request: _72.QueryNFTsRequest): Promise<_72.QueryNFTsResponse>;
                nFT(request: _72.QueryNFTRequest): Promise<_72.QueryNFTResponse>;
                class(request: _72.QueryClassRequest): Promise<_72.QueryClassResponse>;
                classes(request?: _72.QueryClassesRequest): Promise<_72.QueryClassesResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _73.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _73.MsgSend): {
                        typeUrl: string;
                        value: _73.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _73.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _73.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _73.MsgSend): {
                        typeUrl: string;
                        value: _73.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _73.MsgSend) => {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    };
                    fromAmino: ({ class_id, id, sender, receiver }: {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    }) => _73.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _73.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgSend;
                fromJSON(object: any): _73.MsgSend;
                toJSON(message: _73.MsgSend): unknown;
                fromPartial(object: Partial<_73.MsgSend>): _73.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _73.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgSendResponse;
                fromJSON(_: any): _73.MsgSendResponse;
                toJSON(_: _73.MsgSendResponse): unknown;
                fromPartial(_: Partial<_73.MsgSendResponse>): _73.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _72.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryBalanceRequest;
                fromJSON(object: any): _72.QueryBalanceRequest;
                toJSON(message: _72.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_72.QueryBalanceRequest>): _72.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _72.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryBalanceResponse;
                fromJSON(object: any): _72.QueryBalanceResponse;
                toJSON(message: _72.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_72.QueryBalanceResponse>): _72.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _72.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryOwnerRequest;
                fromJSON(object: any): _72.QueryOwnerRequest;
                toJSON(message: _72.QueryOwnerRequest): unknown;
                fromPartial(object: Partial<_72.QueryOwnerRequest>): _72.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _72.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryOwnerResponse;
                fromJSON(object: any): _72.QueryOwnerResponse;
                toJSON(message: _72.QueryOwnerResponse): unknown;
                fromPartial(object: Partial<_72.QueryOwnerResponse>): _72.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _72.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QuerySupplyRequest;
                fromJSON(object: any): _72.QuerySupplyRequest;
                toJSON(message: _72.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_72.QuerySupplyRequest>): _72.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _72.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QuerySupplyResponse;
                fromJSON(object: any): _72.QuerySupplyResponse;
                toJSON(message: _72.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_72.QuerySupplyResponse>): _72.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _72.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryNFTsRequest;
                fromJSON(object: any): _72.QueryNFTsRequest;
                toJSON(message: _72.QueryNFTsRequest): unknown;
                fromPartial(object: Partial<_72.QueryNFTsRequest>): _72.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _72.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryNFTsResponse;
                fromJSON(object: any): _72.QueryNFTsResponse;
                toJSON(message: _72.QueryNFTsResponse): unknown;
                fromPartial(object: Partial<_72.QueryNFTsResponse>): _72.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _72.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryNFTRequest;
                fromJSON(object: any): _72.QueryNFTRequest;
                toJSON(message: _72.QueryNFTRequest): unknown;
                fromPartial(object: Partial<_72.QueryNFTRequest>): _72.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _72.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryNFTResponse;
                fromJSON(object: any): _72.QueryNFTResponse;
                toJSON(message: _72.QueryNFTResponse): unknown;
                fromPartial(object: Partial<_72.QueryNFTResponse>): _72.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _72.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryClassRequest;
                fromJSON(object: any): _72.QueryClassRequest;
                toJSON(message: _72.QueryClassRequest): unknown;
                fromPartial(object: Partial<_72.QueryClassRequest>): _72.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _72.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryClassResponse;
                fromJSON(object: any): _72.QueryClassResponse;
                toJSON(message: _72.QueryClassResponse): unknown;
                fromPartial(object: Partial<_72.QueryClassResponse>): _72.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _72.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryClassesRequest;
                fromJSON(object: any): _72.QueryClassesRequest;
                toJSON(message: _72.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_72.QueryClassesRequest>): _72.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _72.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryClassesResponse;
                fromJSON(object: any): _72.QueryClassesResponse;
                toJSON(message: _72.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_72.QueryClassesResponse>): _72.QueryClassesResponse;
            };
            Class: {
                encode(message: _71.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Class;
                fromJSON(object: any): _71.Class;
                toJSON(message: _71.Class): unknown;
                fromPartial(object: Partial<_71.Class>): _71.Class;
            };
            NFT: {
                encode(message: _71.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.NFT;
                fromJSON(object: any): _71.NFT;
                toJSON(message: _71.NFT): unknown;
                fromPartial(object: Partial<_71.NFT>): _71.NFT;
            };
            GenesisState: {
                encode(message: _70.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.GenesisState;
                fromJSON(object: any): _70.GenesisState;
                toJSON(message: _70.GenesisState): unknown;
                fromPartial(object: Partial<_70.GenesisState>): _70.GenesisState;
            };
            Entry: {
                encode(message: _70.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Entry;
                fromJSON(object: any): _70.Entry;
                toJSON(message: _70.Entry): unknown;
                fromPartial(object: Partial<_70.Entry>): _70.Entry;
            };
            EventSend: {
                encode(message: _69.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.EventSend;
                fromJSON(object: any): _69.EventSend;
                toJSON(message: _69.EventSend): unknown;
                fromPartial(object: Partial<_69.EventSend>): _69.EventSend;
            };
            EventMint: {
                encode(message: _69.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.EventMint;
                fromJSON(object: any): _69.EventMint;
                toJSON(message: _69.EventMint): unknown;
                fromPartial(object: Partial<_69.EventMint>): _69.EventMint;
            };
            EventBurn: {
                encode(message: _69.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.EventBurn;
                fromJSON(object: any): _69.EventBurn;
                toJSON(message: _69.EventBurn): unknown;
                fromPartial(object: Partial<_69.EventBurn>): _69.EventBurn;
            };
        };
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                encode(message: _74.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.TableDescriptor;
                fromJSON(object: any): _74.TableDescriptor;
                toJSON(message: _74.TableDescriptor): unknown;
                fromPartial(object: Partial<_74.TableDescriptor>): _74.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _74.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.PrimaryKeyDescriptor;
                fromJSON(object: any): _74.PrimaryKeyDescriptor;
                toJSON(message: _74.PrimaryKeyDescriptor): unknown;
                fromPartial(object: Partial<_74.PrimaryKeyDescriptor>): _74.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _74.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.SecondaryIndexDescriptor;
                fromJSON(object: any): _74.SecondaryIndexDescriptor;
                toJSON(message: _74.SecondaryIndexDescriptor): unknown;
                fromPartial(object: Partial<_74.SecondaryIndexDescriptor>): _74.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _74.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.SingletonDescriptor;
                fromJSON(object: any): _74.SingletonDescriptor;
                toJSON(message: _74.SingletonDescriptor): unknown;
                fromPartial(object: Partial<_74.SingletonDescriptor>): _74.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _75.StorageType;
            storageTypeToJSON(object: _75.StorageType): string;
            StorageType: typeof _75.StorageType;
            StorageTypeSDKType: typeof _75.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _75.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ModuleSchemaDescriptor;
                fromJSON(object: any): _75.ModuleSchemaDescriptor;
                toJSON(message: _75.ModuleSchemaDescriptor): unknown;
                fromPartial(object: Partial<_75.ModuleSchemaDescriptor>): _75.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _75.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _75.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _75.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: Partial<_75.ModuleSchemaDescriptor_FileEntry>): _75.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _243.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
                subspaces(request?: _77.QuerySubspacesRequest): Promise<_77.QuerySubspacesResponse>;
            };
            QueryParamsRequest: {
                encode(message: _77.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryParamsRequest;
                fromJSON(object: any): _77.QueryParamsRequest;
                toJSON(message: _77.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_77.QueryParamsRequest>): _77.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _77.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryParamsResponse;
                fromJSON(object: any): _77.QueryParamsResponse;
                toJSON(message: _77.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_77.QueryParamsResponse>): _77.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _77.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QuerySubspacesRequest;
                fromJSON(_: any): _77.QuerySubspacesRequest;
                toJSON(_: _77.QuerySubspacesRequest): unknown;
                fromPartial(_: Partial<_77.QuerySubspacesRequest>): _77.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _77.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QuerySubspacesResponse;
                fromJSON(object: any): _77.QuerySubspacesResponse;
                toJSON(message: _77.QuerySubspacesResponse): unknown;
                fromPartial(object: Partial<_77.QuerySubspacesResponse>): _77.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _77.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Subspace;
                fromJSON(object: any): _77.Subspace;
                toJSON(message: _77.Subspace): unknown;
                fromPartial(object: Partial<_77.Subspace>): _77.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _76.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ParameterChangeProposal;
                fromJSON(object: any): _76.ParameterChangeProposal;
                toJSON(message: _76.ParameterChangeProposal): unknown;
                fromPartial(object: Partial<_76.ParameterChangeProposal>): _76.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _76.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ParamChange;
                fromJSON(object: any): _76.ParamChange;
                toJSON(message: _76.ParamChange): unknown;
                fromPartial(object: Partial<_76.ParamChange>): _76.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _258.MsgClientImpl;
            QueryClientImpl: typeof _244.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                signingInfo(request: _79.QuerySigningInfoRequest): Promise<_79.QuerySigningInfoResponse>;
                signingInfos(request?: _79.QuerySigningInfosRequest): Promise<_79.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _81.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _81.MsgUnjail): {
                        typeUrl: string;
                        value: _81.MsgUnjail;
                    };
                };
                toJSON: {
                    unjail(value: _81.MsgUnjail): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _81.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _81.MsgUnjail): {
                        typeUrl: string;
                        value: _81.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _81.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _81.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _81.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgUnjail;
                fromJSON(object: any): _81.MsgUnjail;
                toJSON(message: _81.MsgUnjail): unknown;
                fromPartial(object: Partial<_81.MsgUnjail>): _81.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _81.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgUnjailResponse;
                fromJSON(_: any): _81.MsgUnjailResponse;
                toJSON(_: _81.MsgUnjailResponse): unknown;
                fromPartial(_: Partial<_81.MsgUnjailResponse>): _81.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _80.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ValidatorSigningInfo;
                fromJSON(object: any): _80.ValidatorSigningInfo;
                toJSON(message: _80.ValidatorSigningInfo): unknown;
                fromPartial(object: Partial<_80.ValidatorSigningInfo>): _80.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _80.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Params;
                fromJSON(object: any): _80.Params;
                toJSON(message: _80.Params): unknown;
                fromPartial(object: Partial<_80.Params>): _80.Params;
            };
            QueryParamsRequest: {
                encode(_: _79.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryParamsRequest;
                fromJSON(_: any): _79.QueryParamsRequest;
                toJSON(_: _79.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_79.QueryParamsRequest>): _79.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _79.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryParamsResponse;
                fromJSON(object: any): _79.QueryParamsResponse;
                toJSON(message: _79.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_79.QueryParamsResponse>): _79.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _79.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QuerySigningInfoRequest;
                fromJSON(object: any): _79.QuerySigningInfoRequest;
                toJSON(message: _79.QuerySigningInfoRequest): unknown;
                fromPartial(object: Partial<_79.QuerySigningInfoRequest>): _79.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _79.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QuerySigningInfoResponse;
                fromJSON(object: any): _79.QuerySigningInfoResponse;
                toJSON(message: _79.QuerySigningInfoResponse): unknown;
                fromPartial(object: Partial<_79.QuerySigningInfoResponse>): _79.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _79.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QuerySigningInfosRequest;
                fromJSON(object: any): _79.QuerySigningInfosRequest;
                toJSON(message: _79.QuerySigningInfosRequest): unknown;
                fromPartial(object: Partial<_79.QuerySigningInfosRequest>): _79.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _79.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QuerySigningInfosResponse;
                fromJSON(object: any): _79.QuerySigningInfosResponse;
                toJSON(message: _79.QuerySigningInfosResponse): unknown;
                fromPartial(object: Partial<_79.QuerySigningInfosResponse>): _79.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _78.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.GenesisState;
                fromJSON(object: any): _78.GenesisState;
                toJSON(message: _78.GenesisState): unknown;
                fromPartial(object: Partial<_78.GenesisState>): _78.GenesisState;
            };
            SigningInfo: {
                encode(message: _78.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.SigningInfo;
                fromJSON(object: any): _78.SigningInfo;
                toJSON(message: _78.SigningInfo): unknown;
                fromPartial(object: Partial<_78.SigningInfo>): _78.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _78.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.ValidatorMissedBlocks;
                fromJSON(object: any): _78.ValidatorMissedBlocks;
                toJSON(message: _78.ValidatorMissedBlocks): unknown;
                fromPartial(object: Partial<_78.ValidatorMissedBlocks>): _78.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _78.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MissedBlock;
                fromJSON(object: any): _78.MissedBlock;
                toJSON(message: _78.MissedBlock): unknown;
                fromPartial(object: Partial<_78.MissedBlock>): _78.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _259.MsgClientImpl;
            QueryClientImpl: typeof _245.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _84.QueryValidatorsRequest): Promise<_84.QueryValidatorsResponse>;
                validator(request: _84.QueryValidatorRequest): Promise<_84.QueryValidatorResponse>;
                validatorDelegations(request: _84.QueryValidatorDelegationsRequest): Promise<_84.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _84.QueryValidatorUnbondingDelegationsRequest): Promise<_84.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _84.QueryDelegationRequest): Promise<_84.QueryDelegationResponse>;
                unbondingDelegation(request: _84.QueryUnbondingDelegationRequest): Promise<_84.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _84.QueryDelegatorDelegationsRequest): Promise<_84.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _84.QueryDelegatorUnbondingDelegationsRequest): Promise<_84.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _84.QueryRedelegationsRequest): Promise<_84.QueryRedelegationsResponse>;
                delegatorValidators(request: _84.QueryDelegatorValidatorsRequest): Promise<_84.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _84.QueryDelegatorValidatorRequest): Promise<_84.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _84.QueryHistoricalInfoRequest): Promise<_84.QueryHistoricalInfoResponse>;
                pool(request?: _84.QueryPoolRequest): Promise<_84.QueryPoolResponse>;
                params(request?: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _86.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _86.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _86.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _86.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _86.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _86.MsgCreateValidator): {
                        typeUrl: string;
                        value: _86.MsgCreateValidator;
                    };
                    editValidator(value: _86.MsgEditValidator): {
                        typeUrl: string;
                        value: _86.MsgEditValidator;
                    };
                    delegate(value: _86.MsgDelegate): {
                        typeUrl: string;
                        value: _86.MsgDelegate;
                    };
                    beginRedelegate(value: _86.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _86.MsgBeginRedelegate;
                    };
                    undelegate(value: _86.MsgUndelegate): {
                        typeUrl: string;
                        value: _86.MsgUndelegate;
                    };
                };
                toJSON: {
                    createValidator(value: _86.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _86.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _86.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _86.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _86.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _86.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _86.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _86.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _86.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _86.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _86.MsgCreateValidator): {
                        typeUrl: string;
                        value: _86.MsgCreateValidator;
                    };
                    editValidator(value: _86.MsgEditValidator): {
                        typeUrl: string;
                        value: _86.MsgEditValidator;
                    };
                    delegate(value: _86.MsgDelegate): {
                        typeUrl: string;
                        value: _86.MsgDelegate;
                    };
                    beginRedelegate(value: _86.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _86.MsgBeginRedelegate;
                    };
                    undelegate(value: _86.MsgUndelegate): {
                        typeUrl: string;
                        value: _86.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _86.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _86.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _86.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _86.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _86.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _86.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _86.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _86.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _86.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _86.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _86.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgCreateValidator;
                fromJSON(object: any): _86.MsgCreateValidator;
                toJSON(message: _86.MsgCreateValidator): unknown;
                fromPartial(object: Partial<_86.MsgCreateValidator>): _86.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _86.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgCreateValidatorResponse;
                fromJSON(_: any): _86.MsgCreateValidatorResponse;
                toJSON(_: _86.MsgCreateValidatorResponse): unknown;
                fromPartial(_: Partial<_86.MsgCreateValidatorResponse>): _86.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _86.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgEditValidator;
                fromJSON(object: any): _86.MsgEditValidator;
                toJSON(message: _86.MsgEditValidator): unknown;
                fromPartial(object: Partial<_86.MsgEditValidator>): _86.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _86.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgEditValidatorResponse;
                fromJSON(_: any): _86.MsgEditValidatorResponse;
                toJSON(_: _86.MsgEditValidatorResponse): unknown;
                fromPartial(_: Partial<_86.MsgEditValidatorResponse>): _86.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _86.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgDelegate;
                fromJSON(object: any): _86.MsgDelegate;
                toJSON(message: _86.MsgDelegate): unknown;
                fromPartial(object: Partial<_86.MsgDelegate>): _86.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _86.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgDelegateResponse;
                fromJSON(_: any): _86.MsgDelegateResponse;
                toJSON(_: _86.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_86.MsgDelegateResponse>): _86.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _86.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgBeginRedelegate;
                fromJSON(object: any): _86.MsgBeginRedelegate;
                toJSON(message: _86.MsgBeginRedelegate): unknown;
                fromPartial(object: Partial<_86.MsgBeginRedelegate>): _86.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _86.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgBeginRedelegateResponse;
                fromJSON(object: any): _86.MsgBeginRedelegateResponse;
                toJSON(message: _86.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: Partial<_86.MsgBeginRedelegateResponse>): _86.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _86.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgUndelegate;
                fromJSON(object: any): _86.MsgUndelegate;
                toJSON(message: _86.MsgUndelegate): unknown;
                fromPartial(object: Partial<_86.MsgUndelegate>): _86.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _86.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgUndelegateResponse;
                fromJSON(object: any): _86.MsgUndelegateResponse;
                toJSON(message: _86.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_86.MsgUndelegateResponse>): _86.MsgUndelegateResponse;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            bondStatusFromJSON(object: any): _85.BondStatus;
            bondStatusToJSON(object: _85.BondStatus): string;
            BondStatus: typeof _85.BondStatus;
            BondStatusSDKType: typeof _85.BondStatus;
            HistoricalInfo: {
                encode(message: _85.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.HistoricalInfo;
                fromJSON(object: any): _85.HistoricalInfo;
                toJSON(message: _85.HistoricalInfo): unknown;
                fromPartial(object: Partial<_85.HistoricalInfo>): _85.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _85.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.CommissionRates;
                fromJSON(object: any): _85.CommissionRates;
                toJSON(message: _85.CommissionRates): unknown;
                fromPartial(object: Partial<_85.CommissionRates>): _85.CommissionRates;
            };
            Commission: {
                encode(message: _85.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Commission;
                fromJSON(object: any): _85.Commission;
                toJSON(message: _85.Commission): unknown;
                fromPartial(object: Partial<_85.Commission>): _85.Commission;
            };
            Description: {
                encode(message: _85.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Description;
                fromJSON(object: any): _85.Description;
                toJSON(message: _85.Description): unknown;
                fromPartial(object: Partial<_85.Description>): _85.Description;
            };
            Validator: {
                encode(message: _85.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Validator;
                fromJSON(object: any): _85.Validator;
                toJSON(message: _85.Validator): unknown;
                fromPartial(object: Partial<_85.Validator>): _85.Validator;
            };
            ValAddresses: {
                encode(message: _85.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ValAddresses;
                fromJSON(object: any): _85.ValAddresses;
                toJSON(message: _85.ValAddresses): unknown;
                fromPartial(object: Partial<_85.ValAddresses>): _85.ValAddresses;
            };
            DVPair: {
                encode(message: _85.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.DVPair;
                fromJSON(object: any): _85.DVPair;
                toJSON(message: _85.DVPair): unknown;
                fromPartial(object: Partial<_85.DVPair>): _85.DVPair;
            };
            DVPairs: {
                encode(message: _85.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.DVPairs;
                fromJSON(object: any): _85.DVPairs;
                toJSON(message: _85.DVPairs): unknown;
                fromPartial(object: Partial<_85.DVPairs>): _85.DVPairs;
            };
            DVVTriplet: {
                encode(message: _85.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.DVVTriplet;
                fromJSON(object: any): _85.DVVTriplet;
                toJSON(message: _85.DVVTriplet): unknown;
                fromPartial(object: Partial<_85.DVVTriplet>): _85.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _85.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.DVVTriplets;
                fromJSON(object: any): _85.DVVTriplets;
                toJSON(message: _85.DVVTriplets): unknown;
                fromPartial(object: Partial<_85.DVVTriplets>): _85.DVVTriplets;
            };
            Delegation: {
                encode(message: _85.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Delegation;
                fromJSON(object: any): _85.Delegation;
                toJSON(message: _85.Delegation): unknown;
                fromPartial(object: Partial<_85.Delegation>): _85.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _85.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.UnbondingDelegation;
                fromJSON(object: any): _85.UnbondingDelegation;
                toJSON(message: _85.UnbondingDelegation): unknown;
                fromPartial(object: Partial<_85.UnbondingDelegation>): _85.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _85.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.UnbondingDelegationEntry;
                fromJSON(object: any): _85.UnbondingDelegationEntry;
                toJSON(message: _85.UnbondingDelegationEntry): unknown;
                fromPartial(object: Partial<_85.UnbondingDelegationEntry>): _85.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _85.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.RedelegationEntry;
                fromJSON(object: any): _85.RedelegationEntry;
                toJSON(message: _85.RedelegationEntry): unknown;
                fromPartial(object: Partial<_85.RedelegationEntry>): _85.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _85.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Redelegation;
                fromJSON(object: any): _85.Redelegation;
                toJSON(message: _85.Redelegation): unknown;
                fromPartial(object: Partial<_85.Redelegation>): _85.Redelegation;
            };
            Params: {
                encode(message: _85.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Params;
                fromJSON(object: any): _85.Params;
                toJSON(message: _85.Params): unknown;
                fromPartial(object: Partial<_85.Params>): _85.Params;
            };
            DelegationResponse: {
                encode(message: _85.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.DelegationResponse;
                fromJSON(object: any): _85.DelegationResponse;
                toJSON(message: _85.DelegationResponse): unknown;
                fromPartial(object: Partial<_85.DelegationResponse>): _85.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _85.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.RedelegationEntryResponse;
                fromJSON(object: any): _85.RedelegationEntryResponse;
                toJSON(message: _85.RedelegationEntryResponse): unknown;
                fromPartial(object: Partial<_85.RedelegationEntryResponse>): _85.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _85.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.RedelegationResponse;
                fromJSON(object: any): _85.RedelegationResponse;
                toJSON(message: _85.RedelegationResponse): unknown;
                fromPartial(object: Partial<_85.RedelegationResponse>): _85.RedelegationResponse;
            };
            Pool: {
                encode(message: _85.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Pool;
                fromJSON(object: any): _85.Pool;
                toJSON(message: _85.Pool): unknown;
                fromPartial(object: Partial<_85.Pool>): _85.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _84.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorsRequest;
                fromJSON(object: any): _84.QueryValidatorsRequest;
                toJSON(message: _84.QueryValidatorsRequest): unknown;
                fromPartial(object: Partial<_84.QueryValidatorsRequest>): _84.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _84.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorsResponse;
                fromJSON(object: any): _84.QueryValidatorsResponse;
                toJSON(message: _84.QueryValidatorsResponse): unknown;
                fromPartial(object: Partial<_84.QueryValidatorsResponse>): _84.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _84.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorRequest;
                fromJSON(object: any): _84.QueryValidatorRequest;
                toJSON(message: _84.QueryValidatorRequest): unknown;
                fromPartial(object: Partial<_84.QueryValidatorRequest>): _84.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _84.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorResponse;
                fromJSON(object: any): _84.QueryValidatorResponse;
                toJSON(message: _84.QueryValidatorResponse): unknown;
                fromPartial(object: Partial<_84.QueryValidatorResponse>): _84.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _84.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _84.QueryValidatorDelegationsRequest;
                toJSON(message: _84.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_84.QueryValidatorDelegationsRequest>): _84.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _84.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _84.QueryValidatorDelegationsResponse;
                toJSON(message: _84.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_84.QueryValidatorDelegationsResponse>): _84.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _84.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _84.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _84.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_84.QueryValidatorUnbondingDelegationsRequest>): _84.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _84.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _84.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _84.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_84.QueryValidatorUnbondingDelegationsResponse>): _84.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _84.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegationRequest;
                fromJSON(object: any): _84.QueryDelegationRequest;
                toJSON(message: _84.QueryDelegationRequest): unknown;
                fromPartial(object: Partial<_84.QueryDelegationRequest>): _84.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _84.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegationResponse;
                fromJSON(object: any): _84.QueryDelegationResponse;
                toJSON(message: _84.QueryDelegationResponse): unknown;
                fromPartial(object: Partial<_84.QueryDelegationResponse>): _84.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _84.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _84.QueryUnbondingDelegationRequest;
                toJSON(message: _84.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: Partial<_84.QueryUnbondingDelegationRequest>): _84.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _84.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _84.QueryUnbondingDelegationResponse;
                toJSON(message: _84.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: Partial<_84.QueryUnbondingDelegationResponse>): _84.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _84.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _84.QueryDelegatorDelegationsRequest;
                toJSON(message: _84.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_84.QueryDelegatorDelegationsRequest>): _84.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _84.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _84.QueryDelegatorDelegationsResponse;
                toJSON(message: _84.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_84.QueryDelegatorDelegationsResponse>): _84.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _84.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _84.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _84.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_84.QueryDelegatorUnbondingDelegationsRequest>): _84.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _84.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _84.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _84.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_84.QueryDelegatorUnbondingDelegationsResponse>): _84.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _84.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryRedelegationsRequest;
                fromJSON(object: any): _84.QueryRedelegationsRequest;
                toJSON(message: _84.QueryRedelegationsRequest): unknown;
                fromPartial(object: Partial<_84.QueryRedelegationsRequest>): _84.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _84.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryRedelegationsResponse;
                fromJSON(object: any): _84.QueryRedelegationsResponse;
                toJSON(message: _84.QueryRedelegationsResponse): unknown;
                fromPartial(object: Partial<_84.QueryRedelegationsResponse>): _84.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _84.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _84.QueryDelegatorValidatorsRequest;
                toJSON(message: _84.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_84.QueryDelegatorValidatorsRequest>): _84.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _84.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _84.QueryDelegatorValidatorsResponse;
                toJSON(message: _84.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_84.QueryDelegatorValidatorsResponse>): _84.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _84.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _84.QueryDelegatorValidatorRequest;
                toJSON(message: _84.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: Partial<_84.QueryDelegatorValidatorRequest>): _84.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _84.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _84.QueryDelegatorValidatorResponse;
                toJSON(message: _84.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: Partial<_84.QueryDelegatorValidatorResponse>): _84.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _84.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryHistoricalInfoRequest;
                fromJSON(object: any): _84.QueryHistoricalInfoRequest;
                toJSON(message: _84.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: Partial<_84.QueryHistoricalInfoRequest>): _84.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _84.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryHistoricalInfoResponse;
                fromJSON(object: any): _84.QueryHistoricalInfoResponse;
                toJSON(message: _84.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: Partial<_84.QueryHistoricalInfoResponse>): _84.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _84.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryPoolRequest;
                fromJSON(_: any): _84.QueryPoolRequest;
                toJSON(_: _84.QueryPoolRequest): unknown;
                fromPartial(_: Partial<_84.QueryPoolRequest>): _84.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _84.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryPoolResponse;
                fromJSON(object: any): _84.QueryPoolResponse;
                toJSON(message: _84.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_84.QueryPoolResponse>): _84.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _84.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryParamsRequest;
                fromJSON(_: any): _84.QueryParamsRequest;
                toJSON(_: _84.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_84.QueryParamsRequest>): _84.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _84.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryParamsResponse;
                fromJSON(object: any): _84.QueryParamsResponse;
                toJSON(message: _84.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_84.QueryParamsResponse>): _84.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _83.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GenesisState;
                fromJSON(object: any): _83.GenesisState;
                toJSON(message: _83.GenesisState): unknown;
                fromPartial(object: Partial<_83.GenesisState>): _83.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _83.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.LastValidatorPower;
                fromJSON(object: any): _83.LastValidatorPower;
                toJSON(message: _83.LastValidatorPower): unknown;
                fromPartial(object: Partial<_83.LastValidatorPower>): _83.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _82.AuthorizationType;
            authorizationTypeToJSON(object: _82.AuthorizationType): string;
            AuthorizationType: typeof _82.AuthorizationType;
            AuthorizationTypeSDKType: typeof _82.AuthorizationType;
            StakeAuthorization: {
                encode(message: _82.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.StakeAuthorization;
                fromJSON(object: any): _82.StakeAuthorization;
                toJSON(message: _82.StakeAuthorization): unknown;
                fromPartial(object: Partial<_82.StakeAuthorization>): _82.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _82.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.StakeAuthorization_Validators;
                fromJSON(object: any): _82.StakeAuthorization_Validators;
                toJSON(message: _82.StakeAuthorization_Validators): unknown;
                fromPartial(object: Partial<_82.StakeAuthorization_Validators>): _82.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _87.SignMode;
                signModeToJSON(object: _87.SignMode): string;
                SignMode: typeof _87.SignMode;
                SignModeSDKType: typeof _87.SignMode;
                SignatureDescriptors: {
                    encode(message: _87.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignatureDescriptors;
                    fromJSON(object: any): _87.SignatureDescriptors;
                    toJSON(message: _87.SignatureDescriptors): unknown;
                    fromPartial(object: Partial<_87.SignatureDescriptors>): _87.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _87.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignatureDescriptor;
                    fromJSON(object: any): _87.SignatureDescriptor;
                    toJSON(message: _87.SignatureDescriptor): unknown;
                    fromPartial(object: Partial<_87.SignatureDescriptor>): _87.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _87.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignatureDescriptor_Data;
                    fromJSON(object: any): _87.SignatureDescriptor_Data;
                    toJSON(message: _87.SignatureDescriptor_Data): unknown;
                    fromPartial(object: Partial<_87.SignatureDescriptor_Data>): _87.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _87.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _87.SignatureDescriptor_Data_Single;
                    toJSON(message: _87.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: Partial<_87.SignatureDescriptor_Data_Single>): _87.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _87.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _87.SignatureDescriptor_Data_Multi;
                    toJSON(message: _87.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: Partial<_87.SignatureDescriptor_Data_Multi>): _87.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _246.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _88.SimulateRequest): Promise<_88.SimulateResponse>;
                getTx(request: _88.GetTxRequest): Promise<_88.GetTxResponse>;
                broadcastTx(request: _88.BroadcastTxRequest): Promise<_88.BroadcastTxResponse>;
                getTxsEvent(request: _88.GetTxsEventRequest): Promise<_88.GetTxsEventResponse>;
                getBlockWithTxs(request: _88.GetBlockWithTxsRequest): Promise<_88.GetBlockWithTxsResponse>;
            };
            Tx: {
                encode(message: _89.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Tx;
                fromJSON(object: any): _89.Tx;
                toJSON(message: _89.Tx): unknown;
                fromPartial(object: Partial<_89.Tx>): _89.Tx;
            };
            TxRaw: {
                encode(message: _89.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.TxRaw;
                fromJSON(object: any): _89.TxRaw;
                toJSON(message: _89.TxRaw): unknown;
                fromPartial(object: Partial<_89.TxRaw>): _89.TxRaw;
            };
            SignDoc: {
                encode(message: _89.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.SignDoc;
                fromJSON(object: any): _89.SignDoc;
                toJSON(message: _89.SignDoc): unknown;
                fromPartial(object: Partial<_89.SignDoc>): _89.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _89.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.SignDocDirectAux;
                fromJSON(object: any): _89.SignDocDirectAux;
                toJSON(message: _89.SignDocDirectAux): unknown;
                fromPartial(object: Partial<_89.SignDocDirectAux>): _89.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _89.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.TxBody;
                fromJSON(object: any): _89.TxBody;
                toJSON(message: _89.TxBody): unknown;
                fromPartial(object: Partial<_89.TxBody>): _89.TxBody;
            };
            AuthInfo: {
                encode(message: _89.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.AuthInfo;
                fromJSON(object: any): _89.AuthInfo;
                toJSON(message: _89.AuthInfo): unknown;
                fromPartial(object: Partial<_89.AuthInfo>): _89.AuthInfo;
            };
            SignerInfo: {
                encode(message: _89.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.SignerInfo;
                fromJSON(object: any): _89.SignerInfo;
                toJSON(message: _89.SignerInfo): unknown;
                fromPartial(object: Partial<_89.SignerInfo>): _89.SignerInfo;
            };
            ModeInfo: {
                encode(message: _89.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ModeInfo;
                fromJSON(object: any): _89.ModeInfo;
                toJSON(message: _89.ModeInfo): unknown;
                fromPartial(object: Partial<_89.ModeInfo>): _89.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _89.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ModeInfo_Single;
                fromJSON(object: any): _89.ModeInfo_Single;
                toJSON(message: _89.ModeInfo_Single): unknown;
                fromPartial(object: Partial<_89.ModeInfo_Single>): _89.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _89.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ModeInfo_Multi;
                fromJSON(object: any): _89.ModeInfo_Multi;
                toJSON(message: _89.ModeInfo_Multi): unknown;
                fromPartial(object: Partial<_89.ModeInfo_Multi>): _89.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _89.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Fee;
                fromJSON(object: any): _89.Fee;
                toJSON(message: _89.Fee): unknown;
                fromPartial(object: Partial<_89.Fee>): _89.Fee;
            };
            Tip: {
                encode(message: _89.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Tip;
                fromJSON(object: any): _89.Tip;
                toJSON(message: _89.Tip): unknown;
                fromPartial(object: Partial<_89.Tip>): _89.Tip;
            };
            AuxSignerData: {
                encode(message: _89.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.AuxSignerData;
                fromJSON(object: any): _89.AuxSignerData;
                toJSON(message: _89.AuxSignerData): unknown;
                fromPartial(object: Partial<_89.AuxSignerData>): _89.AuxSignerData;
            };
            orderByFromJSON(object: any): _88.OrderBy;
            orderByToJSON(object: _88.OrderBy): string;
            broadcastModeFromJSON(object: any): _88.BroadcastMode;
            broadcastModeToJSON(object: _88.BroadcastMode): string;
            OrderBy: typeof _88.OrderBy;
            OrderBySDKType: typeof _88.OrderBy;
            BroadcastMode: typeof _88.BroadcastMode;
            BroadcastModeSDKType: typeof _88.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _88.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetTxsEventRequest;
                fromJSON(object: any): _88.GetTxsEventRequest;
                toJSON(message: _88.GetTxsEventRequest): unknown;
                fromPartial(object: Partial<_88.GetTxsEventRequest>): _88.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _88.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetTxsEventResponse;
                fromJSON(object: any): _88.GetTxsEventResponse;
                toJSON(message: _88.GetTxsEventResponse): unknown;
                fromPartial(object: Partial<_88.GetTxsEventResponse>): _88.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _88.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.BroadcastTxRequest;
                fromJSON(object: any): _88.BroadcastTxRequest;
                toJSON(message: _88.BroadcastTxRequest): unknown;
                fromPartial(object: Partial<_88.BroadcastTxRequest>): _88.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _88.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.BroadcastTxResponse;
                fromJSON(object: any): _88.BroadcastTxResponse;
                toJSON(message: _88.BroadcastTxResponse): unknown;
                fromPartial(object: Partial<_88.BroadcastTxResponse>): _88.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _88.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.SimulateRequest;
                fromJSON(object: any): _88.SimulateRequest;
                toJSON(message: _88.SimulateRequest): unknown;
                fromPartial(object: Partial<_88.SimulateRequest>): _88.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _88.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.SimulateResponse;
                fromJSON(object: any): _88.SimulateResponse;
                toJSON(message: _88.SimulateResponse): unknown;
                fromPartial(object: Partial<_88.SimulateResponse>): _88.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _88.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetTxRequest;
                fromJSON(object: any): _88.GetTxRequest;
                toJSON(message: _88.GetTxRequest): unknown;
                fromPartial(object: Partial<_88.GetTxRequest>): _88.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _88.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetTxResponse;
                fromJSON(object: any): _88.GetTxResponse;
                toJSON(message: _88.GetTxResponse): unknown;
                fromPartial(object: Partial<_88.GetTxResponse>): _88.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _88.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetBlockWithTxsRequest;
                fromJSON(object: any): _88.GetBlockWithTxsRequest;
                toJSON(message: _88.GetBlockWithTxsRequest): unknown;
                fromPartial(object: Partial<_88.GetBlockWithTxsRequest>): _88.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _88.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetBlockWithTxsResponse;
                fromJSON(object: any): _88.GetBlockWithTxsResponse;
                toJSON(message: _88.GetBlockWithTxsResponse): unknown;
                fromPartial(object: Partial<_88.GetBlockWithTxsResponse>): _88.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _260.MsgClientImpl;
            QueryClientImpl: typeof _247.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _90.QueryCurrentPlanRequest): Promise<_90.QueryCurrentPlanResponse>;
                appliedPlan(request: _90.QueryAppliedPlanRequest): Promise<_90.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _90.QueryUpgradedConsensusStateRequest): Promise<_90.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _90.QueryModuleVersionsRequest): Promise<_90.QueryModuleVersionsResponse>;
                authority(request?: _90.QueryAuthorityRequest): Promise<_90.QueryAuthorityResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _91.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _91.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _91.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _91.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _91.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _91.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _91.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _91.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _91.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _91.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _91.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _91.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _91.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _91.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _91.MsgSoftwareUpgrade) => {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    };
                    fromAmino: ({ authority, plan }: {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    }) => _91.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _91.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _91.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _92.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Plan;
                fromJSON(object: any): _92.Plan;
                toJSON(message: _92.Plan): unknown;
                fromPartial(object: Partial<_92.Plan>): _92.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _92.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.SoftwareUpgradeProposal;
                fromJSON(object: any): _92.SoftwareUpgradeProposal;
                toJSON(message: _92.SoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_92.SoftwareUpgradeProposal>): _92.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _92.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _92.CancelSoftwareUpgradeProposal;
                toJSON(message: _92.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_92.CancelSoftwareUpgradeProposal>): _92.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _92.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ModuleVersion;
                fromJSON(object: any): _92.ModuleVersion;
                toJSON(message: _92.ModuleVersion): unknown;
                fromPartial(object: Partial<_92.ModuleVersion>): _92.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _91.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgSoftwareUpgrade;
                fromJSON(object: any): _91.MsgSoftwareUpgrade;
                toJSON(message: _91.MsgSoftwareUpgrade): unknown;
                fromPartial(object: Partial<_91.MsgSoftwareUpgrade>): _91.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _91.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _91.MsgSoftwareUpgradeResponse;
                toJSON(_: _91.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: Partial<_91.MsgSoftwareUpgradeResponse>): _91.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _91.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgCancelUpgrade;
                fromJSON(object: any): _91.MsgCancelUpgrade;
                toJSON(message: _91.MsgCancelUpgrade): unknown;
                fromPartial(object: Partial<_91.MsgCancelUpgrade>): _91.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _91.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgCancelUpgradeResponse;
                fromJSON(_: any): _91.MsgCancelUpgradeResponse;
                toJSON(_: _91.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: Partial<_91.MsgCancelUpgradeResponse>): _91.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _90.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryCurrentPlanRequest;
                fromJSON(_: any): _90.QueryCurrentPlanRequest;
                toJSON(_: _90.QueryCurrentPlanRequest): unknown;
                fromPartial(_: Partial<_90.QueryCurrentPlanRequest>): _90.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _90.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryCurrentPlanResponse;
                fromJSON(object: any): _90.QueryCurrentPlanResponse;
                toJSON(message: _90.QueryCurrentPlanResponse): unknown;
                fromPartial(object: Partial<_90.QueryCurrentPlanResponse>): _90.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _90.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryAppliedPlanRequest;
                fromJSON(object: any): _90.QueryAppliedPlanRequest;
                toJSON(message: _90.QueryAppliedPlanRequest): unknown;
                fromPartial(object: Partial<_90.QueryAppliedPlanRequest>): _90.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _90.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryAppliedPlanResponse;
                fromJSON(object: any): _90.QueryAppliedPlanResponse;
                toJSON(message: _90.QueryAppliedPlanResponse): unknown;
                fromPartial(object: Partial<_90.QueryAppliedPlanResponse>): _90.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _90.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _90.QueryUpgradedConsensusStateRequest;
                toJSON(message: _90.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: Partial<_90.QueryUpgradedConsensusStateRequest>): _90.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _90.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _90.QueryUpgradedConsensusStateResponse;
                toJSON(message: _90.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: Partial<_90.QueryUpgradedConsensusStateResponse>): _90.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _90.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryModuleVersionsRequest;
                fromJSON(object: any): _90.QueryModuleVersionsRequest;
                toJSON(message: _90.QueryModuleVersionsRequest): unknown;
                fromPartial(object: Partial<_90.QueryModuleVersionsRequest>): _90.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _90.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryModuleVersionsResponse;
                fromJSON(object: any): _90.QueryModuleVersionsResponse;
                toJSON(message: _90.QueryModuleVersionsResponse): unknown;
                fromPartial(object: Partial<_90.QueryModuleVersionsResponse>): _90.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _90.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryAuthorityRequest;
                fromJSON(_: any): _90.QueryAuthorityRequest;
                toJSON(_: _90.QueryAuthorityRequest): unknown;
                fromPartial(_: Partial<_90.QueryAuthorityRequest>): _90.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _90.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryAuthorityResponse;
                fromJSON(object: any): _90.QueryAuthorityResponse;
                toJSON(message: _90.QueryAuthorityResponse): unknown;
                fromPartial(object: Partial<_90.QueryAuthorityResponse>): _90.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _261.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _93.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _93.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _93.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _93.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _93.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _93.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _93.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _93.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _93.MsgCreatePeriodicVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _93.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPermanentLockedAccount(value: _93.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPeriodicVestingAccount(value: _93.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _93.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _93.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _93.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _93.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _93.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _93.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _93.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _93.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _93.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _93.MsgCreateVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    };
                    fromAmino: ({ from_address, to_address, amount, end_time, delayed }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    }) => _93.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _93.MsgCreatePermanentLockedAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _93.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _93.MsgCreatePeriodicVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, start_time, vesting_periods }: {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _93.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _94.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.BaseVestingAccount;
                fromJSON(object: any): _94.BaseVestingAccount;
                toJSON(message: _94.BaseVestingAccount): unknown;
                fromPartial(object: Partial<_94.BaseVestingAccount>): _94.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _94.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ContinuousVestingAccount;
                fromJSON(object: any): _94.ContinuousVestingAccount;
                toJSON(message: _94.ContinuousVestingAccount): unknown;
                fromPartial(object: Partial<_94.ContinuousVestingAccount>): _94.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _94.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.DelayedVestingAccount;
                fromJSON(object: any): _94.DelayedVestingAccount;
                toJSON(message: _94.DelayedVestingAccount): unknown;
                fromPartial(object: Partial<_94.DelayedVestingAccount>): _94.DelayedVestingAccount;
            };
            Period: {
                encode(message: _94.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Period;
                fromJSON(object: any): _94.Period;
                toJSON(message: _94.Period): unknown;
                fromPartial(object: Partial<_94.Period>): _94.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _94.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.PeriodicVestingAccount;
                fromJSON(object: any): _94.PeriodicVestingAccount;
                toJSON(message: _94.PeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_94.PeriodicVestingAccount>): _94.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _94.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.PermanentLockedAccount;
                fromJSON(object: any): _94.PermanentLockedAccount;
                toJSON(message: _94.PermanentLockedAccount): unknown;
                fromPartial(object: Partial<_94.PermanentLockedAccount>): _94.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _93.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgCreateVestingAccount;
                fromJSON(object: any): _93.MsgCreateVestingAccount;
                toJSON(message: _93.MsgCreateVestingAccount): unknown;
                fromPartial(object: Partial<_93.MsgCreateVestingAccount>): _93.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _93.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _93.MsgCreateVestingAccountResponse;
                toJSON(_: _93.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: Partial<_93.MsgCreateVestingAccountResponse>): _93.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _93.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _93.MsgCreatePermanentLockedAccount;
                toJSON(message: _93.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: Partial<_93.MsgCreatePermanentLockedAccount>): _93.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _93.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _93.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _93.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: Partial<_93.MsgCreatePermanentLockedAccountResponse>): _93.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _93.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _93.MsgCreatePeriodicVestingAccount;
                toJSON(message: _93.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_93.MsgCreatePeriodicVestingAccount>): _93.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _93.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _93.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _93.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: Partial<_93.MsgCreatePeriodicVestingAccountResponse>): _93.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _248.MsgClientImpl;
                };
                bank: {
                    v1beta1: _249.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _250.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _251.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _252.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _253.MsgClientImpl;
                };
                gov: {
                    v1: _254.MsgClientImpl;
                    v1beta1: _255.MsgClientImpl;
                };
                group: {
                    v1: _256.MsgClientImpl;
                };
                nft: {
                    v1beta1: _257.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _258.MsgClientImpl;
                };
                staking: {
                    v1beta1: _259.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _260.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _261.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _5.QueryConfigRequest): Promise<_5.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _8.QueryAccountsRequest): Promise<_8.QueryAccountsResponse>;
                        account(request: _8.QueryAccountRequest): Promise<_8.QueryAccountResponse>;
                        params(request?: _8.QueryParamsRequest): Promise<_8.QueryParamsResponse>;
                        moduleAccounts(request?: _8.QueryModuleAccountsRequest): Promise<_8.QueryModuleAccountsResponse>;
                        bech32Prefix(request?: _8.Bech32PrefixRequest): Promise<_8.Bech32PrefixResponse>;
                        addressBytesToString(request: _8.AddressBytesToStringRequest): Promise<_8.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _8.AddressStringToBytesRequest): Promise<_8.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _12.QueryGrantsRequest): Promise<_12.QueryGrantsResponse>;
                        granterGrants(request: _12.QueryGranterGrantsRequest): Promise<_12.QueryGranterGrantsResponse>;
                        granteeGrants(request: _12.QueryGranteeGrantsRequest): Promise<_12.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _17.QueryBalanceRequest): Promise<_17.QueryBalanceResponse>;
                        allBalances(request: _17.QueryAllBalancesRequest): Promise<_17.QueryAllBalancesResponse>;
                        spendableBalances(request: _17.QuerySpendableBalancesRequest): Promise<_17.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _17.QueryTotalSupplyRequest): Promise<_17.QueryTotalSupplyResponse>;
                        supplyOf(request: _17.QuerySupplyOfRequest): Promise<_17.QuerySupplyOfResponse>;
                        params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                        denomMetadata(request: _17.QueryDenomMetadataRequest): Promise<_17.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _17.QueryDenomsMetadataRequest): Promise<_17.QueryDenomsMetadataResponse>;
                        denomOwners(request: _17.QueryDenomOwnersRequest): Promise<_17.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _27.GetNodeInfoRequest): Promise<_27.GetNodeInfoResponse>;
                            getSyncing(request?: _27.GetSyncingRequest): Promise<_27.GetSyncingResponse>;
                            getLatestBlock(request?: _27.GetLatestBlockRequest): Promise<_27.GetLatestBlockResponse>;
                            getBlockByHeight(request: _27.GetBlockByHeightRequest): Promise<_27.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _27.GetLatestValidatorSetRequest): Promise<_27.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _27.GetValidatorSetByHeightRequest): Promise<_27.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _41.QueryValidatorOutstandingRewardsRequest): Promise<_41.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _41.QueryValidatorCommissionRequest): Promise<_41.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _41.QueryValidatorSlashesRequest): Promise<_41.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _41.QueryDelegationRewardsRequest): Promise<_41.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _41.QueryDelegationTotalRewardsRequest): Promise<_41.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _41.QueryDelegatorValidatorsRequest): Promise<_41.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _41.QueryDelegatorWithdrawAddressRequest): Promise<_41.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _41.QueryCommunityPoolRequest): Promise<_41.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _45.QueryEvidenceRequest): Promise<_45.QueryEvidenceResponse>;
                        allEvidence(request?: _45.QueryAllEvidenceRequest): Promise<_45.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _49.QueryAllowanceRequest): Promise<_49.QueryAllowanceResponse>;
                        allowances(request: _49.QueryAllowancesRequest): Promise<_49.QueryAllowancesResponse>;
                        allowancesByGranter(request: _49.QueryAllowancesByGranterRequest): Promise<_49.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _54.QueryProposalRequest): Promise<_54.QueryProposalResponse>;
                        proposals(request: _54.QueryProposalsRequest): Promise<_54.QueryProposalsResponse>;
                        vote(request: _54.QueryVoteRequest): Promise<_54.QueryVoteResponse>;
                        votes(request: _54.QueryVotesRequest): Promise<_54.QueryVotesResponse>;
                        params(request: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                        deposit(request: _54.QueryDepositRequest): Promise<_54.QueryDepositResponse>;
                        deposits(request: _54.QueryDepositsRequest): Promise<_54.QueryDepositsResponse>;
                        tallyResult(request: _54.QueryTallyResultRequest): Promise<_54.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _58.QueryProposalRequest): Promise<_58.QueryProposalResponse>;
                        proposals(request: _58.QueryProposalsRequest): Promise<_58.QueryProposalsResponse>;
                        vote(request: _58.QueryVoteRequest): Promise<_58.QueryVoteResponse>;
                        votes(request: _58.QueryVotesRequest): Promise<_58.QueryVotesResponse>;
                        params(request: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                        deposit(request: _58.QueryDepositRequest): Promise<_58.QueryDepositResponse>;
                        deposits(request: _58.QueryDepositsRequest): Promise<_58.QueryDepositsResponse>;
                        tallyResult(request: _58.QueryTallyResultRequest): Promise<_58.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _62.QueryGroupInfoRequest): Promise<_62.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _62.QueryGroupPolicyInfoRequest): Promise<_62.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _62.QueryGroupMembersRequest): Promise<_62.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _62.QueryGroupsByAdminRequest): Promise<_62.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _62.QueryGroupPoliciesByGroupRequest): Promise<_62.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _62.QueryGroupPoliciesByAdminRequest): Promise<_62.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _62.QueryProposalRequest): Promise<_62.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _62.QueryProposalsByGroupPolicyRequest): Promise<_62.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _62.QueryVoteByProposalVoterRequest): Promise<_62.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _62.QueryVotesByProposalRequest): Promise<_62.QueryVotesByProposalResponse>;
                        votesByVoter(request: _62.QueryVotesByVoterRequest): Promise<_62.QueryVotesByVoterResponse>;
                        groupsByMember(request: _62.QueryGroupsByMemberRequest): Promise<_62.QueryGroupsByMemberResponse>;
                        tallyResult(request: _62.QueryTallyResultRequest): Promise<_62.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
                        inflation(request?: _67.QueryInflationRequest): Promise<_67.QueryInflationResponse>;
                        annualProvisions(request?: _67.QueryAnnualProvisionsRequest): Promise<_67.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _72.QueryBalanceRequest): Promise<_72.QueryBalanceResponse>;
                        owner(request: _72.QueryOwnerRequest): Promise<_72.QueryOwnerResponse>;
                        supply(request: _72.QuerySupplyRequest): Promise<_72.QuerySupplyResponse>;
                        nFTs(request: _72.QueryNFTsRequest): Promise<_72.QueryNFTsResponse>;
                        nFT(request: _72.QueryNFTRequest): Promise<_72.QueryNFTResponse>;
                        class(request: _72.QueryClassRequest): Promise<_72.QueryClassResponse>;
                        classes(request?: _72.QueryClassesRequest): Promise<_72.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
                        subspaces(request?: _77.QuerySubspacesRequest): Promise<_77.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                        signingInfo(request: _79.QuerySigningInfoRequest): Promise<_79.QuerySigningInfoResponse>;
                        signingInfos(request?: _79.QuerySigningInfosRequest): Promise<_79.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _84.QueryValidatorsRequest): Promise<_84.QueryValidatorsResponse>;
                        validator(request: _84.QueryValidatorRequest): Promise<_84.QueryValidatorResponse>;
                        validatorDelegations(request: _84.QueryValidatorDelegationsRequest): Promise<_84.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _84.QueryValidatorUnbondingDelegationsRequest): Promise<_84.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _84.QueryDelegationRequest): Promise<_84.QueryDelegationResponse>;
                        unbondingDelegation(request: _84.QueryUnbondingDelegationRequest): Promise<_84.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _84.QueryDelegatorDelegationsRequest): Promise<_84.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _84.QueryDelegatorUnbondingDelegationsRequest): Promise<_84.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _84.QueryRedelegationsRequest): Promise<_84.QueryRedelegationsResponse>;
                        delegatorValidators(request: _84.QueryDelegatorValidatorsRequest): Promise<_84.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _84.QueryDelegatorValidatorRequest): Promise<_84.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _84.QueryHistoricalInfoRequest): Promise<_84.QueryHistoricalInfoResponse>;
                        pool(request?: _84.QueryPoolRequest): Promise<_84.QueryPoolResponse>;
                        params(request?: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _88.SimulateRequest): Promise<_88.SimulateResponse>;
                        getTx(request: _88.GetTxRequest): Promise<_88.GetTxResponse>;
                        broadcastTx(request: _88.BroadcastTxRequest): Promise<_88.BroadcastTxResponse>;
                        getTxsEvent(request: _88.GetTxsEventRequest): Promise<_88.GetTxsEventResponse>;
                        getBlockWithTxs(request: _88.GetBlockWithTxsRequest): Promise<_88.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _90.QueryCurrentPlanRequest): Promise<_90.QueryCurrentPlanResponse>;
                        appliedPlan(request: _90.QueryAppliedPlanRequest): Promise<_90.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _90.QueryUpgradedConsensusStateRequest): Promise<_90.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _90.QueryModuleVersionsRequest): Promise<_90.QueryModuleVersionsResponse>;
                        authority(request?: _90.QueryAuthorityRequest): Promise<_90.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}

import * as _103 from "./applications/transfer/v1/genesis";
import * as _104 from "./applications/transfer/v1/query";
import * as _105 from "./applications/transfer/v1/transfer";
import * as _106 from "./applications/transfer/v1/tx";
import * as _107 from "./applications/transfer/v2/packet";
import * as _108 from "./core/channel/v1/channel";
import * as _109 from "./core/channel/v1/genesis";
import * as _110 from "./core/channel/v1/query";
import * as _111 from "./core/channel/v1/tx";
import * as _112 from "./core/client/v1/client";
import * as _113 from "./core/client/v1/genesis";
import * as _114 from "./core/client/v1/query";
import * as _115 from "./core/client/v1/tx";
import * as _116 from "./core/commitment/v1/commitment";
import * as _117 from "./core/connection/v1/connection";
import * as _118 from "./core/connection/v1/genesis";
import * as _119 from "./core/connection/v1/query";
import * as _120 from "./core/connection/v1/tx";
import * as _121 from "./core/port/v1/query";
import * as _122 from "./core/types/v1/genesis";
import * as _123 from "./lightclients/localhost/v1/localhost";
import * as _124 from "./lightclients/solomachine/v1/solomachine";
import * as _125 from "./lightclients/solomachine/v2/solomachine";
import * as _126 from "./lightclients/tendermint/v1/tendermint";
import * as _270 from "./applications/transfer/v1/query.rpc.Query";
import * as _271 from "./core/channel/v1/query.rpc.Query";
import * as _272 from "./core/client/v1/query.rpc.Query";
import * as _273 from "./core/connection/v1/query.rpc.Query";
import * as _274 from "./core/port/v1/query.rpc.Query";
import * as _275 from "./applications/transfer/v1/tx.rpc.msg";
import * as _276 from "./core/channel/v1/tx.rpc.msg";
import * as _277 from "./core/client/v1/tx.rpc.msg";
import * as _278 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _275.MsgClientImpl;
                QueryClientImpl: typeof _270.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _104.QueryDenomTraceRequest): Promise<_104.QueryDenomTraceResponse>;
                    denomTraces(request?: _104.QueryDenomTracesRequest): Promise<_104.QueryDenomTracesResponse>;
                    params(request?: _104.QueryParamsRequest): Promise<_104.QueryParamsResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _106.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _106.MsgTransfer): {
                            typeUrl: string;
                            value: _106.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _106.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _106.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _106.MsgTransfer): {
                            typeUrl: string;
                            value: _106.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _106.MsgTransfer) => _106.MsgTransferAmino;
                        fromAmino: (object: _106.MsgTransferAmino) => _106.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _106.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgTransfer;
                    fromJSON(object: any): _106.MsgTransfer;
                    toJSON(message: _106.MsgTransfer): unknown;
                    fromPartial(object: Partial<_106.MsgTransfer>): _106.MsgTransfer;
                    fromAmino(object: _106.MsgTransferAmino): _106.MsgTransfer;
                    toAmino(message: _106.MsgTransfer): _106.MsgTransferAmino;
                };
                MsgTransferResponse: {
                    encode(_: _106.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgTransferResponse;
                    fromJSON(_: any): _106.MsgTransferResponse;
                    toJSON(_: _106.MsgTransferResponse): unknown;
                    fromPartial(_: Partial<_106.MsgTransferResponse>): _106.MsgTransferResponse;
                    fromAmino(_: _106.MsgTransferResponseAmino): _106.MsgTransferResponse;
                    toAmino(_: _106.MsgTransferResponse): _106.MsgTransferResponseAmino;
                };
                DenomTrace: {
                    encode(message: _105.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.DenomTrace;
                    fromJSON(object: any): _105.DenomTrace;
                    toJSON(message: _105.DenomTrace): unknown;
                    fromPartial(object: Partial<_105.DenomTrace>): _105.DenomTrace;
                    fromAmino(object: _105.DenomTraceAmino): _105.DenomTrace;
                    toAmino(message: _105.DenomTrace): _105.DenomTraceAmino;
                };
                Params: {
                    encode(message: _105.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Params;
                    fromJSON(object: any): _105.Params;
                    toJSON(message: _105.Params): unknown;
                    fromPartial(object: Partial<_105.Params>): _105.Params;
                    fromAmino(object: _105.ParamsAmino): _105.Params;
                    toAmino(message: _105.Params): _105.ParamsAmino;
                };
                QueryDenomTraceRequest: {
                    encode(message: _104.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryDenomTraceRequest;
                    fromJSON(object: any): _104.QueryDenomTraceRequest;
                    toJSON(message: _104.QueryDenomTraceRequest): unknown;
                    fromPartial(object: Partial<_104.QueryDenomTraceRequest>): _104.QueryDenomTraceRequest;
                    fromAmino(object: _104.QueryDenomTraceRequestAmino): _104.QueryDenomTraceRequest;
                    toAmino(message: _104.QueryDenomTraceRequest): _104.QueryDenomTraceRequestAmino;
                };
                QueryDenomTraceResponse: {
                    encode(message: _104.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryDenomTraceResponse;
                    fromJSON(object: any): _104.QueryDenomTraceResponse;
                    toJSON(message: _104.QueryDenomTraceResponse): unknown;
                    fromPartial(object: Partial<_104.QueryDenomTraceResponse>): _104.QueryDenomTraceResponse;
                    fromAmino(object: _104.QueryDenomTraceResponseAmino): _104.QueryDenomTraceResponse;
                    toAmino(message: _104.QueryDenomTraceResponse): _104.QueryDenomTraceResponseAmino;
                };
                QueryDenomTracesRequest: {
                    encode(message: _104.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryDenomTracesRequest;
                    fromJSON(object: any): _104.QueryDenomTracesRequest;
                    toJSON(message: _104.QueryDenomTracesRequest): unknown;
                    fromPartial(object: Partial<_104.QueryDenomTracesRequest>): _104.QueryDenomTracesRequest;
                    fromAmino(object: _104.QueryDenomTracesRequestAmino): _104.QueryDenomTracesRequest;
                    toAmino(message: _104.QueryDenomTracesRequest): _104.QueryDenomTracesRequestAmino;
                };
                QueryDenomTracesResponse: {
                    encode(message: _104.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryDenomTracesResponse;
                    fromJSON(object: any): _104.QueryDenomTracesResponse;
                    toJSON(message: _104.QueryDenomTracesResponse): unknown;
                    fromPartial(object: Partial<_104.QueryDenomTracesResponse>): _104.QueryDenomTracesResponse;
                    fromAmino(object: _104.QueryDenomTracesResponseAmino): _104.QueryDenomTracesResponse;
                    toAmino(message: _104.QueryDenomTracesResponse): _104.QueryDenomTracesResponseAmino;
                };
                QueryParamsRequest: {
                    encode(_: _104.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryParamsRequest;
                    fromJSON(_: any): _104.QueryParamsRequest;
                    toJSON(_: _104.QueryParamsRequest): unknown;
                    fromPartial(_: Partial<_104.QueryParamsRequest>): _104.QueryParamsRequest;
                    fromAmino(_: _104.QueryParamsRequestAmino): _104.QueryParamsRequest;
                    toAmino(_: _104.QueryParamsRequest): _104.QueryParamsRequestAmino;
                };
                QueryParamsResponse: {
                    encode(message: _104.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryParamsResponse;
                    fromJSON(object: any): _104.QueryParamsResponse;
                    toJSON(message: _104.QueryParamsResponse): unknown;
                    fromPartial(object: Partial<_104.QueryParamsResponse>): _104.QueryParamsResponse;
                    fromAmino(object: _104.QueryParamsResponseAmino): _104.QueryParamsResponse;
                    toAmino(message: _104.QueryParamsResponse): _104.QueryParamsResponseAmino;
                };
                GenesisState: {
                    encode(message: _103.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.GenesisState;
                    fromJSON(object: any): _103.GenesisState;
                    toJSON(message: _103.GenesisState): unknown;
                    fromPartial(object: Partial<_103.GenesisState>): _103.GenesisState;
                    fromAmino(object: _103.GenesisStateAmino): _103.GenesisState;
                    toAmino(message: _103.GenesisState): _103.GenesisStateAmino;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _107.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.FungibleTokenPacketData;
                    fromJSON(object: any): _107.FungibleTokenPacketData;
                    toJSON(message: _107.FungibleTokenPacketData): unknown;
                    fromPartial(object: Partial<_107.FungibleTokenPacketData>): _107.FungibleTokenPacketData;
                    fromAmino(object: _107.FungibleTokenPacketDataAmino): _107.FungibleTokenPacketData;
                    toAmino(message: _107.FungibleTokenPacketData): _107.FungibleTokenPacketDataAmino;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _276.MsgClientImpl;
                QueryClientImpl: typeof _271.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _110.QueryChannelRequest): Promise<_110.QueryChannelResponse>;
                    channels(request?: _110.QueryChannelsRequest): Promise<_110.QueryChannelsResponse>;
                    connectionChannels(request: _110.QueryConnectionChannelsRequest): Promise<_110.QueryConnectionChannelsResponse>;
                    channelClientState(request: _110.QueryChannelClientStateRequest): Promise<_110.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _110.QueryChannelConsensusStateRequest): Promise<_110.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _110.QueryPacketCommitmentRequest): Promise<_110.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _110.QueryPacketCommitmentsRequest): Promise<_110.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _110.QueryPacketReceiptRequest): Promise<_110.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _110.QueryPacketAcknowledgementRequest): Promise<_110.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _110.QueryPacketAcknowledgementsRequest): Promise<_110.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _110.QueryUnreceivedPacketsRequest): Promise<_110.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _110.QueryUnreceivedAcksRequest): Promise<_110.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _110.QueryNextSequenceReceiveRequest): Promise<_110.QueryNextSequenceReceiveResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _111.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _111.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _111.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _111.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _111.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _111.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _111.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _111.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _111.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _111.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _111.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _111.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _111.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _111.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _111.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _111.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _111.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _111.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _111.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _111.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _111.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _111.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _111.MsgRecvPacket): {
                            typeUrl: string;
                            value: _111.MsgRecvPacket;
                        };
                        timeout(value: _111.MsgTimeout): {
                            typeUrl: string;
                            value: _111.MsgTimeout;
                        };
                        timeoutOnClose(value: _111.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _111.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _111.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _111.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _111.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _111.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _111.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _111.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _111.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _111.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _111.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _111.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _111.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _111.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _111.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _111.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _111.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _111.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _111.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _111.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _111.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _111.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _111.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _111.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _111.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _111.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _111.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _111.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _111.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _111.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _111.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _111.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _111.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _111.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _111.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _111.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _111.MsgRecvPacket): {
                            typeUrl: string;
                            value: _111.MsgRecvPacket;
                        };
                        timeout(value: _111.MsgTimeout): {
                            typeUrl: string;
                            value: _111.MsgTimeout;
                        };
                        timeoutOnClose(value: _111.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _111.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _111.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _111.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _111.MsgChannelOpenInit) => _111.MsgChannelOpenInitAmino;
                        fromAmino: (object: _111.MsgChannelOpenInitAmino) => _111.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _111.MsgChannelOpenTry) => _111.MsgChannelOpenTryAmino;
                        fromAmino: (object: _111.MsgChannelOpenTryAmino) => _111.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _111.MsgChannelOpenAck) => _111.MsgChannelOpenAckAmino;
                        fromAmino: (object: _111.MsgChannelOpenAckAmino) => _111.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _111.MsgChannelOpenConfirm) => _111.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _111.MsgChannelOpenConfirmAmino) => _111.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _111.MsgChannelCloseInit) => _111.MsgChannelCloseInitAmino;
                        fromAmino: (object: _111.MsgChannelCloseInitAmino) => _111.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _111.MsgChannelCloseConfirm) => _111.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _111.MsgChannelCloseConfirmAmino) => _111.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _111.MsgRecvPacket) => _111.MsgRecvPacketAmino;
                        fromAmino: (object: _111.MsgRecvPacketAmino) => _111.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _111.MsgTimeout) => _111.MsgTimeoutAmino;
                        fromAmino: (object: _111.MsgTimeoutAmino) => _111.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _111.MsgTimeoutOnClose) => _111.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _111.MsgTimeoutOnCloseAmino) => _111.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _111.MsgAcknowledgement) => _111.MsgAcknowledgementAmino;
                        fromAmino: (object: _111.MsgAcknowledgementAmino) => _111.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _111.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgChannelOpenInit;
                    fromJSON(object: any): _111.MsgChannelOpenInit;
                    toJSON(message: _111.MsgChannelOpenInit): unknown;
                    fromPartial(object: Partial<_111.MsgChannelOpenInit>): _111.MsgChannelOpenInit;
                    fromAmino(object: _111.MsgChannelOpenInitAmino): _111.MsgChannelOpenInit;
                    toAmino(message: _111.MsgChannelOpenInit): _111.MsgChannelOpenInitAmino;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _111.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _111.MsgChannelOpenInitResponse;
                    toJSON(_: _111.MsgChannelOpenInitResponse): unknown;
                    fromPartial(_: Partial<_111.MsgChannelOpenInitResponse>): _111.MsgChannelOpenInitResponse;
                    fromAmino(_: _111.MsgChannelOpenInitResponseAmino): _111.MsgChannelOpenInitResponse;
                    toAmino(_: _111.MsgChannelOpenInitResponse): _111.MsgChannelOpenInitResponseAmino;
                };
                MsgChannelOpenTry: {
                    encode(message: _111.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgChannelOpenTry;
                    fromJSON(object: any): _111.MsgChannelOpenTry;
                    toJSON(message: _111.MsgChannelOpenTry): unknown;
                    fromPartial(object: Partial<_111.MsgChannelOpenTry>): _111.MsgChannelOpenTry;
                    fromAmino(object: _111.MsgChannelOpenTryAmino): _111.MsgChannelOpenTry;
                    toAmino(message: _111.MsgChannelOpenTry): _111.MsgChannelOpenTryAmino;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _111.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _111.MsgChannelOpenTryResponse;
                    toJSON(_: _111.MsgChannelOpenTryResponse): unknown;
                    fromPartial(_: Partial<_111.MsgChannelOpenTryResponse>): _111.MsgChannelOpenTryResponse;
                    fromAmino(_: _111.MsgChannelOpenTryResponseAmino): _111.MsgChannelOpenTryResponse;
                    toAmino(_: _111.MsgChannelOpenTryResponse): _111.MsgChannelOpenTryResponseAmino;
                };
                MsgChannelOpenAck: {
                    encode(message: _111.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgChannelOpenAck;
                    fromJSON(object: any): _111.MsgChannelOpenAck;
                    toJSON(message: _111.MsgChannelOpenAck): unknown;
                    fromPartial(object: Partial<_111.MsgChannelOpenAck>): _111.MsgChannelOpenAck;
                    fromAmino(object: _111.MsgChannelOpenAckAmino): _111.MsgChannelOpenAck;
                    toAmino(message: _111.MsgChannelOpenAck): _111.MsgChannelOpenAckAmino;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _111.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _111.MsgChannelOpenAckResponse;
                    toJSON(_: _111.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: Partial<_111.MsgChannelOpenAckResponse>): _111.MsgChannelOpenAckResponse;
                    fromAmino(_: _111.MsgChannelOpenAckResponseAmino): _111.MsgChannelOpenAckResponse;
                    toAmino(_: _111.MsgChannelOpenAckResponse): _111.MsgChannelOpenAckResponseAmino;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _111.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgChannelOpenConfirm;
                    fromJSON(object: any): _111.MsgChannelOpenConfirm;
                    toJSON(message: _111.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: Partial<_111.MsgChannelOpenConfirm>): _111.MsgChannelOpenConfirm;
                    fromAmino(object: _111.MsgChannelOpenConfirmAmino): _111.MsgChannelOpenConfirm;
                    toAmino(message: _111.MsgChannelOpenConfirm): _111.MsgChannelOpenConfirmAmino;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _111.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _111.MsgChannelOpenConfirmResponse;
                    toJSON(_: _111.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_111.MsgChannelOpenConfirmResponse>): _111.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _111.MsgChannelOpenConfirmResponseAmino): _111.MsgChannelOpenConfirmResponse;
                    toAmino(_: _111.MsgChannelOpenConfirmResponse): _111.MsgChannelOpenConfirmResponseAmino;
                };
                MsgChannelCloseInit: {
                    encode(message: _111.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgChannelCloseInit;
                    fromJSON(object: any): _111.MsgChannelCloseInit;
                    toJSON(message: _111.MsgChannelCloseInit): unknown;
                    fromPartial(object: Partial<_111.MsgChannelCloseInit>): _111.MsgChannelCloseInit;
                    fromAmino(object: _111.MsgChannelCloseInitAmino): _111.MsgChannelCloseInit;
                    toAmino(message: _111.MsgChannelCloseInit): _111.MsgChannelCloseInitAmino;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _111.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _111.MsgChannelCloseInitResponse;
                    toJSON(_: _111.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: Partial<_111.MsgChannelCloseInitResponse>): _111.MsgChannelCloseInitResponse;
                    fromAmino(_: _111.MsgChannelCloseInitResponseAmino): _111.MsgChannelCloseInitResponse;
                    toAmino(_: _111.MsgChannelCloseInitResponse): _111.MsgChannelCloseInitResponseAmino;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _111.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgChannelCloseConfirm;
                    fromJSON(object: any): _111.MsgChannelCloseConfirm;
                    toJSON(message: _111.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: Partial<_111.MsgChannelCloseConfirm>): _111.MsgChannelCloseConfirm;
                    fromAmino(object: _111.MsgChannelCloseConfirmAmino): _111.MsgChannelCloseConfirm;
                    toAmino(message: _111.MsgChannelCloseConfirm): _111.MsgChannelCloseConfirmAmino;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _111.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _111.MsgChannelCloseConfirmResponse;
                    toJSON(_: _111.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: Partial<_111.MsgChannelCloseConfirmResponse>): _111.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _111.MsgChannelCloseConfirmResponseAmino): _111.MsgChannelCloseConfirmResponse;
                    toAmino(_: _111.MsgChannelCloseConfirmResponse): _111.MsgChannelCloseConfirmResponseAmino;
                };
                MsgRecvPacket: {
                    encode(message: _111.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgRecvPacket;
                    fromJSON(object: any): _111.MsgRecvPacket;
                    toJSON(message: _111.MsgRecvPacket): unknown;
                    fromPartial(object: Partial<_111.MsgRecvPacket>): _111.MsgRecvPacket;
                    fromAmino(object: _111.MsgRecvPacketAmino): _111.MsgRecvPacket;
                    toAmino(message: _111.MsgRecvPacket): _111.MsgRecvPacketAmino;
                };
                MsgRecvPacketResponse: {
                    encode(_: _111.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgRecvPacketResponse;
                    fromJSON(_: any): _111.MsgRecvPacketResponse;
                    toJSON(_: _111.MsgRecvPacketResponse): unknown;
                    fromPartial(_: Partial<_111.MsgRecvPacketResponse>): _111.MsgRecvPacketResponse;
                    fromAmino(_: _111.MsgRecvPacketResponseAmino): _111.MsgRecvPacketResponse;
                    toAmino(_: _111.MsgRecvPacketResponse): _111.MsgRecvPacketResponseAmino;
                };
                MsgTimeout: {
                    encode(message: _111.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgTimeout;
                    fromJSON(object: any): _111.MsgTimeout;
                    toJSON(message: _111.MsgTimeout): unknown;
                    fromPartial(object: Partial<_111.MsgTimeout>): _111.MsgTimeout;
                    fromAmino(object: _111.MsgTimeoutAmino): _111.MsgTimeout;
                    toAmino(message: _111.MsgTimeout): _111.MsgTimeoutAmino;
                };
                MsgTimeoutResponse: {
                    encode(_: _111.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgTimeoutResponse;
                    fromJSON(_: any): _111.MsgTimeoutResponse;
                    toJSON(_: _111.MsgTimeoutResponse): unknown;
                    fromPartial(_: Partial<_111.MsgTimeoutResponse>): _111.MsgTimeoutResponse;
                    fromAmino(_: _111.MsgTimeoutResponseAmino): _111.MsgTimeoutResponse;
                    toAmino(_: _111.MsgTimeoutResponse): _111.MsgTimeoutResponseAmino;
                };
                MsgTimeoutOnClose: {
                    encode(message: _111.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgTimeoutOnClose;
                    fromJSON(object: any): _111.MsgTimeoutOnClose;
                    toJSON(message: _111.MsgTimeoutOnClose): unknown;
                    fromPartial(object: Partial<_111.MsgTimeoutOnClose>): _111.MsgTimeoutOnClose;
                    fromAmino(object: _111.MsgTimeoutOnCloseAmino): _111.MsgTimeoutOnClose;
                    toAmino(message: _111.MsgTimeoutOnClose): _111.MsgTimeoutOnCloseAmino;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _111.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _111.MsgTimeoutOnCloseResponse;
                    toJSON(_: _111.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(_: Partial<_111.MsgTimeoutOnCloseResponse>): _111.MsgTimeoutOnCloseResponse;
                    fromAmino(_: _111.MsgTimeoutOnCloseResponseAmino): _111.MsgTimeoutOnCloseResponse;
                    toAmino(_: _111.MsgTimeoutOnCloseResponse): _111.MsgTimeoutOnCloseResponseAmino;
                };
                MsgAcknowledgement: {
                    encode(message: _111.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgAcknowledgement;
                    fromJSON(object: any): _111.MsgAcknowledgement;
                    toJSON(message: _111.MsgAcknowledgement): unknown;
                    fromPartial(object: Partial<_111.MsgAcknowledgement>): _111.MsgAcknowledgement;
                    fromAmino(object: _111.MsgAcknowledgementAmino): _111.MsgAcknowledgement;
                    toAmino(message: _111.MsgAcknowledgement): _111.MsgAcknowledgementAmino;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _111.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgAcknowledgementResponse;
                    fromJSON(_: any): _111.MsgAcknowledgementResponse;
                    toJSON(_: _111.MsgAcknowledgementResponse): unknown;
                    fromPartial(_: Partial<_111.MsgAcknowledgementResponse>): _111.MsgAcknowledgementResponse;
                    fromAmino(_: _111.MsgAcknowledgementResponseAmino): _111.MsgAcknowledgementResponse;
                    toAmino(_: _111.MsgAcknowledgementResponse): _111.MsgAcknowledgementResponseAmino;
                };
                QueryChannelRequest: {
                    encode(message: _110.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryChannelRequest;
                    fromJSON(object: any): _110.QueryChannelRequest;
                    toJSON(message: _110.QueryChannelRequest): unknown;
                    fromPartial(object: Partial<_110.QueryChannelRequest>): _110.QueryChannelRequest;
                    fromAmino(object: _110.QueryChannelRequestAmino): _110.QueryChannelRequest;
                    toAmino(message: _110.QueryChannelRequest): _110.QueryChannelRequestAmino;
                };
                QueryChannelResponse: {
                    encode(message: _110.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryChannelResponse;
                    fromJSON(object: any): _110.QueryChannelResponse;
                    toJSON(message: _110.QueryChannelResponse): unknown;
                    fromPartial(object: Partial<_110.QueryChannelResponse>): _110.QueryChannelResponse;
                    fromAmino(object: _110.QueryChannelResponseAmino): _110.QueryChannelResponse;
                    toAmino(message: _110.QueryChannelResponse): _110.QueryChannelResponseAmino;
                };
                QueryChannelsRequest: {
                    encode(message: _110.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryChannelsRequest;
                    fromJSON(object: any): _110.QueryChannelsRequest;
                    toJSON(message: _110.QueryChannelsRequest): unknown;
                    fromPartial(object: Partial<_110.QueryChannelsRequest>): _110.QueryChannelsRequest;
                    fromAmino(object: _110.QueryChannelsRequestAmino): _110.QueryChannelsRequest;
                    toAmino(message: _110.QueryChannelsRequest): _110.QueryChannelsRequestAmino;
                };
                QueryChannelsResponse: {
                    encode(message: _110.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryChannelsResponse;
                    fromJSON(object: any): _110.QueryChannelsResponse;
                    toJSON(message: _110.QueryChannelsResponse): unknown;
                    fromPartial(object: Partial<_110.QueryChannelsResponse>): _110.QueryChannelsResponse;
                    fromAmino(object: _110.QueryChannelsResponseAmino): _110.QueryChannelsResponse;
                    toAmino(message: _110.QueryChannelsResponse): _110.QueryChannelsResponseAmino;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _110.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _110.QueryConnectionChannelsRequest;
                    toJSON(message: _110.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: Partial<_110.QueryConnectionChannelsRequest>): _110.QueryConnectionChannelsRequest;
                    fromAmino(object: _110.QueryConnectionChannelsRequestAmino): _110.QueryConnectionChannelsRequest;
                    toAmino(message: _110.QueryConnectionChannelsRequest): _110.QueryConnectionChannelsRequestAmino;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _110.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _110.QueryConnectionChannelsResponse;
                    toJSON(message: _110.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: Partial<_110.QueryConnectionChannelsResponse>): _110.QueryConnectionChannelsResponse;
                    fromAmino(object: _110.QueryConnectionChannelsResponseAmino): _110.QueryConnectionChannelsResponse;
                    toAmino(message: _110.QueryConnectionChannelsResponse): _110.QueryConnectionChannelsResponseAmino;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _110.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryChannelClientStateRequest;
                    fromJSON(object: any): _110.QueryChannelClientStateRequest;
                    toJSON(message: _110.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: Partial<_110.QueryChannelClientStateRequest>): _110.QueryChannelClientStateRequest;
                    fromAmino(object: _110.QueryChannelClientStateRequestAmino): _110.QueryChannelClientStateRequest;
                    toAmino(message: _110.QueryChannelClientStateRequest): _110.QueryChannelClientStateRequestAmino;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _110.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryChannelClientStateResponse;
                    fromJSON(object: any): _110.QueryChannelClientStateResponse;
                    toJSON(message: _110.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: Partial<_110.QueryChannelClientStateResponse>): _110.QueryChannelClientStateResponse;
                    fromAmino(object: _110.QueryChannelClientStateResponseAmino): _110.QueryChannelClientStateResponse;
                    toAmino(message: _110.QueryChannelClientStateResponse): _110.QueryChannelClientStateResponseAmino;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _110.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _110.QueryChannelConsensusStateRequest;
                    toJSON(message: _110.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_110.QueryChannelConsensusStateRequest>): _110.QueryChannelConsensusStateRequest;
                    fromAmino(object: _110.QueryChannelConsensusStateRequestAmino): _110.QueryChannelConsensusStateRequest;
                    toAmino(message: _110.QueryChannelConsensusStateRequest): _110.QueryChannelConsensusStateRequestAmino;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _110.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _110.QueryChannelConsensusStateResponse;
                    toJSON(message: _110.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_110.QueryChannelConsensusStateResponse>): _110.QueryChannelConsensusStateResponse;
                    fromAmino(object: _110.QueryChannelConsensusStateResponseAmino): _110.QueryChannelConsensusStateResponse;
                    toAmino(message: _110.QueryChannelConsensusStateResponse): _110.QueryChannelConsensusStateResponseAmino;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _110.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _110.QueryPacketCommitmentRequest;
                    toJSON(message: _110.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: Partial<_110.QueryPacketCommitmentRequest>): _110.QueryPacketCommitmentRequest;
                    fromAmino(object: _110.QueryPacketCommitmentRequestAmino): _110.QueryPacketCommitmentRequest;
                    toAmino(message: _110.QueryPacketCommitmentRequest): _110.QueryPacketCommitmentRequestAmino;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _110.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _110.QueryPacketCommitmentResponse;
                    toJSON(message: _110.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: Partial<_110.QueryPacketCommitmentResponse>): _110.QueryPacketCommitmentResponse;
                    fromAmino(object: _110.QueryPacketCommitmentResponseAmino): _110.QueryPacketCommitmentResponse;
                    toAmino(message: _110.QueryPacketCommitmentResponse): _110.QueryPacketCommitmentResponseAmino;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _110.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _110.QueryPacketCommitmentsRequest;
                    toJSON(message: _110.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: Partial<_110.QueryPacketCommitmentsRequest>): _110.QueryPacketCommitmentsRequest;
                    fromAmino(object: _110.QueryPacketCommitmentsRequestAmino): _110.QueryPacketCommitmentsRequest;
                    toAmino(message: _110.QueryPacketCommitmentsRequest): _110.QueryPacketCommitmentsRequestAmino;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _110.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _110.QueryPacketCommitmentsResponse;
                    toJSON(message: _110.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: Partial<_110.QueryPacketCommitmentsResponse>): _110.QueryPacketCommitmentsResponse;
                    fromAmino(object: _110.QueryPacketCommitmentsResponseAmino): _110.QueryPacketCommitmentsResponse;
                    toAmino(message: _110.QueryPacketCommitmentsResponse): _110.QueryPacketCommitmentsResponseAmino;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _110.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryPacketReceiptRequest;
                    fromJSON(object: any): _110.QueryPacketReceiptRequest;
                    toJSON(message: _110.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: Partial<_110.QueryPacketReceiptRequest>): _110.QueryPacketReceiptRequest;
                    fromAmino(object: _110.QueryPacketReceiptRequestAmino): _110.QueryPacketReceiptRequest;
                    toAmino(message: _110.QueryPacketReceiptRequest): _110.QueryPacketReceiptRequestAmino;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _110.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryPacketReceiptResponse;
                    fromJSON(object: any): _110.QueryPacketReceiptResponse;
                    toJSON(message: _110.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: Partial<_110.QueryPacketReceiptResponse>): _110.QueryPacketReceiptResponse;
                    fromAmino(object: _110.QueryPacketReceiptResponseAmino): _110.QueryPacketReceiptResponse;
                    toAmino(message: _110.QueryPacketReceiptResponse): _110.QueryPacketReceiptResponseAmino;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _110.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _110.QueryPacketAcknowledgementRequest;
                    toJSON(message: _110.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: Partial<_110.QueryPacketAcknowledgementRequest>): _110.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _110.QueryPacketAcknowledgementRequestAmino): _110.QueryPacketAcknowledgementRequest;
                    toAmino(message: _110.QueryPacketAcknowledgementRequest): _110.QueryPacketAcknowledgementRequestAmino;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _110.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _110.QueryPacketAcknowledgementResponse;
                    toJSON(message: _110.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: Partial<_110.QueryPacketAcknowledgementResponse>): _110.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _110.QueryPacketAcknowledgementResponseAmino): _110.QueryPacketAcknowledgementResponse;
                    toAmino(message: _110.QueryPacketAcknowledgementResponse): _110.QueryPacketAcknowledgementResponseAmino;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _110.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _110.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _110.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: Partial<_110.QueryPacketAcknowledgementsRequest>): _110.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _110.QueryPacketAcknowledgementsRequestAmino): _110.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _110.QueryPacketAcknowledgementsRequest): _110.QueryPacketAcknowledgementsRequestAmino;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _110.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _110.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _110.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: Partial<_110.QueryPacketAcknowledgementsResponse>): _110.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _110.QueryPacketAcknowledgementsResponseAmino): _110.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _110.QueryPacketAcknowledgementsResponse): _110.QueryPacketAcknowledgementsResponseAmino;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _110.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _110.QueryUnreceivedPacketsRequest;
                    toJSON(message: _110.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: Partial<_110.QueryUnreceivedPacketsRequest>): _110.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _110.QueryUnreceivedPacketsRequestAmino): _110.QueryUnreceivedPacketsRequest;
                    toAmino(message: _110.QueryUnreceivedPacketsRequest): _110.QueryUnreceivedPacketsRequestAmino;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _110.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _110.QueryUnreceivedPacketsResponse;
                    toJSON(message: _110.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: Partial<_110.QueryUnreceivedPacketsResponse>): _110.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _110.QueryUnreceivedPacketsResponseAmino): _110.QueryUnreceivedPacketsResponse;
                    toAmino(message: _110.QueryUnreceivedPacketsResponse): _110.QueryUnreceivedPacketsResponseAmino;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _110.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _110.QueryUnreceivedAcksRequest;
                    toJSON(message: _110.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: Partial<_110.QueryUnreceivedAcksRequest>): _110.QueryUnreceivedAcksRequest;
                    fromAmino(object: _110.QueryUnreceivedAcksRequestAmino): _110.QueryUnreceivedAcksRequest;
                    toAmino(message: _110.QueryUnreceivedAcksRequest): _110.QueryUnreceivedAcksRequestAmino;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _110.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _110.QueryUnreceivedAcksResponse;
                    toJSON(message: _110.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: Partial<_110.QueryUnreceivedAcksResponse>): _110.QueryUnreceivedAcksResponse;
                    fromAmino(object: _110.QueryUnreceivedAcksResponseAmino): _110.QueryUnreceivedAcksResponse;
                    toAmino(message: _110.QueryUnreceivedAcksResponse): _110.QueryUnreceivedAcksResponseAmino;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _110.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _110.QueryNextSequenceReceiveRequest;
                    toJSON(message: _110.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: Partial<_110.QueryNextSequenceReceiveRequest>): _110.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _110.QueryNextSequenceReceiveRequestAmino): _110.QueryNextSequenceReceiveRequest;
                    toAmino(message: _110.QueryNextSequenceReceiveRequest): _110.QueryNextSequenceReceiveRequestAmino;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _110.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _110.QueryNextSequenceReceiveResponse;
                    toJSON(message: _110.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: Partial<_110.QueryNextSequenceReceiveResponse>): _110.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _110.QueryNextSequenceReceiveResponseAmino): _110.QueryNextSequenceReceiveResponse;
                    toAmino(message: _110.QueryNextSequenceReceiveResponse): _110.QueryNextSequenceReceiveResponseAmino;
                };
                GenesisState: {
                    encode(message: _109.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.GenesisState;
                    fromJSON(object: any): _109.GenesisState;
                    toJSON(message: _109.GenesisState): unknown;
                    fromPartial(object: Partial<_109.GenesisState>): _109.GenesisState;
                    fromAmino(object: _109.GenesisStateAmino): _109.GenesisState;
                    toAmino(message: _109.GenesisState): _109.GenesisStateAmino;
                };
                PacketSequence: {
                    encode(message: _109.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.PacketSequence;
                    fromJSON(object: any): _109.PacketSequence;
                    toJSON(message: _109.PacketSequence): unknown;
                    fromPartial(object: Partial<_109.PacketSequence>): _109.PacketSequence;
                    fromAmino(object: _109.PacketSequenceAmino): _109.PacketSequence;
                    toAmino(message: _109.PacketSequence): _109.PacketSequenceAmino;
                };
                stateFromJSON(object: any): _108.State;
                stateToJSON(object: _108.State): string;
                orderFromJSON(object: any): _108.Order;
                orderToJSON(object: _108.Order): string;
                State: typeof _108.State;
                StateSDKType: typeof _108.State;
                StateAmino: typeof _108.State;
                Order: typeof _108.Order;
                OrderSDKType: typeof _108.Order;
                OrderAmino: typeof _108.Order;
                Channel: {
                    encode(message: _108.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.Channel;
                    fromJSON(object: any): _108.Channel;
                    toJSON(message: _108.Channel): unknown;
                    fromPartial(object: Partial<_108.Channel>): _108.Channel;
                    fromAmino(object: _108.ChannelAmino): _108.Channel;
                    toAmino(message: _108.Channel): _108.ChannelAmino;
                };
                IdentifiedChannel: {
                    encode(message: _108.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.IdentifiedChannel;
                    fromJSON(object: any): _108.IdentifiedChannel;
                    toJSON(message: _108.IdentifiedChannel): unknown;
                    fromPartial(object: Partial<_108.IdentifiedChannel>): _108.IdentifiedChannel;
                    fromAmino(object: _108.IdentifiedChannelAmino): _108.IdentifiedChannel;
                    toAmino(message: _108.IdentifiedChannel): _108.IdentifiedChannelAmino;
                };
                Counterparty: {
                    encode(message: _108.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.Counterparty;
                    fromJSON(object: any): _108.Counterparty;
                    toJSON(message: _108.Counterparty): unknown;
                    fromPartial(object: Partial<_108.Counterparty>): _108.Counterparty;
                    fromAmino(object: _108.CounterpartyAmino): _108.Counterparty;
                    toAmino(message: _108.Counterparty): _108.CounterpartyAmino;
                };
                Packet: {
                    encode(message: _108.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.Packet;
                    fromJSON(object: any): _108.Packet;
                    toJSON(message: _108.Packet): unknown;
                    fromPartial(object: Partial<_108.Packet>): _108.Packet;
                    fromAmino(object: _108.PacketAmino): _108.Packet;
                    toAmino(message: _108.Packet): _108.PacketAmino;
                };
                PacketState: {
                    encode(message: _108.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.PacketState;
                    fromJSON(object: any): _108.PacketState;
                    toJSON(message: _108.PacketState): unknown;
                    fromPartial(object: Partial<_108.PacketState>): _108.PacketState;
                    fromAmino(object: _108.PacketStateAmino): _108.PacketState;
                    toAmino(message: _108.PacketState): _108.PacketStateAmino;
                };
                Acknowledgement: {
                    encode(message: _108.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.Acknowledgement;
                    fromJSON(object: any): _108.Acknowledgement;
                    toJSON(message: _108.Acknowledgement): unknown;
                    fromPartial(object: Partial<_108.Acknowledgement>): _108.Acknowledgement;
                    fromAmino(object: _108.AcknowledgementAmino): _108.Acknowledgement;
                    toAmino(message: _108.Acknowledgement): _108.AcknowledgementAmino;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _277.MsgClientImpl;
                QueryClientImpl: typeof _272.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _114.QueryClientStateRequest): Promise<_114.QueryClientStateResponse>;
                    clientStates(request?: _114.QueryClientStatesRequest): Promise<_114.QueryClientStatesResponse>;
                    consensusState(request: _114.QueryConsensusStateRequest): Promise<_114.QueryConsensusStateResponse>;
                    consensusStates(request: _114.QueryConsensusStatesRequest): Promise<_114.QueryConsensusStatesResponse>;
                    clientStatus(request: _114.QueryClientStatusRequest): Promise<_114.QueryClientStatusResponse>;
                    clientParams(request?: _114.QueryClientParamsRequest): Promise<_114.QueryClientParamsResponse>;
                    upgradedClientState(request?: _114.QueryUpgradedClientStateRequest): Promise<_114.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _114.QueryUpgradedConsensusStateRequest): Promise<_114.QueryUpgradedConsensusStateResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _115.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _115.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _115.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _115.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _115.MsgCreateClient): {
                            typeUrl: string;
                            value: _115.MsgCreateClient;
                        };
                        updateClient(value: _115.MsgUpdateClient): {
                            typeUrl: string;
                            value: _115.MsgUpdateClient;
                        };
                        upgradeClient(value: _115.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _115.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _115.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _115.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _115.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _115.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _115.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _115.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _115.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _115.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _115.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _115.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _115.MsgCreateClient): {
                            typeUrl: string;
                            value: _115.MsgCreateClient;
                        };
                        updateClient(value: _115.MsgUpdateClient): {
                            typeUrl: string;
                            value: _115.MsgUpdateClient;
                        };
                        upgradeClient(value: _115.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _115.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _115.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _115.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _115.MsgCreateClient) => _115.MsgCreateClientAmino;
                        fromAmino: (object: _115.MsgCreateClientAmino) => _115.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _115.MsgUpdateClient) => _115.MsgUpdateClientAmino;
                        fromAmino: (object: _115.MsgUpdateClientAmino) => _115.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _115.MsgUpgradeClient) => _115.MsgUpgradeClientAmino;
                        fromAmino: (object: _115.MsgUpgradeClientAmino) => _115.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _115.MsgSubmitMisbehaviour) => _115.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _115.MsgSubmitMisbehaviourAmino) => _115.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _115.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgCreateClient;
                    fromJSON(object: any): _115.MsgCreateClient;
                    toJSON(message: _115.MsgCreateClient): unknown;
                    fromPartial(object: Partial<_115.MsgCreateClient>): _115.MsgCreateClient;
                    fromAmino(object: _115.MsgCreateClientAmino): _115.MsgCreateClient;
                    toAmino(message: _115.MsgCreateClient): _115.MsgCreateClientAmino;
                };
                MsgCreateClientResponse: {
                    encode(_: _115.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgCreateClientResponse;
                    fromJSON(_: any): _115.MsgCreateClientResponse;
                    toJSON(_: _115.MsgCreateClientResponse): unknown;
                    fromPartial(_: Partial<_115.MsgCreateClientResponse>): _115.MsgCreateClientResponse;
                    fromAmino(_: _115.MsgCreateClientResponseAmino): _115.MsgCreateClientResponse;
                    toAmino(_: _115.MsgCreateClientResponse): _115.MsgCreateClientResponseAmino;
                };
                MsgUpdateClient: {
                    encode(message: _115.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgUpdateClient;
                    fromJSON(object: any): _115.MsgUpdateClient;
                    toJSON(message: _115.MsgUpdateClient): unknown;
                    fromPartial(object: Partial<_115.MsgUpdateClient>): _115.MsgUpdateClient;
                    fromAmino(object: _115.MsgUpdateClientAmino): _115.MsgUpdateClient;
                    toAmino(message: _115.MsgUpdateClient): _115.MsgUpdateClientAmino;
                };
                MsgUpdateClientResponse: {
                    encode(_: _115.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgUpdateClientResponse;
                    fromJSON(_: any): _115.MsgUpdateClientResponse;
                    toJSON(_: _115.MsgUpdateClientResponse): unknown;
                    fromPartial(_: Partial<_115.MsgUpdateClientResponse>): _115.MsgUpdateClientResponse;
                    fromAmino(_: _115.MsgUpdateClientResponseAmino): _115.MsgUpdateClientResponse;
                    toAmino(_: _115.MsgUpdateClientResponse): _115.MsgUpdateClientResponseAmino;
                };
                MsgUpgradeClient: {
                    encode(message: _115.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgUpgradeClient;
                    fromJSON(object: any): _115.MsgUpgradeClient;
                    toJSON(message: _115.MsgUpgradeClient): unknown;
                    fromPartial(object: Partial<_115.MsgUpgradeClient>): _115.MsgUpgradeClient;
                    fromAmino(object: _115.MsgUpgradeClientAmino): _115.MsgUpgradeClient;
                    toAmino(message: _115.MsgUpgradeClient): _115.MsgUpgradeClientAmino;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _115.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgUpgradeClientResponse;
                    fromJSON(_: any): _115.MsgUpgradeClientResponse;
                    toJSON(_: _115.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: Partial<_115.MsgUpgradeClientResponse>): _115.MsgUpgradeClientResponse;
                    fromAmino(_: _115.MsgUpgradeClientResponseAmino): _115.MsgUpgradeClientResponse;
                    toAmino(_: _115.MsgUpgradeClientResponse): _115.MsgUpgradeClientResponseAmino;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _115.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _115.MsgSubmitMisbehaviour;
                    toJSON(message: _115.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: Partial<_115.MsgSubmitMisbehaviour>): _115.MsgSubmitMisbehaviour;
                    fromAmino(object: _115.MsgSubmitMisbehaviourAmino): _115.MsgSubmitMisbehaviour;
                    toAmino(message: _115.MsgSubmitMisbehaviour): _115.MsgSubmitMisbehaviourAmino;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _115.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _115.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _115.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: Partial<_115.MsgSubmitMisbehaviourResponse>): _115.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _115.MsgSubmitMisbehaviourResponseAmino): _115.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _115.MsgSubmitMisbehaviourResponse): _115.MsgSubmitMisbehaviourResponseAmino;
                };
                QueryClientStateRequest: {
                    encode(message: _114.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryClientStateRequest;
                    fromJSON(object: any): _114.QueryClientStateRequest;
                    toJSON(message: _114.QueryClientStateRequest): unknown;
                    fromPartial(object: Partial<_114.QueryClientStateRequest>): _114.QueryClientStateRequest;
                    fromAmino(object: _114.QueryClientStateRequestAmino): _114.QueryClientStateRequest;
                    toAmino(message: _114.QueryClientStateRequest): _114.QueryClientStateRequestAmino;
                };
                QueryClientStateResponse: {
                    encode(message: _114.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryClientStateResponse;
                    fromJSON(object: any): _114.QueryClientStateResponse;
                    toJSON(message: _114.QueryClientStateResponse): unknown;
                    fromPartial(object: Partial<_114.QueryClientStateResponse>): _114.QueryClientStateResponse;
                    fromAmino(object: _114.QueryClientStateResponseAmino): _114.QueryClientStateResponse;
                    toAmino(message: _114.QueryClientStateResponse): _114.QueryClientStateResponseAmino;
                };
                QueryClientStatesRequest: {
                    encode(message: _114.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryClientStatesRequest;
                    fromJSON(object: any): _114.QueryClientStatesRequest;
                    toJSON(message: _114.QueryClientStatesRequest): unknown;
                    fromPartial(object: Partial<_114.QueryClientStatesRequest>): _114.QueryClientStatesRequest;
                    fromAmino(object: _114.QueryClientStatesRequestAmino): _114.QueryClientStatesRequest;
                    toAmino(message: _114.QueryClientStatesRequest): _114.QueryClientStatesRequestAmino;
                };
                QueryClientStatesResponse: {
                    encode(message: _114.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryClientStatesResponse;
                    fromJSON(object: any): _114.QueryClientStatesResponse;
                    toJSON(message: _114.QueryClientStatesResponse): unknown;
                    fromPartial(object: Partial<_114.QueryClientStatesResponse>): _114.QueryClientStatesResponse;
                    fromAmino(object: _114.QueryClientStatesResponseAmino): _114.QueryClientStatesResponse;
                    toAmino(message: _114.QueryClientStatesResponse): _114.QueryClientStatesResponseAmino;
                };
                QueryConsensusStateRequest: {
                    encode(message: _114.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryConsensusStateRequest;
                    fromJSON(object: any): _114.QueryConsensusStateRequest;
                    toJSON(message: _114.QueryConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_114.QueryConsensusStateRequest>): _114.QueryConsensusStateRequest;
                    fromAmino(object: _114.QueryConsensusStateRequestAmino): _114.QueryConsensusStateRequest;
                    toAmino(message: _114.QueryConsensusStateRequest): _114.QueryConsensusStateRequestAmino;
                };
                QueryConsensusStateResponse: {
                    encode(message: _114.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryConsensusStateResponse;
                    fromJSON(object: any): _114.QueryConsensusStateResponse;
                    toJSON(message: _114.QueryConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_114.QueryConsensusStateResponse>): _114.QueryConsensusStateResponse;
                    fromAmino(object: _114.QueryConsensusStateResponseAmino): _114.QueryConsensusStateResponse;
                    toAmino(message: _114.QueryConsensusStateResponse): _114.QueryConsensusStateResponseAmino;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _114.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryConsensusStatesRequest;
                    fromJSON(object: any): _114.QueryConsensusStatesRequest;
                    toJSON(message: _114.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: Partial<_114.QueryConsensusStatesRequest>): _114.QueryConsensusStatesRequest;
                    fromAmino(object: _114.QueryConsensusStatesRequestAmino): _114.QueryConsensusStatesRequest;
                    toAmino(message: _114.QueryConsensusStatesRequest): _114.QueryConsensusStatesRequestAmino;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _114.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryConsensusStatesResponse;
                    fromJSON(object: any): _114.QueryConsensusStatesResponse;
                    toJSON(message: _114.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: Partial<_114.QueryConsensusStatesResponse>): _114.QueryConsensusStatesResponse;
                    fromAmino(object: _114.QueryConsensusStatesResponseAmino): _114.QueryConsensusStatesResponse;
                    toAmino(message: _114.QueryConsensusStatesResponse): _114.QueryConsensusStatesResponseAmino;
                };
                QueryClientStatusRequest: {
                    encode(message: _114.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryClientStatusRequest;
                    fromJSON(object: any): _114.QueryClientStatusRequest;
                    toJSON(message: _114.QueryClientStatusRequest): unknown;
                    fromPartial(object: Partial<_114.QueryClientStatusRequest>): _114.QueryClientStatusRequest;
                    fromAmino(object: _114.QueryClientStatusRequestAmino): _114.QueryClientStatusRequest;
                    toAmino(message: _114.QueryClientStatusRequest): _114.QueryClientStatusRequestAmino;
                };
                QueryClientStatusResponse: {
                    encode(message: _114.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryClientStatusResponse;
                    fromJSON(object: any): _114.QueryClientStatusResponse;
                    toJSON(message: _114.QueryClientStatusResponse): unknown;
                    fromPartial(object: Partial<_114.QueryClientStatusResponse>): _114.QueryClientStatusResponse;
                    fromAmino(object: _114.QueryClientStatusResponseAmino): _114.QueryClientStatusResponse;
                    toAmino(message: _114.QueryClientStatusResponse): _114.QueryClientStatusResponseAmino;
                };
                QueryClientParamsRequest: {
                    encode(_: _114.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryClientParamsRequest;
                    fromJSON(_: any): _114.QueryClientParamsRequest;
                    toJSON(_: _114.QueryClientParamsRequest): unknown;
                    fromPartial(_: Partial<_114.QueryClientParamsRequest>): _114.QueryClientParamsRequest;
                    fromAmino(_: _114.QueryClientParamsRequestAmino): _114.QueryClientParamsRequest;
                    toAmino(_: _114.QueryClientParamsRequest): _114.QueryClientParamsRequestAmino;
                };
                QueryClientParamsResponse: {
                    encode(message: _114.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryClientParamsResponse;
                    fromJSON(object: any): _114.QueryClientParamsResponse;
                    toJSON(message: _114.QueryClientParamsResponse): unknown;
                    fromPartial(object: Partial<_114.QueryClientParamsResponse>): _114.QueryClientParamsResponse;
                    fromAmino(object: _114.QueryClientParamsResponseAmino): _114.QueryClientParamsResponse;
                    toAmino(message: _114.QueryClientParamsResponse): _114.QueryClientParamsResponseAmino;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _114.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _114.QueryUpgradedClientStateRequest;
                    toJSON(_: _114.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: Partial<_114.QueryUpgradedClientStateRequest>): _114.QueryUpgradedClientStateRequest;
                    fromAmino(_: _114.QueryUpgradedClientStateRequestAmino): _114.QueryUpgradedClientStateRequest;
                    toAmino(_: _114.QueryUpgradedClientStateRequest): _114.QueryUpgradedClientStateRequestAmino;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _114.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _114.QueryUpgradedClientStateResponse;
                    toJSON(message: _114.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: Partial<_114.QueryUpgradedClientStateResponse>): _114.QueryUpgradedClientStateResponse;
                    fromAmino(object: _114.QueryUpgradedClientStateResponseAmino): _114.QueryUpgradedClientStateResponse;
                    toAmino(message: _114.QueryUpgradedClientStateResponse): _114.QueryUpgradedClientStateResponseAmino;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _114.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _114.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _114.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: Partial<_114.QueryUpgradedConsensusStateRequest>): _114.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _114.QueryUpgradedConsensusStateRequestAmino): _114.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _114.QueryUpgradedConsensusStateRequest): _114.QueryUpgradedConsensusStateRequestAmino;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _114.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _114.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _114.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_114.QueryUpgradedConsensusStateResponse>): _114.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _114.QueryUpgradedConsensusStateResponseAmino): _114.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _114.QueryUpgradedConsensusStateResponse): _114.QueryUpgradedConsensusStateResponseAmino;
                };
                GenesisState: {
                    encode(message: _113.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.GenesisState;
                    fromJSON(object: any): _113.GenesisState;
                    toJSON(message: _113.GenesisState): unknown;
                    fromPartial(object: Partial<_113.GenesisState>): _113.GenesisState;
                    fromAmino(object: _113.GenesisStateAmino): _113.GenesisState;
                    toAmino(message: _113.GenesisState): _113.GenesisStateAmino;
                };
                GenesisMetadata: {
                    encode(message: _113.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.GenesisMetadata;
                    fromJSON(object: any): _113.GenesisMetadata;
                    toJSON(message: _113.GenesisMetadata): unknown;
                    fromPartial(object: Partial<_113.GenesisMetadata>): _113.GenesisMetadata;
                    fromAmino(object: _113.GenesisMetadataAmino): _113.GenesisMetadata;
                    toAmino(message: _113.GenesisMetadata): _113.GenesisMetadataAmino;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _113.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _113.IdentifiedGenesisMetadata;
                    toJSON(message: _113.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: Partial<_113.IdentifiedGenesisMetadata>): _113.IdentifiedGenesisMetadata;
                    fromAmino(object: _113.IdentifiedGenesisMetadataAmino): _113.IdentifiedGenesisMetadata;
                    toAmino(message: _113.IdentifiedGenesisMetadata): _113.IdentifiedGenesisMetadataAmino;
                };
                IdentifiedClientState: {
                    encode(message: _112.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.IdentifiedClientState;
                    fromJSON(object: any): _112.IdentifiedClientState;
                    toJSON(message: _112.IdentifiedClientState): unknown;
                    fromPartial(object: Partial<_112.IdentifiedClientState>): _112.IdentifiedClientState;
                    fromAmino(object: _112.IdentifiedClientStateAmino): _112.IdentifiedClientState;
                    toAmino(message: _112.IdentifiedClientState): _112.IdentifiedClientStateAmino;
                };
                ConsensusStateWithHeight: {
                    encode(message: _112.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.ConsensusStateWithHeight;
                    fromJSON(object: any): _112.ConsensusStateWithHeight;
                    toJSON(message: _112.ConsensusStateWithHeight): unknown;
                    fromPartial(object: Partial<_112.ConsensusStateWithHeight>): _112.ConsensusStateWithHeight;
                    fromAmino(object: _112.ConsensusStateWithHeightAmino): _112.ConsensusStateWithHeight;
                    toAmino(message: _112.ConsensusStateWithHeight): _112.ConsensusStateWithHeightAmino;
                };
                ClientConsensusStates: {
                    encode(message: _112.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.ClientConsensusStates;
                    fromJSON(object: any): _112.ClientConsensusStates;
                    toJSON(message: _112.ClientConsensusStates): unknown;
                    fromPartial(object: Partial<_112.ClientConsensusStates>): _112.ClientConsensusStates;
                    fromAmino(object: _112.ClientConsensusStatesAmino): _112.ClientConsensusStates;
                    toAmino(message: _112.ClientConsensusStates): _112.ClientConsensusStatesAmino;
                };
                ClientUpdateProposal: {
                    encode(message: _112.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.ClientUpdateProposal;
                    fromJSON(object: any): _112.ClientUpdateProposal;
                    toJSON(message: _112.ClientUpdateProposal): unknown;
                    fromPartial(object: Partial<_112.ClientUpdateProposal>): _112.ClientUpdateProposal;
                    fromAmino(object: _112.ClientUpdateProposalAmino): _112.ClientUpdateProposal;
                    toAmino(message: _112.ClientUpdateProposal): _112.ClientUpdateProposalAmino;
                };
                UpgradeProposal: {
                    encode(message: _112.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.UpgradeProposal;
                    fromJSON(object: any): _112.UpgradeProposal;
                    toJSON(message: _112.UpgradeProposal): unknown;
                    fromPartial(object: Partial<_112.UpgradeProposal>): _112.UpgradeProposal;
                    fromAmino(object: _112.UpgradeProposalAmino): _112.UpgradeProposal;
                    toAmino(message: _112.UpgradeProposal): _112.UpgradeProposalAmino;
                };
                Height: {
                    encode(message: _112.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Height;
                    fromJSON(object: any): _112.Height;
                    toJSON(message: _112.Height): unknown;
                    fromPartial(object: Partial<_112.Height>): _112.Height;
                    fromAmino(object: _112.HeightAmino): _112.Height;
                    toAmino(message: _112.Height): _112.HeightAmino;
                };
                Params: {
                    encode(message: _112.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Params;
                    fromJSON(object: any): _112.Params;
                    toJSON(message: _112.Params): unknown;
                    fromPartial(object: Partial<_112.Params>): _112.Params;
                    fromAmino(object: _112.ParamsAmino): _112.Params;
                    toAmino(message: _112.Params): _112.ParamsAmino;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _116.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MerkleRoot;
                    fromJSON(object: any): _116.MerkleRoot;
                    toJSON(message: _116.MerkleRoot): unknown;
                    fromPartial(object: Partial<_116.MerkleRoot>): _116.MerkleRoot;
                    fromAmino(object: _116.MerkleRootAmino): _116.MerkleRoot;
                    toAmino(message: _116.MerkleRoot): _116.MerkleRootAmino;
                };
                MerklePrefix: {
                    encode(message: _116.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MerklePrefix;
                    fromJSON(object: any): _116.MerklePrefix;
                    toJSON(message: _116.MerklePrefix): unknown;
                    fromPartial(object: Partial<_116.MerklePrefix>): _116.MerklePrefix;
                    fromAmino(object: _116.MerklePrefixAmino): _116.MerklePrefix;
                    toAmino(message: _116.MerklePrefix): _116.MerklePrefixAmino;
                };
                MerklePath: {
                    encode(message: _116.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MerklePath;
                    fromJSON(object: any): _116.MerklePath;
                    toJSON(message: _116.MerklePath): unknown;
                    fromPartial(object: Partial<_116.MerklePath>): _116.MerklePath;
                    fromAmino(object: _116.MerklePathAmino): _116.MerklePath;
                    toAmino(message: _116.MerklePath): _116.MerklePathAmino;
                };
                MerkleProof: {
                    encode(message: _116.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MerkleProof;
                    fromJSON(object: any): _116.MerkleProof;
                    toJSON(message: _116.MerkleProof): unknown;
                    fromPartial(object: Partial<_116.MerkleProof>): _116.MerkleProof;
                    fromAmino(object: _116.MerkleProofAmino): _116.MerkleProof;
                    toAmino(message: _116.MerkleProof): _116.MerkleProofAmino;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _278.MsgClientImpl;
                QueryClientImpl: typeof _273.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _119.QueryConnectionRequest): Promise<_119.QueryConnectionResponse>;
                    connections(request?: _119.QueryConnectionsRequest): Promise<_119.QueryConnectionsResponse>;
                    clientConnections(request: _119.QueryClientConnectionsRequest): Promise<_119.QueryClientConnectionsResponse>;
                    connectionClientState(request: _119.QueryConnectionClientStateRequest): Promise<_119.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _119.QueryConnectionConsensusStateRequest): Promise<_119.QueryConnectionConsensusStateResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _120.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _120.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _120.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _120.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _120.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _120.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _120.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _120.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _120.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _120.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _120.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _120.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _120.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _120.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _120.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _120.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _120.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _120.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _120.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _120.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _120.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _120.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _120.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _120.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _120.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _120.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _120.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _120.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _120.MsgConnectionOpenInit) => _120.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _120.MsgConnectionOpenInitAmino) => _120.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _120.MsgConnectionOpenTry) => _120.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _120.MsgConnectionOpenTryAmino) => _120.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _120.MsgConnectionOpenAck) => _120.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _120.MsgConnectionOpenAckAmino) => _120.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _120.MsgConnectionOpenConfirm) => _120.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _120.MsgConnectionOpenConfirmAmino) => _120.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _120.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgConnectionOpenInit;
                    fromJSON(object: any): _120.MsgConnectionOpenInit;
                    toJSON(message: _120.MsgConnectionOpenInit): unknown;
                    fromPartial(object: Partial<_120.MsgConnectionOpenInit>): _120.MsgConnectionOpenInit;
                    fromAmino(object: _120.MsgConnectionOpenInitAmino): _120.MsgConnectionOpenInit;
                    toAmino(message: _120.MsgConnectionOpenInit): _120.MsgConnectionOpenInitAmino;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _120.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _120.MsgConnectionOpenInitResponse;
                    toJSON(_: _120.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: Partial<_120.MsgConnectionOpenInitResponse>): _120.MsgConnectionOpenInitResponse;
                    fromAmino(_: _120.MsgConnectionOpenInitResponseAmino): _120.MsgConnectionOpenInitResponse;
                    toAmino(_: _120.MsgConnectionOpenInitResponse): _120.MsgConnectionOpenInitResponseAmino;
                };
                MsgConnectionOpenTry: {
                    encode(message: _120.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgConnectionOpenTry;
                    fromJSON(object: any): _120.MsgConnectionOpenTry;
                    toJSON(message: _120.MsgConnectionOpenTry): unknown;
                    fromPartial(object: Partial<_120.MsgConnectionOpenTry>): _120.MsgConnectionOpenTry;
                    fromAmino(object: _120.MsgConnectionOpenTryAmino): _120.MsgConnectionOpenTry;
                    toAmino(message: _120.MsgConnectionOpenTry): _120.MsgConnectionOpenTryAmino;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _120.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _120.MsgConnectionOpenTryResponse;
                    toJSON(_: _120.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: Partial<_120.MsgConnectionOpenTryResponse>): _120.MsgConnectionOpenTryResponse;
                    fromAmino(_: _120.MsgConnectionOpenTryResponseAmino): _120.MsgConnectionOpenTryResponse;
                    toAmino(_: _120.MsgConnectionOpenTryResponse): _120.MsgConnectionOpenTryResponseAmino;
                };
                MsgConnectionOpenAck: {
                    encode(message: _120.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgConnectionOpenAck;
                    fromJSON(object: any): _120.MsgConnectionOpenAck;
                    toJSON(message: _120.MsgConnectionOpenAck): unknown;
                    fromPartial(object: Partial<_120.MsgConnectionOpenAck>): _120.MsgConnectionOpenAck;
                    fromAmino(object: _120.MsgConnectionOpenAckAmino): _120.MsgConnectionOpenAck;
                    toAmino(message: _120.MsgConnectionOpenAck): _120.MsgConnectionOpenAckAmino;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _120.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _120.MsgConnectionOpenAckResponse;
                    toJSON(_: _120.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: Partial<_120.MsgConnectionOpenAckResponse>): _120.MsgConnectionOpenAckResponse;
                    fromAmino(_: _120.MsgConnectionOpenAckResponseAmino): _120.MsgConnectionOpenAckResponse;
                    toAmino(_: _120.MsgConnectionOpenAckResponse): _120.MsgConnectionOpenAckResponseAmino;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _120.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _120.MsgConnectionOpenConfirm;
                    toJSON(message: _120.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: Partial<_120.MsgConnectionOpenConfirm>): _120.MsgConnectionOpenConfirm;
                    fromAmino(object: _120.MsgConnectionOpenConfirmAmino): _120.MsgConnectionOpenConfirm;
                    toAmino(message: _120.MsgConnectionOpenConfirm): _120.MsgConnectionOpenConfirmAmino;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _120.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _120.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _120.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_120.MsgConnectionOpenConfirmResponse>): _120.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _120.MsgConnectionOpenConfirmResponseAmino): _120.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _120.MsgConnectionOpenConfirmResponse): _120.MsgConnectionOpenConfirmResponseAmino;
                };
                QueryConnectionRequest: {
                    encode(message: _119.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryConnectionRequest;
                    fromJSON(object: any): _119.QueryConnectionRequest;
                    toJSON(message: _119.QueryConnectionRequest): unknown;
                    fromPartial(object: Partial<_119.QueryConnectionRequest>): _119.QueryConnectionRequest;
                    fromAmino(object: _119.QueryConnectionRequestAmino): _119.QueryConnectionRequest;
                    toAmino(message: _119.QueryConnectionRequest): _119.QueryConnectionRequestAmino;
                };
                QueryConnectionResponse: {
                    encode(message: _119.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryConnectionResponse;
                    fromJSON(object: any): _119.QueryConnectionResponse;
                    toJSON(message: _119.QueryConnectionResponse): unknown;
                    fromPartial(object: Partial<_119.QueryConnectionResponse>): _119.QueryConnectionResponse;
                    fromAmino(object: _119.QueryConnectionResponseAmino): _119.QueryConnectionResponse;
                    toAmino(message: _119.QueryConnectionResponse): _119.QueryConnectionResponseAmino;
                };
                QueryConnectionsRequest: {
                    encode(message: _119.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryConnectionsRequest;
                    fromJSON(object: any): _119.QueryConnectionsRequest;
                    toJSON(message: _119.QueryConnectionsRequest): unknown;
                    fromPartial(object: Partial<_119.QueryConnectionsRequest>): _119.QueryConnectionsRequest;
                    fromAmino(object: _119.QueryConnectionsRequestAmino): _119.QueryConnectionsRequest;
                    toAmino(message: _119.QueryConnectionsRequest): _119.QueryConnectionsRequestAmino;
                };
                QueryConnectionsResponse: {
                    encode(message: _119.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryConnectionsResponse;
                    fromJSON(object: any): _119.QueryConnectionsResponse;
                    toJSON(message: _119.QueryConnectionsResponse): unknown;
                    fromPartial(object: Partial<_119.QueryConnectionsResponse>): _119.QueryConnectionsResponse;
                    fromAmino(object: _119.QueryConnectionsResponseAmino): _119.QueryConnectionsResponse;
                    toAmino(message: _119.QueryConnectionsResponse): _119.QueryConnectionsResponseAmino;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _119.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryClientConnectionsRequest;
                    fromJSON(object: any): _119.QueryClientConnectionsRequest;
                    toJSON(message: _119.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: Partial<_119.QueryClientConnectionsRequest>): _119.QueryClientConnectionsRequest;
                    fromAmino(object: _119.QueryClientConnectionsRequestAmino): _119.QueryClientConnectionsRequest;
                    toAmino(message: _119.QueryClientConnectionsRequest): _119.QueryClientConnectionsRequestAmino;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _119.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryClientConnectionsResponse;
                    fromJSON(object: any): _119.QueryClientConnectionsResponse;
                    toJSON(message: _119.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: Partial<_119.QueryClientConnectionsResponse>): _119.QueryClientConnectionsResponse;
                    fromAmino(object: _119.QueryClientConnectionsResponseAmino): _119.QueryClientConnectionsResponse;
                    toAmino(message: _119.QueryClientConnectionsResponse): _119.QueryClientConnectionsResponseAmino;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _119.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _119.QueryConnectionClientStateRequest;
                    toJSON(message: _119.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: Partial<_119.QueryConnectionClientStateRequest>): _119.QueryConnectionClientStateRequest;
                    fromAmino(object: _119.QueryConnectionClientStateRequestAmino): _119.QueryConnectionClientStateRequest;
                    toAmino(message: _119.QueryConnectionClientStateRequest): _119.QueryConnectionClientStateRequestAmino;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _119.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _119.QueryConnectionClientStateResponse;
                    toJSON(message: _119.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: Partial<_119.QueryConnectionClientStateResponse>): _119.QueryConnectionClientStateResponse;
                    fromAmino(object: _119.QueryConnectionClientStateResponseAmino): _119.QueryConnectionClientStateResponse;
                    toAmino(message: _119.QueryConnectionClientStateResponse): _119.QueryConnectionClientStateResponseAmino;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _119.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _119.QueryConnectionConsensusStateRequest;
                    toJSON(message: _119.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_119.QueryConnectionConsensusStateRequest>): _119.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _119.QueryConnectionConsensusStateRequestAmino): _119.QueryConnectionConsensusStateRequest;
                    toAmino(message: _119.QueryConnectionConsensusStateRequest): _119.QueryConnectionConsensusStateRequestAmino;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _119.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _119.QueryConnectionConsensusStateResponse;
                    toJSON(message: _119.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_119.QueryConnectionConsensusStateResponse>): _119.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _119.QueryConnectionConsensusStateResponseAmino): _119.QueryConnectionConsensusStateResponse;
                    toAmino(message: _119.QueryConnectionConsensusStateResponse): _119.QueryConnectionConsensusStateResponseAmino;
                };
                GenesisState: {
                    encode(message: _118.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.GenesisState;
                    fromJSON(object: any): _118.GenesisState;
                    toJSON(message: _118.GenesisState): unknown;
                    fromPartial(object: Partial<_118.GenesisState>): _118.GenesisState;
                    fromAmino(object: _118.GenesisStateAmino): _118.GenesisState;
                    toAmino(message: _118.GenesisState): _118.GenesisStateAmino;
                };
                stateFromJSON(object: any): _117.State;
                stateToJSON(object: _117.State): string;
                State: typeof _117.State;
                StateSDKType: typeof _117.State;
                StateAmino: typeof _117.State;
                ConnectionEnd: {
                    encode(message: _117.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.ConnectionEnd;
                    fromJSON(object: any): _117.ConnectionEnd;
                    toJSON(message: _117.ConnectionEnd): unknown;
                    fromPartial(object: Partial<_117.ConnectionEnd>): _117.ConnectionEnd;
                    fromAmino(object: _117.ConnectionEndAmino): _117.ConnectionEnd;
                    toAmino(message: _117.ConnectionEnd): _117.ConnectionEndAmino;
                };
                IdentifiedConnection: {
                    encode(message: _117.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.IdentifiedConnection;
                    fromJSON(object: any): _117.IdentifiedConnection;
                    toJSON(message: _117.IdentifiedConnection): unknown;
                    fromPartial(object: Partial<_117.IdentifiedConnection>): _117.IdentifiedConnection;
                    fromAmino(object: _117.IdentifiedConnectionAmino): _117.IdentifiedConnection;
                    toAmino(message: _117.IdentifiedConnection): _117.IdentifiedConnectionAmino;
                };
                Counterparty: {
                    encode(message: _117.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.Counterparty;
                    fromJSON(object: any): _117.Counterparty;
                    toJSON(message: _117.Counterparty): unknown;
                    fromPartial(object: Partial<_117.Counterparty>): _117.Counterparty;
                    fromAmino(object: _117.CounterpartyAmino): _117.Counterparty;
                    toAmino(message: _117.Counterparty): _117.CounterpartyAmino;
                };
                ClientPaths: {
                    encode(message: _117.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.ClientPaths;
                    fromJSON(object: any): _117.ClientPaths;
                    toJSON(message: _117.ClientPaths): unknown;
                    fromPartial(object: Partial<_117.ClientPaths>): _117.ClientPaths;
                    fromAmino(object: _117.ClientPathsAmino): _117.ClientPaths;
                    toAmino(message: _117.ClientPaths): _117.ClientPathsAmino;
                };
                ConnectionPaths: {
                    encode(message: _117.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.ConnectionPaths;
                    fromJSON(object: any): _117.ConnectionPaths;
                    toJSON(message: _117.ConnectionPaths): unknown;
                    fromPartial(object: Partial<_117.ConnectionPaths>): _117.ConnectionPaths;
                    fromAmino(object: _117.ConnectionPathsAmino): _117.ConnectionPaths;
                    toAmino(message: _117.ConnectionPaths): _117.ConnectionPathsAmino;
                };
                Version: {
                    encode(message: _117.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.Version;
                    fromJSON(object: any): _117.Version;
                    toJSON(message: _117.Version): unknown;
                    fromPartial(object: Partial<_117.Version>): _117.Version;
                    fromAmino(object: _117.VersionAmino): _117.Version;
                    toAmino(message: _117.Version): _117.VersionAmino;
                };
                Params: {
                    encode(message: _117.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.Params;
                    fromJSON(object: any): _117.Params;
                    toJSON(message: _117.Params): unknown;
                    fromPartial(object: Partial<_117.Params>): _117.Params;
                    fromAmino(object: _117.ParamsAmino): _117.Params;
                    toAmino(message: _117.Params): _117.ParamsAmino;
                };
            };
        }
        namespace port {
            const v1: {
                QueryClientImpl: typeof _274.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    appVersion(request: _121.QueryAppVersionRequest): Promise<_121.QueryAppVersionResponse>;
                };
                QueryAppVersionRequest: {
                    encode(message: _121.QueryAppVersionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryAppVersionRequest;
                    fromJSON(object: any): _121.QueryAppVersionRequest;
                    toJSON(message: _121.QueryAppVersionRequest): unknown;
                    fromPartial(object: Partial<_121.QueryAppVersionRequest>): _121.QueryAppVersionRequest;
                    fromAmino(object: _121.QueryAppVersionRequestAmino): _121.QueryAppVersionRequest;
                    toAmino(message: _121.QueryAppVersionRequest): _121.QueryAppVersionRequestAmino;
                };
                QueryAppVersionResponse: {
                    encode(message: _121.QueryAppVersionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryAppVersionResponse;
                    fromJSON(object: any): _121.QueryAppVersionResponse;
                    toJSON(message: _121.QueryAppVersionResponse): unknown;
                    fromPartial(object: Partial<_121.QueryAppVersionResponse>): _121.QueryAppVersionResponse;
                    fromAmino(object: _121.QueryAppVersionResponseAmino): _121.QueryAppVersionResponse;
                    toAmino(message: _121.QueryAppVersionResponse): _121.QueryAppVersionResponseAmino;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _122.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.GenesisState;
                    fromJSON(object: any): _122.GenesisState;
                    toJSON(message: _122.GenesisState): unknown;
                    fromPartial(object: Partial<_122.GenesisState>): _122.GenesisState;
                    fromAmino(object: _122.GenesisStateAmino): _122.GenesisState;
                    toAmino(message: _122.GenesisState): _122.GenesisStateAmino;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _123.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ClientState;
                    fromJSON(object: any): _123.ClientState;
                    toJSON(message: _123.ClientState): unknown;
                    fromPartial(object: Partial<_123.ClientState>): _123.ClientState;
                    fromAmino(object: _123.ClientStateAmino): _123.ClientState;
                    toAmino(message: _123.ClientState): _123.ClientStateAmino;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _124.DataType;
                dataTypeToJSON(object: _124.DataType): string;
                DataType: typeof _124.DataType;
                DataTypeSDKType: typeof _124.DataType;
                DataTypeAmino: typeof _124.DataType;
                ClientState: {
                    encode(message: _124.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ClientState;
                    fromJSON(object: any): _124.ClientState;
                    toJSON(message: _124.ClientState): unknown;
                    fromPartial(object: Partial<_124.ClientState>): _124.ClientState;
                    fromAmino(object: _124.ClientStateAmino): _124.ClientState;
                    toAmino(message: _124.ClientState): _124.ClientStateAmino;
                };
                ConsensusState: {
                    encode(message: _124.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ConsensusState;
                    fromJSON(object: any): _124.ConsensusState;
                    toJSON(message: _124.ConsensusState): unknown;
                    fromPartial(object: Partial<_124.ConsensusState>): _124.ConsensusState;
                    fromAmino(object: _124.ConsensusStateAmino): _124.ConsensusState;
                    toAmino(message: _124.ConsensusState): _124.ConsensusStateAmino;
                };
                Header: {
                    encode(message: _124.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Header;
                    fromJSON(object: any): _124.Header;
                    toJSON(message: _124.Header): unknown;
                    fromPartial(object: Partial<_124.Header>): _124.Header;
                    fromAmino(object: _124.HeaderAmino): _124.Header;
                    toAmino(message: _124.Header): _124.HeaderAmino;
                };
                Misbehaviour: {
                    encode(message: _124.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Misbehaviour;
                    fromJSON(object: any): _124.Misbehaviour;
                    toJSON(message: _124.Misbehaviour): unknown;
                    fromPartial(object: Partial<_124.Misbehaviour>): _124.Misbehaviour;
                    fromAmino(object: _124.MisbehaviourAmino): _124.Misbehaviour;
                    toAmino(message: _124.Misbehaviour): _124.MisbehaviourAmino;
                };
                SignatureAndData: {
                    encode(message: _124.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.SignatureAndData;
                    fromJSON(object: any): _124.SignatureAndData;
                    toJSON(message: _124.SignatureAndData): unknown;
                    fromPartial(object: Partial<_124.SignatureAndData>): _124.SignatureAndData;
                    fromAmino(object: _124.SignatureAndDataAmino): _124.SignatureAndData;
                    toAmino(message: _124.SignatureAndData): _124.SignatureAndDataAmino;
                };
                TimestampedSignatureData: {
                    encode(message: _124.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.TimestampedSignatureData;
                    fromJSON(object: any): _124.TimestampedSignatureData;
                    toJSON(message: _124.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_124.TimestampedSignatureData>): _124.TimestampedSignatureData;
                    fromAmino(object: _124.TimestampedSignatureDataAmino): _124.TimestampedSignatureData;
                    toAmino(message: _124.TimestampedSignatureData): _124.TimestampedSignatureDataAmino;
                };
                SignBytes: {
                    encode(message: _124.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.SignBytes;
                    fromJSON(object: any): _124.SignBytes;
                    toJSON(message: _124.SignBytes): unknown;
                    fromPartial(object: Partial<_124.SignBytes>): _124.SignBytes;
                    fromAmino(object: _124.SignBytesAmino): _124.SignBytes;
                    toAmino(message: _124.SignBytes): _124.SignBytesAmino;
                };
                HeaderData: {
                    encode(message: _124.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.HeaderData;
                    fromJSON(object: any): _124.HeaderData;
                    toJSON(message: _124.HeaderData): unknown;
                    fromPartial(object: Partial<_124.HeaderData>): _124.HeaderData;
                    fromAmino(object: _124.HeaderDataAmino): _124.HeaderData;
                    toAmino(message: _124.HeaderData): _124.HeaderDataAmino;
                };
                ClientStateData: {
                    encode(message: _124.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ClientStateData;
                    fromJSON(object: any): _124.ClientStateData;
                    toJSON(message: _124.ClientStateData): unknown;
                    fromPartial(object: Partial<_124.ClientStateData>): _124.ClientStateData;
                    fromAmino(object: _124.ClientStateDataAmino): _124.ClientStateData;
                    toAmino(message: _124.ClientStateData): _124.ClientStateDataAmino;
                };
                ConsensusStateData: {
                    encode(message: _124.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ConsensusStateData;
                    fromJSON(object: any): _124.ConsensusStateData;
                    toJSON(message: _124.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_124.ConsensusStateData>): _124.ConsensusStateData;
                    fromAmino(object: _124.ConsensusStateDataAmino): _124.ConsensusStateData;
                    toAmino(message: _124.ConsensusStateData): _124.ConsensusStateDataAmino;
                };
                ConnectionStateData: {
                    encode(message: _124.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ConnectionStateData;
                    fromJSON(object: any): _124.ConnectionStateData;
                    toJSON(message: _124.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_124.ConnectionStateData>): _124.ConnectionStateData;
                    fromAmino(object: _124.ConnectionStateDataAmino): _124.ConnectionStateData;
                    toAmino(message: _124.ConnectionStateData): _124.ConnectionStateDataAmino;
                };
                ChannelStateData: {
                    encode(message: _124.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ChannelStateData;
                    fromJSON(object: any): _124.ChannelStateData;
                    toJSON(message: _124.ChannelStateData): unknown;
                    fromPartial(object: Partial<_124.ChannelStateData>): _124.ChannelStateData;
                    fromAmino(object: _124.ChannelStateDataAmino): _124.ChannelStateData;
                    toAmino(message: _124.ChannelStateData): _124.ChannelStateDataAmino;
                };
                PacketCommitmentData: {
                    encode(message: _124.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.PacketCommitmentData;
                    fromJSON(object: any): _124.PacketCommitmentData;
                    toJSON(message: _124.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_124.PacketCommitmentData>): _124.PacketCommitmentData;
                    fromAmino(object: _124.PacketCommitmentDataAmino): _124.PacketCommitmentData;
                    toAmino(message: _124.PacketCommitmentData): _124.PacketCommitmentDataAmino;
                };
                PacketAcknowledgementData: {
                    encode(message: _124.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.PacketAcknowledgementData;
                    fromJSON(object: any): _124.PacketAcknowledgementData;
                    toJSON(message: _124.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_124.PacketAcknowledgementData>): _124.PacketAcknowledgementData;
                    fromAmino(object: _124.PacketAcknowledgementDataAmino): _124.PacketAcknowledgementData;
                    toAmino(message: _124.PacketAcknowledgementData): _124.PacketAcknowledgementDataAmino;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _124.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.PacketReceiptAbsenceData;
                    fromJSON(object: any): _124.PacketReceiptAbsenceData;
                    toJSON(message: _124.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_124.PacketReceiptAbsenceData>): _124.PacketReceiptAbsenceData;
                    fromAmino(object: _124.PacketReceiptAbsenceDataAmino): _124.PacketReceiptAbsenceData;
                    toAmino(message: _124.PacketReceiptAbsenceData): _124.PacketReceiptAbsenceDataAmino;
                };
                NextSequenceRecvData: {
                    encode(message: _124.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.NextSequenceRecvData;
                    fromJSON(object: any): _124.NextSequenceRecvData;
                    toJSON(message: _124.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_124.NextSequenceRecvData>): _124.NextSequenceRecvData;
                    fromAmino(object: _124.NextSequenceRecvDataAmino): _124.NextSequenceRecvData;
                    toAmino(message: _124.NextSequenceRecvData): _124.NextSequenceRecvDataAmino;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _125.DataType;
                dataTypeToJSON(object: _125.DataType): string;
                DataType: typeof _125.DataType;
                DataTypeSDKType: typeof _125.DataType;
                DataTypeAmino: typeof _125.DataType;
                ClientState: {
                    encode(message: _125.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ClientState;
                    fromJSON(object: any): _125.ClientState;
                    toJSON(message: _125.ClientState): unknown;
                    fromPartial(object: Partial<_125.ClientState>): _125.ClientState;
                    fromAmino(object: _125.ClientStateAmino): _125.ClientState;
                    toAmino(message: _125.ClientState): _125.ClientStateAmino;
                };
                ConsensusState: {
                    encode(message: _125.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ConsensusState;
                    fromJSON(object: any): _125.ConsensusState;
                    toJSON(message: _125.ConsensusState): unknown;
                    fromPartial(object: Partial<_125.ConsensusState>): _125.ConsensusState;
                    fromAmino(object: _125.ConsensusStateAmino): _125.ConsensusState;
                    toAmino(message: _125.ConsensusState): _125.ConsensusStateAmino;
                };
                Header: {
                    encode(message: _125.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Header;
                    fromJSON(object: any): _125.Header;
                    toJSON(message: _125.Header): unknown;
                    fromPartial(object: Partial<_125.Header>): _125.Header;
                    fromAmino(object: _125.HeaderAmino): _125.Header;
                    toAmino(message: _125.Header): _125.HeaderAmino;
                };
                Misbehaviour: {
                    encode(message: _125.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Misbehaviour;
                    fromJSON(object: any): _125.Misbehaviour;
                    toJSON(message: _125.Misbehaviour): unknown;
                    fromPartial(object: Partial<_125.Misbehaviour>): _125.Misbehaviour;
                    fromAmino(object: _125.MisbehaviourAmino): _125.Misbehaviour;
                    toAmino(message: _125.Misbehaviour): _125.MisbehaviourAmino;
                };
                SignatureAndData: {
                    encode(message: _125.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.SignatureAndData;
                    fromJSON(object: any): _125.SignatureAndData;
                    toJSON(message: _125.SignatureAndData): unknown;
                    fromPartial(object: Partial<_125.SignatureAndData>): _125.SignatureAndData;
                    fromAmino(object: _125.SignatureAndDataAmino): _125.SignatureAndData;
                    toAmino(message: _125.SignatureAndData): _125.SignatureAndDataAmino;
                };
                TimestampedSignatureData: {
                    encode(message: _125.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.TimestampedSignatureData;
                    fromJSON(object: any): _125.TimestampedSignatureData;
                    toJSON(message: _125.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_125.TimestampedSignatureData>): _125.TimestampedSignatureData;
                    fromAmino(object: _125.TimestampedSignatureDataAmino): _125.TimestampedSignatureData;
                    toAmino(message: _125.TimestampedSignatureData): _125.TimestampedSignatureDataAmino;
                };
                SignBytes: {
                    encode(message: _125.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.SignBytes;
                    fromJSON(object: any): _125.SignBytes;
                    toJSON(message: _125.SignBytes): unknown;
                    fromPartial(object: Partial<_125.SignBytes>): _125.SignBytes;
                    fromAmino(object: _125.SignBytesAmino): _125.SignBytes;
                    toAmino(message: _125.SignBytes): _125.SignBytesAmino;
                };
                HeaderData: {
                    encode(message: _125.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.HeaderData;
                    fromJSON(object: any): _125.HeaderData;
                    toJSON(message: _125.HeaderData): unknown;
                    fromPartial(object: Partial<_125.HeaderData>): _125.HeaderData;
                    fromAmino(object: _125.HeaderDataAmino): _125.HeaderData;
                    toAmino(message: _125.HeaderData): _125.HeaderDataAmino;
                };
                ClientStateData: {
                    encode(message: _125.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ClientStateData;
                    fromJSON(object: any): _125.ClientStateData;
                    toJSON(message: _125.ClientStateData): unknown;
                    fromPartial(object: Partial<_125.ClientStateData>): _125.ClientStateData;
                    fromAmino(object: _125.ClientStateDataAmino): _125.ClientStateData;
                    toAmino(message: _125.ClientStateData): _125.ClientStateDataAmino;
                };
                ConsensusStateData: {
                    encode(message: _125.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ConsensusStateData;
                    fromJSON(object: any): _125.ConsensusStateData;
                    toJSON(message: _125.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_125.ConsensusStateData>): _125.ConsensusStateData;
                    fromAmino(object: _125.ConsensusStateDataAmino): _125.ConsensusStateData;
                    toAmino(message: _125.ConsensusStateData): _125.ConsensusStateDataAmino;
                };
                ConnectionStateData: {
                    encode(message: _125.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ConnectionStateData;
                    fromJSON(object: any): _125.ConnectionStateData;
                    toJSON(message: _125.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_125.ConnectionStateData>): _125.ConnectionStateData;
                    fromAmino(object: _125.ConnectionStateDataAmino): _125.ConnectionStateData;
                    toAmino(message: _125.ConnectionStateData): _125.ConnectionStateDataAmino;
                };
                ChannelStateData: {
                    encode(message: _125.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ChannelStateData;
                    fromJSON(object: any): _125.ChannelStateData;
                    toJSON(message: _125.ChannelStateData): unknown;
                    fromPartial(object: Partial<_125.ChannelStateData>): _125.ChannelStateData;
                    fromAmino(object: _125.ChannelStateDataAmino): _125.ChannelStateData;
                    toAmino(message: _125.ChannelStateData): _125.ChannelStateDataAmino;
                };
                PacketCommitmentData: {
                    encode(message: _125.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.PacketCommitmentData;
                    fromJSON(object: any): _125.PacketCommitmentData;
                    toJSON(message: _125.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_125.PacketCommitmentData>): _125.PacketCommitmentData;
                    fromAmino(object: _125.PacketCommitmentDataAmino): _125.PacketCommitmentData;
                    toAmino(message: _125.PacketCommitmentData): _125.PacketCommitmentDataAmino;
                };
                PacketAcknowledgementData: {
                    encode(message: _125.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.PacketAcknowledgementData;
                    fromJSON(object: any): _125.PacketAcknowledgementData;
                    toJSON(message: _125.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_125.PacketAcknowledgementData>): _125.PacketAcknowledgementData;
                    fromAmino(object: _125.PacketAcknowledgementDataAmino): _125.PacketAcknowledgementData;
                    toAmino(message: _125.PacketAcknowledgementData): _125.PacketAcknowledgementDataAmino;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _125.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.PacketReceiptAbsenceData;
                    fromJSON(object: any): _125.PacketReceiptAbsenceData;
                    toJSON(message: _125.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_125.PacketReceiptAbsenceData>): _125.PacketReceiptAbsenceData;
                    fromAmino(object: _125.PacketReceiptAbsenceDataAmino): _125.PacketReceiptAbsenceData;
                    toAmino(message: _125.PacketReceiptAbsenceData): _125.PacketReceiptAbsenceDataAmino;
                };
                NextSequenceRecvData: {
                    encode(message: _125.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.NextSequenceRecvData;
                    fromJSON(object: any): _125.NextSequenceRecvData;
                    toJSON(message: _125.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_125.NextSequenceRecvData>): _125.NextSequenceRecvData;
                    fromAmino(object: _125.NextSequenceRecvDataAmino): _125.NextSequenceRecvData;
                    toAmino(message: _125.NextSequenceRecvData): _125.NextSequenceRecvDataAmino;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _126.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ClientState;
                    fromJSON(object: any): _126.ClientState;
                    toJSON(message: _126.ClientState): unknown;
                    fromPartial(object: Partial<_126.ClientState>): _126.ClientState;
                    fromAmino(object: _126.ClientStateAmino): _126.ClientState;
                    toAmino(message: _126.ClientState): _126.ClientStateAmino;
                };
                ConsensusState: {
                    encode(message: _126.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ConsensusState;
                    fromJSON(object: any): _126.ConsensusState;
                    toJSON(message: _126.ConsensusState): unknown;
                    fromPartial(object: Partial<_126.ConsensusState>): _126.ConsensusState;
                    fromAmino(object: _126.ConsensusStateAmino): _126.ConsensusState;
                    toAmino(message: _126.ConsensusState): _126.ConsensusStateAmino;
                };
                Misbehaviour: {
                    encode(message: _126.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Misbehaviour;
                    fromJSON(object: any): _126.Misbehaviour;
                    toJSON(message: _126.Misbehaviour): unknown;
                    fromPartial(object: Partial<_126.Misbehaviour>): _126.Misbehaviour;
                    fromAmino(object: _126.MisbehaviourAmino): _126.Misbehaviour;
                    toAmino(message: _126.Misbehaviour): _126.MisbehaviourAmino;
                };
                Header: {
                    encode(message: _126.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Header;
                    fromJSON(object: any): _126.Header;
                    toJSON(message: _126.Header): unknown;
                    fromPartial(object: Partial<_126.Header>): _126.Header;
                    fromAmino(object: _126.HeaderAmino): _126.Header;
                    toAmino(message: _126.Header): _126.HeaderAmino;
                };
                Fraction: {
                    encode(message: _126.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Fraction;
                    fromJSON(object: any): _126.Fraction;
                    toJSON(message: _126.Fraction): unknown;
                    fromPartial(object: Partial<_126.Fraction>): _126.Fraction;
                    fromAmino(object: _126.FractionAmino): _126.Fraction;
                    toAmino(message: _126.Fraction): _126.FractionAmino;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _275.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _276.MsgClientImpl;
                    };
                    client: {
                        v1: _277.MsgClientImpl;
                    };
                    connection: {
                        v1: _278.MsgClientImpl;
                    };
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: {
                            denomTrace(request: _104.QueryDenomTraceRequest): Promise<_104.QueryDenomTraceResponse>;
                            denomTraces(request?: _104.QueryDenomTracesRequest): Promise<_104.QueryDenomTracesResponse>;
                            params(request?: _104.QueryParamsRequest): Promise<_104.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _110.QueryChannelRequest): Promise<_110.QueryChannelResponse>;
                            channels(request?: _110.QueryChannelsRequest): Promise<_110.QueryChannelsResponse>;
                            connectionChannels(request: _110.QueryConnectionChannelsRequest): Promise<_110.QueryConnectionChannelsResponse>;
                            channelClientState(request: _110.QueryChannelClientStateRequest): Promise<_110.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _110.QueryChannelConsensusStateRequest): Promise<_110.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _110.QueryPacketCommitmentRequest): Promise<_110.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _110.QueryPacketCommitmentsRequest): Promise<_110.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _110.QueryPacketReceiptRequest): Promise<_110.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _110.QueryPacketAcknowledgementRequest): Promise<_110.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _110.QueryPacketAcknowledgementsRequest): Promise<_110.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _110.QueryUnreceivedPacketsRequest): Promise<_110.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _110.QueryUnreceivedAcksRequest): Promise<_110.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _110.QueryNextSequenceReceiveRequest): Promise<_110.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _114.QueryClientStateRequest): Promise<_114.QueryClientStateResponse>;
                            clientStates(request?: _114.QueryClientStatesRequest): Promise<_114.QueryClientStatesResponse>;
                            consensusState(request: _114.QueryConsensusStateRequest): Promise<_114.QueryConsensusStateResponse>;
                            consensusStates(request: _114.QueryConsensusStatesRequest): Promise<_114.QueryConsensusStatesResponse>;
                            clientStatus(request: _114.QueryClientStatusRequest): Promise<_114.QueryClientStatusResponse>;
                            clientParams(request?: _114.QueryClientParamsRequest): Promise<_114.QueryClientParamsResponse>;
                            upgradedClientState(request?: _114.QueryUpgradedClientStateRequest): Promise<_114.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _114.QueryUpgradedConsensusStateRequest): Promise<_114.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _119.QueryConnectionRequest): Promise<_119.QueryConnectionResponse>;
                            connections(request?: _119.QueryConnectionsRequest): Promise<_119.QueryConnectionsResponse>;
                            clientConnections(request: _119.QueryClientConnectionsRequest): Promise<_119.QueryClientConnectionsResponse>;
                            connectionClientState(request: _119.QueryConnectionClientStateRequest): Promise<_119.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _119.QueryConnectionConsensusStateRequest): Promise<_119.QueryConnectionConsensusStateResponse>;
                        };
                    };
                    port: {
                        v1: {
                            appVersion(request: _121.QueryAppVersionRequest): Promise<_121.QueryAppVersionResponse>;
                        };
                    };
                };
            };
        }>;
    };
}

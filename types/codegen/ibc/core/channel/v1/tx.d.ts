import { Channel, ChannelAmino, ChannelSDKType, Packet, PacketAmino, PacketSDKType } from "./channel";
import { Height, HeightAmino, HeightSDKType } from "../../client/v1/client";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
export interface MsgChannelOpenInit {
    portId: string;
    channel?: Channel;
    signer: string;
}
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
export interface MsgChannelOpenInitAmino {
    port_id: string;
    channel?: ChannelAmino;
    signer: string;
}
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
export interface MsgChannelOpenInitSDKType {
    port_id: string;
    channel?: ChannelSDKType;
    signer: string;
}
/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponse {
}
/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponseAmino {
}
/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponseSDKType {
}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B.
 */
export interface MsgChannelOpenTry {
    portId: string;
    /**
     * in the case of crossing hello's, when both chains call OpenInit, we need
     * the channel identifier of the previous channel in state INIT
     */
    previousChannelId: string;
    channel?: Channel;
    counterpartyVersion: string;
    proofInit: Uint8Array;
    proofHeight?: Height;
    signer: string;
}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B.
 */
export interface MsgChannelOpenTryAmino {
    port_id: string;
    /**
     * in the case of crossing hello's, when both chains call OpenInit, we need
     * the channel identifier of the previous channel in state INIT
     */
    previous_channel_id: string;
    channel?: ChannelAmino;
    counterparty_version: string;
    proof_init: Uint8Array;
    proof_height?: HeightAmino;
    signer: string;
}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B.
 */
export interface MsgChannelOpenTrySDKType {
    port_id: string;
    previous_channel_id: string;
    channel?: ChannelSDKType;
    counterparty_version: string;
    proof_init: Uint8Array;
    proof_height?: HeightSDKType;
    signer: string;
}
/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponse {
}
/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponseAmino {
}
/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponseSDKType {
}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 */
export interface MsgChannelOpenAck {
    portId: string;
    channelId: string;
    counterpartyChannelId: string;
    counterpartyVersion: string;
    proofTry: Uint8Array;
    proofHeight?: Height;
    signer: string;
}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 */
export interface MsgChannelOpenAckAmino {
    port_id: string;
    channel_id: string;
    counterparty_channel_id: string;
    counterparty_version: string;
    proof_try: Uint8Array;
    proof_height?: HeightAmino;
    signer: string;
}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 */
export interface MsgChannelOpenAckSDKType {
    port_id: string;
    channel_id: string;
    counterparty_channel_id: string;
    counterparty_version: string;
    proof_try: Uint8Array;
    proof_height?: HeightSDKType;
    signer: string;
}
/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponse {
}
/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponseAmino {
}
/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponseSDKType {
}
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
export interface MsgChannelOpenConfirm {
    portId: string;
    channelId: string;
    proofAck: Uint8Array;
    proofHeight?: Height;
    signer: string;
}
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
export interface MsgChannelOpenConfirmAmino {
    port_id: string;
    channel_id: string;
    proof_ack: Uint8Array;
    proof_height?: HeightAmino;
    signer: string;
}
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
export interface MsgChannelOpenConfirmSDKType {
    port_id: string;
    channel_id: string;
    proof_ack: Uint8Array;
    proof_height?: HeightSDKType;
    signer: string;
}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponse {
}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponseAmino {
}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponseSDKType {
}
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */
export interface MsgChannelCloseInit {
    portId: string;
    channelId: string;
    signer: string;
}
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */
export interface MsgChannelCloseInitAmino {
    port_id: string;
    channel_id: string;
    signer: string;
}
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */
export interface MsgChannelCloseInitSDKType {
    port_id: string;
    channel_id: string;
    signer: string;
}
/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export interface MsgChannelCloseInitResponse {
}
/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export interface MsgChannelCloseInitResponseAmino {
}
/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export interface MsgChannelCloseInitResponseSDKType {
}
/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */
export interface MsgChannelCloseConfirm {
    portId: string;
    channelId: string;
    proofInit: Uint8Array;
    proofHeight?: Height;
    signer: string;
}
/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */
export interface MsgChannelCloseConfirmAmino {
    port_id: string;
    channel_id: string;
    proof_init: Uint8Array;
    proof_height?: HeightAmino;
    signer: string;
}
/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */
export interface MsgChannelCloseConfirmSDKType {
    port_id: string;
    channel_id: string;
    proof_init: Uint8Array;
    proof_height?: HeightSDKType;
    signer: string;
}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponse {
}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponseAmino {
}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponseSDKType {
}
/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacket {
    packet?: Packet;
    proofCommitment: Uint8Array;
    proofHeight?: Height;
    signer: string;
}
/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacketAmino {
    packet?: PacketAmino;
    proof_commitment: Uint8Array;
    proof_height?: HeightAmino;
    signer: string;
}
/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacketSDKType {
    packet?: PacketSDKType;
    proof_commitment: Uint8Array;
    proof_height?: HeightSDKType;
    signer: string;
}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponse {
}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponseAmino {
}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponseSDKType {
}
/** MsgTimeout receives timed-out packet */
export interface MsgTimeout {
    packet?: Packet;
    proofUnreceived: Uint8Array;
    proofHeight?: Height;
    nextSequenceRecv: Long;
    signer: string;
}
/** MsgTimeout receives timed-out packet */
export interface MsgTimeoutAmino {
    packet?: PacketAmino;
    proof_unreceived: Uint8Array;
    proof_height?: HeightAmino;
    next_sequence_recv: string;
    signer: string;
}
/** MsgTimeout receives timed-out packet */
export interface MsgTimeoutSDKType {
    packet?: PacketSDKType;
    proof_unreceived: Uint8Array;
    proof_height?: HeightSDKType;
    next_sequence_recv: Long;
    signer: string;
}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponse {
}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponseAmino {
}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponseSDKType {
}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnClose {
    packet?: Packet;
    proofUnreceived: Uint8Array;
    proofClose: Uint8Array;
    proofHeight?: Height;
    nextSequenceRecv: Long;
    signer: string;
}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnCloseAmino {
    packet?: PacketAmino;
    proof_unreceived: Uint8Array;
    proof_close: Uint8Array;
    proof_height?: HeightAmino;
    next_sequence_recv: string;
    signer: string;
}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnCloseSDKType {
    packet?: PacketSDKType;
    proof_unreceived: Uint8Array;
    proof_close: Uint8Array;
    proof_height?: HeightSDKType;
    next_sequence_recv: Long;
    signer: string;
}
/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponse {
}
/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponseAmino {
}
/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponseSDKType {
}
/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgement {
    packet?: Packet;
    acknowledgement: Uint8Array;
    proofAcked: Uint8Array;
    proofHeight?: Height;
    signer: string;
}
/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgementAmino {
    packet?: PacketAmino;
    acknowledgement: Uint8Array;
    proof_acked: Uint8Array;
    proof_height?: HeightAmino;
    signer: string;
}
/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgementSDKType {
    packet?: PacketSDKType;
    acknowledgement: Uint8Array;
    proof_acked: Uint8Array;
    proof_height?: HeightSDKType;
    signer: string;
}
/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponse {
}
/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponseAmino {
}
/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponseSDKType {
}
export declare const MsgChannelOpenInit: {
    encode(message: MsgChannelOpenInit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenInit;
    fromJSON(object: any): MsgChannelOpenInit;
    toJSON(message: MsgChannelOpenInit): unknown;
    fromPartial(object: Partial<MsgChannelOpenInit>): MsgChannelOpenInit;
    fromAmino(object: MsgChannelOpenInitAmino): MsgChannelOpenInit;
    toAmino(message: MsgChannelOpenInit): MsgChannelOpenInitAmino;
};
export declare const MsgChannelOpenInitResponse: {
    encode(_: MsgChannelOpenInitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenInitResponse;
    fromJSON(_: any): MsgChannelOpenInitResponse;
    toJSON(_: MsgChannelOpenInitResponse): unknown;
    fromPartial(_: Partial<MsgChannelOpenInitResponse>): MsgChannelOpenInitResponse;
    fromAmino(_: MsgChannelOpenInitResponseAmino): MsgChannelOpenInitResponse;
    toAmino(_: MsgChannelOpenInitResponse): MsgChannelOpenInitResponseAmino;
};
export declare const MsgChannelOpenTry: {
    encode(message: MsgChannelOpenTry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenTry;
    fromJSON(object: any): MsgChannelOpenTry;
    toJSON(message: MsgChannelOpenTry): unknown;
    fromPartial(object: Partial<MsgChannelOpenTry>): MsgChannelOpenTry;
    fromAmino(object: MsgChannelOpenTryAmino): MsgChannelOpenTry;
    toAmino(message: MsgChannelOpenTry): MsgChannelOpenTryAmino;
};
export declare const MsgChannelOpenTryResponse: {
    encode(_: MsgChannelOpenTryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenTryResponse;
    fromJSON(_: any): MsgChannelOpenTryResponse;
    toJSON(_: MsgChannelOpenTryResponse): unknown;
    fromPartial(_: Partial<MsgChannelOpenTryResponse>): MsgChannelOpenTryResponse;
    fromAmino(_: MsgChannelOpenTryResponseAmino): MsgChannelOpenTryResponse;
    toAmino(_: MsgChannelOpenTryResponse): MsgChannelOpenTryResponseAmino;
};
export declare const MsgChannelOpenAck: {
    encode(message: MsgChannelOpenAck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenAck;
    fromJSON(object: any): MsgChannelOpenAck;
    toJSON(message: MsgChannelOpenAck): unknown;
    fromPartial(object: Partial<MsgChannelOpenAck>): MsgChannelOpenAck;
    fromAmino(object: MsgChannelOpenAckAmino): MsgChannelOpenAck;
    toAmino(message: MsgChannelOpenAck): MsgChannelOpenAckAmino;
};
export declare const MsgChannelOpenAckResponse: {
    encode(_: MsgChannelOpenAckResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenAckResponse;
    fromJSON(_: any): MsgChannelOpenAckResponse;
    toJSON(_: MsgChannelOpenAckResponse): unknown;
    fromPartial(_: Partial<MsgChannelOpenAckResponse>): MsgChannelOpenAckResponse;
    fromAmino(_: MsgChannelOpenAckResponseAmino): MsgChannelOpenAckResponse;
    toAmino(_: MsgChannelOpenAckResponse): MsgChannelOpenAckResponseAmino;
};
export declare const MsgChannelOpenConfirm: {
    encode(message: MsgChannelOpenConfirm, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenConfirm;
    fromJSON(object: any): MsgChannelOpenConfirm;
    toJSON(message: MsgChannelOpenConfirm): unknown;
    fromPartial(object: Partial<MsgChannelOpenConfirm>): MsgChannelOpenConfirm;
    fromAmino(object: MsgChannelOpenConfirmAmino): MsgChannelOpenConfirm;
    toAmino(message: MsgChannelOpenConfirm): MsgChannelOpenConfirmAmino;
};
export declare const MsgChannelOpenConfirmResponse: {
    encode(_: MsgChannelOpenConfirmResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenConfirmResponse;
    fromJSON(_: any): MsgChannelOpenConfirmResponse;
    toJSON(_: MsgChannelOpenConfirmResponse): unknown;
    fromPartial(_: Partial<MsgChannelOpenConfirmResponse>): MsgChannelOpenConfirmResponse;
    fromAmino(_: MsgChannelOpenConfirmResponseAmino): MsgChannelOpenConfirmResponse;
    toAmino(_: MsgChannelOpenConfirmResponse): MsgChannelOpenConfirmResponseAmino;
};
export declare const MsgChannelCloseInit: {
    encode(message: MsgChannelCloseInit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseInit;
    fromJSON(object: any): MsgChannelCloseInit;
    toJSON(message: MsgChannelCloseInit): unknown;
    fromPartial(object: Partial<MsgChannelCloseInit>): MsgChannelCloseInit;
    fromAmino(object: MsgChannelCloseInitAmino): MsgChannelCloseInit;
    toAmino(message: MsgChannelCloseInit): MsgChannelCloseInitAmino;
};
export declare const MsgChannelCloseInitResponse: {
    encode(_: MsgChannelCloseInitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseInitResponse;
    fromJSON(_: any): MsgChannelCloseInitResponse;
    toJSON(_: MsgChannelCloseInitResponse): unknown;
    fromPartial(_: Partial<MsgChannelCloseInitResponse>): MsgChannelCloseInitResponse;
    fromAmino(_: MsgChannelCloseInitResponseAmino): MsgChannelCloseInitResponse;
    toAmino(_: MsgChannelCloseInitResponse): MsgChannelCloseInitResponseAmino;
};
export declare const MsgChannelCloseConfirm: {
    encode(message: MsgChannelCloseConfirm, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseConfirm;
    fromJSON(object: any): MsgChannelCloseConfirm;
    toJSON(message: MsgChannelCloseConfirm): unknown;
    fromPartial(object: Partial<MsgChannelCloseConfirm>): MsgChannelCloseConfirm;
    fromAmino(object: MsgChannelCloseConfirmAmino): MsgChannelCloseConfirm;
    toAmino(message: MsgChannelCloseConfirm): MsgChannelCloseConfirmAmino;
};
export declare const MsgChannelCloseConfirmResponse: {
    encode(_: MsgChannelCloseConfirmResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseConfirmResponse;
    fromJSON(_: any): MsgChannelCloseConfirmResponse;
    toJSON(_: MsgChannelCloseConfirmResponse): unknown;
    fromPartial(_: Partial<MsgChannelCloseConfirmResponse>): MsgChannelCloseConfirmResponse;
    fromAmino(_: MsgChannelCloseConfirmResponseAmino): MsgChannelCloseConfirmResponse;
    toAmino(_: MsgChannelCloseConfirmResponse): MsgChannelCloseConfirmResponseAmino;
};
export declare const MsgRecvPacket: {
    encode(message: MsgRecvPacket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecvPacket;
    fromJSON(object: any): MsgRecvPacket;
    toJSON(message: MsgRecvPacket): unknown;
    fromPartial(object: Partial<MsgRecvPacket>): MsgRecvPacket;
    fromAmino(object: MsgRecvPacketAmino): MsgRecvPacket;
    toAmino(message: MsgRecvPacket): MsgRecvPacketAmino;
};
export declare const MsgRecvPacketResponse: {
    encode(_: MsgRecvPacketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecvPacketResponse;
    fromJSON(_: any): MsgRecvPacketResponse;
    toJSON(_: MsgRecvPacketResponse): unknown;
    fromPartial(_: Partial<MsgRecvPacketResponse>): MsgRecvPacketResponse;
    fromAmino(_: MsgRecvPacketResponseAmino): MsgRecvPacketResponse;
    toAmino(_: MsgRecvPacketResponse): MsgRecvPacketResponseAmino;
};
export declare const MsgTimeout: {
    encode(message: MsgTimeout, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeout;
    fromJSON(object: any): MsgTimeout;
    toJSON(message: MsgTimeout): unknown;
    fromPartial(object: Partial<MsgTimeout>): MsgTimeout;
    fromAmino(object: MsgTimeoutAmino): MsgTimeout;
    toAmino(message: MsgTimeout): MsgTimeoutAmino;
};
export declare const MsgTimeoutResponse: {
    encode(_: MsgTimeoutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutResponse;
    fromJSON(_: any): MsgTimeoutResponse;
    toJSON(_: MsgTimeoutResponse): unknown;
    fromPartial(_: Partial<MsgTimeoutResponse>): MsgTimeoutResponse;
    fromAmino(_: MsgTimeoutResponseAmino): MsgTimeoutResponse;
    toAmino(_: MsgTimeoutResponse): MsgTimeoutResponseAmino;
};
export declare const MsgTimeoutOnClose: {
    encode(message: MsgTimeoutOnClose, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutOnClose;
    fromJSON(object: any): MsgTimeoutOnClose;
    toJSON(message: MsgTimeoutOnClose): unknown;
    fromPartial(object: Partial<MsgTimeoutOnClose>): MsgTimeoutOnClose;
    fromAmino(object: MsgTimeoutOnCloseAmino): MsgTimeoutOnClose;
    toAmino(message: MsgTimeoutOnClose): MsgTimeoutOnCloseAmino;
};
export declare const MsgTimeoutOnCloseResponse: {
    encode(_: MsgTimeoutOnCloseResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutOnCloseResponse;
    fromJSON(_: any): MsgTimeoutOnCloseResponse;
    toJSON(_: MsgTimeoutOnCloseResponse): unknown;
    fromPartial(_: Partial<MsgTimeoutOnCloseResponse>): MsgTimeoutOnCloseResponse;
    fromAmino(_: MsgTimeoutOnCloseResponseAmino): MsgTimeoutOnCloseResponse;
    toAmino(_: MsgTimeoutOnCloseResponse): MsgTimeoutOnCloseResponseAmino;
};
export declare const MsgAcknowledgement: {
    encode(message: MsgAcknowledgement, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcknowledgement;
    fromJSON(object: any): MsgAcknowledgement;
    toJSON(message: MsgAcknowledgement): unknown;
    fromPartial(object: Partial<MsgAcknowledgement>): MsgAcknowledgement;
    fromAmino(object: MsgAcknowledgementAmino): MsgAcknowledgement;
    toAmino(message: MsgAcknowledgement): MsgAcknowledgementAmino;
};
export declare const MsgAcknowledgementResponse: {
    encode(_: MsgAcknowledgementResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcknowledgementResponse;
    fromJSON(_: any): MsgAcknowledgementResponse;
    toJSON(_: MsgAcknowledgementResponse): unknown;
    fromPartial(_: Partial<MsgAcknowledgementResponse>): MsgAcknowledgementResponse;
    fromAmino(_: MsgAcknowledgementResponseAmino): MsgAcknowledgementResponse;
    toAmino(_: MsgAcknowledgementResponse): MsgAcknowledgementResponseAmino;
};

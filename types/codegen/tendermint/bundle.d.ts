import * as _191 from "./abci/types";
import * as _192 from "./crypto/keys";
import * as _193 from "./crypto/proof";
import * as _194 from "./libs/bits/types";
import * as _195 from "./p2p/types";
import * as _196 from "./types/block";
import * as _197 from "./types/evidence";
import * as _198 from "./types/params";
import * as _199 from "./types/types";
import * as _200 from "./types/validator";
import * as _201 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _191.CheckTxType;
        checkTxTypeToJSON(object: _191.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _191.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _191.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _191.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _191.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _191.EvidenceType;
        evidenceTypeToJSON(object: _191.EvidenceType): string;
        CheckTxType: typeof _191.CheckTxType;
        CheckTxTypeSDKType: typeof _191.CheckTxType;
        CheckTxTypeAmino: typeof _191.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _191.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _191.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultAmino: typeof _191.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _191.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _191.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultAmino: typeof _191.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _191.EvidenceType;
        EvidenceTypeSDKType: typeof _191.EvidenceType;
        EvidenceTypeAmino: typeof _191.EvidenceType;
        Request: {
            encode(message: _191.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.Request;
            fromJSON(object: any): _191.Request;
            toJSON(message: _191.Request): unknown;
            fromPartial(object: Partial<_191.Request>): _191.Request;
            fromAmino(object: _191.RequestAmino): _191.Request;
            toAmino(message: _191.Request): _191.RequestAmino;
        };
        RequestEcho: {
            encode(message: _191.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestEcho;
            fromJSON(object: any): _191.RequestEcho;
            toJSON(message: _191.RequestEcho): unknown;
            fromPartial(object: Partial<_191.RequestEcho>): _191.RequestEcho;
            fromAmino(object: _191.RequestEchoAmino): _191.RequestEcho;
            toAmino(message: _191.RequestEcho): _191.RequestEchoAmino;
        };
        RequestFlush: {
            encode(_: _191.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestFlush;
            fromJSON(_: any): _191.RequestFlush;
            toJSON(_: _191.RequestFlush): unknown;
            fromPartial(_: Partial<_191.RequestFlush>): _191.RequestFlush;
            fromAmino(_: _191.RequestFlushAmino): _191.RequestFlush;
            toAmino(_: _191.RequestFlush): _191.RequestFlushAmino;
        };
        RequestInfo: {
            encode(message: _191.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestInfo;
            fromJSON(object: any): _191.RequestInfo;
            toJSON(message: _191.RequestInfo): unknown;
            fromPartial(object: Partial<_191.RequestInfo>): _191.RequestInfo;
            fromAmino(object: _191.RequestInfoAmino): _191.RequestInfo;
            toAmino(message: _191.RequestInfo): _191.RequestInfoAmino;
        };
        RequestSetOption: {
            encode(message: _191.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestSetOption;
            fromJSON(object: any): _191.RequestSetOption;
            toJSON(message: _191.RequestSetOption): unknown;
            fromPartial(object: Partial<_191.RequestSetOption>): _191.RequestSetOption;
            fromAmino(object: _191.RequestSetOptionAmino): _191.RequestSetOption;
            toAmino(message: _191.RequestSetOption): _191.RequestSetOptionAmino;
        };
        RequestInitChain: {
            encode(message: _191.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestInitChain;
            fromJSON(object: any): _191.RequestInitChain;
            toJSON(message: _191.RequestInitChain): unknown;
            fromPartial(object: Partial<_191.RequestInitChain>): _191.RequestInitChain;
            fromAmino(object: _191.RequestInitChainAmino): _191.RequestInitChain;
            toAmino(message: _191.RequestInitChain): _191.RequestInitChainAmino;
        };
        RequestQuery: {
            encode(message: _191.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestQuery;
            fromJSON(object: any): _191.RequestQuery;
            toJSON(message: _191.RequestQuery): unknown;
            fromPartial(object: Partial<_191.RequestQuery>): _191.RequestQuery;
            fromAmino(object: _191.RequestQueryAmino): _191.RequestQuery;
            toAmino(message: _191.RequestQuery): _191.RequestQueryAmino;
        };
        RequestBeginBlock: {
            encode(message: _191.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestBeginBlock;
            fromJSON(object: any): _191.RequestBeginBlock;
            toJSON(message: _191.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_191.RequestBeginBlock>): _191.RequestBeginBlock;
            fromAmino(object: _191.RequestBeginBlockAmino): _191.RequestBeginBlock;
            toAmino(message: _191.RequestBeginBlock): _191.RequestBeginBlockAmino;
        };
        RequestCheckTx: {
            encode(message: _191.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestCheckTx;
            fromJSON(object: any): _191.RequestCheckTx;
            toJSON(message: _191.RequestCheckTx): unknown;
            fromPartial(object: Partial<_191.RequestCheckTx>): _191.RequestCheckTx;
            fromAmino(object: _191.RequestCheckTxAmino): _191.RequestCheckTx;
            toAmino(message: _191.RequestCheckTx): _191.RequestCheckTxAmino;
        };
        RequestDeliverTx: {
            encode(message: _191.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestDeliverTx;
            fromJSON(object: any): _191.RequestDeliverTx;
            toJSON(message: _191.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_191.RequestDeliverTx>): _191.RequestDeliverTx;
            fromAmino(object: _191.RequestDeliverTxAmino): _191.RequestDeliverTx;
            toAmino(message: _191.RequestDeliverTx): _191.RequestDeliverTxAmino;
        };
        RequestEndBlock: {
            encode(message: _191.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestEndBlock;
            fromJSON(object: any): _191.RequestEndBlock;
            toJSON(message: _191.RequestEndBlock): unknown;
            fromPartial(object: Partial<_191.RequestEndBlock>): _191.RequestEndBlock;
            fromAmino(object: _191.RequestEndBlockAmino): _191.RequestEndBlock;
            toAmino(message: _191.RequestEndBlock): _191.RequestEndBlockAmino;
        };
        RequestCommit: {
            encode(_: _191.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestCommit;
            fromJSON(_: any): _191.RequestCommit;
            toJSON(_: _191.RequestCommit): unknown;
            fromPartial(_: Partial<_191.RequestCommit>): _191.RequestCommit;
            fromAmino(_: _191.RequestCommitAmino): _191.RequestCommit;
            toAmino(_: _191.RequestCommit): _191.RequestCommitAmino;
        };
        RequestListSnapshots: {
            encode(_: _191.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestListSnapshots;
            fromJSON(_: any): _191.RequestListSnapshots;
            toJSON(_: _191.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_191.RequestListSnapshots>): _191.RequestListSnapshots;
            fromAmino(_: _191.RequestListSnapshotsAmino): _191.RequestListSnapshots;
            toAmino(_: _191.RequestListSnapshots): _191.RequestListSnapshotsAmino;
        };
        RequestOfferSnapshot: {
            encode(message: _191.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestOfferSnapshot;
            fromJSON(object: any): _191.RequestOfferSnapshot;
            toJSON(message: _191.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_191.RequestOfferSnapshot>): _191.RequestOfferSnapshot;
            fromAmino(object: _191.RequestOfferSnapshotAmino): _191.RequestOfferSnapshot;
            toAmino(message: _191.RequestOfferSnapshot): _191.RequestOfferSnapshotAmino;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _191.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestLoadSnapshotChunk;
            fromJSON(object: any): _191.RequestLoadSnapshotChunk;
            toJSON(message: _191.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_191.RequestLoadSnapshotChunk>): _191.RequestLoadSnapshotChunk;
            fromAmino(object: _191.RequestLoadSnapshotChunkAmino): _191.RequestLoadSnapshotChunk;
            toAmino(message: _191.RequestLoadSnapshotChunk): _191.RequestLoadSnapshotChunkAmino;
        };
        RequestApplySnapshotChunk: {
            encode(message: _191.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestApplySnapshotChunk;
            fromJSON(object: any): _191.RequestApplySnapshotChunk;
            toJSON(message: _191.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_191.RequestApplySnapshotChunk>): _191.RequestApplySnapshotChunk;
            fromAmino(object: _191.RequestApplySnapshotChunkAmino): _191.RequestApplySnapshotChunk;
            toAmino(message: _191.RequestApplySnapshotChunk): _191.RequestApplySnapshotChunkAmino;
        };
        Response: {
            encode(message: _191.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.Response;
            fromJSON(object: any): _191.Response;
            toJSON(message: _191.Response): unknown;
            fromPartial(object: Partial<_191.Response>): _191.Response;
            fromAmino(object: _191.ResponseAmino): _191.Response;
            toAmino(message: _191.Response): _191.ResponseAmino;
        };
        ResponseException: {
            encode(message: _191.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseException;
            fromJSON(object: any): _191.ResponseException;
            toJSON(message: _191.ResponseException): unknown;
            fromPartial(object: Partial<_191.ResponseException>): _191.ResponseException;
            fromAmino(object: _191.ResponseExceptionAmino): _191.ResponseException;
            toAmino(message: _191.ResponseException): _191.ResponseExceptionAmino;
        };
        ResponseEcho: {
            encode(message: _191.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseEcho;
            fromJSON(object: any): _191.ResponseEcho;
            toJSON(message: _191.ResponseEcho): unknown;
            fromPartial(object: Partial<_191.ResponseEcho>): _191.ResponseEcho;
            fromAmino(object: _191.ResponseEchoAmino): _191.ResponseEcho;
            toAmino(message: _191.ResponseEcho): _191.ResponseEchoAmino;
        };
        ResponseFlush: {
            encode(_: _191.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseFlush;
            fromJSON(_: any): _191.ResponseFlush;
            toJSON(_: _191.ResponseFlush): unknown;
            fromPartial(_: Partial<_191.ResponseFlush>): _191.ResponseFlush;
            fromAmino(_: _191.ResponseFlushAmino): _191.ResponseFlush;
            toAmino(_: _191.ResponseFlush): _191.ResponseFlushAmino;
        };
        ResponseInfo: {
            encode(message: _191.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseInfo;
            fromJSON(object: any): _191.ResponseInfo;
            toJSON(message: _191.ResponseInfo): unknown;
            fromPartial(object: Partial<_191.ResponseInfo>): _191.ResponseInfo;
            fromAmino(object: _191.ResponseInfoAmino): _191.ResponseInfo;
            toAmino(message: _191.ResponseInfo): _191.ResponseInfoAmino;
        };
        ResponseSetOption: {
            encode(message: _191.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseSetOption;
            fromJSON(object: any): _191.ResponseSetOption;
            toJSON(message: _191.ResponseSetOption): unknown;
            fromPartial(object: Partial<_191.ResponseSetOption>): _191.ResponseSetOption;
            fromAmino(object: _191.ResponseSetOptionAmino): _191.ResponseSetOption;
            toAmino(message: _191.ResponseSetOption): _191.ResponseSetOptionAmino;
        };
        ResponseInitChain: {
            encode(message: _191.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseInitChain;
            fromJSON(object: any): _191.ResponseInitChain;
            toJSON(message: _191.ResponseInitChain): unknown;
            fromPartial(object: Partial<_191.ResponseInitChain>): _191.ResponseInitChain;
            fromAmino(object: _191.ResponseInitChainAmino): _191.ResponseInitChain;
            toAmino(message: _191.ResponseInitChain): _191.ResponseInitChainAmino;
        };
        ResponseQuery: {
            encode(message: _191.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseQuery;
            fromJSON(object: any): _191.ResponseQuery;
            toJSON(message: _191.ResponseQuery): unknown;
            fromPartial(object: Partial<_191.ResponseQuery>): _191.ResponseQuery;
            fromAmino(object: _191.ResponseQueryAmino): _191.ResponseQuery;
            toAmino(message: _191.ResponseQuery): _191.ResponseQueryAmino;
        };
        ResponseBeginBlock: {
            encode(message: _191.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseBeginBlock;
            fromJSON(object: any): _191.ResponseBeginBlock;
            toJSON(message: _191.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_191.ResponseBeginBlock>): _191.ResponseBeginBlock;
            fromAmino(object: _191.ResponseBeginBlockAmino): _191.ResponseBeginBlock;
            toAmino(message: _191.ResponseBeginBlock): _191.ResponseBeginBlockAmino;
        };
        ResponseCheckTx: {
            encode(message: _191.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseCheckTx;
            fromJSON(object: any): _191.ResponseCheckTx;
            toJSON(message: _191.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_191.ResponseCheckTx>): _191.ResponseCheckTx;
            fromAmino(object: _191.ResponseCheckTxAmino): _191.ResponseCheckTx;
            toAmino(message: _191.ResponseCheckTx): _191.ResponseCheckTxAmino;
        };
        ResponseDeliverTx: {
            encode(message: _191.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseDeliverTx;
            fromJSON(object: any): _191.ResponseDeliverTx;
            toJSON(message: _191.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_191.ResponseDeliverTx>): _191.ResponseDeliverTx;
            fromAmino(object: _191.ResponseDeliverTxAmino): _191.ResponseDeliverTx;
            toAmino(message: _191.ResponseDeliverTx): _191.ResponseDeliverTxAmino;
        };
        ResponseEndBlock: {
            encode(message: _191.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseEndBlock;
            fromJSON(object: any): _191.ResponseEndBlock;
            toJSON(message: _191.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_191.ResponseEndBlock>): _191.ResponseEndBlock;
            fromAmino(object: _191.ResponseEndBlockAmino): _191.ResponseEndBlock;
            toAmino(message: _191.ResponseEndBlock): _191.ResponseEndBlockAmino;
        };
        ResponseCommit: {
            encode(message: _191.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseCommit;
            fromJSON(object: any): _191.ResponseCommit;
            toJSON(message: _191.ResponseCommit): unknown;
            fromPartial(object: Partial<_191.ResponseCommit>): _191.ResponseCommit;
            fromAmino(object: _191.ResponseCommitAmino): _191.ResponseCommit;
            toAmino(message: _191.ResponseCommit): _191.ResponseCommitAmino;
        };
        ResponseListSnapshots: {
            encode(message: _191.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseListSnapshots;
            fromJSON(object: any): _191.ResponseListSnapshots;
            toJSON(message: _191.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_191.ResponseListSnapshots>): _191.ResponseListSnapshots;
            fromAmino(object: _191.ResponseListSnapshotsAmino): _191.ResponseListSnapshots;
            toAmino(message: _191.ResponseListSnapshots): _191.ResponseListSnapshotsAmino;
        };
        ResponseOfferSnapshot: {
            encode(message: _191.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseOfferSnapshot;
            fromJSON(object: any): _191.ResponseOfferSnapshot;
            toJSON(message: _191.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_191.ResponseOfferSnapshot>): _191.ResponseOfferSnapshot;
            fromAmino(object: _191.ResponseOfferSnapshotAmino): _191.ResponseOfferSnapshot;
            toAmino(message: _191.ResponseOfferSnapshot): _191.ResponseOfferSnapshotAmino;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _191.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _191.ResponseLoadSnapshotChunk;
            toJSON(message: _191.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_191.ResponseLoadSnapshotChunk>): _191.ResponseLoadSnapshotChunk;
            fromAmino(object: _191.ResponseLoadSnapshotChunkAmino): _191.ResponseLoadSnapshotChunk;
            toAmino(message: _191.ResponseLoadSnapshotChunk): _191.ResponseLoadSnapshotChunkAmino;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _191.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseApplySnapshotChunk;
            fromJSON(object: any): _191.ResponseApplySnapshotChunk;
            toJSON(message: _191.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_191.ResponseApplySnapshotChunk>): _191.ResponseApplySnapshotChunk;
            fromAmino(object: _191.ResponseApplySnapshotChunkAmino): _191.ResponseApplySnapshotChunk;
            toAmino(message: _191.ResponseApplySnapshotChunk): _191.ResponseApplySnapshotChunkAmino;
        };
        ConsensusParams: {
            encode(message: _191.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ConsensusParams;
            fromJSON(object: any): _191.ConsensusParams;
            toJSON(message: _191.ConsensusParams): unknown;
            fromPartial(object: Partial<_191.ConsensusParams>): _191.ConsensusParams;
            fromAmino(object: _191.ConsensusParamsAmino): _191.ConsensusParams;
            toAmino(message: _191.ConsensusParams): _191.ConsensusParamsAmino;
        };
        BlockParams: {
            encode(message: _191.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.BlockParams;
            fromJSON(object: any): _191.BlockParams;
            toJSON(message: _191.BlockParams): unknown;
            fromPartial(object: Partial<_191.BlockParams>): _191.BlockParams;
            fromAmino(object: _191.BlockParamsAmino): _191.BlockParams;
            toAmino(message: _191.BlockParams): _191.BlockParamsAmino;
        };
        LastCommitInfo: {
            encode(message: _191.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.LastCommitInfo;
            fromJSON(object: any): _191.LastCommitInfo;
            toJSON(message: _191.LastCommitInfo): unknown;
            fromPartial(object: Partial<_191.LastCommitInfo>): _191.LastCommitInfo;
            fromAmino(object: _191.LastCommitInfoAmino): _191.LastCommitInfo;
            toAmino(message: _191.LastCommitInfo): _191.LastCommitInfoAmino;
        };
        Event: {
            encode(message: _191.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.Event;
            fromJSON(object: any): _191.Event;
            toJSON(message: _191.Event): unknown;
            fromPartial(object: Partial<_191.Event>): _191.Event;
            fromAmino(object: _191.EventAmino): _191.Event;
            toAmino(message: _191.Event): _191.EventAmino;
        };
        EventAttribute: {
            encode(message: _191.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.EventAttribute;
            fromJSON(object: any): _191.EventAttribute;
            toJSON(message: _191.EventAttribute): unknown;
            fromPartial(object: Partial<_191.EventAttribute>): _191.EventAttribute;
            fromAmino(object: _191.EventAttributeAmino): _191.EventAttribute;
            toAmino(message: _191.EventAttribute): _191.EventAttributeAmino;
        };
        TxResult: {
            encode(message: _191.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.TxResult;
            fromJSON(object: any): _191.TxResult;
            toJSON(message: _191.TxResult): unknown;
            fromPartial(object: Partial<_191.TxResult>): _191.TxResult;
            fromAmino(object: _191.TxResultAmino): _191.TxResult;
            toAmino(message: _191.TxResult): _191.TxResultAmino;
        };
        Validator: {
            encode(message: _191.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.Validator;
            fromJSON(object: any): _191.Validator;
            toJSON(message: _191.Validator): unknown;
            fromPartial(object: Partial<_191.Validator>): _191.Validator;
            fromAmino(object: _191.ValidatorAmino): _191.Validator;
            toAmino(message: _191.Validator): _191.ValidatorAmino;
        };
        ValidatorUpdate: {
            encode(message: _191.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ValidatorUpdate;
            fromJSON(object: any): _191.ValidatorUpdate;
            toJSON(message: _191.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_191.ValidatorUpdate>): _191.ValidatorUpdate;
            fromAmino(object: _191.ValidatorUpdateAmino): _191.ValidatorUpdate;
            toAmino(message: _191.ValidatorUpdate): _191.ValidatorUpdateAmino;
        };
        VoteInfo: {
            encode(message: _191.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.VoteInfo;
            fromJSON(object: any): _191.VoteInfo;
            toJSON(message: _191.VoteInfo): unknown;
            fromPartial(object: Partial<_191.VoteInfo>): _191.VoteInfo;
            fromAmino(object: _191.VoteInfoAmino): _191.VoteInfo;
            toAmino(message: _191.VoteInfo): _191.VoteInfoAmino;
        };
        Evidence: {
            encode(message: _191.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.Evidence;
            fromJSON(object: any): _191.Evidence;
            toJSON(message: _191.Evidence): unknown;
            fromPartial(object: Partial<_191.Evidence>): _191.Evidence;
            fromAmino(object: _191.EvidenceAmino): _191.Evidence;
            toAmino(message: _191.Evidence): _191.EvidenceAmino;
        };
        Snapshot: {
            encode(message: _191.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.Snapshot;
            fromJSON(object: any): _191.Snapshot;
            toJSON(message: _191.Snapshot): unknown;
            fromPartial(object: Partial<_191.Snapshot>): _191.Snapshot;
            fromAmino(object: _191.SnapshotAmino): _191.Snapshot;
            toAmino(message: _191.Snapshot): _191.SnapshotAmino;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _193.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.Proof;
            fromJSON(object: any): _193.Proof;
            toJSON(message: _193.Proof): unknown;
            fromPartial(object: Partial<_193.Proof>): _193.Proof;
            fromAmino(object: _193.ProofAmino): _193.Proof;
            toAmino(message: _193.Proof): _193.ProofAmino;
        };
        ValueOp: {
            encode(message: _193.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.ValueOp;
            fromJSON(object: any): _193.ValueOp;
            toJSON(message: _193.ValueOp): unknown;
            fromPartial(object: Partial<_193.ValueOp>): _193.ValueOp;
            fromAmino(object: _193.ValueOpAmino): _193.ValueOp;
            toAmino(message: _193.ValueOp): _193.ValueOpAmino;
        };
        DominoOp: {
            encode(message: _193.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.DominoOp;
            fromJSON(object: any): _193.DominoOp;
            toJSON(message: _193.DominoOp): unknown;
            fromPartial(object: Partial<_193.DominoOp>): _193.DominoOp;
            fromAmino(object: _193.DominoOpAmino): _193.DominoOp;
            toAmino(message: _193.DominoOp): _193.DominoOpAmino;
        };
        ProofOp: {
            encode(message: _193.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.ProofOp;
            fromJSON(object: any): _193.ProofOp;
            toJSON(message: _193.ProofOp): unknown;
            fromPartial(object: Partial<_193.ProofOp>): _193.ProofOp;
            fromAmino(object: _193.ProofOpAmino): _193.ProofOp;
            toAmino(message: _193.ProofOp): _193.ProofOpAmino;
        };
        ProofOps: {
            encode(message: _193.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.ProofOps;
            fromJSON(object: any): _193.ProofOps;
            toJSON(message: _193.ProofOps): unknown;
            fromPartial(object: Partial<_193.ProofOps>): _193.ProofOps;
            fromAmino(object: _193.ProofOpsAmino): _193.ProofOps;
            toAmino(message: _193.ProofOps): _193.ProofOpsAmino;
        };
        PublicKey: {
            encode(message: _192.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.PublicKey;
            fromJSON(object: any): _192.PublicKey;
            toJSON(message: _192.PublicKey): unknown;
            fromPartial(object: Partial<_192.PublicKey>): _192.PublicKey;
            fromAmino(object: _192.PublicKeyAmino): _192.PublicKey;
            toAmino(message: _192.PublicKey): _192.PublicKeyAmino;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _194.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.BitArray;
                fromJSON(object: any): _194.BitArray;
                toJSON(message: _194.BitArray): unknown;
                fromPartial(object: Partial<_194.BitArray>): _194.BitArray;
                fromAmino(object: _194.BitArrayAmino): _194.BitArray;
                toAmino(message: _194.BitArray): _194.BitArrayAmino;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _195.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.ProtocolVersion;
            fromJSON(object: any): _195.ProtocolVersion;
            toJSON(message: _195.ProtocolVersion): unknown;
            fromPartial(object: Partial<_195.ProtocolVersion>): _195.ProtocolVersion;
            fromAmino(object: _195.ProtocolVersionAmino): _195.ProtocolVersion;
            toAmino(message: _195.ProtocolVersion): _195.ProtocolVersionAmino;
        };
        NodeInfo: {
            encode(message: _195.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.NodeInfo;
            fromJSON(object: any): _195.NodeInfo;
            toJSON(message: _195.NodeInfo): unknown;
            fromPartial(object: Partial<_195.NodeInfo>): _195.NodeInfo;
            fromAmino(object: _195.NodeInfoAmino): _195.NodeInfo;
            toAmino(message: _195.NodeInfo): _195.NodeInfoAmino;
        };
        NodeInfoOther: {
            encode(message: _195.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.NodeInfoOther;
            fromJSON(object: any): _195.NodeInfoOther;
            toJSON(message: _195.NodeInfoOther): unknown;
            fromPartial(object: Partial<_195.NodeInfoOther>): _195.NodeInfoOther;
            fromAmino(object: _195.NodeInfoOtherAmino): _195.NodeInfoOther;
            toAmino(message: _195.NodeInfoOther): _195.NodeInfoOtherAmino;
        };
        PeerInfo: {
            encode(message: _195.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.PeerInfo;
            fromJSON(object: any): _195.PeerInfo;
            toJSON(message: _195.PeerInfo): unknown;
            fromPartial(object: Partial<_195.PeerInfo>): _195.PeerInfo;
            fromAmino(object: _195.PeerInfoAmino): _195.PeerInfo;
            toAmino(message: _195.PeerInfo): _195.PeerInfoAmino;
        };
        PeerAddressInfo: {
            encode(message: _195.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.PeerAddressInfo;
            fromJSON(object: any): _195.PeerAddressInfo;
            toJSON(message: _195.PeerAddressInfo): unknown;
            fromPartial(object: Partial<_195.PeerAddressInfo>): _195.PeerAddressInfo;
            fromAmino(object: _195.PeerAddressInfoAmino): _195.PeerAddressInfo;
            toAmino(message: _195.PeerAddressInfo): _195.PeerAddressInfoAmino;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _200.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.ValidatorSet;
            fromJSON(object: any): _200.ValidatorSet;
            toJSON(message: _200.ValidatorSet): unknown;
            fromPartial(object: Partial<_200.ValidatorSet>): _200.ValidatorSet;
            fromAmino(object: _200.ValidatorSetAmino): _200.ValidatorSet;
            toAmino(message: _200.ValidatorSet): _200.ValidatorSetAmino;
        };
        Validator: {
            encode(message: _200.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.Validator;
            fromJSON(object: any): _200.Validator;
            toJSON(message: _200.Validator): unknown;
            fromPartial(object: Partial<_200.Validator>): _200.Validator;
            fromAmino(object: _200.ValidatorAmino): _200.Validator;
            toAmino(message: _200.Validator): _200.ValidatorAmino;
        };
        SimpleValidator: {
            encode(message: _200.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.SimpleValidator;
            fromJSON(object: any): _200.SimpleValidator;
            toJSON(message: _200.SimpleValidator): unknown;
            fromPartial(object: Partial<_200.SimpleValidator>): _200.SimpleValidator;
            fromAmino(object: _200.SimpleValidatorAmino): _200.SimpleValidator;
            toAmino(message: _200.SimpleValidator): _200.SimpleValidatorAmino;
        };
        blockIDFlagFromJSON(object: any): _199.BlockIDFlag;
        blockIDFlagToJSON(object: _199.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _199.SignedMsgType;
        signedMsgTypeToJSON(object: _199.SignedMsgType): string;
        BlockIDFlag: typeof _199.BlockIDFlag;
        BlockIDFlagSDKType: typeof _199.BlockIDFlag;
        BlockIDFlagAmino: typeof _199.BlockIDFlag;
        SignedMsgType: typeof _199.SignedMsgType;
        SignedMsgTypeSDKType: typeof _199.SignedMsgType;
        SignedMsgTypeAmino: typeof _199.SignedMsgType;
        PartSetHeader: {
            encode(message: _199.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.PartSetHeader;
            fromJSON(object: any): _199.PartSetHeader;
            toJSON(message: _199.PartSetHeader): unknown;
            fromPartial(object: Partial<_199.PartSetHeader>): _199.PartSetHeader;
            fromAmino(object: _199.PartSetHeaderAmino): _199.PartSetHeader;
            toAmino(message: _199.PartSetHeader): _199.PartSetHeaderAmino;
        };
        Part: {
            encode(message: _199.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.Part;
            fromJSON(object: any): _199.Part;
            toJSON(message: _199.Part): unknown;
            fromPartial(object: Partial<_199.Part>): _199.Part;
            fromAmino(object: _199.PartAmino): _199.Part;
            toAmino(message: _199.Part): _199.PartAmino;
        };
        BlockID: {
            encode(message: _199.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.BlockID;
            fromJSON(object: any): _199.BlockID;
            toJSON(message: _199.BlockID): unknown;
            fromPartial(object: Partial<_199.BlockID>): _199.BlockID;
            fromAmino(object: _199.BlockIDAmino): _199.BlockID;
            toAmino(message: _199.BlockID): _199.BlockIDAmino;
        };
        Header: {
            encode(message: _199.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.Header;
            fromJSON(object: any): _199.Header;
            toJSON(message: _199.Header): unknown;
            fromPartial(object: Partial<_199.Header>): _199.Header;
            fromAmino(object: _199.HeaderAmino): _199.Header;
            toAmino(message: _199.Header): _199.HeaderAmino;
        };
        Data: {
            encode(message: _199.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.Data;
            fromJSON(object: any): _199.Data;
            toJSON(message: _199.Data): unknown;
            fromPartial(object: Partial<_199.Data>): _199.Data;
            fromAmino(object: _199.DataAmino): _199.Data;
            toAmino(message: _199.Data): _199.DataAmino;
        };
        Vote: {
            encode(message: _199.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.Vote;
            fromJSON(object: any): _199.Vote;
            toJSON(message: _199.Vote): unknown;
            fromPartial(object: Partial<_199.Vote>): _199.Vote;
            fromAmino(object: _199.VoteAmino): _199.Vote;
            toAmino(message: _199.Vote): _199.VoteAmino;
        };
        Commit: {
            encode(message: _199.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.Commit;
            fromJSON(object: any): _199.Commit;
            toJSON(message: _199.Commit): unknown;
            fromPartial(object: Partial<_199.Commit>): _199.Commit;
            fromAmino(object: _199.CommitAmino): _199.Commit;
            toAmino(message: _199.Commit): _199.CommitAmino;
        };
        CommitSig: {
            encode(message: _199.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.CommitSig;
            fromJSON(object: any): _199.CommitSig;
            toJSON(message: _199.CommitSig): unknown;
            fromPartial(object: Partial<_199.CommitSig>): _199.CommitSig;
            fromAmino(object: _199.CommitSigAmino): _199.CommitSig;
            toAmino(message: _199.CommitSig): _199.CommitSigAmino;
        };
        Proposal: {
            encode(message: _199.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.Proposal;
            fromJSON(object: any): _199.Proposal;
            toJSON(message: _199.Proposal): unknown;
            fromPartial(object: Partial<_199.Proposal>): _199.Proposal;
            fromAmino(object: _199.ProposalAmino): _199.Proposal;
            toAmino(message: _199.Proposal): _199.ProposalAmino;
        };
        SignedHeader: {
            encode(message: _199.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.SignedHeader;
            fromJSON(object: any): _199.SignedHeader;
            toJSON(message: _199.SignedHeader): unknown;
            fromPartial(object: Partial<_199.SignedHeader>): _199.SignedHeader;
            fromAmino(object: _199.SignedHeaderAmino): _199.SignedHeader;
            toAmino(message: _199.SignedHeader): _199.SignedHeaderAmino;
        };
        LightBlock: {
            encode(message: _199.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.LightBlock;
            fromJSON(object: any): _199.LightBlock;
            toJSON(message: _199.LightBlock): unknown;
            fromPartial(object: Partial<_199.LightBlock>): _199.LightBlock;
            fromAmino(object: _199.LightBlockAmino): _199.LightBlock;
            toAmino(message: _199.LightBlock): _199.LightBlockAmino;
        };
        BlockMeta: {
            encode(message: _199.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.BlockMeta;
            fromJSON(object: any): _199.BlockMeta;
            toJSON(message: _199.BlockMeta): unknown;
            fromPartial(object: Partial<_199.BlockMeta>): _199.BlockMeta;
            fromAmino(object: _199.BlockMetaAmino): _199.BlockMeta;
            toAmino(message: _199.BlockMeta): _199.BlockMetaAmino;
        };
        TxProof: {
            encode(message: _199.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.TxProof;
            fromJSON(object: any): _199.TxProof;
            toJSON(message: _199.TxProof): unknown;
            fromPartial(object: Partial<_199.TxProof>): _199.TxProof;
            fromAmino(object: _199.TxProofAmino): _199.TxProof;
            toAmino(message: _199.TxProof): _199.TxProofAmino;
        };
        ConsensusParams: {
            encode(message: _198.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.ConsensusParams;
            fromJSON(object: any): _198.ConsensusParams;
            toJSON(message: _198.ConsensusParams): unknown;
            fromPartial(object: Partial<_198.ConsensusParams>): _198.ConsensusParams;
            fromAmino(object: _198.ConsensusParamsAmino): _198.ConsensusParams;
            toAmino(message: _198.ConsensusParams): _198.ConsensusParamsAmino;
        };
        BlockParams: {
            encode(message: _198.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.BlockParams;
            fromJSON(object: any): _198.BlockParams;
            toJSON(message: _198.BlockParams): unknown;
            fromPartial(object: Partial<_198.BlockParams>): _198.BlockParams;
            fromAmino(object: _198.BlockParamsAmino): _198.BlockParams;
            toAmino(message: _198.BlockParams): _198.BlockParamsAmino;
        };
        EvidenceParams: {
            encode(message: _198.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.EvidenceParams;
            fromJSON(object: any): _198.EvidenceParams;
            toJSON(message: _198.EvidenceParams): unknown;
            fromPartial(object: Partial<_198.EvidenceParams>): _198.EvidenceParams;
            fromAmino(object: _198.EvidenceParamsAmino): _198.EvidenceParams;
            toAmino(message: _198.EvidenceParams): _198.EvidenceParamsAmino;
        };
        ValidatorParams: {
            encode(message: _198.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.ValidatorParams;
            fromJSON(object: any): _198.ValidatorParams;
            toJSON(message: _198.ValidatorParams): unknown;
            fromPartial(object: Partial<_198.ValidatorParams>): _198.ValidatorParams;
            fromAmino(object: _198.ValidatorParamsAmino): _198.ValidatorParams;
            toAmino(message: _198.ValidatorParams): _198.ValidatorParamsAmino;
        };
        VersionParams: {
            encode(message: _198.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.VersionParams;
            fromJSON(object: any): _198.VersionParams;
            toJSON(message: _198.VersionParams): unknown;
            fromPartial(object: Partial<_198.VersionParams>): _198.VersionParams;
            fromAmino(object: _198.VersionParamsAmino): _198.VersionParams;
            toAmino(message: _198.VersionParams): _198.VersionParamsAmino;
        };
        HashedParams: {
            encode(message: _198.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.HashedParams;
            fromJSON(object: any): _198.HashedParams;
            toJSON(message: _198.HashedParams): unknown;
            fromPartial(object: Partial<_198.HashedParams>): _198.HashedParams;
            fromAmino(object: _198.HashedParamsAmino): _198.HashedParams;
            toAmino(message: _198.HashedParams): _198.HashedParamsAmino;
        };
        Evidence: {
            encode(message: _197.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.Evidence;
            fromJSON(object: any): _197.Evidence;
            toJSON(message: _197.Evidence): unknown;
            fromPartial(object: Partial<_197.Evidence>): _197.Evidence;
            fromAmino(object: _197.EvidenceAmino): _197.Evidence;
            toAmino(message: _197.Evidence): _197.EvidenceAmino;
        };
        DuplicateVoteEvidence: {
            encode(message: _197.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.DuplicateVoteEvidence;
            fromJSON(object: any): _197.DuplicateVoteEvidence;
            toJSON(message: _197.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_197.DuplicateVoteEvidence>): _197.DuplicateVoteEvidence;
            fromAmino(object: _197.DuplicateVoteEvidenceAmino): _197.DuplicateVoteEvidence;
            toAmino(message: _197.DuplicateVoteEvidence): _197.DuplicateVoteEvidenceAmino;
        };
        LightClientAttackEvidence: {
            encode(message: _197.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.LightClientAttackEvidence;
            fromJSON(object: any): _197.LightClientAttackEvidence;
            toJSON(message: _197.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_197.LightClientAttackEvidence>): _197.LightClientAttackEvidence;
            fromAmino(object: _197.LightClientAttackEvidenceAmino): _197.LightClientAttackEvidence;
            toAmino(message: _197.LightClientAttackEvidence): _197.LightClientAttackEvidenceAmino;
        };
        EvidenceList: {
            encode(message: _197.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.EvidenceList;
            fromJSON(object: any): _197.EvidenceList;
            toJSON(message: _197.EvidenceList): unknown;
            fromPartial(object: Partial<_197.EvidenceList>): _197.EvidenceList;
            fromAmino(object: _197.EvidenceListAmino): _197.EvidenceList;
            toAmino(message: _197.EvidenceList): _197.EvidenceListAmino;
        };
        Block: {
            encode(message: _196.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.Block;
            fromJSON(object: any): _196.Block;
            toJSON(message: _196.Block): unknown;
            fromPartial(object: Partial<_196.Block>): _196.Block;
            fromAmino(object: _196.BlockAmino): _196.Block;
            toAmino(message: _196.Block): _196.BlockAmino;
        };
    };
    const version: {
        App: {
            encode(message: _201.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.App;
            fromJSON(object: any): _201.App;
            toJSON(message: _201.App): unknown;
            fromPartial(object: Partial<_201.App>): _201.App;
            fromAmino(object: _201.AppAmino): _201.App;
            toAmino(message: _201.App): _201.AppAmino;
        };
        Consensus: {
            encode(message: _201.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.Consensus;
            fromJSON(object: any): _201.Consensus;
            toJSON(message: _201.Consensus): unknown;
            fromPartial(object: Partial<_201.Consensus>): _201.Consensus;
            fromAmino(object: _201.ConsensusAmino): _201.Consensus;
            toAmino(message: _201.Consensus): _201.ConsensusAmino;
        };
    };
}

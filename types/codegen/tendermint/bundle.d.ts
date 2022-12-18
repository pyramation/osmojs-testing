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
        ResponseOfferSnapshot_Result: typeof _191.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _191.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _191.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _191.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _191.EvidenceType;
        EvidenceTypeSDKType: typeof _191.EvidenceType;
        Request: {
            encode(message: _191.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.Request;
            fromJSON(object: any): _191.Request;
            toJSON(message: _191.Request): unknown;
            fromPartial(object: Partial<_191.Request>): _191.Request;
        };
        RequestEcho: {
            encode(message: _191.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestEcho;
            fromJSON(object: any): _191.RequestEcho;
            toJSON(message: _191.RequestEcho): unknown;
            fromPartial(object: Partial<_191.RequestEcho>): _191.RequestEcho;
        };
        RequestFlush: {
            encode(_: _191.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestFlush;
            fromJSON(_: any): _191.RequestFlush;
            toJSON(_: _191.RequestFlush): unknown;
            fromPartial(_: Partial<_191.RequestFlush>): _191.RequestFlush;
        };
        RequestInfo: {
            encode(message: _191.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestInfo;
            fromJSON(object: any): _191.RequestInfo;
            toJSON(message: _191.RequestInfo): unknown;
            fromPartial(object: Partial<_191.RequestInfo>): _191.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _191.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestSetOption;
            fromJSON(object: any): _191.RequestSetOption;
            toJSON(message: _191.RequestSetOption): unknown;
            fromPartial(object: Partial<_191.RequestSetOption>): _191.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _191.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestInitChain;
            fromJSON(object: any): _191.RequestInitChain;
            toJSON(message: _191.RequestInitChain): unknown;
            fromPartial(object: Partial<_191.RequestInitChain>): _191.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _191.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestQuery;
            fromJSON(object: any): _191.RequestQuery;
            toJSON(message: _191.RequestQuery): unknown;
            fromPartial(object: Partial<_191.RequestQuery>): _191.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _191.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestBeginBlock;
            fromJSON(object: any): _191.RequestBeginBlock;
            toJSON(message: _191.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_191.RequestBeginBlock>): _191.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _191.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestCheckTx;
            fromJSON(object: any): _191.RequestCheckTx;
            toJSON(message: _191.RequestCheckTx): unknown;
            fromPartial(object: Partial<_191.RequestCheckTx>): _191.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _191.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestDeliverTx;
            fromJSON(object: any): _191.RequestDeliverTx;
            toJSON(message: _191.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_191.RequestDeliverTx>): _191.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _191.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestEndBlock;
            fromJSON(object: any): _191.RequestEndBlock;
            toJSON(message: _191.RequestEndBlock): unknown;
            fromPartial(object: Partial<_191.RequestEndBlock>): _191.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _191.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestCommit;
            fromJSON(_: any): _191.RequestCommit;
            toJSON(_: _191.RequestCommit): unknown;
            fromPartial(_: Partial<_191.RequestCommit>): _191.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _191.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestListSnapshots;
            fromJSON(_: any): _191.RequestListSnapshots;
            toJSON(_: _191.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_191.RequestListSnapshots>): _191.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _191.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestOfferSnapshot;
            fromJSON(object: any): _191.RequestOfferSnapshot;
            toJSON(message: _191.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_191.RequestOfferSnapshot>): _191.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _191.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestLoadSnapshotChunk;
            fromJSON(object: any): _191.RequestLoadSnapshotChunk;
            toJSON(message: _191.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_191.RequestLoadSnapshotChunk>): _191.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _191.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RequestApplySnapshotChunk;
            fromJSON(object: any): _191.RequestApplySnapshotChunk;
            toJSON(message: _191.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_191.RequestApplySnapshotChunk>): _191.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _191.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.Response;
            fromJSON(object: any): _191.Response;
            toJSON(message: _191.Response): unknown;
            fromPartial(object: Partial<_191.Response>): _191.Response;
        };
        ResponseException: {
            encode(message: _191.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseException;
            fromJSON(object: any): _191.ResponseException;
            toJSON(message: _191.ResponseException): unknown;
            fromPartial(object: Partial<_191.ResponseException>): _191.ResponseException;
        };
        ResponseEcho: {
            encode(message: _191.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseEcho;
            fromJSON(object: any): _191.ResponseEcho;
            toJSON(message: _191.ResponseEcho): unknown;
            fromPartial(object: Partial<_191.ResponseEcho>): _191.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _191.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseFlush;
            fromJSON(_: any): _191.ResponseFlush;
            toJSON(_: _191.ResponseFlush): unknown;
            fromPartial(_: Partial<_191.ResponseFlush>): _191.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _191.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseInfo;
            fromJSON(object: any): _191.ResponseInfo;
            toJSON(message: _191.ResponseInfo): unknown;
            fromPartial(object: Partial<_191.ResponseInfo>): _191.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _191.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseSetOption;
            fromJSON(object: any): _191.ResponseSetOption;
            toJSON(message: _191.ResponseSetOption): unknown;
            fromPartial(object: Partial<_191.ResponseSetOption>): _191.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _191.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseInitChain;
            fromJSON(object: any): _191.ResponseInitChain;
            toJSON(message: _191.ResponseInitChain): unknown;
            fromPartial(object: Partial<_191.ResponseInitChain>): _191.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _191.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseQuery;
            fromJSON(object: any): _191.ResponseQuery;
            toJSON(message: _191.ResponseQuery): unknown;
            fromPartial(object: Partial<_191.ResponseQuery>): _191.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _191.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseBeginBlock;
            fromJSON(object: any): _191.ResponseBeginBlock;
            toJSON(message: _191.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_191.ResponseBeginBlock>): _191.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _191.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseCheckTx;
            fromJSON(object: any): _191.ResponseCheckTx;
            toJSON(message: _191.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_191.ResponseCheckTx>): _191.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _191.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseDeliverTx;
            fromJSON(object: any): _191.ResponseDeliverTx;
            toJSON(message: _191.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_191.ResponseDeliverTx>): _191.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _191.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseEndBlock;
            fromJSON(object: any): _191.ResponseEndBlock;
            toJSON(message: _191.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_191.ResponseEndBlock>): _191.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _191.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseCommit;
            fromJSON(object: any): _191.ResponseCommit;
            toJSON(message: _191.ResponseCommit): unknown;
            fromPartial(object: Partial<_191.ResponseCommit>): _191.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _191.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseListSnapshots;
            fromJSON(object: any): _191.ResponseListSnapshots;
            toJSON(message: _191.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_191.ResponseListSnapshots>): _191.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _191.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseOfferSnapshot;
            fromJSON(object: any): _191.ResponseOfferSnapshot;
            toJSON(message: _191.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_191.ResponseOfferSnapshot>): _191.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _191.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _191.ResponseLoadSnapshotChunk;
            toJSON(message: _191.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_191.ResponseLoadSnapshotChunk>): _191.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _191.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ResponseApplySnapshotChunk;
            fromJSON(object: any): _191.ResponseApplySnapshotChunk;
            toJSON(message: _191.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_191.ResponseApplySnapshotChunk>): _191.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _191.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ConsensusParams;
            fromJSON(object: any): _191.ConsensusParams;
            toJSON(message: _191.ConsensusParams): unknown;
            fromPartial(object: Partial<_191.ConsensusParams>): _191.ConsensusParams;
        };
        BlockParams: {
            encode(message: _191.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.BlockParams;
            fromJSON(object: any): _191.BlockParams;
            toJSON(message: _191.BlockParams): unknown;
            fromPartial(object: Partial<_191.BlockParams>): _191.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _191.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.LastCommitInfo;
            fromJSON(object: any): _191.LastCommitInfo;
            toJSON(message: _191.LastCommitInfo): unknown;
            fromPartial(object: Partial<_191.LastCommitInfo>): _191.LastCommitInfo;
        };
        Event: {
            encode(message: _191.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.Event;
            fromJSON(object: any): _191.Event;
            toJSON(message: _191.Event): unknown;
            fromPartial(object: Partial<_191.Event>): _191.Event;
        };
        EventAttribute: {
            encode(message: _191.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.EventAttribute;
            fromJSON(object: any): _191.EventAttribute;
            toJSON(message: _191.EventAttribute): unknown;
            fromPartial(object: Partial<_191.EventAttribute>): _191.EventAttribute;
        };
        TxResult: {
            encode(message: _191.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.TxResult;
            fromJSON(object: any): _191.TxResult;
            toJSON(message: _191.TxResult): unknown;
            fromPartial(object: Partial<_191.TxResult>): _191.TxResult;
        };
        Validator: {
            encode(message: _191.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.Validator;
            fromJSON(object: any): _191.Validator;
            toJSON(message: _191.Validator): unknown;
            fromPartial(object: Partial<_191.Validator>): _191.Validator;
        };
        ValidatorUpdate: {
            encode(message: _191.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.ValidatorUpdate;
            fromJSON(object: any): _191.ValidatorUpdate;
            toJSON(message: _191.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_191.ValidatorUpdate>): _191.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _191.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.VoteInfo;
            fromJSON(object: any): _191.VoteInfo;
            toJSON(message: _191.VoteInfo): unknown;
            fromPartial(object: Partial<_191.VoteInfo>): _191.VoteInfo;
        };
        Evidence: {
            encode(message: _191.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.Evidence;
            fromJSON(object: any): _191.Evidence;
            toJSON(message: _191.Evidence): unknown;
            fromPartial(object: Partial<_191.Evidence>): _191.Evidence;
        };
        Snapshot: {
            encode(message: _191.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.Snapshot;
            fromJSON(object: any): _191.Snapshot;
            toJSON(message: _191.Snapshot): unknown;
            fromPartial(object: Partial<_191.Snapshot>): _191.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _193.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.Proof;
            fromJSON(object: any): _193.Proof;
            toJSON(message: _193.Proof): unknown;
            fromPartial(object: Partial<_193.Proof>): _193.Proof;
        };
        ValueOp: {
            encode(message: _193.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.ValueOp;
            fromJSON(object: any): _193.ValueOp;
            toJSON(message: _193.ValueOp): unknown;
            fromPartial(object: Partial<_193.ValueOp>): _193.ValueOp;
        };
        DominoOp: {
            encode(message: _193.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.DominoOp;
            fromJSON(object: any): _193.DominoOp;
            toJSON(message: _193.DominoOp): unknown;
            fromPartial(object: Partial<_193.DominoOp>): _193.DominoOp;
        };
        ProofOp: {
            encode(message: _193.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.ProofOp;
            fromJSON(object: any): _193.ProofOp;
            toJSON(message: _193.ProofOp): unknown;
            fromPartial(object: Partial<_193.ProofOp>): _193.ProofOp;
        };
        ProofOps: {
            encode(message: _193.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.ProofOps;
            fromJSON(object: any): _193.ProofOps;
            toJSON(message: _193.ProofOps): unknown;
            fromPartial(object: Partial<_193.ProofOps>): _193.ProofOps;
        };
        PublicKey: {
            encode(message: _192.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.PublicKey;
            fromJSON(object: any): _192.PublicKey;
            toJSON(message: _192.PublicKey): unknown;
            fromPartial(object: Partial<_192.PublicKey>): _192.PublicKey;
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
        };
        NodeInfo: {
            encode(message: _195.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.NodeInfo;
            fromJSON(object: any): _195.NodeInfo;
            toJSON(message: _195.NodeInfo): unknown;
            fromPartial(object: Partial<_195.NodeInfo>): _195.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _195.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.NodeInfoOther;
            fromJSON(object: any): _195.NodeInfoOther;
            toJSON(message: _195.NodeInfoOther): unknown;
            fromPartial(object: Partial<_195.NodeInfoOther>): _195.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _195.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.PeerInfo;
            fromJSON(object: any): _195.PeerInfo;
            toJSON(message: _195.PeerInfo): unknown;
            fromPartial(object: Partial<_195.PeerInfo>): _195.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _195.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.PeerAddressInfo;
            fromJSON(object: any): _195.PeerAddressInfo;
            toJSON(message: _195.PeerAddressInfo): unknown;
            fromPartial(object: Partial<_195.PeerAddressInfo>): _195.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _200.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.ValidatorSet;
            fromJSON(object: any): _200.ValidatorSet;
            toJSON(message: _200.ValidatorSet): unknown;
            fromPartial(object: Partial<_200.ValidatorSet>): _200.ValidatorSet;
        };
        Validator: {
            encode(message: _200.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.Validator;
            fromJSON(object: any): _200.Validator;
            toJSON(message: _200.Validator): unknown;
            fromPartial(object: Partial<_200.Validator>): _200.Validator;
        };
        SimpleValidator: {
            encode(message: _200.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.SimpleValidator;
            fromJSON(object: any): _200.SimpleValidator;
            toJSON(message: _200.SimpleValidator): unknown;
            fromPartial(object: Partial<_200.SimpleValidator>): _200.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _199.BlockIDFlag;
        blockIDFlagToJSON(object: _199.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _199.SignedMsgType;
        signedMsgTypeToJSON(object: _199.SignedMsgType): string;
        BlockIDFlag: typeof _199.BlockIDFlag;
        BlockIDFlagSDKType: typeof _199.BlockIDFlag;
        SignedMsgType: typeof _199.SignedMsgType;
        SignedMsgTypeSDKType: typeof _199.SignedMsgType;
        PartSetHeader: {
            encode(message: _199.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.PartSetHeader;
            fromJSON(object: any): _199.PartSetHeader;
            toJSON(message: _199.PartSetHeader): unknown;
            fromPartial(object: Partial<_199.PartSetHeader>): _199.PartSetHeader;
        };
        Part: {
            encode(message: _199.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.Part;
            fromJSON(object: any): _199.Part;
            toJSON(message: _199.Part): unknown;
            fromPartial(object: Partial<_199.Part>): _199.Part;
        };
        BlockID: {
            encode(message: _199.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.BlockID;
            fromJSON(object: any): _199.BlockID;
            toJSON(message: _199.BlockID): unknown;
            fromPartial(object: Partial<_199.BlockID>): _199.BlockID;
        };
        Header: {
            encode(message: _199.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.Header;
            fromJSON(object: any): _199.Header;
            toJSON(message: _199.Header): unknown;
            fromPartial(object: Partial<_199.Header>): _199.Header;
        };
        Data: {
            encode(message: _199.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.Data;
            fromJSON(object: any): _199.Data;
            toJSON(message: _199.Data): unknown;
            fromPartial(object: Partial<_199.Data>): _199.Data;
        };
        Vote: {
            encode(message: _199.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.Vote;
            fromJSON(object: any): _199.Vote;
            toJSON(message: _199.Vote): unknown;
            fromPartial(object: Partial<_199.Vote>): _199.Vote;
        };
        Commit: {
            encode(message: _199.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.Commit;
            fromJSON(object: any): _199.Commit;
            toJSON(message: _199.Commit): unknown;
            fromPartial(object: Partial<_199.Commit>): _199.Commit;
        };
        CommitSig: {
            encode(message: _199.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.CommitSig;
            fromJSON(object: any): _199.CommitSig;
            toJSON(message: _199.CommitSig): unknown;
            fromPartial(object: Partial<_199.CommitSig>): _199.CommitSig;
        };
        Proposal: {
            encode(message: _199.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.Proposal;
            fromJSON(object: any): _199.Proposal;
            toJSON(message: _199.Proposal): unknown;
            fromPartial(object: Partial<_199.Proposal>): _199.Proposal;
        };
        SignedHeader: {
            encode(message: _199.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.SignedHeader;
            fromJSON(object: any): _199.SignedHeader;
            toJSON(message: _199.SignedHeader): unknown;
            fromPartial(object: Partial<_199.SignedHeader>): _199.SignedHeader;
        };
        LightBlock: {
            encode(message: _199.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.LightBlock;
            fromJSON(object: any): _199.LightBlock;
            toJSON(message: _199.LightBlock): unknown;
            fromPartial(object: Partial<_199.LightBlock>): _199.LightBlock;
        };
        BlockMeta: {
            encode(message: _199.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.BlockMeta;
            fromJSON(object: any): _199.BlockMeta;
            toJSON(message: _199.BlockMeta): unknown;
            fromPartial(object: Partial<_199.BlockMeta>): _199.BlockMeta;
        };
        TxProof: {
            encode(message: _199.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.TxProof;
            fromJSON(object: any): _199.TxProof;
            toJSON(message: _199.TxProof): unknown;
            fromPartial(object: Partial<_199.TxProof>): _199.TxProof;
        };
        ConsensusParams: {
            encode(message: _198.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.ConsensusParams;
            fromJSON(object: any): _198.ConsensusParams;
            toJSON(message: _198.ConsensusParams): unknown;
            fromPartial(object: Partial<_198.ConsensusParams>): _198.ConsensusParams;
        };
        BlockParams: {
            encode(message: _198.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.BlockParams;
            fromJSON(object: any): _198.BlockParams;
            toJSON(message: _198.BlockParams): unknown;
            fromPartial(object: Partial<_198.BlockParams>): _198.BlockParams;
        };
        EvidenceParams: {
            encode(message: _198.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.EvidenceParams;
            fromJSON(object: any): _198.EvidenceParams;
            toJSON(message: _198.EvidenceParams): unknown;
            fromPartial(object: Partial<_198.EvidenceParams>): _198.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _198.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.ValidatorParams;
            fromJSON(object: any): _198.ValidatorParams;
            toJSON(message: _198.ValidatorParams): unknown;
            fromPartial(object: Partial<_198.ValidatorParams>): _198.ValidatorParams;
        };
        VersionParams: {
            encode(message: _198.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.VersionParams;
            fromJSON(object: any): _198.VersionParams;
            toJSON(message: _198.VersionParams): unknown;
            fromPartial(object: Partial<_198.VersionParams>): _198.VersionParams;
        };
        HashedParams: {
            encode(message: _198.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.HashedParams;
            fromJSON(object: any): _198.HashedParams;
            toJSON(message: _198.HashedParams): unknown;
            fromPartial(object: Partial<_198.HashedParams>): _198.HashedParams;
        };
        Evidence: {
            encode(message: _197.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.Evidence;
            fromJSON(object: any): _197.Evidence;
            toJSON(message: _197.Evidence): unknown;
            fromPartial(object: Partial<_197.Evidence>): _197.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _197.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.DuplicateVoteEvidence;
            fromJSON(object: any): _197.DuplicateVoteEvidence;
            toJSON(message: _197.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_197.DuplicateVoteEvidence>): _197.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _197.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.LightClientAttackEvidence;
            fromJSON(object: any): _197.LightClientAttackEvidence;
            toJSON(message: _197.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_197.LightClientAttackEvidence>): _197.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _197.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.EvidenceList;
            fromJSON(object: any): _197.EvidenceList;
            toJSON(message: _197.EvidenceList): unknown;
            fromPartial(object: Partial<_197.EvidenceList>): _197.EvidenceList;
        };
        Block: {
            encode(message: _196.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.Block;
            fromJSON(object: any): _196.Block;
            toJSON(message: _196.Block): unknown;
            fromPartial(object: Partial<_196.Block>): _196.Block;
        };
    };
    const version: {
        App: {
            encode(message: _201.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.App;
            fromJSON(object: any): _201.App;
            toJSON(message: _201.App): unknown;
            fromPartial(object: Partial<_201.App>): _201.App;
        };
        Consensus: {
            encode(message: _201.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.Consensus;
            fromJSON(object: any): _201.Consensus;
            toJSON(message: _201.Consensus): unknown;
            fromPartial(object: Partial<_201.Consensus>): _201.Consensus;
        };
    };
}

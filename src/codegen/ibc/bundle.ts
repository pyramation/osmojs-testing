import * as _110 from "./applications/transfer/v1/genesis";
import * as _111 from "./applications/transfer/v1/query";
import * as _112 from "./applications/transfer/v1/transfer";
import * as _113 from "./applications/transfer/v1/tx";
import * as _114 from "./applications/transfer/v2/packet";
import * as _115 from "./core/channel/v1/channel";
import * as _116 from "./core/channel/v1/genesis";
import * as _117 from "./core/channel/v1/query";
import * as _118 from "./core/channel/v1/tx";
import * as _119 from "./core/client/v1/client";
import * as _120 from "./core/client/v1/genesis";
import * as _121 from "./core/client/v1/query";
import * as _122 from "./core/client/v1/tx";
import * as _123 from "./core/commitment/v1/commitment";
import * as _124 from "./core/connection/v1/connection";
import * as _125 from "./core/connection/v1/genesis";
import * as _126 from "./core/connection/v1/query";
import * as _127 from "./core/connection/v1/tx";
import * as _128 from "./core/port/v1/query";
import * as _129 from "./core/types/v1/genesis";
import * as _130 from "./lightclients/localhost/v1/localhost";
import * as _131 from "./lightclients/solomachine/v1/solomachine";
import * as _132 from "./lightclients/solomachine/v2/solomachine";
import * as _133 from "./lightclients/tendermint/v1/tendermint";
import * as _273 from "./applications/transfer/v1/tx.amino";
import * as _274 from "./core/channel/v1/tx.amino";
import * as _275 from "./core/client/v1/tx.amino";
import * as _276 from "./core/connection/v1/tx.amino";
import * as _277 from "./applications/transfer/v1/tx.registry";
import * as _278 from "./core/channel/v1/tx.registry";
import * as _279 from "./core/client/v1/tx.registry";
import * as _280 from "./core/connection/v1/tx.registry";
import * as _281 from "./applications/transfer/v1/query.rpc.Query";
import * as _282 from "./core/channel/v1/query.rpc.Query";
import * as _283 from "./core/client/v1/query.rpc.Query";
import * as _284 from "./core/connection/v1/query.rpc.Query";
import * as _285 from "./core/port/v1/query.rpc.Query";
import * as _286 from "./applications/transfer/v1/tx.rpc.msg";
import * as _287 from "./core/channel/v1/tx.rpc.msg";
import * as _288 from "./core/client/v1/tx.rpc.msg";
import * as _289 from "./core/connection/v1/tx.rpc.msg";
import * as _340 from "./rpc.query";
import * as _341 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._110,
        ..._111,
        ..._112,
        ..._113,
        ..._273,
        ..._277,
        ..._281,
        ..._286
      };
      export const v2 = { ..._114
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._115,
        ..._116,
        ..._117,
        ..._118,
        ..._274,
        ..._278,
        ..._282,
        ..._287
      };
    }
    export namespace client {
      export const v1 = { ..._119,
        ..._120,
        ..._121,
        ..._122,
        ..._275,
        ..._279,
        ..._283,
        ..._288
      };
    }
    export namespace commitment {
      export const v1 = { ..._123
      };
    }
    export namespace connection {
      export const v1 = { ..._124,
        ..._125,
        ..._126,
        ..._127,
        ..._276,
        ..._280,
        ..._284,
        ..._289
      };
    }
    export namespace port {
      export const v1 = { ..._128,
        ..._285
      };
    }
    export namespace types {
      export const v1 = { ..._129
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._130
      };
    }
    export namespace solomachine {
      export const v1 = { ..._131
      };
      export const v2 = { ..._132
      };
    }
    export namespace tendermint {
      export const v1 = { ..._133
      };
    }
  }
  export const ClientFactory = { ..._340,
    ..._341
  };
}
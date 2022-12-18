import * as _127 from "./downtime-detector/v1beta1/downtime_duration";
import * as _128 from "./downtime-detector/v1beta1/genesis";
import * as _129 from "./downtime-detector/v1beta1/query";
import * as _130 from "./epochs/genesis";
import * as _131 from "./epochs/query";
import * as _132 from "./gamm/pool-models/balancer/balancerPool";
import * as _133 from "./gamm/v1beta1/genesis";
import * as _134 from "./gamm/v1beta1/query";
import * as _135 from "./gamm/v1beta1/tx";
import * as _136 from "./gamm/pool-models/balancer/tx/tx";
import * as _137 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _138 from "./gamm/pool-models/stableswap/tx";
import * as _139 from "./gamm/v2/query";
import * as _140 from "./ibc-rate-limit/v1beta1/params";
import * as _141 from "./ibc-rate-limit/v1beta1/query";
import * as _142 from "./incentives/gauge";
import * as _143 from "./incentives/genesis";
import * as _144 from "./incentives/params";
import * as _145 from "./incentives/query";
import * as _146 from "./incentives/tx";
import * as _147 from "./lockup/genesis";
import * as _148 from "./lockup/lock";
import * as _149 from "./lockup/params";
import * as _150 from "./lockup/query";
import * as _151 from "./lockup/tx";
import * as _152 from "./mint/v1beta1/genesis";
import * as _153 from "./mint/v1beta1/mint";
import * as _154 from "./mint/v1beta1/query";
import * as _155 from "./pool-incentives/v1beta1/genesis";
import * as _156 from "./pool-incentives/v1beta1/gov";
import * as _157 from "./pool-incentives/v1beta1/incentives";
import * as _158 from "./pool-incentives/v1beta1/query";
import * as _159 from "./protorev/v1beta1/genesis";
import * as _160 from "./protorev/v1beta1/gov";
import * as _161 from "./protorev/v1beta1/params";
import * as _162 from "./protorev/v1beta1/protorev";
import * as _163 from "./protorev/v1beta1/query";
import * as _164 from "./protorev/v1beta1/tx";
import * as _165 from "./sumtree/v1beta1/tree";
import * as _166 from "./superfluid/genesis";
import * as _167 from "./superfluid/params";
import * as _168 from "./superfluid/query";
import * as _169 from "./superfluid/superfluid";
import * as _170 from "./superfluid/tx";
import * as _171 from "./swaprouter/v1beta1/genesis";
import * as _172 from "./swaprouter/v1beta1/module_route";
import * as _173 from "./swaprouter/v1beta1/query";
import * as _174 from "./swaprouter/v1beta1/swap_route";
import * as _175 from "./swaprouter/v1beta1/tx";
import * as _176 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _177 from "./tokenfactory/v1beta1/genesis";
import * as _178 from "./tokenfactory/v1beta1/params";
import * as _179 from "./tokenfactory/v1beta1/query";
import * as _180 from "./tokenfactory/v1beta1/tx";
import * as _181 from "./twap/v1beta1/genesis";
import * as _182 from "./twap/v1beta1/query";
import * as _183 from "./twap/v1beta1/twap_record";
import * as _184 from "./txfees/v1beta1/feetoken";
import * as _185 from "./txfees/v1beta1/genesis";
import * as _186 from "./txfees/v1beta1/gov";
import * as _187 from "./txfees/v1beta1/query";
import * as _188 from "./valset-pref/v1beta1/query";
import * as _189 from "./valset-pref/v1beta1/state";
import * as _190 from "./valset-pref/v1beta1/tx";
import * as _279 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _280 from "./gamm/pool-models/stableswap/tx.amino";
import * as _281 from "./gamm/v1beta1/tx.amino";
import * as _282 from "./incentives/tx.amino";
import * as _283 from "./lockup/tx.amino";
import * as _284 from "./protorev/v1beta1/tx.amino";
import * as _285 from "./superfluid/tx.amino";
import * as _286 from "./swaprouter/v1beta1/tx.amino";
import * as _287 from "./tokenfactory/v1beta1/tx.amino";
import * as _288 from "./valset-pref/v1beta1/tx.amino";
import * as _289 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _290 from "./gamm/pool-models/stableswap/tx.registry";
import * as _291 from "./gamm/v1beta1/tx.registry";
import * as _292 from "./incentives/tx.registry";
import * as _293 from "./lockup/tx.registry";
import * as _294 from "./protorev/v1beta1/tx.registry";
import * as _295 from "./superfluid/tx.registry";
import * as _296 from "./swaprouter/v1beta1/tx.registry";
import * as _297 from "./tokenfactory/v1beta1/tx.registry";
import * as _298 from "./valset-pref/v1beta1/tx.registry";
import * as _299 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _300 from "./epochs/query.rpc.Query";
import * as _301 from "./gamm/v1beta1/query.rpc.Query";
import * as _302 from "./gamm/v2/query.rpc.Query";
import * as _303 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _304 from "./incentives/query.rpc.Query";
import * as _305 from "./lockup/query.rpc.Query";
import * as _306 from "./mint/v1beta1/query.rpc.Query";
import * as _307 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _308 from "./protorev/v1beta1/query.rpc.Query";
import * as _309 from "./superfluid/query.rpc.Query";
import * as _310 from "./swaprouter/v1beta1/query.rpc.Query";
import * as _311 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _312 from "./twap/v1beta1/query.rpc.Query";
import * as _313 from "./txfees/v1beta1/query.rpc.Query";
import * as _314 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _315 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _316 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _317 from "./gamm/v1beta1/tx.rpc.msg";
import * as _318 from "./incentives/tx.rpc.msg";
import * as _319 from "./lockup/tx.rpc.msg";
import * as _320 from "./protorev/v1beta1/tx.rpc.msg";
import * as _321 from "./superfluid/tx.rpc.msg";
import * as _322 from "./swaprouter/v1beta1/tx.rpc.msg";
import * as _323 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _324 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _329 from "./rpc.query";
import * as _330 from "./rpc.tx";
export namespace osmosis {
  export namespace downtimedetector {
    export const v1beta1 = { ..._127,
      ..._128,
      ..._129,
      ..._299
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._130,
      ..._131,
      ..._300
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._281,
      ..._291,
      ..._301,
      ..._317
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._136,
          ..._279,
          ..._289,
          ..._315
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._137,
          ..._138,
          ..._280,
          ..._290,
          ..._316
        };
      }
    }
    export const v2 = { ..._139,
      ..._302
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = { ..._140,
      ..._141,
      ..._303
    };
  }
  export const incentives = { ..._142,
    ..._143,
    ..._144,
    ..._145,
    ..._146,
    ..._282,
    ..._292,
    ..._304,
    ..._318
  };
  export const lockup = { ..._147,
    ..._148,
    ..._149,
    ..._150,
    ..._151,
    ..._283,
    ..._293,
    ..._305,
    ..._319
  };
  export namespace mint {
    export const v1beta1 = { ..._152,
      ..._153,
      ..._154,
      ..._306
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._307
    };
  }
  export namespace protorev {
    export const v1beta1 = { ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._284,
      ..._294,
      ..._308,
      ..._320
    };
  }
  export namespace store {
    export const v1beta1 = { ..._165
    };
  }
  export const superfluid = { ..._166,
    ..._167,
    ..._168,
    ..._169,
    ..._170,
    ..._285,
    ..._295,
    ..._309,
    ..._321
  };
  export namespace swaprouter {
    export const v1beta1 = { ..._171,
      ..._172,
      ..._173,
      ..._174,
      ..._175,
      ..._286,
      ..._296,
      ..._310,
      ..._322
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = { ..._176,
      ..._177,
      ..._178,
      ..._179,
      ..._180,
      ..._287,
      ..._297,
      ..._311,
      ..._323
    };
  }
  export namespace twap {
    export const v1beta1 = { ..._181,
      ..._182,
      ..._183,
      ..._312
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._184,
      ..._185,
      ..._186,
      ..._187,
      ..._313
    };
  }
  export namespace valsetpref {
    export const v1beta1 = { ..._188,
      ..._189,
      ..._190,
      ..._288,
      ..._298,
      ..._314,
      ..._324
    };
  }
  export const ClientFactory = { ..._329,
    ..._330
  };
}
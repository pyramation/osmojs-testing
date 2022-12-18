import * as _97 from "./api/http";
import * as _98 from "./protobuf/any";
import * as _99 from "./protobuf/descriptor";
import * as _100 from "./protobuf/duration";
import * as _101 from "./protobuf/empty";
import * as _102 from "./protobuf/timestamp";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _97.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Http;
            fromJSON(object: any): _97.Http;
            toJSON(message: _97.Http): unknown;
            fromPartial(object: Partial<_97.Http>): _97.Http;
        };
        HttpRule: {
            encode(message: _97.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.HttpRule;
            fromJSON(object: any): _97.HttpRule;
            toJSON(message: _97.HttpRule): unknown;
            fromPartial(object: Partial<_97.HttpRule>): _97.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _97.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.CustomHttpPattern;
            fromJSON(object: any): _97.CustomHttpPattern;
            toJSON(message: _97.CustomHttpPattern): unknown;
            fromPartial(object: Partial<_97.CustomHttpPattern>): _97.CustomHttpPattern;
        };
    };
    const protobuf: {
        Timestamp: {
            encode(message: _102.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Timestamp;
            fromJSON(object: any): _102.Timestamp;
            toJSON(message: _102.Timestamp): unknown;
            fromPartial(object: Partial<_102.Timestamp>): _102.Timestamp;
        };
        Empty: {
            encode(_: _101.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Empty;
            fromJSON(_: any): _101.Empty;
            toJSON(_: _101.Empty): unknown;
            fromPartial(_: Partial<_101.Empty>): _101.Empty;
        };
        Duration: {
            encode(message: _100.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Duration;
            fromJSON(object: any): _100.Duration;
            toJSON(message: _100.Duration): unknown;
            fromPartial(object: Partial<_100.Duration>): _100.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _99.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _99.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _99.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _99.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _99.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _99.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _99.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _99.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _99.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _99.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _99.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _99.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _99.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _99.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _99.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _99.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _99.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _99.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _99.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _99.FieldOptions_CType;
        FieldOptions_JSType: typeof _99.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _99.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _99.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _99.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _99.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.FileDescriptorSet;
            fromJSON(object: any): _99.FileDescriptorSet;
            toJSON(message: _99.FileDescriptorSet): unknown;
            fromPartial(object: Partial<_99.FileDescriptorSet>): _99.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _99.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.FileDescriptorProto;
            fromJSON(object: any): _99.FileDescriptorProto;
            toJSON(message: _99.FileDescriptorProto): unknown;
            fromPartial(object: Partial<_99.FileDescriptorProto>): _99.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _99.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.DescriptorProto;
            fromJSON(object: any): _99.DescriptorProto;
            toJSON(message: _99.DescriptorProto): unknown;
            fromPartial(object: Partial<_99.DescriptorProto>): _99.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _99.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _99.DescriptorProto_ExtensionRange;
            toJSON(message: _99.DescriptorProto_ExtensionRange): unknown;
            fromPartial(object: Partial<_99.DescriptorProto_ExtensionRange>): _99.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _99.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.DescriptorProto_ReservedRange;
            fromJSON(object: any): _99.DescriptorProto_ReservedRange;
            toJSON(message: _99.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: Partial<_99.DescriptorProto_ReservedRange>): _99.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _99.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ExtensionRangeOptions;
            fromJSON(object: any): _99.ExtensionRangeOptions;
            toJSON(message: _99.ExtensionRangeOptions): unknown;
            fromPartial(object: Partial<_99.ExtensionRangeOptions>): _99.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _99.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.FieldDescriptorProto;
            fromJSON(object: any): _99.FieldDescriptorProto;
            toJSON(message: _99.FieldDescriptorProto): unknown;
            fromPartial(object: Partial<_99.FieldDescriptorProto>): _99.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _99.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.OneofDescriptorProto;
            fromJSON(object: any): _99.OneofDescriptorProto;
            toJSON(message: _99.OneofDescriptorProto): unknown;
            fromPartial(object: Partial<_99.OneofDescriptorProto>): _99.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _99.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.EnumDescriptorProto;
            fromJSON(object: any): _99.EnumDescriptorProto;
            toJSON(message: _99.EnumDescriptorProto): unknown;
            fromPartial(object: Partial<_99.EnumDescriptorProto>): _99.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _99.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _99.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _99.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: Partial<_99.EnumDescriptorProto_EnumReservedRange>): _99.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _99.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.EnumValueDescriptorProto;
            fromJSON(object: any): _99.EnumValueDescriptorProto;
            toJSON(message: _99.EnumValueDescriptorProto): unknown;
            fromPartial(object: Partial<_99.EnumValueDescriptorProto>): _99.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _99.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ServiceDescriptorProto;
            fromJSON(object: any): _99.ServiceDescriptorProto;
            toJSON(message: _99.ServiceDescriptorProto): unknown;
            fromPartial(object: Partial<_99.ServiceDescriptorProto>): _99.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _99.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MethodDescriptorProto;
            fromJSON(object: any): _99.MethodDescriptorProto;
            toJSON(message: _99.MethodDescriptorProto): unknown;
            fromPartial(object: Partial<_99.MethodDescriptorProto>): _99.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _99.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.FileOptions;
            fromJSON(object: any): _99.FileOptions;
            toJSON(message: _99.FileOptions): unknown;
            fromPartial(object: Partial<_99.FileOptions>): _99.FileOptions;
        };
        MessageOptions: {
            encode(message: _99.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MessageOptions;
            fromJSON(object: any): _99.MessageOptions;
            toJSON(message: _99.MessageOptions): unknown;
            fromPartial(object: Partial<_99.MessageOptions>): _99.MessageOptions;
        };
        FieldOptions: {
            encode(message: _99.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.FieldOptions;
            fromJSON(object: any): _99.FieldOptions;
            toJSON(message: _99.FieldOptions): unknown;
            fromPartial(object: Partial<_99.FieldOptions>): _99.FieldOptions;
        };
        OneofOptions: {
            encode(message: _99.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.OneofOptions;
            fromJSON(object: any): _99.OneofOptions;
            toJSON(message: _99.OneofOptions): unknown;
            fromPartial(object: Partial<_99.OneofOptions>): _99.OneofOptions;
        };
        EnumOptions: {
            encode(message: _99.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.EnumOptions;
            fromJSON(object: any): _99.EnumOptions;
            toJSON(message: _99.EnumOptions): unknown;
            fromPartial(object: Partial<_99.EnumOptions>): _99.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _99.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.EnumValueOptions;
            fromJSON(object: any): _99.EnumValueOptions;
            toJSON(message: _99.EnumValueOptions): unknown;
            fromPartial(object: Partial<_99.EnumValueOptions>): _99.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _99.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ServiceOptions;
            fromJSON(object: any): _99.ServiceOptions;
            toJSON(message: _99.ServiceOptions): unknown;
            fromPartial(object: Partial<_99.ServiceOptions>): _99.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _99.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MethodOptions;
            fromJSON(object: any): _99.MethodOptions;
            toJSON(message: _99.MethodOptions): unknown;
            fromPartial(object: Partial<_99.MethodOptions>): _99.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _99.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.UninterpretedOption;
            fromJSON(object: any): _99.UninterpretedOption;
            toJSON(message: _99.UninterpretedOption): unknown;
            fromPartial(object: Partial<_99.UninterpretedOption>): _99.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _99.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.UninterpretedOption_NamePart;
            fromJSON(object: any): _99.UninterpretedOption_NamePart;
            toJSON(message: _99.UninterpretedOption_NamePart): unknown;
            fromPartial(object: Partial<_99.UninterpretedOption_NamePart>): _99.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _99.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.SourceCodeInfo;
            fromJSON(object: any): _99.SourceCodeInfo;
            toJSON(message: _99.SourceCodeInfo): unknown;
            fromPartial(object: Partial<_99.SourceCodeInfo>): _99.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _99.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.SourceCodeInfo_Location;
            fromJSON(object: any): _99.SourceCodeInfo_Location;
            toJSON(message: _99.SourceCodeInfo_Location): unknown;
            fromPartial(object: Partial<_99.SourceCodeInfo_Location>): _99.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _99.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.GeneratedCodeInfo;
            fromJSON(object: any): _99.GeneratedCodeInfo;
            toJSON(message: _99.GeneratedCodeInfo): unknown;
            fromPartial(object: Partial<_99.GeneratedCodeInfo>): _99.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _99.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _99.GeneratedCodeInfo_Annotation;
            toJSON(message: _99.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: Partial<_99.GeneratedCodeInfo_Annotation>): _99.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _98.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Any;
            fromJSON(object: any): _98.Any;
            toJSON(message: _98.Any): unknown;
            fromPartial(object: Partial<_98.Any>): _98.Any;
        };
    };
}

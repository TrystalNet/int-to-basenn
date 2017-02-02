declare const BASE62CHARS : string
declare const BASE64CHARS : string
declare const BASE26CHARS : string
declare const BASE27CHARS : string

interface IEncodeFunc { (intval:number) : string }
interface IDecodeFunc { (strval:string) : number }

declare class Converter {
  constructor(charset:string)
  encode : IEncodeFunc
  decode : IDecodeFunc
}

declare function encode(intval:number, charset:string, validate:boolean):string;
declare function decode(strval:string, charset:string, validate:boolean):number;

declare const Base62 : Converter
declare const base62Encode : IEncodeFunc
declare const base62Decode : IDecodeFunc

declare const Base64 : Converter
declare const base64Encode : IEncodeFunc
declare const base64Decode : IDecodeFunc

declare const Base26 : Converter
declare const base26Encode : IEncodeFunc
declare const base26Decode : IDecodeFunc

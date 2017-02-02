export as namespace IntToBaseNN;
export = IntToBaseNN;

declare namespace IntToBaseNN {
  const BASE62CHARS : string
  const BASE64CHARS : string
  const BASE26CHARS : string
  const BASE27CHARS : string

  interface IEncodeFunc { (intval:number) : string }
  interface IDecodeFunc { (strval:string) : number }

  class Converter {
    constructor(charset:string)
    encode : IEncodeFunc
    decode : IDecodeFunc
  }

  function encode(intval:number, charset:string, validate:boolean):string;
  function decode(strval:string, charset:string, validate:boolean):number;

  const Base62 : Converter
  const base62Encode : IEncodeFunc
  const base62Decode : IDecodeFunc

  const Base64 : Converter
  const base64Encode : IEncodeFunc
  const base64Decode : IDecodeFunc

  const Base26 : Converter
  const base26Encode : IEncodeFunc
  const base26Decode : IDecodeFunc
}

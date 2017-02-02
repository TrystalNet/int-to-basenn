export const BASE62CHARS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
export const BASE64CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
export const BASE26CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
export const BASE27CHARS = '_ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function validateIntval(intval:number) {
  if(typeof intval !== 'number') throw 'Intval must be a number'
  if(intval < 0) throw 'Intval must be positive'
}

function validateCharset(charset:string) {
  if(typeof charset !== 'string') throw 'CharSet must be a string'
  if(charset.length < 2) throw 'CharSet must have at least two characters'
  if(new Set(charset).size < charset.length) throw 'CharSet cannot have duplicate characters'
}

function validateChar(char:string, charval:number, strval:string):void {
  if(charval >= 0) return
  const msg = `Invalid character '${char}' in '${strval}'`
  throw msg
}

export function encode(intval:number, charset:string, validate=true):string {
  if(validate) {
    validateCharset(charset)
    validateIntval(intval)
  }
  if(!intval) return charset[0]
  const base = charset.length
  let arr = []
  while (intval > 0) {
    arr.push(charset[intval % base])
    intval = Math.floor(intval / base)
  }
  return arr.reverse().join('')
}

export function decode(strval:string, charset:string, validate=true) {
  if(validate) validateCharset(charset)
  if(!strval) return 0
  let base = charset.length
  return strval.split('').reduce((intval,char) => { 
    const charval = charset.indexOf(char)
    if(validate) validateChar(char, charval, strval)
    return (intval * base) + charset.indexOf(char)
  }, 0) 
}


export class Converter {
  constructor(charset:string=BASE62CHARS) {
      validateCharset(charset)
      this.encode = (intval:number) => encode(intval, charset, false)
      this.decode = (str:string)    => decode(str,    charset, false)
  }
  encode : (intval:number) => string
  decode : (strval:string) => number
}

export const Base62 = new Converter()
export const base62Encode = (intval:number) => Base62.encode(intval)
export const base62Decode = (strval:string) => Base62.decode(strval)

export const Base64 = new Converter(BASE64CHARS)
export const base64Encode = (intval:number) => Base64.encode(intval)
export const base64Decode = (strval:string) => Base64.decode(strval)

export const Base26 = new Converter(BASE26CHARS)
export const base26Encode = (intval:number) => Base26.encode(intval)
export const base26Decode = (strval:string) => Base26.decode(strval)


"use strict";
exports.BASE62CHARS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
exports.BASE64CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
exports.BASE26CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
exports.BASE27CHARS = '_ABCDEFGHIJKLMNOPQRSTUVWXYZ';
function validateIntval(intval) {
    if (typeof intval !== 'number')
        throw 'Intval must be a number';
    if (intval < 0)
        throw 'Intval must be positive';
}
function validateCharset(charset) {
    if (typeof charset !== 'string')
        throw 'CharSet must be a string';
    if (charset.length < 2)
        throw 'CharSet must have at least two characters';
    if (new Set(charset).size < charset.length)
        throw 'CharSet cannot have duplicate characters';
}
function validateChar(char, charval, strval) {
    if (charval >= 0)
        return;
    const msg = `Invalid character '${char}' in '${strval}'`;
    throw msg;
}
function encode(intval, charset, validate = true) {
    if (validate) {
        validateCharset(charset);
        validateIntval(intval);
    }
    if (!intval)
        return charset[0];
    const base = charset.length;
    let arr = [];
    while (intval > 0) {
        arr.push(charset[intval % base]);
        intval = Math.floor(intval / base);
    }
    return arr.reverse().join('');
}
exports.encode = encode;
function decode(strval, charset, validate = true) {
    if (validate)
        validateCharset(charset);
    if (!strval)
        return 0;
    let base = charset.length;
    return strval.split('').reduce((intval, char) => {
        const charval = charset.indexOf(char);
        if (validate)
            validateChar(char, charval, strval);
        return (intval * base) + charset.indexOf(char);
    }, 0);
}
exports.decode = decode;
class Converter {
    constructor(charset = exports.BASE62CHARS) {
        validateCharset(charset);
        this.encode = (intval) => encode(intval, charset, false);
        this.decode = (str) => decode(str, charset, false);
    }
}
exports.Converter = Converter;
exports.Base62 = new Converter();
exports.base62Encode = (intval) => exports.Base62.encode(intval);
exports.base62Decode = (strval) => exports.Base62.decode(strval);
exports.Base64 = new Converter(exports.BASE64CHARS);
exports.base64Encode = (intval) => exports.Base64.encode(intval);
exports.base64Decode = (strval) => exports.Base64.decode(strval);
exports.Base26 = new Converter(exports.BASE26CHARS);
exports.base26Encode = (intval) => exports.Base26.encode(intval);
exports.base26Decode = (strval) => exports.Base26.decode(strval);

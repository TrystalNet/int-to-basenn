Simple function to convert an integer into baseN representationS.

For example:

console.log(base26Encode(100)) // DW
console.log(base26Decode('DW')) // 100

An arbitrary character set can be provided:

console.log(encode(1000, 'WXYZ')) // ZZYYW
console.log(decode('ZZYYW', 'WXYZ')) // 1000

Character sets that include both upper and lower case are supported:
console.log(decode('bbBbBB', 'abcABC')) // 10000


var BASENN = require('../index.js')

describe("Base26 Tests", function() {

  it("Encodes an integer into base26 format", function() {
    expect(BASENN.base26Encode(100)).toEqual('DW')
  });

  it("Decodes base26 numbers into entegers", function() {
    expect(BASENN.base26Decode('DW')).toEqual(100)
  });

  it("Supports case insensitive numbers when required.", function() {
    expect(BASENN.base26Decode('dw')).toEqual(100)  
  })

  it("Supports arbitrary character sets.", function() {
    expect(BASENN.encode(1000, 'WXYZ')).toEqual('ZZYYW')  
    expect(BASENN.decode('ZZYYW', 'WXYZ')).toEqual(1000)  
  })

  it("Supports mixed case character sets.", function() {
    expect(BASENN.encode(10000, 'abcABC')).toEqual('bbBbBB')  
    expect(BASENN.decode('bbBbBB', 'abcABC')).toEqual(10000)  
  })

});

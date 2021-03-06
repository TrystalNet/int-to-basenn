"use strict";
const index_1 = require("./index");
const index_2 = require("./index");
const fixit = (s) => s.length < 4 ? ' '.repeat(4 - s.length) + s : s;
function runtest(msg, charset, ...testvals) {
    console.log(`.....${msg}.....`);
    const converter = new index_1.Converter(charset);
    const encoded = testvals.map(tv => converter.encode(tv));
    const decoded = encoded.map(ev => converter.decode(ev));
    console.log(decoded.map(dv => fixit(' ' + dv.toString())).join(''));
    console.log(encoded.map(ev => fixit(' ' + ev)).join(''));
    console.log('');
}
runtest('base 62 encoding', index_2.BASE62CHARS, 0, 1, 2, 8, 9, 10, 11, 34, 35, 36, 37, 60, 61, 62, 100, 1000000000);
runtest('base 26 encoding', index_2.BASE26CHARS, 0, 1, 2, 24, 25, 26, 27, 50, 51, 52, 53, 674, 675, 676, 677, 1000000000);
runtest('base 4(0123) encoding', '0123', 0, 1, 2, 3, 4, 5, 6, 7, 8, 12, 15, 16, 17, 1000000000);
runtest('base 4(WXYZ) encoding', 'WXYZ', 0, 1, 2, 3, 4, 5, 6, 7, 8, 12, 15, 16, 17, 1000000000);

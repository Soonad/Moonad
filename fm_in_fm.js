var fs   = require("fs");
var fmc  = require("formality-core");
var defs = require("formality-core/bin/loader.js")().defs;
var fmcjs = require("formality-core/Compiler.js");
var js    = fmcjs(defs, "Formality");
var lib   = eval(js);
var code  = `
  main: Any
    ((f) (x) f(f(x)))((f) (x) f(f(x)))
`;

var [code, file] = lib["Defs.parse"](code)(null)(x=>x)(a=>b=>([a,b]));
var term = lib["Defs.get_term"](file)("main")(null)(x => x);
var term = lib["Term.normalize"](term)(lib.empty);
console.log(lib["Term.stringify"](term));

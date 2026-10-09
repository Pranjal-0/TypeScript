
function describeTypeof(x:unknown){
    if( typeof x === "string"){
        return "string"
    }
    if( typeof x === "number"){
        return 1
    }
    if( typeof x === "boolean"){
        return true
    }
    if( typeof x === "bigint"){
        return "bigint"
    }
    if( typeof x === "symbol"){
        return "symbol"
    }
    if( typeof x === "undefined"){
        return "undefined"
    }
    if( typeof x === "function"){
        return ()=>{}
    }
    if( x === null){
        return null

    return 'Object'
    }

}

console.log(
  typeof "hi",           // "string"
  typeof 23,             // "number"
  typeof true,           // "boolean"
  typeof 10n,            // "bigint"
  typeof Symbol("sangam"), // "symbol"
  typeof undefined,      // "undefined"
  typeof (() => {}),     // "function"
  typeof null,           // "object" (quirk!)
  typeof {}              // "object"
);

function infoo(z:unknown){
    if(Array.isArray(z)){
        return z
    }
    if(z instanceof Date){
        return new Date()
    }
    if(z instanceof Error){
        return new Error('fsfs')
    }
    return 'others'
}

console.log(
  infoo([1,2,3,4,5]),
  infoo(new Date()),
  infoo(new Error('oopss! Error occurred')),
  infoo({x: 1})
);

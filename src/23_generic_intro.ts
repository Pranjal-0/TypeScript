// what is "type paramater" <T>
// how TS infers <T> from your arguments automactically
// generic are function where the types are blank  you fill later
// <T>  is a placeholder
// TS will try to understand what T should be


function id<T>(x:T):T{
    return x
}
// infers T
// id(4) -> T is a number
// id("hello")-> T is a string

const xuzz = id(4)
const zyx = console.log(xuzz+1,id("hello"))
console.log(zyx,id(["morning"]))


function firstgen<T>(arr:T[]): T|undefined{
    return arr[1]
}
console.log(firstgen([1,2,3,4]))
console.log(firstgen(['e','e','s']))


//without generics  -> (x:unknown)=> unknown
// with generics -> (x:T)=> T  keeps th exact type
function wraps<T>(value: T): { value: T } {
    return { value }
}

// Example 1: Wrapping a number
const wrappedNum = wraps(42);
console.log(wrappedNum);        // { value: 42 }
console.log(wrappedNum.value);  // 42
console.log(wrappedNum.value + 10);  // 52 ✓ Works

// Example 2: Wrapping a string
const wrappedStr = wraps("hello");
console.log(wrappedStr);        // { value: "hello" }
console.log(wrappedStr.value);  // "hello"
console.log(wrappedStr.value.toUpperCase());  // "HELLO" ✓ Works

// Example 3: Wrapping an array
const wrappedArr = wraps([1, 2, 3]);
console.log(wrappedArr);        // { value: [1, 2, 3] }
console.log(wrappedArr.value[0]);  // 1 ✓ Works

// Example 4: Wrapping an object
const wrappedObj = wraps({ name: "Alice", age: 25 });
console.log(wrappedObj);        // { value: { name: "Alice", age: 25 } }
console.log(wrappedObj.value.name);  // "Alice" ✓ Works

// partial<T> ---> make all the top level fields optional



type addressN8 = {
    line:string;
    city:string;
}
type User10={
    id:string;
    name:string
    email?:string
    address:addressN8
}

type UserPatch = Partial<User10>
const patch1:UserPatch = {
    address:{
        line:"line",
        city:'city'
    }
}
//const invalidPatch: User10 = {
//   address: { line: "line", city: "city" } error
//};

//Required

type UserAllRequired = Required<User10>
const userallpatch:UserAllRequired = {
    id:"232",
    name:"ddffgg",
    email:'xxret@describeUserExample.com',// need to give all fields does not matter if it is optinal
    address:{
        line:"line",
        city:"city"
    }
}


//readOnly


type ReadOnlyUserN10 = Readonly<User10>

const readonlyUser: ReadOnlyUserN10 = {
  id: 'u3',
  name: 'name',
  address: {
    line: 'line3',
    city: 'city123'
  }
}
// readonlyUser.name = "hi";


// pick - to able to pick certian keys || keep some keys

type publicUserN10 = Pick<User10,"id"|"name">
const publicUser:publicUserN10 = {id:"u5",name:"sangham"}

// omit
// continue from 3:18:13
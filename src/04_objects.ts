//email? : string -> email may be sbsefes) if its present it will be string
// it is not same as email : string | untefined


type User = {
    id : number;
    name : string;
    email? : string;
    readonly createdAt: Date
}

const user1 :User = {id:1,name:"ssdddff",createdAt: new Date()}
const user2 :User = {id:2,name:"ssdfffddff",email: "emsil",createdAt: new Date()}

type count = {[k:string]:number}
const c2 = {whatever:4}
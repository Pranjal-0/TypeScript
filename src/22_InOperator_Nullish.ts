type InEample1 = { role: "ADMIN"; permissions:string[]}
type InEample2 = { role: "USER"; expiresAt:Date}
type UserExample = InEample1 | InEample2
function describeUserExample(u:UserExample){
    if( 'permissions' in u){
        return `ADMIN ${u.permissions.join(",")}`
    }
    return `USER${u.expiresAt.toISOString()}`
}

console.log(describeUserExample({role:'ADMIN',permissions:["read"]}))
console.log(describeUserExample({role:'USER',expiresAt:new Date()}))


// avoid runtimes crashes  
// ??-nullish and ||-falsy
// obj?.a optinal chaining

type profileN3={
    name : string;
    contact? : {email? : string}

}

const P1N3:profileN3 = {name:'john'}
const P2N3:profileN3 = {name:'joe',contact:{email:'ffdsgifu@describeUserExample.com'}}

const email1N3 = P1N3.contact?.email
const emai21N3 = P2N3.contact?.email


// ?? uses the right hand default only when the left is undefined or null
// || uses the default when the left is any falsy value 0 "" NAN falsy


const countFromServerN3: number | null = 0;
const LabelFromServerN3: string | undefined = "";

const aN3 = countFromServerN3 ?? 100; //keeps the 0
const bN3 = LabelFromServerN3 || 100; //keeps the 100
console.log(aN3);
console.log(bN3);

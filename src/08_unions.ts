type Admin = {role:"ADMIN",permissions:string[]};
type Customer = {role:"Customer",loyaltypoints:number};

function describeUser(u:Admin|Customer){
    if(u.role === 'Customer' ){
        console.log(u.loyaltypoints)
        
    }else{
        console.log(u.permissions)
    }
}
function describeUsewithInoperator (u:Admin|Customer){
    if('permissions' in u){
        console.log(u.role,"Admin user")
    }
    else{
        console.log(u.loyaltypoints)
    }
}

//array unions & union of array

const arrofunion:(string|number)[] = ['a',1,'b',2] // array can be misxture of both number and string
const unionofarr:(string[]|number[]) = Math.random()>0.1?['x','d']:[1,2,3]
console.log(arrofunion,unionofarr)
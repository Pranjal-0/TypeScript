function ExtractedUserInfo(id:string,isExtractedInfo=false){
    return{
        id,
        name:"sangam",
        log:isExtractedInfo? "details":(undefined as string | undefined)

    }
}

type GetUserReturnInfo = ReturnType<typeof ExtractedUserInfo>
type GetUserParamsInfo = Parameters<typeof ExtractedUserInfo>

const argsInfo: GetUserParamsInfo = ['u1',true]
const returnInfo: GetUserReturnInfo = ExtractedUserInfo(...argsInfo)


// class Person1 {
//     constructor(public name:string,public age:number){
//         greet(){
//             return `HI i am this -> ${this.name}`
//         }
//     }
// }

// not able to understand
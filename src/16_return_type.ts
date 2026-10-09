const doublefunc = (n:number)=>n*2 //return will be handles by TS
export function toTitle(s:string):string{
    return `helo${s}`
}

function booleanToNumber(flag:boolean):number{ // return type number
    if(flag) return 1;
    else return 0;
}

async function loadCiuntInfered(){
    return 43;
}

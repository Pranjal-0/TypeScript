function sumAllNUmmbers(...xs:number[]):number{
    return xs.reduce((s,n)=>s+n,0)
}
console.log(sumAllNUmmbers(1,2,3,4))


function makeRange(...args:[start:number, end:number,steps?:number]):number[]{
    const [start,end,steps=1] = args;
    const out : number[] = [];
    for(let n=start;n<=end;n+=steps) out.push(n)
    return out; 
}

console.log (makeRange(1,4,1))
console.log (makeRange(1,7,))

function draw(x:number, y:number){
    console.log(x,y)
}
const points = [10,30]
// draw(,,,points) // not a fixed [number number] tuple

const fixed = [110,32] as const;
draw(...fixed)
let subtitle: string | undefined  = "fjkdsvbf"


function log(msg:string): void{
    console.log(msg)
}
function fail(msg:string): never{
    throw new Error(msg)
}
const valueAny : any = JSON.parse
valueAny.notthere.tofixed(2) // will break code due to any
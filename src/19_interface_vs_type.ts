//interface -> object shapes that you expect to extend
// supports declaration merging
//types -> more general -> objects, unions, intersections, functions
// can  not be reopend -> no merging



interface levels {
    level : number
}
interface levels {
    league : string
}

const game: levels = {
    level: 10,
    league : 'gold'
}
// type bag = {size:number}
// type bag = {weight: number}
// can not redeclared it

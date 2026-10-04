type Direction = "left" | "right" | "up";
function move(d:Direction) {
    console.log(d);        
}
const d1 = "left" //TS KEEPS LITERAL TYPE
move(d1);

let d2 = "left" //TS widen to string
// move(d2); give error

let d3 :Direction = "left" //TS KEEPS LITERAL TYPE
move(d3);
// Exclude <u,v> remove from u those assinable to v
// Extract <u,v> keep from u those members assiable to v
// Nonnullable

type EventType1 = "Click" | "submit" | "Hover" | "Keydown" | "Keyup";
type EventType2 = Exclude<EventType1,"Keydown">

function handleEvent1(e:EventType2){
    console.log(e);
}
// handleEvent1("Keydown")


type ActionsN1 = "create" | "update" | "delete" | "read"
type ActionsN2 = Extract<ActionsN1, "create" | "update" | "delete">

function handleEvent2(e:ActionsN2){
    console.log(e);
}

handleEvent2("delete")



type MaybeNumber = number | null |undefined

type CleanNumber = NonNullable<MaybeNumber>

function square(num:CleanNumber){
    return num*2
}
square(2)
// square(null)  cannot assign null

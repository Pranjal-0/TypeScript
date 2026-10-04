const ROLE = ["admin","user","operator"]  as const

type ROLE = (typeof ROLE )[number]
function setRole(r:ROLE){
    console.log(r)
}
setRole("admin")
setRole("operator")

type inter1 = {id:string}
type inter2 = {createdAr :Date}

type entity = inter1 & inter2

const e:entity = {id:'e1', createdAr: new Date()}


type name = {username:string}
type mail = {email :string }

type info = name & mail

const I:info = {username:'sam', email: "fff@gmail.com"}

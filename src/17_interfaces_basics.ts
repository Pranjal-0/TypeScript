 // infernce -> named shape for objects

 interface User333{
    id: number;
    name: string 
    email?: string
    readonly createdAt :Date 
 }
 const user333 : User333 = {
    id: 2,
    name: 'zapp', 
    createdAt : new Date()
 }

 interface Admin333 extends User333 {
    permissions : string[];

 }

 const admin : Admin333 = { // need to satisfy both Admin333 and User333 
    id: 2,
    name: 'zapp', 
    createdAt : new Date(),
    permissions : ['admin']
 }

interface withmeta {
    cloths:{
        tshirts : boolean,
        shirts : boolean
    }
}
interface meta extends Admin333,withmeta{}

const adminwithmeta : meta = {
     id: 2,
    name: 'zapp', 
    createdAt : new Date(),
    permissions : ['admin'],
    cloths:{
        tshirts:false,
        shirts:true
    }
}
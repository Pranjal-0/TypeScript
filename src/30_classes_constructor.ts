class UserN15 {
    id: string
    name : string
    email?: string
    createdAt: Date = new Date()

    constructor(id:string,name:string,email?:string){
        this.id = id 
        this.name = name
        if(email) this.email = email
    }

}
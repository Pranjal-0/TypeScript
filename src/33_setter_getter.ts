// get

class temprature{
    #c = 0;
    constructor(celsuis:number){
        this.celsuis = celsuis
    }
    get celsuis() : number{
        return this.#c
    }

    set celsuis(value:number){
        if(Number.isNaN(value)) throw new Error
            this.#c = value
    }

    get fahraheit(f:number){
        this.celsuis = ((f-32)*5)/9
    }

    const t = new temprature(25)
    t.fahraheit = 211
}
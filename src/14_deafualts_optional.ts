function optional(name?:string):string{
    const upperRes = name? name.toUpperCase():'Guest'
    return `hello${upperRes}`
}
console.log(optional("Raj")) // hello Raj
console.log(optional()) // hello guest if we remove guest it will be hello undefined


function defaultfunction (name:string = "Guest") :string{  //Parameter cannot have question mark and initializer. name?:string = "Guest"
    return `hello${name.toUpperCase()}`
}
console.log(optional("Raj")) // hello Raj
console.log(optional()) // hello guest 

function connect(host: string, port?: number, secure?: boolean): string {
    const finalPort = port ?? 8080;
    const finalSecure = secure ?? false;
    return `${host}:${finalPort} (secure: ${finalSecure})`;
}

connect('zapp', 73);
// Returns: "zapp:73 (secure: false)"

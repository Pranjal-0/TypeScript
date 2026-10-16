// Awaited<T>
// Promise<T>
// nested Promise<Promise<T>>
// Thenables -> .then

type Promise1 = Awaited<Promise<Number>>
type Promise2 = Awaited<Promise<Promise<Number>>>
type Awaited1 = Awaited<string>


type PromiseUnionExample = Awaited<Promise<string | number>>

async function fetchcount(){
    return 42 as const
}
type ResolveFetchCountValue = Awaited<ReturnType<typeof fetchcount>>

async function getData() {
    return Promise.all([
        Promise.resolve(1 as const),
        Promise.resolve("x" as const)
    ])
}
type DataTupleWithPromise = Awaited<ReturnType<typeof getData>>
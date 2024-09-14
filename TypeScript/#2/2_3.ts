// readonly 속성
type Age = number;
type Name = string;
type Player ={
    readonly name:Name,
    age?:Age
}
const playerMaker = (name:string) : Player => ({name})
const kwon = playerMaker("kwon")
kwon.age = 12
kwon.name = 'k'  // ERROR : Cannot assign to 'name'(cause read-only property)


// Tuple
const player: [string, number, boolean] = ["kwon", 1, true]


// readonly 추가 가능
const player: readonly [string, number, boolean] = ["kwon", 1, true]


// Undefined, null
let a : undefined = undefined
let b : null = null


// Any
const a : any[] = [1,2,3,4]
const b : any = true

// 기본적인 타입
let a : number = 1;
let b : string = "i1";
let c : boolean = true
let d : number[] = [1, 2];
let e : string[] = ["i1", "1"];
let f : boolean[] = [true];


// Optional 타입
interface User {
  name: string;
  age?: number;  // age는 선택적인 속성
}
const user1: User = { name: "Alice" };
const user2: User = { name: "Bob", age: 30 };


const player : {
	name:string,
	age?:number
} = {
	name: "kwon"
}

// Alias 타입
type Age = number;
type Name = string;
type Player ={
    name:Name,
    age?:Age
}

const kwon : Player = {
    name: "kwon"
}

const Lynn : Player = {
    name:"lynn",
    age:12
}

// function
type Age = number;
type Name = string;
type Player ={
    name:Name,
    age?:Age
}

function playerMaker(name:string) : Player{
    return {
        name:name
    }
}

const kwon = playerMaker("kwon")
kwon.age = 12

// Call signatures

function add(a:number, b:number) {
    return a + b
}
const add = (a:number, b:number) => a + b



type Add = (a:number, b:number) => number;
const add:Add = (a, b) => a + b



type Multiply = (x:number, y:number) => number;

const multiply: Multiply = (a, b) => {
  return a * b;
}

console.log(multiply(5, 4)) // 출력 : 20

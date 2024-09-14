// <옵션 1>
let a = "hello"
a = "bye"
a = 1 // JS에서는 가능하지만 TS에서는 불가

// Typescript는 a의 타입을 추론해준다.
// a : string


// <옵션 2>
let b : boolean = "x"  
// Error 발생									 
// b가 boolean이어야 한다.

let b : boolean = false

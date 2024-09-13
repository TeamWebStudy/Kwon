// (1)
const kwon = {
	nickname: "kwondg"
}

kwon.hello()

// Errors
// Property 'hello' does not exist on type '{nickname: string; }'



// (2)
[1, 2, 3, 4] + false

// Errors
// Operator '+' cannot be applied to types 'number[]' and 'boolean'.
// -> 숫자 배열에 boolean을 더할 수 없다.


// (3)
function divide(a, b) { // Error1
	return a / b
}

divide("hello")     // Error2

// Error1
// 타입스크립트가 a, b가 어떤 데이터 타입인지 몰라서 우리를 보호할 수 없다.
// Error2
// Expected 2 arguments, but got 1

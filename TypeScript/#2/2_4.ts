// Unknown
let a : unknown;

let b = a + 1 // ERROR - typeof a : unknown

// modified code
let a : unknown;

// 변수의 타입을 먼저 확인해야하는 방식 사용
if(typeof a === 'number'){
    let b = a+1
}
if(typeof a === 'string'){
    let b = a.toUpperCase();
}


// void
function hello(): void { // 원하면 void 써도 되지만 필요하진 않다.
    console.log('x')
}


// never
function hello():never {  // 타입을 never라고 하면 작동하지 않는다.
	return "X"
}

function hello():never {  // return하지 않고 오류를 발생시키는 함수
    throw new Error("xxx")
}

function hello(name:string|number) {
    if(typeof name === "string"){
        name // type : string
    } 
    else if(typeof name === "number"){
        name // type : number
    }
    // 아래 코드는 절대 실행되지 않아야 함
	  // -> Typescript에 hello가 name을 받을거고 이건 string이나 number라고 했기 때문
    else {
        name // type : never
    }
}


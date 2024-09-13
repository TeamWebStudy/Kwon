<h2>#2.0 How Typescripts Works</h2>
<h3>타입스크립트 : 프로그래밍 언어</h3>

- 개발자가 실수하지 않도록 보호해줌
- strongly typed(강타입) 프로그래밍 언어

- 타입스크립트의 경우 작성한 코드가 자바스크립트로 변환된다.
    - → 브라우저가 TS가 아닌 JS를 이해하기 때문
    - Node.js는 TS, JS 양 쪽 다 이해 가능
- 타입스크립트가 제공하는 보호장치 : TS → JS로 변환되기 전에 발생
    - 에러가 있으면 코드를 JS로 컴파일되지 않는다.
    - 이런 보호장치가 유저가 코드를 실행하는 런타임에 발생하는 것이 아니다.
<hr>
<h2>#2.1 Implicit Types vs Explicit Types</h2>
<h3>Typescript의 타입 시스템</h3>

Typescript : 두가지 접근방식의 결합

1. 데이터와 변수의 타입을 명시적으로 정의할 수 있다.
2. Javascript처럼 변수만 생성하고 넘어가도 된다.

⭐️ Typescript : 타입을 추론해준다

<p><b><옵션 1> : Javascript 코드와 별반 다르지 않다.</b></p>

```
let a = "hello"
a = "bye"
a = 1 // JS에서는 가능하지만 TS에서는 불가

>>>
Typescript는 a의 타입을 추론해준다.
a : string
```

<p><b><옵션 2> : Typescript에게 구체적으로 말해주는 것</b></p>

```
let b : boolean = "x"  // Error 발생
											 // b가 boolean이어야 한다.
->
let b : boolean = false
```

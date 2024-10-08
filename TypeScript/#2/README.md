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

<hr>
<h2>#2.2 Types of TS part Ⅰ</h2>
<h3>지금까지 살펴본 기본적인 타입</h3>

```
let a : number = 1;
let b : string = "i1";
let c : boolean = true
let d : number[] = [1, 2];
let e : string[] = ["i1", "1"];
let f : boolean[] = [true];
```

<b><문법></b>
- 콜론(:) + 타입
-> 가능한 한 Typescript가 추론하게 하는 것이 좋다.
```
let a = [1, 2];
```

<h3>Optional 타입</h3>
<p><b>optional 타입</b> : 객체의 속성이 선택적일 때 사용.<br></p>
<p>→ 즉, 객체의 특정 속성이 있을 수도 있고 없을 수도 있는 경우<br>
→ TypeScript에서는 속성 이름 뒤에 물음표(?)를 붙여서 선택적으로 만들 수 있다.</p>
<p>⭐︎optional 속성은 주로 API 요청에서 모든 필드가 항상 포함되지 않는 경우에 유용합니다.</p>



<h3>Alias 타입 생성</h3>
<p><b>타입 별칭(Alias Type)</b>: 복잡한 타입을 쉽게 재사용하거나, 여러 곳에서 반복될 수 있는 타입을 한 번에 정의하는 방식<br>type 키워드를 사용하여 타입에 이름을 붙일 수 있다.</p>

<hr>
<h2>#2.3 Types of TS part Ⅱ</h2>
<h3>readonly 속성</h3>
<p><b>readonly</b>: 객체의 속성 앞에 사용하여 그 속성이 초기화 이후에 수정되지 않도록 만든다.</p>
<p>- readonly 속성: 객체나 배열의 특정 속성을 수정할 수 없게 만듭니다.<br>
- 배열에서도 사용 가능: readonly 배열로 만들면 배열의 요소를 추가하거나 변경할 수 없습니다.<br>
- const와 차이점: const는 변수 자체의 재할당을 막고, readonly는 객체 속성의 수정을 막습니다.</p>
<p>⭐️ readonly는 불변성을 유지하고 코드의 안정성을 높이는 데 유용한 도구</p>

<h3>Tuple 타입</h3>
<p><b>Tuple</b>: 고정된 개수의 다양한 타입을 가질 수 있는 배열이다.</p>
<p><기본형><br></p>

```
const {변수명}: [타입1, 타입2, ..] = [값1, 값2, ..]
```

- 일반적인 배열과는 달리, 각 요소의 타입과 순서를 미리 지정할 수 있다.
- 튜플은 고정된 개수와 타입을 가지는 배열이다.
- 각 요소는 정해진 타입과 순서를 지키며, 그에 맞지 않으면 오류가 발생한다.

<h3>undefined 타입</h3>
<p><b>undefined</b>: 값이 정의되지 않은 상태를 나타냄</p>

- 변수는 초기화되지 않은 경우 <b>undefined</b> 값을 가질 수 있다.<br>
  Ex) 함수에서 값을 반환하지 않는 경우, 객체의 속성이 없는 경우 undefined가 나타날 수 있다.

<h3>null 타입</h3>
<p><b>null</b>: 의도적으로 값이 비어 있음을 나타냄</p>

- 값이 존재하지 않는 것을 명시적으로 표현할 때 사용<br>
  Ex) 변수가 특정 시점에 값을 가지지 않도록 명시적으로 설정할 때 null 사용

<h3>Any 타입</h3>
<p><b>Any</b>: 모든 타입을 허용하는 유연한 타입</p>

- Typescript의 타입 검사 무시 가능
- 어떤 타입의 값이라도 이 변수에 할당 가능
- TypeScript의 타입 안전성을 잃음
- 자주 타입을 알 수 없는 값을 다루거나 점진적 타입 시스템을 적용할 때 사용

<hr>
<h2>#2.4 Types of TS part Ⅲ</h2>
<h3>Typescript의 매우 독특한 타입</h3>

- Typescript에서만 존재하는 것
- Type Checker와 소통 가능

<h3>unknown 타입</h3>
<p><b>unknown</b>: TypeScript에서 모든 값을 받을 수 있지만, 안전하게 다룰 수 있도록 제약을 가하는 타입</p>

- API로부터 응답을 받는데 그 응답의 타입을 모른다면 → unknown 타입 사용 가능
- Any와의 차이점 : unknown을 사용할 때는 타입 검사를 반드시 해야 하며, 이를 통해 잠재적인 런타임 오류를 방지할 수 있다.

<h3>void 타입</h3>
<p><b>void</b>: 값이 없거나 반환되지 않는 상황을 나타내기 위해 사용</p>

- 함수의 반환 타입을 정의할 때 사용되며, 함수가 값을 반환하지 않음을 명시

<h3>never 타입</h3>
<p><b>never</b>: TypeScript에서 절대 발생하지 않는 값을 나타내기 위해 사용</p>

- 함수가 절대 반환하지 않는 경우나, 프로그램 흐름이 결코 도달하지 않는 경우에 사용
- 매우 특수한 타입으로, 모든 다른 타입의 서브타입

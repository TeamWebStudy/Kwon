// Overloading

// 오버로드 시그니처
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// 구현 시그니처
function add(a: any, b: any): any {
    return a + b;
}
// 사용
const result1 = add(1, 2);       // 3
const result2 = add("Hello, ", "World!");  // "Hello, World!"



type Add = {
    (a: number, b: number): number;  // 2개의 인자를 받는 함수 시그니처
    (a: number, b: number, c: number): number;  // 3개의 인자를 받는 함수 시그니처
};

const add: Add = (a: number, b: number, c?: number): number => {
    if (c !== undefined) {
        return a + b + c;  // c가 있을 때는 세 숫자를 더함
    }
    return a + b;  // c가 없을 때는 두 숫자만 더함
};

// 사용 예시
console.log(add(1, 2));        // 3 (두 개의 인자를 사용)
console.log(add(1, 2, 3));     // 6 (세 개의 인자를 사용)

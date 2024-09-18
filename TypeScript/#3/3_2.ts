// Polymorphism
type SuperPrint = {
    (arr: number[]):void
    (arr: boolean[]):void
    (arr: string[]):void
    (arr: (number|boolean)[]):void
}

const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}

superPrint([1, 2, 3, 4])
superPrint([true, false, true, true])
superPrint([1, 2, true, false])

// 모든 가능성을 다 조합해서 만들어야 한다. (-)



// Generic
type SuperPrint = {
    <TypePlaceholder>(arr: TypePlaceholder[]):void
}

const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}

superPrint([1, 2, 3, 4])
superPrint([true, false, true, true])
superPrint(["a", "b", "c"])
superPrint([1, 2, true, 'a'])

// 타입스크립트는 이 값들을 보고 타입을 유추하고 기본적으로 그 유추한 타입으로 call signature를 보여준다.


const nipa;
console.log(nipa);
// -> undefined (변수는 선언되었으나 값이 할당되지 않기 때문에)

console.log(nipa === undefined); //true(===연산자는 타입과 값이 모두 같아야 참을 반환)
console.log(nipa === null);     //false

function nipa1() { }
console.log(nipa1()) { }
// -> undefined (값을 반환하지 않는 함수를 호출하기 때문에)

const result = nipa1();
console.log(result === undefined);  //true(===연산자는 타입과 값이 모두 같아야 참을 반환)
console.log(result === null);     //false

const nipa2 = { };
console.log(nipa2.frontend);
// -> undefined (객체의 존재하지 않은 속성을 호출하기 때문에)

console.log(nipa2.frontend === undefined);  //true(===연산자는 타입과 값이 모두 같아야 참을 반환)
console.log(nipa2.frontend === null);     //false



nipa3 = null;
console.log(nipa3); 
// -> null (의도적으로 null을 할당하기 때문에)

console.log(nipa3 === null);  //true(===연산자는 타입과 값이 모두 같아야 참을 반환)
console.log(nipa3 === undefined);     //false

let nipa4 = document.querySelector('.backend');
console.log(nipa4); 
// -> null (DOM에서 존재하지 않는 요소를 호출하기 때문에)

console.log(nipa4 === null);  //true(===연산자는 타입과 값이 모두 같아야 참을 반환)
console.log(nipa4 === undefined);     //false
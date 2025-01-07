// 1) 단일 함수의 생성
console.log('1) 단일 함수의 생성');
function calcurate(number){
  console.log( number * 10 );
}

calcurate(4);

// 2) 여러개 파라미터 사용
console.log('2) 여러개 파라미터 사용');
function multiply(x, y){
  console.log(x*y);
}

multiply(3, 4);

// 3) default 파라미터 사용
console.log('3) default 파라미터 사용');
function minus(x,y = 1){
  console.log(x - y);
}

minus(5);
minus(5,3);

// 4) 결과 반환 받기
console.log('4) 결과 반환 받기');
function divide(x, y){
  return x / y;
}
let result = divide(7, 3);
console.log(result);

// 5) Arrow 함수 : 기존 함수의 간략 표현
console.log('5) Arrow 함수');

// 명시적 선언방법
const firstMulti=function(x, y){
  return x * y;
}

console.log(firstMulti(7,3));

// Arrow Function
const secondMulti = (x, y) => {
  return x * y;
}
console.log(firstMulti(5,8));

// 간편하게 표현하는 법
const thirdMulti = (x,y) => x*y;
console.log(thirdMulti(7,8));

// 인자가 1개 일때
const forthMulti = x => x*5;
console.log(forthMulti(4));

// 즉시 실행함수
console.log("즉시 실행 함수");
(function(x, y){
  console.log(x * y);
})(4,5);
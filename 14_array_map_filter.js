let iveMembers = [
  '안유진',
  '장원영',
  '레이',
  '리즈',
];

// 1. map() : 원래 배열 변형 시킴 -> 새것으로 준다.
// *** : React 에서 for 문을 map 으로 돌린다.

console.log('1. map()');
console.log(iveMembers.map((x)=> x));
console.log(iveMembers.map((x)=> `아이브 : ${x}`));
console.log(iveMembers);
// 안유진만... 아이브 : 안유진 으로 출력
console.log('2. 안유진만... 아이브 : 안유진');
console.log(iveMembers.map((x)=> {
  if(x === '안유진'){
    return `아이브 : ${x}`
  } else return x;
}))

// 3. map을 반복문으로 처리
let i = 1;
iveMembers.map((x) => {
console.log(i);
i++;
})

// 4. filter 사용하기
console.log('4. filter 사용하기');
let values = [
  1,
  9,
  8,
  5,
  3,
];

//전체 출력하기
console.log('전체 :' + values.filter((x)=> x));

// 짝수 출력하기
console.log('짝수 : ' + values.filter((x) => (x % 2)===0));

// 3보다 큰 수 출력

const results = values.filter(num => num > 3);
console.log(results);

// 3보다 큰 수 찾아서 오름차순 정렬하기
let newArr;
console.log('3보다 큰 수 정렬하기');
newArr = values.filter((x) => x > 3).sort((x, y) => x-y);
console.log(newArr);

// 5. find() 함수

// 6. reduce() 함수
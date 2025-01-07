let iveMembers = [
  '안유진',
  '장원영',
  '레이',
  '리즈',
];
console.log(iveMembers);

// 1. concat() : 새로운 ITEM을 맨 뒤에 삽입
console.log('1. concat()')
console.log(iveMembers.concat('이서'));
console.log(iveMembers);

// 2. slice(어디서부터, 어디전까지) : 삭제...
// 원본 수정 x
console.log('2. slice()');
console.log(iveMembers.slice(0,2));
console.log(iveMembers);

// 3. spread operator (...) : 기본 배열을 쫘악 펼쳐서 처리
// ive2 에 iveMembers 배열을 복사...
console.log('3. spread operator()');
let ive2 = iveMembers; // 이런 얕은 복사를 사용하지 않는다.
let ive3 = [... iveMembers]; // 깊은 복사

iveMembers.push('이서');
console.log(ive2);
console.log(ive3);

// 4. 클래스 깊은 복사
let jang = {
  name : '장원영',
  age : 22
};

let 장원영 = {... jang};
jang.age = 25;

console.log(jang);
console.log(장원영);

// 5. join() : 배열 간 자료를 ,(comma) 로 구분 후 이어줌
console.log('5. join()');
console.log(iveMembers.join());

// 6. 기존 배열에 값을 추가 -- 가을 추가
let newIve = [... iveMembers, '가을'];
console.log(newIve);
iveMembers = [... newIve];
console.log(iveMembers);

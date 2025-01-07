let iveMembers = [
  '안유진',
  '장원영',
  '레이',
  '리즈',
];
console.log(iveMembers);

// 1. push() : Array 맨 끝에 새로운 데이터 추가
iveMembers.push('가을');
console.log(iveMembers);
console.log('전체 아이돌 수 : ' + iveMembers.length);

// 2. pop() : Array의 맨 마지막 item 반환 --> 삭제
console.log(iveMembers.pop());
console.log(iveMembers);

// 3. unshift() : 맨 앞에 데이터를 추가
iveMembers.unshift('이서');
console.log(iveMembers);

// 4. shift() : 맨 앞 데이터 삭제
iveMembers.shift();
console.log(iveMembers);

// 5. 중간 삽입 없음.

// 6. splice(어디서부터, 몇개를) 중간 데이터 삭제.
iveMembers.splice(1, 1);
console.log(iveMembers);



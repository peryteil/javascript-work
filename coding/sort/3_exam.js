const fs = require('fs');

// 입력 받기
const input = fs.readFileSync("./data/3_exam.txt", 'utf-8').trim().split('\n');

// 첫 번째 줄: 숫자의 개수
const N = parseInt(input[0]);

// 두 번째 줄: 숫자 배열
const numbers = input[1].split(' ').map(Number);

// 좌표 압축 수행
// 1. 중복 제거 및 정렬
const sortedUnique = [...new Set(numbers)].sort((a, b) => a - b);

// 2. 정렬된 값의 인덱스를 저장 (압축된 좌표)
const rankMap = new Map();
sortedUnique.forEach((value, index) => {
  rankMap.set(value, index);
});

// 3. 원래 배열을 압축된 순위로 변환
const result = numbers.map(num => rankMap.get(num));

// 결과 출력
console.log(result.join(' '));
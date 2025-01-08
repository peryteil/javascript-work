const fs = require('fs');

// 파일에서 입력 받기
const input = fs.readFileSync('./data/4_exam.txt', 'utf-8').trim();

// 숫자를 문자열로 변환 후 각 자리를 배열로 나누고 내림차순 정렬
const sortedNumber = input.split('')
                           .sort((a, b) => b - a)  // 내림차순 정렬
                           .join('');  // 배열을 다시 문자열로 합침

// 결과 출력
console.log(sortedNumber);
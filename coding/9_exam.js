const fs = require('fs');
// './data/9_exam.txt' 파일을 읽어서 입력 받기
let input = fs.readFileSync('./data/9_exam.txt')
          .toString().split(' ');
// 두 수 A 와 B
let A = input[0];
let B = input[1];
// 숫자들을 거꾸로 뒤집어서 비교
let reversedA = parseInt(A.split('').reverse().join(''));
let reversedB = parseInt(B.split('').reverse().join(''));
// 더 큰 값을 출력
console.log(Math.max(reversedA, reversedB));
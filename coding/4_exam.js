const fs = require('fs');
const input = fs.readFileSync('./data/4_exam.txt').toString().trim().split('\n');
//4_exam.txt 파일을 읽고, 공백이나 줄바꿈 문자를 기준으로 입력을 나눕니다.
const numbers = input[1].split(' ').map(Number);
//두 번째 줄의 숫자들을 공백을 기준으로 나누어 숫자로 변환하여 배열로 저장합니다.
const min = Math.min(...numbers);
//배열에서 최소값을 찾습니다.
const max = Math.max(...numbers);
//배열에서 최대값을 찾습니다.
console.log(`${min} ${max}`);
//구한 최소값과 최대값을 출력합니다.
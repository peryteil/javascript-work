let fs = require("fs");
// 2_exam.txt 파일에서 입력 받기
let input = fs.readFileSync("./data/2_exam.txt").toString().split("\n");
// 첫 번째 줄에서 두 수를 공백을 기준으로 나누어 숫자로 변환
input = input[0].split(" ").map(Number);
// 두 수를 각각 a와 b에 저장
const a = input[0];
const b = input[1];
// b의 각 자릿수를 분리하여 a와 곱하기
const line1 = a * (b % 10);
const line2 = a * Math.floor((b % 100) / 10);
const line3 = a * Math.floor(b / 100);
// 최종 결과 계산
const result = a * b;
// 출력
const output = `${line1}\n${line2}\n${line3}\n${result}`;
console.log(output);

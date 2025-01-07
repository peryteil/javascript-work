const fs = require("fs");
// '5_exam.txt' 파일 경로 설정
let input = fs.readFileSync("./data/5_exam.txt").toString().trim();
// 파일 내용 읽고 양쪽 공백 제거
input = input.split("\n").map(Number);
// 각 줄을 배열로 나누고, 숫자로 변환
const max_value = Math.max(...input);
// 최댓값을 찾고, 그 최댓값의 인덱스를 구하기
const max_index = input.indexOf(max_value) + 1;
// 인덱스를 1-based로 변환
console.log(max_value);
// 최댓값 출력
console.log(max_index);
// 최댓값이 몇 번째 수인지를 출력

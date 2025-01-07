let fs = require("fs");

let input = fs.readFileSync("./data/3_exam.txt").toString().trim();
//// '3_exam.txt' 파일에서 입력 받기
const score = parseInt(input, 10);
// 첫 번째 줄에 있는 점수만 추출 (input은 하나의 점수만 포함하는 문자열이므로 그대로 숫자로 변환)
let grade;
// 학점 계산
if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 80 && score <= 89) {
  grade = "B";
} else if (score >= 70 && score <= 79) {
  grade = "C";
} else if (score >= 60 && score <= 69) {
  grade = "D";
} else if (score >= 0 && score < 60) {
  grade = "F";
} else {
  grade = "Invalid score";// 점수가 0 이상 100 이하가 아닐 경우 처리
}
console.log(grade);

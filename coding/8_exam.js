const fs = require("fs");
// './data/8_exam.txt' 파일을 읽어서 입력 받기
let input = fs.readFileSync("./data/8_exam.txt").toString().split("\n");
// 첫 번째 줄에서 테스트 케이스 개수 T를 받음
const T = parseInt(input[0]);
// 각 테스트 케이스 처리
for (let i = 1; i <= T; i++) {
  const [R, S] = input[i].split(" ");
  const repeatCount = parseInt(R);
  // 각 문자를 R번 반복하여 새 문자열 만들기
  let result = "";
  for (let char of S) {
    result += char.repeat(repeatCount);
  }
  // 결과 출력
  console.log(result);
}

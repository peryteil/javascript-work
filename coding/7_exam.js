const fs = require("fs");
// './data/7_exam.txt' 파일을 읽어서 입력받기
let input = fs.readFileSync("./data/7_exam.txt").toString().split("\n");
// 첫 번째 줄에서 시험 과목 수 N을 받음
const N = parseInt(input[0]);
// 두 번째 줄에서 성적을 받음
const scores = input[1].split(" ").map(Number);
// M은 성적들 중 최댓값
const M = Math.max(...scores);
// 변환된 점수들의 합을 구함
const newScoresSum = scores.reduce((sum, score) => sum + (score / M) * 100, 0);
// 새로운 평균을 구함
const newAverage = newScoresSum / N;
// 결과를 소수점 이하 6자리까지 출력

console.log(newAverage.toFixed(6));

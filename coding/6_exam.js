const fs = require('fs');
let input = fs.readFileSync('./data/6_exam.txt')
          .toString().trim().split('\n');
          // 파일 내용 읽고 줄 단위로 나누기
const C = parseInt(input[0]);
// 테스트 케이스 개수
for (let i = 1; i <= C; i++) {
  // 각 점수 배열로 변환
  const scores = input[i].split(' ').map(Number);
  // 학생 수
  const N = scores[0];
  // 학생들의 점수 배열
  const studentScores = scores.slice(1);
  // 평균 계산
  const avg = studentScores.reduce((sum, score) => sum + score, 0) / N;
  // 평균을 넘는 학생 수 계산
  const aboveAvgCount = studentScores.filter(score => score > avg).length;
  // 비율 계산
  const percentage = (aboveAvgCount / N) * 100;
  // 소수점 셋째 자리까지 반올림하여 출력
  console.log(percentage.toFixed(3) + '%');
}
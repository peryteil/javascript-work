const fs = require('fs');
let input = fs.readFileSync('./data/6_exam.txt')
          .toString().split('\n');
          // 전체 시료 갯수
let n = parseInt(input[0]);

for(let i=1; i<=n; i++){
let data = input[i].split(' ').Map(Number);
let m = data[0];
let sum = 0;
for(let j=0; j < m; j++){
  sum += data[j];
}
// 총점계산
console.log(sum);
// 평균계산
let avg = sum / m;
console.log(avg);
// 평균보다 큰 값의 수 저장 변수
let cnt;
for(let k=1; k < n; k++){
  if(data[k]> avg) cnt = cnt + 1;
}
// 평균 이상자 수의 비율
let rate = (cnt / n );
console.log("===" + cnt);
}

          // 파일 내용 읽고 줄 단위로 나누기
// const C = parseInt(input[0]);
// // 테스트 케이스 개수
// for (let i = 1; i <= C; i++) {
//   // 각 점수 배열로 변환
//   const scores = input[i].split(' ').map(Number);
//   // 학생 수
//   const N = scores[0];
//   // 학생들의 점수 배열
//   const studentScores = scores.slice(1);
//   // 평균 계산
//   const avg = studentScores.reduce((sum, score) => sum + score, 0) / N;
//   // 평균을 넘는 학생 수 계산
//   const aboveAvgCount = studentScores.filter(score => score > avg).length;
//   // 비율 계산
//   const percentage = (aboveAvgCount / N) * 100;
//   // 소수점 셋째 자리까지 반올림하여 출력
//   console.log(percentage.toFixed(3) + '%');
// }


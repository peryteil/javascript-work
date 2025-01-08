const fs = require('fs');
// 파일에서 입력 읽기
const input = fs.readFileSync("./data/1_exam.txt", 'utf-8').trim().split('\n');
// 첫 번째 줄: 점의 개수
const N = parseInt(input[0]);
// 나머지 줄: 좌표를 배열로 변환
const points = [];
for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  points.push([x, y]);
}
// 좌표 정렬: x좌표 기준, x좌표 같으면 y좌표 기준
points.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1]; // y좌표 오름차순
  }
  return a[0] - b[0]; // x좌표 오름차순
});
// 결과 출력
const result = points.map(point => point.join(' ')).join('\n');
console.log(result);
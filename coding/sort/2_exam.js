const fs = require('fs');
// 파일에서 입력 읽기
const input = fs.readFileSync("./data/2_exam.txt", 'utf-8').trim().split('\n');
// 첫 번째 줄: 단어의 개수
const N = parseInt(input[0]);

// 나머지 줄: 단어 배열
const words = input.slice(1);

// 중복 제거
const uniqueWords = [...new Set(words)];

// 정렬: 길이 순, 길이가 같으면 사전 순
uniqueWords.sort((a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b); // 사전 순 정렬
  }
  return a.length - b.length; // 길이 기준 정렬
});

// 결과 출력
console.log(uniqueWords.join('\n'));

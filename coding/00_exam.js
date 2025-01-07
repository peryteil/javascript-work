// exam_00.txt 파일을 읽어서
// 배열에 넣은 후
// 큰 값을 찾아 출력하는 문제

let fs = require("fs");

let input = fs.readFileSync("./data/00_exam.txt").toString().split("\n");
console.log(input);

let count = input[0].split(" ").map(Number);
let data = input[1].split(" ").map(Number);
console.log(count);
console.log(data);
// 가장 큰 값 찍기
console.log(data.reduce((x, y) => Math.max(x, y)));

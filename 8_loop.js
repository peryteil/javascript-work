// 1. 구구단 출력

for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log('----------'); // 각 단 구분선
}

// 2. 별찍기

/**
 *      #
 *     ###
 *    #####
 *   ######## 
 */

// const rows = 4;

// for (let i =1; i <= rows; i++) {
// const spaces = ' '.repeat(rows - i);
// const stars = '#'.repeat(2 * i -1);
// console.log(spaces + stars);
// }
let star = new Array(7).fill(' ');

let mid = 3;

star[mid] = '*';
//출력
// console.log(star);
//배열을 문자열로 변화
let starPrint = star.join('');
//출력
console.log(starPrint);
for(let i=1 ; i<=mid; i++){
  star[mid] ='*'
  for(let j=1; j<=i; j++){
    star[mid+j] ='*'
    star[mid-j] ='*'
  }
  starPrint = star.join('');
  console.log(starPrint);
}

// console.log(star);

// for ~ in
let idol = ['장원영', '안유진','이서']
for (let key in idol){
  console.log(`${key}: ${idol[key]}`)
}
    
// for ~ of
for(let value of idol){
  console.log(value);
}
// if구문
let number = 5;
if (number % 2 === 0) {
  console.log(number + " 는 짝수입니다.");
} else {
  console.log(`${number}는 홀수입니다.`);
}
if (number % 2 === 0) {
  console.log(number + " 는 2의 배수입니다.");
} else if (number % 3 === 0) {
  console.log(`${number}는 3의 배수입니다.`);
} else {
  console.log("몰라요.");
}

//switch 구문
let num = 1;
switch (num) {
  case 1:
    console.log("홀수");
    break;
  case 2:
    console.log("짝수");
    break;
  default:
    break;
}

const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const result = document.getElementById("res");

const comp =
  n1.value > n2.value
    ? "첫 번째 숫자가 더 큽니다."
    : "두 번째 숫자가 더 크거나 같습니다.";
const add = n1.value + n2.value;
const mul = n1.value * n2.value;
const sub = n1.value - n2.value;

function calc() {  
  result.innerText =  n1.value + n2.value ? "더하기 결과 : " +
    n1.value * n2.value ? "곱하기 결과 : " +
    n1.value - n2.value ? "빼기 결과 : " +
    n1.value > n2.value
      ? "첫 번째 숫자가 더 큽니다."
      : "두 번째 숫자가 더 크거나 같습니다.";
  result.style.color = n1.value > n2.value ? "lightblue" : "lightpink";
}

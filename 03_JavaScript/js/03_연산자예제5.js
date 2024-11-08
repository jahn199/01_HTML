const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const rst = document.getElementById("result");

function sum() {
  const value1 = num1.value;
  const value2 = num2.value;
  const total = Number(value1) + Number(value2);
  rst.innerText = "합 : " + total;
}

function mul() {
  const value1 = num1.value;
  const value2 = num2.value;
  const total = Number(value1) * Number(value2);
  rst.innerText = "합 : " + total;
}

function evenOdd() {
  const value1 = num1.value;
  const value2 = num2.value;
  const sumResult = Number(value1) + Number(value2);
  const isEven = sumResult % 2 == 0 ? "짝수" : "홀수";
  rst.innerText = "합 " + sumResult + "은(는)" + isEven + "입니다.";
}

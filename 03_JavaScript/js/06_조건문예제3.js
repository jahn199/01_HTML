/*어린이 청소년 성인 판별 */
function check4() {
  const age = document.getElementById("inputAge").value;
  if (age >= 0 && age <= 13) {
    alert("어린이 입니다.");
  } else if (age >= 19 && age <= 120) {
    alert("성인 입니다.");
  } else (age >= 14 && age <= 18) {
    alert("청소년 입니다.");
  } else () {
    alert("잘못 입력하셨습니다.");
  }
}

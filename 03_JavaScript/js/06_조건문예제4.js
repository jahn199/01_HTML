function checkGrade() {
  const score = document.getElementById("inputScore").value;
  //input이 아닌 p나 span이나 h1 같은 태그들은 value 값이 없음
  //메세지가 출력되는 공간에는 value가 없기 때문에 작성하지 않음
  const msg = document.getElementById("gradeMsg");
  if (score >= 90) {
    msg.innerText = "A입니다";
    msg.className = "A";//대 소문자 구분을 하기 때문에 명확하게 작성
  } else if (score >= 80) {
    msg.innerText = "B입니다";
    msg.className = "B";
  } else if (score >= 70) {
    msg.innerText = "C입니다";
    msg.className = "C";
  } else if (score >= 60) {
    msg.innerText = "D입니다";
    msg.className = "D";
  } else {
    msg.innerText = "F입니다";
    msg.className = "F";
  }
}
//한꺼번에 하고 싶다면...
//바깥에 msg.innerText = "성적 : "; 쓰고
//msg.innerText += "A입니다";  +가 이어붙여줌

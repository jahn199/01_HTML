function checkGrade() {
  const score = document.getElementById("inputScore").value;
  const msg = document.getElementById("scoreMsg");
  if (score >= 90) {
    msg.innerText = "A입니다";
    msg.className = "A";
  } else if (89 >= score >= 80) {
    msg.innerText = "B입니다";
    msg.className = "B";
  } else if (79 >= score >= 70) {
    msg.innerText = "C입니다";
    msg.className = "C";
  } else if (69 >= score >= 60) {
    msg.innerText = "D입니다";
    msg.className = "D";
  } else {
    msg.innerText = "F입니다";
    msg.className = "F";
  }
}

function checkSeason() {
  const month = document.getElementById("month").value;
  const msg = document.getElementById("seasonMsg");
  if (month >= 3 && month <= 5) {
    msg.innerText = "봄입니다.";
    msg.className = "spring";
  } else if (month >= 6 && month <= 8) {
    msg.innerText = "여름입니다.";
    msg.className = "summer";
  } else if (month >= 9 && month <= 11) {
    msg.innerText = "가을입니다.";
    msg.className = "fall";
  } else if (month == 12 || month == 1 || month == 2) {
    msg.innerText = "겨울입니다.";
    msg.className = "winter";
  } else {
    msg.innerText = "1월부터 12월 사이를 작성해주세요.";
    msg.className = "";
  }
}

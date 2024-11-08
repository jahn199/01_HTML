const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");
const mp = document.getElementById("inputMp");
const tp = document.getElementById("inputTp");
const msg = document.getElementById("msg");

function 회원가입() {
  const abc = 10;
  const mobilePhone = mp.value;
  const telPhone = tp.value;
  mobilePhone || telPhone
    ? (msg.style.display = "none")
    : (msg.style.display = "block");
}

function 로그인() {
  const id = inputId.value;
  const pw = inputPw.value;
  id == "what" && pw == "look" ? alert("로그인성공!") : alert("로그인실패!");
}

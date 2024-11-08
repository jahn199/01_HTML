function checkPw() {
  const pw = inputPw.value;
  const pwConfirm = inputPwConfirm.value;
  const success = "비밀번호가 일치합니다.";
  const fail = "비밀번호가 일치하지 않습니다.";
  "pass1234!" == pw && "pass1234!" == pwConfirm ? alert(success) : alert(fail);
}

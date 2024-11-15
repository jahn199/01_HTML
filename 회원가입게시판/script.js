function 회원가입() {
  const a1 = document.getElementById("동의1").checked;
  const a2 = document.getElementById("동의2").checked;
  const a3 = document.getElementById("동의3").checked;
  const termsAll = a1 && a2 && a3;

  if (termsAll) {
    window.location.href = "회원가입.html";
  } else {
    alert("모든 필수 약관에 동의해야 합니다.");
  }
}

function 가입() {
  const inputName = document.getElementById("name").value;
  const inputPw = document.getElementById("pw").value;
  const inputMail = document.getElementById("mail").value;

  const nameRegExp = /^[a-zA-Z0-9]{5,12}$/;
  const pwRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  /*
    (?=.*[A-Za-z]) = 대소문자 영어가 있는지 탐색
    (?=.*\d) = (?=.*[0-9]) = 숫자가 포함되어 있는가
    영어 대소문자나 숫자가 모두 하나이상 포함이 되어있어야 하는 비밀번호
    */
  const mailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!nameRegExp.test(inputName)) {
    alert("아이디는 5-12자의 영문자 및 숫자여야 합니다.");
    return false;
  }
  if (!pwRegExp.test(inputPw)) {
    alert("비밀번호는 8자 이상의 영문자, 숫자, 특수문자가 있어야 합니다.");
    return false;
  }
  if (!pwRegExp.test(inputMail)) {
    alert("올바르지 않습니다.");
    return false;
  }
  alert("회원가입이 완료되었습니다.");
}

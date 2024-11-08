//document.get~ 특정 아이디나 태그나 클래스명을 가져오는 설정
//맨 위 작성 시작, 단 value는 제외

const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");

function login() {
  //가져오기를 할 때 숫자로 합을 작성하지 않는 한 Number 사용하지 않음
  const id = inputId.value; //소비자가 작성한 아이디 값 최종적으로 가져오기
  const pw = inputPw.value; //소비자가 작성한 비밀번호 값 최종적으로 가져오기

  //회원가입한 아이디가 member01
  //회원가입한 비밀번호가 pass01
  const success = "로그인 성공!"; //alert("로그인 성공!")
  const fail = "아이디 또는 비밀번호가 일치하지 않습니다."; //alert("로그인 실패!")

  "member01" == id && "pass01" == pw
    ? alert("success") //모두 일치할 때
    : alert("fail"); //둘 중 하나라도 일치하지 않을 때
}

function checkNumber() {
  const pn = document.getElementById("phone").value;
  const tn = document.getElementById("tel").value;
  const msg = document.getElementById("msg");

  //삼항 연산자로 입력 여부를 확인 한 후 메세지 표시 또는 메세지 숨기기
  pn || tn ? alert("번호를 입력하셨네요!") : (msg.style.display = "block");
  //둘 중 하나라도 입력하면 전화번호나 휴대폰 번호를 입력해주세요 라는 글자 숨기기
  pn || tn ? (msg.style.display = "none") : (msg.style.display = "block");
}

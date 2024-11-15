function checkEmail() {
  const userEmail = document.getElementById("user-email").value;
  const errorMsg = document.getElementById("error-msg");
  /*
    /^ = 정규식 시작 표기
    [a-zA-z0-9.-_] = @(at)이 작성되기 전에 영어소문자 대문자 숫자 특수문자(.-_) 포함해서 작성 가능
    +@ = +@ 앞에 작성한 아이디 표기 뒤에 무조건 @(at)가 뒤에 작성되어야 함   
    [a-zA-z0-9.-가-힣] = @ 뒤에 회사명과 같은 도메인명이 작성되어야함
    +\. = 회사명(도메인명)이 작성된 후 무조건 뒤에 . 붙여져야함  
    [a-zA-z가-힣] = . 뒤에 kr이나 com이나 한국과 같은 도메인명이 올 수 있도록 설정   
    {2,} = 위 규칙을 모두 지키는 기준으로 최소 2자 이상 작성
    $/ = 
    */
  const emailPattern = /^[a-zA-z0-9.-_]+@[a-zA-z0-9.-]+\.[a-zA-z]{2,}$/;
  // ↑ = co. kr 대비용 .
  if (!emailPattern.test(userEmail)) {
    errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";
  }
}

function checkPhone() {
  const userPhone = document.getElementById("user-phone");
  const errorMsg = document.getElementById("err-msg");

  const phonePattern1 = /^010-[0-9]{4}-[0-9]{4}$/;
  const phonePattern2 = /^010-\d{4}-\d{4}$/;

  if (!phonePattern.test(userPhone)) {
    errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";
  }
}

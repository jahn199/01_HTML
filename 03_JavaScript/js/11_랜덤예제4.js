function pickFruit() {
  const result = document.getElementById("result");
  const 과일들 = [
    "사과",
    "오렌지",
    "바나나",
    "체리",
    "망고",
    "포도",
    "블루베리",
    "복숭아",
  ];
  console.log("총 과일의 갯수 : " + 과일들.length);
  console.log("index 5 위치한 과일 : " + 과일들[5]);
  const 랜덤 = Math.floor(Math.random() * 과일들.length);
  //floor를 주로 쓰는 이유는 숫자가 5까지 있는데
  //실수로 5.5가 나왔을 때 6으로 반올림되거나 올림되면
  //빈 값이 출력되기 때문
  const 랜덤과일 = 과일들[랜덤];
  result.innerText = "랜덤으로 뽑힌 과일 :" + 랜덤과일;

  //큰따옴표나 작은따옴표로 문자열과 변수명을 구분짓지 않고 한번에 작성하는 방법
  //역따옴표는 문자열과 변수명을 모두 한번에 작성하는 방법
  //변수명에는 ${변수명}으로 표기를 하면 위에있는 변수명으로 표기
  //result.innerText = '랜덤으로 뽑힌 과일 : 랜덤과일';
  //result.innerText = '랜덤으로 뽑힌 과일 : ${랜덤과일}';
}

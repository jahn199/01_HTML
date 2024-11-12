// let 변화가 가능한 값이기 때문에 변수명에 변수값을 넣지 않아도
//      가능 하지만
// const의 경우 상수라 값이 변하면 안되기 때문에
//      초기에 상수명과 상수명에 들어갈 상수값을 항시 같이 작성
function selectSeason() {
  let season;
  const result = document.getElementById("result");
  const bcd = document.getElementById("bcd");
  //innerText와 마찬가지로 배경색상 또한 색상 지정이 되긴 하지만
  // switch문이 while문으로 이동하는 속도가 더 빠르게 진행되기 때문에
  // 사람의 눈에 보이기 전에 색상 초기화
  while (season !== null) {
    season = prompt("숫자를 입력하세요.");
    switch (season) {
      case "3":
      case "4":
      case "5":
        bcd.style.backgroundColor = "lightpink";
        alert("봄입니다");
        break;
      case "6":
      case "7":
      case "8":
        bcd.style.backgroundColor = "lightyellow";
        alert("여름입니다");
        break;
      case "9":
      case "10":
      case "11":
        bcd.style.backgroundColor = "sandybrown";
        alert("가을입니다");
        break;
      case "12":
      case "1":
      case "2":
        bcd.style.backgroundColor = "lightblue";
        alert("겨울입니다");
        break;
      case "종료":
        bcd.style.backgroundColor = "white";
        alert("종료하기");
        return;
      default:
        bcd.style.backgroundColor = "white";
        alert("잘못 입력하셨습니다.");
        break;
    }
  }
}

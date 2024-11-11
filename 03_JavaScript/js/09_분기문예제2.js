function background() {
  let bgc;
  const result = document.getElementById("result");
  const bd = document.getElementById("bd");

  while (bgc !== null) {
    bgc = prompt("계절(숫자)을 입력하세요.");

    switch (bgc) {
      case "3":
      case "4":
      case "5":
        result.innerText = "봄을 선택하셨습니다.";
        bd.style.backgroundColor = "lightpink";
        break;

      case "6":
      case "7":
      case "8":
        result.innerText = "여름을 선택하셨습니다.";
        bd.style.backgroundColor = "lightyellow";
        break;

      case "9":
      case "10":
      case "11":
        result.innerText = "가을을 선택하셨습니다.";
        bd.style.backgroundColor = "sandybrown";
        break;

      case "12":
      case "1":
      case "2":
        result.innerText = "겨울을 선택하셨습니다.";
        bd.style.backgroundColor = "lightblue";
        break;

      case "종료":
        result.innerText = "종료되었습니다.";
        bd.style.backgroundColor = "white";
        return;

      default:
        result.innerText = "잘못된 선택입니다.";
        bd.style.backgroundColor = "white";
        break;
    }
  }
}

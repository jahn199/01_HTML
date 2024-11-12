function 한식주문(food) {
  const price = 한식가격(food);
  const result = document.getElementById("result");
  if (price > 0) {
    result.innerText =
      food + " 주문이 완료되었습니다. 가격은 " + price + " 입니다.";
  } else {
    result.innerText = "현재 재료 소진되었습니다.";
  }
}

function 한식가격(food) {
  if (food === "비빔밥") {
    return 8000;
  } else if (food === "김치찌개") {
    return 7000;
  } else if (food === "된장찌개") {
    return 7000;
  } else {
    return 0;
  }
}

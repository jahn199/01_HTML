function 색상변경(color) {
  const bcd = document.getElementById("bd");

  switch (color) {
    case "lightblue":
      bcd.style.backgroundColor = "lightblue";
      break;
    case "lightcoral":
      bcd.style.backgroundColor = "lightcoral";
      break;
    case "lightyellow":
      bcd.style.backgroundColor = "lightyellow";
      break;
    case "lightgreen":
      bcd.style.backgroundColor = "lightgreen";
      break;
    case "lightgray":
      bcd.style.backgroundColor = "lightgray";
      break;
  }
}

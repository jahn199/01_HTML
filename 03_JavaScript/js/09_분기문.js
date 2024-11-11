/*break 확인 */
function check1() {
  //1부터 10까지 1씩 증가하다가
  //5가 되면 멈춤

  let result = 0;
  //    초기식   ; 조건식;  증강식
  for (let a = 1; a <= 10; a++) {
    result += a;
    //만약에 숫자 5가 되면 멈추고 싶음
    if (a == 5) {
      break; //a라는 숫자가 5가 되면 행동을 멈춤
      //break는 for문을 조건식에서 모든 숫자의 행동을 진행하다가
      //특정 숫자나 값이 보이면 for문을 모두 중단
      //for문에서 중단하기 전의 값을 저장한 상태로 탈출
    }
  }
  alert(result); //result에는 1부터 5까지 더한 숫자값 표기
}

function check2() {
  let result = 0;
  // 1~20
  //첫 번째 숫자 + 마지막 숫자 = 21
  //20/2 = 10
  //21*10 =210
  //1 ~10 = 11    10/2 = 5    11*5 = 55
  for (let b = 1; b <= 20; b++) {
    result += b;
    if (b == 15) {
      break;
    }
  }
  alert(result);
}

function check3() {
  for (let abc = 1; abc <= 20; abc++) {
    console.log("ABC의 값 :" + abc);
    if (abc % 3 == 0) {
      break;
    }
    console.log("ABC 값 [" + abc + "]");
  }
}

//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочкa рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

function t1() {
  let out1 = document.querySelector(".out-1");
  let res = "";
  for (let i = 3; i > 0; i--) {
    for (let j = 3; j > 0; j--) {
      res += "*";
    }
    res += "_";
  }
  out1.innerHTML = res;
}

document.querySelector(".b-1").onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифру и перенос строки br, внутренний - *_, и после этого внешний - знак переноса.</p>
function t2() {
  let out2 = document.querySelector(".out-2");
  let res = "";
  for (let i = 1; i < 4; i++) {
    res += i + "</br>";
    for (let j = 3; j > 0; j--) {
      res += "*_";
    }
    res += "</br>";
  }
  out2.innerHTML = res;
}

document.querySelector(".b-2").onclick = t2;

//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_

// <p>Решить задачу с помощью вложенных циклов. Внутренний цикл выводит *_,  внешний цикл выводит перенос строки br.</p>
function t3() {
  let out3 = document.querySelector(".out-3");
  let res = "";
  for (let i = 0; i < 4; i++) {
    for (let j = 3; j > 0; j--) {
      res += "*_";
    }
    res += "</br>";
  }
  out3.innerHTML = res;
}

document.querySelector(".b-3").onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1_1*2*3*4*5*2_1*2*3*4*5*3_1*2*3*4*5*
// Внешний цикл выводит цифру и _, а внутренний выводит от 1 до 5 с *
function t4() {
  let out4 = document.querySelector(".out-4");
  let res = "";
  for (let i = 1; i < 4; i++) {
    res += i + "_";
    for (let j = 1; j < 6; j++) {
      res += j + "*";
    }
  }
  out4.innerHTML = res;
}

document.querySelector(".b-4").onclick = t4;

//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 101010
// 101010
// 101010

// <p>Вложенный цикл в зависимости от четного или нет k (счетчика цикла) рисует или 0 или 1. Внешний цикл - br.</p>
function t5() {
  let out5 = document.querySelector(".out-5");
  let res = "";
  for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 7; j++) {
      if (j % 2 == 0) {
        res += "0";
      } else res += "1";
    }
    res += "</br>";
  }
  out5.innerHTML = res;
}

document.querySelector(".b-5").onclick = t5;

//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 10x01x
// 10x01x
// 10x01x

function t6() {
  let out6 = document.querySelector(".out-6");
  let res = "";
  for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 7; j++) {
      if (j % 3 == 0) {
        res += "X";
      } else if (j % 2 == 0) {
        res += "0";
      } else res += "1";
    }
    res += "</br>";
  }
  out6.innerHTML = res;
}

document.querySelector(".b-6").onclick = t6;

//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *
// **
// ***
// ****

function t7() {
  let out7 = document.querySelector(".out-7");
  let res = "";
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i; j++) {
      res += "*";
    }
    res += "</br>";
  }

  out7.innerHTML = res;
}

document.querySelector(".b-7").onclick = t7;

//  Task 8
// Per aspera ad astra
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *****
// ****
// ***
// **
// *

function t8() {
  let out8 = document.querySelector(".out-8");
  let res = "";
  for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      res += "*";
    }
    res += "</br>";
  }

  out8.innerHTML = res;
}

document.querySelector(".b-8").onclick = t8;

//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 1_
// 1_2_
// 1_2_3_
// 1_2_3_4_
// 1_2_3_4_5_

function t9() {
  let out9 = document.querySelector(".out-9");
  let res = "";
  for (let i = 1; i < 7; i++) {
    for (let j = 1; j < i; j++) {
      res += j + "_";
    }
    if (i == 1) {
    } else res += "</br>";
  }

  out9.innerHTML = res;
}

document.querySelector(".b-9").onclick = t9;

//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

//01_02_03_04_05_06_07_08_09_10_
//11_12_13_14_15_16_17_18_19_20_
//21_22_23_24_25_26_27_28_29_30_
//31_32_33_34_35_36_37_38_39_40_
//41_42_43_44_45_46_47_48_49_50_

function t10() {
  let out10 = document.querySelector(".out-10");
  let res = "";
  for (let i = 0; i < 5; i++) {
    for (let j = 1; j < 11; j++) {
      if (i == 0 && j == 10) {
        res += i + j + "_";
      } else if (j == 10) {
        res += i * j + 10 + "_";
      } else res += i + "" + j + "_";
    }
    res += "</br>";
  }

  out10.innerHTML = res;
}

document.querySelector(".b-10").onclick = t10;

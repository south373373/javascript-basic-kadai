// 変数の宣言と値を代入
// 3を代入
let num = 3;

/*
// 5を代入
let num = 5;

// 3と5の倍数を代入
let num = 15;

// 上記以外を代入
let num = 8;
*/

// if条件式
// [変数(num)が3と5の倍数の場合]
if (num % 15 == 0){
  console.log("3と5の倍数です");
}
// [変数(num)が3の倍数の場合]
else if (num % 3 == 0){
  console.log("3の倍数です");
}
// [変数(num)が5の倍数の場合]
else if (num % 5 == 0){
  console.log("5の倍数です");
}
// [上記以外の場合]
else {
  console.log(num);
}
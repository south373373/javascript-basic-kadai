// 配列の詳細
const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];

console.log("##### 以下に for文でのループ処理の出力結果を表示 #####");

// for文でのループ処理
for (let i = 0; i < holidays.length; i++){
  console.log(holidays[i]);
}

console.log("##### 以下に while文でのループ処理の出力結果を表示 #####");

// while文でのループ処理
let num = 0;

while(num < holidays.length)
{
  console.log(holidays[num]);
  num++;
}

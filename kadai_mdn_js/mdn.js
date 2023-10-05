
// 日付オブジェクトの作成
const date = new Date();

// 現在の年データの取得
const currentYear = date.getFullYear();

// 現在の月データの取得
// 最初の値が「0」のため、「+1」を追記
const currentMonth = date.getMonth() + 1;

// 現在の日付データの取得
const currentDay = date.getDate();

// 「2023年8月22日」の形式で年月日を出力
console.log(`${currentYear}年${currentMonth}月${currentDay}日`);
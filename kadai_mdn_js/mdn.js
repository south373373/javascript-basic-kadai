// 日付の関数を作成
const currentDate = () => {
  // 日付オブジェクトの作成
  const date = new Date();

  // 現在の年データの取得
  const currentYear = date.getUTCFullYear();

  // 現在の月データの取得
  // 最初の値が「0」のため、「+1」を追記
  const currentMonth = date.getUTCMonth() + 1;

  // 現在の日付データの取得
  const currentDay = date.getUTCDate();

  // 「2023年8月22日」の形式で年月日を指定
  const currentFormatday = `${currentYear}年${currentMonth}月${currentDay}日`;

  // 年月日の出力内容を戻り値に設定
  return currentFormatday;
}

// 「2023年8月22日」の形式で年月日を出力
console.log(currentDate());
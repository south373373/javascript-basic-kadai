// 「text」というidを持つHTML要素を取得し、定数に代入
const chgText = document.getElementById('text')

// ボタンのクリック時、「text」のHTML要素に以下の文字を代入
// 但し、ボタンをクリックして2秒経過後に文字が代入
btn.addEventListener('click', () => {
  setTimeout(() => {
    chgText.innerHTML = "ボタンをクリックしました"
  }, 2000)
})
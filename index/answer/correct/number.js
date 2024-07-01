// URLのクエリ文字列を取得
const queryString = window.location.search;
// URLSearchParamsオブジェクトを作成してクエリ文字列を解析
const params = new URLSearchParams(queryString);
// 特定のパラメータの値を取得
const answer = params.get('answer');
if(answer == "23158411"){
  document.getElementById('lock').innerHTML = "4725"
}else if(answer == "02505075144"){
  document.getElementById('lock').innerHTML = "8437"
}else {
  window.location.href = "../../error.html"
}

let interval = null
function checkAccessFirst() {
  $.getJSON("https://script.google.com/macros/s/AKfycbyD8llwZGIAZ8Dqvs7uv0LgHjDR45oCj95OvP8LLzLCkg0JEeXWElrS9ex7GutPlB70/exec", function (data) {
    if(data[0]){
      if(data[0].value === "No"){//実際はノットイコール
        window.location.href = "./close.html"
      }else {
        // URLのクエリ文字列を取得
        const queryString = window.location.search;
        // URLSearchParamsオブジェクトを作成してクエリ文字列を解析
        const params = new URLSearchParams(queryString);
        // 特定のパラメータの値を取得
        const page = params.get('pages');
        const d = params.get('d');
        window.location.href = "./" + d + "/" + page + ".html"
      }
    }
  })
}
interval = setInterval(checkAccessFirst, 1000);

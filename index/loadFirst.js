let interval = null
function checkAccessFirst() {
  $.getJSON("https://script.google.com/macros/s/AKfycbyD8llwZGIAZ8Dqvs7uv0LgHjDR45oCj95OvP8LLzLCkg0JEeXWElrS9ex7GutPlB70/exec", function (data) {
    if(data[0]){
      if(data[0].value !== "No"){//実際はノットイコール
        window.location.href = "./close.html"
      }else {
        // URLのクエリ文字列を取得
        const queryString = window.location.search;
        // URLSearchParamsオブジェクトを作成してクエリ文字列を解析
        const params = new URLSearchParams(queryString);
        // 特定のパラメータの値を取得
        const page = params.get('pages');
        const d = params.get('d');
        $.getJSON("https://script.google.com/macros/s/AKfycbxvjC9pnpLfmMpcmXRJEUg4BMblZg22CmsOR4E9tVPoKpykx1nTGA0HDoWoT8ZHC2-Qgg/exec?length=24", function (licensData) {
          let l = licensData.randomString
          window.location.href = "./" + d + "/" + page + ".html?l=" + l
        })
      }
    }
  })
}
checkAccessFirst()

function checkAccesslicense() {
  // URLのクエリ文字列を取得
  const queryString = window.location.search;
  // URLSearchParamsオブジェクトを作成してクエリ文字列を解析
  const params = new URLSearchParams(queryString);
  // 特定のパラメータの値を取得
  const l = params.get('l');
  $.getJSON("https://script.google.com/macros/s/AKfycbwb6TXn3XZlVLLEq4Rvhy-HE7CGqIBzdVxEMnxPSpMf4FnfvNgi7uM5tlnqSxKOvT8v/exec", function (data) {
    console.log(data.length)
    if(data[0]){
      for(var i = 0;i<data.length;i++){
        console.log(data[i].ID)
        if(data[i].ID !== l && (i+2)>data.length){
          window.location.href = "../../error.html"
        }else if(data[i].ID === l){
          i = data.length+1
          // 特定のパラメータの値を取得
          const answer = params.get('answer');
          if(answer == "23158411"){
            document.getElementById('lock').innerHTML = "4725"
          }else if(answer == "02505075144"){
            document.getElementById('lock').innerHTML = "8437"
          }else {
            window.location.href = "../../error.html"
          }
        }
      }
    }else {
      window.location.href = "../../error.html"
    }
  })
  $.getJSON("https://script.google.com/macros/s/AKfycbyD8llwZGIAZ8Dqvs7uv0LgHjDR45oCj95OvP8LLzLCkg0JEeXWElrS9ex7GutPlB70/exec", function (data) {
    if(data[0]){
      if(data[0].value !== "No"){//実際はノットイコール
        window.location.href = "../../close.html"
      }
    }else {
      window.location.href = "../../error.html"
    }
  })
}
checkAccesslicense()

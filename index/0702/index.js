function question1() {
  // URLのクエリ文字列を取得
  const queryString = window.location.search;
  // URLSearchParamsオブジェクトを作成してクエリ文字列を解析
  const params = new URLSearchParams(queryString);
  // 特定のパラメータの値を取得
  const l = params.get('l');
  var value1 = document.getElementById("fieldA").value
  var value2 = document.getElementById("fieldB").value
  var value3 = document.getElementById("fieldC").value
  var value4 = document.getElementById("fieldD").value
  var value5 = document.getElementById("fieldE").value
  if(value1 == 0.25 && value2 == 0.5 && value3 == 0.75 && value4 == 1 && value5 == 44){
    window.location.href = "../answer/correct/question4.html?answer=02505075144&l=" + l
  }else {
    document.getElementById("question").style.display = "block"
    document.getElementById("answer").style.display = "none"
    document.getElementById("misstake").style.display = "block"
  }
}

function next(page){
  // URLのクエリ文字列を取得
  const queryString = window.location.search;
  // URLSearchParamsオブジェクトを作成してクエリ文字列を解析
  const params = new URLSearchParams(queryString);
  // 特定のパラメータの値を取得
  const l = params.get('l');
  var pageArray = ["question1", "question2"]
  window.location.href = pageArray[page+1] + ".html?l=" + l
}

function back(page){
  // URLのクエリ文字列を取得
  const queryString = window.location.search;
  // URLSearchParamsオブジェクトを作成してクエリ文字列を解析
  const params = new URLSearchParams(queryString);
  // 特定のパラメータの値を取得
  const l = params.get('l');
  var pageArray = ["question1", "question2"]
  window.location.href = pageArray[page-1] + ".html?l=" + l
}

function display(){
  document.getElementById("answer").style.display = "block"
  document.getElementById("question").style.display = "none"
}

function none(){
  document.getElementById("answer").style.display = "none"
  document.getElementById("question").style.display = "block"
}

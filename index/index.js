function question1() {
  var value1 = document.getElementById("fieldA").value
  var value2 = document.getElementById("fieldB").value
  var value3 = document.getElementById("fieldC").value
  var value4 = document.getElementById("fieldD").value
  var value5 = document.getElementById("fieldE").value
  var value6 = document.getElementById("fieldF").value
  if(value1 == 2 && value2 == 3 && value3 == 15 && value4 == 8 && value5 == 4 && value6 == 11){
    window.location.href = "./answer/correct/question4.html"
  }else {
    document.getElementById("question").style.display = "block"
    document.getElementById("answer").style.display = "none"
    document.getElementById("misstake").style.display = "block"
  }
}

function next(page){
  var pageArray = ["question1", "question2", "question3", "question4"]
  window.location.href = pageArray[page+1]
}

function back(page){
  var pageArray = ["question1", "question2", "question3", "question4"]
  window.location.href = pageArray[page-1]
}

function display(){
  document.getElementById("answer").style.display = "block"
  document.getElementById("question").style.display = "none"
}

function none(){
  document.getElementById("answer").style.display = "none"
  document.getElementById("question").style.display = "block"
}

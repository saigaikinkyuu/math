function question1() {
  var value1 = document.getElementById("fieldA").value
  var value2 = document.getElementById("fieldB").value
  var value3 = document.getElementById("fieldC").value
  alert(value1 + "," + value2 + "," + value3)
  if(value1 == 2 && value2 == 3 && value3 == 15){
    window.location.href = "question2.html"
  }else {
    document.getElementById("answer").style.display = "none"
    document.getElementById("misstake").style.display = "block"
  }
}

function display(){
  document.getElementById("answer").style.display = "block"
  document.getElementById("question").style.display = "none"
}

function none(){
  document.getElementById("answer").style.display = "none"
  document.getElementById("question").style.display = "block"
}

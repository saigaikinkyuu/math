let interval = null
function checkAccessFirst() {
  $.getJSON("https://script.google.com/macros/s/AKfycbyD8llwZGIAZ8Dqvs7uv0LgHjDR45oCj95OvP8LLzLCkg0JEeXWElrS9ex7GutPlB70/exec", function (data) {
    if(data[0]){
      if(data[0].value === "No"){
        window.location.href = "./close.html"
      }
    }
  })
}
interval = setInterval(checkAccessFirst, 1000);

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("function1").addEventListener("click", function() {
      document.getElementById("display").innerHTML = "Function 1 selected";
    });
  
    document.getElementById("function2").addEventListener("click", function() {
      document.getElementById("display").innerHTML = "Function 2 selected";
    });
  
    document.getElementById("function3").addEventListener("click", function() {
      document.getElementById("display").innerHTML = "Function 3 selected";
    });
  });
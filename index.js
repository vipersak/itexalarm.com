document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("function1").addEventListener("click", function() {
      document.getElementById("display").innerHTML = "A SMS will  be Sent at button press";
    });
  
    document.getElementById("function2").addEventListener("click", function() {
      document.getElementById("display").innerHTML = "An Email will  be Sent at button press";
    });
  
    document.getElementById("function3").addEventListener("click", function() {
      document.getElementById("display").innerHTML = "Alarm will be set at button press";
    });
  });

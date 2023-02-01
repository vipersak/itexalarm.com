document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("function1").addEventListener("click", function() {
      document.getElementById("display").innerHTML = "SMS will be sent with button";
    });
  
    document.getElementById("function2").addEventListener("click", function() {
      document.getElementById("display").innerHTML = "Email will be sent with button";
    });
  
    document.getElementById("function3").addEventListener("click", function() {
      document.getElementById("display").innerHTML = "Alarm will be set with button";
    });
    document.getElementById("function4").addEventListener("click", function() {
      document.getElementById("display").innerHTML = "SMS will be sent by NFC";
    });
  
    document.getElementById("function5").addEventListener("click", function() {
      document.getElementById("display").innerHTML = "Email will be sent by NFC";
    });
  
    document.getElementById("function6").addEventListener("click", function() {
      document.getElementById("display").innerHTML = "Alarm will be set by NFC";
    });
  });
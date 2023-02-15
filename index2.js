window.onload=function(){
    document.getElementById("form").addEventListener("click", function(event) {
      var target = event.target ;
      if (target.nodeName === "BUTTON") {
        var selectedAction = target.innerHTML;
        localStorage.setItem("selectedAction", selectedAction);
      }
    });
    document.getElementById("form1").addEventListener("click", function(event) {
        var target1 = event.target ;
        if (target1.nodeName === "BUTTON") {
          var selectedAction1 = target1.innerHTML;
          localStorage.setItem("selectedAction1", selectedAction1);
        }
      });
  }
    window.addEventListener("load", function() {
      var selectedAction = localStorage.getItem("selectedAction");
      if (selectedAction) {
        document.getElementById("display").innerHTML =
          "Selected action: " + selectedAction;
      }
    },
    window.addEventListener("load", function() {
        var selectedAction1 = localStorage.getItem("selectedAction1");
        if (selectedAction1) {
          document.getElementById("display1").innerHTML =
            "Selected action: " + selectedAction1;
        }
      }
    ))
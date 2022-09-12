window.onload = function() {
     window.setInterval(function() {
          var date = new Date();
          var time = date.toLocaleTimeString();
          document.getElementById("time").innerHTML = time;
     }, 0);
}

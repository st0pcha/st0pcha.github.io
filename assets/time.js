window.onload = function() {
     window.setInterval(function() {
          var date = new Date();
          var hours = date.getHours();    
          var minutes = date.getMinutes();    
          var seconds = date.getSeconds();
          
          var time = hours + ":" + minutes + ":" + seconds;
          document.getElementById("time").innerHTML = time;
     }, 0);
}

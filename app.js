
function addZero (number){
  
  if (number < 10) {
    return "0" + number.toString();
  } else {
    return number.toString();
  }
  
}

window.setInterval(function(){
  
  var currentTime = new Date();
  
  var days = currentTime.getDay();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  
  document.getElementById("days").innerHTML = addZero(days);
  document.getElementById("hours").innerHTML = addZero(hours);
  document.getElementById("minutes").innerHTML = addZero(minutes);
  document.getElementById("seconds").innerHTML = addZero(seconds);
  
}, 1000);
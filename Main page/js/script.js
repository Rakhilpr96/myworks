function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var d = today.getDate();
  var mn = today.getMonth();
  var we = today.getDay();
  m = checkTime(m);
  s = checkTime(s);

  if (h > 12) {
    h1 = h - 12;
  } else if (h == 0) {
    h1 = 12;
  } else {
    h1 = h;
  };

  document.getElementById('time').innerHTML =
  h1 + ":" + m;
  var t = setTimeout(startTime, 500);
  // document.getElementById("date").innerHTML = today.toDateString();
   
  document.getElementById("date").innerHTML = today.toDateString();
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}


window.onload = function() {
  var target = new Date("Sun, 08 Oct 2017 16:00:00 GMT+0200")
  setInterval(function() {
    var diff;
    diff = (Math.max(((target - Date.now()) / 1000), 0) | 0)

    hours = (diff / 3600) | 0;
    minutes = ((diff / 60) | 0) - (hours * 60);
    seconds = (diff % 60) | 0;

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display = document.querySelector("#countdown")
    if (diff > 0) {
      display.textContent =
        hours + ":" + minutes + ":" + seconds;
    } else {
      display.textContent = "🏁";
    }
  }, 200);
}


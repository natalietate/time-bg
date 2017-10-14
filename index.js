var clock = document.querySelector('#clock');


function logTime() {
  // get the time
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();

  // change to 12-hour clock
  if (hour > 12) {
    hour = hour - 12;
  }
  if (hour === 0) {
    hour = 12;
  }

  // add 0 in front of single digit hours
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }

  // displays the time on the page
  clock.innerHTML = hour + ':' + minute + ':' + second;
}

setInterval(logTime, 1000); // check time every second

(function logHour() {
  var date = new Date();
  var hrs = date.getHours();

  // early am
  if (hrs >= 4 && hrs <= 7) {
    document.body.className = "earlyAm";
    greeting.innerHTML = "You'/re up early!";
  }
  // morning
  else if (hrs >= 8 && hrs <= 11) {
    document.body.className = "morning";
    greeting.innerHTML = 'Good morning, sunshine.';
  }
  // afternoon
  else if (hrs >= 12 && hrs <= 15) {
    document.body.className = "afternoon";
    greeting.innerHTML = 'You should go for a walk.';
  }
  // evening
  else if (hrs >= 16 && hrs <= 19) {
    document.body.className = "evening",
      greeting.innerHTML = 'Is it time for happy hour yet?';
  }
  // night
  else if (hrs >= 20 && hrs <= 23) {
    document.body.className = "night";
    greeting.innerHTML = 'Have a great night.';
  }
  // late night
  else {
    document.body.className = "lateNight"
    greeting.innerHTML = "You'/re up late!";
  };
  setTimeout(logHour, 60000); // check time every minute, in case someone is viewing page at XX:59
})();

// Got the suggestion for wrapping my setTimeout in the logHour function from Stack Overflow - this will run the function on load and then begin the interval counter. Now it doesn't have to refresh every second for something that would only change every few hours. This is called an immediately invoked function expression.

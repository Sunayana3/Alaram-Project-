function setAlarm() {
  var alarmTime = document.getElementById('alarm-time').value;

  if (!alarmTime) {
    alert('Please select a valid alarm time.');
    return;
  }

  var now = new Date();
  var alarm = new Date(now.toDateString() + ' ' + alarmTime);

  if (alarm <= now) {
    alarm.setDate(alarm.getDate() + 1); // Set the alarm for tomorrow if it's already past the alarm time today
  }

  var timeDiff = alarm - now;

  setTimeout(function() {
    playAlarm();
  }, timeDiff);
}

function playAlarm() {
  alert('Wake up!');
}

function stopAlarm() {
  clearTimeout();
}

var percentEl = document.getElementById("percent");

function percentBar() {
  var percent = 0;

  var percentInterval = setInterval(function() {
    percentEl.textContent = "Downloading ... " + percent + "%";
    percent++;

    if (percent === 5) {
      percentEl.textContent = "Download Complete";
      clearInterval(percentInterval);
    }

  }, 1000);
}

percentBar();
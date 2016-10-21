document.getElementById("toggle").addEventListener("click", toggleSwitch);

function toggleSwitch() {
  var $bulbs = document.getElementsByClassName("bulb");
  for (var $bulb of $bulbs) {
    if ($bulb.className.indexOf("hidden") >= 0) {
      $bulb.className = $bulb.className.replace("hidden", "");
    } else {
      $bulb.className = $bulb.className + " hidden";
    }
  }
};
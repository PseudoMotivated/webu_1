
window.onclick = function(event) {
  if ((event.target == document.getElementById('backdrop'))) {
    document.getElementById('backdrop').style.display = "none";
    document.getElementById('popup').style.display = "none";
  }
}


const popup = () => {
  document.getElementById('popup').style.display = "inline";

  document.getElementById('backdrop').style.display = "flex";
}


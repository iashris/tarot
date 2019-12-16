let chars = [];
window.addEventListener(
  "keydown",
  function(e) {
    console.log(e.keyCode);
    if (e.keyCode !== 8) {
      chars.push(e.key);
      console.log(chars);
    } else {
      chars.pop();
    }
    document.getElementById("text").innerHTML = chars.join("");
    if (chars.length == 2) {
      const elemNow = chars.join("");
      chars = [];
      setTimeout(function() {
        document.getElementById("text").innerHTML = "";
        const tarot = findCard(elemNow.toUpperCase());
      }, 500);
    }
  },
  false
);
const findCard = tarotCode => {
  alert(tarot[tarotCode].interpretation);
};

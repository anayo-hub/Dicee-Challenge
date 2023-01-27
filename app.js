let win = document.querySelector("h2")
function setRandomImg() {
  //player one
  let ranNum1 = Math.floor(Math.random() * 6) + 1;
  let ranImage1 = `images/dice${ranNum1}.png`;
  let one = document.querySelectorAll("img")[0]
  one.setAttribute("src", ranImage1)

  //player two
  let ranNum2 = Math.floor(Math.random() * 6) + 1;
  let ranImage2 = `images/dice${ranNum2}.png`;
  let two = document.querySelectorAll("img")[1]
  two.setAttribute("src", ranImage2)

  if (ranNum1 > ranNum2) {
    win.innerHTML = "player one wins"
  }else if (ranNum1 < ranNum2){
    win.innerHTML = "player two wins"
  }else{
    win.innerHTML = "draw"
  }
  
}

setRandomImg()
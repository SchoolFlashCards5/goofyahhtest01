//made by nny
const btn = document.querySelector(".exportsettxt-btn");
const output = document.createElement("div"); 
document.body.appendChild(output);           
Math.floor(Math.random() * 100) + 1

btn.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  output.textContent = " " + randomNum;
  output.style.fontFamily = "verdana";
  output.style.fontWeight = "bold";
  
 if (randomNum === 67) {
    document.body.innerHTML = "";
    document.body.appendChild(output);
    document.body.style.backgroundColor = "white";
    output.textContent = "diddyblud got 67 in the big 26";
    console.log("67 found, self destructing")
  }
});
console.log("made by nny");
const input = document.getElementById("input");
const output = document.getElementById("output");
let timer;
let lastValue = "";

input.addEventListener("input", () => {
  clearTimeout(timer);
  timer = setTimeout(()=>{
    let currentValue = input.value.trim();
    if( currentValue !== lastValue){
      console.log(input.value);
      output.textContent = currentValue;
      lastValue = currentValue;
    } 
  }, 1000);
});

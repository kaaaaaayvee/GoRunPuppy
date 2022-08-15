function runPuppy(){
let id = null;
  const elem = document.getElementById(`animate`);  
  let toppos = 200;
  let leftpos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (leftpos >= (screen.availWidth-110)) {
      clearInterval(id);
    } else {
      leftpos+=2; 
      elem.style.left = leftpos + "px";
      
    }
    if(toppos>=(screen.availHeight-140)){
        // clearInterval(id)
    }
    else{
        toppos++
        elem.style.top = toppos + "px"; 
    }
  }
}

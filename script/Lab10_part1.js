function changeColor(){

}

var fontColorArray = ["white","red","blue","green","gray","slategray","darkblue","teal","maroon","black"];
var bgColorArray = ["azure","linen","snow","powderblue","ivory","lightpink","lightyellow"];

var curFontColor=1;
var curBgColor=1;

function changeFontColor(colorName){
    var fontColor;
    switch(colorName){
        case "RED":
        fontColor= fontColorArray[1];
        break;
        
        case "BLUE":
        fontColor= fontColorArray[2];
        break;
        case "GREEN":
        fontColor= fontColorArray[3];
        break;

       default:
         fontColor= fontColorArray[0];
         break;
    }
    document.getElementById("td_text").style.color=fontColor;
}

function changeBgColor(){
    var bgColor;
    var select = document.getElementById('colorsel');
    var value = select.options[select.selectedIndex].value;
    console.log("Thee selected value is")
    console.log(value)
    switch(value){
        case "red":
            bgColor= fontColorArray[1];
        break;
        
        case "blue":
            bgColor= fontColorArray[2];
        break;

        case "green":
            bgColor= fontColorArray[3];
        break;

       default:
        bgColor= fontColorArray[0];
         break;
    }
    document.getElementById("td_text").style.backgroundColor=bgColor;
}

function changeBg(){
    

    }

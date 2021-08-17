
window.onload = initpage;



function initpage(){
    
    randomizeTiles();


}



function clickedLetter(e){
    var element = getActivatedObject(e);
    var currentWordDiv = document.getElementById("currentWord");
    var letter = element.textContent;

//  var att = document.createAttribute("id", "tile21");




 if(currentWordDiv.childNodes.length == 0){
    var p = document.createElement("p");
    currentWordDiv.appendChild(p);

    var text = document.createTextNode(letter);
    p.appendChild(text);
 } else {
    var p = currentWordDiv.firstElementChild;
    var letterText = p.firstChild;
    letterText.nodeValue += letter;
    // console.log(letterText);
 }
 this.className = "disabled";
 this.onclick = '';
 
}

function randomizeTiles(){
    var letters = document.querySelectorAll("#letterbox a");
    var  frequencyTable = [
        "a", "a", "a", "a", "a", "a", "a", "a", "b", "c", "c", "c", "d", "d", "d", "e", "e","e","e","e","e", "e", "e", "e", "e", "e", "e", "f", "f", "g", "g", "h", "h", "h", "h", "h", "h", "i", "i", "i", "i", "i", "i", "i", "j", "k", "l", "l", "l", "l", "m", "m", "n", "n", "n", "n", "n", "n", "o", "o", "o", "o", "o", "o", "o", "o", "p", "p", "q", "q", "q", "q", "q", "q", "r", "r", "r", "r", "r", "r", "s", "s", "s", "s", "s", "s", "s", "s", "t", "t", "t", "u", "u", "v", "v", "w", "x", "y", "y", "z",
    ]

    for(var i = 0; i < letters.length; i++){
        var index = Math.floor(Math.random() * 100);
        var letter = frequencyTable[index];

        letters[i].textContent = letter;
        // addEventHandler(letters[i], 'click', clickedLetter);
        letters[i].onclick = clickedLetter;
    }



    console.log(frequencyTable.length);

}


function swapTiles(targetTile, destinationTile){
    selectedImage = targetTile.firstElementChild;
    destinatedImage = destinationTile.firstElementChild;

    targetTile.appendChild(destinatedImage);
    destinationTile.appendChild(selectedImage);
    // console.log(selectedImage, destinatedImage);

    if(puzzleIsComplete()){
        console.log("win");
    }
   

}

function puzzleIsComplete(){
    var tiles = document.querySelectorAll("td img");

    var tileOrder = "";

    tiles.forEach((tile) => {
        if(tile.alt != "empty"){
            tileOrder += tile.alt;
        }
    });

    if(tileOrder == "1234589101112131415"){
        return true;
    }

    return false;

    // console.log(tileOrder);
}



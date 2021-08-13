
window.onload = initpage;



function initpage(){
    
    randomizeTiles();


}



function clickedLetter(e){
 var currentWordDiv = document.getElementById("currentWord");
 var letter = getActivatedObject(e).textContent;
 var p = document.createElement("p");
 var text = document.createTextNode(letter);
 var att = document.createAttribute("id", "tile21");

 
 currentWordDiv.appendChild(p);
 p.appendChild(text);
//  console.log(letter);
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
        addEventHandler(letters[i], 'click', clickedLetter);
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



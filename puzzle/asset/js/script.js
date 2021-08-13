
window.onload = initpage;



function initpage(){
    var cells = document.querySelectorAll("td");

    cells.forEach((cell) => {
        addEventHandler(cell, 'click', tileClick);
    });


}

function tileClick(e){
    if(cellIsEmpty(this)){
        alert("please click on a numbered title");
        return;
    }

    var currentRow = this.id.charAt(4);
    var currentColumn = this.id.charAt(5);

    // console.log(currentRow, currentColumn);

    // checking above
    if(currentRow > 1){
        var testRow = parseInt(currentRow) - 1;
        var testCellId = "cell" + testRow + currentColumn;
        var testCell = document.getElementById(testCellId);
        if(cellIsEmpty(testCell)){
            // console.log(testCell);
            swapTiles(this, testCell);
            return;
        }
        
    }

    // checking below
    if(currentRow < 4){
        var testRow = parseInt(currentRow) + 1;
        var testCellId = "cell" + testRow + currentColumn;
        var testCell = document.getElementById(testCellId);

        if(cellIsEmpty(testCell)){
            // console.log(testCell);
            swapTiles(this, testCell);
            return;
        }
        
    }

     // checking left
     if(currentColumn > 1){
        var testCol = parseInt(currentColumn) - 1;
        var testCellId = "cell" + currentRow + testCol;
        var testCell = document.getElementById(testCellId);

        if(cellIsEmpty(testCell)){
            // console.log(testCell);
            swapTiles(this, testCell);
            return;
        }
        
    }

      // checking right
    if(currentColumn < 4){
        var testCol = parseInt(currentColumn) + 1;
        var testCellId = "cell" + currentRow + testCol;
        var testCell = document.getElementById(testCellId);

        if(cellIsEmpty(testCell)){
            // console.log(testCell);
            swapTiles(this, testCell);
            return;
        }
        
    }

    // alert("Please click a tile next to an emty cell");
}

function cellIsEmpty(cell){
    var image = cell.firstElementChild;
   
    if(image.alt == "empty")
        return true;
     else 
        return false;

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



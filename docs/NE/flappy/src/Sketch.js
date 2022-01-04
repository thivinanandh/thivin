
/// The global Variables

let N
let Mutation_Rate
let maxPopulation

// FOR BOARD AND GAME
let BoardObj;

let queenImage;
let Start = false;

let populationObject;
let myCanvas;
let isHovered;

let isGameOver = false;

let userSelectedCrossOver;

// function preload() {
//     queenImage = loadImage('data:image/png;base64,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');
// }

//slider function
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
//   reset();
  starter(this.value);
}


function starter(n)
{
    setupCommands(n);
}

function setupCommands(n)
{

    // Print Actual Phrase 
    let winWidth = 400;
    let winHeight = 400; 
    myCanvas = createCanvas(winWidth, winHeight);
    
    myCanvas.parent("Canvas");

    myCanvas.background(255);

    BoardObj =  new Board(n,myCanvas);

}

function setup()
{ 
    setupCommands(3);
    
}


function draw()
{
    myCanvas.mouseOver(BoardObj.hovered);

    myCanvas.mouseOut(BoardObj.hoveredOut);
    
    BoardObj.drawBoard();

    //function to detect Hover
    BoardObj.highlightCellonHover();

    // myCanvas.mousePressed(BoardObj.moveTile);

    updateScores();

    
}


function mouseClicked()
{
    BoardObj.moveTile();
}

function updateScores()
{
   var scoreElem = document.getElementById("score");
   var moveElem = document.getElementById("moves");

   var scoreString  = "Score      : " + BoardObj.score;
   var moveString   = "Moves Made : " + BoardObj.movesMade;

   scoreElem.innerHTML = scoreString;
   moveElem.innerHTML = moveString;
   
   if(!isGameOver & BoardObj.gameWon)
   {
        BoardObj.drawBoard();
        alert("Game Won..!");
        isGameOver = true;
   }
        
}
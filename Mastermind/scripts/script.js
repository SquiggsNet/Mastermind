$(document).ready(function() {
    $("#selectedNumberOfPlayers").hide();
    $("#isWinner").hide();
    $(".gameOver").hide();

    $("#welcomeScreen").css({'height': '100%'});

    $("#welcomeContinue").click(function(){
        $("#welcomeScreen").css({'height': '0'});
        $("#selectedNumberOfPlayers").text("");
        $("#isWinner").text("");
        $("#playerSelectionScreen").css({'height': '100%'});
    });

    $(".tutorial").click(function(){
        $(".overlay").css({'height': '0'});
        $("#tutorialScreen").css({'height': '100%'});
    });

     $(".playerSelectBtn").click(function(){
        $("#playerSelectionScreen").css({'height': '0'});
        $("#selectedNumberOfPlayers").text(this.id);
        if(this.id==="onePlayer"){
            $("#difficultySelectionScreen").css({'height': '100%'});
        }else{
            alert("Sorry, 2 Player mode currently disabled")
            $("#playerSelectionScreen").css({'height': '100%'});
        }
    });

    $(".difficultySelectBtn").click(function(){
        createGameSettings(this.id);
    });

    $(".restart").click(function(){
        $(".overlay").css({'height': '0'});
        $("#welcomeScreen").css({'height': '100%'});
    });

    $(".gameOver").click(function(){
        $(".gameBoardScreen").css({'height': '0'});
        if($("#isWinner").html() === "win"){
            $("#winLose").text("Congratulations! You solved the code, you have the mind of a master!");

        }else{
            $("#winLose").text("Boom! You have not solved the code in time and now the explosion has gone off! or the vault is sealed forver! ...or some other unfortunate situation. (sad face)");
        }
        $("#gameResultsScreen").css({'height': '100%'});
   });

});

function createGameSettings(difficulty){
    var attempts = 0;

    $("#difficultySelectionScreen").css({'height': '0'});
    $("#gameBoardScreen").css({'height': '100%'});

    if(difficulty==="easy"){
        attempts = 12;
    }else if (difficulty==="medium"){
        attempts = 10;
    }else{
        attempts = 8;
    }

    createGame(attempts);
};

function createGame(attempts){
    var solution = ["","","",""];
    var guessbody = "";
    var checkbody = "";
    var currentRow = 0;
    var currentCol = 0;
     $("#solution").html("");
     $("#choicesMade").html("");
     $("#areYouRight").html("");
     $("#optionalChoices").html("");

    if($("#selectedNumberOfPlayers").html() === "onePlayer"){
        solution = generateRandomSolution();
    }else{
        console.log("user entry needs coding");
    }

    $("#solution").append("<table class='solutionTable'><tr class='solutionRow'>"
            +"<td class='solutionCell'><td class='solutionCell'></td>"
            +"<td class='solutionCell'><td class='solutionCell'></td>"
            +"</tr></table>");

    for(var i=0; i<attempts; i++)
    {
        guessbody += "<tr class='choicesRow'><td class='choicesCell'></td>"
                +"<td class='choicesCell'></td><td class='choicesCell'></td>"
                +"<td class='choicesCell'></td></tr>";

        checkbody += "<tr class='rightRow'><td class='rightCell'></td>"
                +"<td class='rightCell'></td><td class='rightCell'></td>"
                +"<td class='rightCell'></td></tr>";
    }
    $("#choicesMade").append("<table class='choicesTable'>"+guessbody+"</table>");
    $("#areYouRight").append("<table class='rightTable'>"+checkbody+"</table>");

    $("#optionalChoices").append("<table class='optionalTable'><tr class='optionalRow'>"
            +"<td class='optionalCell blue'><td class='optionalCell green'></td>"
            +"<td class='optionalCell yellow'><td class='optionalCell orange'></td>"
            +"<td class='optionalCell red'><td class='optionalCell purple'></td>"
            +"</tr></table>");

    $(".optionalCell").click(function(){
        if (currentCol < 4){
            colorSelected(this, currentRow, currentCol, "add");
            currentCol += 1;
        }
    });

    $("#removeOne").click(function(){
        if (0 < currentCol && currentCol < 5 ){
            currentCol -= 1;
            colorSelected(this, currentRow, currentCol, "remove");
        }
    });

    $("#checkMe").click(function(){
        if (currentCol === 4 ){
            validateGuess(solution, currentRow, attempts);
            currentCol = 0;
            currentRow += 1;
        }
    });
};

function generateRandomSolution(){
    var colours = ["blue", "green", "yellow", "orange", "red", "purple"];
    var generatedSolution = ["","","",""];
    for(var i=0; i<4; i++){
        var randInt = Math.floor((Math.random() * 5) + 0);
        generatedSolution[i] = colours[randInt];
    }
    return generatedSolution;
};

function colorSelected(cell, currentRow, currentCol, colorChange){
    var color = cell.classList[1];
    var currentCell = $(".choicesRow")[currentRow].childNodes[currentCol];
    if(colorChange === "add"){
        currentCell.classList += " "+color;
    }else{
        currentCell.classList = "choicesCell";
    }
};

function validateGuess(solution, currentRow, attempts){
    var guess = ["","","",""];
    var correctLocation = [false, false, false, false];
    var wrongSpot = [false, false, false, false];
    var blackPeggs = 0;
    var whitePeggs = 0;

    for(var i=0; i<4; i++){
       guess[i] =  $(".choicesRow")[currentRow].childNodes[i].classList[1];
    }

    for(var i=0; i<4; i++){
        if(guess[i] === solution[i]){
            correctLocation[i]=true;
        }
    }

    for(var i=0; i<4; i++){
        if(!correctLocation[i]){
            for(var j=0; j<4; j++){
                if(!correctLocation[j]){
                    if(guess[i] === solution[j]){
                        wrongSpot[i]=true;
                    }
                }
            }  
        } 
    }

    $.each( correctLocation, function( i, l ){
        if(l){
            blackPeggs += 1;
        }
    });
    $.each( wrongSpot, function( i, l ){
        if(l){
            whitePeggs += 1;
        }
    });
    
    for(var i=0; i<blackPeggs; i++){
        $(".rightRow")[currentRow].childNodes[i].classList += " black";
    }

    for(var i=0; i<whitePeggs; i++){
        $(".rightRow")[currentRow].childNodes[i+blackPeggs].classList += " white";
    }

    if(blackPeggs === 4){
        $(".gameOver").show();
        populateSolution(solution);
        $("#selectedNumberOfPlayers").text("win");
        return;
    }

    if(attempts === (currentRow+1)){
        $(".gameOver").show();
        populateSolution(solution);
        $("#selectedNumberOfPlayers").text("lose");
        return;
    }
};

function populateSolution(solution){
    var solutionDisplay = $(".solutionCell");
    $.each( solutionDisplay, function( i, l ){
        l.classList += " "+solution[i];
    });
};

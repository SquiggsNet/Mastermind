/**
 * Created by inet2005 on 11/30/16.
 */

(function(){

    var colours = ["blue", "green", "yellow", "orange", "red", "purple"];
    var generatedSolution = ["", "", "", ""];
    var timesCheckWasHit = 0;
    var needsChecking = false;
    var canCreateSolution = false;
    var difficultyRowLength = 0;        //used to determine number of tries available

    function insertSolutionTable()
    {
        //grab the div
        var solutionDiv = document.getElementById("solution");

        //create table
        var table = document.createElement("table");

        //add table to div
        solutionDiv.appendChild(table);

        //create one row (and four blocks for the solution to appear) for the solution to be contained.
        var row = document.createElement("tr");
        var block1 = document.createElement("td");
        var block2 = document.createElement("td");
        var block3 = document.createElement("td");
        var block4 = document.createElement("td");

        //add row and blocks to table
        table.appendChild(row);
        row.appendChild(block1);
        row.appendChild(block2);
        row.appendChild(block3);
        row.appendChild(block4);

        //add class to the solution table, row, and cells (blocks)

        var solutionTable = document.getElementsByTagName("table")[0];
        solutionTable.className = "solutionTable";

        var solutionRow = document.getElementsByTagName("tr")[0];
        solutionRow.className = "solutionRow";

        var solutionCells = document.getElementsByTagName("td");
        for(var i=0; i<solutionCells.length; i++)
        {
            solutionCells[i].className = "solutionCell";
        }

    }

    function insertChoicesMadeTable()//rowsExpected)
    {
        //figure initial amounts of (tables, rows, cells)
        var amountOfCurrentTables = document.getElementsByTagName("table").length;
        var amountOfCurrentRows = document.getElementsByTagName("tr").length;
        var amountOfCurrentCells = document.getElementsByTagName("td").length;

        //grab the div
        var choicesDiv = document.getElementById("choicesMade");

        //create table
        var table = document.createElement("table");

        //add table to div
        choicesDiv.appendChild(table);

        for(var i=0; i<difficultyRowLength; i++)//rowsExpected; i++)
        {
            //create multiples rows (and for blocks for the solution to appear) for the solution to be contained.
            var row = document.createElement("tr");
            var block1 = document.createElement("td");
            var block2 = document.createElement("td");
            var block3 = document.createElement("td");
            var block4 = document.createElement("td");

            //add row and blocks to table
            table.appendChild(row);
            row.appendChild(block1);
            row.appendChild(block2);
            row.appendChild(block3);
            row.appendChild(block4);

        }


        //add class to the solution table, row, and cells (blocks)

        var choicesTable = document.getElementsByTagName("table")[amountOfCurrentTables];
        choicesTable.className = "choicesTable";

        var choicesRow = document.getElementsByTagName("tr");
        for(var i=amountOfCurrentRows; i<choicesRow.length; i++)
        {
            choicesRow[i].className = "choicesRow";
        }

        var choicesCells = document.getElementsByTagName("td");
        for(var i=amountOfCurrentCells; i<choicesCells.length; i++)
        {
            choicesCells[i].className = "choicesCell";
        }

    }

    function insertAreYouRightTable()//rowsExpected)
    {

        //figure initial amounts of (tables, rows, cells)
        var amountOfCurrentTables = document.getElementsByTagName("table").length;
        var amountOfCurrentRows = document.getElementsByTagName("tr").length;
        var amountOfCurrentCells = document.getElementsByTagName("td").length;

        //grab the div
        var rightDiv = document.getElementById("areYouRight");

        //create table
        var table = document.createElement("table");

        //add table to div
        rightDiv.appendChild(table);



        for(var i=0; i<difficultyRowLength; i++)//rowsExpected; i++)
        {
            //create multiples rows (and for blocks for the solution to appear) for the solution to be contained.
            var row = document.createElement("tr");
            var block1 = document.createElement("td");
            var block2 = document.createElement("td");
            var block3 = document.createElement("td");
            var block4 = document.createElement("td");

            //add row and blocks to table
            table.appendChild(row);
            row.appendChild(block1);
            row.appendChild(block2);
            row.appendChild(block3);
            row.appendChild(block4);

        }


        //add class to the solution table, row, and cells (blocks)

        var rightTable = document.getElementsByTagName("table")[amountOfCurrentTables];
        rightTable.className = "rightTable";

        var rightRow = document.getElementsByTagName("tr");
        for(var i=amountOfCurrentRows; i<rightRow.length; i++)
        {
            rightRow[i].className = "rightRow";
        }

        var rightCells = document.getElementsByTagName("td");
        for(i=amountOfCurrentCells; i<rightCells.length; i++)
        {
            rightCells[i].className = "rightCell";
        }

    }

    function insertOptions()
    {

        //colour choices


        //figure initial amounts of (tables, rows, cells)
        var amountOfCurrentTables = document.getElementsByTagName("table").length;
        var amountOfCurrentRows = document.getElementsByTagName("tr").length;
        var amountOfCurrentCells = document.getElementsByTagName("td").length;

        //grab the div
        var optionalDiv = document.getElementById("optionalChoices");

        //create table
        var table = document.createElement("table");

        //add table to div
        optionalDiv.appendChild(table);

        //create multiples rows (and for blocks for the solution to appear) for the solution to be contained.
        var row = document.createElement("tr");
        var block1 = document.createElement("td");
        var block2 = document.createElement("td");
        var block3 = document.createElement("td");
        var block4 = document.createElement("td");
        var block5 = document.createElement("td");
        var block6 = document.createElement("td");

        //add row and blocks to table
        table.appendChild(row);
        row.appendChild(block1);
        row.appendChild(block2);
        row.appendChild(block3);
        row.appendChild(block4);
        row.appendChild(block5);
        row.appendChild(block6);


        //add class to the solution table, row, and cells (blocks)
        var choicesTable = document.getElementsByTagName("table")[amountOfCurrentTables];
        choicesTable.className = "optionalTable";

        var choicesRow = document.getElementsByTagName("tr")[amountOfCurrentRows];
        choicesRow.className = "optionalRow";

        var choicesCells = document.getElementsByTagName("td");
        for(var i=amountOfCurrentCells; i<choicesCells.length; i++)
        {
            //grab the colour at the index of i - what was initially there (to get 0-5)
            var colour = colours[i-amountOfCurrentCells];
            choicesCells[i].className = "optionalCell " + colour;
            /*choicesCells[i].id = colour;*/
        }

    }

    function generateSolution(){
        for(var i=0; i<4; i++){
            var randInt = Math.floor((Math.random() * 5) + 0);
            generatedSolution[i] = colours[randInt];
        }
    }

    function playerCreatedSolutionEstablished(){
        var solutionCells = document.getElementsByClassName("solutionCell");

        for (var c=0; c<solutionCells.length; c++){
            if(solutionCells[c].className.length < 13){
                canCreateSolution = false;
            }else{
                canCreateSolution = true;
            }

        }

        if(canCreateSolution){
            for(var i=0; i<4; i++){
                generatedSolution[i] = solutionCells[i].className.split(' ')[1];
                solutionCells[i].className = "solutionCell";
            }
            document.getElementById("playerSolutionSelection").style.display = "none";
            addingGamePlayEventListeners();
        }

    }

    function removeLastSolutionCell()
    {

        var solutionCells = document.getElementsByClassName("solutionCell");

        var removed = false;

        for(var i=solutionCells.length-1; i >= 0; i--)
        {
            if(removed)
            {
                break;
            }
            else if (solutionCells[i].className.length > 13)
            {
                solutionCells[i].className = "solutionCell";
                break;
            }
        }
        canCreateSolution = false;
    }

    function optionWasPicked(cell)
    {
        if(checkIfLastRow())
        {
            //grabbing only the colour, and setting a variable with the colour
            var colour = "";
            for(var c=13; c<cell.className.length; c++)
            {
                colour += cell.className[c];
            }

            //grab the current row
            var currentRow = document.getElementsByClassName("choicesRow")[timesCheckWasHit];
            var addColour;

            //grab the cells in the row
            var cells = currentRow.childNodes;

            if(!needsChecking) {
                //if there is an empty cell, I want to stop everything from running
                var foundEmpty = false;

                //grab the cells in the row
                cells = currentRow.childNodes;

                //for loop for all the cells in the row
                for (g = 0; g < cells.length; g++) {
                    //if an empty cell was found already, STOP THIS LOOP
                    if (foundEmpty) {
                        break;
                    }
                    //if there wasn't a cell found yet, make sure it's not 'choicesCell' as a classname (only)
                    else if (cells[g].className.length < 12) {
                        //set the cell we want to add colour to, to the cell we just found
                        addColour = cells[g];
                        //tell the program that we have found an empty cell
                        foundEmpty = true;

                        //if there was an empty cell found (board isn't full yet), set the class to have the colour added
                        addColour.className = "choicesCell " + colour;
                        if (g == 3) {
                            //if this is the last cell in the row, make it false
                            needsChecking = true;
                        }
                    }
                }
            }
        }
    }

    function solutionOptionWasPicked(cell)
    {

        //grab the solution row
        var cells = document.getElementsByClassName("solutionCell");

        //grab color selected
        var colour = cell.className.split(' ')[1];

        for (var c=0; c<cells.length; c++){
            if(cells[c].className.length < 13){
                cells[c].className = "solutionCell " + colour;
                break;
            }
        }
    }

    function checkIfLastRow()
    {
        var rows = document.getElementsByClassName("choicesRow");
        if(timesCheckWasHit < rows.length)
        {
            return true;
        }
        else
        {
            return false;
        }

    }

    function checkMePlease()
    {

        if(needsChecking)
        {
            //fetching the rows
            var currentRow = document.getElementsByClassName("choicesRow")[timesCheckWasHit];

            //grab the cells in the row
            var cells = currentRow.childNodes;

            //assuming no colours are in the right spot
            var rightSpotRightColour = [false, false, false, false];
            //assuming no colours are ever there
            var wrongSpotRightColour = [false, false, false, false];

            var solutionUsed = [0,0,0,0];
            for(var m=0; m<generatedSolution.length; m++)
            {
                solutionUsed[m] = generatedSolution[m];
            }

            //checking if the colours match
            for(var i=0;i<cells.length;i++)
            {
                //choicesCell = 11 + space = 12
                var colour = "";
                for(var c=12; c<cells[i].className.length; c++)
                {
                    colour += cells[i].className[c];
                }
                if(colour == solutionUsed[i])
                {
                    rightSpotRightColour[i] = true;
                    solutionUsed[i] = false;
                }
                /*else
                {
                    var y;
                    for (var g = 0; g < solutionUsed.length; g++)
                    {
                        /!*for(y=0; i<solutionUsed.length; y++)
                        {
                            if(colour == solutionUsed[y])
                            {
                                solutionUsed[y] = false;
                            }
                        }*!/
                        if (colour == solutionUsed[g])
                        {
                            wrongSpotRightColour[i] = true;
                            solutionUsed[y] = false;
                            /!*for(y=0; i<solutionUsed.length; y++)
                            {
                                if(colour == solutionUsed[y])
                                {
                                    solutionUsed[y] = false;
                                }
                            }*!/
                        }
                    }
                }*/

            }

            //call function to display win results
            /*if(displayWin(rightSpotRightColour))
            {
                //if the win happens, then display the solution
                displaySolution();
            }*/
            /*displayWin(rightSpotRightColour);*/

            //check if any of the right colours are in the wrong spot
            for(i=0;i<cells.length;i++)
            {
                var removedOne = false;
                //choicesCell = 11 + space = 12

                if(removedOne)
                {
                    break;
                }

                colour = "";
                for(c=12; c<cells[i].className.length; c++)
                {
                    colour += cells[i].className[c];
                }
                for (g = 0; g < solutionUsed.length; g++)
                {
                    if (colour == solutionUsed[g])
                    {
                        if(rightSpotRightColour[i] == false)
                        {
                            wrongSpotRightColour[i] = true;
                            solutionUsed[g] = false;
                            removedOne = true;
                            break;
                        }

                    }
                }

            }

            var displayResultsRow = document.getElementsByClassName("rightRow")[timesCheckWasHit];
            var answerCheckedCells = displayResultsRow.childNodes;

            var whiteCount = 0;
            var blackCount = 0;

            for(i=0;i<wrongSpotRightColour.length;i++)
            {
                if(wrongSpotRightColour[i])
                {
                    whiteCount++;
                }
            }

            for(i=0;i<rightSpotRightColour.length;i++)
            {
                if(rightSpotRightColour[i])
                {
                    blackCount++;
                }
            }

            /*if(whiteCount > blackCount)
            {
                whiteCount = whiteCount - blackCount;
            }*/

            for(i=0;i<blackCount; i++)
            {
                answerCheckedCells[i].className += " black";
            }

            for(i=blackCount;i<whiteCount+blackCount; i++)
            {
                answerCheckedCells[i].className += " white";
            }

            /*for(i=0;i<answerCheckedCells.length; i++)
            {
                /!*if(rightSpotRightColour[i])
                 {
                 answerCheckedCells[i].className += " black";
                 }*!/
                if(wrongSpotRightColour[i])
                {
                    answerCheckedCells[i].className += " white";
                }

            }*/

            /*for(i=0;i<answerCheckedCells.length; i++)
            {
                if(rightSpotRightColour[i])
                {
                    answerCheckedCells[i].className += " black";
                }
                /!*else if(wrongSpotRightColour[i])
                {
                    answerCheckedCells[i].className += " white";
                }*!/

            }*/

            timesCheckWasHit++;


            //check if there is a win. if there is, display win screen
            if(checkWin(rightSpotRightColour))
            {
                displayWin(rightSpotRightColour);
            }
            //else, check if we're on the last row
            else
            {
                //if user hasn't guessed by the last row, call the loss function
                if(!checkIfLastRow()){
                    displayLose();
                }
            }




            needsChecking = false;
        }

    }

    function removeLastCell()
    {
        var currentRow = document.getElementsByClassName("choicesRow")[timesCheckWasHit];
        var cells = currentRow.childNodes;

        var removed = false;

        for(var i=cells.length-1; i >= 0; i--)
        {
            if(removed)
            {
                break;
            }
            else if (cells[i].className.length > 12)
            {
                cells[i].className = "choicesCell";
                break;
            }
        }
        needsChecking = false;
    }

    function addingGamePlayEventListeners()
    {

        //options cells
        var optionCells = document.getElementsByClassName("optionalCell");

        for(var i=0; i<optionCells.length; i++)
        {
            optionCells[i].addEventListener("click", function(){optionWasPicked(this)});
        }

        // //solution options cells
        // var solutionChoicesCell = document.getElementsByClassName("solutionChoicesCell");
        //
        // for(var i=0; i<solutionChoicesCell.length; i++)
        // {
        //     solutionChoicesCell[i].addEventListener("click", function(){solutionWasPicked(this)});
        // }

        //buttons
        var removeOne = document.getElementById("removeOne");
        removeOne.addEventListener("click", function(){removeLastCell()});

        var checkMe = document.getElementById("checkMe");
        checkMe.addEventListener("click", function(){checkMePlease()});

        var startOver = document.getElementById("restart");
        startOver.addEventListener("click", function(){restartGame()});
    }

    function buildDefaults()
    {

        for (var i = 0; i < difficulty.length; i++) {
            if (difficulty[i].checked) {
                var selectedDifficulty = difficulty[i].value;
                break;
            }
        }

        if(selectedDifficulty == "easy"){
            difficultyRowLength = 12;
        }else if(selectedDifficulty == "medium"){
            difficultyRowLength = 10;
        }else{
            difficultyRowLength = 8;
        }

        document.getElementById("difficultyUserSelection").style.display = "none";
        document.getElementById("mindMasterBoard").style.display = "block";
        document.getElementById("playerSelection").style.display = "block";

        insertSolutionTable();
        insertChoicesMadeTable();
        insertAreYouRightTable();
        insertOptions();
        //generateSolution();
        // addingEventListeners();
        numberOfPlayers();
        //displaySolution();
    }

    function displaySolution(){


        var solutionCells = document.getElementsByClassName("solutionCell");
        for(var i=0; i<solutionCells.length; i++)
        {
            solutionCells[i].className += " "+generatedSolution[i];
        }
    }

    var difficulty = document.getElementsByName("difficulty");
    function establishDifficulty(){
        for (var i=0;i<difficulty.length;i++){
            difficulty[i].onclick = buildDefaults;
        }
    }

    var numPlayers = document.getElementsByName("numPlayers");
    function numberOfPlayers(){
        for (var i=0;i<numPlayers.length;i++){
            numPlayers[i].onclick = playerCheck;
        }
    }

    function playerCheck(){

        for (var i = 0; i < numPlayers.length; i++) {
            if (numPlayers[i].checked) {
                var numberOfPlayers = numPlayers[i].value;
                break;
            }
        }

        if(numberOfPlayers == "one"){
            generateSolution();
            addingGamePlayEventListeners();
        }else{
            playerCreatedSolutionSelection();
        }

        document.getElementById("playerSelection").style.display = "none";
    }

    function playerCreatedSolutionSelection(){
        //user inputs selection

        //figure initial amounts of (tables, rows, cells)
        var amountOfCurrentCells = document.getElementsByTagName("td").length;

        var playerSolutionEntryDiv = document.getElementById("playerSolutionSelection");

        //create table
        var table = document.createElement("table");

        //add table to div
        playerSolutionEntryDiv.appendChild(table);

        //create multiples rows (and for blocks for the solution to appear) for the solution to be contained.
        var row = document.createElement("tr");
        var block1 = document.createElement("td");
        var block2 = document.createElement("td");
        var block3 = document.createElement("td");
        var block4 = document.createElement("td");
        var block5 = document.createElement("td");
        var block6 = document.createElement("td");

        //add row and blocks to table
        table.appendChild(row);
        row.appendChild(block1);
        row.appendChild(block2);
        row.appendChild(block3);
        row.appendChild(block4);
        row.appendChild(block5);
        row.appendChild(block6);


        //add class to the solution table, row, and cells (blocks)
        table.className = "solutionChoicesTable";

        row.className = "SolutionChoicesRow";

        document.getElementById("playerSolutionSelection").style.display = "block";

        var playerCreate = document.getElementById("create");
        playerCreate.addEventListener("click", function(){playerCreatedSolutionEstablished()});

        var removeOneSolution = document.getElementById("removeOneSolution");
        removeOneSolution.addEventListener("click", function(){removeLastSolutionCell()});


        //var solutionChoicesCells = document.getElementsByTagName("td");
        for(var i=0; i<row.childNodes.length; i++)
        {
            //grab the colour at the index of i - what was initially there (to get 0-5)
            row.childNodes[i].className = "solutionChoicesCell " + colours[i];
            row.childNodes[i].addEventListener("click", function(){solutionOptionWasPicked(this)});
            /*choicesCells[i].id = colour;*/
        }

    }

    function checkWin(compareResult)
    {
        for(var w=0;w<compareResult.length;w++){
            if(!compareResult[w]){
                return false;
            }
        }
        return true;
    }

    function displayWin(){//compareResult){

        //if any cell is false return to game
        /*for(var w=0;w<compareResult.length;w++){
            if(!compareResult[w]){
                return false;
            }
        }*/

        //hide game and display results upon game success
        //document.getElementById("mindMasterBoard").style.display = "none";
        document.getElementById("gameResults").style.display = "block";
        var winLose = document.getElementById("winLose");
        winLose.innerHTML = "Congratulations! You have solved the puzzle.";

        div=document.getElementById("optionalChoices");
        table = div.childNodes[0];
        table.remove();

        displaySolution();

        return true;

    }

    function displayLose(){

        //hide game and display results upon game success
        //document.getElementById("mindMasterBoard").style.display = "none";
        document.getElementById("gameResults").style.display = "block";
        var winLose = document.getElementById("winLose");
        winLose.innerHTML = "Sorry! You were not able to solve the code in time and have been blown into a million bits.";

        div=document.getElementById("optionalChoices");
        table = div.childNodes[0];
        table.remove();

        displaySolution();

    }

    function restartGame(){

        //remove all the tables
        var div = document.getElementById("solution");
        /*var table = document.getElementsByClassName("solutionTable")[0];
        div.removeChild(table);*/
        var table = div.childNodes[0];
        table.remove();
        /*div.removeAttribute("table");*/

        div=document.getElementById("choicesMade");
        //table = document.getElementsByClassName("choicesTable")[0];
        //div.removeAttribute("table");
        table = div.childNodes[0];
        table.remove();

        div=document.getElementById("areYouRight");
        table = div.childNodes[0];
        table.remove();
        //div.removeAttribute("table");

        /*div=document.getElementById("optionalChoices");
        table = div.childNodes[0];
        table.remove();*/
        //div.removeAttribute("table");

        //uncheck previously selected difficulty
        var difficulty = document.getElementsByName("difficulty");
        for (var i=0;i<difficulty.length;i++){
            difficulty[i].checked = false;
        }

        //uncheck player selection
        var numPlayers = document.getElementsByName("numPlayers");
        for (i=0;i<numPlayers.length;i++){
            numPlayers[i].checked = false;
        }

        //hide game results & display difficulty
        document.getElementById("mindMasterBoard").style.display = "none";
        //document.getElementById("playerSelection").style.display = "block";
        document.getElementById("difficultyUserSelection").style.display = "block";
        document.getElementById("gameResults").style.display = "none";

        colours = ["blue", "green", "yellow", "orange", "red", "purple"];
        generatedSolution = ["", "", "", ""];
        timesCheckWasHit = 0;
        needsChecking = false;
        difficultyRowLength = 0;

        establishDifficulty();
        //numberOfPlayers();

    }

    establishDifficulty();

})();
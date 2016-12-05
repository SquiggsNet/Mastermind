/**
 * Created by inet2005 on 11/30/16.
 */

(function(){

    var colours = ["blue", "green", "yellow", "orange", "red", "purple"];
    var generatedSolution = ["blue", "orange", "purple", "green"];
    var timesCheckWasHit = 0;
    var needsChecking = false;
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

    function createSolution(){
        for(var i=0; i<4; i++){
            var randInt = Math.floor((Math.random() * 5) + 0);
            generatedSolution[i] = colours[randInt];
        }
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

            //checking if the colours match
            for(i=0;i<cells.length;i++)
            {
                //choicesCell = 11 + space = 12
                var colour = "";
                for(var c=12; c<cells[i].className.length; c++)
                {
                    colour += cells[i].className[c];
                }
                if(colour == generatedSolution[i])
                {
                    rightSpotRightColour[i] = true;
                }
            }

            var displayResultsRow = document.getElementsByClassName("rightRow")[timesCheckWasHit];
            var answerCheckedCells = displayResultsRow.childNodes;

            for(i=0;i<answerCheckedCells.length; i++)
            {
                if(rightSpotRightColour[i])
                {
                    answerCheckedCells[i].className += " black";
                }
            }

            timesCheckWasHit++;

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
    }

    function addingEventListeners()
    {

        //options cells
        var optionCells = document.getElementsByClassName("optionalCell");

        for(var i=0; i<optionCells.length; i++)
        {
            optionCells[i].addEventListener("click", function(){optionWasPicked(this)});
        }

        //buttons
        var removeOne = document.getElementById("removeOne");
        removeOne.addEventListener("click", function(){removeLastCell()});

        var checkMe = document.getElementById("checkMe");
        checkMe.addEventListener("click", function(){checkMePlease()});
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
        document.getElementById("mindMasterBoard").style.visibility = "visible";

        insertSolutionTable();
        insertChoicesMadeTable();
        insertAreYouRightTable();
        insertOptions();
        createSolution();
        addingEventListeners();
        insertSolution();
    }

    function insertSolution(){


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

    establishDifficulty();

})();
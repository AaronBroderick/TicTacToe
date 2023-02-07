var x1 = document.getElementById("x1");
var x2 = document.getElementById("x2");
var x3 = document.getElementById("x3");
var x4 = document.getElementById("x4");
var x5 = document.getElementById("x5");
var x6 = document.getElementById("x6");
var x7 = document.getElementById("x7");
var x8 = document.getElementById("x8");
var x9 = document.getElementById("x9");
var isFirstMove;

var board = [[0, 0, 0],
             [0, 0, 0],
             [0, 0, 0]];

function playGame(isMaxTurn){
    x1.addEventListener("click", function(){
        if(x1.innerHTML == "" && isMaxTurn){
            x1.innerHTML = "X";
            isMaxTurn = !isMaxTurn;
            board[0][0] = 1;
            x1.style.cursor = "default";
        }
        else if(x1.innerHTML == ""){
            x1.innerHTML = "O";
            isMaxTurn = !isMaxTurn;
            board[0][0] = -1;
            x1.style.cursor = "default";
        }
        endGame();
    });
    x2.addEventListener("click", function(){
        if(x2.innerHTML == "" && isMaxTurn){
            x2.innerHTML = "X";
            isMaxTurn = !isMaxTurn;
            board[0][1] = 1;
            x2.style.cursor = "default";
        }
        else if(x2.innerHTML == ""){
            x2.innerHTML = "O";
            isMaxTurn = !isMaxTurn;
            board[0][1] = -1;
            x2.style.cursor = "default";
        }
        endGame();
    });
    x3.addEventListener("click", function(){
        if(x3.innerHTML == "" && isMaxTurn){
            x3.innerHTML = "X";
            isMaxTurn = !isMaxTurn;
            board[0][2] = 1;
            x3.style.cursor = "default";
        }
        else if(x3.innerHTML == ""){
            x3.innerHTML = "O";
            isMaxTurn = !isMaxTurn;
            board[0][2] = -1;
            x3.style.cursor = "default";
        }
        endGame();
    });
    x4.addEventListener("click", function(){
        if(x4.innerHTML == "" && isMaxTurn){
            x4.innerHTML = "X";
            isMaxTurn = !isMaxTurn;
            board[1][0] = 1;
            x4.style.cursor = "default";
        }
        else if(x4.innerHTML == ""){
            x4.innerHTML = "O";
            isMaxTurn = !isMaxTurn;
            board[1][0] = -1;
            x4.style.cursor = "default";
        }
        endGame();
    });
    x5.addEventListener("click", function(){
        if(x5.innerHTML == "" && isMaxTurn){
            x5.innerHTML = "X";
            isMaxTurn = !isMaxTurn;
            board[1][1] = 1;
            x5.style.cursor = "default";
        }
        else if(x5.innerHTML == ""){
            x5.innerHTML = "O";
            isMaxTurn = !isMaxTurn;
            board[1][1] = -1;
            x5.style.cursor = "default";
        }
        endGame();
    });
    x6.addEventListener("click", function(){
        if(x6.innerHTML == "" && isMaxTurn){
            x6.innerHTML = "X";
            isMaxTurn = !isMaxTurn;
            board[1][2] = 1;
            x6.style.cursor = "default";
        }
        else if(x6.innerHTML == ""){
            x6.innerHTML = "O";
            isMaxTurn = !isMaxTurn;
            board[1][2] = -1;
            x6.style.cursor = "default";
        }
        endGame();
    });
    x7.addEventListener("click", function(){
        if(x7.innerHTML == "" && isMaxTurn){
            x7.innerHTML = "X";
            isMaxTurn = !isMaxTurn;
            board[2][0] = 1;
            x7.style.cursor = "default";
        }
        else if(x7.innerHTML == ""){
            x7.innerHTML = "O";
            isMaxTurn = !isMaxTurn;
            board[2][0] = -1;
            x7.style.cursor = "default";
        }
        endGame();
    });
    x8.addEventListener("click", function(){
        if(x8.innerHTML == "" && isMaxTurn){
            x8.innerHTML = "X";
            isMaxTurn = !isMaxTurn;
            board[2][1] = 1;
            x8.style.cursor = "default";
        }
        else if(x8.innerHTML == ""){
            x8.innerHTML = "O";
            isMaxTurn = !isMaxTurn;
            board[2][1] = -1;
            x8.style.cursor = "default";
        }
        endGame();
    });
    x9.addEventListener("click", function(){
        if(x9.innerHTML == "" && isMaxTurn){
            x9.innerHTML = "X";
            isMaxTurn = !isMaxTurn;
            board[2][2] = 1;
            x9.style.cursor = "default";
        }
        else if(x9.innerHTML == ""){
            x9.innerHTML = "O";
            isMaxTurn = !isMaxTurn;
            board[2][2] = -1;
            x9.style.cursor = "default";
        }
        endGame();
    });
    
}

function playGameAI(){
        x1.addEventListener("click", function(){
            if(x1.innerHTML == "" && isFirstMove){
                x1.innerHTML = "X";
                board[0][0] = 1;
                x1.style.cursor = "default";
                if(!endGame()){
                    playGameAI2();
                }
            }
            else if(x1.innerHTML == ""){
                x1.innerHTML = "O";
                isAITurn = !isAITurn;
                board[0][0] = -1;
                x1.style.cursor = "default";
                if(!endGame()){
                    playGameAI2();
                }
            }
        });
        x2.addEventListener("click", function(){
            if(x2.innerHTML == "" && isFirstMove){
                x2.innerHTML = "X";
                board[0][1] = 1;
                x2.style.cursor = "default";
                if(!endGame()){
                    playGameAI2();
                }
            }
            else if(x2.innerHTML == ""){
                x2.innerHTML = "O";
                board[0][1] = -1;
                x2.style.cursor = "default";
                if(!endGame()){
                    playGameAI2();
                }
            }
        });
        x3.addEventListener("click", function(){
            if(x3.innerHTML == "" && isFirstMove){
                x3.innerHTML = "X";
                board[0][2] = 1;
                x3.style.cursor = "default";
                if(!endGame()){
                    playGameAI2();
                }
            }
            else if(x3.innerHTML == ""){
                x3.innerHTML = "O";
                board[0][2] = -1;
                x3.style.cursor = "default";
                if(!endGame()){
                    playGameAI2();
                }
            }
        });
        x4.addEventListener("click", function(){
            if(x4.innerHTML == "" && isFirstMove){
                x4.innerHTML = "X";
                board[1][0] = 1;
                x4.style.cursor = "default";
                if(!endGame()){
                    playGameAI2();
                }
            }
            else if(x4.innerHTML == ""){
                x4.innerHTML = "O";
                board[1][0] = -1;
                x4.style.cursor = "default";
                if(!endGame()){
                    playGameAI2();
                }
            }
        });
        x5.addEventListener("click", function(){
            if(x5.innerHTML == "" && isFirstMove){
                x5.innerHTML = "X";
                board[1][1] = 1;
                x5.style.cursor = "default";
                if(!endGame()){
                    playGameAI2();
                }
            }
            else if(x5.innerHTML == ""){
                x5.innerHTML = "O";
                board[1][1] = -1;
                x5.style.cursor = "default";
                if(!endGame()){
                    playGameAI2();
                }
            }
        });
        x6.addEventListener("click", function(){
            if(x6.innerHTML == "" && isFirstMove){
                x6.innerHTML = "X";
                board[1][2] = 1;
                x6.style.cursor = "default";
                if(!endGame()){
                    playGameAI2();
                }
            }
            else if(x6.innerHTML == ""){
                x6.innerHTML = "O";
                board[1][2] = -1;
                x6.style.cursor = "default";
                if(!endGame()){
                    playGameAI2();
                }
            }
        });
        x7.addEventListener("click", function(){
            if(x7.innerHTML == "" && isFirstMove){
                x7.innerHTML = "X";
                board[2][0] = 1;
                x7.style.cursor = "default";
                if(!endGame()){
                    playGameAI2();
                }
            }
            else if(x7.innerHTML == ""){
                x7.innerHTML = "O";
                board[2][0] = -1;
                x7.style.cursor = "default";
                if(!endGame()){
                    playGameAI2();
                }
            }
        });
        x8.addEventListener("click", function(){
            if(x8.innerHTML == "" && isFirstMove){
                x8.innerHTML = "X";
                board[2][1] = 1;
                x8.style.cursor = "default";
                if(!endGame()){
                    playGameAI2();
                }
            }
            else if(x8.innerHTML == ""){
                x8.innerHTML = "O";
                board[2][1] = -1;
                x8.style.cursor = "default";
                if(!endGame()){
                    playGameAI2();
                }
            }
        });
        x9.addEventListener("click", function(){
            if(x9.innerHTML == "" && isFirstMove){
                x9.innerHTML = "X";
                board[2][2] = 1;
                x9.style.cursor = "default";
                if(!endGame()){
                    playGameAI2();
                }
            }
            else if(x9.innerHTML == ""){
                x9.innerHTML = "O";
                board[2][2] = -1;
                x9.style.cursor = "default";
                if(!endGame()){
                    playGameAI2();
                }
            }
        });
}

function playGameAI2(){
    if(isFirstMove){
        if(bestMove(false)==0){
            x1.innerHTML = "O";
            board[0][0] = -1;
            x1.style.cursor = "default";
        }
        else if(bestMove(false)==1){
            x2.innerHTML = "O";
            board[0][1] = -1;
            x2.style.cursor = "default";
        }
        else if(bestMove(false)==2){
            x3.innerHTML = "O";
            board[0][2] = -1;
            x3.style.cursor = "default";
        }
        else if(bestMove(false)==3){
            x4.innerHTML = "O";
            board[1][0] = -1;
            x4.style.cursor = "default";
        }
        else if(bestMove(false)==4){
            x5.innerHTML = "O";
            board[1][1] = -1;
            x5.style.cursor = "default";
        }
        else if(bestMove(false)==5){
            x6.innerHTML = "O";
            board[1][2] = -1;
            x6.style.cursor = "default";
        }
        else if(bestMove(false)==6){
            x7.innerHTML = "O";
            board[2][0] = -1;
            x7.style.cursor = "default";
        }
        else if(bestMove(false)==7){
            x8.innerHTML = "O";
            board[2][1] = -1;
            x8.style.cursor = "default";
        }
        else{
            x9.innerHTML = "O";
            board[2][2] = -1;
            x9.style.cursor = "default";
        }
    }
    else{
        if(bestMove(true)==0){
            x1.innerHTML = "X";
            board[0][0] = 1;
            x1.style.cursor = "default";
        }
        else if(bestMove(true)==1){
            x2.innerHTML = "X";
            board[0][1] = 1;
            x2.style.cursor = "default";
        }
        else if(bestMove(true)==2){
            x3.innerHTML = "X";
            board[0][2] = 1;
            x3.style.cursor = "default";
        }
        else if(bestMove(true)==3){
            x4.innerHTML = "X";
            board[1][0] = 1;
            x4.style.cursor = "default";
        }
        else if(bestMove(true)==4){
            x5.innerHTML = "X";
            board[1][1] = 1;
            x5.style.cursor = "default";
        }
        else if(bestMove(true)==5){
            x6.innerHTML = "X";
            board[1][2] = 1;
            x6.style.cursor = "default";
        }
        else if(bestMove(true)==6){
            x7.innerHTML = "X";
            board[2][0] = 1;
            x7.style.cursor = "default";
        }
        else if(bestMove(true)==7){
            x8.innerHTML = "X";
            board[2][1] = 1;
            x8.style.cursor = "default";
        }
        else{
            x9.innerHTML = "X";
            board[2][2] = 1;
            x9.style.cursor = "default";
        }
    }
    endGame();
}

function bestMove(isMaxTurn){
    let move;
    if(isMaxTurn){
        let bestScore = -Infinity;
        for(let r = 0; r<3; r++){
            for(let c = 0; c<3; c++){
                if(board[r][c]==0){
                    board[r][c] = 1;
                    let score = minimax(false);
                    board[r][c] = 0;
                    if(score>bestScore){
                        bestScore = score;
                        move = r*3+c;
                    }
                }
            }
        }
        return move;
    }
    else{
        let bestScore = Infinity;
        for(let r = 0; r<3; r++){
            for(let c = 0; c<3; c++){
                if(board[r][c]==0){
                    board[r][c] = -1;
                    let score = minimax(true);
                    board[r][c] = 0;
                    if(score<bestScore){
                        bestScore = score;
                        move = r*3+c;
                    }
                }
            }
        }
        return move;
    }
}

function minimax(isMaxTurn){
    if(checkWinner()!=2){
        return checkWinner();
    }

    if(isMaxTurn){
        let bestScore = -Infinity;
        for(let r = 0; r<3; r++){
            for(let c = 0; c<3; c++){
                if(board[r][c]==0){
                    board[r][c] = 1;
                    let score = minimax(false);
                    board[r][c] = 0;
                    if(score>bestScore){
                        bestScore = score;
                    }
                }
            }
        }
        return bestScore;
    }
    else{
        let bestScore = Infinity;
        for(let r = 0; r<3; r++){
            for(let c = 0; c<3; c++){
                if(board[r][c]==0){
                    board[r][c] = -1;
                    let score = minimax(true);
                    board[r][c] = 0;
                    if(score<bestScore){
                        bestScore = score;
                    }
                }
            }
        }
        return bestScore;
    }
}

function checkWinner(){
    /*
    -1: O wins
    0: tie
    1: X wins
    2: game not finished
    */
    let winner = 0;

    //horizontal
    for(let r = 0; r<3; r++){
        if(board[r][0]==board[r][1] && board[r][0]==board[r][2] && board[r][0]!=0){
            if(board[r][0]==1){
                winner = 1;
            }
            else{
                winner = -1;
            }
        }
    }

    //vertical
    for(let c = 0; c<3; c++){
        if(board[0][c]==board[1][c] && board[0][c]==board[2][c] && board[0][c]!=0){
            if(board[0][c]==1){
                winner = 1;
            }
            else{
                winner = -1;
            }
        }
    }

    //diagonal
    if(board[0][0]==board[1][1] && board[0][0]==board[2][2] && board[0][0]!=0){
        if(board[1][1]==1){
            winner = 1;
        }
        else{
            winner = -1;
        }
    }
    if(board[0][2]==board[1][1] && board[0][2]==board[2][0] && board[0][2]!=0){
        if(board[0][2]==1){
            winner = 1;
        }
        else{
            winner = -1;
        }
    }

    //check open spots
    let openSpots = 0;
    for(let r = 0; r<3; r++){
        for(let c = 0; c<3; c++){
            if(board[r][c]==0){
                openSpots++;
            }
        }
    }
    if(openSpots!=0 && winner==0){
        winner = 2;
    }
    
    return winner;
}

function endGame(){
    var overlay = document.getElementById("overlay");
    if(checkWinner()==1){
        overlay.innerHTML = "X Wins";
        overlay.style.display = "block";
        overlay.addEventListener("click", function(){
            location.reload();
        });
        return true;
    }
    else if(checkWinner()==0){
        overlay.innerHTML = "Tie";
        overlay.style.display = "block";
        overlay.addEventListener("click", function(){
            location.reload();
        });
        return true;
    }
    else if(checkWinner()==-1){
        overlay.innerHTML = "O Wins";
        overlay.style.display = "block";
        overlay.addEventListener("click", function(){
            location.reload();
        });
        return true;
    }
    return false;
}

function startGame(){
    //one player-------------------------------------------------------
    document.getElementById("p1").addEventListener("click", function(){
        document.getElementById("p1").style.display = "none";
        document.getElementById("p2").style.display = "none";
        document.getElementById("first").style.display = "block";
        document.getElementById("second").style.display = "block";
    });
    document.getElementById("first").addEventListener("click", function(){
        document.getElementById("board").style.display = "grid";
        document.getElementById("xBoard").style.display = "grid";
        document.getElementById("first").style.display = "none";
        document.getElementById("second").style.display = "none";
        isFirstMove = true;
        playGameAI();
    });
    document.getElementById("second").addEventListener("click", function(){
        document.getElementById("board").style.display = "grid";
        document.getElementById("xBoard").style.display = "grid";
        document.getElementById("first").style.display = "none";
        document.getElementById("second").style.display = "none";
        isFirstMove = false;
        playGameAI2();
        playGameAI();
    });

    //two player-------------------------------------------------------
    document.getElementById("p2").addEventListener("click", function(){
        document.getElementById("board").style.display = "grid";
        document.getElementById("xBoard").style.display = "grid";
        document.getElementById("p1").style.display = "none";
        document.getElementById("p2").style.display = "none";
        playGame(true);
    });
}

startGame();
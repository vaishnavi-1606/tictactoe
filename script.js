let play_type, matrix, computer_play;
function clearGrid(grid_elements){
    for(let i = 0; i < grid_elements.length; i++){
        grid_elements[i].innerHTML='';
    }
}
function displayWinner(won, grid_elements){
    document.getElementById("popup_winner").style.visibility="visible";
    if(won == 'player'){
        document.getElementById("popup_winner").innerHTML = 'You Win!';
    }
    else if(won == 'computer'){
        document.getElementById("popup_winner").innerHTML = 'Computer Wins!';
    }
    else{
        document.getElementById("popup_winner").innerHTML = "It's a tie!";
    }
    setTimeout(()=>{
        document.getElementById("popup_winner").style.visibility="hidden";
        clearGrid(grid_elements);
    },800)
}
function checkWinner(grid_elements){
    //check if O's or X's make a triplet in one of the 8 ways
    if(grid_elements[0].innerHTML == grid_elements[1].innerHTML
        && grid_elements[1].innerHTML == grid_elements[2].innerHTML
        && grid_elements[0].innerHTML != ''){
            if(play_type == grid_elements[0].innerHTML)
                displayWinner("player", grid_elements);
            else
                displayWinner("computer", grid_elements);
            return true;
    }
    if(grid_elements[0].innerHTML == grid_elements[3].innerHTML
        && grid_elements[3].innerHTML == grid_elements[6].innerHTML
        && grid_elements[0].innerHTML != ''){
            if(play_type == grid_elements[0].innerHTML)
                displayWinner("player", grid_elements);
            else
                displayWinner("computer", grid_elements);
            return true;
    }
    if(grid_elements[0].innerHTML == grid_elements[4].innerHTML
        && grid_elements[0].innerHTML == grid_elements[8].innerHTML
        && grid_elements[0].innerHTML != ''){
            if(play_type == grid_elements[0].innerHTML)
                displayWinner("player", grid_elements);
            else
                displayWinner("computer", grid_elements);
            return true;
    }
    if(grid_elements[1].innerHTML == grid_elements[4].innerHTML
        && grid_elements[1].innerHTML == grid_elements[7].innerHTML
        && grid_elements[1].innerHTML != ''){
            if(play_type == grid_elements[1].innerHTML)
                displayWinner("player", grid_elements);
            else
                displayWinner("computer", grid_elements);
            return true;
    }
    if(grid_elements[2].innerHTML == grid_elements[5].innerHTML
        && grid_elements[2].innerHTML == grid_elements[8].innerHTML
        && grid_elements[2].innerHTML != ''){
            if(play_type == grid_elements[2].innerHTML)
                displayWinner("player", grid_elements);
            else
                displayWinner("computer", grid_elements);
            return true;
    }
    if(grid_elements[3].innerHTML == grid_elements[4].innerHTML
        && grid_elements[3].innerHTML == grid_elements[5].innerHTML
        && grid_elements[3].innerHTML != ''){
            if(play_type == grid_elements[3].innerHTML)
                displayWinner("player", grid_elements);
            else
                displayWinner("computer", grid_elements);
            return true;
    }
    if(grid_elements[6].innerHTML == grid_elements[7].innerHTML
        && grid_elements[6].innerHTML == grid_elements[8].innerHTML
        && grid_elements[6].innerHTML != ''){
            if(play_type == grid_elements[6].innerHTML)
                displayWinner("player", grid_elements);
            else
                displayWinner("computer", grid_elements);
            return true;
    }
    if(grid_elements[2].innerHTML == grid_elements[4].innerHTML
        && grid_elements[6].innerHTML == grid_elements[2].innerHTML
        && grid_elements[2].innerHTML != ''){
            if(play_type == grid_elements[2].innerHTML)
                displayWinner("player", grid_elements);
            else
                displayWinner("computer", grid_elements);
            return true;
    }
    for(let i = 0; i < grid_elements.length; i++){
        if(grid_elements[i].innerHTML == ''){
            return "None";
        }
    }
    displayWinner("tie", grid_elements);
    return "Tie";

}
function computerMove(grid_elements){
    //horizontal moves
    for(let i = 0; i < 3; i++){
        if(grid_elements[i*3+0].innerHTML == grid_elements[i*3+1].innerHTML
        && grid_elements[i*3+2].innerHTML == '' 
        && grid_elements[i*3+0].innerHTML != ''){
            return i*3+2;  
        }
        else if(grid_elements[i*3+0].innerHTML == grid_elements[i*3+2].innerHTML
        && grid_elements[i*3+1].innerHTML == ''
        && grid_elements[i*3+0].innerHTML != ''){
            return i*3+1;    
        }
        else if(grid_elements[i*3+1].innerHTML == grid_elements[i*3+2].innerHTML
        && grid_elements[i*3+0].innerHTML == ''
        && grid_elements[i*3+1].innerHTML != ''){
            return i*3;
        }
    }
    // vertical moves
    for(let j = 0; j < 3; j++){
        if(grid_elements[0*3+j].innerHTML == grid_elements[1*3+j].innerHTML
        && grid_elements[2*3+j].innerHTML == '' 
        && grid_elements[0*3+j].innerHTML != ''){
            return 2*3+j;  
        }
        else if(grid_elements[0*3+j].innerHTML == grid_elements[2*3+j].innerHTML
        && grid_elements[1*3+j].innerHTML == ''
        && grid_elements[0*3+j].innerHTML != ''){
            return 1*3+j;    
        }
        else if(grid_elements[1*3+j].innerHTML == grid_elements[2*3+j].innerHTML
        && grid_elements[0*3+j].innerHTML == ''
        && grid_elements[1*3+j].innerHTML != ''){
            return 0*3+j;
        }
    }
    //diagonal moves
    if(grid_elements[0].innerHTML == grid_elements[4].innerHTML 
        && grid_elements[8].innerHTML == '' 
        && grid_elements[0].innerHTML != ''){
            return 8;  
    }
    else if(grid_elements[0].innerHTML == grid_elements[8].innerHTML
        && grid_elements[4].innerHTML == ''
        && grid_elements[8].innerHTML != ''){
            return 4;    
    }
    else if(grid_elements[4].innerHTML == grid_elements[8].innerHTML
        && grid_elements[0].innerHTML == ''
        && grid_elements[4].innerHTML != ''){
            return 0;
    }

    if(grid_elements[2].innerHTML == grid_elements[4].innerHTML 
        && grid_elements[6].innerHTML == '' 
        && grid_elements[2].innerHTML != ''){
            return 6;  
    }
    else if(grid_elements[4].innerHTML == grid_elements[6].innerHTML
        && grid_elements[2].innerHTML == ''
        && grid_elements[4].innerHTML != ''){
            return 2;    
    }
    else if(grid_elements[2].innerHTML == grid_elements[6].innerHTML
        && grid_elements[4].innerHTML == ''
        && grid_elements[6].innerHTML != ''){
            return 4;
    }

    if(grid_elements[4].innerHTML == '')return 4;

    for(let i = 0; i < grid_elements.length; i++){
        let grid_element = grid_elements[i];
        if(grid_element.innerHTML == ''){
            return i;
        }
    }
}
function game(){
    let grid_elements = document.getElementsByClassName("grid_element");
    console.log(grid_elements);
    for(let i = 0; i < grid_elements.length; i++){
        grid_elements[i].addEventListener("click",function (event){
            // check if the cell has already been clicked
            let marks = document.getElementsByClassName(event.target.classList[0])[0];
            if(marks.innerHTML == ''){
                marks.innerHTML = play_type;
                marks.style.color = "darksalmon";
                marks.style.cursor = "default";
                // console.log(grid_elements);
                setTimeout(()=>{
                    if(checkWinner(grid_elements) == "None"){
                        let idx = computerMove(grid_elements);
                        console.log(idx);
                        grid_elements[idx].innerHTML = computer_play;
                        grid_elements[idx].style.color = 'aquamarine';
                        setTimeout(()=>checkWinner(grid_elements), 100);
                    }
                },100);
            }
        })
    }
}
function play() {
    let mark_x = document.getElementById("mark_x");
    if(mark_x.checked)play_type = 'X', computer_play = 'O';
    else play_type = 'O', computer_play = 'X';
    document.getElementById("popup_window").style.visibility="hidden";
    console.log(play_type);
    game();
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("popup_winner").style.visibility="hidden"; 
    document.getElementById("play").addEventListener("click", play);
})


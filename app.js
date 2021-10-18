$(function(){
let buttons = ["pink", "purple", "green", "yellow"];
let game = [];
let userGame = [];
let stage = 0;
let start = false;
// SPACE: 32,
$(".hide").hide();
$(document).bind('keypress', function(e) {
    if (e.which === 32 && !start ) {
        
        $(".start-game").text("Level " + stage);
        
        chooseButtons();
        start = true;
        $(".hide").show();
    }
});

$(".button").click(function(){
    let color = $(this).attr("id");
    userGame.push(color);


    buttonPress(color);

    correctPattern(userGame.length-1);
});

function correctPattern(levels){
    if(game[levels] === userGame[levels]){
        if(userGame.length === game.length){
            setTimeout(function(){
                chooseButtons()
            }, 900)
        } 
    } else{
        if(game.length > 10){
            $(".start-game").text("You are a memory master. Go grab a cookie, and press spase to restart");
         } else{
            $("body").addClass("game-over");
            $(".start-game").text("You Lose, Press SpaceBar so Start");
    
            setTimeout(function(){
                $("body").removeClass("game-over");
            },150);
         }
  
           
        restart()
    }
}   

function chooseButtons(){
    userGame = [];
    stage++;
    $(".start-game").text("Level " + stage);
    let mathChoose = Math.floor(Math.random() * 4);
    let mathChooseRandom = buttons[mathChoose];
    game.push(mathChooseRandom);

    $("#" + mathChooseRandom).fadeIn(98).fadeOut(98).fadeIn(98);
 
}

function buttonPress(nowbutton){
    $("#" + nowbutton).addClass("press");
    setTimeout(function(){
        $("#" + nowbutton).removeClass("press");
    },200)
}


function restart(){
    stage = 0;
    game = [];
    start = false;
    $(".hide").hide();
}
});
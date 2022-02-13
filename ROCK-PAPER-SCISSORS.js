const start_btn=document.querySelector(".start_btn")
const board_game=document.querySelector(".board_game")
var player1_turn=true

const hand_player1=document.querySelector(".hand_player1")
const hand_computer=document.querySelector(".hand_computer")
const btn_options=document.querySelectorAll(".btn_option")
const player1_score=document.querySelector(".player1_score")
const computer_score=document.querySelector(".computer_score")
const winner=document.querySelector(".winner")
let player1_choice //VARIABLE PARA DETERMINAR LA ELECCIÓN DEL PLAYER1
let computer_choice //VARIABLE PARA DETERMINAR LA ELECCIÓN DEL COMPUTER

btn_options.forEach(btn_option => {
    btn_option.addEventListener("click",(e)=>{
        player1_choice=set_player_choice(e.target)
        computer_choice=set_computer_choice()
        winner.textContent=`And the winner is...`
        hand_player1.src=`./ASSETS/ROCK.png`
        hand_computer.src=`./ASSETS/ROCK.png`
        play_hands()
    })
});
function set_player_choice(btn_clicked){
    return btn_clicked.textContent
}
function set_computer_choice(){
    const computer_options=["ROCK","PAPER","SCISSORS"]
    const random_number=Math.floor((Math.random()*3))
    return computer_options[random_number]
}
function play_hands(){
    hand_player1.classList.add("shake_hands_playe1")
    hand_computer.classList.add("shake_hands_playe2")
    setTimeout(() => {
        hand_player1.classList.remove("shake_hands_playe1")
        hand_computer.classList.remove("shake_hands_playe2")
        show_hands_result()
    },2500);
}
function show_hands_result(){
    hand_player1.src=`https://francopetosa99.github.io/FrancoPetosa99-rock-paper-scissors.github.io/ASSETS/${player1_choice.toLowerCase()}.png`
    hand_computer.src=`https://francopetosa99.github.io/FrancoPetosa99-rock-paper-scissors.github.io/ASSETS/${computer_choice.toLowerCase()}.png`
    check_winner() //CUANDO SE TERMINA LA ANIMACIÓN Y SE MUESTRAN LOS RESULTADOS LOS JUAGDORES YA SABEN QUIEN GANO ENTONCES EN ESTA INSTACIA INVOCAMOS LA FUNCION CHECK_WINNER PARA ACTUALIZAR EL MARCADOR
}
function check_winner(){ //LE PASO LAS OPCIONES DE START_GAME Y EVALUAMOS EL GANADOR
    let winner_is
    if(player1_choice==computer_choice){
        winner_is="DRAW"
    }else if(player1_choice=="SCISSORS"&&computer_choice=="PAPER"){
        winner_is="PLAYER1"
    }else if(player1_choice=="SCISSORS"&&computer_choice=="ROCK"){
        winner_is="COMPUTER"
    }else if(player1_choice=="ROCK"&&computer_choice=="PAPER"){
        winner_is="COMPUTER"
    }else if(player1_choice=="ROCK"&&computer_choice=="SCISSORS"){
        winner_is="PLAYER1"
    }else if(player1_choice=="PAPER"&&computer_choice=="SCISSORS"){
        winner_is="COMPUTER"
    }else if(player1_choice=="PAPER"&&computer_choice=="ROCK"){
        winner_is="PLAYER1"
    }
    winner.textContent= winner_is!="DRAW"?`The winner is ${winner_is}`:`${winner_is}`
    update_score(winner_is)
}
let score_count_player1= Number()
let score_count_computer=Number()
function update_score(winner_is){
    if(winner_is=="PLAYER1"){
        score_count_player1++
        player1_score.textContent=`player1: ${score_count_player1}`
    }else if(winner_is=="COMPUTER"){
        score_count_computer++
        computer_score.textContent=`computer: ${score_count_computer}`
    }else if(winner_is=="DRAW"){
        return
    }
}

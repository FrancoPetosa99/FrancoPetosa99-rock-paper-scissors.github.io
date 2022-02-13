const start_btn=document.querySelector(".start_btn")
const board_game=document.querySelector(".board_game")
var player1_turn=true
function start_game(){ //EN ESTA FUNCIÓN SE CREA EL TABLERO Y LOS ELEMENTOS PARA DISPONER DEL JUEGO
    console.log("THE GAME HAS BEGAN")
    board_game.innerHTML=`
        <div class="score_board">
         <h2 class="player1_score">player1: 0</h2>
         <h2 class="computer_score">computer: 0</h2>
        </div>
        <h3 class="winner">Choose your weapon</h3>
        <div class="contenedor_hands">
                <img draggable="false" src="./ASSETS/rock.png" class="hand_player1" />
                <h1 class="vs">VS</h1>
                <img draggable="false" src="./ASSETS/rock.png" class="hand_computer" />
        </div>
        <div class="btn_container">
            <button class="btn_option">ROCK</button>
            <button class="btn_option">PAPER</button>
            <button class="btn_option">SCISSORS</button>
        </div>
    `
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
            player1_choice=e.target.textContent
            const computer_options=["ROCK","PAPER","SCISSORS"]
            let random_number=Math.floor((Math.random()*3))
            computer_choice=computer_options[random_number]
            winner.textContent=`And the winner is...`
            hand_player1.src=`./ASSETS/ROCK.png`
            hand_computer.src=`./ASSETS/ROCK.png`
            play_hands()
        })
    });
    function play_hands(){
        hand_player1.classList.add("shake_hands_playe1")
        hand_computer.classList.add("shake_hands_playe2")
        setTimeout(() => {
            hand_player1.classList.remove("shake_hands_playe1")
            hand_computer.classList.remove("shake_hands_playe2")
            hand_player1.src=`./ASSETS/${player1_choice}.png`
            hand_computer.src=`./ASSETS/${computer_choice}.png`
            check_winner() //CUANDO SE TERMINA LA ANIMACIÓN Y SE MUESTRAN LOS RESULTADOS LOS JUAGDORES YA SABEN QUIEN GANO ENTONCES EN ESTA INSTACIA INVOCAMOS LA FUNCION CHECK_WINNER PARA ACTUALIZAR EL MARCADOR
        },2500);
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
}
start_btn.addEventListener("click",()=>{
    start_game()
})
start_game()

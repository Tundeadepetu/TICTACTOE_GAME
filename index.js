let player = " "
let selectPlayer = false
const player1 = "X"
const player2 = "O"
const box1 = document.getElementById("one")
const selectBtn = document.getElementById("select")

//const play2 = document.getElementById("pl-2")

let select = `Select player <button onclick= "ply1()" class="btn-dom">Player1</button><button onclick= "ply2()" class="btn-dom">Player2</button>`

function ply1(){
    console.log("clicked1")
}

function ply2(){
    console.log("clicked2")
}

    selectBtn.addEventListener("click", ()=>{
        return selectBtn.innerHTML = `${select}`
    })


//console.log(player = player1)

box1.addEventListener("click", ()=>{
    if(player1){
       box1.textContent = "X"
    }else{
        box1.textContent = "O"
    }
})

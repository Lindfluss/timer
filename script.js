let isPaused = false
function timeEnter(){
  x = document.getElementById("numb").value
  timer()
}

let timer = setInterval(()=>{
  if(!isPaused){
    if (x <= 0){
      (clearInterval(timer))
    }
    time.textContent = x
    x--
  }
},1000)

function pause(){
  if (!isPaused){
    isPaused = true
  } else {
    isPaused = false
  }
}
function clear(){
  clearInterval(timer)
}
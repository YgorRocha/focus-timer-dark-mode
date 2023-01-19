
export default function Timer({minutesDisplay, secondsDisplay}){
   let timerTimeOut;
   let minutes = Number(minutesDisplay)  

    function updateTimer(minutes,seconds){ 
        minutesDisplay.textContent = String(minutes).padStart(2, '0')
        secondsDisplay.textContent = String(seconds).padStart(2, '0')
    }
    function countDown(){
      timerTimeOut = setTimeout(function(){    
            
            let minutes = Number(minutesDisplay.textContent)    
            let seconds = Number(secondsDisplay.textContent)  
            
            if(seconds <= 0 && minutes <= 0){
                return
            }
            if(seconds <= 0){
                seconds = 60;
                --minutes
            }
            updateTimer(minutes,secondsDisplay.textContent = seconds - 1)
            
            countDown()
            
        },1000)
    }
    function resetTimer(){
        clearTimeout(timerTimeOut)
        updateTimer(minutesDisplay.textContend = minutes = 5, 0) 
    }

    function hold(){
        clearTimeout(timerTimeOut) 
    }

    return{
        updateTimer,
        countDown,
        resetTimer,
        hold,
    }
}


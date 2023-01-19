import{
    buttonPlay,
    buttonPause,
    addPlus,
    buttonStop,
    subtractMinus,
    minutesDisplay,
    modoEscuro,
    modoClaro,
    body,
    images,
    buttonColor,
    volumeControls,
    buttons,
    audios,
} from "./elements.js"
 
export default function Events({timer}){

    
    buttonPlay.addEventListener('click', function(){
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        timer.countDown()
    })
    
        buttonPause.addEventListener('click', function(){
            buttonPlay.classList.remove('hide')
            buttonPause.classList.add('hide')
            timer.hold()
    
        })
        
        buttonStop.addEventListener('click', function(){
            buttonPlay.classList.remove('hide')
            buttonPause.classList.add('hide')
            timer.resetTimer()
                   
        })
        
        function handleaddPlus(){
            let currentMinutes = Number(minutesDisplay.textContent)
            timer.updateTimer(currentMinutes + 5 ,0)
       
            buttonPlay.classList.remove('hide')
            buttonPause.classList.add('hide')
            timer.hold()
       
           }  
       
           function handleSubtract(){
               let currentMinutes = Number(minutesDisplay.textContent)    
               timer.updateTimer(currentMinutes - 5, 0) 
       
               buttonPlay.classList.remove('hide')
               buttonPause.classList.add('hide')
               timer.hold()
       
              if(currentMinutes <=0){
              timer.updateTimer(minutesDisplay.textContent = currentMinutes * 0, 0) 
              }
           }
       
           addPlus.addEventListener('click', handleaddPlus)
           subtractMinus.addEventListener('click', handleSubtract)

           //   SWITCH MODES   //

           modoEscuro.addEventListener('click', function(){
   
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            modoClaro.classList.remove('hide')
            modoEscuro.classList.add('hide')
            
            
            images.forEach(function(img) {
                img.classList.toggle('img-dark');
              });

            buttonColor.forEach(function(bckg){
                bckg.classList.add('bgcolorLight')
                bckg.classList.remove('bgcolorDark')

            })

              //Aqui você troca o botão pressionado para cor roxa//

            buttonColor.forEach(function(button) {
                button.addEventListener('click', function() {
                    buttonColor.forEach(function(b) {
                    b.classList.remove('dark');
                    });
                    this.classList.add('active');
                });
            });
    
            //Aqui para remover o botão pressionado quando mudar de modo// 
            
            buttonColor.forEach(function(b) {
                b.classList.remove('dark');
                b.classList.add('active');

              });

              // aqui para mudar a cor do hover//

              buttonColor.forEach(function(button) {
                button.classList.remove('btn-dark');
              });
    });
        
        
        modoClaro.addEventListener('click', function(){
            
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            body.style.transition = '1s'
            modoClaro.classList.add('hide')
            modoEscuro.classList.remove('hide')
            
            images.forEach(function(img) {
                img.classList.toggle('img-dark');
              });

              buttonColor.forEach(function(bckg){
              bckg.classList.add('bgcolorDark')
              bckg.classList.remove('bgcolorLight')

            })

              //Aqui você troca o botão pressionado para cor  branca//

              buttonColor.forEach(function(button){
                button.addEventListener('click', function() {
                    buttonColor.forEach(function(b) {
                    b.classList.add('dark');
                    });
                    this.classList.remove('active');
                });
              });

             //Aqui para remover o botão pressionado quando mudar de modo// 

              buttonColor.forEach(function(b) {
                b.classList.remove('active');
                b.classList.add('dark');
              });

              // aqui para mudar a cor do hover//

              buttonColor.forEach(function(button) {
                button.classList.add('btn-dark');
            });
        });
}
     
let currentAudio;

volumeControls.forEach(volumeControl => {
volumeControl.addEventListener('change', function() {
  audios.forEach(audio => {
    audio.volume = volumeControl.value / 100;
  });
});
});

function handleTouch(button){
  buttons.forEach(button => button.classList.remove("pressed" , 'active'));
  button.classList.add("pressed" , 'active');
}

buttons.forEach((button, index) => {
  button.addEventListener('click', function(){
    if (currentAudio) currentAudio.pause();
    currentAudio = audios[index];
    currentAudio.play();
    handleTouch(button)
  })
})
           
           

    
        
       
            

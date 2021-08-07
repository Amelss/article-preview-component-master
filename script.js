
let social = document.getElementById('socials')
let icon = document.getElementById('icon')
let arrowDown = document.getElementById('arrow-down')
let newSocials = document.getElementById('social1')
let newIcon = document.getElementById('icon-el')
let arrow = document.getElementById('arrow')


 function share(){
     if ( screen && screen.width < 400){
        document.getElementById('icon').style.backgroundColor = 'hsl(217, 19%, 35%)'
        newSocials.style.visibility='visible'
        console.log('i work')
    } else{ 
        document.getElementById('icon').style.backgroundColor = 'hsl(217, 19%, 35%)'    
        social.style.visibility = 'visible'
        arrowDown.style.visibility = 'visible'
        
    }

  
 }


 

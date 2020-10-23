import {changeButtonsToFalse, changeButtonsToTrue} from './changeButtons'

export const  changeColor = (animations, speed)=>{
    changeButtonsToTrue()
    let newAnimations = []

    for(let animation of animations){
        newAnimations.push(animation[0].comparison)
        newAnimations.push(animation[0].comparison)
        newAnimations.push(animation[1].swap)
    }
    
    for(let i = 0; i<newAnimations.length; i++){
        const arrayBar = document.getElementsByClassName("array-bar")
        const colorChange = i % 3 !== 2
        
        if(colorChange){
            let [barOne, barTwo] = newAnimations[i]
            let barOneStyle = arrayBar[barOne].style
            let barTwoStyle = arrayBar[barTwo].style
            const color = i%3 === 0 ? 'red' :'turquoise'
            setTimeout(() => {
                barOneStyle.backgroundColor = color
                barTwoStyle.backgroundColor = color
                barOneStyle = 'turquoise'
            }, i*speed);
        }else{
            if(!(newAnimations[i] === 'no swap')){
                let [barOne, barTwo] = newAnimations[i]
                let barOneStyle = arrayBar[barOne].style
                let barTwoStyle = arrayBar[barTwo].style
                setTimeout(() => {
                let temp = barOneStyle.height
                barOneStyle.height = barTwoStyle.height
                barTwoStyle.height = temp
                let temp2 = arrayBar[barOne].innerHTML
                arrayBar[barOne].innerHTML = arrayBar[barTwo].innerHTML
                arrayBar[barTwo].innerHTML = temp2
                if((i+1) === newAnimations.length){
                    changeButtonsToFalse()
                }
                }, i*speed);
            }  
        }
        
    }

    
  
}

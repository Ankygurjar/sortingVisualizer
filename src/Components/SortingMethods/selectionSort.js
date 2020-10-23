import {changeButtonsToFalse, changeButtonsToTrue} from './changeButtons'

export const selectionSort = (array, speed) =>{
  changeButtonsToTrue()
  let min = 0
  let tmp = 0
  let len = array.length
  let animations = []
  let j = 0
  for(var i=0; i < len-1 ; i++){
    min = i
    j = i+1
    let animaiton = []
    let animationComparison = {}
    for( j = i+1; j<len; j++){
      animationComparison = {comparison : [i, j]}
      animaiton.push(animationComparison)
      if(array[j] < array[min]){
        min = j
      }
    }
    
    let animationSwap = {swap : [min, i]}
    animaiton.push(animationSwap)
    animations.push(animaiton)
    tmp = array[i]
    array[i] = array[min]
    array[min] = tmp
    
  }
  changeColor(animations, speed)
}

 const changeColor = (animations, speed) =>{
  let newAnimations = []

  for(let i = 0; i<animations.length; i++){
      for(let j = 0; j<animations[i].length; j++){
        const swapControl = j!== animations[i].length-1
        if(swapControl){
          newAnimations.push(animations[i][j].comparison)
          newAnimations.push(animations[i][j].comparison)
        }else{
          newAnimations.push(animations[i][j])
        }
      }
  }
  
  const arrayBar = document.getElementsByClassName("array-bar")
  for(let i = 0; i<newAnimations.length; i++){
      
      if(!(newAnimations[i].swap)){
        let [barOne, barTwo] = newAnimations[i]
          let barOneStyle = arrayBar[barOne].style
          let barTwoStyle = arrayBar[barTwo].style
          const color = i%3 === 0 ? 'red' :'turquoise'
          setTimeout(() => {
              barOneStyle.backgroundColor = color
              barTwoStyle.backgroundColor = color
          }, i*speed);
      }else{
        let [barOne, barTwo] = newAnimations[i].swap
              let barOneStyle = arrayBar[barOne].style
              let barTwoStyle = arrayBar[barTwo].style
              setTimeout(() => {
                barOneStyle.backgroundColor = 'turquoise'
              barTwoStyle.backgroundColor = 'turquoise'
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

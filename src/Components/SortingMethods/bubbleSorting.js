export const bubbleSorting = (stateArray) =>{

    let sorted = false
    let animations = []
    while(!sorted){
        sorted = true
        
        for(let i = 0; i<stateArray.length-1; i++ ){
            let animationComparison = {comparison : [i, i+1]}
            let animationSwap = {}
            if(stateArray[i] > stateArray[i+1]){
                animationSwap = {swap : [i, i+1]}
                let temp = stateArray[i+1]
                stateArray[i+1] = stateArray[i]
                stateArray[i] = temp
                sorted = false
            }else{
                animationSwap = {swap: "no swap"}
            }
            animations.push([animationComparison, animationSwap])
        }
    }
    return animations
}   

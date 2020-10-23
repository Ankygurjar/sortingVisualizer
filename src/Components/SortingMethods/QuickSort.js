import {changeButtonsToFalse, changeButtonsToTrue} from './changeButtons'

export const quickSort = (array, speed) =>{
    let animations = []

    quickSortHelper(array, 0, array.length-1, animations)
    animate(animations, speed)
}

function quickSortHelper(array, start, end, animations){
    if(start < end){
        let pivotIdx = Partition(array, start, end, animations)
        quickSortHelper(array, start, pivotIdx-1, animations)
        quickSortHelper(array, pivotIdx+1, end, animations)
    }
}

function Partition(array, start, end, animations){
    let pivot = array[end]
    let pivotIdx = start

    for(let i = start; i<end; i++){
        animations.push({comparision : [i, end]})
        animations.push({comparision : [i, end]})
        if( array[i] <= pivot ){
            animations.push({swap : [i, pivotIdx]})
            let temp = array[pivotIdx]
            array[pivotIdx] = array[i]
            array[i] = temp
            pivotIdx++
        }
    }

    animations.push({comparision : [pivotIdx, end]})
    animations.push({comparision : [pivotIdx, end]})
    animations.push({swap : [pivotIdx, end]})
    let temp = array[pivotIdx]
    array[pivotIdx] = array[end]
    array[end] = temp
    return pivotIdx
}

function animate(animations, speed){
    changeButtonsToTrue()
    for(let i = 0; i<animations.length; i++){
        const arrayBar = document.getElementsByClassName("array-bar")
        if(animations[i].comparision){
            let [barOne, barTwo] = animations[i].comparision
            const barOneStyle = arrayBar[barOne].style
            const barTwoStyle = arrayBar[barTwo].style
            setTimeout(() => {
                barOneStyle.backgroundColor = 'red'
                barTwoStyle.backgroundColor = 'turquoise'
            }, setTimeout(() => {
                barOneStyle.backgroundColor = 'turquoise'
                barTwoStyle.backgroundColor = 'red'
            }, i*speed));
            
        }else{
            let [barOne, barTwo] = animations[i].swap
            const barOneStyle = arrayBar[barOne].style
            const barTwoStyle = arrayBar[barTwo].style
            setTimeout(() => {
                let temp = barOneStyle.height
                barOneStyle.height = barTwoStyle.height
                barTwoStyle.height = temp
                let temp2 = arrayBar[barOne].innerHTML
              arrayBar[barOne].innerHTML = arrayBar[barTwo].innerHTML
              arrayBar[barTwo].innerHTML = temp2
              barTwoStyle.backgroundColor = 'turquoise'
              barOneStyle.backgroundColor = 'turquoise'
              if((i+1) === animations.length){
                changeButtonsToFalse()
            }
            }, i*speed);
        }
    }
}
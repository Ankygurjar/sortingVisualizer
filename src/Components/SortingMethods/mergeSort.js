import {changeButtonsToFalse, changeButtonsToTrue} from './changeButtons'

export const mergeSort = async (array, speed) =>{
    changeButtonsToTrue()
    let animations = []
    const auxiliaryArray = array.slice();
    mergeHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    changeColor(animations, speed, array.length)
}

function mergeHelper(mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,){
    
    if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  merge (mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function merge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ){
    let k = startIdx
    let i = startIdx
    let j = middleIdx+1

    while( i <= middleIdx && j <= endIdx ){
        animations.push([i, j])
        animations.push([i, j])
        if(auxiliaryArray[i] <= auxiliaryArray[j]){
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        }else{
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }

    while( i <= middleIdx){
        animations.push([i, i])
        animations.push([i, i])
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }

    while( j <= endIdx){
        animations.push([j, j])
        animations.push([j, j])
        animations.push([k, auxiliaryArray[j]])
        mainArray[k++] = auxiliaryArray[j++]
    }

}

 function  changeColor(newAnimations, speed, arrayLength){

    for(let i = 0; i< newAnimations.length ; i++){
        const arraybar = document.getElementsByClassName("array-bar")
        const colorCondition = i%3 !== 2
        if(colorCondition){
            let [barOne, barTwo] = newAnimations[i]
            const barOneStyle = arraybar[barOne].style
            const barTwoStyle = arraybar[barTwo].style
            const color = i % 3 === 0 ? "red" : "turquoise";
            setTimeout(() => {
                barOneStyle.backgroundColor = color
                barTwoStyle.backgroundColor = color
            }, i*speed)
        }else{
            setTimeout(() => {
                const [barOne , newHeight] = newAnimations[i]
                const barOneStyle = arraybar[barOne].style
                if(arraybar[barOne].innerHTML !== ''){
                    arraybar[barOne].innerHTML = newHeight
                }
                barOneStyle.height = returnHeight(newHeight, arrayLength)+"px"
                if((i+1) === newAnimations.length){
                    changeButtonsToFalse()
                }
            }, i*speed);
        }
    }
}

function returnHeight(val, len){
    if(len <= 25){
        return val*16
    }
    else if(len < 40){
        return val*8
    }else if(len > 40 && len <50){
        return val*5
    }else if(len > 50 && len <70){
        return val*4
    }else if(len > 70 && len <90){
        return val*4
    }else if(len > 90 && len <110){
        return val*2
    }else if(len > 110 && len <130){
        return val
    }else if(len > 130 && len <150){
        return val
    }else if(len > 150 && len <300){
        return val
    }
}
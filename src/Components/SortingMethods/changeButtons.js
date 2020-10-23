export const changeButtonsToTrue = ()=>{
    const buttons = document.getElementsByClassName("sortingButton")
    const slider = document.getElementsByClassName("slider")
    var option = document.getElementsByTagName("option")
    let selected = document.getElementById("select-selected")
    for(let button of buttons){
        button.style.backgroundColor = "red"
        button.style.color = "black"
        button.disabled = true
    }
    let s = document.getElementsByTagName("select")
    
    //console.log(selected)
    slider[1].disabled = true
    s[0].style.display = "none"
    selected.disabled = true
    for(let op of option){
        op.disabled = true
    }
    slider.disabled = true
}


export const changeButtonsToFalse = ()=>{
    const buttons = document.getElementsByClassName("sortingButton")
    const slider = document.getElementsByClassName("slider")
    var option = document.getElementsByTagName("option")
    let selected = document.getElementById("select-selected")
    let s = document.getElementsByTagName("select")
    
    //console.log(selected)
    s[0].style.display = "inline"
    for(let button of buttons){
        button.style.backgroundColor = "darkolivegreen"
        button.style.color = "white"
        button.disabled = false
    }
    selected.disabled = false
    for(let op of option){
        op.disabled = false
    }
    slider[1].disabled = false
}
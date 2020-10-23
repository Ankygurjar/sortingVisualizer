import React, {Component} from 'react'
import '../index.css'
//import Algorithms from './PageComponents/algorithms'

import {selectionSort} from './SortingMethods/selectionSort'
import {changeColor} from './SortingMethods/changeColor'
import {mergeSort} from './SortingMethods/mergeSort'
import {bubbleSorting} from './SortingMethods/bubbleSorting'
import { quickSort } from './SortingMethods/QuickSort'

export default class Home extends Component{

    constructor(props){
        super(props)
        this.state = {
            array:[],
            sliderRange:10,
            minRange:10,
            maxRange:300,
            clicked: false,
            algo: '',
            speedOfAlgo:3
        }

        this.getSliderValue = this.getSliderValue.bind(this)
        this.selectionSort = this.selectionSort.bind(this)
        this.insertionSorting = this.mergeSorting.bind(this)
        this.returnHeight = this.returnHeight.bind(this)
        this.returnWidth = this.returnWidth.bind(this)
        this.bubbleSorting = this.bubbleSorting.bind(this)
        this.changeSpeed = this.changeSpeed.bind(this)
        this.quickSort = this.quickSort.bind(this)
    }

    componentDidMount(){
        this.generateNewArray()
    }

    getSliderValue(e){
        e.preventDefault()
        this.setState({
            sliderRange:e.target.value
        })
        this.generateNewArray()
        
    }

    changeSpeed(e){
        console.log("hello")
        this.setState({
            speedOfAlgo:e.target.value
        })
    }

    generateNewArray(){
        let array = []
        let curEle =0
        let counter = 2
        for(let i=1; i<=this.state.sliderRange; i++){
                curEle = randomNumber(this.state.minRange, this.state.sliderRange)
                if(array.indexOf(curEle) !== -1){
                    curEle = Math.round(Math.random()*counter)
                    array.push(curEle)
                    counter = counter+1
                }else{
                    array.push(curEle)
                }
        }
        this.setState({
            array:array
        })
    }
    
    selectionSort(){
        selectionSort(this.state.array, this.state.speedOfAlgo)
        
    }

    mergeSorting(){
        mergeSort(this.state.array, this.state.speedOfAlgo)
    }

    bubbleSorting(){
        let animations = bubbleSorting(this.state.array)
        changeColor(animations, this.state.speedOfAlgo)
    }

    quickSort(){
        quickSort(this.state.array, this.state.speedOfAlgo)
    }


    returnHeight(val){
        if(this.state.array.length < 20){
            return val*16
        }
        else if(this.state.array.length < 40){
            return val*8
        }else if(this.state.array.length > 40 && this.state.array.length <50){
            return val*5
        }else if(this.state.array.length > 50 && this.state.array.length <70){
            return val*4
        }else if(this.state.array.length > 70 && this.state.array.length <90){
            return val*4
        }else if(this.state.array.length > 90 && this.state.array.length <110){
            return val*2
        }else if(this.state.array.length > 110 && this.state.array.length <130){
            return val
        }else if(this.state.array.length > 130 && this.state.array.length <150){
            return val
        }else if(this.state.array.length > 150 && this.state.array.length <300){
            return val
        }
    }

    returnWidth(){
        if(this.state.array.length < 20){
            return 60
        }
        else if(this.state.array.length < 40){
            return 25
        }else if(this.state.array.length > 40 && this.state.array.length <50){
            return 20
        }else if(this.state.array.length > 50 && this.state.array.length <70){
            return 15
        }else if(this.state.array.length > 70 && this.state.array.length <90){
            return 11
        }else if(this.state.array.length > 90 && this.state.array.length <110){
            return 9
        }else if(this.state.array.length > 110 && this.state.array.length <130){
            return 7
        }else if(this.state.array.length > 130 && this.state.array.length <150){
            return 4
        }else if(this.state.array.length > 150 && this.state.array.length <300){
            return 2
        }
    }

    render(){

        return(
            <div>
                <center><h1>Sorting Algorithms Visualizer</h1></center>
                <div className="array-container">
                    {this.state.array.map((value, i)=>{
                        return(
                            <div key = {i}
                            className="array-bar"
                            style={{height:`${this.returnHeight(value)}px`,width:`${this.returnWidth()}px`}}
                            >{this.state.array.length < 30 ? value : ''}</div>
                        )
                    })}
                </div>

                <div className="slider">
                    <b>Pick your Range</b>
                    <input type="range" min={this.state.minRange} max={this.state.maxRange} name="rangePicker" className="slider" onChange={this.getSliderValue}/>
                    <button className="sortingButton"  onClick={()=>this.generateNewArray()}> Generate New Array </button>
                    <button disabled = { this.state.clicked ? true : false}  className="sortingButton" value="Selection Sort" onClick={()=>{this.selectionSort()}}>Sort by Slection Sort</button>
                    <button disabled = { this.state.clicked ? true : false}  className="sortingButton" value="Merge Sort" onClick={()=>{this.mergeSorting()}}>Sort by Merge Sort</button>
                    <button disabled = { this.state.clicked ? true : false}  className="sortingButton" value="Bubble Sort" onClick={()=>{this.bubbleSorting()}}>Sort by Bubble Sort</button>
                    <button disabled = { this.state.clicked ? true : false}  className="sortingButton" value="Quick Sort" onClick={()=>{this.quickSort()}}>Sort by Quick Sort</button>
                    <label>Speed : </label>
                    <select onClick={(e)=>this.changeSpeed(e)} id="select-selected" style={{width:'100px'}}>
                        <option value="3">Fast</option>
                        <option value="10">Medium</option>
                        <option value="30">Slow</option>
                    </select>
                </div>

            </div>
        )
    }
}

function randomNumber(min, max){
    return Math.floor((Math.random() * (max-min+1)+min)*1.65)
}
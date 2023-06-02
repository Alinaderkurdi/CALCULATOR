
import * as  elementrefrence from "./GetElement.js";
import { addEvent } from './Add-event.js';

import { createNewElement } from "./ElementCreator.js";


import { operatinoTest } from "./Operation.js";

const testToAddhistorySection = (elementRef , create , e)=>{
  console.log(
    create('li', 'out-put-text', null , {
      addOrNot : true,
      elementName : 'p',
      numberOfElement : 3,
      elementscalssName : [
        'user-input-number',
        'result-number',
        'date'
      ],
      elementsTextContent : [
        '1+1=',
        '3',
        '2023/5/22'
      ]
  }))
}


let inputFildValue = []

const addToInputBox = (buttonValue)=>{
  inputFildValue.push(buttonValue)
  elementrefrence.getElement('.input-fild').value = inputFildValue.join('')
}


const printLastInputValue = ()=>{//this function for test!!!
  console.log('input test function value !!!')
  return elementrefrence.getElement('.input-fild').value
}


const testClearButton = ()=>{
  const currentValue = printLastInputValue()
  addToInputBox(currentValue.slice(0, -1))
}



const showSideBareAndhistorySection = ( sectionCalss , animationClass, e)=>{
  console.log(e.target.className)
  elementrefrence.getElement(sectionCalss).classList.toggle(animationClass)
}



const getButtonValue = (event)=>{
  if(event.target.value){
     addToInputBox(event.target.value)
  }else{
    return
  }
}


addEvent(
  elementrefrence.elementRefrencebyId('test-id'),
  'click',
  testClearButton
)

addEvent(
  elementrefrence.getElement('.darke-mode-button'),
  'click',
  testToAddhistorySection.bind(this, elementrefrence, createNewElement)
)


addEvent(
  elementrefrence.elementRefrencebyId('key-bord'),
  'click',
  getButtonValue
)

addEvent(
  elementrefrence .getElement('.side-bare-button'),
  'click',
  showSideBareAndhistorySection.bind(this ,'.side-section', 'side-testopen')
)
addEvent(
  elementrefrence.getElement('.history-button'),
  'click',
  showSideBareAndhistorySection.bind(this, '.history-section', 'history-section-open')
)

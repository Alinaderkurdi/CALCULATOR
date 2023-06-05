
import * as  elementrefrence from "./GetElement.js";
import { addEvent } from './Add-event.js';

import { createNewElement } from "./ElementCreator.js";

import { operatinoTest } from "./Operation.js";




const getCurrentDate = ()=>{
  const date = new Date()
  const time = [date.getFullYear().toString(),date.getMonth().toString() ,date.getDay().toString()]
  const [ year, month , day] = time
  return `${year}/${day}/${month}`;
}

//this function need to call with dynamic result and enetry number!!
const addToHistorySection = (enterytext, textResult, date)=>{
  const  parent  = elementrefrence.elementRefrencebyId('result-box')
  const result = createNewElement('li', 'out-put-text', null , {
    addOrNot : true,
    elementName : 'p',
    numberOfElement : 3,
    elementscalssName : [
      'user-input-number',
      'result-number',
      'date'
    ],
    elementsTextContent : [
      enterytext,
      textResult,
      date
    ]
})
  parent.appendChild(result)
}

addToHistorySection('12+12=', '24', getCurrentDate())




let inputFildValue = []

const getCurrentInputBox = ()=>{
  return elementrefrence.getElement('.input-fild').value
}

const addToInputBox = (buttonValue)=>{
  inputFildValue.push(buttonValue)
  elementrefrence.getElement('.input-fild').value = inputFildValue.join('')
}


const clearInputBox = ()=>{
  const currentInputValue =  getCurrentInputBox()
  const newValue = currentInputValue.slice(0, -1)
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
  clearInputBox
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

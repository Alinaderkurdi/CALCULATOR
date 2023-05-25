
import * as  elementrefrence from "./GetElement.js";
import { addEvent } from './Add-event.js';

//import { operationButton } from "./Operation.js";
import { createNewElement } from "./ElementCreator.js";

//operationButton(elementrefrence.getElementInArray('key-bord', 'button'))

const testToAddhistorySection = (elementRef , create , e ,data)=>{
  console.log(create('li', 'out-put-text', null , {
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
      ['2023','4', '1']
    ]
  }))
  
 //create(
 //  'div', 'someCalss', 'hell world',
 //  {
 //    addOrNot: true,
 //    elementName : 'p',
 //    numberOfElement : 5,
 //    elementscalssName : [
 //      'someClassTow',
 //    ],
 //    elementsTextContent :[
 //      'hello world'
 //    ]
 //  }
 //)
  //add true of flase 
  //configer this function just for test and i'll should mkes this function more dynamic
}


let inputFildValue = []

const addToInputBox = (buttonValue)=>{
  inputFildValue.push(buttonValue)
  elementrefrence.getElement('.input-fild').value = inputFildValue.join('')
}

const showSideBareAndhistorySection = ( sectionCalss , animationClass, e)=>{
  console.log(e.target.className)
  elementrefrence.getElement(sectionCalss).classList.toggle(animationClass)
}

const printLastInputValue = ()=>{//this function for test!!!
  console.log('input test function value !!!')
  console.log(elementrefrence.getElement('.input-fild').value)
}

const getButtonValue = (event)=>{
    if(event.target.value){
       addToInputBox(event.target.value)
    }else{
      return
    }
}


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

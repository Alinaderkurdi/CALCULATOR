
import * as  elementrefrence from "./GetElement.js";
import { addEvent } from './Add-event.js';


//elementrefrence.getElementInArray('key-bord', 'button')



const addToInputBox = (buttonValue)=>{
  console.log(buttonValue)
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

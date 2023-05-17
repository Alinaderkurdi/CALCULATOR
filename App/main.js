import {getElement} from './GetElement.js';
import {addEvent } from './Add-event.js';


const showSideBareAndhistorySection = (sectionCalss , animationClass)=>{
   getElement(sectionCalss).classList.add(animationClass)
}




addEvent(getElement('.side-bare-button'),'click', showSideBareAndhistorySection.bind(this , '.side-section', 'side-testopen'))
addEvent(getElement('.history-button'),'click', showSideBareAndhistorySection.bind(this , '.history-section', 'history-section-open'))

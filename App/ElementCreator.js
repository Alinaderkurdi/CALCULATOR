




//export const createNewElement = (NameElment, elementCalssName , elementText, CreateNestedChild)=>{
//    const newElement =  document.createElement(NameElment)
//    newElement.className = elementCalssName
//    newElement.textContent = elementText
//   
//    return newElement
//}

const createNestedElement = (nestElement, parentElement)=>{
    let parentElementsss = parentElement
    for(let i = 0 ; i < nestElement.numberOfElement ; i++){
        const nestElementName = document.createElement(nestElement.elementName)
      //  console.log(nestElementName)
        nestElement.className = nestElement.elementscalssName.length[i]
        nestElement.textContent = nestElement.elementsTextContent.length[i]
        console.log(nestElementName)
        parentElementsss.appendChild(nestElementName)
    }
    console.log(parentElementsss)
    return parentElementsss
}


export const createNewElement = (
    NameElment,
    elementCalssName,
    elementText,
    CreateChildElementObject = null
)=>{
   let newElement =  document.createElement(NameElment)
   //newElement 
   if (CreateChildElementObject.addOrNot){
    createNestedElement(CreateChildElementObject, newElement)
   }
    newElement.className = elementCalssName
    newElement.textContent = elementText
    return newElement
}
console.log('test')

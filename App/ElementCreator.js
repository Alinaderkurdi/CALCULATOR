

const createNestedElement = (nestElement, parentElement)=>{
    let {addOrNot , ...newElementObject} = nestElement
    let parentElementRefrense = parentElement;
    for(let i = 0 ; i < newElementObject.numberOfElement ; i++){
        const nestElementName = document.createElement(newElementObject.elementName)
        nestElementName.className = newElementObject.elementscalssName[i]
        nestElementName.textContent = newElementObject.elementsTextContent[i]
        parentElementRefrense.appendChild(nestElementName)

    }
    
    return parentElementRefrense;
}

// this tow function need to be more dynamic !!!

export const createNewElement = (
    NameElment,
    elementCalssName,
    elementText,
    CreateChildElementObject = null
)=>{
   let newElement =  document.createElement(NameElment)
    newElement.className = elementCalssName
    newElement.textContent = elementText
    return CreateChildElementObject.addOrNot ? createNestedElement(CreateChildElementObject, newElement) : newElement
}

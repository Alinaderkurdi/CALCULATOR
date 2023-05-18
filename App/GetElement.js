
export const getElement = (elementClassName)=>{
  return document.querySelector(elementClassName)
}


export const elementRefrencebyId = (elementId)=>{
  return document.getElementById(elementId)
}

export const getElementInArray = (parentId, child)=>{
  const parentElement =  document.getElementById(parentId)
  return parentElement.querySelectorAll(child)
}
const sideButton = document.querySelector('.side-bare-button')
const sideSection = document.querySelector('.side-section')
const historyButton = document.querySelector('.history-button')


sideButton.addEventListener('click', (event)=>{
   console.log(event)
   sideSection.classList.add('side-testopen')
})
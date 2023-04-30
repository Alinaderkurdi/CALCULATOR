const sideButton = document.querySelector('.side-bare-button')
const sideSection = document.querySelector('.side-section')
const historyButton = document.querySelector('.history-button')
const historySection = document.querySelector('.history-section')



historyButton.addEventListener('click', ()=>{
   historySection.classList.add('history-section-open')
})



sideButton.addEventListener('click', (event)=>{
   console.log(event)
   sideSection.classList.add('side-testopen')
})
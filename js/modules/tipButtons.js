const tipButtons = document.querySelectorAll('.tipButton')

const handleTipButtonClick = event => {
  tipButtons.forEach(button => button.classList.remove('active'))

  event.target.classList.add('active')
}

tipButtons.forEach(button => button.addEventListener('click', handleTipButtonClick))

export default tipButtons;

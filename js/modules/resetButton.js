import { getBillAmount, getNumberOfPeople } from "./domInteraction.js"
import tipButtons from "./tipButtons.js";

const resetButton = document.querySelector('button[type="reset"]')
resetButton.addEventListener('click', () => {
  getBillAmount.value = '';
  getNumberOfPeople.value = ''

  tipButtons.forEach(button => {
    button.classList.remove('active');
  });

  tipResult.innerHTML = '$0.00'
  totalResult.innerHTML = '$0.00'
});

export default resetButton;
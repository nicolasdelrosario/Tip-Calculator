import { calculateTipAmount, calculateTotalAmount } from './modules/tipCalculator.js';
import { getBillAmount, getNumberOfPeople, calculateButton, tipResult, totalResult } from './modules/domInteraction.js';
import tipButtons from './modules/tipButtons.js';
import resetButton from './modules/resetButton.js';


calculateButton.addEventListener('click', () => {
  const billAmount = parseFloat(getBillAmount.value);
  const numberOfPeople = parseFloat(getNumberOfPeople.value);
  let tipPercentage;

  tipButtons.forEach(button => {
    if (button.classList.contains('active')) {
      tipPercentage = parseFloat(button.getAttribute('data-percentage'));
    }
  });

  const tipAmountPerPerson = calculateTipAmount(billAmount, tipPercentage, numberOfPeople);
  const totalAmountPerPerson = calculateTotalAmount(billAmount, tipPercentage, numberOfPeople);

  !isNaN(tipAmountPerPerson)
  ? tipResult.innerHTML = `${tipAmountPerPerson.toFixed(2)}`
  : tipResult.innerHTML = '$0.00'

  !isNaN(totalAmountPerPerson)
  ? totalResult.innerHTML = `${totalAmountPerPerson.toFixed(2)}`
  : totalResult.innerHTML = '$0.00'
});

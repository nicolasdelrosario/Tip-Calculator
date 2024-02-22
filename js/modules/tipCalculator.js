const calculateTipAmount = (billAmount, tipPorcentage, numberOfPeople) => {
  const tipAmount = billAmount * (tipPorcentage / 100);
  const totalByPerson = tipAmount / numberOfPeople;
  return totalByPerson;
}

const calculateTotalAmount = (billAmount, tipPorcentage, numberOfPeople) => {
  const totalAmount = (billAmount * (tipPorcentage / 100)) + billAmount;
  const totalByPerson = totalAmount / numberOfPeople;
  return totalByPerson;
}

export { calculateTipAmount, calculateTotalAmount };
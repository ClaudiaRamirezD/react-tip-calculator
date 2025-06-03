export function calculateTipAndTotal(bill, tip, customTip, people) {
  const numericBill = parseFloat(bill);
  const numericPeople = parseInt(people);
  let selectedTip = tip;

  // Validar customTip solo si tip es null
  if (selectedTip == null && customTip) {
    const customTipValue = parseFloat(customTip);
    if (!isNaN(customTipValue) && customTipValue > 0) {
      selectedTip = customTipValue / 100;
    } else {
      selectedTip = null;
    }
  }

  const isValid =
    numericBill > 0 &&
    numericPeople > 0 &&
    selectedTip != null &&
    !isNaN(selectedTip);

  const tipAmount = isValid ? (numericBill * selectedTip) / numericPeople : 0;
  const totalPerPerson = isValid ? numericBill / numericPeople + tipAmount : 0;

  return { tipAmount, totalPerPerson, isValid };
}

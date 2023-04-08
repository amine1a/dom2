const plusButtons = document.querySelectorAll('.fa-plus-circle');
const minusButtons = document.querySelectorAll('.fa-minus-circle');
const trashButtons = document.querySelectorAll('.fa-trash-alt');
const totalPriceSpan = document.getElementById('total-price');


let totalPrice = 0;

function updateTotalPrice() {
  totalPriceSpan.textContent = totalPrice;
}

plusButtons.forEach(button => {
  button.addEventListener('click', () => {
    const cardBody = button.parentNode;
    const quantitySpan = cardBody.querySelector('.qute');
    const unitPriceSpan = cardBody.querySelector('.unitt-price');
    const unitPrice = parseInt(unitPriceSpan.textContent);

    let quantity = parseInt(quantitySpan.textContent);
    quantity++;
    quantitySpan.textContent = quantity;
    totalPrice += unitPrice;
    updateTotalPrice();
  });
});


minusButtons.forEach(button => {
  button.addEventListener('click', () => {
    const cardBody = button.parentNode;
    const quantitySpan = cardBody.querySelector('.qute');
    const unitPriceSpan = cardBody.querySelector('.unitt-price');
    const unitPrice = parseInt(unitPriceSpan.textContent);


    let quantity = parseInt(quantitySpan.textContent);
    if (quantity > 0) {
      quantity--;
      quantitySpan.textContent = quantity;
      totalPrice -= unitPrice;
      updateTotalPrice();
    }
  });
});

trashButtons.forEach(button => {
  button.addEventListener('click', () => {
    const cardBody = button.parentNode;
    const quantitySpan = cardBody.querySelector('.qute');
    const unitPriceSpan = cardBody.querySelector('.unitt-price');
    const unitPrice = parseInt(unitPriceSpan.textContent);
    const quantity = parseInt(quantitySpan.textContent);


    totalPrice -= unitPrice * quantity;
    updateTotalPrice();

    cardBody.parentNode.parentNode.parentNode.removeChild(cardBody.parentNode.parentNode);
  });
});

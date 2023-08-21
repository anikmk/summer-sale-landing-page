
// document.getElementById('cards').addEventListener('click', function (event) {
//     console.log(event.target)
//     const cardName = document.getElementById('card-name');
//     const cardNameText = cardName.innerText;
//     const cardNameTextAdded = document.getElementById('added-card-name');

//     cardNameTextAdded.innerText = '1. ' + cardNameText;
// });

// document.getElementById('cards').addEventListener('click', function(event){
//     console.log(event.target)
// })

// console.log("tanim")



const cardContainers = document.querySelectorAll('.cards');
const addedCardList = document.getElementById('added-card-list');
const applyCoupon = document.getElementById('applyCoupon');
const couponCode = document.getElementById('couponCode');
const totalPrice = document.querySelector('.total-price');
const discount = document.querySelector('.discount');
const finalPrice = document.querySelector('.final-price');

let selectedCards = [];
let total = 0;

cardContainers.forEach(cardContainer => {
    cardContainer.addEventListener('click', function (event) {
        const clickedCard = event.target.closest('.single-card');

        if (clickedCard) {
            clickedCard.classList.add('selected');

            const productName = clickedCard.querySelector('.product-name').textContent;
            const price = parseFloat(clickedCard.querySelector('.price').textContent);

            selectedCards.push({ productName, price });

            updateSelectedCards();
            updateTotalPrice();
        }
    });
});

function updateSelectedCards() {
    addedCardList.innerHTML = selectedCards.map((card, index) => {
        return `<li>${index + 1}. ${card.productName}</li>`;
    }).join('');
}

function updateTotalPrice() {
    total = selectedCards.reduce((sum, card) => sum + card.price, 0);
    totalPrice.textContent = total.toFixed(2);
    if (total >= 200) {
        applyCoupon.removeAttribute("disabled");
    }
    return total;
}

applyCoupon.addEventListener("click", function () {
    const innerValue = couponCode.value;

    if (innerValue === "SELL200") {
        const discountPrice = (total / 100) * 20;
        discount.textContent = discountPrice.toFixed(2);
        const finalAmount = total - discountPrice;
        finalPrice.textContent = finalAmount.toFixed(2);
    }
});



// for popup....................................

const purchaseButton = document.getElementById('purchaseButton');

purchaseButton.addEventListener('click', function () {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.textContent = 'Wow!! You Purchased This product finally';

    // Style the popup
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.padding = '20px';
    popup.style.background = 'white';
    popup.style.border = '1px solid #ccc';
    popup.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    popup.style.zIndex = '1000';

    document.body.appendChild(popup);

    // Remove the popup after a delay
    setTimeout(function () {
        document.body.removeChild(popup);
    }, 3000); 
});

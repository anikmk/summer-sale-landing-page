
document.getElementById('card').addEventListener('click', function () {
    const cardName = document.getElementById('card-name');
    const cardNameText = cardName.innerText;
    const cardNameTextAdded = document.getElementById('added-card-name');
    
    cardNameTextAdded.innerText = '1. ' + cardNameText;
});

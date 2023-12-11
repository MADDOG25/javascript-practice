const redColor = document.querySelector('.red');
const grayColor = document.getElementsByClassName('gray');
const blackColor = document.querySelector('.black');
const imageCard = document.querySelector('.product-image');
const feedbackBtn = document.querySelector('.feedback');
const cartButton = document.getElementById('button');
const itemTag = document.getElementsByTagName('h3')[0];
// Modifying Elements
// - Add Event Listeners
// - Red Color
redColor.addEventListener('click', function(){
    cartButton.style.backgroundColor = 'red';
    itemTag.style.backgroundColor = 'red';
    imageCard.style.backgroundImage = 'url("https://i.postimg.cc/cH2pJdny/red-benz.webp")'
});
grayColor[0].addEventListener('click', function(){
    cartButton.style.backgroundColor = 'gray';
    itemTag.style.backgroundColor = 'gray';
    imageCard.style.backgroundImage = 'url("https://i.postimg.cc/BvyYTMQ2/gray-benz.jpg")'
});
blackColor.addEventListener('click', function(){
    cartButton.style.backgroundColor = 'black';
    itemTag.style.backgroundColor = 'black';
    imageCard.style.backgroundImage = 'url("https://i.postimg.cc/NGRJX8hr/black-benz.jpg")'
});
// Button Click Implementation
// - Cart Button
const cart = () => {
    cartButton.style.display = 'none';
    feedbackBtn.style.display = 'block';
};
cartButton.addEventListener('click', cart);
// Button Click Implementation
// - Feedback Button
const feedback = () => {
    cartButton.style.display = 'block';
    feedbackBtn.style.display = 'none';
};
feedbackBtn.addEventListener('click', feedback);
const ratingBtns = document.querySelectorAll('.rating-btn');
const submitBtn = document.querySelector('#submit');
const thankCard = document.querySelector('#thank-you-card');
const ratingCard = document.querySelector('#rating-card');
let userRating = 0;


ratingBtns.forEach(ratingBtn => {
    ratingBtn.addEventListener('click', e => {
        e.stopPropagation();
        userRating = e.target.value;
        console.log(userRating);
    })
})

submitBtn.addEventListener('click', e => {
    e.preventDefault();

    if (userRating != 0) {
        document.getElementById('user-rating').innerHTML = userRating;
        ratingCard.style.display = 'none';
        thankCard.style.display = 'flex';
    } else {
        alert("C-Chotto matte senpai, you haven't selected anything yet!");
    }
});
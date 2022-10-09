const selectRatingContainer = document.querySelector('.container-select-rating')
const thanksContainer = document.querySelector('.thanks-container')
const rating = document.querySelector('.rating-selected')
const options = Array.from(document.querySelectorAll('option'));
const submitBtn = document.querySelector('.submit-btn')

options.forEach((e) => {
    const option = e

    option.addEventListener('click', () => {
        if (options[0].classList.contains('active') || options[1].classList.contains('active') || options[2].classList.contains('active') || options[3].classList.contains('active') || options[4].classList.contains('active')) {
            options[0].classList.remove('active')
            options[1].classList.remove('active')
            options[2].classList.remove('active')
            options[3].classList.remove('active')
            options[4].classList.remove('active')

        }

        option.classList.add('active')
        rating.innerHTML = option.value
    })
})



submitBtn.addEventListener('click', () => {

    selectRatingContainer.style.display = 'none'
    thanksContainer.style.display = 'flex'
})
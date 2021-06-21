const slider = document.getElementById('slider-bar');
const price = document.getElementById('price');
const mobilePrice = document.getElementById('mobile-price')

//load initial price
loadPrice = () => {
    if (mobilePrice) {
        mobilePrice.textContent = '$' + slider.value;
    } else {
        price.textContent = '$' + slider.value;
    }
}

//update price and slider track based on slider position
slider.oninput = function() {
    price.textContent = '$' + Math.floor(this.value * .33);
    mobilePrice.textContent = '$' + Math.floor(this.value * .33);
    let thumbPosition = this.value;
    //const sliderTrack = document.querySelector("input[type='range']::-webkit-slider-runnable-track");
    slider.style.background = `linear-gradient(90deg, hsl(174, 77%, 80%) ${thumbPosition}% , hsl(224, 65%, 95%)${thumbPosition}%)`;
}

loadPrice();
slider.oninput();
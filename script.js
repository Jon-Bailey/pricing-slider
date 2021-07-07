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
    price.textContent = '$' + Math.floor(this.value * .33) + ".00";
    mobilePrice.textContent = '$' + Math.floor(this.value * .33) + ".00";
    let thumbPosition = slider.value;
    slider.style.background = `linear-gradient(90deg, hsl(174, 77%, 80%) ${thumbPosition}% , hsl(224, 65%, 95%)${thumbPosition}%)`;
}

slider.onkeydown = function() {
    let thumbPosition = slider.value;
    slider.style.background = `linear-gradient(90deg, hsl(174, 77%, 80%) ${thumbPosition}% , hsl(224, 65%, 95%)${thumbPosition}%)`;
}

loadPrice();
slider.oninput();
slider.onkeydown();
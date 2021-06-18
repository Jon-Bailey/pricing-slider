const slider = document.getElementById('slider-bar');
const price = document.getElementById('price');

//load initial price
price.textContent = '$' + slider.value;

//update price and slider track based on slider position
slider.oninput = function() {
    price.textContent = '$' + this.value;
    
    let thumbPosition = this.value;
    //const sliderTrack = document.querySelector("input[type='range']::-webkit-slider-runnable-track");
    slider.style.background = `linear-gradient(90deg, hsl(174, 77%, 80%) ${thumbPosition}% , hsl(224, 65%, 95%)${thumbPosition}%)`;

    return price.textContent;
}

slider.oninput();
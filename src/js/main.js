import {showResult, setRangeSlider} from './functions';
sliderForm.oninput = () => {
    setRangeSlider();
}
sliderForm.slider.onchange = (event) => {
    showResult(event.target.value);
}











import '../css/style.css';
import SliderShow from './variable';

const slider = new SliderShow();
slider.getPhotos();

slider.elements.next.addEventListener("click", slider.clickNextBtn.bind(slider));
slider.elements.prev.addEventListener("click", slider.clickPrevBtn.bind(slider));
slider.elements.pause.addEventListener("click", slider.stopShowingSlide.bind(slider));
slider.elements.play.addEventListener("click", slider.clickPlay.bind(slider));
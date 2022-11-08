import theme, { gsap, $, ScrollTrigger} from "./main"
import Swiper, { Autoplay } from 'swiper';

theme.on('load', function () {
    console.debug("Theme loading....");

})

theme.on('loaded', function () {
    console.debug("Theme loaded.");
})

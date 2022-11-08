import $ from "jquery";
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


class ThemeMain {

    private onBeforeLoaded = [];
    private onAfterLoaded = [];

    public on(event: 'loaded' | 'load', callback: Function) {
        if(event === 'loaded') {
            this.onAfterLoaded.push(callback);
        }else if(event === 'load') {
            this.onBeforeLoaded.push(callback);
        }
    }

    public init() {
        if(this.onBeforeLoaded != null && this.onBeforeLoaded.length > 0) {
            this.onBeforeLoaded.forEach(callback => {
                try {
                    callback();
                }catch (e) {
                    console.error(e);
                }
            })

        }

        $('.app').addClass('loaded');

        if(this.onAfterLoaded != null && this.onAfterLoaded.length > 0) {
            this.onAfterLoaded.forEach(callback => {
                try {
                    callback();
                }catch (e) {
                    console.error(e);
                }
            })
        }
    }
}

const theme = new ThemeMain();

document.addEventListener("DOMContentLoaded", function () {
    theme.init();
})


export default theme;
export { gsap };
export { $ };
export { ScrollTrigger };
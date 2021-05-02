import { LightningElement,api } from 'lwc';


export default class ZoomableImageContainer extends LightningElement {
    imgInitialized = false;
    @api imageUrl;

    renderedCallback() {
        this.makeImageZoomable();
    }

    //Logic to make the Image Zoomable
    makeImageZoomable() {
        //Add logic on Image Zoom
        let images_to_zoom = this.template.querySelectorAll('[data-id="img-container"]')
        for (let item of images_to_zoom) {
            item.parentElement.style.height = item.height+'px'
            item.parentElement.style.width = item.width + 'px'
            item.parentElement.style.overflow = 'hidden'
            item.addEventListener('mousemove', (e) => zoom_element(e, item.parentElement.offsetLeft, item.parentElement.offsetTop, item.parentElement.offsetWidth, item.parentElement.offsetHeight ))
            item.addEventListener('mouseenter', function (e) {
                let item = e.currentTarget
                let scale = item.parentElement.getAttribute('scale')
                e.currentTarget.style.transform = scale ? 'scale('+scale+')' : 'scale(1.5)'
            })
            item.addEventListener('mouseleave', function (e) {
                e.currentTarget.style.transform = 'none'
            })
        }

        function zoom_element(e, start_x, start_y, width, height) {
            let p_x = (e.clientX - start_x) * 100 / width
            let p_y = (e.clientY - start_y) * 100 / height
            e.currentTarget.style.transformOrigin = p_x +"% " + p_y+"%"
        }
    }

    @api
    removeFocus() {
        this.template.querySelectorAll('[data-id="img-container"]').blur();
    }
}
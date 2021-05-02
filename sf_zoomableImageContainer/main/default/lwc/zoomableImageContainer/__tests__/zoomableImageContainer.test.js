import { createElement } from 'lwc';
import zoomableImageContainer from 'c/zoomableImageContainer';

describe('c-zoomable-image-container', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders a lightning-layout with img-container', () => {
        // Create initial element
        const element = createElement('c-zoomable-image-container', {
            is: zoomableImageContainer
        });
        document.body.appendChild(element);

        // Query lightning-layout element
        const lightningLayoutEl = this.template.querySelectorAll('[data-id="img-container"]');
        expect(lightningLayoutEl).not.toBeNull();
    });
});

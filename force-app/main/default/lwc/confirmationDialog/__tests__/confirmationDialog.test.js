// confirmationDialog.test.js
import { createElement } from 'lwc';
import confirmationDialog from 'c/confirmationDialog';

describe('c-confirmation-dialog', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('open dialog', () => {
        // Create element
        const element = createElement('c-confirmation-dialog', {
            is: confirmationDialog
        });
        element.title = 'title';
        element.name = 'cmp';
        element.message = 'message';
        element.confirmLabel = 'confirm';
        element.cancelLabel = 'cancel';
        element.originalMessage = 'originalMessage';
        document.body.appendChild(element);
        element.visible = true;

        return Promise.resolve().then(() => {
            const messageElement = element.shadowRoot.querySelector('[data-id="message"]');
            expect(messageElement.textContent).toEqual('message');

            const titleElement = element.shadowRoot.querySelector('[data-id="title"]');
            expect(titleElement.textContent).toEqual('title');
        });
    });

    it('click confirm', () => {
        // Create element
        const element = createElement('c-confirmation-dialog', {
            is: confirmationDialog
        });
        element.title = 'title';
        element.name = 'cmp';
        element.message = 'message';
        element.confirmLabel = 'confirm';
        element.cancelLabel = 'cancel';
        element.originalMessage = 'originalMessage';

        document.body.appendChild(element);

        element.visible = true;

        // Mock handlers for events
        const handleClick = jest.fn();
        // Add event listener to catch events
        element.addEventListener('click', handleClick);

        return Promise.resolve().then(() => {
            // Query lightning-button element
            const buttonEl = element.shadowRoot.querySelectorAll('lightning-button');
            buttonEl.forEach(button => {
                if (button.label === 'confirm') {
                    button.click();
                }
            });
        }).then(() =>{
            // Validate if mocked events got fired
            expect(handleClick.mock.calls.length).toBe(2);
            expect(handleClick.mock.calls[0][0].detail.originalMessage).toBe('originalMessage');
            expect(handleClick.mock.calls[0][0].detail.status).toBe('confirm');
        });
    });

    it('click cancel', () => {
        // Create element
        const element = createElement('c-confirmation-dialog', {
            is: confirmationDialog
        });
        element.title = 'title';
        element.name = 'cmp';
        element.message = 'message';
        element.confirmLabel = 'confirm';
        element.cancelLabel = 'cancel';
        element.originalMessage = 'originalMessage';

        document.body.appendChild(element);

        element.visible = true;

        // Mock handlers for events
        const handleClick = jest.fn();
        // Add event listener to catch events
        element.addEventListener('click', handleClick);

        return Promise.resolve().then(() => {
            // Query lightning-button element
            const buttonEl = element.shadowRoot.querySelectorAll('lightning-button');
            buttonEl.forEach(button => {
                if (button.label === 'cancel') {
                    button.click();
                }
            });
        }).then(() =>{
            // Validate if mocked events got fired
            expect(handleClick.mock.calls.length).toBe(2);
            expect(handleClick.mock.calls[0][0].detail.originalMessage).toBe('originalMessage');
            expect(handleClick.mock.calls[0][0].detail.status).toBe('cancel');
        });
    });
});

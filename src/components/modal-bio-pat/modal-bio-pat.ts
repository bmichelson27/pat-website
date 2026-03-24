import {LitElement, html} from 'lit';
import {customElement, query} from 'lit/decorators.js';
import componentStyle from './modal-bio-pat.styles'

@customElement('modal-bio-pat')
export class ModalBioPat extends LitElement {
    static override styles = [componentStyle];

    @query('#modal_container')
    private _modalElement!: HTMLDivElement

    render() {
        return html`
            <div class="modal-container"
            id="modal_container">
                <div class="modal">
                    <h1>Modals are Cool</h1>
                    <p>This is atest 
                        second test
                    </p>
                    <button 
                        id="close"
                        @click="${this._closeModal}">
                        Close me
                    </button>
                </div>
            </div>
        `
    }

    private _closeModal(): void {
        this._modalElement.style.display = 'none';
    }


}
import {LitElement, html} from 'lit';
import {customElement, query} from 'lit/decorators.js';
import componentStyle from './modal-bio-pat.styles'
import paty from '../../assets/patnew.png'


@customElement('modal-bio-pat')
export class ModalBioPat extends LitElement {
    static override styles = [componentStyle];

    @query('#modal_container')
    private _modalElement!: HTMLDivElement

    render() {
        return html`
            <div 
            class="modal-container"
            id="modal_container"
            style="--bg-image: url('${paty}')"
            >
                <div class="modal">
                    <div class="header">
                        <button class="close-button" @click="${this._closeModal}" aria-label="Close modal">
                            <span aria-hidden="true"></span>
                        </button>
                    </div>
                        <!-- <h1></h1> -->
                        <p>Earlier this month the Ciarcia lost a husband and father suddenly at 46 years old. Pat, a career Ironworker with Local 40, was an avid hockey player who touched the hockey community throughout the tristate area.
                            The only thing he loved more than hockey was his family, his wife Amy and their 3 young boys.
                        </p>
                        <button class="gofundme"
                            id="gofundme"
                            @click="${this._openLink}">
                           <strong>Donate Now</strong>
                        </button>
                </div>
            </div>
        `
    }

    private _closeModal(): void {
        this._modalElement.style.display = 'none';
    }

    private _openLink(): void {
        window.open('https://www.gofundme.com/f/supporting-the-ciarcia-family', '_blank')
        this._modalElement.style.display = 'none';
    }


}
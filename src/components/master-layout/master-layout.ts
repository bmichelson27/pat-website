import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import componentStyle from './master-layout.styles'
import "../modal-bio-pat/modal-bio-pat";
import "../silent-auction-items/silent-auction-items";
import "../tab-component/tab-component";
import patImage from '../../assets/patnewn.png'



@customElement('master-layout')
export class MasterLayout extends LitElement {
    static override styles = [componentStyle];


    render() {
        return html`
        <div class="title-container">
            <div>
                <img src=${patImage}>
            </div>
            <div>
                Logo
            </div>
        </div>

        <div class="form-container">
            <div class="form-content">
                <tab-component></tab-component>
            </div>
        </div>

        <modal-bio-pat>
        </modal-bio-pat>

        </div>
        `;
    }
}
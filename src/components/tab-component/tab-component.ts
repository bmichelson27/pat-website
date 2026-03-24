/* eslint-disable @typescript-eslint/no-inferrable-types */
import {LitElement, type TemplateResult, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import componentStyle from './tab-component.styles'
import "../../silent-auction-mfe";
import "../silent-auction-items/silent-auction-items";



@customElement('tab-component')
export class TabComponent extends LitElement {

    static override styles = [componentStyle];

    @state()
    private _selectedVal = "Silent Auction";

    render() {
        return html`
            <div class="container">

                <div class="tabs">
                    <p
                    class="active"
                    @click="${this._handlePClick}"
                    >Silent Auction</p>
                    <p
                    @click="${this._handlePClick}"
                    >Donate Now</p>
                    <p
                    @click="${this._handlePClick}"
                    >Order T-Shirts</p>
                </div>

                <div class="line">
                </div>

                <div class="tab-content">
                    ${this._renderContent()}
                </div>

                
            </div>
        `
    }

    private _handlePClick(event:Event) : void{
        const tabItems = this.shadowRoot?.querySelectorAll('p');
        tabItems?.forEach(item => {
            if(item.classList.contains('active')){
                item.classList.remove('active')
            }
        })
        const target = event.target as HTMLParagraphElement;
        this._selectedVal = target.innerHTML
        target.classList.add('active');
    }

    private _renderContent(): TemplateResult {
        if(this._selectedVal === 'Silent Auction'){
            return html `
                <silent-auction-items></silent-auction-items>
            `
        } else if (this._selectedVal === 'Donate Now') {
            return html `
            <p>
                Please select the link below to make a generous donation directly to Pat's wife and three children.
            </p>
            <br>
            <a 
            href="https://www.gofundme.com/f/supporting-the-ciarcia-family" 
            target="_blank"
            rel="noopener noreferrer"
            >
            Ciarcia Family Go Fund Me
            </a>

            `
        } else {
            return html ``
        }
    }

}
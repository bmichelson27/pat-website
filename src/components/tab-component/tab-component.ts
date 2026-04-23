/* eslint-disable @typescript-eslint/no-inferrable-types */
import {LitElement, type TemplateResult, html} from 'lit';
import {customElement, property, query, state} from 'lit/decorators.js';
import componentStyle from './tab-component.styles'
import "../../silent-auction-mfe";
import "../silent-auction-items/silent-auction-items";
import '../modal-order/modal-order-new';
import '../pat-gofundme/pat-gofundme';
import { ifDefined } from 'lit/directives/if-defined.js';
 


@customElement('tab-component')
export class TabComponent extends LitElement {
    @query('#modal_container')
    private _modalElement!: HTMLDivElement

    static override styles = [componentStyle];

    @state()
    private _selectedVal = "Silent Auction";

    @property()
    itemId?: number;

    @property()
    itemName?: string;

    @property()
    itemImage?:string

    render() {
        return html`
            <div class="container">


                <div class="tabs">
                    <p
                    class="active"
                    @click="${this._handlePClick}"
                    >Silent Auction</p>
                    <!-- <p
                    @click="${this._handlePClick}"
                    >Donate Now</p> -->
                    <p
                    @click="${this._handlePClick}"
                    >Order T-Shirts</p>
                </div>

                <div class="line">
                </div>

                                 <div class="modal-container"
            id="modal_container">
                   <modal-order-new
                   itemId=${ifDefined(this.itemId)}
                   itemName=${ifDefined(this.itemName)}
                   itemImage=${ifDefined(this.itemImage)}
                    @close-modal=${this._hideModal}
                    ></modal-order-new>
    </div>
                <div class="tab-content">
                    ${this._renderContent()}
                </div>


                
            </div>
        `
    }

    private _hideModal() : void {
        // this._modalElement.classList.add('close')
        this._modalElement.style.display = 'none';

    }

    private _openModal (event:CustomEvent<{itemId:number, itemName:string, itemImage:string}>) : void {
        const {itemId, itemName, itemImage} = event.detail
        this.itemId = Number(itemId);
        this.itemImage = itemImage;
        this.itemName = itemName;
        // this._modalElement.classList.add('open')
        this._modalElement.style.display = 'block';
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
                <silent-auction-items
                @open-modal=${this._openModal}
                ></silent-auction-items>
            `
        } else if (this._selectedVal === 'Donate Now') {
            return html `
            <pat-gofundme></pat-gofundme>

            `
        } else {
            return html ``
        }
    }

}
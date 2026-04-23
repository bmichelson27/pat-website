import {LitElement, html} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import componentStyle from './modal-order-new.styles';
import {auctionItemService} from '../../services/auction-item';



@customElement('modal-order-new')
export class ModalOrder extends LitElement {
    static override styles = [componentStyle];

    @property()
    itemId: number = 0;

    @property()
    itemName: string = '';

    @property()
    itemImage: string = ''

    @state()
    private submitBid: {name: string,
        phoneNumber: string,
        email: string,
        amount:number;
        itemId:number;
    } = {name: '',
        phoneNumber:'',
        email: '',
        amount:0,
        itemId:0
    }
    


    render() {
        return html`
            <div class="modal-container">
                <div class="modal">
                    <div class="header">
                        <button class="close-button" @click="${this._closeModal}" aria-label="Close modal">
                            <span aria-hidden="true"></span>
                        </button>
                    </div>
                    <div>
                            <img 
                            src="${this.itemImage}"
                            class="auction-img"
                            />
                            <p>${this.itemName}</p>
                    </div>                           
                    <div class="form-container">
                        <!-- <form id="bid_form"> -->
                            <div class="form-field">
                                <label>Name:</label>
                                <input 
                                    type="text" 
                                    id="fname" 
                                    name="name"
                                    @input=${this.onInputChange}
                                    .value=${this.submitBid.name}
                                    ><br>                                                           
                            </div>

                            <div class="form-field">
                                <label>Phone:</label>
                                <input 
                                type="tel" 
                                id="phone" 
                                name="phoneNumber"
                                @input=${this.onInputChange}
                                .value=${this.submitBid.phoneNumber}
                                ><br>
                            </div>

                            <div class="form-field">
                                <label>Email:</label>
                                <input 
                                type="text" 
                                id="email"
                                name="email"
                                @input=${this.onInputChange}
                                .value=${this.submitBid.email}
                                ><br>
                            </div>
                            
                            <div class="form-field">
                                <label>Amount:</label>
                                <input 
                                type="number" 
                                id="amount" 
                                name="amount"
                                .value=${this.submitBid.amount}
                                @input="${this.onInputChange}"
                                ><br>
                            </div>
                        <!-- </form> -->
                    </div>

                    <div>
                        <button 
                        class="donatenow"
                            id="submitBid"
                            @click="${this._submitBid}">
                           Submit Bid
                        </button>
                    </div>
                </div>
            </div>
        `
    }

    private _closeModal(): void {
        this.submitBid = {
            ...this.submitBid,
            amount: 0
        }
        this.dispatchEvent(new Event('close-modal'))
    }

    private async _submitBid(): Promise<void> {
        try {
            console.log(this.itemId)
            const submitBidFinal = {
                ...this.submitBid,
                itemId: Number(this.itemId)
            }
            await auctionItemService.submitBid(submitBidFinal);
        } catch (error){
            console.log(error);
        }
        this.submitBid = {
            ...this.submitBid,
            amount: 0
        }
        this.dispatchEvent(new Event('close-modal'))
    }

    private onInputChange(event:Event): void {
        const target = event.target as HTMLInputElement
        const {name,value} = target
        this.submitBid = {
            ...this.submitBid,
            [name]: name === 'amount' ? Number(value) : value
            
        }
    }


}
import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import componentStyle from './silent-auction-items.styles'
import type { SilentAuctionItem } from '../../models/silent-auction-item';
import {auctionItemService} from '../../services/auction-item';

@customElement('silent-auction-items')
export class SilentAuctionItems extends LitElement {
    static override styles = [componentStyle];

    private _silentAuctionItems: SilentAuctionItem[] = [
        {
            id:"1",
            name: "Signed Puck",
            image: "https://picsum.photos/seed/5/200",
            description: "This is a signed puck"
        },
        {
            id:"2",
            name: "Signed Stick",
            image: "https://picsum.photos/seed/1/200",
            description: "This is a signed Stick"
        },
        {
            id:"3",
            name: "Signed Hat",
            image: "https://picsum.photos/seed/2/200",
            description: "This is a signed hat"
        },
        {
            id:"4",
            name: "Signed Helment",
            image: "https://picsum.photos/seed/3/200",
            description: "This is a signed Helment"
        },
        {
            id:"5",
            name: "Signed Jersey",
            image: "https://picsum.photos/seed/4/200",
            description: "This is a signed Jersey"
        },
        {
            id:"6",
            name: "Signed Guard",
            image: "https://picsum.photos/seed/6/200",
            description: "This is a signed Guard"
        },
        {
            id:"7",
            name: "Signed Fan",
            image: "https://picsum.photos/seed/7/200",
            description: "This is a signed Fan"
        },
        {
            id:"8",
            name: "Signed Tooth",
            image: "https://picsum.photos/seed/8/200",
            description: "This is a signed Tooth"
        }
    ]

    render() {
        return html`
            <section class="section-auction-items">
                <!-- <div class=auction-items-container>
                    <span>first span</span>
                    <h2>main heading</h2>
                </div> -->

                <div class="container grid grid--custom">
                    ${this._silentAuctionItems.map((item) => 
                        html `
                        <div class="item">

                        <div class="image-container">
                        <img 
                            src="${item.image}"
                            class="auction-img"
                            alt="${item.name}" 
                            />
                        </div>

                        <div class="item-content">
                            <p class="auction-item-title">${item.description}</p>
                        </div>

                        <div class="button-container">
                        <button
                        @click= "${() => this._getSelectedAuctionItem(item)}"
                        >
                            Submit Bid
                        </button>
                        </div>

                        </div>
                        `
                    )}
                </div>
            </section>
        `
    }

    private async _sendAuctionItem(item: SilentAuctionItem): Promise<void> {
        try {
            const submitBid = {name: item.name, 
                phoneNumber: '914-343-3435',
                email: "jnefjnfre@aol.com",
                amount: 10000.40,
                itemId: parseInt(item.id,10)
            }
            await auctionItemService.submitBid(submitBid);
        } catch (error){
            console.log(error);
        }
    }

    private _getSelectedAuctionItem(item: SilentAuctionItem): void{
        this._sendAuctionItem(item);
        console.log(item);
    }
}
                
//                 <div class="item">
//                     <img 
//                     src="https://picsum.photos/seed/5/200"
//                     class="auction-img"
//                     alt="Image Name" 
//                     /> -->

//                     <!-- <div class="item-content">
//                         <p class="auction-item-title">Item 1</p>
//                     </div> -->

//                     <!-- <button>
//                         Submit Bid
//                     </button>
//                 </div>

//                 <div class="item">

//                     <img 
//                     src="https://picsum.photos/seed/4/200" 
//                     class="auction-img"
//                     alt="Image Name" 
//                     />

//                     <div class="item-content">
//                         <p class="auction-item-title">Item 2</p>
//                     </div>

//                     <button>
//                         Submit Bid
//                     </button>

//                 </div>

//                 <div class="item">
//                     <img 
//                     src="https://picsum.photos/seed/6/200" 
//                     class="auction-img"
//                     alt="Image Name" 
//                     />

//                     <div class="item-content">
//                         <p class="auction-item-title">Item 3</p>
//                     </div>

//                     <button>
//                         Submit Bid
//                     </button>
//                 </div>

//                 <div class="item">
//                     <img 
//                     src="https://picsum.photos/seed/6/200" 
//                     class="auction-img"
//                     alt="Image Name" 
//                     />

//                     <div class="item-content">
//                         <p class="auction-item-title">Item 3</p>
//                     </div>

//                     <button>
//                         Submit Bid
//                     </button>
//                 </div>
               
//             </div>
//         </section> 
//         `
//     }
// }
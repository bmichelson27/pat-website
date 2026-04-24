import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import componentStyle from './silent-auction-items.styles'
import type { SilentAuctionItem } from '../../models/silent-auction-item';
import islanders from '../../assets/islanders.png'
import ulmark from '../../assets/Ulmark.png' 
import dob from '../../assets/noahdobson.png'
import barzel from '../../assets/barzel.png'
import pullock from '../../assets/pullock.png'
import jgp from '../../assets/jgp.png'
import turco from '../../assets/turco.png'
import cuz from '../../assets/cuz.png'
import ryanpuck from '../../assets/ryanpuck.png'
import jhphoto from '../../assets/jhphoto.png'
import jp from '../../assets/jp.png'
import lindholm from '../../assets/lindholm.png'
import jd from '../../assets/jd.png'
import waderedden from '../../assets/waderedden.png'
import db from '../../assets/db.png'

@customElement('silent-auction-items')
export class SilentAuctionItems extends LitElement {
    static override styles = [componentStyle];

    private _silentAuctionItems: SilentAuctionItem[] = [
        {
            id:"1",
            name: "Islander Dynasty Signed Plagues & Replica Stanley Cup Rings",
            image: islanders,
            description: "Billy Smith, Denis Potvin, Bryan Trottier, Mike Bossy, Clark Gillies and Bobby Nystrom Signed Plagues & Replica Stanley Cup Rings"
        },
        {
            id:"2",
            name: "Linus Ullmark signed jersey",
            image: ulmark,
            description: "Linus Ullmark signed jersey"
        },
        {
            id:"3",
            name: "Signed Noah Dobson Jersey",
            image: dob,
            description: "Noah Dobson signed jersey"
        },
        {
            id:"4",
            name: "Mathew Barzel signed puck",
            image: barzel,
            description: "Mathew Barzel signed puck in framed photo"
        },
        {
            id:"5",
            name: "Ryan pulock signed puck",
            image: pullock,
            description: "Ryan pulock signed puck in framed photo"
        },
        {
            id:"6",
            name: "Signed Jean Gabriel Pageau Puck",
            image: jgp,
            description: "Signed Jean Gabriel Pageau Puck"
        },
        {
            id:"7",
            name: "Signed Marty Turco Photo",
            image: turco,
            description: "Marty turco Signed Photo 8x10"
        },
                {
            id:"8",
            name: "Bobby Ryan signed puck",
            image: cuz,
            description: "Bobby Ryan signed puck"
        },
        {
            id:"9",
            name: "Dylan cozens signed puck",
            image: ryanpuck,
            description: "Dylan cozens signed puck"
        },
        {
            id:"10",
            name: "Signed Jonathan Huberdeau Card ",
            image: jhphoto,
            description: "Jonathan Huberdeau 8x10 signed card 23 of 50"
        },
        {
            id:"11",
            name: "Joni Pitkanen signed photo",
            image: jp,
            description: "Joni Pitkanen signed photo 8x10"
        },
        {
            id:"12",
            name: "Elias Lindholm signed photo",
            image: lindholm,
            description: "Elias Lindholm signed photo 8x10"
        },
        {
            id:"13",
            name: "Jamie Drysdale signed photo",
            image: jd,
            description: "Jamie Drysdale signed photo 8x10"
        },
        {
            id:"14",
            name: "Signed Wade Redden Photo",
            image: waderedden,
            description: "Wade Redden signed photo 8x10"
        },
        {
            id:"15",
            name: "Dan Bylsma Signed Photo",
            image: db,
            description: "Dan Bylsma Signed Photo 8x10"
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
                        @click= "${() => this._openModal(item.id,item.name,item.image)}"
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

    // private async _sendAuctionItem(item: SilentAuctionItem): Promise<void> {
    //     try {
    //         const submitBid = {name: item.name, 
    //             phoneNumber: '914-343-3435',
    //             email: "jnefjnfre@aol.com",
    //             amount: 10000.40,
    //             itemId: parseInt(item.id,10)
    //         }
    //         await auctionItemService.submitBid(submitBid);
    //     } catch (error){
    //         console.log(error);
    //     }
    // }

    // private _getSelectedAuctionItem(item: SilentAuctionItem): void{
    //     this._sendAuctionItem(item);
    //     // @click= "${() => this._getSelectedAuctionItem(item)}"
    //     console.log(item);
    // }

     private _openModal(itemId:string, itemName:string, itemImage:string): void{
        console.log(itemId);
        this.dispatchEvent(new CustomEvent('open-modal', {
            detail: {itemId, itemName, itemImage},
        }))
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
import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import componentStyle from './pat-gofundme.styles'


@customElement('pat-gofundme')
export class PatGofundme extends LitElement {
    static override styles = [componentStyle];

    render() {
        return html`
            <div class="container">
                <div class="content">
                    <p>Earlier this month the Ciarcia lost a husband and father suddenly at 46 years old. Pat, a career Ironworker with Local 40, was an avid hockey player who touched the hockey community throughout the tristate area.
                    The only thing he loved more than hockey was his family, his wife Amy and their 3 young boys who he passed the precious gift of hockey to them, who he also jumped at any opportunity to coach as well. 
                    All proceeds collected from both the silent auction as well as t-shirt sale will go directly to them. You can also click the button below to make a direct donation to Pat's family. 
                    </p>
                    <button 
                        id="gofundme"
                        class="donatenow"
                        @click="${this._openLink}">
                        Donate Now
                    </button>
                </div>
            </div>
        `
    }

    private _openLink(): void {
        window.open('https://www.gofundme.com/f/supporting-the-ciarcia-family', '_blank')
    }


}
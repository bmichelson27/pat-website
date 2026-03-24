import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import componentStyle from './silent-auction-mfe.styles'
import "./components/master-layout/master-layout";

@customElement('silent-auction-mfe')
export class SilentAuctionMfe extends LitElement {
    static override styles = [componentStyle];
  @property()
  version = 'STARTING';

 render() {
    return html`
    <div class="silent-auction-mfe">
        <master-layout></master-layout>
    </div>
    `;
  }
}
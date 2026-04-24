import {LitElement, html} from 'lit';
import {customElement, property, queryAssignedElements} from 'lit/decorators.js';
import componentStyle from './tshirt-carosal.styles'

@customElement('tshirt-carosal')
export class PictureSlideshowPat extends LitElement {
    static override styles = [componentStyle];

    @property({type: Number}) _slideIndex = 0

    @queryAssignedElements()
    private readonly _slideElements!: HTMLElement[];

    override render() {
        return html`
        <div
        @click=${() => this._changeSlide(-1)}
        class="buttonClass leftarrow"
        id="btnL"
        tabindex="0"
        role="button"
        aria-pressed="false"
        >
        <svg xmlns="http://www.w3.org" width="30" height="30" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
        </div>

        <div class="container">
            <slot>

            </slot>
        </div>

        <div        
        class="buttonClass rightarrow"
        id="btnL"
        tabindex="0"
        role="button"
        aria-pressed="false"
        @click=${() => this._changeSlide(1)}
        >
        <svg xmlns="http://www.w3.org" width="30" height="30" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
        </div>
        `
    }

    override firstUpdated(): void {
        this._navigateSlide();
    }

    override updated(): void{
        this._navigateSlide();
    }

    private _changeSlide(offset: number): void {
        const slideCount= this._slideElements.length;
        this._slideIndex = (slideCount + ((this._slideIndex + offset) % slideCount)) % slideCount; 
    }

    private _navigateSlide(): void{
        for(let i=0; i<this._slideElements.length; i++){
            if(i === this._slideIndex){
                this._showSlide(this._slideElements[i])
            } else {
                this._hideSlide(this._slideElements[i])
            }
        }
    }

    private _hideSlide(el: HTMLElement): void{
        el.classList.add('slide-hidden')
    }

    private _showSlide(el: HTMLElement): void{
        el.classList.remove('slide-hidden')
    }
}
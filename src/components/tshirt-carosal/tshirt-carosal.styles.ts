import { css } from "lit";

export default css`
    ::slotted(.slide-hidden){
        display:none;
    }

    ::slotted(*){
        padding:1em;
        width: 85%;
    }

    :host {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .container {
        border-radius: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        margin: 0 18px;
        padding: 1em;
        overflow: hidden;
        position: relative;
    }

    .buttonClass{
    width: 2em;
    height: 2em;
    top: 66%;
    background: #d5b0094a;
    z-index: 1;
    cursor: pointer;
    border-radius: 1em;
    position: absolute;
    padding: 0px;
    align-items: center;
    justify-content: center;
    transform: translateY(-50%);
    box-shadow: var(--shadow, #808080de) 0.2em 0.2em 0.4em, var(--highlight, wheat) -0.1em -0.1em 0.2em;
    }

    .rightarrow {
        right: 4%;
    }

    .leftarrow {
        left: 4%;
    }

    .buttonClass:active:hover, .buttonClass:hover:active {
        box-shadow: inset var(--shadow,gray) 0.2em 0.2em 0.4em
                    var(--highlight,white) -0.1em -0.1em 0.2em;
    }
    
    ::slotted(svg){
        width: 1em;
        height: 1em;
    }
    
    @media(min-width: 768px){
         .rightarrow {
        right: 20%;
    }

    .leftarrow {
        left: 20%;
    }

    ::slotted(*){
        padding:1em;
        width: 55%;
    }
    }

     @media(min-width: 1028px){
         .rightarrow {
        right: 25%;
        
    }

    ::slotted(*){
        padding:1em;
        width: 35%;
    }

    .leftarrow {
        left: 25%;
    }
    }

    @media(max-width: 767px){
        .buttonClass {
           padding: 12px;
            min-width: 30px;
         min-height: 32px;
        }

        ::slotted(*){
        padding:1em;
        width: 75%;
    }
    }
`
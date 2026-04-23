import { css } from "lit";

export default css`
    .container {
        /* 1140px */
        /* max-width: 120rem; */
        padding: 0 1.2rem;
        margin: 0 auto;
    }

    .grid {
        display: grid;
        column-gap: 3.0rem;
        row-gap: 3.0rem; 
  /* margin-bottom: 9.6rem; */
    }

    .grid--custom {
        grid-template-columns: repeat(1, fit-content(100%));
        grid-template-rows: repeat(1, minmax(0, 1fr))
    }

    .section-auction-items {
        padding: 2rem 0;
    }

    .auction-item-title {
        font-size: 1rem;
        color: black;
        font-weight: 600;
        margin-bottom: 3.2rem;
        padding: 0 12px;
    }

    .auction-img {
        width: 100%;
    }

    .item {
        box-shadow: 0 2.4rem 4.8rem rgba(0,0,0,0.2);
        border-radius: 16px;
        overflow:hidden;
        display: flex;
        flex: 1 0 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .item-content {
    }

    button {
        background-color: #000000a3;
        border: 0;
        border-radius: 5px;
        box-shadow:0 2px 4px rgba(0, 0, 0, 0.2);
        padding: 10px 25px;
        color:white;
    }

    .button-container {
        padding: 9px;
    }

    @media(min-width:619px){
    .grid--custom {
        grid-template-columns: repeat(3, fit-content(100%));
        grid-template-rows: repeat(5, minmax(0, 1fr))
    }
}

    @media(min-width:990px){
    .grid--custom {
        grid-template-columns: repeat(4, fit-content(100%));
        grid-template-rows: repeat(5, minmax(0, 1fr))
    }

    }
`
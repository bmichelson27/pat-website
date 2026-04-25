import { css } from "lit";

export default css`
    :host {
        box-sizing: border-box;
        z-index: 10;
    }

    body {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        margin: 0;
    }

    .donatenow {
        /* background-color: green;
        border: 0;
        border-radius: 5px;
        box-shadow:0 2px 4px rgba(0, 0, 0, 0.2);
        padding: 10px 25px;
                cursor: pointer; */
        background-color: black;
        border: 0;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        padding: 11px 24px;
        cursor: pointer;
        /* justify-content: end; */
        /* padding: 6px; */
        margin: 88px;
        /* align-self: flex-end; */
        margin-top: auto;
        color:white;

    }

    .modal-container {
        background-color: rgba(0, 0, 0, 0.3);
        position: fixed;
        top: 0px;
        left: 0px;
        height: 100dvh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        box-sizing: border-box;
            /* opacity:1; */
        /* transition: opactiy 0.3s ease; */
    }
    
    .modal-container.close {
        pointer-events: auto;
        /* opacity:0; */
    }

    .modal {
        background-color: white;
        max-width: calc(100% - 80px);
        max-height: calc(100% - 80px);
        /* height: auto;
        width: auto; */
        /* padding: 30px 50px; */
        border-radius: 16px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;
        text-align: center;
        flex-direction: column;
        display: flex;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: auto;
        margin-top: auto;
        overflow-y: auto;
    }

    .header {
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: flex-end
    }

    .form-container {
    display: grid;
    /* grid-template-columns: 100px 1fr; */
    /* gap: 15px 10px; */
    max-width: 388px;
    margin: auto;
    background-color: white;
    /* padding: 2px; */
    grid-template-columns: repeat(1, fit-content(100%));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    /* border-radius: 8px; */
    /* box-shadow: 0 4px 8px */
    }

    .close-button {
      background: none;
      padding:none;
        cursor: pointer;
        box-shadow: none;
        border:none;
        padding: 0 4px;

    }

    .close-button::after {
        content: "×";
        display: block;
        font-size: 2em;
        color: black;

    }

    input {
      height: 18px;
    border-radius: 8px;
    }

    .form-field {
    display: grid;
    row-gap: 0px;
    /* column-gap: 12px; */
    justify-content: start;
    grid-template-columns: 20% 1fr;
    align-items: center;
    grid-template-columns: repeat(1, fit-content(100%));
        
    }

    .auction-img {
       margin: auto; 
        display: block;
        /* width: 64%; */
        max-width: 50%;
        object-fit: cover;
        height: auto;
        justify-self: center;
    }

    @media(min-width:619px){
        .modal {
            background-color: white;
            /* height: auto;
            width: 37vw; */
            /* padding: 30px 50px; */
            border-radius: 16px;
            box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;
            text-align: center;
            flex-direction: column;
            display: flex;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: auto;
            margin-top: auto;
        }
    }
`;
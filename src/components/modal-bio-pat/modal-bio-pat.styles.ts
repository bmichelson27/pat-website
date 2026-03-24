import { css } from "lit";

export default css`
    :host {
        box-sizing: border-box;
        z-index: 3;
    }

    body {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        margin: 0;
    }

    button {
        background-color: green;
        border: 0;
        border-radius: 5px;
        box-shadow:0 2px 4px rgba(0, 0, 0, 0.2);
        padding: 10px 25px;
    }

    .modal-container {
        background-color: rgba(0, 0, 0, 0.3);
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        display: flex;

        align-items: center;
        justify-content: center;
        opacity:1;
        transition: opactiy 0.3s ease;
    }
    
    .modal-container.close {
        pointer-events: auto;
        opacity:0;
    }

    .modal {
        background-color: white;
        width: 600px;
        max-width: 100%;
        padding: 30px 50px;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        text-align: center;
    }
`;
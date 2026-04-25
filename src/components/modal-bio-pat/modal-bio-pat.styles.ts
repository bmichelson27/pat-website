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

    /* button {
        background-color: green;
        border: 0;
        border-radius: 5px;
        box-shadow:0 2px 4px rgba(0, 0, 0, 0.2);
        padding: 10px 25px;
                cursor: pointer;

    } */
    
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

    /* .modal-container {
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
     */
    .modal-container.close {
        pointer-events: auto;
        opacity:0;
    }

    /* .modal {
        background-color: white;
        height: 78vh;
        width: 80vw;
        background-size: cover;
        background-image: url('src/assets/patnew.png');
        padding: 30px 50px;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        text-align: center;
    } */

    /* .pat-img {
        object-fit:cover;
        z-index:0;
        position: absolute;
        height: 90vh;
        width: 86%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: auto;
        margin-top: auto;
    } */
    /* .modal {
        height: 90vh;
        width: 86%;
        border-radius: 16px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;
        text-align: center;
        flex-direction: column;
        display: flex;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: auto;
        margin-top: auto;
        z-index:1;
    } */
    .pat-img {
        object-fit: cover;
        z-index: 0;
        position: absolute;
        /* height: 90vh; */
        /* width: 86%; */
        margin-left: auto;
        margin-right: auto;
        margin-bottom: auto;
        margin-top: auto;
        width: min(86vw, 720px);
        max-height: min(90dvh, 900px);
        min-height: min(78dvh, 900px);
        overflow-y: auto;
    }

    .modal {
        width: min(86vw, 720px);
        max-height: min(90dvh, 900px);
        min-height: min(78dvh, 900px);
        overflow-y: auto;
        border-radius: 16px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;
        text-align: center;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: auto;
        margin-top: auto;
        z-index: 1;
    }

    .header {
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: flex-end
    }

    p {
        color: white;
        cursor: default; /* Changes from I-beam to arrow */
  user-select: none;
      font-size: 13px;
    }

    .close-button {
      background: none;
      padding:none;
        cursor: pointer;
        border: none;

    }

    .close-button::after {
        content: "×";
        display: block;
        font-size: 2em;
        color: white;

    }

    .gofundme {
    cursor: pointer;
    /* margin-top: auto; */
    margin-right: auto;
    margin-left: auto;
    margin-bottom: auto;
    border-radius: 6px;
    background-color: white;
        border: 0;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        padding: 4px 14px;
        color:black;
    }

    @media(min-width:600px){
        .modal {
            /* background-size: cover;
            background-image: var(--bg-image); */
            max-width: 800px;
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
            border-radius: 5px;
            box-shadow:0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .pat-img {
            object-fit:cover;
            z-index:0;
            position: absolute;
            /* height: 90vh; */
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: auto;
            margin-top: auto;
    }
    }
`;
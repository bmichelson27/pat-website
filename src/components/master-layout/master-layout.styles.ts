import { css } from "lit";

export default css`
    :host {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .title-container {
        /* padding: 2em 2em 4em; */
        background-color: black;
        border-bottom-right-radius: 4em;
        display: flex;
        flex-direction: column;
    }

    .form-container {
        display: flex;
        gap: 1.5rem;
        flex: 1 0 0;
        margin-top: -2rem;
        margin-right: 2rem;
        padding: 0 2em 0 2em;
        background-color: white;
        border-radius: 1em 1em 0.5em 0.5em;
        overflow: hidden;
    }

    .form-overview {
        flex: 0 0 0;
    }

    .form-content {
        flex: 1;
        padding: 0.5em 0;
        overflow-y: auto;
    }
`;
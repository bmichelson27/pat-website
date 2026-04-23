import { css } from "lit";

export default css`
:host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


.container {
    width: 100%;
    /* max-width: 900px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    /* padding: 0 64px 64px 64px; */
    position: relative;
}

.tabs {
    display: flex;
    width:100%;
    justify-content: space-around;
    text-transform: uppercase;
    font-weight: bold;
    padding: 16px;
    margin: 0 0 32px;
    position: sticky;
    top: 0px;
    z-index: 2;
    background: wheat;
}

.tabs p {
    padding: 8px;
}

.tabs p:hover {
    color: white;
    cursor: pointer;

}

.tabs p.active {
    color: #000080;
    position: relative;
}

.line {
    height: 3px;
    width: 100%;
    background-color: #000080;
    position: absolute;
    top: 96px;
}

.tabs .active::before {
    content: "";
    width: 100%;
    height: 4px;
    background-color: black;
    position: absolute;
    bottom: -32px;
    left: -1%;
    z-index: 2;
    border-radius: 10px;
}

/* .modal-container.close {
        opacity:0;
    }
.modal-container.open {
        opacity:1;
    } */
.modal-container {
    display:none;
}

@media(min-width:619px){
    .tabs .active::before {
        content: "";
        width: 100%;
        height: 4px;
        background-color:  #000080;
        position: absolute;
        bottom: -32px;
        left: -1%;
        z-index: 2;
        border-radius: 10px;
    }
}


`
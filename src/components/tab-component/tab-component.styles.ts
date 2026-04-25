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
    /* padding: 16px; */
    margin: 0 0 32px;
    position: sticky;
    top: 0px;
    z-index: 2;
    background: wheat;
}

.tabs p {
    /* padding: 8px; */
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
    height: 2px;
    width: 100%;
    background-color: #000080;
    position: absolute;
    top: 50px;
}

.tabs .active::before {
    content: "";
    width: 100%;
    height: 4px;
    background-color: #0404a5;
    position: absolute;
    bottom: -18px;
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

     .gofundme {
    cursor: pointer;
    /* margin-top: auto; */
    display: flex;
    margin-top: auto;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: auto;
    border-radius: 6px;
    background-color: #040264;
    border: 0;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 10px 123px;
    color: white;
     }


@media(min-width:619px){
    .tabs .active::before {
        content: "";
        width: 100%;
        height: 4px;
        background-color:  #000080;
        position: absolute;
        bottom: -19px;
        left: -1%;
        z-index: 2;
        border-radius: 10px;
    }
}


`
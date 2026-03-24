import { css } from "lit";

export default css`
:host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px;
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
}

.tabs p {
    padding: 8px;
}

.tabs p:hover {
    color: red;
    cursor: pointer;

}

.tabs p.active {
    color: red;
    position: relative;
}

.line {
    height: 3px;
    width: 100%;
    background-color: rgb(231, 231, 231);
    position: absolute;
    top: 96px;
}

.tabs .active::before {
    content: "";
    width: 100%;
    height: 4px;
    background-color: purple;
    position: absolute;
    bottom: -32px;
    left: -1%;
    z-index: 2;
    border-radius: 10px;
}

`
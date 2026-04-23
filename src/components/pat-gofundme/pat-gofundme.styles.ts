import { css } from "lit";

export default css`

    /* button {
        background-color: green;
        border: 0;
        border-radius: 5px;
        box-shadow:0 2px 4px rgba(0, 0, 0, 0.2);
        padding: 10px 25px;
        cursor: pointer;
        margin-left: auto;
        margin-right: auto  

    } */

    .container {
        /* background-color: rgba(0, 0, 0, 0.3);
        position: fixed; */
        /* top: 0;
        left: 0;
        height: 100vh;
        width: 100vw; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* opacity:1;
        transition: opactiy 0.3s ease; */
        background-size: cover;
        background-image: url('src/assets/patnew.png');
        background-position: bottom;
    }
    

    .content {
        /* width:100%; */
        height: 98vh;
        width: 80vw;
        /* background-size: cover;
        background-image: url('src/assets/patnew.png'); */
        /* background-position: center; */
        /* width: 600px; */
        /* max-width: 100%; */
        /* padding: 30px 50px; */
        display:flex;
        flex-direction: column;
        /* border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        text-align: center; */
    }

    p {
        color: white;
         cursor: default; /* Changes from I-beam to arrow */
        user-select: none;
            padding: 6px
    }

    .gofundme {
        cursor: pointer;
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
`;

import styled from "styled-components";
export const Publico = styled.div`

    *{
        box_sizing: border-box;
        margin: 0;
    }

    html {
        font-size: 62.5%;
    }
    
    // .filho2 {
    //     background-color: black;
    //     width: 100vw;    
    //     height: 8rem;
    //     display: flex;
    //     justify-content: flex-end;
    //     align-items: center;
    //     padding-right: 4rem;
    // }

   

    input {
        border-radius: 2rem;
        width: 40rem;
        height: 5rem;
    }

    

    .seta{
        background-color: transparent;
        border: transparent;
        top: 3rem;
        left: 3rem;
        position: absolute;
    }

   

    .proximo {
        background-color: #1145FF;
        color: white;
        width: 208px;
        height: 73px;   
        border-radius: 5rem;
        position: absolute;
        bottom: 5rem;
        right: 5rem;
        border: none;
    
    }

    main{
        background-color: #ECECEC;
        min-height: calc(100vh - 8rem - 8rem - 0.1rem);
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10rem;
        margin-right:10rem;
        margin-left:10rem;

    }

    .corpoartigo {
        display: flex;
        flex-direction: column;
    }

    .titulo {
        text-align: center;
        border-radius: 3rem;
        margin-bottom: 1rem;
    }

    .artigo {
        height: 40rem;
        text-align: start;
        border-radius: 1rem;
        padding-left: 1rem;
        resize: none;
    }

    .foto {
        position: relative;
        left: 72rem;
    }

    .usuario {
        position: relative;
        left: 66.3rem;
    }
`;

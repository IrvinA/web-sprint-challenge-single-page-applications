import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
    background-image: url('https://images.unsplash.com/photo-1581873372796-635b67ca2008?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');
    background-size: cover;
    background-repeat: no-repeat;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 5% 3% 5%;
    h2 {
        background: white;
        border-radius: 10px;
        opacity: 80%;
        font-weight: 800;
        text-align: center;
        padding: 2% 0;
        text-shadow: 1px 1px aqua;
        border: 1px solid lime;
        font-size: 1.8rem;
        margin-top: -10%;
    }
    button {
        margin-top: 2%;
        padding: 1% 3%;
        font-weight: 700;
        border-radius: 10px;
        background: white;
        opacity: 80%;
        border: 1px solid lime;
        font-size: 1rem;
        text-shadow: 1px 1px aqua;
        &:hover {
            color: red;
            transform: scale(1.5);
            transition: all 1s;
            opacity: 100%;
        }
    }
`

export default function Home() {
    const history = useHistory();
    const routeToForm = () => {
        history.push('/pizza');
    }

    return (
        <StyledDiv>
            <h2>Order some mouth-watering pizza!<br /> 
            You know you want to...</h2>
            <button id='order-pizza' onClick={routeToForm}>Order it!</button>
        </StyledDiv>
    )
}
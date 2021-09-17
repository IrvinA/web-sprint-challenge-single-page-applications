import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
    const history = useHistory();
    const routeToForm = () => {
        history.push('/pizza');
    }

    return (
        <div>
            <img src='../Assets/Pizza.jpg' alt='Pizza'/>
            <h2>Order some mouth-watering pizza!<br /> 
            You know you want to...</h2>
            <button id='order-pizza' onClick={routeToForm}>Order it!</button>
        </div>
    )
}
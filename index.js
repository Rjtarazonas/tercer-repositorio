import React from "react";

function Home() {
    const listItems = [1, 2, 3, 4]

    const addItem = () => {
        const variableA = 1;
        const variableB = 2;
        const variableC = 3;

        return variableA*3 + variableC*variableB
    }
    return(
        <><div>Home</div>
        <p>Hola Mundo</p>
        <buttom onclick={addItem} /></>
    )
}

export default Home
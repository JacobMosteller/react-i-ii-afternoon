import React from 'react';
import './box.css'

const Box = (props) => {
    let dude = props.dude;
    return(
        <div>
        <p>{props.peopleArr[dude].number}</p>
        <h3>{props.peopleArr[dude].name}</h3>
        <p>Age: {props.peopleArr[dude].age}</p>
        <p>Favorite Band: {props.peopleArr[dude].favBand}</p>
        <p>Favorite Drink: {props.peopleArr[dude].favDrink}</p>
        </div>
    )
}
export default Box;
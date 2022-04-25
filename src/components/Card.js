import React from 'react';
import {FiArrowUpRight, FiArrowDown} from "react-icons/fi";

const Card = ({name,image,price}) => {

    return (
    <div className='card'>
        <div className='top'>
            <img src={image} alt="BTC" />
        </div>
        <div>
            <h5>{name}</h5>
            <p>${price.toLocaleString()}</p>
        </div>

        {price < 0 ? (
            <span className='red'>
                <FiArrowDown className='icon' />
                {price.toFixed(2)}%
            </span>
        ) : (
            <span className='green'>
                <FiArrowUpRight className='icon' />
                {price.toFixed(2)}%
            </span>
        )}
    </div>
    )
}

export default Card
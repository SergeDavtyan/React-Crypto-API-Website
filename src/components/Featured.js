import React, {useState, useEffect} from 'react';
import Card from './Card';
import "./Featured.css";
import axios from 'axios';

const Featured = () => {

    const [data, setData] = useState(null);

    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false";

    useEffect(() => {
        axios.get(url)
        .then(res => setData(res.data))
        .catch(error => {
            console.log(error)
        })
    });

    
    if(!data) return null;

    
    return (
        <div className='featured'>
            <div className='container'>

                {/* Left Side */}

                <div className='left'>
                    <h2>Explore top Crypto's Like Bitcoin, Etherium, and Dogecoin</h2>
                    <p>See all available assets: Cryptocurrencies and NFT's</p>
                    <button className='btn'>See More Coins</button>
                </div>

                {/* Right Side */}

                <div className='right'>

                    <Card name={data[0].name} price={data[0].current_price} image={data[0].image} />
                    <Card name={data[1].name} price={data[1].current_price} image={data[1].image} />
                    <Card name={data[2].name} price={data[2].current_price} image={data[2].image} />
                    <Card name={data[3].name} price={data[3].current_price} image={data[3].image} />
                    <Card name={data[4].name} price={data[4].current_price} image={data[4].image} />
                    <Card name={data[5].name} price={data[5].current_price} image={data[5].image} />

                </div>

            </div>
        </div>
    )
}


export default Featured
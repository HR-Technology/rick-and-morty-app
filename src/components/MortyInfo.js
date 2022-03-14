import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../App.css';

const MortyInfo = ({mortyUrl}) => {

    const [ card, setCard ] = useState({})

    useEffect (() => {
        axios.get(mortyUrl)
            .then(res => setCard(res.data))
    }, [mortyUrl])

    return (
        
        <div className='card'>
            <img className='card__img' src={card.image} alt="" />
            <div className="data-info">
                <h3>{card.name}</h3>
                <hr />
                <p className='subtitle__card'>origin:</p>
                <p>{card.origin?.name}</p>
                <p className='subtitle__card'>Episodes where appear:</p>
                <p>{card.episode?.length}</p>
            </div>
        </div>
    );
};

export default MortyInfo;
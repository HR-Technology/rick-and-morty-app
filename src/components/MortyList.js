import React from 'react';
import MortyInfo from './MortyInfo';
import '../App.css';

const MortyList = ({mortys}) => {
    return (
        <div className="container">
            <div className='cards'>
                {
                    mortys?.map(residents =>(
                                
                        <MortyInfo mortyUrl={residents} key={residents} />
                                        
                    ))
                }
            </div>
        </div>
    );
};

export default MortyList;
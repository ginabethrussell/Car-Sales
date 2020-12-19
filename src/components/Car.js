import React from 'react';
import {useHistory} from 'react-router-dom';
import Header from './Header';
import AddedFeatures from './AddedFeatures';
import AdditionalFeatures from './AdditionalFeatures';
import Total from './Total';


export default function Car(){
    const history = useHistory();

    return (
        <div className='car-wrapper'>
            <button className="home-button" onClick={()=> history.push('/')} >Tesla Home</button>
            <div className="boxes">
                <div className="box">
                <Header />
                <AddedFeatures />
                </div>
                <div className="box">
                <AdditionalFeatures  />
                <Total />
                </div>
            </div>
        </div>
    )
}
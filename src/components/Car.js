import React from 'react';
import {useHistory, useParams} from 'react-router-dom';
import Header from './Header';
import AddedFeatures from './AddedFeatures';
import AdditionalFeatures from './AdditionalFeatures';
import Total from './Total';


export default function Car(){
    const history = useHistory();
    const {id} = useParams();

    return (
        <div className='car-wrapper'>
            <button className="home-button" onClick={()=> history.push('/')} >Tesla Home</button>
            <div className="boxes">
                <div className="box">
                <Header id={id}/>
                <AddedFeatures id={id}/>
                </div>
                <div className="box">
                <AdditionalFeatures id={id}  />
                <Total id={id}/>
                </div>
            </div>
        </div>
    )
}
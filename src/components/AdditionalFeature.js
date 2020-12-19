import React from 'react';
import { addFeature } from '../actions';
import {connect} from 'react-redux';

// props passed from AdditionalFeatures component
const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addFeature(props.feature.id)}className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


const mapDispatchToProps = dispatch => { 
  return {
    addFeature: itemId => dispatch(addFeature(itemId)) 
  }
};

export default connect(null, mapDispatchToProps)(AdditionalFeature);

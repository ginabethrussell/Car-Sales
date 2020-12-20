import React from 'react';
import { addFeature } from '../actions';
import {connect} from 'react-redux';

const AdditionalFeature = props => {
 const {id} = props;
 
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addFeature(id, props.feature.id)}className="button">Add</button>
      {props.feature.name} + {props.feature.price})
    </li>
  );
};

const mapDispatchToProps = dispatch => { 
  return {
    addFeature: (index,itemId) => dispatch(addFeature(index, itemId)) 
  }
};

export default connect(null, mapDispatchToProps)(AdditionalFeature);

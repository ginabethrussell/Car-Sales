import React from 'react';
import { addFeature } from '../actions';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

// props passed from AdditionalFeatures component
const AdditionalFeature = props => {
  const params = useParams();
  const id = params.id;
  console.log(props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addFeature(id, props.feature.id)}className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


const mapDispatchToProps = dispatch => { 
  return {
    addFeature: (index,itemId) => dispatch(addFeature(index, itemId)) 
  }
};

export default connect(null, mapDispatchToProps)(AdditionalFeature);

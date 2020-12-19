import React from 'react';
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeFeature } from '../actions';

const AddedFeature = props => {
  const params = useParams();
  const id = params.id;
  console.log('param',id)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removeFeature(id, props.feature.id)}className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeFeature: (index, itemId) => dispatch(removeFeature(index,itemId))
  }
}
export default connect(null, mapDispatchToProps)(AddedFeature);

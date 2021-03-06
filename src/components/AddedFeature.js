import React from 'react';
import {connect} from 'react-redux';
import { removeFeature } from '../actions';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removeFeature(props.feature.id)}className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeFeature: itemId => dispatch(removeFeature(itemId))
  }
}
export default connect(null, mapDispatchToProps)(AddedFeature);

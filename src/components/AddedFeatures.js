import React from 'react';
import { connect } from 'react-redux';
import {useParams} from 'react-router-dom';
import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  const params = useParams();
  const id = params.id;
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.cars[id].car.features.length ? (
        <ol type="1">
          {props.cars[id].car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cars: state.cars
  }
}

export default connect(mapStateToProps)(AddedFeatures);

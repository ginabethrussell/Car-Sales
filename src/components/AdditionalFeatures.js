import React from 'react';
import {useParams} from 'react-router-dom';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';

const AdditionalFeatures = props => {
  const params = useParams();
  const id = params.id;
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.cars[id].additionalFeatures.length ? (
        <ol type="1">
          {props.cars[id].additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cars: state.cars
  }
}

export default connect(mapStateToProps)(AdditionalFeatures);

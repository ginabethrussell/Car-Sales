import React from 'react';
import { connect } from 'react-redux';
import {useParams} from 'react-router-dom';

const Total = props => {
  const params = useParams();
  const id = params.id;
  return (
    <div className="content">
      <h4>Total Amount: ${props.cars[id].car.price + props.cars[id].car.features.reduce((total, item) => {return total + item.price}, 0)}</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cars: state.cars,
  }
}
export default connect(mapStateToProps)(Total);

import React from 'react';
import { connect } from 'react-redux';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.price + props.featurePrice}</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    price: state.car.price,
    featurePrice: state.car.features.reduce((total, item) => {return total + item.price}, 0)
  }
}
export default connect(mapStateToProps)(Total);

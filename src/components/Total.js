import React from 'react';
import { connect } from 'react-redux';

const Total = props => {
  
  return (
    <div className="content">
      <h4>Total Amount: ${ props.price + props.additionalPrice }</h4>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    price: state.cars[ownProps.id].car.price,
    additionalPrice: state.cars[ownProps.id].additionalPrice
  }
}

export default connect(mapStateToProps)(Total);

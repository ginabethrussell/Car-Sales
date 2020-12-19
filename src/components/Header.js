import React from 'react';
import {useParams} from 'react-router-dom';
import { connect } from 'react-redux';



const Header = (props) => {
  const params = useParams();
  const id = params.id
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.cars[id].car.image} alt={props.cars[id].car.name} />
      </figure>
      <h2>{props.cars[id].car.name}</h2>
      <p>Amount: ${props.cars[id].car.price}</p>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cars: state.cars
  }
}
export default connect(mapStateToProps)(Header);

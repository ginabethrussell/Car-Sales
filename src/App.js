import React from 'react';
import {connect} from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures car={props.appState.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.appState.additionalFeatures} />
        <Total car={props.appState.car} additionalPrice={props.appState.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    appState: state
  }
}

export default connect(mapStateToProps, null)(App);

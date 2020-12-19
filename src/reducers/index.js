import { ADD_FEATURE, REMOVE_FEATURE } from '../actions';

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_FEATURE:
            //console.log("adding new feature in reducer with id", action.payload); 
            // grab newFeature object from additionalFeatures 
            // check to see if feature has already been added before changing state
            const newFeatureObj = state.additionalFeatures.filter(feature => feature.id === action.payload)[0];
            const newFeatureName = newFeatureObj.name;
           
            if (!state.car.features.reduce((isAdded, feature) => {
              if (feature.name === newFeatureName){
                return true
              }
              return false
            }, false)){
              return {
                ...state,
                  additionalPrice: state.additionalPrice += newFeatureObj.price ,
                  car: {
                  ...state.car,
                    features:  [...state.car.features, {...newFeatureObj}]
                }
              }
            } else{
              // console.log('feature already added')
              return state
            }
            
                
        case REMOVE_FEATURE:
          // console.log("removing feature in reducer with id", action.payload); 
          // grab feature object from features 
          const featureToSubtract = state.car.features.filter(feature => feature.id === action.payload)[0];
          const filteredFeatures = state.car.features.filter(feature => feature.id !== action.payload);
          return {
            ...state,
              additionalPrice: state.additionalPrice -= featureToSubtract.price,
              car: {
              ...state.car,
                features:  [...filteredFeatures]
            }
          }
        default:
            return state
    }
}
import { ADD_FEATURE, REMOVE_FEATURE } from '../actions';

const teslaCars = [{
    additionalPrice: 0,
    car: {
      price: 63920,
      name: 'Tesla Model S',
      image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tesla-model-s-1563301327.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'Red multicoat finish', price: 2500 },
      { id: 2, name: 'Premium interior', price: 1500 },
      { id: 3, name: 'Autosteer on city streets', price: 10000 },
      { id: 4, name: 'Performance version', price: 23000 }
    ]
  },
  {
    additionalPrice: 0,
    car: {
      price: 33690,
      name: 'Tesla Model 3',
      image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTACJGsKV9nRRMIJmBwDP8gD3ZJeRuaY_DhNxKlAT-pDdRMNxr0',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'Deep blue metallic', price: 1500 },
      { id: 2, name: 'Premium interior', price: 1000 },
      { id: 3, name: 'Autosteer on city streets', price: 10000 },
      { id: 4, name: 'Performance version', price: 20000 }]
  },
  {
    additionalPrice: 0,
    car: {
      price: 74690,
      name: 'Tesla Model X',
      image: 'https://cdn.shopify.com/s/files/1/1724/5219/articles/SIlver-model-x-p90d-mx114-diamond-black-22-inch-forged-wheels-1_2000x.jpg?v=1502145223',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'Midnight Silver Metallic', price: 1500 },
      { id: 2, name: 'Oak Wood Interior', price: 1500 },
      { id: 3, name: 'Autosteer on city streets', price: 10000 },
      { id: 4, name: 'Performance version', price: 23000 }]
  },
  {
    additionalPrice: 0,
    car: {
      price: 45690,
      name: 'Tesla Model Y',
      image: 'https://media.ed.edmunds-media.com/tesla/model-y/2020/oem/2020_tesla_model-y_4dr-suv_performance_fq_oem_1_815.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'Red multicoat finish', price: 2500 },
      { id: 2, name: 'Premium interior', price: 1500 },
      { id: 3, name: 'Autosteer on city streets', price: 10000 },
      { id: 4, name: 'Performance version', price: 10000 }]
  }
];

const initialState = {
    cars: teslaCars
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_FEATURE:
          // console.log("adding new feature in reducer with id", action.payload); 

          // get feature to add
          const newFeature =  state.cars[action.payload.index].additionalFeatures.filter(item => item.id === action.payload.itemId)[0];
          // console.log('adding', newFeature);

          // get car to update
          let carToAddFeature= state.cars[action.payload.index];
          // console.log(state.cars[action.payload.index].car.features);

          // check to make sure feature has not already been added
          const isAdded = state.cars[action.payload.index].car.features.filter((feature) => feature.id === newFeature.id); 
          if (isAdded.length === 0){
            carToAddFeature = {
              // create copy of car object to update
              ...carToAddFeature,
              additionalPrice: carToAddFeature.additionalPrice + newFeature.price,
              car: {
                  ...carToAddFeature.car,
                    features: [...carToAddFeature.car.features, {...newFeature} ]
                  }
              }

              const carsArray = state.cars;
              // replace car at action.payload.index with updated car
              carsArray[action.payload.index] = carToAddFeature;

              return {
                ...state, 
                cars: [...carsArray]
              }
            } else {
              return state;
            }
                 
        case REMOVE_FEATURE:
          // console.log("removing feature in reducer with index", action.payload.index); 
          // grab car to update
          const carsArray = [...state.cars];
          let carToRemoveFeature = state.cars[action.payload.index];

          // grab feature list from car to update
          let carFeatures = carToRemoveFeature.car.features;
          const featureRemoved = carFeatures.filter(feature => feature.id === action.payload.itemId);
          carFeatures = carFeatures.filter(feature => feature.id !== action.payload.itemId)
          carToRemoveFeature.car.features = carFeatures;
          carToRemoveFeature.additionalPrice -= featureRemoved[0].price

          // replace car at action.payload.index with updated car
          carsArray[action.payload.index] = carToRemoveFeature;
          return {
            ...state, 
            cars: [...carsArray]
            }
            
        default:
            return state
    }
}
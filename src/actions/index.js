const ADD_FEATURE = 'ADD_FEATURE';
const REMOVE_FEATURE = 'REMOVE_FEATURE';

const addFeature = (itemId) => {
    // console.log("creating addingFeature action, payload", itemId)
    return { type: ADD_FEATURE, payload: itemId }
}

const removeFeature = (itemId) => {
    return { type: REMOVE_FEATURE, payload: itemId}
}

export {ADD_FEATURE, REMOVE_FEATURE, addFeature, removeFeature};
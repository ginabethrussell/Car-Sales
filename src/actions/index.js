const ADD_FEATURE = 'ADD_FEATURE';
const REMOVE_FEATURE = 'REMOVE_FEATURE';

const addFeature = (index, itemId) => {
    console.log("creating addingFeature action, payload", itemId)
    return { type: ADD_FEATURE, payload: {
        index: index,
        itemId: itemId
    } }
}

const removeFeature = (index,itemId) => {
    console.log('Creating action to remove feature', index, itemId)
    return { type: REMOVE_FEATURE, payload: {
        index: index,
        itemId: itemId
    }}
}

export {ADD_FEATURE, REMOVE_FEATURE, addFeature, removeFeature};
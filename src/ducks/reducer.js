const INITIAL_STATE = {
    name: "",
    address: "",
    city: "",
    states: "",
    zip: 0,
    image: "",
    monthly: 0,
    desiredRent: 0,
    houseList:[]
}

const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIP = "UPDATE_ZIP";
const UPDATE_IMAGE = "UPDATE_IMAGE";
const UPDATE_MONTHLY = "UPDATE_MONTHLY";
const UPDATE_RENT = "UPDATE_RENT";
const CLEAR_HOUSE = "CLEAR_HOUSE";
const HOUSE_LISTER = "HOUSE_LISTER";

export default function reducer (state = INITIAL_STATE, action){
    console.log('action', action.payload)
    switch (action.type){
        case UPDATE_NAME:
        return Object.assign({},state,{name: action.payload})
        case UPDATE_ADDRESS:
        return Object.assign({},state,{address: action.payload})
        case UPDATE_CITY:
        return Object.assign({},state,{city: action.payload})
        case UPDATE_STATE:
        return Object.assign({},state,{states: action.payload})
        case UPDATE_ZIP:
        return Object.assign({},state,{zip: action.payload})
        case UPDATE_IMAGE:
        return Object.assign({},state,{image: action.payload})
        case UPDATE_MONTHLY:
        return Object.assign({},state,{monthly: action.payload})
        case UPDATE_RENT:
        return Object.assign({},state,{desiredRent: action.payload})
        case CLEAR_HOUSE:
        return Object.assign({},state, action.payload)
        case HOUSE_LISTER:
        return Object.assign({},state,{houseList: action.payload})
        default: return state
    }
}

export function updateName (val){
    return{
        type: UPDATE_NAME,
        payload: val
    }
}
export function updateAddress (val){
    return{
        type: UPDATE_ADDRESS,
        payload: val
    }
}
export function updateCity (val){
    return{
        type: UPDATE_CITY,
        payload: val
    }
}
export function updateState (val){
    return{
        type: UPDATE_STATE,
        payload: val
    }
}
export function updateZip (val){
    return{
        type: UPDATE_ZIP,
        payload: val
    }
}
export function updateImage (val){
    return{
        type: UPDATE_IMAGE,
        payload: val
    }
}export function updateMonthly (val){
    return{
        type: UPDATE_MONTHLY,
        payload: val
    }
}export function updateRent (val){
    return{
        type: UPDATE_RENT,
        payload: val
    }
}
export function clearHouse (val){
    return{
        type: CLEAR_HOUSE,
        payload:val
    }
}
export function houseLister (val){
    return {
        type: HOUSE_LISTER,
        payload: val
    }
}
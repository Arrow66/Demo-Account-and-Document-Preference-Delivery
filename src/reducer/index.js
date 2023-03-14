import { FETCH_DATA_SUCCESS,SET_SELECTED_ACCOUNT} from "../actions";




const initialState = {
    accounts:{},
    selectedAccount:""
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
       accounts:action.payload.finalData
      };
    case SET_SELECTED_ACCOUNT:
      return {
        ...state,
        selectedAccount:action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;

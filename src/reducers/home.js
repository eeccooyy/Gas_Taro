import {
    HOME_INFO, HOME_SEARCH_COUNT, HOME_RECOMMEND, HOME_PIN
  } from '@constants/home'
  
  const INITIAL_STATE = {
    searchCount: 0,
  }

  export default function home(state = INITIAL_STATE, action) {

    switch(action.type) {
        case HOME_SEARCH_COUNT: {
            return {
              ...state,
              searchCount: action.payload.count
            }
          }
        default:
          return state
    }
  }
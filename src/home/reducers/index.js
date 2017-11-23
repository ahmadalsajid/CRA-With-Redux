import * as CONSTANTS from '../constants';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }
    case CONSTANTS.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }
    case CONSTANTS.DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }
    case CONSTANTS.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }
    default:
      return state
  }
}

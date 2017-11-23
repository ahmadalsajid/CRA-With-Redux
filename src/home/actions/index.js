//actions
import * as CONSTANTS from '../constants';
export const increment = () => {
  return dispatch => {
    dispatch({type:CONSTANTS.INCREMENT_REQUESTED});
    dispatch({type:CONSTANTS.INCREMENT});
  }
}

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: CONSTANTS.INCREMENT_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: CONSTANTS.INCREMENT
      })
    }, 3000);
  }
}

export const decrement = () => {
  return dispatch => {
    dispatch({type: CONSTANTS.DECREMENT_REQUESTED});
    dispatch({type: CONSTANTS.DECREMENT});
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({type: CONSTANTS.DECREMENT_REQUESTED});

    return setTimeout(()=>{
      dispatch({type: CONSTANTS.DECREMENT})
    },3000);
  }
}


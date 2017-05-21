
export function Increment() {
  return async (dispatch, getState) => {

    dispatch({ type: 'INCREMENT' });

  }

}

export function Decrease() {
  return async (dispatch, getState) => {

    dispatch({ type: 'DECREASE' });

  }

}


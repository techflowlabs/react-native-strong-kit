const initialState = {
  count : 0
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "INCREMENT":
      return { 
        ...state,
        count : state.count + 1
       };
    case "DECREASE":
      return { 
        ...state,
        count : state.count - 1
       };
    default:
      return state;
  }
}



export {
  reducer
}
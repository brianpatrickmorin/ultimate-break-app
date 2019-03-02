const initialState = {
  users: [],
  isLoading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "users:LOAD_START": {
      return {
        ...state,
        isLoading: true
      }
    }
    case "users:LOAD_SUCCESS": {
      return {
        ...state,
        isLoading: false,
        users: action.payload
      }
    }
    case "users:LOAD_FAILED": {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    }
    default: {
      return state;
    }
  }
}

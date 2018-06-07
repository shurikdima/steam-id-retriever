const initialState = {
  fetching: false,
  profile: null,
  error: null,
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, fetching: true, error: null };
    case 'FETCH_SUCCESS':
      return {
        ...state, fetching: false, error: false, profile: action.profile,
      };
    case 'FETCH_FAILURE':
      return {
        ...state, fetching: false, error: action.error, profile: null,
      };
    default:
      return state;
  }
};

export default profile;

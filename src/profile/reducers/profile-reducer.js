const profile = (state = null, action) => {
  switch (action.type) {
    case 'SAVE_PROFILE_DATA':
      return action.value;
    default:
      return state;
  }
};

export default profile;

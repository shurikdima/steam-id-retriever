// const saveProfileData = value => ({type: 'SAVE_PROFILE_DATA', value });
const fetchRequest = () => ({ type: 'FETCH_REQUEST' });
const fetchSuccess = profile => ({ type: 'FETCH_SUCCESS', profile });
const fetchFailure = error => ({ type: 'FETCH_FAILURE', error });

export { fetchRequest, fetchSuccess, fetchFailure };

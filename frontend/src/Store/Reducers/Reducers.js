const initialState = [];

const allJobs = (state = initialState, action) => {
  switch (action.type) {
    case 'loadRestaurants':
      let newState = [...state];
      newState = action.payload;
      console.log('in restaurants reducer', newState);
      return newState;
    default:
      return state;
  }
};

export default allJobs;

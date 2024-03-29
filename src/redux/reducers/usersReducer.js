import { FETCH_USERS } from '../actions/usersAction';

const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, items: action.payload };

    default:
      return state;
  }
};

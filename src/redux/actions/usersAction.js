import { get } from '../../utilities/http';

export const FETCH_USERS = 'FETCH_USERS';

export const fetchUsers = () => dispatch => {
  const url = 'http://localhost:5000/api/users';
  get(url, dispatch, FETCH_USERS);
};

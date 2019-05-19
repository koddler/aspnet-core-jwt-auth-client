export const USER_LOGIN = 'USER_LOGIN';
export const USER_REGISTRATION = 'USER_REGISTRATION';

const LOGIN_URL = 'http://localhost:5000/auth/login';
const REGISTRATION_URL = 'http://localhost:5000/auth/register';

export const login = credentials => dispatch => {
  fetch(LOGIN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.hasOwnProperty('token')) {
        localStorage.setItem('token', data.token);
      }

      return dispatch({
        type: USER_LOGIN,
        payload: data
      });
    });
};

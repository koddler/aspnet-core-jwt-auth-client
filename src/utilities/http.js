// HTTP GET
export const get = (url, dispatch, type) => {
  let token = localStorage.getItem('token');
  let headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  });
  fetch(url, { headers: headers })
    .then(response => response.json())
    .then(data => {
      return dispatch({
        type: type,
        payload: data
      });
    })
    .catch(err => console.error(err));
};

// HTTP POST
export const post = (url, dispatch, type, postData) => {
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
  })
    .then(response => response.json())
    .then(data => {
      return dispatch({
        type: type,
        payload: data
      });
    })
    .catch(err => console.error(err));
};

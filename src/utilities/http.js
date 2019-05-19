// HTTP GET
export const get = (url, dispatch, type) => {
  fetch(url)
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

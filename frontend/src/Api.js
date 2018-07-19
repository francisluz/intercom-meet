/* eslint-disable no-undef */
function search(query, cb) {
    if(!query){
      query = 100;
    }
    
    return fetch(`https://intercommeetapi.herokuapp.com/find_customers?distance=${query}`, {
      accept: "application/json"
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(cb);
  }
  
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        console.log(response);
      return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }
  
  function parseJSON(response) {
    return response.json();
  }
  
  const Api = { search };
  export default Api;
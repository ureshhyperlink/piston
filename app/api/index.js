// General api to access data
import ApiConstants from './ApiConstants';

class ApiFetch {
  PostData = (apiurl, myObj, method) => {
    var API_URL = ApiConstants.BASE_URL + apiurl;
      console.log("API ---> " + API_URL)
      console.log("OBJ ---> " + JSON.stringify(myObj))
      return fetch(API_URL, {
          method: method,
          headers: {
              Accept: 'application/json',
              // 'Content-Type': 'multipart/form-data',
          },
          body:myObj,
      })
          .then((response) => response.json())
          .then((responseJson) => {
              console.log("Response ---> " +JSON.stringify(responseJson))
              return responseJson;
          }).catch((error) => {
              console.log(error.responseJson)
              return error;
          });
  }
}
const apiFetch = new ApiFetch();
export default apiFetch;
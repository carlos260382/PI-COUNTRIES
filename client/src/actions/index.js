import axios from 'axios';

export const GET_COUNTRY = "GET_COUNTRIES";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const SEARCH_BY_NAME = "SEARCHS_BY_NAME";
export const GET_COUNTRY_DETAL = "GET_COUNTRY_DETAL";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const SORT = "SORT";
export const PAGED = "PAGINATE";

export function getCountries() {
  return function (dispatch) {
    axios.get('http://localhost:3001/countries')
      .then((response) => {
        return dispatch({
          type: GET_COUNTRY,
          payload: response.data
        })
      })
      .catch((datos) => console.error(datos))
  }
};


export function postActivity(input) {
  return async function () {
    try {
      let resul = await axios.post("http://localhost:3001/activity", input);
      if (resul) alert(resul.data);
    } catch (error) {
      console.log(error);
    }
  };
};
export function getActivities() {
  return async function (dispatch) {
    try {
      let resul = await axios.get(`http://localhost:3001/activity`);
      return dispatch({
        type: GET_ACTIVITIES,
        payload: resul.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function searchByName(name) {
  return async function (dispatch) {
    try {
      let resp = await axios(`http://localhost:3001/countries?name=${name}`)
      dispatch({
        type: SEARCH_BY_NAME,
        payload: resp.data,
      });

    } catch (error) {

    }
  }
}

export function getCountryDetal(id) {
  return function (dispatch) {
    axios.get(`http://localhost:3001/countries/${id}`)
      .then((response) => {
        return dispatch({
          type: GET_COUNTRY_DETAL,
          payload: response.data
        })
      })
      .catch((datos) => console.error(datos))
  }
}

export function filterByContinent(payload) {
  return {
    type: FILTER_BY_CONTINENT,
    payload,
  };
}

export function filterActivities(payload) {
  return {
    type: FILTER_BY_ACTIVITY,
    payload,
  };
}

export function Sort(payload) {
  return {
    type: SORT,
    payload,
  };
}

export function setCurrentPage(payload) {
  return {
    type: PAGED,
    payload,
  };
}
import axios from "axios";
const baseUrl = "http://localhost:3001";

export const getAdmins = () => {
  return (dispatch, getState) => {
    axios({
      method: "GET",
      url: `${baseUrl}/admins`
    })
    .then(({ data }) => {
      dispatch({
        type: "admins/fetchAll",
        payload: data
      });
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

export const createAdmin = (payload) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        url: `${baseUrl}/admins`,
        data: payload
      })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
    })
  }
}

export const getCategories = () => {
  return (dispatch, getState) => {
    axios({
      method: "GET",
      url: `${baseUrl}/categories`
    })
    .then(({ data }) => {
      dispatch({
        type: "categories/fetchAll",
        payload: data
      });
    })
    .catch((err) => {
      console.log(err);
    })
  }
}
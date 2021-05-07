import axios from 'axios';

const API_BASE_URL = "https://newsletter.nkap.net/api/v1"


let createContact = (params) => {
  console.log("email", params)
  return axios.post(API_BASE_URL + '/contact/create', params);
};


let saveMail = (params) => {
  return axios.post(API_BASE_URL + '/user/create', params)
}


export default {
  createContact,
  saveMail
}

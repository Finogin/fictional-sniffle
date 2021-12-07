const axios = require("axios");
const api = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("access_token"),
  },
});

export function updateHeaders(access_token) {
  console.log("update headers", access_token);
  console.log("api.default.headers", api.defaults.headers);
  api.defaults.headers["Authorization"] = `Bearer ${access_token}`;
}

export function authorization(code) {
  const url = "https://unsplash.com/oauth/token";
  const axios = require("axios");
  const data = {
    client_id: "8kg4TDfxSTMsMwOLpuObmbhy6PDXlT_JeNAvUF9ctlI",
    client_secret: "e-EXP_hOtcpUShxEkzHqdcM8amOPf--PoX_uUe9vCDk",
    redirect_uri: `${process.env.DOMAIN}/code`,
    code,
    grant_type: "authorization_code",
  };
  return axios
    .post(url, data)
    .then(function (response) {
      console.log(response.data.access_token);
      localStorage.setItem("access_token", response.data.access_token);
      updateHeaders(response.data.access_token);
    })
    .catch(function (error) {
      alert(error);
      return error;
    });
}

export function getPhotosByAPI(page) {
  console.log("getPhotosByApi", api.defaults.headers);
  return api
    .get("photos", {
      params: {
        page: page || 1,
        per_page: 10,
      },
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      alert(error);
      return error;
    });
}

export function getPhotoByAPI(id) {
  return api
    .get("photos/" + id)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      alert(error);
      return error;
    });
}

export function setLiked(id) {
  return api
    .post("photos/" + id + "/like")
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      alert(error);
      return error;
    });
}

export function deleteLiked(id) {
  return api
    .delete("photos/" + id + "/like")
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      alert(error);
      return error;
    });
}

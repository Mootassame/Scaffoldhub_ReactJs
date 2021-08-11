import Axios from "axios";
import Qs from "qs";
import moment from "moment";
const authAxios = Axios.create({
  baseURL: "http://localhost:8080/api",
  paramsSerializer: function (params) {
    return Qs.stringify(params, {
      arrayFormat: "brackets",
      filter: (prefix, value) => {
        if (moment.isMoment(value) || value instanceof Date) {
          return value.toISOString();
        }

        return value;
      },
    });
  },
});

authAxios.interceptors.request.use(
  async function (options) {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTMwNWI0ZDc1ZDMzMmM3MzkyMzAxOCIsImlhdCI6MTYyODYzNjU5NywiZXhwIjoxNjI5MjQxMzk3fQ.LAJUGZBDQ5ssMn4JmipJVpxR_8kTRJz-6L-4TYT4Rok";
    if (token) {
      options.headers["Authorization"] = `Bearer ${token}`;
    }

    options.headers["Accept-Language"] = "en";

    return options;
  },
  function (error) {
    console.log("Request error: ", error);
    return Promise.reject(error);
  }
);

export default authAxios;

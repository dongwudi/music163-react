import axios from "axios";
import qs from "qs";

let axiosServer = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "" : "",
  timeout: 5000,
  withCredentials: true,
  transformRequest: [
    function(data) {
      return data;
    }
  ],
  transformResponse: [
    function(data) {
      return data;
    }
  ]
});

// 拦截
axiosServer.interceptors.request.use(
  function(config) {
    //get post 默认处理
    if (config.method === "get") {
      return config;
    }
    if (config.method === "post") {
      config.data = qs.stringify({ ...config.data });
      return config;
    }
  },
  function(err) {
    return Promise.reject(err);
  }
);

axiosServer.interceptors.response.use(
  function(response) {
    const data = response.data;
    return data;
  },
  function(err) {
    return Promise.reject(err);
  }
);

export default {
  get: (url, config) => axiosServer.get(url, { ...config }),
  post: (url, config) => axiosServer.post(url, { ...config })
};

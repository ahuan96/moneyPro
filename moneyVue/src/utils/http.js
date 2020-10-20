import axios from 'axios'
import { Toast } from 'vant';
// import { Message } from 'element-ui';

axios.defaults.timeout = 5000
// axios.defaults.baseURL = 'http://localhost:3000/'
axios.defaults.baseURL = 'http://118.107.40.50:8080/'
// 配置代理时使用
// axios.defaults.baseURL = '/api'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//http request 拦截器
axios.interceptors.request.use(
  (config) => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    // config.data = JSON.stringify(config.data)
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
    // if(token){
    //   config.params = {'token':token}
    // }
    return config
  },
  (error) => {
    return Promise.reject(err)
  }
)

//http response 拦截器
axios.interceptors.response.use(
  (response) => {
    if (response.data.status == 400) {

    }
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params = {}) {
  let user = localStorage.getItem('user')
  if(user){
    user = JSON.parse(user)
    params.userid = user.userid
  }
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then((response) => {
        if(response.data.code == 0){
          resolve(response.data)
        }else{
          Toast.fail(response.data.msg);
        }

      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
  let user = localStorage.getItem('user')
  if(user){
    user = JSON.parse(user)
    data.userid = user.userid
  }
  return new Promise((resolve, reject) => {
    let param = new URLSearchParams()
    for(let item in data){
     param.append(item, data[item])
    }
     axios.post(url,param)
          .then(response => {
            if(response.data.code == 0){
              resolve(response.data)
            }else{
              Toast.fail(response.data.msg);
            }
          },err => {
            reject(err)
          })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data).then(
      (response) => {
        resolve(response.data)
      },
      (err) => {
        reject(err)
      }
    )
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(
      (response) => {
        resolve(response.data)
      },
      (err) => {
        reject(err)
      }
    )
  })
}

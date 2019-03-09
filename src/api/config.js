/*
* 重新封装axios请求
* */
import axios from 'axios'
import {
  Message,
  Loading
} from 'element-ui'
const axiosObj = axios.create({
  baseURL: '/',
  timeout: 30000
})

function isOk (res) {
  return res && (res.rc === 0 || res.rc === '0')
}

function formatParams (params) {
  if (params) {
    let paramsArr = []
    for (let key of Object.keys(params)) {
      paramsArr.push(key + '=' + params[key])
    }
    return '?' + paramsArr.join('&')
  }
  return ''
}

/**
 * 拦截请求promise
 * @param loadingDom 显示loading的dom
 * @param promiseObj promise对象
 * @param noTip 不显示统一错误提示
 * @returns {PromiseLike<T> | Promise<T>}
 */
function doPromise (loadingDom, promiseObj, noTip) {
  let loadingInstance = loadingDom ? Loading.service({
    target: loadingDom
  }) : false
  return promiseObj.then((res) => {
    loadingInstance && loadingInstance.close()
    if (res.data && res.data.rc === 20000) { // 登录超时时最外层window弹出登录弹框
      window.top.showLoginPanel()
    }
    if (!noTip) {
      if (!isOk(res.data) && !isOk(res)) {
        Message({
          message: res.errorInfo || res.data.errorInfo || '请求出错',
          type: 'error',
          duration: 4000
        })
        // 服务端返回错误
        return Promise.reject(res)
      }
    }
    return Promise.resolve(res.data || {})
  }, (error) => {
    loadingInstance && loadingInstance.close()
    if (!noTip) {
      let errorMsg
      if (error.response) {
        errorMsg = `请求失败，错误码：${error.response.status}`
      } else {
        errorMsg = error.message
      }
      Message({
        message: errorMsg || '请求出错',
        type: 'error',
        duration: 5000
      })
    }
    // ajax错误
    return Promise.reject(error)
  })
}

function get ({
  url,
  params,
  loadingDom,
  noTip
}) {
  let promiseObj = axiosObj.get(url + formatParams(params))
  return doPromise(loadingDom, promiseObj, noTip)
}

function post ({
  url,
  params,
  requestObj,
  loadingDom,
  noTip
}) {
  let promiseObj = axiosObj.post(url + formatParams(params), requestObj)
  return doPromise(loadingDom, promiseObj, noTip)
}
export default {
  isOk,
  get,
  post
}

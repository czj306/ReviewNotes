/*
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-26 14:10:09
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-02 11:27:11
 * @FilePath: /ReviewNotes/vite-vue3-review/src/service/config.ts
 * @Description: service 基础配置中心
 */
import axios, { AxiosError, AxiosResponse, AxiosInstance } from 'axios'
import Cache from './cache2'
import { httpErrorStatusHandle } from './errorCode.ts'
import { pendingMap, setPendingMap, getRequestKey } from './cancel.ts'

const CancelToken = axios.CancelToken;
let source = CancelToken.source();

const service: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_BASE_API,
	timeout: import.meta.env.VITE_APP_PREVENT_DUPLICATE_SUBMISSIONS,
	withCredentials: true, // 异步请求携带cookie
	headers: {
		// 设置后端需要的传参类型
		'Content-Type': 'application/json',
		'token': 'your token',
		'X-Requested-With': 'XMLHttpRequest',
	},
})

// 添加请求拦截器
service.interceptors.request.use(
	function (config: any) {
		if (!config.repeatRequest) {
			setPendingMap(config)
		  }
		return config
	},
	function (error) {
		return Promise.reject(httpErrorStatusHandle(error))
	}
)

// 添加响应拦截器
service.interceptors.response.use(
	function (response: AxiosResponse) {
		const config = response.config
		const key = getRequestKey(config)
		pendingMap.delete(key)

		if (response.status === 200) {
            return Promise.resolve(response); //进行中        
        } else {
            return Promise.reject(response); //失败       
        }
	},
	function (error: AxiosError) {
		// 请求拦截器中的source.cancel会将内容发送到error中
		// 通过axios.isCancel(error)来判断是否返回有数据 有的话直接返回给用户
		if (axios.isCancel(error)) {
			source.cancel(httpErrorStatusHandle(error))
			return Promise.resolve(httpErrorStatusHandle(error))
		} else {
			// 如果没有的话 则是正常的接口错误 直接返回错误信息给用户
			return Promise.reject(httpErrorStatusHandle(error))
		}
	}
)

// 做缓存准备
let cache = new Cache(axios) // 将当前 axios 对象传入 Cache 中
cache.use({
	expire: 30000,
	storage: true,
	instance: service, // 如果有自定义axios实例 比如上面的instance 需要将其传入instance 没有则不传
	requestConfigFn: (config: any) => {
		config.cache = config.params.cache;
		delete config.params.cache;
		config.cancelToken = source.token;
	  // 请求拦截自定义操作
	  if (config.header) {
		config.header.token = 'i am token'
	  } else {
		config.header = { token: 'i am token' }
	  }
	  // 需要将config对象通过 Promise 返回 cache 中 也可以使用new Promise的写法
	  return Promise.resolve(config)
	},
	responseConfigFn: (res: any) => {
	  // 响应拦截的自定义操作
	  if (!res.data.code) {
		// 需要将 res 通过 Promise 返回
		return Promise.resolve(res)
	  }
	}
  })

//封装请求的api
const callApi = (method = "GET", url: string, data = {
	cache: false
}) => {
  return service({
    method,
    url,
    params: method === "GET" ? data : {},
    data: method === "POST" ? data : {},
  });
};

// 请求头部 get | put | delete | post
//封装GET请求函数
export const getA = (url: any, data: any) => callApi("GET", url, data);
// export const getA = (url: any) => callApi("GET", url);
export const postA = (url: any, data: any) => callApi("POST", url, data);

/*
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-26 14:10:09
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-03-28 11:56:55
 * @FilePath: /ReviewNotes/vite-vue3-review/src/service/config.ts
 * @Description: service 基础配置中心
 */
import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000,
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
	function (config) {
		// 在发送请求之前做些什么
		return config
	},
	function (error) {
		// 对请求错误做些什么
		console.log(error)
		return Promise.reject(error)
	}
)

// 添加响应拦截器
service.interceptors.response.use(
	function (response) {
		// console.log(response)
		// 2xx 范围内的状态码都会触发该函数。
		// 对响应数据做点什么
		// dataAxios 是 axios 返回数据中的 data
		const dataAxios = response.data
		// 这个状态码是和后端约定的
		const code = dataAxios.reset
    console.log('code: ', code);
		return dataAxios
	},
	function (error) {
		// 超出 2xx 范围的状态码都会触发该函数。
		// 对响应错误做点什么
		console.log(error)
		return Promise.reject(error)
	}
)

//封装请求的api
const callApi = (method = "GET", url: string, data = {}) => {
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

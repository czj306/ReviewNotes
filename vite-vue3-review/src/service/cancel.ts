/*
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-04-01 16:10:05
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-02 11:28:02
 * @FilePath: /ReviewNotes/vite-vue3-review/src/service/cancel.ts
 * @Description: axios之cancelToken取消请求
 */
import { AxiosRequestConfig } from "axios";
import qs from "qs";

// 用于装载状态处于请求中的axios请求
export let pendingMap = new Map();

// 获取处于pendingMap的key
export function getRequestKey(config: AxiosRequestConfig) {
  return (config.method || "") + config.url + "?" + qs.stringify(config.data);
}

// 给pendingMap设置值
export function setPendingMap(config: AxiosRequestConfig) {
  /*
   * Axios有两个取消请求的API，AbortController和CancelToken，新项目中建议使用AbortController
   * 我们通过AbortController(控制器对象).signal返回一个AbortSignal绑定到axios请求的config配置中，然后就可以通过该AbortController.abort中止请求。
   */
  const controller = new AbortController();
  config.signal = controller.signal;
  const key = getRequestKey(config);

  if (pendingMap.has(key)) {
    controller.abort();
  } else {
    pendingMap.set(key, controller);
  }
}

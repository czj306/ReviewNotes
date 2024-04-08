/*
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-04-02 13:26:08
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-03 14:24:30
 * @FilePath: /ReviewNotes/vite-vue3-review/src/utils/errorHandler.ts
 * @Description: 封装 error 监听方法
 */
// TODO: delete this
import { nextTick } from 'vue';
import CommonApi from '../services/commonApi.ts';

export default {
  errorHandler(err: any, vm: any, info: any) {
    nextTick(async () => {
      await CommonApi.postErrorLogs({
        errorType: 2, // 错误类型: 1接口报错 2代码报错
        errorInfo: err.toString(),
        note: `组件：${vm.$.vnode.type.__file} \n发生错误：${err} \n所在生命周期：${info}`,
      });
    });
  },
  /**
  * @param {String}  message    错误信息
  * @param {String}  source    出错文件
  * @param {Number}  lineno    行号
  * @param {Number}  colno    列号
  * @param {Object}  error  Error对象
  */
  async onerror(message: any, source: any, lineno: any, colno: any, error: any) {
    await CommonApi.postErrorLogs({
      errorType: 2, // 错误类型: 1接口报错 2代码报错
      errorInfo: `错误原因：${message}\n错误URL: ${source}\n错误行号: ${lineno} ${colno} ${error}`,
    });
  },
};
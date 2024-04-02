/*
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-04-02 13:20:18
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-04-02 13:54:15
 * @FilePath: /ReviewNotes/vite-vue3-review/src/services/commonApi.ts
 * @Description: 
 */
// TODO: Remove this
import { callApi } from './config.ts';

const osType = (function () {
    const ua = window.navigator.userAgent;
    if (/(Android)/.test(ua)) {
      return 1;
    }
    if (/(iPhone|iPad)/.test(ua)) {
      return 2;
    }
    return 3;
  }());
  
  const isProd = process.env.NODE_ENV === 'production';
  
  export default {
    postErrorLogs(prams: any) {
      /*
      * project 发生项目 可自行定义
      * errorType 错误类型: 1接口报错 2代码报错
      * terminal 终端平台: 1安卓 2ios 3web
      * */
      if (!isProd) return;
      return callApi('POST', '/api/common/log/error', {
        ...prams,
        userInfo: 'user.id',
        pageUrl: window.location.href,
        project: 'xxx',
        terminal: osType,
      });
    },
  }
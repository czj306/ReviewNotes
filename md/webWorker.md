<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-26 11:04:52
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-03-26 11:11:34
 * @FilePath: /ReviewNotes/md/webWorker.md
 * @Description: 介绍webWorker情况
-->
# webWorker
> - 可以在独立线程中执行费时的处理任务，使主线程（浏览器UI线程）不受阻塞，提高了网页的响应速度。
> 
> - Javascript是单线程的执行，一个线程每次只能做一件事情，会出现阻塞，web worker可以创造多线程环境，在主线程中通过new创建 Worker 线程（子线程），在子线程（Worker线程）中完成计算量大、耗费时间长、较为复杂的运算，可以避免主线程被阻塞。
## 实现步骤
``` bash
# mainWorker.js主线程
import worker from './worker.js?raw';//?raw是为了标识以文件的方式import,不是以内容
const blob = new Blob([worker], { type: 'application/javascript' });
const workUrl = window.URL.createObjectURL(blob);
let worker = null;
export const countFn = (params) => {
  return new Promise((resolve, reject) => {
    // 主线程通过new Worker()方法创建Worker对象，后面跟着脚本的URL或Blob对象
    worker = new Worker(workUrl);
    // 主线程通过Worker对象的postMessage()方法发送消息到Worker线程
    worker.postMessage(JSON.stringify(params));
    // 获取到的结果
    worker.onmessage = (e) => {        
        let _data = e.data && JSON.parse(e.data);
        resolve(_data);
        //关闭线程
        worker.terminate()
    };
  });
};

# worker.js分线程
self.onmessage = function(event) {
    // 在Worker线程中，通过postMessage()方法向主线程发送响应
    self.postMessage(JSON.stringify({'self': 'Completed!'}));
};
//关闭子线程
//self.close();

# 页面中进行使用
import { countFn} from "@/utils/worker/mainWorker.js";
const confirm = (params) => {
    countFn(params).then(res=>{
        //获取到的结果
    }).catch(err=>{})
}
```
console.log('使用抖音开发者工具开发过程中可以参考以下文档:');
console.log(
  'https://developer.open-douyin.com/docs/resource/zh-CN/mini-game/guide/minigame/introduction',
);
import './js/libs/weapp-adapter'
import Main from './js/main'
tt.navigateToScene({
  scene: "sidebar",
  success: (res) => {
      console.log("navigate to scene success");
      new Main()
      // 跳转成功回调逻辑
  },
  fail: (res) => {
      console.log("navigate to scene fail: ", res);
      // 跳转失败回调逻辑
  },
});

  // 创建实例
  this.ad = tt.createRewardedVideoAd({
    adUnitId: "xxx",
  });

  // 监听错误
  this.ad.onError((err) => {
    tt.hideLoading();
    switch (err.errCode) {
      case 1004:
        // 无合适的广告
        break;
      default:
      // 更多请参考错误码文档
    }
  });

  // 监听视频播放完成
  this.ad.onClose((data) => {
    tt.hideLoading();
    if (data.isEnded) {
      console.log("观看了", data.count, "个视频");
    } else {
      console.log("未观看完视频");
    }
  });
  
  // do other thing
  // 卸载 close 事件监听
  this.ad.offClose(closeHandler);

  // 预加载资源
  this.ad.load();
// 这里填写 能力-互动能力-消息管理-订阅消息 中的模版消息id
const updateMsgTplId = 'MSG164161657291480498528979256';
const orderSuccessTplId = 'MSG164158927218123174309792040';

tt.requestSubscribeMessage({
  // 开放平台申请的模版id  支持最多3个同类型模版
  tmplIds: [updateMsgTplId, orderSuccessTplId],
  success(res) {
    console.log("订阅成功: ", res);
    //订阅成功回调
    let msg1 = "";
    let and = "";
    let msg2 = "";
    console.log("更新提醒通知: " + res[updateMsgTplId]);
    console.log("下单成功通知: " + res[orderSuccessTplId]);
    msg1 = res[updateMsgTplId] === "accept" ? "更新提醒通知" : "";
    msg2 = res[orderSuccessTplId] === "accept" ? "下单成功通知" : "";
    and = msg1 && msg2 && "及";
    tt.showModal({
      content: `${msg1}${and}${msg2} 订阅成功`,
      showCancel: false
    })
  },
  fail(res) {
    //订阅失败回调
    console.log("订阅失败,错误码: ", res.errNo);
    tt.showModal({
      title: "订阅失败",
      content: `errNo: ${res.errNo || "暂时未加"}`,
      showCancel: false
    });
  },
  complete(res) {
    //完成回调
    console.log("API调用完成: " + res.errMsg);
  },
});

const interstitialAd = tt.createInterstitialAd({
  adUnitId: "YOUR_AD_UNITID",
});

interstitialAd
  .load()
  .then(() => {
    interstitialAd.show();
  })
  .catch((err) => {
    console.log(err);
  });


function eventHandler(e) {
    if (e.detail.errNo) {
      console.log("添加到桌面失败", e.detail);
    } else {
      console.log("添加到桌面成功");
    }
  }
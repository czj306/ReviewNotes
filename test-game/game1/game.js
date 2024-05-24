console.log('使用抖音开发者工具开发过程中可以参考以下文档:');
console.log(
  'https://developer.open-douyin.com/docs/resource/zh-CN/mini-game/guide/minigame/introduction',
);
import './js/libs/weapp-adapter'
import Main from './js/main'
new Main()

// // 添加桌面
// tt.addShortcut({
//   success() {
//     console.log("添加桌面成功");
//   },
//   fail(err) {
//     console.log("添加桌面失败", err.errMsg);
//   },
// });

// // 侧边栏复访
// tt.navigateToScene({
//   scene: "sidebar",
//   success: (res) => {
//       console.log("navigate to scene success");
//       // 跳转成功回调逻辑
//       new Main()
//   },
//   fail: (res) => {
//       console.log("navigate to scene fail: ", res);
//       // 跳转失败回调逻辑
//   },
// });

// // 订阅消息
// const tmplIds = ["MSGxx", "MSGxx"];
// tt.requestSubscribeMessage({
//   tmplIds: tmplIds,
//   complete: (res) => {
//     tt.showModal({
//       title: "订阅完成",
//       content: JSON.stringify(res),
//     });
//   },
// });

// 广告能力
// 显示广告
const videoAd = tt.createRewardedVideoAd({
  adUnitId: "w9afq3u1fg265xkgnc",
});

videoAd.onLoad(() => {
  console.log("广告加载完成");
});
videoAd.load();

videoAd
  .show()
  .then(() => {
    console.log("广告显示成功");
  })
  .catch((err) => {
    console.log("广告组件出现问题", err);
    // 可以手动加载一次
    videoAd.load().then(() => {
      console.log("手动加载成功");
      // 加载成功后需要再显示广告
      videoAd.show();
    });
  });
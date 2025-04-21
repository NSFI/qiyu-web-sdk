# @neysf/qiyu-web-sdk

> qiyu-web-sdk

## 一、功能简介

七鱼访客端 sdk 支持 npm 包接入

> 注：sdk 依赖 Promise，如果浏览器不支持 Promise，需要接入方自行引入 Promise polyfill（import 'core-js/modules/es.promise';）


## 二、使用示例

### 2.1 安装

```sh
$ npm install @neysf/qiyu-web-sdk --save
```
### 2.2 使用说明(示例)

```js
import YSF from '@neysf/qiyu-web-sdk';

/**
 * 第一个参数是 企业 appkey
 * 第二个参数是 配置参数
 * 第三个参数 环境配置 默认普通企业，传入overseas为海外企业
*/
YSF.init('f13509f5e8b8e1fbb388b3ddbee238c2', {
    sdkTemplateId: 123, // 自定义访客端样式模版
    templateId: 123, // 自定义配置多个会话邀请模板，包括底图、接入会话触发动作等（如需会话邀请模板关联某个对话框样式模板，请使用会话邀请模板的高级自定义功能，将“接受邀请”的操作设置指向某个对话框模板）
    shuntId: 123, // 多入口分流支持配置多套模版，代码指定模版id
    hidden: 1 // 是否隐藏访客端默认入口，0: 不隐藏，1: 隐藏
  }).then(ysf => {
    ysf('open');
  }).catch(error => {
    console.log('sdk加载失败---', error);
  });
```

参数说明请参考 [官网文档](https://b.163.com/knowledge/public/WXjbs9n3GC/knowdetail?docId=X8GdiEY0Wm&pid=162306)

| 字段名 | 类型 | 说明 | 是否必须 | 默认值 |
|---|---|---| ---| ---|
| 第一个参数(appkey) | string | 企业 appkey | 是 | -- |
| 第二个参数(配置) | object | sdk 入口配置 | 否 | -- |
| 第三个参数(配置) | string | 普通企业不需要传，海外版本企业：'overseas' | 否 | -- |




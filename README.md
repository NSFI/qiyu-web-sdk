# @ysf/qiyu-web-sdk

> qiyu-web-sdk

## 一、功能简介

七鱼访客端 sdk 支持 npm 包接入

> 注：sdk 依赖 Promise，如果浏览器不支持 Promise，需要接入方自行引入 Promise polyfill（import 'core-js/modules/es.promise';）


## 二、使用示例

### 2.1 安装

```sh
$ npm install @ysf/qiyu-web-sdk --save
```
### 2.2 使用说明(示例)

```js
import YSF from '@ysf/qiyu-web-sdk';

/**
 * 第一个参数是 企业 appkey
 * 第二个参数是 配置参数
*/

YSF.init('f13509f5e8b8e1fbb388b3ddbee238c2', {
    templateId: 123,
    shuntId: 11,
    // hidden: 1
  }).then(ysf => {
    ysf('open');
  }).catch(error => {
    console.log('sdk加载失败---', error);
  });
```

参数说明请参考 [官网文档](https://qiyukf.com/docs/guide/web/2-接入说明.html#npm接入配置)

| 字段名 | 类型 | 说明 | 是否必须 | 默认值 |
|---|---|---| ---| ---|
| 第一个参数(appkey) | String | 企业 appkey | 是 | -- |
| 第二个参数(配置) | Object | sdk 入口配置 | 否 | -- |




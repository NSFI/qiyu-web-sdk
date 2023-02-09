var mapEnv = {
  test: 'qytest.netease.com',
  release: 'qiyukf.netease.com',
  online: 'qiyukf.com',
  overseas: 'servehub.aiconn.com'
};
var TIMEOUT = 30000;
var YSF = {};

YSF.init = function (appKey, objParams, env) {
  // 日志上报
  var img = new Image(); // ua信息在request headers中有带过去，不需要在链接重新传了～

  img.src = "https://qiyukf.com/sdk/res/img/loading.gif?t=" + new Date().getTime() + "&k=" + appKey;
  var promise = new Promise(function (resolve, reject) {
    if (!appKey) {
      reject(new Error('appKey必填'));
    }

    if (Object.prototype.toString.call(objParams) !== '[object Object]') {
      reject(new Error('参数类型错误,第二个参数应该是object'));
    }

    var ret = [];

    if (objParams) {
      for (var item in objParams) {
        console.log(item);
        ret.push(item + "=" + objParams[item]);
      }
    }

    var params = ret.length ? "?" + ret.join('&') : '';
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.timeout = TIMEOUT;
    script.src = "https://" + mapEnv[env || 'online'] + "/script/" + appKey + ".js" + params;
    var timeout;

    function onScriptComplete(errType, event) {
      script.onerror = null;
      script.onload = null;
      var errorMsg = '';
      clearTimeout(timeout); // 加载成功

      if (window.ysf) {
        window.ysf('onready', function () {
          // sdk执行完成
          resolve(window.ysf);
        });
      } else {
        // 处理加载失败报错
        if (errType === 'loaderror' || errType === 'onload') {
          // onerror的报错信息
          console.log(event);
          errorMsg = 'SDK_LOAD_ERROR';
        } else {
          // timeout error
          errorMsg = 'SDK_LOADING_TIMEOUT';
        } // 上报错误信息


        var _img = new Image();

        _img.src = "https://qiyukf.com/sdk/res/img/loading.gif?t=" + new Date().getTime() + "&k=" + appKey + "&error=" + errorMsg;
        reject(new Error(errorMsg));
      }
    }

    timeout = setTimeout(function () {
      return onScriptComplete('timeout');
    }, TIMEOUT);

    script.onerror = function (event) {
      return onScriptComplete('loaderror', event);
    };

    script.onload = function (event) {
      return onScriptComplete('onload', event);
    };

    head.appendChild(script);
  });
  return promise;
};

export default YSF;
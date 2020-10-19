layui.define('jquery',function(exports){ //提示：模块也可以依赖其它模块，如：layui.define('layer', callback);
  var $ = layui.$
  var serverPath = 'http://118.107.40.50:8080/'; //掉接口服务器地址
  var obj = {
    get: function(url,data,fn){
      request('get',url,data,fn)
    },
    post:function(url,data,fn){
      request('post',url,data,fn)
    },
    say:function(){
      alert(1)
    }
  };

  function request(type,url,data,fn){
    if(!(data&&data.userid)){
      console.log('aa')
      let user = JSON.parse(localStorage.getItem("user"))
      data.userid =  user.userid;
    }
    $.ajax({
        url: serverPath + url,
        type: type,
        dateType: 'jsonp',
        data: data,
        // beforeSend :function(xmlHttp){
        //     xmlHttp.setRequestHeader("If-Modified-Since","0");
        //     xmlHttp.setRequestHeader("Cache-Control","no-cache");
        //  },
        success: function (res) {
            if (res.code == 0) {
                fn(res);
            } 
            // else if (res.code == 99999) {
            //     exit();
            // } 
            else {
                layer.msg(res.msg)
            }
        },
        error: function (err) {
            layer.msg("出现错误")
        }
    })
  }
  
  //输出test接口
  exports('http', obj);
});    
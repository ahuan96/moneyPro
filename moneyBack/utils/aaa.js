// layui.define([ 'jquery' ],  function (exports){ 
//     var  $ = layui.jquery;
//     var  obj = {
//         ajax:  function  (url, type, dataType, data, callback) {
//             $.ajax({
//                 url: url,
//                 type: type,
//                 dataType: dataType,
//                 data: data,
//                 success: callback
//             });
//         }
//     };
//     //输出接口
//     exports( 'common' , obj);
// });

layui.define(function(exports){ //提示：模块也可以依赖其它模块，如：layui.define('layer', callback);
  var obj = {
    hello: function(str){
      alert('Hello '+ (str||'mymod'));
    }
  };
  
  //输出test接口
  exports('mymod', obj);
});    
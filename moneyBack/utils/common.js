
var serverPath = 'http://118.107.40.50:8080/'; //掉接口服务器地址
var tableName = 'layuiAdmin' //本地存储表名
var MOD_NAME = 'admin' //模块事件名
//自定义请求字段
var request = {
    tokenName: 'token' //自动携带 token 的字段名。可设置 false 不携带。
}

function exit() {
    //清空本地记录的 token
    layui.data(tableName, {
        key: request.tokenName,
        remove: true
    });

    //跳转到登入页
    location.href = '/login';
};

//获取链接上参数
function getUrlParms(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}

//请求部分
function mAjax(type, url, data, fn) {
    let user = JSON.parse(localStorage.getItem("user"))
    data.userid =  user.userid;
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


function enterDo(class1, class2) { //回车-搜索-class1:输入   class2:按钮
    var btn = class2 ? class2 : 'searchBtn'
    $(document).on('keypress', '.' + class1, function (event) {
        if (event.keyCode == 13) {
            $('.' + btn).click();
        }
    })
}



function minAndMax(id, myDate, laydate) { //起始时间联动  
    //id格式  传参time  时间起time  时间止timeEnd      myData 全局对象
    myDate[id] = {}
    myDate[id].start = laydate.render({
        elem: '#' + id,
        trigger: "click",
        type: 'datetime',
        done: function (value, dates) {
            myDate[id].end.config.min = { //开始日选好后，重置结束日的最小日期
                year: dates.year,
                month: dates.month - 1, //关键
                date: dates.date,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
            myDate[id].end.config.start = { //将结束日的初始值设定为开始日
                year: dates.year,
                month: dates.month - 1, //关键
                date: dates.date,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }

    });
    myDate[id].end = laydate.render({
        elem: '#' + id + 'End',
        trigger: "click",
        type: 'datetime',
        done: function (value, dates) {
            if (value == "") {
                myDate[id].start.config.max = { //最打日期清空后
                    year: 2099,
                    month: 11, //关键
                    date: 30,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                };
                return
            }
            myDate[id].start.config.max = { //结束日选好后，重置开始日的最大日期
                year: dates.year,
                month: dates.month - 1, //关键
                date: dates.date,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }
    });
}

function waxImg(box) {
    box = box ? '.' + box : ""
    $(document).on('click', box + ' img', function () {
        var src = $(this).attr('src')
        var json = {
            "title": "", //相册标题
            "id": 123, //相册id
            "start": 0, //初始显示的图片序号，默认0
            "data": [ //相册包含的图片，数组格式
                {
                    "alt": "",
                    "pid": 666, //图片id
                    "src": src, //原图地址
                    "thumb": "" //缩略图地址
                }
            ]
        }
        if (src && src != 'null') {
            layui.layer.photos({
                photos: json,
                anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
            });
        }

    })
}

function getMenuBtn(fn) { //获取按钮权限

    $.ajax({
        url: serverPath + '/base/menu/api/findUserBtn?route=base',
        type: 'post',
        dateType: 'jsonp',
        data: {
            token: localStorage.getItem("tokens"),
            menu_id: getUrlParms("id"),
            channelId:channelId
        },
        success: function (res) {
            if (res.code == 10000) {
                if (res.data != null) {
                    var btnHtml = "";
                    for (var i = 0; i < res.data.length; i++) {
                        if (res.data[i].state == 0) {
                            continue
                        }
                        if (res.data[i].code == 'export' || res.data[i].code == 'import') {
                            $(".LM_top_button_left").append('<button class="layui-btn ' + res.data[i].code + '">' + res.data[i].BUTTON_NAME + '</button>');
                        } else {
                            btnHtml += '<button class="layui-btn ' + res.data[i].code + '">' + res.data[i].BUTTON_NAME + '</button>';
                        }
                    }
                    $(".btn-box").html(btnHtml);
                    layui.form.render();
                    if (fn) {
                        fn(res);
                    }
                }
                return res
            } else if (res.code == 99999) {
                exit();
            } else {
                layer.msg(res.msg)
            }
        },
        error: function (err) {
            layer.msg("出现错误")
        }
    })
}

function checkPhone(phone) {
    if ((/^1[3456789]\d{9}$/.test(phone))) {
        return false;
    }
    return true
}

function addDate(date, days) { //日期加减
    if (days == undefined || days == '') {
        days = 1;
    }
    var date = new Date(date);
    date.setDate(date.getDate() + parseInt(days));
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return date.getFullYear() + '-' + getFormatDate(month) + '-' + getFormatDate(day);
}

// 日期月份/天的显示，如果是1位数，则在前面加上'0'
function getFormatDate(arg) {
    if (arg == undefined || arg == '') {
        return '';
    }

    var re = arg + '';
    if (re.length < 2) {
        re = '0' + re;
    }

    return re;
}

function filter(str) //+ & 字符的传输
{
    str = str.replace(/\%/g, "%25");
    str = str.replace(/\+/g, "%2B");
    str = str.replace(/\&/g, "%26");
    return str;
}

function formatDate(str) {
    var datetime = new Date(str)
    var year = datetime.getFullYear(),
        month = (datetime.getMonth() + 1 < 10) ? '0' + (datetime.getMonth() + 1) : datetime.getMonth() + 1,
        day = datetime.getDate() < 10 ? '0' + datetime.getDate() : datetime.getDate(),
        hour = datetime.getHours() < 10 ? '0' + datetime.getHours() : datetime.getHours(),
        min = datetime.getMinutes() < 10 ? '0' + datetime.getMinutes() : datetime.getMinutes(),
        sec = datetime.getSeconds() < 10 ? '0' + datetime.getSeconds() : datetime.getSeconds();
    return year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec;
}

function editorInit(upload, editorId) {
    var editor = null;
    var E = window.wangEditor;
    editor = new E(editorId ? editorId : '#articleContent_edit_demo');
    editor.create();
    setTimeout(function () {

        var loadFlag = "" //上传图片  loading
        var uploadPicBtnEditor = upload.render({
            elem: '#imgMenuBtn',
            url: serverPath + '/base/base/api/uploadImg?route=base',
            before: function (obj) {
                loadFlag = layer.load(); //上传loading
            },
            data: {
                relative: "acticle",
                appCode: "acticle",
            },
            //开启多图片上传
            multiple: true,
            done: function (res) {
                //如果上传失败
                if (res.code != 10000) {
                    return layer.msg('上传失败');
                }
                //上传成功
                editor.cmd.do('insertHTML', '<img src=' + res.filePreviewPathFull + '>');
                layer.close(loadFlag);
            },
            error: function () {}
        });
    }, 600);

    return editor

}
import '../dist/layuiadmin/layui/layui.js'
layui.use(['index', 'user'], function () {
    const baseUrl = 'http://118.107.40.50:8080/'

    let $ajax = function (type, url, data, cb) {
        return new Promise((resolve, reject) => {

            if (type == 'get') {

                $.get({
                    url: baseUrl + url,
                    data: data,
                    dataType: 'get',
                    success: function (res) {
                        if (res.code) {

                        }
                        if (cb) {
                            cb()
                        }
                    }
                })
            } else {
                $.get({
                    url: baseUrl + url,
                    data: data,
                    dataType: 'post',
                    success: function () {
                        if (cb) {
                            cb()
                        }
                    }
                })
            }

        })
    }

});



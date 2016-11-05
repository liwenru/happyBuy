// 原生js封装AJAX方法
// 函数功能：封装兼容GET和POST方法的AJAX函数.

// 参数说明：
// 提交数据的方法：method;
// 提交地址：url;
// 提交的数据：jsonData;
// 逻辑处理函数：fn;

function ajaxFn(method, url, jsonData, fn) {
    // 1、创建ajax对象(不分GET还是POST)
    var xmlhttp = null;
    if (XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = ActiveXObject("Miscrosoft.XMLHTTP")
    }

    // 2、拼接数据字符串
    var arr = [];
    for (var key in jsonData) {
        var strData = key + "=" + jsonData[key];
        arr.push(strData);
    }
    var Data = arr.join("&");

    // 3、声明请求并发送(这时候需要判断是GET还是POST)
    if (method == "GET") {
        // url拼接GET参数
        xmlhttp.open("GET", url + "?" + Data, true);
        xmlhttp.send();
    } else {
       
        xmlhttp.open("POST", url, true);

         // 用POST需要设置编码格式(需要放到open之后)
        xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xmlhttp.send(Data);
    }

    // 4、读取服务器响应事件(on_ready_state_change)
    xmlhttp.onreadystatechange = function() {
        // 判断状态码(obj.readyState、obj.status)
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        	// 5、接收数据&处理数据
        	// var data = xmlhttp.responseText;   
        	// console.log(data);     	
        	var dataRecieve = JSON.parse(xmlhttp.responseText);
        	// console.log(dataRecieve);

        	// 6、逻辑处理函数
        	fn && fn(dataRecieve);

        }
    }
}
var show = function () {
    var date = new Date();
    var hour = date.getHours();
    hour = hour < 10 ? "0" + hour : hour;
    var minute = date.getMinutes();
    minute = minute < 10 ? "0" + minute : minute;
    var second = date.getSeconds();
    second = second < 10 ? "0" + second : second;
    result = hour + ":" + minute + ":" + second;
    document.getElementById("time").innerHTML = result;
}
show();
setInterval("show()", 1000);
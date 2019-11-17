//审核房源信息
function loadData() {
    $.get(
        "handleCheck.ashx",
        function (res, status, xhr) {
            if (res != "error") {
                var list = eval("(" + res + ")");
                alert("加载成功！");
                for (var i = 0; i < list.length; i++) {
                    var houseData = '<div><table class="table table-striped"><caption class="primary">出租信息' + (i + 1) + '' +
                        '</caption ><tbody><tr><td>姓名：</td><td>' + list[i].trueName + '</td></tr><tr><td>电话：</td><td>' + list[i].phone + '</td></tr>' +
                        '<tr><td>位置：</td><td>' + list[i].location + '</td></tr><tr><td>小区：</td><td>' + list[i].community + '</td></tr>' +
                        '</tbody ></table ><button class="btn btn-primary" style="float:right;" onclick="submit()">发布</button></div > ';
                    $("#checkList").append(houseData);
                }
            }
            else {
                alert("无房源信息！");
            }
        }
    );
}
function submit() {
    alert("发布成功！");
}
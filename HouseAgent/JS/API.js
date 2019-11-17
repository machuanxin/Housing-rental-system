// 百度地图API功能(地图初始化)
var map = new BMap.Map("allmap");    // 创建Map实例
map.centerAndZoom(new BMap.Point(114.024181, 30.641594), 11);  // 设置中心点坐标和地图缩放级别
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
//网址传参,接收参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
//获取全部数据
var all_list= null;
function get_data(callback) {
    var city_name = select_city();
    switch (true) {
        case city_name == "wuhan":
            $.get(
                "load_wuhan.ashx",
                function (res) {
                    if (res != "error") {
                        all_list = eval("(" + res + ")");
                        callback(all_list);
                    }
                }
            );
            break;
        case city_name == "xiangyang":
            $.get(
                "load_xiangyang.ashx",
                function (res) {
                    if (res != "error") {
                        all_list = eval("(" + res + ")");
                        callback(all_list);
                    }
                }
            );
            break;
        case city_name == "yichang":
            $.get(
                "load_yichang.ashx",
                function (res) {
                    if (res != "error") {
                        all_list = eval("(" + res + ")");
                        callback(all_list);
                    }
                }
            );
            break;
        case city_name == "huangshi":
            $.get(
                "load_huangshi.ashx",
                function (res) {
                    if (res != "error") {
                        all_list = eval("(" + res + ")");
                        callback(all_list);
                    }
                }
            );
            break;
    }
}
//切换城市
function city_change() {
    map.clearOverlays();
    $("#house_area").val(0);
    $("#house_type").val(0);
    $("#house_price").val(0);
    $("#wh_house_region").val(0);
    $("#xy_house_region").val(0);
    $("#yc_house_region").val(0);
    $("#hs_house_region").val(0);
    $("#wh_house_region").hide();
    $("#xy_house_region").hide();
    $("#yc_house_region").hide();
    $("#hs_house_region").hide();
    select_city();
    show_list();
}
//获取选择的城市，并初始化地图
var city_name = null;
function select_city() {
    switch (true) {
        case city.value == 0:
            city_name = "wuhan";
            map.centerAndZoom(new BMap.Point(114.024181, 30.641594), 11);  // 初始化地图,设置中心点坐标和地图级别
            $("#wh_house_region").show();
            $("#xy_house_region").hide();
            $("#yc_house_region").hide();
            $("#hs_house_region").hide();
            break;
        case city.value == 1:
            city_name = "xiangyang";
            map.centerAndZoom(new BMap.Point(112.016576, 32.066958), 12);
            $("#xy_house_region").show();
            $("#wh_house_region").hide();
            $("#yc_house_region").hide();
            $("#hs_house_region").hide();
            break;
        case city.value == 2:
            city_name = "yichang";
            map.centerAndZoom(new BMap.Point(111.137531, 30.703716), 12);
            $("#yc_house_region").show();
            $("#xy_house_region").hide();
            $("#wh_house_region").hide();
            $("#hs_house_region").hide();
            break;
        case city.value == 3:
            city_name = "huangshi";
            map.centerAndZoom(new BMap.Point(114.953245, 30.262528), 12);
            $("#hs_house_region").show();
            $("#xy_house_region").hide();
            $("#wh_house_region").hide();
            $("#yc_house_region").hide();
            break;
    }
    return city_name;
}
function show_list() {
    if ($("#map_list").find('div').length != 0) {
        $("#map_list").find('div').remove();
    }
    get_data(function (list) { 
        for (var i in list) {
            var j = list[i].id;
            var house = '<div style="height:110px;"><div style="float:left;margin:5px;"><img src="Images/' + j % 150 + '.jpg" alt="" style="width:150px;height:100px;"/></div>' +
                '<div style="float:left;margin:5px;"><a onclick="show_click(this)" class="text-warning" style="display: block;text-decoration:none;width:150px;font-size:13px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"> ' + list[i].HouseTitle + '</a><p style="font-size:12px;">' + list[i].HouseType + '' +
                '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="text-danger" style = "font-size:15px;"> ' + list[i].price + '</span></p > ' +
                '<p style="font-size:12px;">' + list[i].area + '&nbsp&nbsp' + list[i].floor + '&nbsp&nbsp' + list[i].toward + '</p><p style="width:150px;font-size:12px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">' + list[i].location + '&nbsp&nbsp' +
                '' + list[i].community + '</p></div>';
            $("#map_list").append(house);
        }
    });
}
//界面初始化
$(document).ready(function () {
    //获取定位城市
    var get_city = returnCitySN.cname.substring(3);
    //城市定位成功
    if (get_city != "") {
        switch (true) {
            case get_city == "武汉市":
                city_name = "wuhan";
                map.centerAndZoom(new BMap.Point(114.024181, 30.641594), 11);  // 初始化地图,设置中心点坐标和地图级别
                break;
            case get_city == "襄阳市":
                city_name = "xiangyang";
                map.centerAndZoom(new BMap.Point(112.016576, 32.066958), 12);
                break;
            case get_city == "宜昌市":
                city_name = "yichang";
                map.centerAndZoom(new BMap.Point(111.137531, 30.703716), 12);
                break;
            case get_city == "黄石市":
                city_name = "huangshi";
                map.centerAndZoom(new BMap.Point(114.953245, 30.262528), 12);
                break;
        }
   
    }
    //无法定位，默认为武汉市
    else {
        city_name = "wuhan";
        map.centerAndZoom(new BMap.Point(114.024181, 30.641594), 11);  // 初始化地图,设置中心点坐标和地图级别
    }
    //显示单个房源标注
    var i = getQueryString("i");        //传递参数，第几个房源信息
    var city_num = getQueryString("city"); //传递参数，定位城市
    if (city_num != null) {
        switch (true) {      //设定城市
            case city_num == 0:   //武汉
                $("#city").val(0);
                break;
            case city_num == 1:    //襄阳
                $("#city").val(1);
                break;
            case city_num == 2:   //宜昌
                $("#city").val(2);
                break;
            case city_num == 3:   //黄石
                $("#city").val(3);
                break;
        };
    }  
    if (i != null) {    //判定跳转是否带房源信息参数
        get_data(function (list) {
            var point = new BMap.Point(list[i].longtitude, list[i].latitude);
            var marker = new BMap.Marker(point);
            map.addOverlay(marker);
            var j = list[i].id;
            var content = '<div style=="margin:0;line-height:20px;padding:2px;"> ' +
                '<img src="Images/' + j % 150 + '.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:110px;height:110px;margin-left:2px;"/>' +
                '<p>地址：<span id="location">' + list[i].location + list[i].community + '</span></p><p>类型：<span id="HouseType">' + list[i].HouseType + '</span></p><p>面积：<span  id="area">' + list[i].area + '</span></p><p>价格：<span id="price">' + list[i].price + '' +
                '</span></p><p>房屋朝向：<span id="toward">' + list[i].toward + '</span></p><p>楼层：<span id="floor">' + list[i].floor + '</span></p><p>小区名称：<span id="community">' + list[i].community + '</span></p> ' +
                '</span></p><button class="collect btn btn-primary" style="float:right;" onclick="btnCollect_click()">收藏</button></div> ';
            // 创建检索信息窗口对象
            var searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
                title: '<span id="HouseTitle">' + list[i].HouseTitle + '</span>',      //标题
                width: 300,             //宽度
                height: 220,              //高度
                panel: "panel",         //检索结果面板`
                enableAutoPan: true,     //自动平移
                searchTypes: [
                    BMAPLIB_TAB_SEARCH,   //周边检索
                    BMAPLIB_TAB_TO_HERE,  //到这里去
                    BMAPLIB_TAB_FROM_HERE //从这里出发
                ]
            });
            searchInfoWindow.open(point);
        });
    }
    //注册登录功能显示
    if ($("#user").text() == "") {
    $("#login_register").show();
    }
    else {
    $("#quit").show();
    $("#identity").show();
    } 
    //左侧列表显示
    show_list();
});
//退出登录
$("#quit_login").click(function () {
    $("#login_register").show();
    $("#quit").hide();
    $("#identity").hide();
});
//菜单---我的收藏
$("#myCol").click(function () {
    $("#window_box").show();
    $("#myCollection").show();
    $("#route_search").hide();
});
//路径规划
$("#route").click(function () {
    $("#window_box").show();
    $("#myCollection").hide();
    $("#route_search").show();
});
//左侧窗口关闭
$("#window_close").click(function () {
    $("#window_box").slideToggle('fast');
});
//一、功能函数
//获取坐标
function showCoordinate() {
    map.addEventListener("click", function A(e) {
        alert("该点的坐标是：" + e.point.lng + "," + e.point.lat);
        map.removeEventListener("click", A);
    });
}
//距离量算
function getDistance() {
    var myDis = new BMapLib.DistanceTool(map, { lineStroke: 2 });
    myDis.open();  //开启鼠标测距
    map.removeEventListener("click", measure);//自动关闭此功能， 
}
//拉框放大
function bigger() {
    var myDrag = new BMapLib.RectangleZoom(map, {
        followText: "拉框放大", autoClose: true
    });
    myDrag.open();  //开启拉框放大
}
//添加文本标注
function txtMark() {
    map.addEventListener("click", function A(e) {
        var point = new BMap.Point(e.point.lng, e.point.lat);
        var marker = new BMap.Marker(point);
        map.addOverlay(marker);
        map.removeEventListener("click", A);
        var label = new BMap.Label("我是心仪房源哦", { offset: new BMap.Size(20, -10) });
        marker.setLabel(label);
        label.setStyle({ maxWidth: "none" });
    });
}
//点击显示信息窗口
function pointInfo(e) {
    var city_name = select_city();
    $.get(
         "load_" + city_name +".ashx",
        function (res) {
            if (res != "error") {
                var list = eval("(" + res + ")");
                for (var i in list) {
                    if (e.point.lng == list[i].longtitude) {    
                        var j = list[i].id;
                        var content = '<div style=="margin:0;line-height:20px;padding:2px;"> ' +
                            '<img src="Images/' + j % 150+'.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:110px;height:110px;margin-left:2px;"/>' +
                            '<p>地址：<span id="location">' + list[i].location + list[i].community + '</span></p><p>类型：<span id="HouseType">' + list[i].HouseType + '</span></p><p>面积：<span  id="area">' + list[i].area + '</span></p><p>价格：<span id="price">' + list[i].price + '' +
                            '</span></p><p>房屋朝向：<span id="toward">' + list[i].toward + '</span></p><p>楼层：<span id="floor">' + list[i].floor + '</span></p><p>小区名称：<span id="community">' + list[i].community + '</span></p> ' +
                            '</span></p><button class="collect btn btn-primary" style="float:right;" onclick="btnCollect_click()">收藏</button></div> ';
                        // 创建检索信息窗口对象
                        var searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
                            title: '<span id="HouseTitle">' + list[i].HouseTitle + '</span>',      //标题
                            width: 300,             //宽度
                            height: 220,              //高度
                            panel: "panel",         //检索结果面板`
                            enableAutoPan: true,     //自动平移
                            searchTypes: [
                                BMAPLIB_TAB_SEARCH,   //周边检索
                                BMAPLIB_TAB_TO_HERE,  //到这里去
                                BMAPLIB_TAB_FROM_HERE //从这里出发
                            ]
                        });
                        var poi = new BMap.Point(e.point.lng, e.point.lat);
                        searchInfoWindow.open(poi);
                    }
                }
            }
        }
    );
    
}
//区域搜索
function regionSearch() {
    map.clearOverlays();    //清除地图上所有覆盖物
    var styleOptions = {
        strokeColor: "red",    //边线颜色。
        strokeWeight: 3,       //边线的宽度，以像素为单位。
        strokeOpacity: 0.8,	   //边线透明度，取值范围0 - 1。
        fillOpacity: 0.1,      //填充的透明度，取值范围0 - 1。
        strokeStyle: 'solid' //边线的样式，solid或dashed。
    }
    //实例化鼠标绘制工具
    var drawingManager = new BMapLib.DrawingManager(map, {
        isOpen: false, //是否开启绘制模式
        enableDrawingTool: true, //是否显示工具栏
        drawingToolOptions: {
            anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
            offset: new BMap.Size(50, 100), //偏离值
            drawingModes: [BMAP_DRAWING_RECTANGLE, BMAP_DRAWING_CIRCLE, BMAP_DRAWING_POLYGON]
        },
        circleOptions: styleOptions, //圆的样式
        polygonOptions: styleOptions, //多边形的样式
        rectangleOptions: styleOptions //矩形的样式
    });
    drawingManager.addEventListener('overlaycomplete', function (e) {  //添加鼠标绘制工具监听事件，用于获制结果
        drawingManager.close();
        if (drawingManager.getDrawingMode() === BMAP_DRAWING_CIRCLE) {
            var points = [];  // 添加海量点数据
            var city_name = select_city();
             $.get(
                 "load_" + city_name +".ashx",
                function (res) {
                    if (res != "error") {
                        var list = eval("(" + res + ")");
                        for (var i in list) {
                            var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                            if (BMapLib.GeoUtils.isPointInCircle(point, e.overlay)) {
                                points.push(point);
                            }
                        }
                        //图形范围内绘制海量点   
                        if (document.createElement('canvas').getContext) {  // 判断当前浏览器是否支持绘制海量点
                            var options = {
                                size: BMAP_POINT_SIZE_BIG,
                                shape: BMAP_POINT_SHAPE_WATERDROP,
                            }
                            var pointCollection = new BMap.PointCollection(points, options);  // 初始化PointCollection
                            pointCollection.addEventListener('click', pointInfo);
                            map.addOverlay(pointCollection);  // 添加Overlay                                                  
                        }
                        else {
                            alert('请在chrome、safari、IE8+以上浏览器查看本示例');
                        }
                    }
                }
            );  
        }
        else if (drawingManager.getDrawingMode() === BMAP_DRAWING_POLYGON || BMAP_DRAWING_RECTANGLE) {
            var points = [];  // 添加海量点数据
            var city_name = select_city();
            $.get(
                 "load_" + city_name +".ashx",
                function (res) {
                    if (res != "error") {
                        var list = eval("(" + res + ")");
                        for (var i in list) {
                            var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                            if (BMapLib.GeoUtils.isPointInPolygon(point, e.overlay)) {
                                points.push(point);
                            }
                        }
                        //图形范围内绘制海量点   
                        if (document.createElement('canvas').getContext) {  // 判断当前浏览器是否支持绘制海量点
                            var options = {
                                size: BMAP_POINT_SIZE_BIG,
                                shape: BMAP_POINT_SHAPE_WATERDROP,
                            }
                            var pointCollection = new BMap.PointCollection(points, options);  // 初始化PointCollection
                            pointCollection.addEventListener('click', pointInfo);
                            map.addOverlay(pointCollection);  // 添加Overlay
                        }
                        else {
                            alert('请在chrome、safari、IE8+以上浏览器查看本示例');
                        }
                    }
                }
            );  
        }
    });
}
//我的收藏
var m = 1;
var collections = new Array();
function btnCollect_click() {
    collections[m] = $("#HouseTitle").html();
    alert("收藏成功！");
    var collects = '<div id="collect' + m + '"><table class="table table-striped"><caption><span  class="collectNum" style="margin-left:5px;" >收藏房源' + m + '</span>' +
        '</caption ><tbody><tr><td><a class="title" onclick="show_click(this)">' + collections[m]  + '</a></td></tr></tbody></table ></div>';
    $("#collectList").append(collects);
    m++;
}
function show_click(target) {
    map.clearOverlays();
    get_data(function (list) {
        for (var i in list) {
            if ($.trim(target.text)== list[i].HouseTitle) {
                var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                var marker = new BMap.Marker(point);
                map.addOverlay(marker);  
                var j = list[i].id;
                var content = '<div style=="margin:0;line-height:20px;padding:2px;"> ' +
                    '<img src="Images/' + j % 150 + '.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:110px;height:110px;margin-left:2px;"/>' +
                    '<p>地址：<span id="location">' + list[i].location + list[i].community + '</span></p><p>类型：<span id="HouseType">' + list[i].HouseType + '</span></p><p>面积：<span  id="area">' + list[i].area + '</span></p><p>价格：<span id="price">' + list[i].price + '' +
                    '</span></p><p>房屋朝向：<span id="toward">' + list[i].toward + '</span></p><p>楼层：<span id="floor">' + list[i].floor + '</span></p><p>小区名称：<span id="community">' + list[i].community + '</span></p>' +
                    '<button class="collect btn btn-primary" style="float:right;" onclick="btnCollect_click()">收藏</button></div> ';
                // 创建检索信息窗口对象
                var searchInfoWindow = null;
                searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
                    title: '<span id="HouseTitle">' + list[i].HouseTitle + '</span>',      //标题
                    width: 300,             //宽度
                    height: 220,              //高度
                    panel: "panel",         //检索结果面板`
                    enableAutoPan: true,     //自动平移
                    searchTypes: [
                        BMAPLIB_TAB_SEARCH,   //周边检索
                        BMAPLIB_TAB_TO_HERE,  //到这里去
                        BMAPLIB_TAB_FROM_HERE //从这里出发
                    ]
                });
                var poi = new BMap.Point(list[i].longtitude, list[i].latitude);
                searchInfoWindow.open(poi);
            }
        }
    });   
}
//8.路径规划
var transit = new BMap.TransitRoute(map, { renderOptions: { map: map, panel: "route_result", autoViewport: true } });
var driving = new BMap.DrivingRoute(map, { renderOptions: { map: map, panel: "route_result", autoViewport: true } });
var walking = new BMap.WalkingRoute(map, { renderOptions: { map: map, panel: "route_result", autoViewport: true } });
$("#busQuery").click(function () {
    map.clearOverlays();
    var startTxt = $('#route_start').val();
    var endTxt = $('#route_end').val();
    transit.search(startTxt, endTxt);
    $("#route_result").show();
});
$("#carQuery").click(function () {
    map.clearOverlays();
    var startTxt = $('#route_start').val();
    var endTxt = $('#route_end').val();
    driving.search(startTxt, endTxt);
    $("#route_result").show();
});
$("#walkQuery").click(function () {
    map.clearOverlays();
    var startTxt = $('#route_start').val();
    var endTxt = $('#route_end').val();
    walking.search(startTxt, endTxt);
    $("#route_result").show();
});
//列表选房
$("#list_choose").click(function () {
    window.location.href = "Hb_main.aspx?city_return=" + select_city();
});

//面积选房
function house_area_change() {
    if ($("#map_list").find('div').length != 0) {
        $("#map_list").find('div').remove();
    }
    else {
        alert("没有符合条件的房源信息！");
    }
    $("#house_type").val(0);
    $("#wh_house_region").val(0);
    $("#xy_house_region").val(0);
    $("#yc_house_region").val(0);
    $("#hs_house_region").val(0);
    $("#house_price").val(0);
    var points = [];  // 添加海量点数据
    map.clearOverlays();
    get_data(function (list) {     
        switch (true) {
            case house_area.value == 0:
                for (var i in list) {
                    var j = list[i].id;
                    var house = '<div style="height:110px;"><div style="float:left;margin:5px;"><img src="Images/' + j % 150 + '.jpg" alt="" style="width:150px;height:100px;"/></div>' +
                        '<div style="float:left;margin:5px;"><a onclick="show_click(this)" class="text-warning" style="display: block;text-decoration:none;width:150px;font-size:13px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"> ' + list[i].HouseTitle + '</a><p style="font-size:12px;">' + list[i].HouseType + '' +
                        '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="text-danger" style = "font-size:15px;"> ' + list[i].price + '</span></p > ' +
                        '<p style="font-size:12px;">' + list[i].area + '&nbsp&nbsp' + list[i].floor + '&nbsp&nbsp' + list[i].toward + '</p><p style="width:150px;font-size:12px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">' + list[i].location + '&nbsp&nbsp' +
                        '' + list[i].community + '</p></div>';
                    var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                    points.push(point);
                    $("#map_list").append(house);
                }
                break;
            case house_area.value == 1:
                for (var i in list) {
                    var j = list[i].id;
                    var house = '<div style="height:110px;"><div style="float:left;margin:5px;"><img src="Images/' + j % 150 + '.jpg" alt="" style="width:150px;height:100px;"/></div>' +
                        '<div style="float:left;margin:5px;"><a onclick="show_click(this)" class="text-warning" style="display: block;text-decoration:none;width:150px;font-size:13px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"> ' + list[i].HouseTitle + '</a><p style="font-size:12px;">' + list[i].HouseType + '' +
                        '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="text-danger" style = "font-size:15px;"> ' + list[i].price + '</span></p > ' +
                        '<p style="font-size:12px;">' + list[i].area + '&nbsp&nbsp' + list[i].floor + '&nbsp&nbsp' + list[i].toward + '</p><p style="width:150px;font-size:12px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">' + list[i].location + '&nbsp&nbsp' +
                        '' + list[i].community + '</p></div>';
                    if (parseFloat(list[i].area) < 30) {
                        var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                        points.push(point);
                        $("#map_list").append(house);
                    }
                }
                break;
            case house_area.value == 2:
                for (var i in list) {
                    var j = list[i].id;
                    var house = '<div style="height:110px;"><div style="float:left;margin:5px;"><img src="Images/' + j % 150 + '.jpg" alt="" style="width:150px;height:100px;"/></div>' +
                        '<div style="float:left;margin:5px;"><a onclick="show_click(this)" class="text-warning" style="display: block;text-decoration:none;width:150px;font-size:13px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"> ' + list[i].HouseTitle + '</a><p style="font-size:12px;">' + list[i].HouseType + '' +
                        '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="text-danger" style = "font-size:15px;"> ' + list[i].price + '</span></p > ' +
                        '<p style="font-size:12px;">' + list[i].area + '&nbsp&nbsp' + list[i].floor + '&nbsp&nbsp' + list[i].toward + '</p><p style="width:150px;font-size:12px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">' + list[i].location + '&nbsp&nbsp' +
                        '' + list[i].community + '</p></div>';
                    if (parseFloat(list[i].area) > 30 && parseFloat(list[i].area) < 50) {
                        var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                        points.push(point);
                        $("#map_list").append(house);
                    }
                }
                break;
            case house_area.value == 3:
                for (var i in list) {
                    var j = list[i].id;
                    var house = '<div style="height:110px;"><div style="float:left;margin:5px;"><img src="Images/' + j % 150 + '.jpg" alt="" style="width:150px;height:100px;"/></div>' +
                        '<div style="float:left;margin:5px;"><a onclick="show_click(this)" class="text-warning" style="display: block;text-decoration:none;width:150px;font-size:13px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"> ' + list[i].HouseTitle + '</a><p style="font-size:12px;">' + list[i].HouseType + '' +
                        '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="text-danger" style = "font-size:15px;"> ' + list[i].price + '</span></p > ' +
                        '<p style="font-size:12px;">' + list[i].area + '&nbsp&nbsp' + list[i].floor + '&nbsp&nbsp' + list[i].toward + '</p><p style="width:150px;font-size:12px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">' + list[i].location + '&nbsp&nbsp' +
                        '' + list[i].community + '</p></div>';
                    if (parseFloat(list[i].area) > 50 && parseFloat(list[i].area) < 70) {
                        var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                        points.push(point);
                        $("#map_list").append(house);
                    }
                }
                break;
            case house_area.value == 4:
                for (var i in list) {
                    var j = list[i].id;
                    var house = '<div style="height:110px;"><div style="float:left;margin:5px;"><img src="Images/' + j % 150 + '.jpg" alt="" style="width:150px;height:100px;"/></div>' +
                        '<div style="float:left;margin:5px;"><a onclick="show_click(this)" class="text-warning" style="display: block;text-decoration:none;width:150px;font-size:13px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"> ' + list[i].HouseTitle + '</a><p style="font-size:12px;">' + list[i].HouseType + '' +
                        '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="text-danger" style = "font-size:15px;"> ' + list[i].price + '</span></p > ' +
                        '<p style="font-size:12px;">' + list[i].area + '&nbsp&nbsp' + list[i].floor + '&nbsp&nbsp' + list[i].toward + '</p><p style="width:150px;font-size:12px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">' + list[i].location + '&nbsp&nbsp' +
                        '' + list[i].community + '</p></div>';
                    if (parseFloat(list[i].area) > 70 && parseFloat(list[i].area) < 90) {
                        var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                        points.push(point);
                        $("#map_list").append(house);
                    }
                }
                break;
            case house_area.value == 5:
                for (var i in list) {
                    var j = list[i].id;
                    var house = '<div style="height:110px;"><div style="float:left;margin:5px;"><img src="Images/' + j % 150 + '.jpg" alt="" style="width:150px;height:100px;"/></div>' +
                        '<div style="float:left;margin:5px;"><a onclick="show_click(this)" class="text-warning" style="display: block;text-decoration:none;width:150px;font-size:13px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"> ' + list[i].HouseTitle + '</a><p style="font-size:12px;">' + list[i].HouseType + '' +
                        '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="text-danger" style = "font-size:15px;"> ' + list[i].price + '</span></p > ' +
                        '<p style="font-size:12px;">' + list[i].area + '&nbsp&nbsp' + list[i].floor + '&nbsp&nbsp' + list[i].toward + '</p><p style="width:150px;font-size:12px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">' + list[i].location + '&nbsp&nbsp' +
                        '' + list[i].community + '</p></div>';
                    if (parseFloat(list[i].area) > 90) {
                        var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                        points.push(point);
                        $("#map_list").append(house);
                    }
                }
                break;
            default:
                alert("error");
                break;
        }
        //图形范围内绘制海量点   
        if (document.createElement('canvas').getContext) {  // 判断当前浏览器是否支持绘制海量点
            var options = {
                size: BMAP_POINT_SIZE_BIG,
                shape: BMAP_POINT_SHAPE_WATERDROP,
            }
            var pointCollection = new BMap.PointCollection(points, options);  // 初始化PointCollection
            pointCollection.addEventListener('click', pointInfo);
            map.addOverlay(pointCollection);  // 添加Overlay
        }
        else {
            alert('请在chrome、safari、IE8+以上浏览器查看本示例');
        }
    });
    return points;
}
//户型选房
function house_type_change() {
    if ($("#map_list").find('div').length != 0) {
        $("#map_list").find('div').remove();
    }
    else {
        alert("没有符合条件的房源信息！");
    }
    $("#house_area").val(0);
    $("#wh_house_region").val(0);
    $("#xy_house_region").val(0);
    $("#yc_house_region").val(0);
    $("#hs_house_region").val(0);
    $("#house_price").val(0);
    map.clearOverlays();
    var city_name = select_city();
    $.get(
        "load_" + city_name + ".ashx",
        function (res) {
            if (res != "error") {
                var list = eval("(" + res + ")");
                var points = [];  // 添加海量点数据
                switch (true) {
                    case house_type.value == 0:
                        for (var i in list) {
                            var j = list[i].id;
                            var house = '<div style="height:110px;"><div style="float:left;margin:5px;"><img src="Images/' + j % 150 + '.jpg" alt="" style="width:150px;height:100px;"/></div>' +
                                '<div style="float:left;margin:5px;"><a onclick="show_click(this)" class="text-warning" style="display: block;text-decoration:none;width:150px;font-size:13px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"> ' + list[i].HouseTitle + '</a><p style="font-size:12px;">' + list[i].HouseType + '' +
                                '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="text-danger" style = "font-size:15px;"> ' + list[i].price + '</span></p > ' +
                                '<p style="font-size:12px;">' + list[i].area + '&nbsp&nbsp' + list[i].floor + '&nbsp&nbsp' + list[i].toward + '</p><p style="width:150px;font-size:12px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">' + list[i].location + '&nbsp&nbsp' +
                                '' + list[i].community + '</p></div>';
                            var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                            points.push(point);
                            $("#map_list").append(house);
                        }
                        break;
                    case house_type.value == 1:
                        for (var i in list) {
                            var j = list[i].id;
                            var house = '<div style="height:110px;"><div style="float:left;margin:5px;"><img src="Images/' + j % 150 + '.jpg" alt="" style="width:150px;height:100px;"/></div>' +
                                '<div style="float:left;margin:5px;"><a onclick="show_click(this)" class="text-warning" style="display: block;text-decoration:none;width:150px;font-size:13px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"> ' + list[i].HouseTitle + '</a><p style="font-size:12px;">' + list[i].HouseType + '' +
                                '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="text-danger" style = "font-size:15px;"> ' + list[i].price + '</span></p > ' +
                                '<p style="font-size:12px;">' + list[i].area + '&nbsp&nbsp' + list[i].floor + '&nbsp&nbsp' + list[i].toward + '</p><p style="width:150px;font-size:12px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">' + list[i].location + '&nbsp&nbsp' +
                                '' + list[i].community + '</p></div>';
                            if (parseFloat(list[i].HouseType)==1) {
                                var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                points.push(point);
                                $("#map_list").append(house);
                            }
                        }
                        break;
                    case house_type.value == 2:
                        for (var i in list) {
                            var j = list[i].id;
                            var house = '<div style="height:110px;"><div style="float:left;margin:5px;"><img src="Images/' + j % 150 + '.jpg" alt="" style="width:150px;height:100px;"/></div>' +
                                '<div style="float:left;margin:5px;"><a onclick="show_click(this)" class="text-warning" style="display: block;text-decoration:none;width:150px;font-size:13px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"> ' + list[i].HouseTitle + '</a><p style="font-size:12px;">' + list[i].HouseType + '' +
                                '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="text-danger" style = "font-size:15px;"> ' + list[i].price + '</span></p > ' +
                                '<p style="font-size:12px;">' + list[i].area + '&nbsp&nbsp' + list[i].floor + '&nbsp&nbsp' + list[i].toward + '</p><p style="width:150px;font-size:12px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">' + list[i].location + '&nbsp&nbsp' +
                                '' + list[i].community + '</p></div>';
                            if (parseFloat(list[i].HouseType) == 2) {
                                var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                points.push(point);
                                $("#map_list").append(house);
                            }
                        }
                        break;
                    case house_type.value == 3:
                        for (var i in list) {
                            var j = list[i].id;
                            var house = '<div style="height:110px;"><div style="float:left;margin:5px;"><img src="Images/' + j % 150 + '.jpg" alt="" style="width:150px;height:100px;"/></div>' +
                                '<div style="float:left;margin:5px;"><a onclick="show_click(this)" class="text-warning" style="display: block;text-decoration:none;width:150px;font-size:13px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"> ' + list[i].HouseTitle + '</a><p style="font-size:12px;">' + list[i].HouseType + '' +
                                '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="text-danger" style = "font-size:15px;"> ' + list[i].price + '</span></p > ' +
                                '<p style="font-size:12px;">' + list[i].area + '&nbsp&nbsp' + list[i].floor + '&nbsp&nbsp' + list[i].toward + '</p><p style="width:150px;font-size:12px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">' + list[i].location + '&nbsp&nbsp' +
                                '' + list[i].community + '</p></div>';
                            if (parseFloat(list[i].HouseType) == 3) {
                                var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                points.push(point);
                                $("#map_list").append(house);
                            }
                        }
                        break;
                    case house_type.value == 4:
                        for (var i in list) {
                            var j = list[i].id;
                            var house = '<div style="height:110px;"><div style="float:left;margin:5px;"><img src="Images/' + j % 150 + '.jpg" alt="" style="width:150px;height:100px;"/></div>' +
                                '<div style="float:left;margin:5px;"><a onclick="show_click(this)" class="text-warning" style="display: block;text-decoration:none;width:150px;font-size:13px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"> ' + list[i].HouseTitle + '</a><p style="font-size:12px;">' + list[i].HouseType + '' +
                                '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="text-danger" style = "font-size:15px;"> ' + list[i].price + '</span></p > ' +
                                '<p style="font-size:12px;">' + list[i].area + '&nbsp&nbsp' + list[i].floor + '&nbsp&nbsp' + list[i].toward + '</p><p style="width:150px;font-size:12px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">' + list[i].location + '&nbsp&nbsp' +
                                '' + list[i].community + '</p></div>';
                            if (parseFloat(list[i].HouseType) >3) {
                                var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                points.push(point);
                                $("#map_list").append(house);
                            }
                        }
                        break;
                    default:
                        alert("error");
                        break;
                }
                //图形范围内绘制海量点   
                if (document.createElement('canvas').getContext) {  // 判断当前浏览器是否支持绘制海量点
                    var options = {
                        size: BMAP_POINT_SIZE_BIG,
                        shape: BMAP_POINT_SHAPE_WATERDROP,
                    }
                    var pointCollection = new BMap.PointCollection(points, options);  // 初始化PointCollection
                    pointCollection.addEventListener('click', pointInfo);
                    map.addOverlay(pointCollection);  // 添加Overlay
                }
                else {
                    alert('请在chrome、safari、IE8+以上浏览器查看本示例');
                }
            }
        }
    );
}
//价格选房
function house_price_change() {
    if ($("#map_list").find('div').length != 0) {
        $("#map_list").find('div').remove();
    }
    else {
        alert("没有符合条件的房源信息！");
    }
    $("#house_type").val(0);
    $("#wh_house_region").val(0);
    $("#xy_house_region").val(0);
    $("#yc_house_region").val(0);
    $("#hs_house_region").val(0);
    $("#house_area").val(0);
    map.clearOverlays();
    var city_name = select_city();
    $.get(
        "load_" + city_name + ".ashx",
        function (res) {
            if (res != "error") {
                var list = eval("(" + res + ")");
                var points = [];  // 添加海量点数据
                switch (true) {
                    case house_price.value == 0:
                        for (var i in list) {
                            var j = list[i].id;
                            var house = '<div style="height:110px;"><div style="float:left;margin:5px;"><img src="Images/' + j % 150 + '.jpg" alt="" style="width:150px;height:100px;"/></div>' +
                                '<div style="float:left;margin:5px;"><a onclick="show_click(this)" class="text-warning" style="display: block;text-decoration:none;width:150px;font-size:13px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"> ' + list[i].HouseTitle + '</a><p style="font-size:12px;">' + list[i].HouseType + '' +
                                '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="text-danger" style = "font-size:15px;"> ' + list[i].price + '</span></p > ' +
                                '<p style="font-size:12px;">' + list[i].area + '&nbsp&nbsp' + list[i].floor + '&nbsp&nbsp' + list[i].toward + '</p><p style="width:150px;font-size:12px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">' + list[i].location + '&nbsp&nbsp' +
                                '' + list[i].community + '</p></div>';
                            var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                            points.push(point);
                            $("#map_list").append(house);

                        }
                        break;
                    case house_price.value == 1:
                        for (var i in list) {
                            var j = list[i].id;
                            var house = '<div style="height:110px;"><div style="float:left;margin:5px;"><img src="Images/' + j % 150 + '.jpg" alt="" style="width:150px;height:100px;"/></div>' +
                                '<div style="float:left;margin:5px;"><a onclick="show_click(this)" class="text-warning" style="display: block;text-decoration:none;width:150px;font-size:13px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"> ' + list[i].HouseTitle + '</a><p style="font-size:12px;">' + list[i].HouseType + '' +
                                '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="text-danger" style = "font-size:15px;"> ' + list[i].price + '</span></p > ' +
                                '<p style="font-size:12px;">' + list[i].area + '&nbsp&nbsp' + list[i].floor + '&nbsp&nbsp' + list[i].toward + '</p><p style="width:150px;font-size:12px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">' + list[i].location + '&nbsp&nbsp' +
                                '' + list[i].community + '</p></div>';
                            var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                            if (parseFloat(list[i].price) <= 1000) {
                                points.push(point);
                                $("#map_list").append(house);
                            }
                        }
                        break;
                    case house_price.value == 2:
                        for (var i in list) {
                            var j = list[i].id;
                            var house = '<div style="height:110px;"><div style="float:left;margin:5px;"><img src="Images/' + j % 150 + '.jpg" alt="" style="width:150px;height:100px;"/></div>' +
                                '<div style="float:left;margin:5px;"><a onclick="show_click(this)" class="text-warning" style="display: block;text-decoration:none;width:150px;font-size:13px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"> ' + list[i].HouseTitle + '</a><p style="font-size:12px;">' + list[i].HouseType + '' +
                                '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="text-danger" style = "font-size:15px;"> ' + list[i].price + '</span></p > ' +
                                '<p style="font-size:12px;">' + list[i].area + '&nbsp&nbsp' + list[i].floor + '&nbsp&nbsp' + list[i].toward + '</p><p style="width:150px;font-size:12px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">' + list[i].location + '&nbsp&nbsp' +
                                '' + list[i].community + '</p></div>';
                            if (parseFloat(list[i].price) > 1000 && parseFloat(list[i].price) <= 1500) {
                                var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                points.push(point);
                                $("#map_list").append(house);
                            }
                        }
                        break;
                    case house_price.value == 3:
                        for (var i in list) {
                            var j = list[i].id;
                            var house = '<div style="height:110px;"><div style="float:left;margin:5px;"><img src="Images/' + j % 150 + '.jpg" alt="" style="width:150px;height:100px;"/></div>' +
                                '<div style="float:left;margin:5px;"><a onclick="show_click(this)" class="text-warning" style="display: block;text-decoration:none;width:150px;font-size:13px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"> ' + list[i].HouseTitle + '</a><p style="font-size:12px;">' + list[i].HouseType + '' +
                                '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="text-danger" style = "font-size:15px;"> ' + list[i].price + '</span></p > ' +
                                '<p style="font-size:12px;">' + list[i].area + '&nbsp&nbsp' + list[i].floor + '&nbsp&nbsp' + list[i].toward + '</p><p style="width:150px;font-size:12px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">' + list[i].location + '&nbsp&nbsp' +
                                '' + list[i].community + '</p></div>';
                            if (parseFloat(list[i].price) >= 1500) {
                                var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                points.push(point);
                                $("#map_list").append(house);
                            }
                        }
                        break;
                    default:
                        alert("error");
                        break;
                }
                //图形范围内绘制海量点   
                if (document.createElement('canvas').getContext) {  // 判断当前浏览器是否支持绘制海量点
                    var options = {
                        size: BMAP_POINT_SIZE_BIG,
                        shape: BMAP_POINT_SHAPE_WATERDROP,
                    }
                    var pointCollection = new BMap.PointCollection(points, options);  // 初始化PointCollection
                    pointCollection.addEventListener('click', pointInfo);
                    map.addOverlay(pointCollection);  // 添加Overlay
                }
                else {
                    alert('请在chrome、safari、IE8+以上浏览器查看本示例');
                }
            }
        }
    );
}
//位置选房
function house_region_change() {
    if ($("#map_list").find('div').length != 0) {
        $("#map_list").find('div').remove();
    }
    else {
        alert("没有符合条件的房源信息！");
    }
    $("#house_area").val(0);
    $("#house_type").val(0);
    $("#house_price").val(0);
    map.clearOverlays();
    var city_name = select_city();
    var points = [];  // 添加海量点数据
    switch (true) {
        case city_name == "wuhan":
            $.get(
                "load_wuhan.ashx",
                function (res) {
                    if (res != "error") {
                        var list = eval("(" + res + ")");
                        for (var i in list) {
                            var j = list[i].id;
                            var house = '<div style="height:110px;"><div style="float:left;margin:5px;"><img src="Images/' + j % 150 + '.jpg" alt="" style="width:150px;height:100px;"/></div>' +
                                '<div style="float:left;margin:5px;"><a onclick="show_click(this)" class="text-warning" style="display: block;text-decoration:none;width:150px;font-size:13px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"> ' + list[i].HouseTitle + '</a><p style="font-size:12px;">' + list[i].HouseType + '' +
                                '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="text-danger" style = "font-size:15px;"> ' + list[i].price + '</span></p > ' +
                                '<p style="font-size:12px;">' + list[i].area + '&nbsp&nbsp' + list[i].floor + '&nbsp&nbsp' + list[i].toward + '</p><p style="width:150px;font-size:12px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">' + list[i].location + '&nbsp&nbsp' +
                                '' + list[i].community + '</p></div>';
                            switch (true) {
                                case wh_house_region.value == 0:
                                    var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                    points.push(point);
                                    $("#map_list").append(house);
                                    break;
                                case wh_house_region.value == 1:
                                    if (list[i].region == "江汉") {
                                        var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                        points.push(point);
                                        $("#map_list").append(house);
                                   }
                                    break;
                                case wh_house_region.value == 2:
                                    if (list[i].region == "江岸") {
                                        var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                        points.push(point);
                                        $("#map_list").append(house);
                                    }
                                    break;
                                case wh_house_region.value == 3:
                                    if (list[i].region == "硚口") {
                                        var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                        points.push(point);
                                        $("#map_list").append(house);
                                    }
                                    break;
                                case wh_house_region.value == 4:
                                    if (list[i].region == "东西湖") {
                                        var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                        points.push(point);
                                        $("#map_list").append(house);
                                    }
                                    break;
                                case wh_house_region.value == 5:
                                    if (list[i].region == "武昌") {
                                        var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                        points.push(point);
                                        $("#map_list").append(house);
                                    }
                                    break;
                                case wh_house_region.value == 6:
                                    if (list[i].region == "青山") {
                                        var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                        points.push(point);
                                        $("#map_list").append(house);
                                    }
                                    break;
                                case wh_house_region.value == 7:
                                    if (list[i].region == "洪山") {
                                        var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                        points.push(point);
                                        $("#map_list").append(house);
                                    }
                                    break;
                                case wh_house_region.value == 8:
                                    if (list[i].region == "汉阳") {
                                        var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                        points.push(point);
                                        $("#map_list").append(house);
                                    }
                                    break;
                                case wh_house_region.value == 9:
                                    if (list[i].region == "东湖高新") {
                                        var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                        points.push(point);
                                        $("#map_list").append(house);
                                    }
                                    break;
                                case wh_house_region.value == 10:
                                    if (list[i].region == "江夏") {
                                        var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                        points.push(point);
                                        $("#map_list").append(house);
                                    }
                                    break;
                                case wh_house_region.value == 11:
                                    if (list[i].region == "蔡甸") {
                                        var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                        points.push(point);
                                        $("#map_list").append(house);
                                    }
                                    break;
                                case wh_house_region.value == 12:
                                    if (list[i].region == "黄陂") {
                                        var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                        points.push(point);
                                        $("#map_list").append(house);
                                    }
                                    break;
                                case wh_house_region.value == 13:
                                    if (list[i].region == "新洲") {
                                        var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                        points.push(point);
                                        $("#map_list").append(house);
                                    }
                                    break;
                                case wh_house_region.value == 14:
                                    if (list[i].region == "沌口开发区") {
                                        var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                        points.push(point);
                                        $("#map_list").append(house);
                                    }
                                    break;
                                default:
                                    alert("error")
                                    break;
                            }
                        }
                    }
                    //图形范围内绘制海量点   
                    if (document.createElement('canvas').getContext) {  // 判断当前浏览器是否支持绘制海量点
                        var options = {
                            size: BMAP_POINT_SIZE_BIG,
                            shape: BMAP_POINT_SHAPE_WATERDROP,
                        }
                        var pointCollection = new BMap.PointCollection(points, options);  // 初始化PointCollection
                        pointCollection.addEventListener('click', pointInfo);
                        map.addOverlay(pointCollection);  // 添加Overlay
                    }
                    else {
                        alert('请在chrome、safari、IE8+以上浏览器查看本示例');
                    }             
                }
            );
            break;
        case city_name == "xiangyang":
            $.get(
                "load_xiangyang.ashx",
                function (res) {
                    if (res != "error") {
                        var list = eval("(" + res + ")");
                        for (var i in list) {
                            var j = list[i].id;
                            var house = '<div style="height:110px;"><div style="float:left;margin:5px;"><img src="Images/' + j % 150 + '.jpg" alt="" style="width:150px;height:100px;"/></div>' +
                                '<div style="float:left;margin:5px;"><a onclick="show_click(this)" class="text-warning" style="display: block;text-decoration:none;width:150px;font-size:13px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"> ' + list[i].HouseTitle + '</a><p style="font-size:12px;">' + list[i].HouseType + '' +
                                '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="text-danger" style = "font-size:15px;"> ' + list[i].price + '</span></p > ' +
                                '<p style="font-size:12px;">' + list[i].area + '&nbsp&nbsp' + list[i].floor + '&nbsp&nbsp' + list[i].toward + '</p><p style="width:150px;font-size:12px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">' + list[i].location + '&nbsp&nbsp' +
                                '' + list[i].community + '</p></div>';
                            switch (true) {
                                case xy_house_region.value == 0:
                                    var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                    points.push(point);
                                    $("#map_list").append(house);
                                    break;
                                case xy_house_region.value == 1:
                                    if (list[i].region == "樊城区") {
                                        var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                        points.push(point);
                                        $("#map_list").append(house);
                                    }
                                    break;
                                case xy_house_region.value == 2:
                                    if (list[i].region == "襄城区") {
                                        var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                        points.push(point);
                                        $("#map_list").append(house);
                                    }
                                    break;
                                case xy_house_region.value == 3:
                                    if (list[i].region == "襄州区") {
                                        var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                        points.push(point);
                                        $("#map_list").append(house);
                                    }
                                    break;
                            }
                        }
                    }
                    //图形范围内绘制海量点   
                    if (document.createElement('canvas').getContext) {  // 判断当前浏览器是否支持绘制海量点
                        var options = {
                            size: BMAP_POINT_SIZE_BIG,
                            shape: BMAP_POINT_SHAPE_WATERDROP,
                        }
                        var pointCollection = new BMap.PointCollection(points, options);  // 初始化PointCollection
                        pointCollection.addEventListener('click', pointInfo);
                        map.addOverlay(pointCollection);  // 添加Overlay
                    }
                    else {
                        alert('请在chrome、safari、IE8+以上浏览器查看本示例');
                    }
                }
            );
            break;
        case city_name == "yichang":
            $.get(
                "load_yichang.ashx",
                function (res) {
                    if (res != "error") {
                        var list = eval("(" + res + ")");
                        for (var i in list) {
                            var j = list[i].id;
                            var house = '<div style="height:110px;"><div style="float:left;margin:5px;"><img src="Images/' + j % 150 + '.jpg" alt="" style="width:150px;height:100px;"/></div>' +
                                '<div style="float:left;margin:5px;"><a onclick="show_click(this)" class="text-warning" style="display: block;text-decoration:none;width:150px;font-size:13px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"> ' + list[i].HouseTitle + '</a><p style="font-size:12px;">' + list[i].HouseType + '' +
                                '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="text-danger" style = "font-size:15px;"> ' + list[i].price + '</span></p > ' +
                                '<p style="font-size:12px;">' + list[i].area + '&nbsp&nbsp' + list[i].floor + '&nbsp&nbsp' + list[i].toward + '</p><p style="width:150px;font-size:12px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">' + list[i].location + '&nbsp&nbsp' +
                                '' + list[i].community + '</p></div>';
                            switch (true) {
                                case yc_house_region.value == 0:
                                    var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                    points.push(point);
                                    break;
                                case yc_house_region.value == 1:
                                    if (list[i].region == "伍家岗区") {
                                        var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                        points.push(point);
                                        $("#map_list").append(house);
                                    }
                                    break;
                                case yc_house_region.value == 2:
                                    if (list[i].region == "西陵区") {
                                        var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                        points.push(point);
                                        $("#map_list").append(house);
                                    }
                                    break;
                                case yc_house_region.value == 3:
                                    if (list[i].region == "夷陵区") {
                                        var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                        points.push(point);
                                        $("#map_list").append(house);
                                    }
                                    break;
                            }
                        }
                    }
                    //图形范围内绘制海量点   
                    if (document.createElement('canvas').getContext) {  // 判断当前浏览器是否支持绘制海量点
                        var options = {
                            size: BMAP_POINT_SIZE_BIG,
                            shape: BMAP_POINT_SHAPE_WATERDROP,
                        }
                        var pointCollection = new BMap.PointCollection(points, options);  // 初始化PointCollection
                        pointCollection.addEventListener('click', pointInfo);
                        map.addOverlay(pointCollection);  // 添加Overlay
                    }
                    else {
                        alert('请在chrome、safari、IE8+以上浏览器查看本示例');
                    }
                }
            );
            break;
        case city_name == "huangshi":
            $.get(
                "load_huangshi.ashx",
                function (res) {
                    if (res != "error") {
                        var list = eval("(" + res + ")");
                        for (var i in list) {
                            var j = list[i].id;
                            var house = '<div style="height:110px;"><div style="float:left;margin:5px;"><img src="Images/' + j % 150 + '.jpg" alt="" style="width:150px;height:100px;"/></div>' +
                                '<div style="float:left;margin:5px;"><a onclick="show_click(this)" class="text-warning" style="display: block;text-decoration:none;width:150px;font-size:13px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"> ' + list[i].HouseTitle + '</a><p style="font-size:12px;">' + list[i].HouseType + '' +
                                '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="text-danger" style = "font-size:15px;"> ' + list[i].price + '</span></p > ' +
                                '<p style="font-size:12px;">' + list[i].area + '&nbsp&nbsp' + list[i].floor + '&nbsp&nbsp' + list[i].toward + '</p><p style="width:150px;font-size:12px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">' + list[i].location + '&nbsp&nbsp' +
                                '' + list[i].community + '</p></div>';
                            switch (true) {
                                case hs_house_region.value == 0:
                                    var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                    points.push(point);
                                    break;
                                case hs_house_region.value == 1:
                                    if (list[i].region == "下陆区") {
                                        var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                        points.push(point);
                                        $("#map_list").append(house);
                                    }
                                    break;
                                case hs_house_region.value == 2:
                                    if (list[i].region == "西塞山区") {
                                        var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                        points.push(point);
                                        $("#map_list").append(house);
                                    }
                                    break;
                                case hs_house_region.value == 3:
                                    if (list[i].region == "黄石港区") {
                                        var point = new BMap.Point(list[i].longtitude, list[i].latitude);
                                        points.push(point);
                                        $("#map_list").append(house);
                                    }
                                    break;
                            }
                        }
                    }
                    //图形范围内绘制海量点   
                    if (document.createElement('canvas').getContext) {  // 判断当前浏览器是否支持绘制海量点
                        var options = {
                            size: BMAP_POINT_SIZE_BIG,
                            shape: BMAP_POINT_SHAPE_WATERDROP,
                        }
                        var pointCollection = new BMap.PointCollection(points, options);  // 初始化PointCollection
                        pointCollection.addEventListener('click', pointInfo);
                        map.addOverlay(pointCollection);  // 添加Overlay
                    }
                    else {
                        alert('请在chrome、safari、IE8+以上浏览器查看本示例');
                    }
                }
            );
            break;
        default:
            alert("error")
            break;
    }
}









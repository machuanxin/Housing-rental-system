//网址传参,接收参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
//界面初始化
$(document).ready(function () {
    //获取定位城市
    var get_city = getQueryString("city_return"); //传递参数，定位城市
    //城市定位成功
    if (get_city != "") {
        switch (true) {
            case get_city == "wuhan":
                city_list.value = 0;
                $("#wh_content").show();
                load_data();
                break;
            case get_city == "xiangyang":
                city_list.value = 1;
                $("#xy_content").show();
                load_data();
                break;
            case get_city == "yichang":
                city_list.value = 2;
                $("#yc_content").show();
                load_data();
                break;
            case get_city == "huangshi":
                city_list.value = 3;
                $("#hs_content").show();
                load_data();
                break;
            default:
                alert("error");
                break;
        }
    }
    //无法定位，默认为武汉市
    else {
        city_list.value = 0; 
        $("#wh_content").show();
        load_data();
        $("#xy_content").hide();
        $("#yc_content").hide();
        $("#hs_content").hide();
    }
    $("a").click(function () {
        $(this).css("color", "#428bca");
        $(this).siblings().css("color", "black");
        $(this).parent('div').siblings().find('a').css("color", "black");
        $(this).parent('div').siblings().find('a:eq(0)').css("color", "#428bca");
    });
    $("#wh_region a").click(select_region);
    $("#xy_region a").click(select_region);
    $("#yc_region a").click(select_region);
    $("#hs_region a").click(select_region);
    $("#wh_area a").click(select_area);
    $("#yc_area a").click(select_area);
    $("#hs_area a").click(select_area);
    $("#xy_area a").click(select_area);
    $("#wh_price a").click(select_price);
    $("#yc_price a").click(select_price);
    $("#hs_price a").click(select_price);
    $("#xy_price a").click(select_price);
});
function select_region() {
    var city_name = select_city();
    var wh_region_index = $("#wh_region a").index(this);
    var xy_region_index = $("#xy_region a").index(this);
    var yc_region_index = $("#yc_region a").index(this);
    var hs_region_index = $("#hs_region a").index(this);
    get_data(function (list) {
        var select_house = [];   //存储筛选的数据
        switch (true) {
            case city_name == "wuhan":
                for (var i in list) {
                    switch (true) {
                        case wh_region_index == 0:
                            select_house.push(list[i]);
                            break;
                        case wh_region_index == 1:
                            if (list[i].region == "江岸") {
                                select_house.push(list[i]);
                            }
                            break;
                        case wh_region_index == 2:
                            if (list[i].region == "江汉") {
                                select_house.push(list[i]);
                            }
                            break;
                        case wh_region_index == 3:
                            if (list[i].region == "硚口") {
                                select_house.push(list[i]);
                            }
                            break;
                        case wh_region_index == 4:
                            if (list[i].region == "东西湖") {
                                select_house.push(list[i]);
                            }
                            break;
                        case wh_region_index == 5:
                            if (list[i].region == "武昌") {
                                select_house.push(list[i]);
                            }
                            break;
                        case wh_region_index == 6:
                            if (list[i].region == "青山") {
                                select_house.push(list[i]);
                            }
                            break;
                        case wh_region_index == 7:
                            if (list[i].region == "洪山") {
                                select_house.push(list[i]);
                            }
                            break;
                        case wh_region_index == 8:
                            if (list[i].region == "汉阳") {
                                select_house.push(list[i]);
                            }
                            break;
                        case wh_region_index == 9:
                            if (list[i].region == "东湖高新") {
                                select_house.push(list[i]);
                            }
                            break;
                        case wh_region_index == 10:
                            if (list[i].region == "江夏") {
                                select_house.push(list[i]);
                            }
                            break;
                        case wh_region_index == 11:
                            if (list[i].region == "蔡甸") {
                                select_house.push(list[i]);
                            }
                            break;
                        case wh_region_index == 12:
                            if (list[i].region == "黄陂") {
                                select_house.push(list[i]);
                            }
                            break;
                        case wh_region_index == 13:
                            if (list[i].region == "新洲") {
                                select_house.push(list[i]);
                            }
                            break;
                        case wh_region_index == 14:
                            if (list[i].region == "沌口开发区") {
                                select_house.push(list[i]);
                            }
                            break;
                        default:
                            alert("error");
                            break;
                    }
                }
                Mulpage(select_house);
                break;
            case city_name == "xiangyang":
                for (var i in list) {
                    switch (true) {
                        case xy_region_index == 0:
                            select_house.push(list[i]);
                            break;
                        case xy_region_index == 1:
                            if (list[i].region == "樊城区") {
                                select_house.push(list[i]);
                            }
                            break;
                        case xy_region_index == 2:
                            if (list[i].region == "襄城区") {
                                select_house.push(list[i]);
                            }
                            break;
                        case xy_region_index == 3:
                            if (list[i].region == "襄州区") {
                                select_house.push(list[i]);
                            }
                            break;
                        default:
                            alert("error");
                            break;
                    }
                }
                Mulpage(select_house);
                break;
            case city_name == "yichang":
                for (var i in list) {
                    switch (true) {
                        case yc_region_index == 0:
                            select_house.push(list[i]);
                            break;
                        case yc_region_index == 1:
                            if (list[i].region == "伍家岗区") {
                                select_house.push(list[i]);
                            }
                            break;
                        case yc_region_index == 2:
                            if (list[i].region == "西陵区") {
                                select_house.push(list[i]);
                            }
                            break;
                        case yc_region_index == 3:
                            if (list[i].region == "夷陵区") {
                                select_house.push(list[i]);
                            }
                            break;
                        default:
                            alert("error");
                            break;
                    }
                }
                Mulpage(select_house);
                break;
            case city_name == "huangshi":
                for (var i in list) {
                    switch (true) {
                        case hs_region_index == 0:
                            select_house.push(list[i]);
                            break;
                        case hs_region_index == 1:
                            if (list[i].region == "下陆区") {
                                select_house.push(list[i]);
                            }
                            break;
                        case hs_region_index == 2:
                            if (list[i].region == "西塞山区") {
                                select_house.push(list[i]);
                            }
                            break;
                        case hs_region_index == 3:
                            if (list[i].region == "黄石港区") {
                                select_house.push(list[i]);
                            }
                            break;
                        default:
                            alert("error");
                            break;
                    }
                }
                Mulpage(select_house);
                break;
        }
    });
}
function select_area() {
    var city_name = select_city();
    var wh_area_index = $("#wh_area a").index(this);
    var xy_area_index = $("#xy_area a").index(this);
    var yc_area_index = $("#yc_area a").index(this);
    var hs_area_index = $("#hs_area a").index(this);
    get_data(function (list) {
        var select_house = [];   //存储筛选的数据
        switch (true) {
            case city_name == "wuhan":
                for (var i in list) {
                    switch (true) {
                        case wh_area_index == 0:
                            select_house.push(list[i]);
                            break;
                        case wh_area_index == 1:
                            if (parseFloat(list[i].area) <= 50) {
                                select_house.push(list[i]);
                            }
                            break;
                        case wh_area_index == 2:
                            if (parseFloat(list[i].area) >= 50 && parseFloat(list[i].area) <= 70) {
                                select_house.push(list[i]);
                            }
                            break;
                        case wh_area_index == 3:
                            if (parseFloat(list[i].area) >= 70 && parseFloat(list[i].area) <= 90) {
                                select_house.push(list[i]);
                            }
                            break;
                        case wh_area_index == 4:
                            if (parseFloat(list[i].area) >= 90 && parseFloat(list[i].area) <= 110) {
                                select_house.push(list[i]);
                            }
                            break;
                        case wh_area_index == 5:
                            if (parseFloat(list[i].area) >= 110) {
                                select_house.push(list[i]);
                            }
                            break;
                        default:
                            alert("error");
                            break;
                    }
                    Mulpage(select_house);
                }
                break;
            case city_name == "xiangyang":
                for (var i in list) {
                    switch (true) {
                        case xy_area_index == 0:
                            select_house.push(list[i]);
                            break;
                        case xy_area_index == 1:
                            if (parseFloat(list[i].area) <= 50) {
                                select_house.push(list[i]);
                            }
                            break;
                        case xy_area_index == 2:
                            if (parseFloat(list[i].area) >= 50 && parseFloat(list[i].area) <= 70) {
                                select_house.push(list[i]);
                            }
                            break;
                        case xy_area_index == 3:
                            if (parseFloat(list[i].area) >= 70 && parseFloat(list[i].area) <= 90) {
                                select_house.push(list[i]);
                            }
                            break;
                        case xy_area_index == 4:
                            if (parseFloat(list[i].area) >= 90 && parseFloat(list[i].area) <= 110) {
                                select_house.push(list[i]);
                            }
                            break;
                        case xy_area_index == 5:
                            if (parseFloat(list[i].area) >= 110) {
                                select_house.push(list[i]);
                            }
                            break;
                        default:
                            alert("error");
                            break;
                    }
                    Mulpage(select_house);
                }
                break;
            case city_name == "yichang":
                for (var i in list) {
                    switch (true) {
                        case yc_area_index == 0:
                            select_house.push(list[i]);
                            break;
                        case yc_area_index == 1:
                            if (parseFloat(list[i].area) <= 50) {
                                select_house.push(list[i]);
                            }
                            break;
                        case yc_area_index == 2:
                            if (parseFloat(list[i].area) >= 50 && parseFloat(list[i].area) <= 70) {
                                select_house.push(list[i]);
                            }
                            break;
                        case yc_area_index == 3:
                            if (parseFloat(list[i].area) >= 70 && parseFloat(list[i].area) <= 90) {
                                select_house.push(list[i]);
                            }
                            break;
                        case yc_area_index == 4:
                            if (parseFloat(list[i].area) >= 90 && parseFloat(list[i].area) <= 110) {
                                select_house.push(list[i]);
                            }
                            break;
                        case yc_area_index == 5:
                            if (parseFloat(list[i].area) >= 110) {
                                select_house.push(list[i]);
                            }
                            break;
                        default:
                            alert("error");
                            break;
                    }
                    Mulpage(select_house);
                }
                break;
            case city_name == "huangshi":
                for (var i in list) {
                    switch (true) {
                        case hs_area_index == 0:
                            select_house.push(list[i]);
                            break;
                        case hs_area_index == 1:
                            if (parseFloat(list[i].area) <= 50) {
                                select_house.push(list[i]);
                            }
                            break;
                        case hs_area_index == 2:
                            if (parseFloat(list[i].area) >= 50 && parseFloat(list[i].area) <= 70) {
                                select_house.push(list[i]);
                            }
                            break;
                        case hs_area_index == 3:
                            if (parseFloat(list[i].area) >= 70 && parseFloat(list[i].area) <= 90) {
                                select_house.push(list[i]);
                            }
                            break;
                        case hs_area_index == 4:
                            if (parseFloat(list[i].area) >= 90 && parseFloat(list[i].area) <= 110) {
                                select_house.push(list[i]);
                            }
                            break;
                        case hs_area_index == 5:
                            if (parseFloat(list[i].area) >= 110) {
                                select_house.push(list[i]);
                            }
                            break;
                        default:
                            alert("error");
                            break;
                    }
                    Mulpage(select_house);
                }
                break;
            default:
                alert("error");
                break;
        }      
    }
    );
}
function select_price() {
    var city_name = select_city();
    var wh_price_index = $("#wh_price a").index(this);
    var xy_price_index = $("#xy_price a").index(this);
    var yc_price_index = $("#yc_price a").index(this);
    var hs_price_index = $("#hs_price a").index(this);
    get_data(function (list) {
        var select_house = [];   //存储筛选的数据
        switch (true) {
            case city_name == "wuhan":
                for (var i in list) {
                    switch (true) {
                        case wh_price_index == 0:
                            select_house.push(list[i]);
                            break;
                        case wh_price_index == 1:
                            if (parseFloat(list[i].price) <= 1000) {
                                select_house.push(list[i]);
                            }
                            break;
                        case wh_price_index == 2:
                            if (parseFloat(list[i].price) > 1000 && parseFloat(list[i].price) <= 2000) {
                                select_house.push(list[i]);
                            }
                            break;
                        case wh_price_index == 3:
                            if (parseFloat(list[i].price) > 2000) {
                                select_house.push(list[i]);
                            }
                            break;
                        default:
                            alert("error");
                            break;
                    }
                    Mulpage(select_house);
                }
                break;
            case city_name == "xiangyang":
                for (var i in list) {
                    switch (true) {
                        case xy_price_index == 0:
                            select_house.push(list[i]);
                            break;
                        case xy_price_index == 1:
                            if (parseFloat(list[i].price) <= 1000) {
                                select_house.push(list[i]);
                            }
                            break;
                        case xy_price_index == 2:
                            if (parseFloat(list[i].price) > 1000 && parseFloat(list[i].price) <= 2000) {
                                select_house.push(list[i]);
                            }
                            break;
                        case xy_price_index == 3:
                            if (parseFloat(list[i].price) > 2000) {
                                select_house.push(list[i]);
                            }
                            break;
                        default:
                            alert("error");
                            break;
                    }
                    Mulpage(select_house);
                }
                break;
            case city_name == "yichang":
                for (var i in list) {
                    switch (true) {
                        case yc_price_index == 0:
                            select_house.push(list[i]);
                            break;
                        case yc_price_index == 1:
                            if (parseFloat(list[i].price) <= 1000) {
                                select_house.push(list[i]);
                            }
                            break;
                        case yc_price_index == 2:
                            if (parseFloat(list[i].price) > 1000 && parseFloat(list[i].price) <= 2000) {
                                select_house.push(list[i]);
                            }
                            break;
                        case yc_price_index == 3:
                            if (parseFloat(list[i].price) > 2000) {
                                select_house.push(list[i]);
                            }
                            break;
                        default:
                            alert("error");
                            break;
                    }
                    Mulpage(select_house);
                }
                break;
            case city_name == "huangshi":
                for (var i in list) {
                    switch (true) {
                        case hs_price_index == 0:
                            select_house.push(list[i]);
                            break;
                        case hs_price_index == 1:
                            if (parseFloat(list[i].price) <= 1000) {
                                select_house.push(list[i]);
                            }
                            break;
                        case hs_price_index == 2:
                            if (parseFloat(list[i].price) > 1000 && parseFloat(list[i].price) <= 2000) {
                                select_house.push(list[i]);
                            }
                            break;
                        case hs_price_index == 3:
                            if (parseFloat(list[i].price) > 2000) {
                                select_house.push(list[i]);
                            }
                            break;
                        default:
                            alert("error");
                            break;
                    }
                    Mulpage(select_house);
                }
                break;     
        }
    }
    );
}
  //城市切换
function city_change() {
    switch (city_list.value) {
        case '0':
            $("#wh_content").show();
            $("#xy_content").hide();
            $("#yc_content").hide();
            $("#hs_content").hide();
            break;
        case '1':
            $("#wh_content").hide();
            $("#xy_content").show();
            $("#yc_content").hide();
            $("#hs_content").hide();
            break;
        case '2':
            $("#wh_content").hide();
            $("#xy_content").hide();
            $("#yc_content").show();
            $("#hs_content").hide();
            break;
        case '3':
            $("#wh_content").hide();
            $("#xy_content").hide();
            $("#yc_content").hide();
            $("#hs_content").show();
            break;
        default:
            alert("error");
            break;
    }
    load_data();
}
//获取选择的城市
function select_city() {
    var city_name = null;
    switch (city_list.value) {
        case '0':
            city_name = "wuhan";
            break;
        case '1':
            city_name = "xiangyang";
            break;
        case '2':
            city_name = "yichang";
            break;
        case '3':
            city_name = "huangshi";
            break;
        default:
            alert("error");
            break;
    }
    return city_name;
}
//获取全部数据
var all_list = null;
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
//加载数据
function load_data() {
    get_data(function (list) {
        Mulpage(list);
    });
}
//分页函数
function Mulpage(list) {
    var nums = 10; //每页出现的数量
    var pages = Math.ceil(list.length / nums); //得到总页数
    var thisDate = function (curr) {
        //此处只是演示，实际场景通常是返回已经当前页已经分组好的数据
        var str = '', last = curr * nums - 1;
        last = last >= list.length ? (list.length - 1) : last;
        for (var i = (curr * nums - nums); i <= last; i++) {
            var j = list[i].id;
            str += '<div class="row" style="border:1px dashed antiquewhite"><div class="col-lg-3"><img src="Images/' + j % 150 + '.jpg" alt="" style="width:230px;height:160px;border-radius: 5px;margin:10px;"/></div>' +
                '<div class="col-lg-5"><p class="text-warning" style="font-size:20px;margin-top:20px;">' + list[i].HouseTitle + '</p><p>' + list[i].HouseType + '</p>' +
                '<p>' + list[i].area + '&nbsp&nbsp' + list[i].floor + '&nbsp&nbsp' + list[i].toward + '</p>' + list[i].location + '&nbsp&nbsp' + list[i].community + '</p>' +
                '<a href = "API.aspx?i=' + i + '&city=' + city_list.value + '" style = " cursor: pointer;" > <img src="Images/mapMark.jpg" id="img2" />地图查看</a ></div > ' +
                '<div class="col-lg-4 text-danger" style="font-size:25px;margin-top:80px;"><p>' + list[i].price + '</p></div></div> ';
        }
        return str;
    }
    //调用分页
    laypage({
        cont: 'house_info',
        pages: pages,
        jump: function (obj) {
            document.getElementById('house_list').innerHTML = thisDate(obj.curr);
        }
    })
}
function map_search() {
    window.location.href = "API.aspx";
}







<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="API.aspx.cs" Inherits="HouseAgent.API" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>房屋租赁信息系统</title>   
    <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=4IU3oIAMpZhfWZsMu7xzqBBAf6vMHcoa"></script>
    <link rel="stylesheet" href="http://api.map.baidu.com/library/SearchInfoWindow/1.5/src/SearchInfoWindow_min.css" /> 
    <script type="text/javascript" src="http://api.map.baidu.com/library/SearchInfoWindow/1.5/src/SearchInfoWindow_min.js"></script>
    <script type="text/javascript" src="http://api.map.baidu.com/library/DrawingManager/1.4/src/DrawingManager_min.js"></script>
	<link rel="stylesheet" href="http://api.map.baidu.com/library/DrawingManager/1.4/src/DrawingManager_min.css" />
    <script type="text/javascript" src="http://api.map.baidu.com/library/GeoUtils/1.2/src/GeoUtils_min.js"></script>
    <link rel="stylesheet" href="CSS/bootstrap.min.css"/>
    <link rel="stylesheet" href="CSS/HouseAgent.css"/>
    <script src="JS/jquery.js"></script>
    <script src="JS/bootstrap.min.js"></script>
    <script src="JS/DistanceTool_min.js"></script>
    <script src="JS/RectangleZoom_min.js"></script>
    <script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>
</head>
<body> 
  <div id="allmap"></div>  
      <div class="row">
          <div class="col-lg-4">
              <img src="images/logo.png" id="img1" />
              <span class="text-primary h3">房屋租赁信息系统</span>
              <span style="margin-left:10px;">当前城市</span>
               <select id="city" onchange="city_change()">
                    <option value="0">武汉</option>
                    <option value="1">襄阳</option>
                    <option value="2">宜昌</option>
                    <option value="3">黄石</option>
              </select>
          </div>  
        <div class="col-lg-5">
            <ul class="nav nav-pills">
              <li role="presentation" class="dropdown">
                  <a href="#" id="regionHouse" onclick="regionSearch()"><span class="text-primary h4">地图框选</span></a>                      
              </li>     
              <li role="presentation" class="dropdown">
                  <a  href="#" id="route"><span class="text-primary h4">路径规划</span></a>
              </li>
               <li role="presentation" class="dropdown">
                  <a id="list_choose" ><span class="text-primary h4">列表选房</span></a>
              </li>
                 <li role="presentation" class="dropdown">
                  <a id="publish_house"  href="hireHouse.aspx"><span class="text-primary h4">发布房源</span></a>
              </li>
              <li role="presentation">
                  <a href="#" id="myCol"><span class="text-primary h4">我的收藏</span></a>  
              </li>
              <li role="presentation" class="dropdown">
                  <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                    aria-expanded="false" id="toolbox"><span class="text-primary h4">工具箱</span>
                  <span class="caret"></span>
                  </a>
              <ul class="dropdown-menu">
                  <li><a href="#"  onclick="getDistance()"><span class="text-primary h5">距离量算</span></a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#" onclick="showCoordinate()"><span class="text-primary h5">获取坐标</span></a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#"  onclick="txtMark()"><span class="text-primary h5">位置标记</span></a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#"  onclick="bigger()"><span class="text-primary h5">拉框放大</span></a></li>   
                  <li role="separator" class="divider"></li>
                  <li><a href="#"  onclick="map.clearOverlays()"><span class="text-primary h5">清除选择</span></a></li> 
              </ul>
              </li>
          </ul>
        </div> 
        <div class="col-lg-1">
            <div id="identity">
            <span class="glyphicon glyphicon-user">用户：</span>
            <asp:Label runat="server" ID="user" Text=""></asp:Label><br/>
            身份：<asp:Label runat="server" ID="root" Text=""></asp:Label>
            </div>                
        </div>   
        <div class="col-lg-1" id="log">
            <div id="login_register">
                <span class="glyphicon glyphicon-fire"></span>
                <a class="text-info " href="Login.aspx">登录</a>/
                <a class="text-info" href="Register.aspx">注册</a><br/><br/>
            </div>
            <div id="quit">
                <span class="glyphicon glyphicon-off"></span>
                <a class="text-info" id="quit_login">退出登录</a>
            </div>
        </div>
     </div> 
    <div id="map_list">   
        <select id="wh_house_region" style="display:none;" onchange="house_region_change()">
                    <option value="0">区域不限</option>
                    <option value="1">江汉区</option>
                    <option value="2">江岸区</option>
                    <option value="3">硚口区</option>
                    <option value="4">东西湖区</option>
                    <option value="5">武昌区</option>
                    <option value="6">青山区</option>
                    <option value="7">洪山区</option>
                    <option value="8">汉阳区</option>
                    <option value="9">东湖高新区</option>
                    <option value="10">江夏区</option>
                    <option value="11">蔡甸区</option>
                    <option value="12">黄陂区</option>
                    <option value="13">新洲区</option>
                    <option value="14">沌口开发区</option>
              </select>
          <select id="xy_house_region" style="display:none;" onchange="house_region_change()">
                    <option value="0">区域不限</option>
                    <option value="1">樊城区</option>
                    <option value="2">襄城区</option>
                    <option value="3">襄州区</option>
                  </select>
         <select id="yc_house_region"  style="display:none;" onchange="house_region_change()">
                    <option value="0">区域不限</option>
                    <option value="1">伍家岗区</option>
                    <option value="2">西陵区</option>
                    <option value="3">夷陵区</option>
                  </select>
         <select id="hs_house_region" style="display:none;" onchange="house_region_change()">
                    <option value="0">区域不限</option>
                    <option value="1">下陆区</option>
                    <option value="2">西塞山区</option>
                    <option value="3">黄石港区</option>
                  </select>
        <select id="house_area"   onchange="house_area_change()">
                    <option value="0">面积不限</option>
                    <option value="1">30平米以下</option>
                    <option value="2">30-50平米</option>
                    <option value="3">50-70平米</option>
                    <option value="4">70-90平米</option>
                    <option value="5">90平米以上</option>
              </select>
        <select id="house_type"  onchange="house_type_change()">
                    <option value="0">户型不限</option>
                    <option value="1">1室</option>
                    <option value="2">2室</option>
                    <option value="3">3室</option>
                    <option value="4">3室以上</option>
              </select>
        <select id="house_price"onchange="house_price_change()">
                    <option value="0">租金不限</option>
                    <option value="1">1000元以下</option>
                    <option value="2">1000-1500元</option>
                    <option value="3">大于1500元</option>
            </select>
    </div>
    <div id="window_box" >
         <a  id="window_close">×</a>    
            <div id="myCollection">
                <h4 class="text-center text-primary">我的收藏</h4>
                <hr/>
                <div id="collectList"></div>                    
            </div>   
            <div id="route_search" >
                <h4 class="text-center text-primary">路径规划</h4>
                <hr/> 
                    <div class="rout_input form-inline">
                         <label class="route_label">起点:</label>
                         <input class="form-control" style="width:200px;height:15px;" id="route_start"  placeholder="请输入起点" />
                    </div> 
                    <div class="rout_input form-inline" style="margin-top:4px;">
                        <label class="route_label">终点:</label>
                        <input class="form-control" style="width:200px;height:15px;" id="route_end"  placeholder="请输入终点" />
                    </div>             
                        <a  id="carQuery" class="btn btn-sm btn-primary" style="margin-left:50px;" >驾车</a>
                        <a  id="busQuery" class="btn btn-sm btn-primary " style="margin-left:50px;" >公交</a>
                        <a  id="walkQuery" class="btn btn-sm btn-primary" style="margin-left:50px;" >步行</a>
                    <div id="route_result">
                    </div>
          </div>
    </div>        
    <script src="JS/API.js"></script>
</body>
</html>




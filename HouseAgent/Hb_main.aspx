<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Hb_main.aspx.cs" Inherits="HouseAgent.Hb_main" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>房屋租赁信息系统</title>
     <link rel="stylesheet" href="CSS/bootstrap.min.css" />
    <script src="JS/jquery.js"></script>
    <script src="JS/bootstrap.min.js"></script>
    <link rel="stylesheet" href="CSS/hubei.css"/>
    <script src="laypage/laypage.js"></script>
    <script src="JS/main.js"></script>
    <script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>
</head>
<body>
 <div class="container">
        <div class="page-header" style="margin-top:15px;" >
                <div class="row">
                    <img src="images/logo.png" id="img1"/>
                    <span class="text-primary h3">房屋租赁信息系统</span>
                    <span id="current_city">当前城市</span>                           
                    <select id="city_list" onchange="city_change()">
                        <option value="0">武汉市</option>
                        <option value="1">襄阳市</option>
                        <option value="2">宜昌市</option>
                        <option value="3">黄石市</option>
                    </select>                               
                    <span id="map_house" class="text-primary" onclick="map_search()"><img src="Images/mapMark.jpg" id="img2"/>地图找房</span>                                      
                </div>
            </div> 
     <!-- 选项卡武汉 -->
        <div id="wh_content">
                 <div id="wh_region">
                    <span style="margin-left:50px;">区域：&nbsp&nbsp</span><a style="color:#428bca">不限&nbsp&nbsp</a><a>江岸&nbsp&nbsp</a><a>江汉&nbsp&nbsp</a><a>硚口&nbsp&nbsp</a><a>东西湖&nbsp&nbsp</a><a>武昌&nbsp&nbsp</a><a>青山&nbsp&nbsp</a>
                    <a>洪山&nbsp&nbsp</a><a>汉阳&nbsp&nbsp</a><a>东湖高新&nbsp&nbsp</a><a>江夏&nbsp&nbsp</a><a>蔡甸&nbsp&nbsp</a><a>黄陂&nbsp&nbsp</a><a>新洲&nbsp&nbsp</a><a>沌口开发区</a><br/>
                 </div>
                 <div id="wh_area" style="margin-top:15px;">
                    <span style="margin-left:50px;">面积：&nbsp&nbsp</span><a style="color:#428bca">不限&nbsp&nbsp</a><a>50平米以下&nbsp&nbsp</a><a>50-70平米&nbsp&nbsp</a><a>70-90平米&nbsp&nbsp</a><a>90-110平米&nbsp&nbsp</a><a>大于110平米</a><br/>
                 </div>
                 <div id="wh_price" style="margin-top:15px;">
                    <span style="margin-left:50px;">租金：&nbsp&nbsp</span><a style="color:#428bca">不限&nbsp&nbsp</a><a>1000元以下&nbsp&nbsp</a><a>1000-2000元&nbsp&nbsp</a><a>大于2000元</a><br/>
                 </div>                                      
       </div>
     <!-- 选项卡襄阳 -->
      <div id="xy_content">
          <div id="xy_region">
              <span style="margin-left:50px;">区域：&nbsp&nbsp</span><a style="color:#428bca">不限&nbsp&nbsp</a><a>樊城&nbsp&nbsp</a><a>襄城&nbsp&nbsp</a><a>襄州&nbsp&nbsp</a><br/>
              </div>
          <div id="xy_area" style="margin-top:15px;">
                <span style="margin-left:50px;">面积：&nbsp&nbsp</span><a style="color:#428bca">不限&nbsp&nbsp</a><a>50平米以下&nbsp&nbsp</a><a>50-70平米&nbsp&nbsp</a><a>70-90平米&nbsp&nbsp</a><a>90-110平米&nbsp&nbsp</a><a>大于110平米</a><br/>
          </div>                
          <div id="xy_price" style="margin-top:15px;">
            <span style="margin-left:50px;">租金：&nbsp&nbsp</span><a style="color:#428bca">不限&nbsp&nbsp</a><a>1000元以下&nbsp&nbsp</a><a>1000-2000元&nbsp&nbsp</a><a>大于2000元</a><br/>
          </div>                      
       </div>
     <!-- 选项卡宜昌 -->
      <div id="yc_content">
            <div id="yc_region">
                <span style="margin-left:50px;">区域：&nbsp&nbsp</span><a style="color:#428bca">不限&nbsp&nbsp</a><a>伍家岗&nbsp&nbsp</a><a>西陵&nbsp&nbsp</a><a>夷陵&nbsp&nbsp</a><br/>
            </div>
            <div id="yc_area" style="margin-top:15px;"> 
                <span style="margin-left:50px;">面积：&nbsp&nbsp</span><a style="color:#428bca">不限&nbsp&nbsp</a><a>50平米以下&nbsp&nbsp</a><a>50-70平米&nbsp&nbsp</a><a>70-90平米&nbsp&nbsp</a><a>90-110平米&nbsp&nbsp</a><a>大于110平米</a><br/>
            </div>
            <div id="yc_price" style="margin-top:15px;">
                <span style="margin-left:50px;">租金：&nbsp&nbsp</span><a style="color:#428bca">不限&nbsp&nbsp</a><a>1000元以下&nbsp&nbsp</a><a>1000-2000元&nbsp&nbsp</a><a>大于2000元</a><br/> 
            </div>       
       </div>
     <!-- 选项卡黄石 -->
      <div id="hs_content" style="margin-top:15px;">
                  <div id="hs_region"><span style="margin-left:50px;">区域：&nbsp&nbsp</span><a style="color:#428bca">不限&nbsp&nbsp</a><a>下陆&nbsp&nbsp</a><a>西塞山&nbsp&nbsp</a><a>黄石港&nbsp&nbsp</a><br/></div>
                   <div id="hs_area" style="margin-top:15px;"><span style="margin-left:50px;">面积：&nbsp&nbsp</span><a style="color:#428bca">不限&nbsp&nbsp</a><a>50平米以下&nbsp&nbsp</a><a>50-70平米&nbsp&nbsp</a><a>70-90平米&nbsp&nbsp</a><a>90-110平米&nbsp&nbsp</a><a>大于110平米</a><br/></div>
                  <div id="hs_price" style="margin-top:15px;"><span style="margin-left:50px;">租金：&nbsp&nbsp</span><a style="color:#428bca">不限&nbsp&nbsp</a><a>1000元以下&nbsp&nbsp</a><a>1000-2000元&nbsp&nbsp</a><a>大于2000元</a><br/></div>
       </div>
       <div id="HouseBox">   
          <ul id="house_list"></ul>
          <div id="house_info"></div>
      </div>  
      <div id="footerID" class="footer text-center text-primary">
         <p>版权所有&copy; Copyright 　　中国·武汉    武汉大学  测绘学院</p>
         <p>地址：湖北省武汉市武昌区八一路299号  邮编：430072</p>
       </div>
</div>
</body>
</html>
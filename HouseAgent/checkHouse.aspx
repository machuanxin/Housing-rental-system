<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="checkHouse.aspx.cs" Inherits="HouseAgent.checkHouse" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="stylesheet" href="CSS/bootstrap.min.css"/>
    <script src="JS/jquery.js"></script>
    <script src="JS/bootstrap.min.js"></script>
    <script src="JS/check.js"></script>
    <title>审核房源</title>
</head>
<body>
    <div class="container">
        <div class="row" style="margin-top: 50px">
            <div class="col-sm-8">
                <img src="images/logo.png" width="55" height="55" />
                <span class="text-primary h4">房屋租赁信息系统</span><br/>
                <span class="text-danger" style="font-size: 15px;margin-left: 100px">审核房源</span>
            </div>   
            <div class="col-sm-4">
                <a class="btn btn-default" href="Hb_main.aspx">返回主页</a>
                <button class="btn btn-primary" id="loadData" onclick="loadData()">加载信息</button>
            </div>
        </div><hr /> 
        <div id="checkList">
        </div>
    </div>
</body>
</html>

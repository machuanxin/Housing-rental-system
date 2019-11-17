<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Register.aspx.cs" Inherits="HouseAgent.Register" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>注册</title>
    <link rel="stylesheet" href="CSS/bootstrap.min.css"/>
    <script src="JS/jquery.js"></script>
    <script src="JS/bootstrap.min.js"></script>
</head>
<body>
    <div class="container">
        <div class="row" style="margin-top: 50px">
            <div class="col-sm-8">
                <img src="images/logo.png" width="55" height="55" />
                <span class="text-primary h2">房屋租赁信息系统</span><br/>
                <span class="text-primary" style="font-size: 25px;margin-left: 70px">账号注册</span>
            </div>        
            <div class="col-sm-3 text-right">
                <p class="text-primary " style="padding-top: 10px;font-size: 16px">我已注册，现在就</p>
            </div>
            <div class="col-sm-1">              
                <a id="login" class="btn btn-default btn-block" href="Login.aspx">登录</a>
            </div>
        </div><hr />
        <div class="row" style="margin-top: 40px">
             <form id="form2" class="form-horizontal" role="form" runat="server">
                    <div class="form-group">
                        <label class="control-label col-lg-4 text-info input-lg"  for="Username">用户名</label>
                        <div class="col-lg-4">                           
                            <asp:TextBox ID="UserName" runat="server" class="form-control" placeholder="请输入用户名" Text=""></asp:TextBox>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-4 text-info input-lg"  for="Password">密码</label>
                        <div class="col-lg-4">
                            <asp:TextBox ID="Password" TextMode="password" runat="server" class="form-control" placeholder="请输入密码" Text=""></asp:TextBox>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-4 text-info input-lg"  for="Password2">确认密码</label>
                        <div class="col-lg-4">
                             <asp:TextBox ID="Password2" TextMode="password" runat="server" class="form-control" placeholder="请输入确认密码" Text=""></asp:TextBox>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-4 text-info input-lg"  for="Phone">电话</label>
                        <div class="col-lg-4">
                             <asp:TextBox ID="Phone" runat="server" class="form-control" placeholder="请输入电话" Text=""></asp:TextBox>
                        </div>
                        <div class="col-lg-3">
                              <asp:label id="note" runat="server" Text=""></asp:label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-lg-4"></div>
                        <div class="col-lg-4">
                            <asp:button runat="server" id="btnRegister" class="btn btn-primary btn-block" style="margin-top: 20px" Text="注册" OnClick="btnRegister_Click"></asp:button>
                        </div>
                    </div>
            </form>
    </div>
        <hr/>
        <div id="footerID" class="footer text-center" style="color: black">
            <p>版权所有&copy; Copyright 　　@WHU</p>
        </div>
    </div>
</body>
</html>

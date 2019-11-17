<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="HouseAgent.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>登录</title>
    <link rel="stylesheet" href="CSS/bootstrap.min.css"/>
    <script src="JS/jquery.js"></script>
    <script src="JS/bootstrap.min.js"></script>
</head>
<body>
   <div class="container">
       <div class="row" style="margin-top: 50px">
              <div class="col-sm-8">
                  <img src="images/logo.png" width="55" height="55" />
                  <span class="text-primary h2">房屋租赁信息系统</span>
              </div>
              <div class="col-sm-4 text-right hide-xs">
             </div>
       </div>
       <div class="row" style="margin-top: 50px" >
             <div class="col-sm-6">
                 <img src="Images/wh.jpg" class="img-responsive" style="width:550px;height:370px;"/>
             </div>
             <div class="col-sm-1"></div>
             <div class="col-sm-4">
                 <form  id="form1" class="form-horizontal" role="form" runat="server">
                     <h4 class="text-primary">用户登录</h4>
                         <p style="display: none;" id="tips" class="bg_danger sl_danger"></p>
                     <div class="form-group">
                         <div class="input-group">
                             <div class="input-group-addon"><img src="images/log_ic01.png" width="16" height="16" /></div>
                             <asp:TextBox ID="UserName" runat="server" class="form-control" placeholder="请输入用户名" Text="" OnTextChanged="UserName_TextChanged" AutoPostBack="TRUE"></asp:TextBox>
                         </div>
                     </div>
                     <div class="form-group">
                         <div class="input-group">
                             <div class="input-group-addon"><img src="images/log_ic02.png" width="16" height="16" /></div>        
                             <asp:TextBox ID="PassWord" TextMode="password" runat="server" class="form-control" placeholder="请输入密码" Text=""></asp:TextBox>
                         </div>
                     </div>
                     <div class="form-group">                  
                             <asp:RadioButton runat="server" ID="gly" Text="管理员" GroupName="OK" Enabled="false"/>                     
                             <asp:RadioButton runat="server" ID="Common" Text="普通用户" GroupName="OK" Checked="true"/>                        
                         <asp:label id="note" runat="server" Text="" style=" color:red;text-align:right; margin-left:40px;"></asp:label>
                     </div>
                     <div class="form-group">
                         <asp:button  runat="server"  class="btn btn-primary btn-block" id="dl" Text="登录" OnClick="dl_Click"></asp:button>
                         <asp:button  runat="server" class ="btn btn-default btn-block" id="d2" style="margin-top: 10px" Text="注册" OnClick="d2_Click"></asp:button>
                     </div>
                 </form>
                 <div class="sl_log_ewm hidden-xs"><img src="images/code-wx.jpg" width="90" height="90" />&nbsp;&nbsp;<span class="text-primary">
                     用手机扫一扫,安全、便捷登录</span></div>
             </div>
       </div>
   </div><br/><br/>
   <div id="footerID" class="footer  text-primary" style="position:fixed;bottom:10px;left:40%;">
         <p>版权所有&copy; Copyright 　　中国·武汉    武汉大学  测绘学院</p>
   </div>
</body>
</html>

<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="hireHouse.aspx.cs" Inherits="HouseAgent.hireHouse" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="stylesheet" href="CSS/bootstrap.min.css"/>
    <script src="JS/jquery.js"></script>
    <script src="JS/bootstrap.min.js"></script>
    <title>房屋出租</title>
</head>
<body>
    <div class="container">
        <div class="row" style="margin-top: 50px">
            <div class="col-sm-8">
                <img src="images/logo.png" width="55" height="55" />
                <span class="text-primary h2">房屋租赁信息系统</span><br/>
                <span class="text-primary" style="font-size: 25px;margin-left: 70px">房屋出租</span>
            </div>   
            <div class="col-sm-4">
                <a class="btn btn-default" href="API.aspx">返回主页</a>
            </div>
        </div><hr />
        <div class="row" style="margin-top: 40px">
            <form id="form3" runat="server" class="form-horizontal" role="form" >
                <div class="form-group">
                    <label class="control-label col-lg-4 text-info input-lg"  for="trueName">真实姓名</label>
                    <div class="col-lg-4">                           
                        <asp:TextBox ID="trueName" runat="server" class="form-control" placeholder="请输入真实姓名" Text=""></asp:TextBox>
                    </div>
                </div>
                <div class="form-group">
                <label class="control-label col-lg-4 text-info input-lg"  for="phone">联系电话</label>
                <div class="col-lg-4">                           
                    <asp:TextBox ID="phone" runat="server" class="form-control" placeholder="请输入联系电话,方便我们及时与您取得联系" Text=""></asp:TextBox>
                </div>
            </div>
                <div class="form-group">
                <label class="control-label col-lg-4 text-info input-lg"  for="location">地理位置</label>
                <div class="col-lg-4">                           
                    <asp:TextBox ID="location" runat="server" class="form-control" placeholder="请输入地理位置" Text=""></asp:TextBox>
                </div>
            </div>
                <div class="form-group">
                <label class="control-label col-lg-4 text-info input-lg"  for="community"">小区名称</label>
                <div class="col-lg-4">                           
                    <asp:TextBox ID="community" runat="server" class="form-control" placeholder="请输入小区名称" Text=""></asp:TextBox>
                </div>
            </div>
                <div class="form-group">
            <div class="col-lg-4"></div>
                <div class="col-lg-4">
                    <asp:button runat="server" id="btnSubmit" class="btn btn-primary btn-block" style="margin-top: 20px" Text="提交" OnClick="btnSubmit_Click"></asp:button>
                </div>
                <div class="col-lg-4">
                    <asp:Label runat="server" ID="SubNote" class="text-danger" Text="" style="font-size:20px;"></asp:Label>
                </div>
            </div>
            </form>
        </div>
     </div>
</body>
</html>

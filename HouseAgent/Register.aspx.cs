using HouseAgent.App_Code;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace HouseAgent
{
    public partial class Register : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnRegister_Click(object sender, EventArgs e)
        {
            if(UserName.Text==""||Password.Text==""||Password2.Text==""||Phone.Text=="")
            {
                note.Text = "请把信息填写完整！";
            }
            else
            {   //检查用户名是否存在
                string username = UserName.Text.Trim();
                string sql = "select UserName from [User] where UserName='" + username + "'";
                DataTable dt1 = DBClass.queryData(sql);
                 if (dt1.Rows.Count > 0)
                {
                    note.Text = "该用户名已经存在！";
                }
                 else
                {
                    if(Password.Text!=Password2.Text)
                    {
                        note.Text = "两次输入密码不一致！";
                    }
                    else
                    {                       
                        string password = Password.Text.Trim();
                        string phone = Phone.Text.Trim();
                        string sql1 = "insert into [User] (UserName,Password,Phone) values ('" + username + "','" + password + "','"+phone+"')";
                        int Succnum = DBClass.executeCommand(sql1);
                        if(Succnum>0)
                        {
                            Response.Redirect("Login.aspx");

                        }
                        else
                        {
                            note.Text = "注册失败！";
                        }
                    }
                }
            }
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using HouseAgent.App_Code;

namespace HouseAgent
{
    public partial class Login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
           
        }

        protected void d2_Click(object sender, EventArgs e)
        {
            Response.Redirect("Register.aspx");
        }

        protected void dl_Click(object sender, EventArgs e)
        {
            if(UserName.Text==""||PassWord.Text=="")
            {
                note.Text = "用户名和密码不能为空！";
            }
            else
            {
                string username = UserName.Text.Trim();              
                string password = PassWord.Text.Trim();
                if(gly.Checked==true)
                {
                    Session["root"] = gly.Text;                                   
                }
                else
                {
                    Session["root"] = Common.Text;
                }
                string sql = "select Password from [User] where UserName='" + username + "'";
                DataTable dt1 = DBClass.queryData(sql);
                if(dt1.Rows.Count>0)
                {
                    if (dt1.Rows[0]["Password"].ToString().Trim() == password)
                    {
                        Session["username"] = username;
                        if(UserName.Text.Trim() == "admin")
                        {
                            Response.Redirect("checkHouse.aspx");
                        }
                        else
                        {
                            Response.Redirect("API.aspx");
                        }               
                    }
                    else
                    {
                        note.Text = "用户名和密码有误！";
                        PassWord.Text = "";
                    }
                }
                else
                {
                    note.Text = "用户名和密码有误！";
                    PassWord.Text = "";
                }

            }

        }

        protected void UserName_TextChanged(object sender, EventArgs e)
        {
            if(UserName.Text.Trim()=="admin")
            {
                gly.Enabled = true;
            }
        }
    }
}
using HouseAgent.App_Code;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace HouseAgent
{
    public partial class hireHouse : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        protected void btnSubmit_Click(object sender, EventArgs e)
        {
            if (trueName.Text == "" || phone.Text == ""  || location.Text == "" || community.Text == "")
            {
                SubNote.Text = "请把信息填写完整！";
            }
            else
            {
                string Nam = trueName.Text.Trim();
                string pho = phone.Text.Trim();
                string loc = location.Text.Trim();
                string com = community.Text.Trim();
                string sql1 = "insert into [hirehouse] (trueName,phone,location,community) values " +
                    "('" + Nam + "','" + pho + "','" + loc + "','" + com + "')";
                int Succnum = DBClass.executeCommand(sql1);
                if (Succnum > 0)
                {
                    SubNote.Text = "提交成功，等待管理员审核！";
                    trueName.Text = "";
                    phone.Text = "";
                    location.Text = "";
                    community.Text = "";
                 

                }
                else
                {
                    SubNote.Text = "提交失败！";
                }

            }
        }
    }
}
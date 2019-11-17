using HouseAgent.App_Code;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace HouseAgent
{
    /// <summary>
    /// handleCheck 的摘要说明
    /// </summary>
    public class handleCheck : IHttpHandler
    {
        public void ProcessRequest(HttpContext context)
        {
            string sql = "select * from hireHouse";
            DataTable dt =  DBClass.queryData(sql); 
            if(dt.Rows.Count>0)
            {             
                string res = JsonConvert.SerializeObject(dt);
                context.Response.Write(res);
            }
            else
            {
                string res = "error";
                context.Response.Write(res);
            }
        }
        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}
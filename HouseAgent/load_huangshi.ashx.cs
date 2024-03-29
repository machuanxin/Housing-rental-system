﻿using HouseAgent.App_Code;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace HouseAgent
{
    /// <summary>
    /// load_huangshi 的摘要说明
    /// </summary>
    public class load_huangshi : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string sql = "select * from huangshi";
            DataTable dt = DBClass.queryData(sql);
            if (dt.Rows.Count > 0)
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
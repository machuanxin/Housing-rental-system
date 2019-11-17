using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Web.UI.WebControls;
using System.Configuration;

namespace HouseAgent.App_Code
{
    public class DBClass
    {
        private static SqlConnection connection;
        public static SqlConnection Connection
        {
            get
            {
                string connectionString = ConfigurationManager.ConnectionStrings["House"].ConnectionString;
                if (connection == null || connection.State == ConnectionState.Closed)
                {
                    connection = new SqlConnection(connectionString);
                    connection.Open();
                }
                return connection;
            }

        }
        //执行指定的SQL命令语句(insert,delete,update等),并返回命令所影响的行数
        public static int executeCommand(string sqlStr)
        {
            
            SqlConnection sqlConnection1 = Connection;//创建数据库连接
            //sqlConnection1.Open();      //打开数据库连接
            SqlCommand sqlCommand1 = new SqlCommand(sqlStr, sqlConnection1);  //执行SQL命令
            int Succnum = sqlCommand1.ExecuteNonQuery();
            return Succnum;
        }

        //查询(select)指定的数据记录（多行多列）,并填充到数据控件DataGridView中
        public static void queryDataToGrid(string sqlStr, DataGrid dataGrid1)
        {
            SqlConnection sqlConnection1 = Connection;//创建数据库连接
            SqlDataAdapter sqlDataAdapter1 = new SqlDataAdapter(sqlStr, sqlConnection1);//利用已创建好的sqlConnection1,创建数据适配器sqlDataAdapter1
            DataSet dataSet1 = new DataSet();  //创建数据集对象
            sqlDataAdapter1.Fill(dataSet1);    //执行查询,查询的结果存放在数据集里
            dataGrid1.DataSource = dataSet1.Tables[0]; //把数据集中的查询结果绑定到dataGridView1中
        }

        //查询(select)指定的数据（单个数据,假设为table类型）,并返回
        public static DataTable queryData(string sqlStr)
        {
            SqlConnection sqlConnection1 = Connection;//创建数据库连接
            SqlDataAdapter sqlDataAdapter1 = new SqlDataAdapter(sqlStr, sqlConnection1);//利用已创建好的sqlConnection1,创建数据适配器sqlDataAdapter1
            DataSet dataSet1 = new DataSet();  //创建数据集对象
            sqlDataAdapter1.Fill(dataSet1);    //执行查询,查询的结果存放在数据集里
            //return dataSet1.Tables[0].Rows[0]["列名"].ToString(); //把查询结果的第一行指定列下的数据以string类型返回
            return dataSet1.Tables[0];
        }
    }
}
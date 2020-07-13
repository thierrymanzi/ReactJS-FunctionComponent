using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebAPI_React_Client.Controller
{
    class EmployeeController
    {
       
            List<Employyee> empList = new List<Employyee>
             {
                new Employyee{Id=101,Name="Thierry",Location="Kigali-Rwanda",Salary=5000},
                new Employyee{Id=102,Name="Manzi",Location="Kigali-Rwanda",Salary=6000},
                new Employyee{Id=103,Name="vava",Location="Kigali-Rwanda",Salary=7000},
                new Employyee{Id=104,Name="Guy",Location="Kigali-Rwanda",Salary=9000}

            };
        public List<Employyee> GetAll()
        {

            return empList;
        }

        public bool Post(Employyee employyee)
        {
            SqlConnection conn = new SqlConnection(@"server=DESKTIP-89HQ4RL\SQLEXPRESS;database=ReactAppDB;integrated");
            string query = "insert int Employee value(@Id,@Name,@Loc,@Sal)";
            SqlCommand cmd = new SqlCommand(query, conn);
            cmd.Parameters.Add(new SqlParameter("@Id", employyee.Id));
            cmd.Parameters.Add(new SqlParameter("@Name", employyee.Name));
            cmd.Parameters.Add(new SqlParameter("@Loc", employyee.Location));
            cmd.Parameters.Add(new SqlParameter("@Sal", employyee.Salary));
            conn.Open();
            int noofRowsAffected = cmd.ExecuteNonQuery();
            conn.Close();
            return noofRowsAffected>0 ? true : false;

        }
    }
}

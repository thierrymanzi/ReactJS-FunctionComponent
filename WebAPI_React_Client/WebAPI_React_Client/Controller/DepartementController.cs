using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebAPI_React_Client.Controller
{
    class DepartementController
    {

        List<Departement> depList = new List<Departement>
             {
                new Departement{Id=10,Name="I.T",Revenue=5000},
                new Departement{Id=11,Name="FINANCE",Revenue=6000},
                new Departement{Id=13,Name="RETAIL",Revenue=7000},
                new Departement{Id=15,Name="CREDIT",Revenue=9000}

            };
        public List<Departement> GetAll()
        {

            return depList;
        }
    }
}

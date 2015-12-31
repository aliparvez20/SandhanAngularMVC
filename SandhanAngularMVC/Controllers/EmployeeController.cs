using SandhanAngularMVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace SandhanAngularMVC.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee
        public ActionResult GetEmployees()
        {
            //return View();
            List<Employee> list = new List<Employee>(){
            
                new Employee(){
                    fullName = "Parvez Ali",
                    notes= "the ideal employee"
                    //department = "administration",
                    //payRoll= "ten99",
                    //dateHired= "July 11 2014",
                    //breakTime= "July 11 2014 3:00 PM",
                    //perkCar= false,
                    //perkStock= true,
                    //perkSixWeek= false
                },
                new Employee(){
                    fullName = "Ramesh T",
                    notes= "the ideal employee"
                    //department = "administration",
                    //payRoll= "ten99",
                    //dateHired= "July 11 2014",
                    //breakTime= "July 11 2014 3:00 PM",
                    //perkCar= false,
                    //perkStock= true,
                    //perkSixWeek= false
                }
            };

            var camelCaseFormatter = new JsonSerializerSettings();
            camelCaseFormatter.ContractResolver = new CamelCasePropertyNamesContractResolver();
            var jsonResult = new ContentResult
            {
                Content = JsonConvert.SerializeObject(list, camelCaseFormatter),
                ContentType = "application/json"
            };
            return jsonResult;
            //return new HttpStatusCodeResult(404, "Our Custum Error Message");
        }

        public ActionResult Create(Employee employee)
        {
            return new HttpStatusCodeResult(202, "New Employee Have Been Added");
        }
    }
}
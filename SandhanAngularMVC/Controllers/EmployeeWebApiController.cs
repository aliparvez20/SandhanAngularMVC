using SandhanAngularMVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SandhanAngularMVC.Controllers
{
    public class EmployeeWebApiController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<Employee> Get()
        {
            List<Employee> list = new List<Employee>(){
            
                new Employee(){
                    fullName = "Parvez Ali"
                },
                new Employee(){
                    fullName = "Ramesh T"
                }
            };
            return list;
        }

        // GET api/<controller>/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}
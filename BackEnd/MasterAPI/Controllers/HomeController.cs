using Common;
using Dapper.FastCrud;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace MasterAPI.Controllers
{
    [RoutePrefix("[Controller]")]
    public class HomeController : ApiController
    {

        public IHttpActionResult Get()
        {
            var result = DatabaseConnect.Instance.SqlServerConnection.Find<News>(s => s.Include<NewsGroup>());
            return Ok(result);
        }
    }
}

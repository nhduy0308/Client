using MasterAPI.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace MasterAPI.Common
{
    [RoutePrefix("[Controller]")]
    public class BaseController : ApiController
    {
    }
}
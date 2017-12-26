using Microsoft.AspNetCore.Mvc;
using Nov.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nov.Areas.Sys
{
    public class TestController : NovController
    {
        public JsonResult Index()
        {
            Logger.Debug("i am test/index");
            throw new Exception("哈哈");
        }

    }
}

using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Web;

namespace Common
{
    public class Connection
    {
        public string connection { get; set; }
        public string user { get; set; }
        public string password { get; set; }
        public string path { get; set; }
    }
    public class SettingModel
    {
        public Connection SqlServer { get; set; }
        public Connection Odbc { get; set; }
    }
    public static class Settings
    {
        private static SettingModel _setting { get; set; }
        public static SettingModel Get
        {
            get
            {
                return _setting ?? (_setting = Load());
            }
        }
        private static SettingModel Load()
        {
            return JsonConvert.DeserializeObject<SettingModel>(File.ReadAllText(HttpRuntime.AppDomainAppPath + "\\appsettings.json"));
        }
    }
}

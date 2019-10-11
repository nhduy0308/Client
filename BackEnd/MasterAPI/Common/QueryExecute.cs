using Dapper;
using Newtonsoft.Json;
using SqlKata;
using SqlKata.Execution;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public static class QueryExecute
    {
        public static async Task Execute(this Query sql)
        {
            using(IDbTransaction transaction = DatabaseConnect.Instance.BeginTransaction())
            {
                try
                {
                    var query = QueryHelper.CreateQueryFactory(sql).Compiler.Compile(sql);
                    await transaction.Connection.QueryAsync(query.Sql, query.NamedBindings, transaction);
                    transaction.Commit();
                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    throw ex;
                }
            }
        }

        public static Task<IEnumerable<T>> Reader<T>(this Query sql) where T : class, new()
        {
            var query = QueryHelper.CreateQueryFactory(sql).Compiler.Compile(sql);
            return DatabaseConnect.Instance.Connection.QueryAsync<T>(query.Sql, query.NamedBindings);
        }
        private static readonly HttpClient client = new HttpClient();
        public static async Task<IEnumerable<T>> OdbcExecute<T>(this Query sql) where T : class, new()
        {
            var query = QueryHelper.CreateQueryFactory(sql).Compiler.Compile(sql);
            var values = new Dictionary<string, string>();
            values["db"] = "jz";
            values["user"] = Settings.Get.Odbc.user;
            values["password"] = Settings.Get.Odbc.password;
            var url = new Uri(Settings.Get.Odbc.path);
            values["q"] = query.ToString();
            if (!client.DefaultRequestHeaders.Any(x => x.Key.Equals("secret")))
            {
                client.DefaultRequestHeaders.Add("secret", "6f555414cca6be3825f3d5fcb9f09220");
            }
            var content = new FormUrlEncodedContent(values);

            var response = await client.PostAsync(url, content);

            var responseString = await response.Content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<IEnumerable<T>>(responseString);
        }
    }
}

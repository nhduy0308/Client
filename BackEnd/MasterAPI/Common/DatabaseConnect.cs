using SqlKata.Compilers;
using SqlKata.Execution;
using System;
using System.Data;
using System.Data.Odbc;
using System.Data.SqlClient;

namespace Common
{
    public class DatabaseConnect
    {
        private static DatabaseConnect _instance { get; set; }
        public static DatabaseConnect Instance
        {
            get
            {
                return _instance ?? (_instance = new DatabaseConnect(null));
            }
        }
        public DatabaseConnect(IDbConnection connection)
        {
            if(connection == null)
            {
                this.Connection = SqlServerConnection;
            }
            else
            {
                this.Connection = connection;
            }
        }
        public IDbConnection Connection { get; set; }
        public IDbTransaction Transaction { get; set; }
        private QueryFactory _db { get; set; }
        public QueryFactory db
        {
            get
            {
                this.Connection = this.SqlServerConnection;
                return new QueryFactory(this.Connection, new SqlServerCompiler());
            }
        }
        public QueryFactory odbc
        {
            get
            {
                this.Connection = this.OdbcConnection;
                return new QueryFactory(this.Connection, new MySqlCompiler());
            }
        }
        public IDbTransaction BeginTransaction()
        {
            if(Connection == null)
            {
                Connection = SqlServerConnection;
            }
            return Connection.BeginTransaction();
        }
        public IDbConnection OdbcConnection
        {
            get
            {
                return new OdbcConnection(Settings.Get.Odbc.connection);
            }
        }
        public IDbConnection SqlServerConnection
        {
            get
            {
                return new SqlConnection(Settings.Get.SqlServer.connection);
            }
        }
    }
}

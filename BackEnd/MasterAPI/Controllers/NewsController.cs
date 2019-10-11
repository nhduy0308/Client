using Common;
using Dapper.FastCrud;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace MasterAPI.Controllers
{
    public class NewsController : ApiController
    {
        [HttpGet]
        public async Task<IHttpActionResult> NewsBox()
        {
            var result = await DatabaseConnect.Instance.SqlServerConnection.FindAsync<News>(s => s.Include<User>().Include<NewsGroup>());
            return Ok(result.Select(x =>
            {
                return new
                {
                    id = x.Id,
                    title = x.Title,
                    description = x.Description,
                    author = x.User?.CharacterName,
                    createdDate = x.CreatedDate?.ToString("dd/MM/yyyy HH:mm:ss"),
                    image = x.Image,
                    groupName = x.NewsGroup?.Name,
                    views = x.Views
                };
            }));
        }

        [HttpGet]
        public async Task<IHttpActionResult> LastNews()
        {
            var result = await DatabaseConnect.Instance.SqlServerConnection.FindAsync<NewsGroup>(s => s.Include<News>());
            return Ok(result.Select(x =>
            {
                return new
                {
                    id = x.Id,
                    name = x.Name,
                    news = x.News.Select(n =>
                    {
                        return new
                        {
                            id = n.Id,
                            title = n.Title,
                            description = n.Description,
                            author = n.User?.CharacterName,
                            createdDate = n.CreatedDate?.ToString("dd/MM/yyyy HH:mm:ss"),
                            image = n.Image,
                            groupName = n.NewsGroup?.Name,
                            views = n.Views
                        };
                    })
                };
            }));
        }
    }
}

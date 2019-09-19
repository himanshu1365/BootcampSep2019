using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Flipkart.CustomModels;
using Flipkart.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Flipkart.Controllers
{
    [Produces("application/json")]
    [Route("api/Orders")]
    public class OrdersController : Controller
    {
        shopping_cartContext db = new shopping_cartContext();

        // GET: api/Orders
        [HttpGet]
        public IEnumerable<OrderResponse> Get()
        {
            var items = db.Orders.Select(s => new OrderResponse() { Price = s.Price, Quantity = s.Quantity, Pname = s.Pname });

            return items;
        }

        // GET: api/Orders/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            //var items = db.Brands.Join(Orders)
            //var items = db.Orders.Join(Brands,
               // dc => dc.BrandId,
                //d => d.BrandId,
                //(dc,d) => new { Orders = dc, Brands = d})
                //.;
            return "value";
        }
        
        // POST: api/Orders
        [HttpPost]
        public void Post([FromBody]Orders value)
        {
            db.Orders.Add(value);
            db.SaveChanges();
        }
        
        // PUT: api/Orders/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]OrderResponse value)
        {
            var entity = db.Orders.FirstOrDefault(e => e.BrandId == id);
            entity.Quantity = value.Quantity;
            db.SaveChanges();
        }
        
        // DELETE: api/Orders/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var items = db.Orders.Find(id);
            db.Orders.Remove(items);
            db.SaveChanges();
        }
    }
}

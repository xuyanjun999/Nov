using System;
using Abp.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Nov.Data.DbContext
{
    public class NovDbContext:AbpDbContext
    {
        public NovDbContext(DbContextOptions options):base(options)
        {
            
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dioptra.Api.Authorization;
using Dioptra.Api.Services;
using Dioptra.Api.Services.Interfaces;
using Domain.Models.Entities;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MongoContext;

namespace Dioptra.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped(typeof(IBaseService<>), typeof(BaseService<>));
            services.AddScoped<IAuthenticationProvider, AuthenticationProvider>();
            services.AddScoped<IUserService, UserService>();
            services.AddSingleton((ctx) =>
            {
                var connectionString = Configuration.GetConnectionString("DefaultConnection");
                return new DataContext(connectionString);
            });

            services.AddCors();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
            EnsureAdmin();
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseMvc();
        }

        private async void EnsureAdmin()
        {
            try
            {
                var ctx = new DataContext(Configuration.GetConnectionString("DefaultConnection"));
                var adminExists = (await ctx.Users.Get(x => x.UserName == "admin")).SingleOrDefault();
                if (adminExists == null)
                {
                    var admin = new User();
                    admin.UserName = "admin";
                    admin.PasswordHash = AuthManager.HashPassword("1234");
                    admin.Name = "geakmh";
                    admin.LastName = "geakmh";
                    await ctx.Users.Insert(admin);
                }
            }
            catch (Exception ex)
            {
                var temp = ex;
            }
        }
    }
}

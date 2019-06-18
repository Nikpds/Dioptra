using Dioptra.Admin.Api.Authorization;
using Dioptra.Admin.Api.Models;
using Dioptra.Admin.Api.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Dioptra.Admin.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }


        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<IAuthenticationProvider, AuthenticationProvider>();
            services.AddSingleton((ctx) =>
            {
                var connectionString = Configuration.GetConnectionString("DefaultConnection");
                return new DataContext(connectionString);
            });

            services.AddCors();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
        }


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

                app.UseHsts();
            }

            //app.UseHttpsRedirection();
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

using System;
using System.Linq;
using Dioptra.Api.Authorization;
using Dioptra.Api.Services;
using Dioptra.Api.Services.Interfaces;
using Dioptra.Models.Entities;
using Dioptra.Mongo;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

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
                    admin.FullName = "Σγος (ΕΠ) Περπερίδης Νικόλαος";
                    admin.Email = "perpegr@hotmail.com";
                    admin.Phone = "6001128";
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

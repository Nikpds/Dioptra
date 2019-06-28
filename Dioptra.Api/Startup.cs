using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using Dioptra.Api.Authorization;
using Dioptra.Api.Services;
using Dioptra.Api.Services.Interfaces;
using Dioptra.Models.Entities;
using Dioptra.Mongo;
using Dioptra.Mongo.Interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using Serilog;
using Swashbuckle.AspNetCore.Swagger;

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
            //services.AddScoped(typeof(IBaseService<>), typeof(BaseService<>));
            services.AddScoped<IAuthenticationProvider, AuthenticationProvider>();
            services.AddScoped<IUserService, UserService>();

            services.AddSingleton<IDataContext, DataContext>((ctx) =>
            {
                var connectionString = Configuration.GetConnectionString("Dioptra");
                return new DataContext(connectionString);
            });

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(cfg =>
            {
                cfg.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = Configuration["Jwt:Issuer"],
                    ValidAudience = Configuration["Jwt:Issuer"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Jwt:Key"]))
                };

            });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "Dioptra API", Version = "v1" });
                c.AddSecurityDefinition("Bearer", new ApiKeyScheme { In = "header", Description = "Please enter JWT with Bearer into field", Name = "Authorization", Type = "apiKey" });
                c.AddSecurityRequirement(new Dictionary<string, IEnumerable<string>> { { "Bearer", Enumerable.Empty<string>() } });
            });
            services.AddCors();
            services.AddMvc(o =>
            {
                var policy = new AuthorizationPolicyBuilder()
                    .RequireAuthenticatedUser()
                    .Build();
                o.Filters.Add(new AuthorizeFilter(policy));
            }).SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.Use(async (ctx, next) =>
            {
                await next();
                if (ctx.Response.StatusCode == 204)
                {
                    ctx.Response.ContentLength = 0;
                }
            });

            app.UseCors(builder => builder
                .AllowAnyOrigin()
                .AllowAnyHeader().AllowAnyMethod().AllowCredentials());

            EnsureAdmin();

            app.UseExceptionHandler(options =>
            {
                options.Run(
                    async context =>
                    {
                        context.Response.Headers.Add("Access-Control-Allow-Origin", "*");
                        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                        context.Response.ContentType = "application/json";
                        var ex = context.Features.Get<IExceptionHandlerFeature>();
                        if (ex != null)
                        {
                            Log.Error(ex.Error, ex.Error.Message);
                            var result = JsonConvert.SerializeObject(ex.Error);
                            await context.Response.WriteAsync(result).ConfigureAwait(false);
                        }
                    });
            });

            app.UseStatusCodePages(async context =>
            {
                var message = "";
                switch (context.HttpContext.Response.StatusCode)
                {
                    case 401:
                        message = "Unauthorized call. Please login again.";
                        break;
                    case 404:
                        message = "Not Found.";
                        break;
                }

                var result = JsonConvert.SerializeObject(new
                {
                    Code = context.HttpContext.Response.StatusCode,
                    Message = message
                });

                context.HttpContext.Response.ContentType = "application/json";
                await context.HttpContext.Response.WriteAsync(result);
            });


            app.UseAuthentication();
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "DIOPTRA API V1");
            });
            app.UseStaticFiles();
            app.UseHttpsRedirection();
            app.UseMvc();
        }

        private async void EnsureAdmin()
        {
            try
            {
                var ctx = new DataContext(Configuration.GetConnectionString("Dioptra"));
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

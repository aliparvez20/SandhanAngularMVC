using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SandhanAngularMVC.Startup))]
namespace SandhanAngularMVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

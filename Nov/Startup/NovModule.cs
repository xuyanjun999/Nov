using Abp.Modules;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.Reflection.Extensions;
using Abp.AspNetCore;
using Abp.AspNetCore.Configuration;
using Nov.Data;

namespace Nov.Startup
{
    [DependsOn(typeof(AbpAspNetCoreModule),typeof(NovDataModule))]
    public class NovModule:AbpModule
    {
        public override void PreInitialize()
        {
            base.PreInitialize();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(NovModule).GetAssembly());
            base.Initialize();
        }

        public override void PostInitialize()
        {
            base.PostInitialize();
        }

        public override void Shutdown()
        {
            base.Shutdown();
        }
    }
}

using System;
using Abp.EntityFrameworkCore;
using Abp.Modules;
using Abp.Reflection.Extensions;

namespace Nov.Data
{

    [DependsOn(typeof(AbpEntityFrameworkCoreModule))]
    public class NovDataModule:AbpModule
    {
        public override void PreInitialize()
        {
            base.PreInitialize();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(NovDataModule).GetAssembly());
            base.Initialize();
        }

        public override void PostInitialize()
        {
            base.PostInitialize();
        }
    }
}

using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace AssetManagement.Modules.AddAnAsset.DonateAsset
{
    [EnumKey("DonateAsset.Deductible"),ScriptInclude]
    public enum Deductible
    {
        [Description("Yes")]
        Yes = 1,
        [Description("No")]
        No = 2

    }
}
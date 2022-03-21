using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace AssetManagement
{
    [EnumKey("AssetDetails.DepreciableAsset"), ScriptInclude]
    public enum DepreciableAsset
    {
        [Description("No")]
        No = 1 ,
        [Description("Yes")]
        Yes = 2 
    }
}
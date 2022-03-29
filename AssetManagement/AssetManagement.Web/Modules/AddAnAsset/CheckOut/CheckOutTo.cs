using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace AssetManagement.Modules.AddAnAsset.CheckOut
{
    [EnumKey("CheckOut.CheckOutTo"), ScriptInclude]
    public enum CheckOutTo
    {
      [Description("Person")]
      Person = 1,
      [Description("Site/Location")]
      Site_Location= 2
    }
}

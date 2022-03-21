
namespace AssetManagement.Setup.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Setup"), TableName("[dbo].[State]")]
    [DisplayName("State"), InstanceName("State")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript(Permission = "*")]
    public sealed class StateRow : Row, IIdRow, INameRow
    {
        [DisplayName("State Id"), Identity]
        public Int32? StateId
        {
            get { return Fields.StateId[this]; }
            set { Fields.StateId[this] = value; }
        }

        [DisplayName("State Name"), Size(100), QuickSearch]
        public String StateName
        {
            get { return Fields.StateName[this]; }
            set { Fields.StateName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.StateId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.StateName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public StateRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field StateId;
            public StringField StateName;
        }
    }
}

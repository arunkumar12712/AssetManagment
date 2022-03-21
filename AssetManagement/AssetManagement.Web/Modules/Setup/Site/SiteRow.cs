
namespace AssetManagement.Setup.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Setup"), TableName("[dbo].[Site]")]
    [DisplayName("Site"), InstanceName("Site")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript(Permission ="*")]
    public sealed class SiteRow : Row, IIdRow, INameRow
    {
        [DisplayName("Site Id"), Identity]
        public Int32? SiteId
        {
            get { return Fields.SiteId[this]; }
            set { Fields.SiteId[this] = value; }
        }

        [DisplayName("Site Name"), QuickSearch]
        public String SiteName
        {
            get { return Fields.SiteName[this]; }
            set { Fields.SiteName[this] = value; }
        }

        [DisplayName("Description")]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Address")]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Suite")]
        public String Suite
        {
            get { return Fields.Suite[this]; }
            set { Fields.Suite[this] = value; }
        }

        [DisplayName("City"), Size(200)]
        public String City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("State"), ForeignKey("[dbo].[State]", "StateId"), LeftJoin("jState"), TextualField("StateStateName")]
        [LookupEditor(typeof(StateRow))]
        public Int32? StateId
        {
            get { return Fields.StateId[this]; }
            set { Fields.StateId[this] = value; }
        }

        [DisplayName("State Name"), Expression("jState.[StateName]")]
        public String StateStateName
        {
            get { return Fields.StateStateName[this]; }
            set { Fields.StateStateName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SiteId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SiteName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SiteRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SiteId;
            public StringField SiteName;
            public StringField Description;
            public StringField Address;
            public StringField Suite;
            public StringField City;
            public Int32Field StateId;

            public StringField StateStateName;
        }
    }
}

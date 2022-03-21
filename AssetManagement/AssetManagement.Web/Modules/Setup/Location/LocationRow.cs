
namespace AssetManagement.Setup.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Setup"), TableName("[dbo].[Location]")]
    [DisplayName("Location"), InstanceName("Location")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript(Permission = "*")]
    public sealed class LocationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Location Id"), Identity]
        public Int32? LocationId
        {
            get { return Fields.LocationId[this]; }
            set { Fields.LocationId[this] = value; }
        }

        [DisplayName("Site"), ForeignKey("[dbo].[Site]", "SiteId"), LeftJoin("jSite"), TextualField("SiteSiteName")]
        [LookupEditor(typeof(SiteRow))]
        public Int32? SiteId
        {
            get { return Fields.SiteId[this]; }
            set { Fields.SiteId[this] = value; }
        }

        [DisplayName("Location"), Size(200), QuickSearch]
        public String Location
        {
            get { return Fields.Location[this]; }
            set { Fields.Location[this] = value; }
        }

        [DisplayName("Site Name"), Expression("jSite.[SiteName]")]
        public String SiteSiteName
        {
            get { return Fields.SiteSiteName[this]; }
            set { Fields.SiteSiteName[this] = value; }
        }

        [DisplayName("Site Description"), Expression("jSite.[Description]")]
        public String SiteDescription
        {
            get { return Fields.SiteDescription[this]; }
            set { Fields.SiteDescription[this] = value; }
        }

        [DisplayName("Site Address"), Expression("jSite.[Address]")]
        public String SiteAddress
        {
            get { return Fields.SiteAddress[this]; }
            set { Fields.SiteAddress[this] = value; }
        }

        [DisplayName("Site Suite"), Expression("jSite.[Suite]")]
        public String SiteSuite
        {
            get { return Fields.SiteSuite[this]; }
            set { Fields.SiteSuite[this] = value; }
        }

        [DisplayName("Site City"), Expression("jSite.[City]")]
        public String SiteCity
        {
            get { return Fields.SiteCity[this]; }
            set { Fields.SiteCity[this] = value; }
        }

        [DisplayName("Site State Id"), Expression("jSite.[StateId]")]
        public Int32? SiteStateId
        {
            get { return Fields.SiteStateId[this]; }
            set { Fields.SiteStateId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.LocationId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Location; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LocationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field LocationId;
            public Int32Field SiteId;
            public StringField Location;

            public StringField SiteSiteName;
            public StringField SiteDescription;
            public StringField SiteAddress;
            public StringField SiteSuite;
            public StringField SiteCity;
            public Int32Field SiteStateId;
        }
    }
}

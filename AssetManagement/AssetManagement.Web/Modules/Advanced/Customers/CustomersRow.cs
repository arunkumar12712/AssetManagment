
namespace AssetManagement.Advanced.Entities
{
    using AssetManagement.Setup.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Advanced"), TableName("[dbo].[Customers]")]
    [DisplayName("Customers"), InstanceName("Customers")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript(Permission = "*")]
    public sealed class CustomersRow : Row, IIdRow, INameRow
    {
        [DisplayName("Customer Id"), Identity]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Customer Name"), Size(200), QuickSearch]
        public String CustomerName
        {
            get { return Fields.CustomerName[this]; }
            set { Fields.CustomerName[this] = value; }
        }

        [DisplayName("Company"), Size(200),QuickSearch]
        public String Company
        {
            get { return Fields.Company[this]; }
            set { Fields.Company[this] = value; }
        }

        [DisplayName("Address")]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("City"), Size(200)]
        public String City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("State"), ForeignKey("[dbo].[State]", "StateId"), LeftJoin("jSite"), TextualField("StateName")]
        [LookupEditor(typeof(StateRow))]
        public Int32? StateId
        {
            get { return Fields.StateId[this]; }
            set { Fields.StateId[this] = value; }
        }

        [DisplayName("Zip"), Size(100)]
        public String Zip
        {
            get { return Fields.Zip[this]; }
            set { Fields.Zip[this] = value; }
        }

        [DisplayName("Country"), ForeignKey("[dbo].[Country]", "CountryId"), LeftJoin("jCountry"), TextualField("CountryCountryName")]
        [LookupEditor(typeof(CountryRow))]
        public Int32? CountryId
        {
            get { return Fields.CountryId[this]; }
            set { Fields.CountryId[this] = value; }
        }

        [DisplayName("Phone"), Size(50)]
        public String Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        [DisplayName("Email"), Size(200)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Notes")]
        public String Notes
        {
            get { return Fields.Notes[this]; }
            set { Fields.Notes[this] = value; }
        }

        [DisplayName("State Name"), Expression("jSite.[StateName]")]
        public String StateName
        {
            get { return Fields.StateName[this]; }
            set { Fields.StateName[this] = value; }
        }

        //[DisplayName("Site Description"), Expression("jSite.[Description]")]
        //public String SiteDescription
        //{
        //    get { return Fields.SiteDescription[this]; }
        //    set { Fields.SiteDescription[this] = value; }
        //}

        //[DisplayName("Site Address"), Expression("jSite.[Address]")]
        //public String SiteAddress
        //{
        //    get { return Fields.SiteAddress[this]; }
        //    set { Fields.SiteAddress[this] = value; }
        //}

        //[DisplayName("Site Suite"), Expression("jSite.[Suite]")]
        //public String SiteSuite
        //{
        //    get { return Fields.SiteSuite[this]; }
        //    set { Fields.SiteSuite[this] = value; }
        //}

        //[DisplayName("Site City"), Expression("jSite.[City]")]
        //public String SiteCity
        //{
        //    get { return Fields.SiteCity[this]; }
        //    set { Fields.SiteCity[this] = value; }
        //}

        [DisplayName("Site State Id"), Expression("jSite.[StateId]")]
        public Int32? SiteStateId
        {
            get { return Fields.SiteStateId[this]; }
            set { Fields.SiteStateId[this] = value; }
        }

        [DisplayName("Country Name"), Expression("jCountry.[CountryName]")]
        public String CountryCountryName
        {
            get { return Fields.CountryCountryName[this]; }
            set { Fields.CountryCountryName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CustomerId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CustomerName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CustomerId;
            public StringField CustomerName;
            public StringField Company;
            public StringField Address;
            public StringField City;
            public Int32Field StateId;
            public StringField Zip;
            public Int32Field CountryId;
            public StringField Phone;
            public StringField Email;
            public StringField Notes;

            public StringField StateName;
            //public StringField SiteDescription;
            //public StringField SiteAddress;
            //public StringField SiteSuite;
            //public StringField SiteCity;
            public Int32Field SiteStateId;

            public StringField CountryCountryName;
        }
    }
}

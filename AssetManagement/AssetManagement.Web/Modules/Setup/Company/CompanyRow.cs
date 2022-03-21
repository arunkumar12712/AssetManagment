
namespace AssetManagement.Setup.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Setup"), TableName("[dbo].[Company]")]
    [DisplayName("Company"), InstanceName("Company")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CompanyRow : Row, IIdRow, INameRow
    {
        [DisplayName("Company Id"), PrimaryKey]
        public Int32? CompanyId
        {
            get { return Fields.CompanyId[this]; }
            set { Fields.CompanyId[this] = value; }
        }

        [DisplayName("Company Name"), Size(200), QuickSearch]
        public String CompanyName
        {
            get { return Fields.CompanyName[this]; }
            set { Fields.CompanyName[this] = value; }
        }

        [DisplayName("Country"), ForeignKey("[dbo].[Country]", "CountryId"), LeftJoin("jCountry"), TextualField("CountryCountryName")]
        [LookupEditor(typeof(CountryRow))]
        public Int32? CountryId
        {
            get { return Fields.CountryId[this]; }
            set { Fields.CountryId[this] = value; }
        }

        [DisplayName("Address")]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Suite"), Size(200)]
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

        [DisplayName("Postal Code"), Column("Postal Code"), Size(100)]
        public String PostalCode
        {
            get { return Fields.PostalCode[this]; }
            set { Fields.PostalCode[this] = value; }
        }

        [DisplayName("Country Name"), Expression("jCountry.[CountryName]")]
        public String CountryCountryName
        {
            get { return Fields.CountryCountryName[this]; }
            set { Fields.CountryCountryName[this] = value; }
        }

        [DisplayName("State Name"), Expression("jState.[StateName]")]
        public String StateStateName
        {
            get { return Fields.StateStateName[this]; }
            set { Fields.StateStateName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CompanyId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CompanyName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CompanyRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CompanyId;
            public StringField CompanyName;
            public Int32Field CountryId;
            public StringField Address;
            public StringField Suite;
            public StringField City;
            public Int32Field StateId;
            public StringField PostalCode;

            public StringField CountryCountryName;

            public StringField StateStateName;
        }
    }
}

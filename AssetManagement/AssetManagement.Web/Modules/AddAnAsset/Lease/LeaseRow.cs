
namespace AssetManagement.AddAnAsset.Entities
{
    using AssetManagement.Advanced.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("AddAnAsset"), TableName("[dbo].[Lease]")]
    [DisplayName("Lease"), InstanceName("Lease")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class LeaseRow : Row, IIdRow, INameRow
    {
        [DisplayName("Lease Id"), Identity]
        public Int32? LeaseId
        {
            get { return Fields.LeaseId[this]; }
            set { Fields.LeaseId[this] = value; }
        }

        [DisplayName("Lease Begins"), NotNull]
        public DateTime? LeaseBegins
        {
            get { return Fields.LeaseBegins[this]; }
            set { Fields.LeaseBegins[this] = value; }
        }

        [DisplayName("Leasing Customer"), NotNull, ForeignKey("[dbo].[Customers]", "CustomerId"), LeftJoin("jCustomer"), TextualField("CustomerName")]
        [LookupEditor(typeof(CustomersRow),InplaceAdd = true)]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Lease Expires")]
        public DateTime? LeaseExpires
        {
            get { return Fields.LeaseExpires[this]; }
            set { Fields.LeaseExpires[this] = value; }
        }

        [DisplayName("Notes"), QuickSearch]
        public String Notes
        {
            get { return Fields.Notes[this]; }
            set { Fields.Notes[this] = value; }
        }

        [DisplayName("Send Email")]
        public Boolean? SendEmail
        {
            get { return Fields.SendEmail[this]; }
            set { Fields.SendEmail[this] = value; }
        }

        [DisplayName(""), Size(200)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Asset"), ForeignKey("[dbo].[AssetDetails]", "AssetId"), LeftJoin("jAsset"), TextualField("AssetDescription")]
        public Int32? AssetId
        {
            get { return Fields.AssetId[this]; }
            set { Fields.AssetId[this] = value; }
        }

        [DisplayName("Customer Name"), Expression("jCustomer.[CustomerName]")]
        public String CustomerName
        {
            get { return Fields.CustomerName[this]; }
            set { Fields.CustomerName[this] = value; }
        }

        [DisplayName("Customer Company"), Expression("jCustomer.[Company]")]
        public String CustomerCompany
        {
            get { return Fields.CustomerCompany[this]; }
            set { Fields.CustomerCompany[this] = value; }
        }

        [DisplayName("Customer Address"), Expression("jCustomer.[Address]")]
        public String CustomerAddress
        {
            get { return Fields.CustomerAddress[this]; }
            set { Fields.CustomerAddress[this] = value; }
        }

        [DisplayName("Customer City"), Expression("jCustomer.[City]")]
        public String CustomerCity
        {
            get { return Fields.CustomerCity[this]; }
            set { Fields.CustomerCity[this] = value; }
        }

        [DisplayName("Customer Zip"), Expression("jCustomer.[Zip]")]
        public String CustomerZip
        {
            get { return Fields.CustomerZip[this]; }
            set { Fields.CustomerZip[this] = value; }
        }

        [DisplayName("Customer Country Id"), Expression("jCustomer.[CountryId]")]
        public Int32? CustomerCountryId
        {
            get { return Fields.CustomerCountryId[this]; }
            set { Fields.CustomerCountryId[this] = value; }
        }

        [DisplayName("Customer Phone"), Expression("jCustomer.[Phone]")]
        public String CustomerPhone
        {
            get { return Fields.CustomerPhone[this]; }
            set { Fields.CustomerPhone[this] = value; }
        }

        [DisplayName("Customer Email"), Expression("jCustomer.[Email]")]
        public String CustomerEmail
        {
            get { return Fields.CustomerEmail[this]; }
            set { Fields.CustomerEmail[this] = value; }
        }

        [DisplayName("Customer Notes"), Expression("jCustomer.[Notes]")]
        public String CustomerNotes
        {
            get { return Fields.CustomerNotes[this]; }
            set { Fields.CustomerNotes[this] = value; }
        }

        [DisplayName("Customer State Id"), Expression("jCustomer.[StateId]")]
        public Int32? CustomerStateId
        {
            get { return Fields.CustomerStateId[this]; }
            set { Fields.CustomerStateId[this] = value; }
        }

        [DisplayName("Asset Description"), Expression("jAsset.[Description]")]
        public String AssetDescription
        {
            get { return Fields.AssetDescription[this]; }
            set { Fields.AssetDescription[this] = value; }
        }

        [DisplayName("Asset Asset Tag Id"), Expression("jAsset.[AssetTagID]")]
        public Int32? AssetAssetTagId
        {
            get { return Fields.AssetAssetTagId[this]; }
            set { Fields.AssetAssetTagId[this] = value; }
        }

        [DisplayName("Asset Purchasedfrom"), Expression("jAsset.[Purchasedfrom]")]
        public String AssetPurchasedfrom
        {
            get { return Fields.AssetPurchasedfrom[this]; }
            set { Fields.AssetPurchasedfrom[this] = value; }
        }

        [DisplayName("Asset Purchase Date"), Expression("jAsset.[PurchaseDate]")]
        public DateTime? AssetPurchaseDate
        {
            get { return Fields.AssetPurchaseDate[this]; }
            set { Fields.AssetPurchaseDate[this] = value; }
        }

        [DisplayName("Asset Brand Id"), Expression("jAsset.[BrandId]")]
        public Int32? AssetBrandId
        {
            get { return Fields.AssetBrandId[this]; }
            set { Fields.AssetBrandId[this] = value; }
        }

        [DisplayName("Asset Cost"), Expression("jAsset.[Cost]")]
        public Decimal? AssetCost
        {
            get { return Fields.AssetCost[this]; }
            set { Fields.AssetCost[this] = value; }
        }

        [DisplayName("Asset Model"), Expression("jAsset.[Model]")]
        public String AssetModel
        {
            get { return Fields.AssetModel[this]; }
            set { Fields.AssetModel[this] = value; }
        }

        [DisplayName("Asset Color"), Expression("jAsset.[Color]")]
        public String AssetColor
        {
            get { return Fields.AssetColor[this]; }
            set { Fields.AssetColor[this] = value; }
        }

        [DisplayName("Asset Site Id"), Expression("jAsset.[SiteId]")]
        public Int32? AssetSiteId
        {
            get { return Fields.AssetSiteId[this]; }
            set { Fields.AssetSiteId[this] = value; }
        }

        [DisplayName("Asset Category Id"), Expression("jAsset.[CategoryId]")]
        public Int32? AssetCategoryId
        {
            get { return Fields.AssetCategoryId[this]; }
            set { Fields.AssetCategoryId[this] = value; }
        }

        [DisplayName("Asset Location Id"), Expression("jAsset.[LocationId]")]
        public Int32? AssetLocationId
        {
            get { return Fields.AssetLocationId[this]; }
            set { Fields.AssetLocationId[this] = value; }
        }

        [DisplayName("Asset Department Id"), Expression("jAsset.[DepartmentId]")]
        public Int32? AssetDepartmentId
        {
            get { return Fields.AssetDepartmentId[this]; }
            set { Fields.AssetDepartmentId[this] = value; }
        }

        [DisplayName("Asset Depreciable Asset"), Expression("jAsset.[DepreciableAsset]")]
        public Int32? AssetDepreciableAsset
        {
            get { return Fields.AssetDepreciableAsset[this]; }
            set { Fields.AssetDepreciableAsset[this] = value; }
        }

        [DisplayName("Asset Depreciable Cost"), Expression("jAsset.[DepreciableCost]")]
        public Decimal? AssetDepreciableCost
        {
            get { return Fields.AssetDepreciableCost[this]; }
            set { Fields.AssetDepreciableCost[this] = value; }
        }

        [DisplayName("Asset Asset Life"), Expression("jAsset.[AssetLife]")]
        public Int32? AssetAssetLife
        {
            get { return Fields.AssetAssetLife[this]; }
            set { Fields.AssetAssetLife[this] = value; }
        }

        [DisplayName("Asset Salvage Value"), Expression("jAsset.[SalvageValue]")]
        public Decimal? AssetSalvageValue
        {
            get { return Fields.AssetSalvageValue[this]; }
            set { Fields.AssetSalvageValue[this] = value; }
        }

        [DisplayName("Asset Depreciation Method"), Expression("jAsset.[DepreciationMethod]")]
        public String AssetDepreciationMethod
        {
            get { return Fields.AssetDepreciationMethod[this]; }
            set { Fields.AssetDepreciationMethod[this] = value; }
        }

        [DisplayName("Asset Date Acquired"), Expression("jAsset.[DateAcquired]")]
        public DateTime? AssetDateAcquired
        {
            get { return Fields.AssetDateAcquired[this]; }
            set { Fields.AssetDateAcquired[this] = value; }
        }

        [DisplayName("Asset Asset Photo"), Expression("jAsset.[AssetPhoto]")]
        public String AssetAssetPhoto
        {
            get { return Fields.AssetAssetPhoto[this]; }
            set { Fields.AssetAssetPhoto[this] = value; }
        }

        [DisplayName("Asset Createdby"), Expression("jAsset.[Createdby]")]
        public String AssetCreatedby
        {
            get { return Fields.AssetCreatedby[this]; }
            set { Fields.AssetCreatedby[this] = value; }
        }

        [DisplayName("Asset On Created"), Expression("jAsset.[OnCreated]")]
        public DateTime? AssetOnCreated
        {
            get { return Fields.AssetOnCreated[this]; }
            set { Fields.AssetOnCreated[this] = value; }
        }

        [DisplayName("Asset User Id"), Expression("jAsset.[UserId]")]
        public Int32? AssetUserId
        {
            get { return Fields.AssetUserId[this]; }
            set { Fields.AssetUserId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.LeaseId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Notes; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LeaseRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field LeaseId;
            public DateTimeField LeaseBegins;
            public Int32Field CustomerId;
            public DateTimeField LeaseExpires;
            public StringField Notes;
            public BooleanField SendEmail;
            public StringField Email;
            public Int32Field AssetId;

            public StringField CustomerName;
            public StringField CustomerCompany;
            public StringField CustomerAddress;
            public StringField CustomerCity;
            public StringField CustomerZip;
            public Int32Field CustomerCountryId;
            public StringField CustomerPhone;
            public StringField CustomerEmail;
            public StringField CustomerNotes;
            public Int32Field CustomerStateId;

            public StringField AssetDescription;
            public Int32Field AssetAssetTagId;
            public StringField AssetPurchasedfrom;
            public DateTimeField AssetPurchaseDate;
            public Int32Field AssetBrandId;
            public DecimalField AssetCost;
            public StringField AssetModel;
            public StringField AssetColor;
            public Int32Field AssetSiteId;
            public Int32Field AssetCategoryId;
            public Int32Field AssetLocationId;
            public Int32Field AssetDepartmentId;
            public Int32Field AssetDepreciableAsset;
            public DecimalField AssetDepreciableCost;
            public Int32Field AssetAssetLife;
            public DecimalField AssetSalvageValue;
            public StringField AssetDepreciationMethod;
            public DateTimeField AssetDateAcquired;
            public StringField AssetAssetPhoto;
            public StringField AssetCreatedby;
            public DateTimeField AssetOnCreated;
            public Int32Field AssetUserId;
        }
    }
}

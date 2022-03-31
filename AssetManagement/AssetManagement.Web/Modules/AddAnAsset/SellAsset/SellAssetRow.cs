
namespace AssetManagement.AddAnAsset.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("AddAnAsset"), TableName("[dbo].[SellAsset]")]
    [DisplayName("Sell Asset"), InstanceName("Sell Asset")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SellAssetRow : Row, IIdRow, INameRow
    {
        [DisplayName("Sell Id"), Identity]
        public Int32? SellId
        {
            get { return Fields.SellId[this]; }
            set { Fields.SellId[this] = value; }
        }

        [DisplayName("Sale Date"), NotNull]
        public DateTime? SaleDate
        {
            get { return Fields.SaleDate[this]; }
            set { Fields.SaleDate[this] = value; }
        }

        [DisplayName("Sold To"), Size(200), QuickSearch]
        public String SoldTo
        {
            get { return Fields.SoldTo[this]; }
            set { Fields.SoldTo[this] = value; }
        }

        [DisplayName("Sale Amount"), Size(19), Scale(4)]
        public Decimal? SaleAmount
        {
            get { return Fields.SaleAmount[this]; }
            set { Fields.SaleAmount[this] = value; }
        }

        [DisplayName("Notes")]
        public String Notes
        {
            get { return Fields.Notes[this]; }
            set { Fields.Notes[this] = value; }
        }

        [DisplayName("Asset"), ReadOnly(true), ForeignKey("[dbo].[AssetDetails]", "AssetId"), LeftJoin("jAsset"), TextualField("AssetDescription")]
        public Int32? AssetId
        {
            get { return Fields.AssetId[this]; }
            set { Fields.AssetId[this] = value; }
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
            get { return Fields.SellId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SoldTo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SellAssetRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SellId;
            public DateTimeField SaleDate;
            public StringField SoldTo;
            public DecimalField SaleAmount;
            public StringField Notes;
            public Int32Field AssetId;

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

namespace AssetManagement.AddAnAsset {
    export interface DonateAssetRow {
        DonateId?: number;
        DateDonated?: string;
        DonateTo?: string;
        DonateValue?: number;
        Deductible?: string;
        Notes?: string;
        AssetId?: number;
        AssetDescription?: string;
        AssetAssetTagId?: number;
        AssetPurchasedfrom?: string;
        AssetPurchaseDate?: string;
        AssetBrandId?: number;
        AssetCost?: number;
        AssetModel?: string;
        AssetColor?: string;
        AssetSiteId?: number;
        AssetCategoryId?: number;
        AssetLocationId?: number;
        AssetDepartmentId?: number;
        AssetDepreciableAsset?: number;
        AssetDepreciableCost?: number;
        AssetAssetLife?: number;
        AssetSalvageValue?: number;
        AssetDepreciationMethod?: string;
        AssetDateAcquired?: string;
        AssetAssetPhoto?: string;
        AssetCreatedby?: string;
        AssetOnCreated?: string;
        AssetUserId?: number;
    }

    export namespace DonateAssetRow {
        export const idProperty = 'DonateId';
        export const nameProperty = 'DonateTo';
        export const localTextPrefix = 'AddAnAsset.DonateAsset';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            DonateId = "DonateId",
            DateDonated = "DateDonated",
            DonateTo = "DonateTo",
            DonateValue = "DonateValue",
            Deductible = "Deductible",
            Notes = "Notes",
            AssetId = "AssetId",
            AssetDescription = "AssetDescription",
            AssetAssetTagId = "AssetAssetTagId",
            AssetPurchasedfrom = "AssetPurchasedfrom",
            AssetPurchaseDate = "AssetPurchaseDate",
            AssetBrandId = "AssetBrandId",
            AssetCost = "AssetCost",
            AssetModel = "AssetModel",
            AssetColor = "AssetColor",
            AssetSiteId = "AssetSiteId",
            AssetCategoryId = "AssetCategoryId",
            AssetLocationId = "AssetLocationId",
            AssetDepartmentId = "AssetDepartmentId",
            AssetDepreciableAsset = "AssetDepreciableAsset",
            AssetDepreciableCost = "AssetDepreciableCost",
            AssetAssetLife = "AssetAssetLife",
            AssetSalvageValue = "AssetSalvageValue",
            AssetDepreciationMethod = "AssetDepreciationMethod",
            AssetDateAcquired = "AssetDateAcquired",
            AssetAssetPhoto = "AssetAssetPhoto",
            AssetCreatedby = "AssetCreatedby",
            AssetOnCreated = "AssetOnCreated",
            AssetUserId = "AssetUserId"
        }
    }
}


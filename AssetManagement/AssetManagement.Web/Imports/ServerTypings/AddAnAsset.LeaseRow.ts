namespace AssetManagement.AddAnAsset {
    export interface LeaseRow {
        LeaseId?: number;
        LeaseBegins?: string;
        CustomerId?: number;
        LeaseExpires?: string;
        Notes?: string;
        SendEmail?: boolean;
        Email?: string;
        AssetId?: number;
        CustomerName?: string;
        CustomerCompany?: string;
        CustomerAddress?: string;
        CustomerCity?: string;
        CustomerZip?: string;
        CustomerCountryId?: number;
        CustomerPhone?: string;
        CustomerEmail?: string;
        CustomerNotes?: string;
        CustomerStateId?: number;
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

    export namespace LeaseRow {
        export const idProperty = 'LeaseId';
        export const nameProperty = 'Notes';
        export const localTextPrefix = 'AddAnAsset.Lease';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            LeaseId = "LeaseId",
            LeaseBegins = "LeaseBegins",
            CustomerId = "CustomerId",
            LeaseExpires = "LeaseExpires",
            Notes = "Notes",
            SendEmail = "SendEmail",
            Email = "Email",
            AssetId = "AssetId",
            CustomerName = "CustomerName",
            CustomerCompany = "CustomerCompany",
            CustomerAddress = "CustomerAddress",
            CustomerCity = "CustomerCity",
            CustomerZip = "CustomerZip",
            CustomerCountryId = "CustomerCountryId",
            CustomerPhone = "CustomerPhone",
            CustomerEmail = "CustomerEmail",
            CustomerNotes = "CustomerNotes",
            CustomerStateId = "CustomerStateId",
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


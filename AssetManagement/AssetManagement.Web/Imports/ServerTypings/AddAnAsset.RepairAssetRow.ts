namespace AssetManagement.AddAnAsset {
    export interface RepairAssetRow {
        Id?: number;
        ScheduleDate?: string;
        AssignedTo?: string;
        DateCompleted?: string;
        RepairCost?: number;
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

    export namespace RepairAssetRow {
        export const idProperty = 'Id';
        export const nameProperty = 'AssignedTo';
        export const localTextPrefix = 'AddAnAsset.RepairAsset';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            ScheduleDate = "ScheduleDate",
            AssignedTo = "AssignedTo",
            DateCompleted = "DateCompleted",
            RepairCost = "RepairCost",
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


namespace AssetManagement.AddAnAsset {
    export interface AssetMaintenanceRow {
        AssetMaintenanceId?: number;
        Title?: string;
        Details?: string;
        DueDate?: string;
        MaintenanceBy?: string;
        Id?: number;
        DateCompleted?: string;
        MaintenanceStatus?: string;
        AssetId?: number;
    }

    export namespace AssetMaintenanceRow {
        export const idProperty = 'AssetMaintenanceId';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'AddAnAsset.AssetMaintenance';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            AssetMaintenanceId = "AssetMaintenanceId",
            Title = "Title",
            Details = "Details",
            DueDate = "DueDate",
            MaintenanceBy = "MaintenanceBy",
            Id = "Id",
            DateCompleted = "DateCompleted",
            MaintenanceStatus = "MaintenanceStatus",
            AssetId = "AssetId"
        }
    }
}


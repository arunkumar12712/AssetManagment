namespace AssetManagement.Setup {
    export interface MaintenanceStatusRow {
        Id?: number;
        MaintenanceStatus?: string;
    }

    export namespace MaintenanceStatusRow {
        export const idProperty = 'Id';
        export const nameProperty = 'MaintenanceStatus';
        export const localTextPrefix = 'Setup.MaintenanceStatus';
        export const lookupKey = 'Setup.MaintenanceStatus';

        export function getLookup(): Q.Lookup<MaintenanceStatusRow> {
            return Q.getLookup<MaintenanceStatusRow>('Setup.MaintenanceStatus');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            MaintenanceStatus = "MaintenanceStatus"
        }
    }
}


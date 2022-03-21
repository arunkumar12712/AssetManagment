namespace AssetManagement.Setup {
    export interface SiteRow {
        SiteId?: number;
        SiteName?: string;
        Description?: string;
        Address?: string;
        Suite?: string;
        City?: string;
        StateId?: number;
        StateStateName?: string;
    }

    export namespace SiteRow {
        export const idProperty = 'SiteId';
        export const nameProperty = 'SiteName';
        export const localTextPrefix = 'Setup.Site';
        export const lookupKey = 'Setup.Site';

        export function getLookup(): Q.Lookup<SiteRow> {
            return Q.getLookup<SiteRow>('Setup.Site');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            SiteId = "SiteId",
            SiteName = "SiteName",
            Description = "Description",
            Address = "Address",
            Suite = "Suite",
            City = "City",
            StateId = "StateId",
            StateStateName = "StateStateName"
        }
    }
}


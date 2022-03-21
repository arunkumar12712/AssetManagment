namespace AssetManagement.Setup {
    export interface LocationRow {
        LocationId?: number;
        SiteId?: number;
        Location?: string;
        SiteSiteName?: string;
        SiteDescription?: string;
        SiteAddress?: string;
        SiteSuite?: string;
        SiteCity?: string;
        SiteStateId?: number;
    }

    export namespace LocationRow {
        export const idProperty = 'LocationId';
        export const nameProperty = 'Location';
        export const localTextPrefix = 'Setup.Location';
        export const lookupKey = 'Setup.Location';

        export function getLookup(): Q.Lookup<LocationRow> {
            return Q.getLookup<LocationRow>('Setup.Location');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            LocationId = "LocationId",
            SiteId = "SiteId",
            Location = "Location",
            SiteSiteName = "SiteSiteName",
            SiteDescription = "SiteDescription",
            SiteAddress = "SiteAddress",
            SiteSuite = "SiteSuite",
            SiteCity = "SiteCity",
            SiteStateId = "SiteStateId"
        }
    }
}


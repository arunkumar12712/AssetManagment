namespace AssetManagement.Advanced {
    export interface EmployeeRow {
        EmployeeId?: number;
        EmployeeName?: string;
        Title?: string;
        Phone?: string;
        Email?: string;
        SiteId?: number;
        LocationId?: number;
        DepartmentId?: number;
        Note?: string;
        SiteSiteName?: string;
        SiteDescription?: string;
        SiteAddress?: string;
        SiteSuite?: string;
        SiteCity?: string;
        SiteStateId?: number;
        LocationSiteId?: number;
        Location?: string;
        Department?: string;
    }

    export namespace EmployeeRow {
        export const idProperty = 'EmployeeId';
        export const nameProperty = 'EmployeeName';
        export const localTextPrefix = 'Advanced.Employee';
        export const lookupKey = 'Advanced.Employee';

        export function getLookup(): Q.Lookup<EmployeeRow> {
            return Q.getLookup<EmployeeRow>('Advanced.Employee');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            Title = "Title",
            Phone = "Phone",
            Email = "Email",
            SiteId = "SiteId",
            LocationId = "LocationId",
            DepartmentId = "DepartmentId",
            Note = "Note",
            SiteSiteName = "SiteSiteName",
            SiteDescription = "SiteDescription",
            SiteAddress = "SiteAddress",
            SiteSuite = "SiteSuite",
            SiteCity = "SiteCity",
            SiteStateId = "SiteStateId",
            LocationSiteId = "LocationSiteId",
            Location = "Location",
            Department = "Department"
        }
    }
}


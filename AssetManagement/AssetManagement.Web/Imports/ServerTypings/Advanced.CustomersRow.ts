namespace AssetManagement.Advanced {
    export interface CustomersRow {
        CustomerId?: number;
        CustomerName?: string;
        Company?: string;
        Address?: string;
        City?: string;
        StateId?: number;
        Zip?: string;
        CountryId?: number;
        Phone?: string;
        Email?: string;
        Notes?: string;
        StateName?: string;
        SiteStateId?: number;
        CountryCountryName?: string;
    }

    export namespace CustomersRow {
        export const idProperty = 'CustomerId';
        export const nameProperty = 'CustomerName';
        export const localTextPrefix = 'Advanced.Customers';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CustomerId = "CustomerId",
            CustomerName = "CustomerName",
            Company = "Company",
            Address = "Address",
            City = "City",
            StateId = "StateId",
            Zip = "Zip",
            CountryId = "CountryId",
            Phone = "Phone",
            Email = "Email",
            Notes = "Notes",
            StateName = "StateName",
            SiteStateId = "SiteStateId",
            CountryCountryName = "CountryCountryName"
        }
    }
}


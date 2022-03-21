namespace AssetManagement.Advanced {
    export interface FundingRow {
        FundingId?: number;
        Name?: string;
        Description?: string;
        Amount?: number;
        StartDate?: string;
        EndDate?: string;
        IsActive?: boolean;
        Notes?: string;
    }

    export namespace FundingRow {
        export const idProperty = 'FundingId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Advanced.Funding';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            FundingId = "FundingId",
            Name = "Name",
            Description = "Description",
            Amount = "Amount",
            StartDate = "StartDate",
            EndDate = "EndDate",
            IsActive = "IsActive",
            Notes = "Notes"
        }
    }
}


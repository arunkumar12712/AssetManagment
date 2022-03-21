namespace AssetManagement.AddAnAsset {
    export namespace AssetMaintenanceService {
        export const baseUrl = 'AddAnAsset/AssetMaintenance';

        export declare function Create(request: Serenity.SaveRequest<AssetMaintenanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AssetMaintenanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetMaintenanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetMaintenanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "AddAnAsset/AssetMaintenance/Create",
            Update = "AddAnAsset/AssetMaintenance/Update",
            Delete = "AddAnAsset/AssetMaintenance/Delete",
            Retrieve = "AddAnAsset/AssetMaintenance/Retrieve",
            List = "AddAnAsset/AssetMaintenance/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>AssetMaintenanceService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


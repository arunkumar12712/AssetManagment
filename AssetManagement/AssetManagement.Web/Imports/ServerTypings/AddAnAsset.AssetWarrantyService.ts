namespace AssetManagement.AddAnAsset {
    export namespace AssetWarrantyService {
        export const baseUrl = 'AddAnAsset/AssetWarranty';

        export declare function Create(request: Serenity.SaveRequest<AssetWarrantyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AssetWarrantyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetWarrantyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetWarrantyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "AddAnAsset/AssetWarranty/Create",
            Update = "AddAnAsset/AssetWarranty/Update",
            Delete = "AddAnAsset/AssetWarranty/Delete",
            Retrieve = "AddAnAsset/AssetWarranty/Retrieve",
            List = "AddAnAsset/AssetWarranty/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>AssetWarrantyService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


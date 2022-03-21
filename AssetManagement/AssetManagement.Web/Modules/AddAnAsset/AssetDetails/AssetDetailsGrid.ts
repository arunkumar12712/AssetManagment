
namespace AssetManagement.AddAnAsset {

    @Serenity.Decorators.registerClass()
    export class AssetDetailsGrid extends Serenity.EntityGrid<AssetDetailsRow, any> {
        protected getColumnsKey() { return 'AddAnAsset.AssetDetails'; }
        protected getDialogType() { return AssetDetailsDialog; }
        protected getIdProperty() { return AssetDetailsRow.idProperty; }
        protected getInsertPermission() { return AssetDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return AssetDetailsRow.localTextPrefix; }
        protected getService() { return AssetDetailsService.baseUrl; }
    }
}
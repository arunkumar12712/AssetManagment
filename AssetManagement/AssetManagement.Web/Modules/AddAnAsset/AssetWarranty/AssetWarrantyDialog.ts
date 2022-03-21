
namespace AssetManagement.AddAnAsset {

    @Serenity.Decorators.registerClass()
    export class AssetWarrantyDialog extends Serenity.EntityDialog<AssetWarrantyRow, any> {
        protected getFormKey() { return AssetWarrantyForm.formKey; }
        protected getIdProperty() { return AssetWarrantyRow.idProperty; }
        protected getLocalTextPrefix() { return AssetWarrantyRow.localTextPrefix; }
        protected getNameProperty() { return AssetWarrantyRow.nameProperty; }
        protected getService() { return AssetWarrantyService.baseUrl; }
        protected getDeletePermission() { return AssetWarrantyRow.deletePermission; }
        protected getInsertPermission() { return AssetWarrantyRow.insertPermission; }
        protected getUpdatePermission() { return AssetWarrantyRow.updatePermission; }

        protected form = new AssetWarrantyForm(this.idPrefix);

    }
}
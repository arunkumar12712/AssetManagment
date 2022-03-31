
namespace AssetManagement.AddAnAsset {

    @Serenity.Decorators.registerClass()
    export class BrokenAssetDialog extends Serenity.EntityDialog<BrokenAssetRow, any> {
        protected getFormKey() { return BrokenAssetForm.formKey; }
        protected getIdProperty() { return BrokenAssetRow.idProperty; }
        protected getLocalTextPrefix() { return BrokenAssetRow.localTextPrefix; }
        protected getNameProperty() { return BrokenAssetRow.nameProperty; }
        protected getService() { return BrokenAssetService.baseUrl; }
        protected getDeletePermission() { return BrokenAssetRow.deletePermission; }
        protected getInsertPermission() { return BrokenAssetRow.insertPermission; }
        protected getUpdatePermission() { return BrokenAssetRow.updatePermission; }

        protected form = new BrokenAssetForm(this.idPrefix);

    }
}

namespace AssetManagement.AddAnAsset {

    @Serenity.Decorators.registerClass()
    export class SellAssetDialog extends Serenity.EntityDialog<SellAssetRow, any> {
        protected getFormKey() { return SellAssetForm.formKey; }
        protected getIdProperty() { return SellAssetRow.idProperty; }
        protected getLocalTextPrefix() { return SellAssetRow.localTextPrefix; }
        protected getNameProperty() { return SellAssetRow.nameProperty; }
        protected getService() { return SellAssetService.baseUrl; }
        protected getDeletePermission() { return SellAssetRow.deletePermission; }
        protected getInsertPermission() { return SellAssetRow.insertPermission; }
        protected getUpdatePermission() { return SellAssetRow.updatePermission; }

        protected form = new SellAssetForm(this.idPrefix);

    }
}
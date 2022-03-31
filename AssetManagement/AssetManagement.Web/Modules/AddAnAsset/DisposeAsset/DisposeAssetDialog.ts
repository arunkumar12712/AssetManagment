
namespace AssetManagement.AddAnAsset {

    @Serenity.Decorators.registerClass()
    export class DisposeAssetDialog extends Serenity.EntityDialog<DisposeAssetRow, any> {
        protected getFormKey() { return DisposeAssetForm.formKey; }
        protected getIdProperty() { return DisposeAssetRow.idProperty; }
        protected getLocalTextPrefix() { return DisposeAssetRow.localTextPrefix; }
        protected getNameProperty() { return DisposeAssetRow.nameProperty; }
        protected getService() { return DisposeAssetService.baseUrl; }
        protected getDeletePermission() { return DisposeAssetRow.deletePermission; }
        protected getInsertPermission() { return DisposeAssetRow.insertPermission; }
        protected getUpdatePermission() { return DisposeAssetRow.updatePermission; }

        protected form = new DisposeAssetForm(this.idPrefix);

    }
}
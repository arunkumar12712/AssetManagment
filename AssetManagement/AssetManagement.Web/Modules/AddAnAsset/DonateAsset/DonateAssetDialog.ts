
namespace AssetManagement.AddAnAsset {

    @Serenity.Decorators.registerClass()
    export class DonateAssetDialog extends Serenity.EntityDialog<DonateAssetRow, any> {
        protected getFormKey() { return DonateAssetForm.formKey; }
        protected getIdProperty() { return DonateAssetRow.idProperty; }
        protected getLocalTextPrefix() { return DonateAssetRow.localTextPrefix; }
        protected getNameProperty() { return DonateAssetRow.nameProperty; }
        protected getService() { return DonateAssetService.baseUrl; }
        protected getDeletePermission() { return DonateAssetRow.deletePermission; }
        protected getInsertPermission() { return DonateAssetRow.insertPermission; }
        protected getUpdatePermission() { return DonateAssetRow.updatePermission; }

        protected form = new DonateAssetForm(this.idPrefix);

    }
}
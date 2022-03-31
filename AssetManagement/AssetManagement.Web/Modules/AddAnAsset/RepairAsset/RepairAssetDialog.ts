
namespace AssetManagement.AddAnAsset {

    @Serenity.Decorators.registerClass()
    export class RepairAssetDialog extends Serenity.EntityDialog<RepairAssetRow, any> {
        protected getFormKey() { return RepairAssetForm.formKey; }
        protected getIdProperty() { return RepairAssetRow.idProperty; }
        protected getLocalTextPrefix() { return RepairAssetRow.localTextPrefix; }
        protected getNameProperty() { return RepairAssetRow.nameProperty; }
        protected getService() { return RepairAssetService.baseUrl; }
        protected getDeletePermission() { return RepairAssetRow.deletePermission; }
        protected getInsertPermission() { return RepairAssetRow.insertPermission; }
        protected getUpdatePermission() { return RepairAssetRow.updatePermission; }

        protected form = new RepairAssetForm(this.idPrefix);

    }
}
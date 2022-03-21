
namespace AssetManagement.AddAnAsset {

    @Serenity.Decorators.registerClass()
    export class AssetMaintenanceDialog extends Serenity.EntityDialog<AssetMaintenanceRow, any> {
        protected getFormKey() { return AssetMaintenanceForm.formKey; }
        protected getIdProperty() { return AssetMaintenanceRow.idProperty; }
        protected getLocalTextPrefix() { return AssetMaintenanceRow.localTextPrefix; }
        protected getNameProperty() { return AssetMaintenanceRow.nameProperty; }
        protected getService() { return AssetMaintenanceService.baseUrl; }
        protected getDeletePermission() { return AssetMaintenanceRow.deletePermission; }
        protected getInsertPermission() { return AssetMaintenanceRow.insertPermission; }
        protected getUpdatePermission() { return AssetMaintenanceRow.updatePermission; }

        protected form = new AssetMaintenanceForm(this.idPrefix);

    }
}
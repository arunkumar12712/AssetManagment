
namespace AssetManagement.Setup {

    @Serenity.Decorators.registerClass()
    export class MaintenanceStatusDialog extends Serenity.EntityDialog<MaintenanceStatusRow, any> {
        protected getFormKey() { return MaintenanceStatusForm.formKey; }
        protected getIdProperty() { return MaintenanceStatusRow.idProperty; }
        protected getLocalTextPrefix() { return MaintenanceStatusRow.localTextPrefix; }
        protected getNameProperty() { return MaintenanceStatusRow.nameProperty; }
        protected getService() { return MaintenanceStatusService.baseUrl; }
        protected getDeletePermission() { return MaintenanceStatusRow.deletePermission; }
        protected getInsertPermission() { return MaintenanceStatusRow.insertPermission; }
        protected getUpdatePermission() { return MaintenanceStatusRow.updatePermission; }

        protected form = new MaintenanceStatusForm(this.idPrefix);

    }
}
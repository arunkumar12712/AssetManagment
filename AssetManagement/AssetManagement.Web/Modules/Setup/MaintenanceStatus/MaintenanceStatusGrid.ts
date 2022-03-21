
namespace AssetManagement.Setup {

    @Serenity.Decorators.registerClass()
    export class MaintenanceStatusGrid extends Serenity.EntityGrid<MaintenanceStatusRow, any> {
        protected getColumnsKey() { return 'Setup.MaintenanceStatus'; }
        protected getDialogType() { return MaintenanceStatusDialog; }
        protected getIdProperty() { return MaintenanceStatusRow.idProperty; }
        protected getInsertPermission() { return MaintenanceStatusRow.insertPermission; }
        protected getLocalTextPrefix() { return MaintenanceStatusRow.localTextPrefix; }
        protected getService() { return MaintenanceStatusService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
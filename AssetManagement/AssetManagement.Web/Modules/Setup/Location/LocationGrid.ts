
namespace AssetManagement.Setup {

    @Serenity.Decorators.registerClass()
    export class LocationGrid extends Serenity.EntityGrid<LocationRow, any> {
        protected getColumnsKey() { return 'Setup.Location'; }
        protected getDialogType() { return LocationDialog; }
        protected getIdProperty() { return LocationRow.idProperty; }
        protected getInsertPermission() { return LocationRow.insertPermission; }
        protected getLocalTextPrefix() { return LocationRow.localTextPrefix; }
        protected getService() { return LocationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
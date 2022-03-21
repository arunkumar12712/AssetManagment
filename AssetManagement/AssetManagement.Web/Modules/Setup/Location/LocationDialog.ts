
namespace AssetManagement.Setup {

    @Serenity.Decorators.registerClass()
    export class LocationDialog extends Serenity.EntityDialog<LocationRow, any> {
        protected getFormKey() { return LocationForm.formKey; }
        protected getIdProperty() { return LocationRow.idProperty; }
        protected getLocalTextPrefix() { return LocationRow.localTextPrefix; }
        protected getNameProperty() { return LocationRow.nameProperty; }
        protected getService() { return LocationService.baseUrl; }
        protected getDeletePermission() { return LocationRow.deletePermission; }
        protected getInsertPermission() { return LocationRow.insertPermission; }
        protected getUpdatePermission() { return LocationRow.updatePermission; }

        protected form = new LocationForm(this.idPrefix);

    }
}
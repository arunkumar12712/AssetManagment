
namespace AssetManagement.Setup {

    @Serenity.Decorators.registerClass()
    export class SiteDialog extends Serenity.EntityDialog<SiteRow, any> {
        protected getFormKey() { return SiteForm.formKey; }
        protected getIdProperty() { return SiteRow.idProperty; }
        protected getLocalTextPrefix() { return SiteRow.localTextPrefix; }
        protected getNameProperty() { return SiteRow.nameProperty; }
        protected getService() { return SiteService.baseUrl; }
        protected getDeletePermission() { return SiteRow.deletePermission; }
        protected getInsertPermission() { return SiteRow.insertPermission; }
        protected getUpdatePermission() { return SiteRow.updatePermission; }

        protected form = new SiteForm(this.idPrefix);

    }
}

namespace AssetManagement.Setup {

    @Serenity.Decorators.registerClass()
    export class SiteGrid extends Serenity.EntityGrid<SiteRow, any> {
        protected getColumnsKey() { return 'Setup.Site'; }
        protected getDialogType() { return SiteDialog; }
        protected getIdProperty() { return SiteRow.idProperty; }
        protected getInsertPermission() { return SiteRow.insertPermission; }
        protected getLocalTextPrefix() { return SiteRow.localTextPrefix; }
        protected getService() { return SiteService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
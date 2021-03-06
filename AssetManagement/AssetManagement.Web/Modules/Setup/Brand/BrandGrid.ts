
namespace AssetManagement.Setup {

    @Serenity.Decorators.registerClass()
    export class BrandGrid extends Serenity.EntityGrid<BrandRow, any> {
        protected getColumnsKey() { return 'Setup.Brand'; }
        protected getDialogType() { return BrandDialog; }
        protected getIdProperty() { return BrandRow.idProperty; }
        protected getInsertPermission() { return BrandRow.insertPermission; }
        protected getLocalTextPrefix() { return BrandRow.localTextPrefix; }
        protected getService() { return BrandService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
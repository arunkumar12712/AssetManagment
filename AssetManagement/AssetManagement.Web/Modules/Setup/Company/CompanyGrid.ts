
namespace AssetManagement.Setup {

    @Serenity.Decorators.registerClass()
    export class CompanyGrid extends Serenity.EntityGrid<CompanyRow, any> {
        protected getColumnsKey() { return 'Setup.Company'; }
        protected getDialogType() { return CompanyDialog; }
        protected getIdProperty() { return CompanyRow.idProperty; }
        protected getInsertPermission() { return CompanyRow.insertPermission; }
        protected getLocalTextPrefix() { return CompanyRow.localTextPrefix; }
        protected getService() { return CompanyService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
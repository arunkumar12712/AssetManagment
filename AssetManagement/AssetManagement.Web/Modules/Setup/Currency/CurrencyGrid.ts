
namespace AssetManagement.Setup {

    @Serenity.Decorators.registerClass()
    export class CurrencyGrid extends Serenity.EntityGrid<CurrencyRow, any> {
        protected getColumnsKey() { return 'Setup.Currency'; }
        protected getDialogType() { return CurrencyDialog; }
        protected getIdProperty() { return CurrencyRow.idProperty; }
        protected getInsertPermission() { return CurrencyRow.insertPermission; }
        protected getLocalTextPrefix() { return CurrencyRow.localTextPrefix; }
        protected getService() { return CurrencyService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
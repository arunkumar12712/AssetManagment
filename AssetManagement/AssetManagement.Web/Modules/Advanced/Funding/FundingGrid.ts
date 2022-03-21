
namespace AssetManagement.Advanced {

    @Serenity.Decorators.registerClass()
    export class FundingGrid extends Serenity.EntityGrid<FundingRow, any> {
        protected getColumnsKey() { return 'Advanced.Funding'; }
        protected getDialogType() { return FundingDialog; }
        protected getIdProperty() { return FundingRow.idProperty; }
        protected getInsertPermission() { return FundingRow.insertPermission; }
        protected getLocalTextPrefix() { return FundingRow.localTextPrefix; }
        protected getService() { return FundingService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
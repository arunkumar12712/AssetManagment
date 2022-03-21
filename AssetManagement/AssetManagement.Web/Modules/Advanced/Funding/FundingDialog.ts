
namespace AssetManagement.Advanced {

    @Serenity.Decorators.registerClass()
    export class FundingDialog extends Serenity.EntityDialog<FundingRow, any> {
        protected getFormKey() { return FundingForm.formKey; }
        protected getIdProperty() { return FundingRow.idProperty; }
        protected getLocalTextPrefix() { return FundingRow.localTextPrefix; }
        protected getNameProperty() { return FundingRow.nameProperty; }
        protected getService() { return FundingService.baseUrl; }
        protected getDeletePermission() { return FundingRow.deletePermission; }
        protected getInsertPermission() { return FundingRow.insertPermission; }
        protected getUpdatePermission() { return FundingRow.updatePermission; }

        protected form = new FundingForm(this.idPrefix);

    }
}
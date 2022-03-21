
namespace AssetManagement.Setup {

    @Serenity.Decorators.registerClass()
    export class CurrencyDialog extends Serenity.EntityDialog<CurrencyRow, any> {
        protected getFormKey() { return CurrencyForm.formKey; }
        protected getIdProperty() { return CurrencyRow.idProperty; }
        protected getLocalTextPrefix() { return CurrencyRow.localTextPrefix; }
        protected getNameProperty() { return CurrencyRow.nameProperty; }
        protected getService() { return CurrencyService.baseUrl; }
        protected getDeletePermission() { return CurrencyRow.deletePermission; }
        protected getInsertPermission() { return CurrencyRow.insertPermission; }
        protected getUpdatePermission() { return CurrencyRow.updatePermission; }

        protected form = new CurrencyForm(this.idPrefix);

    }
}
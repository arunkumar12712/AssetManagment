
namespace AssetManagement.AddAnAsset {

    @Serenity.Decorators.registerClass()
    export class LeaseDialog extends Serenity.EntityDialog<LeaseRow, any> {
        protected getFormKey() { return LeaseForm.formKey; }
        protected getIdProperty() { return LeaseRow.idProperty; }
        protected getLocalTextPrefix() { return LeaseRow.localTextPrefix; }
        protected getNameProperty() { return LeaseRow.nameProperty; }
        protected getService() { return LeaseService.baseUrl; }
        protected getDeletePermission() { return LeaseRow.deletePermission; }
        protected getInsertPermission() { return LeaseRow.insertPermission; }
        protected getUpdatePermission() { return LeaseRow.updatePermission; }

        protected form = new LeaseForm(this.idPrefix);

        constructor() {
            super();

            this.form.SendEmail.change(e => {
                if (!this.form.SendEmail.value)
                    Serenity.EditorUtils.setReadOnly(this.form.Email, true);
                else {
                    Serenity.EditorUtils.setReadOnly(this.form.Email, false);
                }
            });
            if (!this.form.SendEmail.value)
                Serenity.EditorUtils.setReadOnly(this.form.Email, true);
        }

    }
}
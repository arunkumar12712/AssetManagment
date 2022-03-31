
namespace AssetManagement.AddAnAsset {

    @Serenity.Decorators.registerClass()
    export class CheckInDialog extends Serenity.EntityDialog<CheckInRow, any> {
        protected getFormKey() { return CheckInForm.formKey; }
        protected getIdProperty() { return CheckInRow.idProperty; }
        protected getLocalTextPrefix() { return CheckInRow.localTextPrefix; }
        protected getNameProperty() { return CheckInRow.nameProperty; }
        protected getService() { return CheckInService.baseUrl; }
        protected getDeletePermission() { return CheckInRow.deletePermission; }
        protected getInsertPermission() { return CheckInRow.insertPermission; }
        protected getUpdatePermission() { return CheckInRow.updatePermission; }

        protected form = new CheckInForm(this.idPrefix);

        constructor() {
            super();

            this.form.SendMail.change(e => {
                this.getGridField();
                if (!this.form.SendMail.value)
                    Serenity.EditorUtils.setReadOnly(this.form.Email, true);
                else {
                    Serenity.EditorUtils.setReadOnly(this.form.Email, false);
                }
            });

            if (!this.form.SendMail.value)
                Serenity.EditorUtils.setReadOnly(this.form.Email, true);
        }
    }
}

namespace AssetManagement.AddAnAsset {

    @Serenity.Decorators.registerClass()
    export class CheckOutDialog extends Serenity.EntityDialog<CheckOutRow, any> {
        protected getFormKey() { return CheckOutForm.formKey; }
        protected getIdProperty() { return CheckOutRow.idProperty; }
        protected getLocalTextPrefix() { return CheckOutRow.localTextPrefix; }
        protected getNameProperty() { return CheckOutRow.nameProperty; }
        protected getService() { return CheckOutService.baseUrl; }
        protected getDeletePermission() { return CheckOutRow.deletePermission; }
        protected getInsertPermission() { return CheckOutRow.insertPermission; }
        protected getUpdatePermission() { return CheckOutRow.updatePermission; }

        protected form = new CheckOutForm(this.idPrefix);

        constructor() {
            super();                   
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();


            this.form.NoDueDate.change(() => {
                this.getDueDateFields();
            });
            this.getDueDateFields();

            this.form.CheckOutTo.change(() => {
                this.setShowHideFields();
            });
            this.setShowHideFields();

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



        protected setShowHideFields() {
            
            this.form.EmployeeId.getGridField().toggle(false);
            if (this.form.CheckOutTo.value) {
                if (this.form.CheckOutTo.value == '1') {
                    this.form.EmployeeId.getGridField().toggle(true);
                }

                this.form.SendMail.getGridField().toggle(true);
                if (this.form.CheckOutTo.value) {
                    if (this.form.CheckOutTo.value == '2') {
                        this.form.SendMail.getGridField().toggle(false);
                    }

                    this.form.Email.getGridField().toggle(true);
                    if (this.form.CheckOutTo.value) {
                        if (this.form.CheckOutTo.value == '2') {
                            this.form.Email.getGridField().toggle(false);
                        }
                    }
                }
            }

        }


        protected getDueDateFields() {
            this.form.DueDate.getGridField().toggle(true);
            if (this.form.NoDueDate.value) {
                this.form.DueDate.getGridField().toggle(false);
            }
        }
    }
}


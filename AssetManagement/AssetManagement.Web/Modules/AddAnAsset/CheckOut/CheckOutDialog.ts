
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

        //    this.form.Email.change(e => {
        //        this.toggleCheck(this.form.SendMail.value);
        //    });
        //}
        //protected toggleCheck(value) {
        //    this.form.Email.value = value;
        



        this.form.SendMail.change(e => {
            this.getGridField();
            if (this.form.SendMail.value != false)
                Serenity.EditorUtils.setReadOnly(this.form.Email, true);

            else {
                this.form.SendMail.change(() => {
                    this.form.SendMail.value
                    Serenity.EditorUtils.setReadOnly(this.form.Email, true);
                });
            }

        });

        //this.get_readOnly();

        //    if (this.form.SendMail.value == false)
        //        Serenity.EditorUtils.setReadOnly(this.form.Email, true);
        //    this.element.find('Email').hide();
        //});
        //function (e) {
        //    if (this.form.CheckOutTo.value == true) {
        //        Serenity.EditorUtils.setRequired(this.form.SiteId, false);
        //        this.form.CheckOutDate.getGridField().toggle(true);
        //        Serenity.EditorUtils.setRequired(this.form.LocationId, false);
        //        this.form.LocationId.getGridField().toggle(true);
        //        Serenity.EditorUtils.setRequired(this.form.DepartmentId, false);
        //        this.form.DepartmentId.getGridField().toggle(true);
        //        Serenity.EditorUtils.setRequired(this.form.CheckOutDate, false);
        //        this.form.CheckOutDate.getGridField().toggle(true);
        //        Serenity.EditorUtils.setRequired(this.form.Notes, false);
        //        this.form.Notes.getGridField().toggle(true);
        //        Serenity.EditorUtils.setRequired(this.form.NoDueDate, false);
        //        this.form.NoDueDate.getGridField().toggle(true);
        //        Serenity.EditorUtils.setRequired(this.form.DueDate, false);
        //        this.form.DueDate.getGridField().toggle(true);

        //    }


        //    else {
        //        //Serenity.EditorUtils.setRequired(this.form.CheckOutDate, true);
        //        //this.form.CheckOutDate.getGridField().toggle(false);
        //        Serenity.EditorUtils.setRequired(this.form.EmployeeId, true);
        //        this.form.EmployeeId.getGridField().toggle(false);
        //        //Serenity.EditorUtils.setRequired(this.form.NoDueDate, true);
        //        //this.form.NoDueDate.getGridField().toggle(false);
        //        Serenity.EditorUtils.setRequired(this.form.DueDate, true);
        //        this.form.DueDate.getGridField().toggle(false);
        //        //Serenity.EditorUtils.setRequired(this.form.SiteId, true);
        //        //this.form.SiteId.getGridField().toggle(false);
        //        //Serenity.EditorUtils.setRequired(this.form.LocationId, true);
        //        //this.form.LocationId.getGridField().toggle(false);
        //        //Serenity.EditorUtils.setRequired(this.form.DepartmentId, true);
        //        //this.form.DepartmentId.getGridField().toggle(false);
        //        //Serenity.EditorUtils.setRequired(this.form.Notes, true);
        //        //this.form.Notes.getGridField().toggle(false);
        //        //Serenity.EditorUtils.setRequired(this.form.SendMail, true);
        //        //this.form.SendMail.getGridField().toggle(false);
        //        //Serenity.EditorUtils.setRequired(this.form.Email, true);
        //        //this.form.Email.getGridField().toggle(false);

        //    }

        //}.bind(this)

        //  );
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
        }



        protected setShowHideFields() {
            debugger
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
     

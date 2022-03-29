﻿
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

    }
}
﻿
namespace AssetManagement.Advanced {

    @Serenity.Decorators.registerClass()
    export class CustomersGrid extends Serenity.EntityGrid<CustomersRow, any> {
        protected getColumnsKey() { return 'Advanced.Customers'; }
        protected getDialogType() { return CustomersDialog; }
        protected getIdProperty() { return CustomersRow.idProperty; }
        protected getInsertPermission() { return CustomersRow.insertPermission; }
        protected getLocalTextPrefix() { return CustomersRow.localTextPrefix; }
        protected getService() { return CustomersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
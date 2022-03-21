
namespace AssetManagement.Advanced {

    @Serenity.Decorators.registerClass()
    export class EmployeeGrid extends Serenity.EntityGrid<EmployeeRow, any> {
        protected getColumnsKey() { return 'Advanced.Employee'; }
        protected getDialogType() { return EmployeeDialog; }
        protected getIdProperty() { return EmployeeRow.idProperty; }
        protected getInsertPermission() { return EmployeeRow.insertPermission; }
        protected getLocalTextPrefix() { return EmployeeRow.localTextPrefix; }
        protected getService() { return EmployeeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
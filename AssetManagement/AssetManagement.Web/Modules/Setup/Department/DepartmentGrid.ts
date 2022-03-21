
namespace AssetManagement.Setup {

    @Serenity.Decorators.registerClass()
    export class DepartmentGrid extends Serenity.EntityGrid<DepartmentRow, any> {
        protected getColumnsKey() { return 'Setup.Department'; }
        protected getDialogType() { return DepartmentDialog; }
        protected getIdProperty() { return DepartmentRow.idProperty; }
        protected getInsertPermission() { return DepartmentRow.insertPermission; }
        protected getLocalTextPrefix() { return DepartmentRow.localTextPrefix; }
        protected getService() { return DepartmentService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
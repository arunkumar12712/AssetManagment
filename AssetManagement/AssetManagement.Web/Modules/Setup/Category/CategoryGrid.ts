
namespace AssetManagement.Setup {

    @Serenity.Decorators.registerClass()
    export class CategoryGrid extends Serenity.EntityGrid<CategoryRow, any> {
        protected getColumnsKey() { return 'Setup.Category'; }
        protected getDialogType() { return CategoryDialog; }
        protected getIdProperty() { return CategoryRow.idProperty; }
        protected getInsertPermission() { return CategoryRow.insertPermission; }
        protected getLocalTextPrefix() { return CategoryRow.localTextPrefix; }
        protected getService() { return CategoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
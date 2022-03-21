
namespace AssetManagement.AddAnAsset {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class AssetDetailsDialog extends Serenity.EntityDialog<AssetDetailsRow, any> {
        protected getFormKey() { return AssetDetailsForm.formKey; }
        protected getIdProperty() { return AssetDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return AssetDetailsRow.localTextPrefix; }
        protected getNameProperty() { return AssetDetailsRow.nameProperty; }
        protected getService() { return AssetDetailsService.baseUrl; }
        protected getDeletePermission() { return AssetDetailsRow.deletePermission; }
        protected getInsertPermission() { return AssetDetailsRow.insertPermission; }
        protected getUpdatePermission() { return AssetDetailsRow.updatePermission; }

        protected form = new AssetDetailsForm(this.idPrefix);

        private DocumentGrid: DocumentGrid;
        private AssetWarrantyGrid: AssetWarrantyGrid;
        private AssetMaintenanceGrid: AssetMaintenanceGrid;

        constructor() {
            super();

            this.DocumentGrid = new DocumentGrid(this.byId("DocumentGrid"));
            this.tabs.on('tabsactivate', (e, i) => {
                this.arrange();
            });
            this.AssetWarrantyGrid = new AssetWarrantyGrid(this.byId("AssetWarrantyGrid"));
            this.tabs.on('tabsactivate', (e, i) => {
                this.arrange();
            });
            this.AssetMaintenanceGrid = new AssetMaintenanceGrid(this.byId("AssetMaintenanceGrid"));
            this.tabs.on('tabsactivate', (e, i) => {
                this.arrange();
            });
        }
             protected afterLoadEntity() {
            super.afterLoadEntity();

                 this.DocumentGrid.Id = this.entityId;
                 this.AssetWarrantyGrid.Id = this.entityId;
                 this.AssetMaintenanceGrid.Id = this.entityId;

            }

        }
    }

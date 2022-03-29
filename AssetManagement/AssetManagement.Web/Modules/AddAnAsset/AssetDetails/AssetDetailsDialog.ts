
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
        private CheckInGrid: CheckInGrid;
        private CheckOutGrid: CheckOutGrid;
     

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


            this.CheckInGrid = new CheckInGrid(this.byId("CheckInGrid"));
            this.tabs.on('tabsactivate', (e, i) => {
                this.arrange();
            });

            this.CheckOutGrid = new CheckOutGrid(this.byId("CheckOutGrid"));
            this.tabs.on('tabsactivate', (e, i) => {
                this.arrange();
            });
            
        }
             protected afterLoadEntity() {
            super.afterLoadEntity();

                 this.DocumentGrid.AssetId = this.entity.AssetId
                 this.AssetWarrantyGrid.AssetId = this.entity.AssetId
                 this.AssetMaintenanceGrid.AssetId = this.entity.AssetId
                 this.CheckInGrid.AssetId = this.entity.AssetId
                 this.CheckOutGrid.AssetId = this.entity.AssetId
                 

            }

        }
    }

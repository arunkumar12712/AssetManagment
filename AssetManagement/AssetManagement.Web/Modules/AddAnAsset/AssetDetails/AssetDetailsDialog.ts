
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
        private LeaseGrid: LeaseGrid;
        private RepairAssetGrid: RepairAssetGrid;
        private BrokenAssetGrid: BrokenAssetGrid;
        private DisposeAssetGrid: DisposeAssetGrid;
        private DonateAssetGrid: DonateAssetGrid;
        private SellAssetGrid: SellAssetGrid;

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

            this.LeaseGrid = new LeaseGrid(this.byId("LeaseGrid"));
            this.tabs.on('tabsactivate', (e, i) => {
                this.arrange();
            });

            this.RepairAssetGrid = new RepairAssetGrid(this.byId("RepairAssetGrid"));
            this.tabs.on('tabsactivate', (e, i) => {
                this.arrange();
            });

            this.BrokenAssetGrid = new BrokenAssetGrid(this.byId("BrokenAssetGrid"));
            this.tabs.on('tabsactivate', (e, i) => {
                this.arrange();
            });

            this.DisposeAssetGrid = new DisposeAssetGrid(this.byId("DisposeAssetGrid"));
            this.tabs.on('tabsactivate', (e, i) => {
                this.arrange();
            });

            this.DonateAssetGrid = new DonateAssetGrid(this.byId("DonateAssetGrid"));
            this.tabs.on('tabsactivate', (e, i) => {
                this.arrange();
            });

            this.SellAssetGrid = new SellAssetGrid(this.byId("SellAssetGrid"));
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
                 this.LeaseGrid.AssetId = this.entity.AssetId
                 this.RepairAssetGrid.AssetId = this.entity.AssetId
                 this.BrokenAssetGrid.AssetId = this.entity.AssetId
                 this.DisposeAssetGrid.AssetId = this.entity.AssetId
                 this.DonateAssetGrid.AssetId = this.entity.AssetId
                 this.SellAssetGrid.AssetId = this.entity.AssetId

            }

        }
    }

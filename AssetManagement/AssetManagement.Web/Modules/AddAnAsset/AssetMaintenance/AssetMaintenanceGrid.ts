
namespace AssetManagement.AddAnAsset {

    @Serenity.Decorators.registerClass()
    export class AssetMaintenanceGrid extends Serenity.EntityGrid<AssetMaintenanceRow, any> {
        protected getColumnsKey() { return 'AddAnAsset.AssetMaintenance'; }
        protected getDialogType() { return AssetMaintenanceDialog; }
        protected getIdProperty() { return AssetMaintenanceRow.idProperty; }
        protected getInsertPermission() { return AssetMaintenanceRow.insertPermission; }
        protected getLocalTextPrefix() { return AssetMaintenanceRow.localTextPrefix; }
        protected getService() { return AssetMaintenanceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected addButtonClick() {
            this.editItem({
                AssetId: this.AssetId
            });

        }

        //protected getInitialTitle() {
        //    return null;
        //}

        protected usePager() {
            return false;
        }

        //protected getGridCanLoad() {
        //    return this.AssetId != null;
        //}

        private _AssetId: number;

        get AssetId() {
            return this._AssetId;
        }
        set AssetId(value: number) {
            if (this._AssetId != value) {
                this._AssetId = value;
                this.setEquality(AssetMaintenanceRow.Fields.AssetId, value);
                this.refresh();
           }
        }
    }
}
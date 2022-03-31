
namespace AssetManagement.AddAnAsset {

    @Serenity.Decorators.registerClass()
    export class LeaseGrid extends Serenity.EntityGrid<LeaseRow, any> {
        protected getColumnsKey() { return 'AddAnAsset.Lease'; }
        protected getDialogType() { return LeaseDialog; }
        protected getIdProperty() { return LeaseRow.idProperty; }
        protected getInsertPermission() { return LeaseRow.insertPermission; }
        protected getLocalTextPrefix() { return LeaseRow.localTextPrefix; }
        protected getService() { return LeaseService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected addButtonClick() {
            this.editItem({
                AssetId: this.AssetId
            });

        }
        protected usePager() {
            return false;
        }
        private _AssetId: number;

        get AssetId() {
            return this._AssetId;
        }
        set AssetId(value: number) {
            if (this._AssetId != value) {
                this._AssetId = value;
                this.setEquality(LeaseRow.Fields.AssetId, value);
                this.refresh();
            }
        }
    }
}
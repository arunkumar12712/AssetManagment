namespace AssetManagement.Modules.AddAnAsset.CheckOut {
    export enum CheckOutTo {
        Person = 1,
        Site_Location = 2
    }
    Serenity.Decorators.registerEnumType(CheckOutTo, 'AssetManagement.Modules.AddAnAsset.CheckOut.CheckOutTo', 'CheckOut.CheckOutTo');
}


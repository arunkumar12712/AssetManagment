namespace AssetManagement {
    export enum DepreciableAsset {
        No = 1,
        Yes = 2
    }
    Serenity.Decorators.registerEnumType(DepreciableAsset, 'AssetManagement.DepreciableAsset', 'AssetDetails.DepreciableAsset');
}


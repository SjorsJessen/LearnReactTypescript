import { IProduct, products } from './ProductsData';

export enum ProductsActionTypes {
    GETALL = "PRODUCTS/GETALL",
    GETSINGLE = "PRODUCTS/GETSINGLE",
    LOADING = "PRODUCTS/LOADING"
}

export interface IProductsGetSingleAction {
    type: ProductsActionTypes.GETSINGLE;
    product: IProduct;
}

export interface IProductsGetAllAction {
    type: ProductsActionTypes.GETALL,
    products: IProduct[]
}

export interface IProductsLoadingAction {
    type: ProductsActionTypes.LOADING
}

export type ProductsActions = 
    | IProductsGetAllAction
    | IProductsGetSingleAction
    | IProductsLoadingAction

export interface IProductsState {
    readonly currentProduct: IProduct | null;
    readonly products: IProduct[];
    readonly productsLoading: boolean;
}


import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Product } from "../product";
import * as AppState from '../../state/app.state';

// ? This is use because of the lazy load modules
export interface State extends AppState.State {
    products: ProductState;
}

export interface ProductState {
    showProductCode: boolean;
    currentProduct: Product | null;
    products: Product[];
}  

// ?? Initial State
const initialState: ProductState = {
    showProductCode: true,
    currentProduct: null,
    products: []
};

// ?? Create Selector
const getProductSelector = createFeatureSelector<ProductState>('products');

// ?? Create showProductCode Selector 
export const getShowProductCode = createSelector(getProductSelector, state => state.showProductCode);

// ?? Create currentProduct Selector
export const getCurrentProduct = createSelector(getProductSelector, state => state.currentProduct);

// ?? Create products Selector
export const getProducts = createSelector(getProductSelector, state => state.products);


// Create reducer
export const productReducer = createReducer<ProductState>(
    initialState,
    on(createAction('[Product] Toggle Product Code'), (state) : ProductState => {
        return {
            ...state,
            showProductCode: !state.showProductCode
        }
    })
);

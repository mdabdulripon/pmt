import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { User } from "../user";

export interface UserState {
    maskUserName: boolean;
    currentUser: User | null;
}

// ?? Initial State
const initialState: UserState = {
    maskUserName: false,
    currentUser: null
}

// ?? Create Selector;
const getUserSelector = createFeatureSelector<UserState>('users');

// ?? Create maskUserName Selector;
export const getMaskUserName = createSelector(getUserSelector, state => state.maskUserName)

// ?? Create currentUser Selector;
export const getCurrentUser = createSelector(getUserSelector, state => state.currentUser)

export const userReducer = createReducer<UserState>(
    initialState,
    on(createAction('[User] toggle username masking'), state => {
        console.log(`**`, state);
        return {
            ...state,
            maskUserName: !state.maskUserName
        }
    })
)

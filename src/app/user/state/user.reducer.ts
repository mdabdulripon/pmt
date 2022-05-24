import { createAction, createReducer, on } from "@ngrx/store";
import { User } from "../user";

export interface UserState {
    maskUserName: boolean;
    currentUser: User;
}

export const userReducer = createReducer<UserState>(
    { maskUserName: true } as UserState,
    on(createAction('[User] toggle username masking'), state => {
        console.log(`**`, state);
        return {
            ...state,
            maskUserName: !state.maskUserName
        }
    })
)

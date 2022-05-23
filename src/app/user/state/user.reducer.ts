import { createAction, createReducer, on } from "@ngrx/store";

export const userReducer = createReducer(
    { maskUserName: true },
    on(createAction('[User] toggle username masking'), state => {
        console.log(`**`, state);
        return {
            ...state,
            maskUserName: !state.maskUserName
        }
    })
)

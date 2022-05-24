import { UserState } from "../user/state/user.reducer";

// ?? Representation of the entire app state
// ?? Extend this interface to teh lazy loaded module. EX: See product.reducer.ts Line: 6
export interface State {
    user: UserState;
}

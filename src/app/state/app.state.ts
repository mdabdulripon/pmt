import { UserState } from "../user/state/user.reducer";

// Representation of the entire app state
// Extend this interface to teh lazy loaded module
export interface State {
    user: UserState;
}

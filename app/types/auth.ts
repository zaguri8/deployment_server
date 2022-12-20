import StackUser from "./user";

export interface AuthResult {
    user?: StackUser,
    error?: any
}
export type AuthState = StackUser | undefined | null
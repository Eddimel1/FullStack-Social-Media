import { MutationOptions, MutationHookOptions } from "@apollo/client";

export type HookMutationOptions_GQL = MutationHookOptions
export type ClientMutationOptions_GQL = Omit<MutationOptions,'mutation'>

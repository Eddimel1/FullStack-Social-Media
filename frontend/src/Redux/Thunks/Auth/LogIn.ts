
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ClientMutationOptions_GQL } from "../../../Global/Types/Graphql";
import { LogInMutation_CL } from "../../../GraphQl/User/Mutations/Auth/LogIn";

export const login_TH = createAsyncThunk('auth/login',async(options:ClientMutationOptions_GQL,{rejectWithValue,dispatch})=>{

try {
    const response = await LogInMutation_CL({...options}) as any
    console.log('RESPONSE : ' , response)
    return response.data.login
} catch (error) {
    rejectWithValue(error.message)
    console.log(error)
}
})
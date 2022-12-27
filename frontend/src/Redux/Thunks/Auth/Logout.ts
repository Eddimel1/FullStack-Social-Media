import { useAppDispatch } from './../../Store/Store';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ClientMutationOptions_GQL } from "../../../Global/Types/Graphql";

import { LogInMutation_CL } from "../../../GraphQl/User/Mutations/Auth/LogIn";
import { loggedIn } from '../../Slices/AuthSlice';
import { LogOutMutation_CL } from '../../../GraphQl/User/Mutations/Auth/LogOut';

export const logout_TH = createAsyncThunk('logout',async(options:ClientMutationOptions_GQL,{rejectWithValue,dispatch})=>{
try {
    const response = await LogOutMutation_CL({...options})
    if(response.data.logOut.message){
        dispatch({type:'auth/logout'})
        window.location.assign('/')
        return null
    }  

} catch (error) {
    rejectWithValue(error.message)
    console.log(error)
}
})
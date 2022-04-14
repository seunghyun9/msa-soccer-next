import { createSlice } from "@reduxjs/toolkit";

export interface JoinPayload{ //자바의 클래스역할, 필드의 속성값을 정해줌
    data:{
        user:{
            userid: string;
            password: string;
            name: string;
            email: string;
            phone: string;
            birth:string;
            address:string;
        }

    }
}
export interface UserState{
    userLoading: boolean;
    userData: any;
    error: any;
    token: null;
}


const initialState: UserState = {
    userLoading: false,
    userData: null,
    error: null,
    token: null
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        joinRequest(state: UserState, action){ state.userLoading = true, state.error = null},
        joinSuccess(state, action){ state.userLoading = false, state.error = action.payload},
        joinFailure(state, action){ state.userLoading = false, state.error = action.payload}
    }
})
const { reducer, actions } = userSlice
export const {
    joinRequest, joinSuccess, joinFailure
} = actions
export default reducer
import { createSlice } from "@reduxjs/toolkit";

export interface UserType{ //자바의 클래스역할, 필드의 속성값을 정해줌
            userid: string;
            password: string;
            name: string;
            email: string;
            phone: string;
            birth:string;
            address:string;
}
export interface UserState{
    loading: boolean;
    data: UserType[];
    error: any;
}


const initialState: UserState = {
    loading: false,
    data: [],
    error: null,

}

const userSlice = createSlice({ // 객체임 , Join---이 기능임. 원래{}는 키값을 가진 스트링이지만, 여기서는 액션으로 활용한다.
    name: 'users',
    initialState,
    reducers: {
        joinRequest(state: UserState, payload)
        {  alert('진행2: 리듀서내부')
            state.loading = true},

        joinSuccess(state: UserState, {payload})
        { state.data = [...state.data, payload]
          state.loading = false;
        
        },
        joinFailure(state: UserState, {payload})
        { state.data = payload; 
          state.loading = false;
        },
        loginRequest(state: UserState, payload)
        {  alert('진행2: 로그인 리듀서 내부')
            state.loading = true},

        loginSuccess(state: UserState, {payload})
        { state.data = [...state.data, payload]
          state.loading = false;
        
        },
        loginFailure(state: UserState, {payload})
        { state.data = payload; 
          state.loading = false;
        }
        
    }
})
const { reducer, actions } = userSlice
export const userActions = actions
export default reducer
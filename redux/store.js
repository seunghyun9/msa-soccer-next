import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import {rootSaga} from './sagas'
import rootReducer from './reducers'
import { createWrapper} from "next-redux-wrapper";

const isDev = process.env.NODE_ENV !== 'development'
const idProd =process.env.NODE_ENV !== 'production'

const SagaMiddleware = createSagaMiddleware()

export const createStore = () =>{
    const store = configureStore({
        reducer: rootReducer,
        devTools: isDev,
        middleware: [ SagaMiddleware]
    })
    SagaMiddleware.run(rootSaga)
    return store
}

export const wrapper = createWrapper(createStore,{debug: isDev})
export default wrapper // 자주 가는 통로이기에 속도를 빠르게 하기 위해서 추가
import {combineReducers} from 'redux'
import admimReducer from './adminReducer.ts'
import basicReducer from './basicReducer.ts'
import boardReducer from './boardReducer.ts'
import gameReducer from './gameReducer.ts'
import todoReducer from './todoReducer.ts'
import userReducer from './userReducer.ts'

const rootReducer = combineReducers({
    admimReducer,
    basicReducer,
    boardReducer,
    gameReducer,
    todoReducer,
    userReducer
})
export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
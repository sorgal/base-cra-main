import {Action, combineReducers, configureStore, ThunkAction} from "@reduxjs/toolkit";
import {CounterSliceReducer} from "../shared/ui/counter-slice";
import {DashboardSliceReducer} from "../features/model/dashboard/dashboard-slice";

const rootReducer = combineReducers({
    counter: CounterSliceReducer,
    dashboard: DashboardSliceReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
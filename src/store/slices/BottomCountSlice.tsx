import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface CounterState {
    count: number
}

const initialState: CounterState = {
    count: 0
}
export const bottomCounterSlice:any = createSlice({
    name: 'count',
    initialState,
    reducers: {
        increment: (state:any) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.count += 1
        },
        decrement: (state:any) => {
            state.count -= 1
        },
        incrementByAmount: (state:any, action:any) => {
            state.count += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = bottomCounterSlice.actions

export default bottomCounterSlice.reducer
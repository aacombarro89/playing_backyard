// Duck pattern

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
    status: string;
}

const initialState: CounterState = {
    value: 1,
    status: 'idle'
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        //it's ok to do this because immer make it immutable under the hood
        increment(state) {
            state.value++;
            state.status = 'increased';
        },
        decrement(state) {
            state.value--;
            state.status = 'decreased';
        },
        reset(state) {
            state.value = 0;
            state.status = 'initial';
        },
        ammountAdded(state, action: PayloadAction<number>) {
            state.value += action.payload;
            state.status = 'increased by 3';
        }
    }
})

export const { increment, decrement, reset, ammountAdded } = counterSlice.actions;
export default counterSlice.reducer;
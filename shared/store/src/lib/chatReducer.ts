import { createSlice } from '@reduxjs/toolkit';

export type TcounterReducer = {
  counterValue: number;
};

const INITIAL_STATE: TcounterReducer = {
  counterValue: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: INITIAL_STATE,
  reducers: {
    updateCounter: (state, action) => {
      state.counterValue = action.payload;
    },
  },
});

export const { updateCounter } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

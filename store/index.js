// store/index.js
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () => {
  const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
      increment: (state) => {
        state.value += 1;
      },
      decrement: (state) => {
        state.value -= 1;
      },
    },
  });

  const store = configureStore({
    reducer: {
      counter: counterSlice.reducer,
    },
  });

  return store; // Возвращаем только сам store, без дополнительных данных
};

export const wrapper = createWrapper(makeStore);
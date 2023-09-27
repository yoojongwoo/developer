import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type State = {
    name: string;
    age: number;
};

const initialState: State = {
    name: 'default',
    age: 0,
};

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateName: (state, action: PayloadAction<string>) => {
            console.log('1 : ', state.age, state.name);
            state.name = action.payload;
            // 위 코드는 Immer가 작동하여,
            // 새로운 상태 객체를 반환하는 것으로 작동합니다.
        },
        updateAge: (state, action: PayloadAction<number>) => {
            console.log('2 : ', state.age, state.name);
            state.age = action.payload;
        },
    },
});

export const userReducer = slice.reducer;
export const userActions = slice.actions;

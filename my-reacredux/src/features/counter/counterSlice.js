
//Ця змінна задає початкове значення state - глобальний
import {createSlice} from "@reduxjs/toolkit";

const initState = {
    value: 12
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initState,
    //Певні методи, які уміють змінювати значення у state - своєму
    reducers: {
        increment: (state) => {
            state.value += 1; // значення збільшуємо на 1
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
});

export const {increment, decrement} = counterSlice.actions;

//експортуємо reducer
export default counterSlice.reducer;
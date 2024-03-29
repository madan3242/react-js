import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
    name: "questions",
    initialState: [],
    reducers: {
        addQuestion: (state, action) => {
            //Add Question reducer function
            state = state.push({
                id: action.payload.id,
                title: action.payload.title,
                body: action.payload.body,
            });
        },
        editQuestion: (state, action) => {
            //Edit Question reducer function
            state = state.map((question) => {
                if (question.id === action.payload.id) {
                    return {
                        id: action.payload.id,
                        title: action.payload.title,
                        body: action.payload.body,
                    };
                } else {
                    return {
                        ...question,
                    };
                }
            })
        },
        removeQuestion: (state, action) => {
            //Remove Question reducer function
            state = state.filter((question) => question.id !== action.payload.id);

            return state;
        },
    }
})

export const {
    addQuestion,
    editQuestion,
    removeQuestion
} = questionSlice.actions

export const selectQuestions = (state) => state.questions;

export default questionSlice.reducer;
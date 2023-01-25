import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "../features/Comments/commentSlice";
import questionReducer from "../features/Questions/questionSlice"

export default configureStore({
    reducer: {
        questions: questionReducer,
        comments: commentReducer,
    },
});
import { configureStore } from "@reduxjs/toolkit";
import apiGithub from './Slices/apiGithub.Slice'
import hasError from "./Slices/hasError.slice";

export default configureStore ({
    reducer:{
        apiGithub,
        hasError
    }
})
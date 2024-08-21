import { ADD_NOTE, DELETE_NOTE } from "./constants"

export const addNote=(note='')=>{
    return {
        type:ADD_NOTE,
        payload:note
    }
}

export const deleteNote=(id='')=>{
    return {
        type:DELETE_NOTE,
        payload:id
    }
}
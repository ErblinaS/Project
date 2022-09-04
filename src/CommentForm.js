import React from 'react';
import {useEffect,useState} from "react";

const CommentForm=(handleSubmit,submitLabel)=>{
    const[text,setText]=useState("");
    const isTextareaDisabled=text.length===0;
    const onSubmit=(event)=>{
        event.preventDefault();
        handleSubmit(text);
    };
    return (
        <form onSubmit={onSubmit}>
            <textarea 
            className="comment-form-textarea"
             value={text} 
             onChange={(e)=> setText(e.target.value)}
             />

             <button className="comment-form-button" disabled={isTextareaDisabled}>Submit</button>
        </form>
    );
};
export default CommentForm;

import React, { useState } from "react";
import "./add-comment.view.scss";
import { IComment } from "@/models/shared/comment/comment.interface";
import ButtonView, { ButtonType } from "../button/button.view";

interface AddCommentViewProps {
    addComment: (comment: Partial<IComment>) => void;
    errorString: string;
    loadingState: boolean;
}

const AddCommentView: React.FC<AddCommentViewProps> = (
    {
        addComment,
        errorString,
        loadingState
    }
) => {
    const [formData, setFormData] = useState<Partial<IComment>>({
        title: "",
        text: "",
      });


      const inputChange = (inputname:string, inputvalue:string) => {
        
        setFormData((prevData) => ({
            ...prevData,
            [inputname]: inputvalue,
          }));
      };


      const sendComment = () => {
        addComment(formData as Partial<IComment>);
      };


    return (
        <div className={"add-comment-container"}>
           <p className={"form-error-string" + (errorString.length > 0 ? "" : "hidden")}>{errorString}</p>
           <input name="title" type="text" placeholder="Title" onChange={(e)=>inputChange(e.target.name, e.target.value)}/>
           <textarea name="text" placeholder="What do you think about the trail?" className="add-comment-main-text" rows={5} onChange={(e)=>inputChange(e.target.name, e.target.value) }/>
           <ButtonView text="submit" type={ButtonType.DEFAULT} loading={loadingState} onClick={sendComment}/>
        </div>
    );
};

export default AddCommentView;

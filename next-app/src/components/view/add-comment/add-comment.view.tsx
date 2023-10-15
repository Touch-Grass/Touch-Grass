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


      const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
      };

      const sendComment = () => {
        addComment(formData as Partial<IComment>);
      };


    return (
        <form className={"add-comment-container"} onSubmit={sendComment}>
           <p className={"form-error-string" + (errorString.length > 0 ? "" : "hidden")}>{errorString}</p>
           <input name="title" type="text" placeholder="Title" onChange={inputChange}/>
           <input name="text" placeholder="What do you think about the trail?" className="add-comment-main-text" onChange={inputChange}/>
           <ButtonView text="submit" type={ButtonType.DEFAULT} loading={loadingState} onClick={sendComment}/>
        </form>
    );
};

export default AddCommentView;

import React, { useState } from "react";
import "./add-comment.view.scss";
import { CommentFormFields } from "@/components/presenter/add-comment/add-comment.presenter";

interface AddCommentViewProps {
    addComment: (data:CommentFormFields) => void;
    errorString: string;
}

const AddCommentView: React.FC<AddCommentViewProps> = (
    {
        addComment,
        errorString,
    }
) => {

    
    const [formData, setFormData] = useState<CommentFormFields>({
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

      const sendComment = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addComment(formData);
      };


    return (
        <form className={"add-comment-container"} onSubmit={sendComment}>
           <p className={"form-error-string" + (errorString.length > 0 ? "" : "hidden")}>{errorString}</p>
           <input name="title" type="text" placeholder="Title" onChange={inputChange}/>
           <input name="text" placeholder="What do you think about the trail?" className="add-comment-main-text" onChange={inputChange}/>
           <input type="submit" className="add-comment-submit-button" value="Submit Comment" />
        </form>
    );
};

export default AddCommentView;

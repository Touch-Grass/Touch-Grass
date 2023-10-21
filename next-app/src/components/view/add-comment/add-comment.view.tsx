import React, { useState } from "react";
import "./add-comment.view.scss";
import { IComment } from "@/models/shared/comment/comment.interface";
import ButtonView, { ButtonType } from "../button/button.view";
import LoadingLayoutPresenter from "@/components/presenter/loading-layout/loading-layout.presenter";

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
        setFormData({title:" ", text:" "});
        //document.getElementById("title-id")!.innerText= document.getElementById("title-id")!.innerText;
       // document.getElementById("text-id")!.innerText= document.getElementById("text-id")!.innerText;
      };

    return (
        <div className={"add-comment-container"}>
           <p className={"add-comment-error-string" + (errorString.length > 0 ? "" : "hidden")}>{errorString}</p>
           <input name="title" id="title-id" type="text"
                  value={formData.title}
                  placeholder="Title"
                  onChange={(e)=>inputChange(e.target.name, e.target.value)}/>
           <textarea name="text" id="text-id"
                     placeholder="What do you think about the trail? Be careful with your words, they cannot be removed."
                     className="add-comment-main-text" rows={5}
                     value={formData.text}
                     onChange={(e)=>inputChange(e.target.name, e.target.value) }/>
           <ButtonView text="Submit" type={ButtonType.DEFAULT} onClick={sendComment}/>
           <LoadingLayoutPresenter active={loadingState}/>
        </div>
    );
};

export default AddCommentView;

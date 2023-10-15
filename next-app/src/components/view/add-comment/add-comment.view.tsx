import React from "react";
import "./add-comment.view.scss";

const AddCommentView: React.FC = props => {
    return (
        <form className={"add-comment-container"}>
           <input type="text" placeholder="Title"/>
           <textarea placeholder="What do you think about the trail?" className="add-comment-main-text" rows={5}/>
           <input type="submit" className="add-comment-submit-button" value="Submit Comment"/>
        </form>
    );
};

export default AddCommentView;

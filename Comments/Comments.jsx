import ImageComp from "../Image/Image";
import "./Co.css"

function CommentArea(props){
    const {like,commenter_img,commenter_name,its_comment}=props
    return(
        <div className="comments">
            <ImageComp img={commenter_img}/>
            <div className="comment-area">
                <div className="user-comment">
                    <strong>{commenter_name}</strong>
                    <p>{its_comment}</p>
                </div>
               <div className="like-comment">
               <h6>{like}</h6>
               </div>
             
            </div>
        </div>
    )
}
export default CommentArea;

import "./like.css"

function Likes({likes,comment,condition}){
    return(
        <div className="likes-area">
            <div className="like">
            <span>{condition}</span>
            <i class="fa-solid fa-heart "></i>

                <h6>{likes}</h6>
            </div>
            <div className="comment-count">
                <div className="count">
                <h6>{comment}</h6>
                </div>
               <div className="com">
               <span>Comment</span>
               </div>
            </div>
        </div>
    )
}
export default Likes;
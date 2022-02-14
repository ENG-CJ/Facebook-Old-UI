


import "./L.css"

function LikeArea(){
    return(
        <div className="likes-area likes">
            <div className="like">
            <i class="fa-solid fa-thumbs-up"></i>
                <h6>Like</h6>
            </div>
            <div className="like grid">
                <div className="icon">
                <i class="fa-solid fa-message"></i>

                </div>
                <span>Comment</span>
            </div>
        </div>
    )
}
export default LikeArea;
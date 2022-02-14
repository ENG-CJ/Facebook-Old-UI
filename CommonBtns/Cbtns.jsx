
import "./Cbtn.css"
function Cbtns({error}){
    return(
        <div className="share-btn">
            <button  onClick={error} className="share">Share</button>
        </div>
    )
}
export default Cbtns;
import ImageComp from "../Image/Image"
import "./Writec.css"


function WriteComment({image}){
   
    return(
        <div className="your_comment">
            <ImageComp img={image}/>
            <div className="write-comment">
                <input placeholder="Write a Comment" type="text" name="" id="" />
            </div>
        </div>
    )    
}
export default WriteComment;
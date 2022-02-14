import Cbtns from "../../CommonBtns/Cbtns";
import ImageComp from "../../Image/Image";
import "./crp.css"

const handlerError=()=>{
    alert('Hi User This is Not Currently But \nThe Future We Will Fix That')
}


function CreatePost({image}){

    return(
        <>
            <div className="create-header">
            <i  class="fa-solid fa-marker"></i>
                <div className="title">
                    <h2 className="create-title">Create Post</h2>
                </div>
            </div>

            <div className="body">
               <div className="user">
               <ImageComp img={image}/>
               <div className="text-area">
                   <textarea placeholder="What is On Your Mind?" type="text" name="" id="" ></textarea>
               </div>
             
               </div>
               <div className="share-btn">
                        <Cbtns error={handlerError}/>
               </div>
              
            </div>
        </>
    )
}
export default CreatePost;
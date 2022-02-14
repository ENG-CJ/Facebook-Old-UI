import CommonCard from "../Card-Common/CardC";
import CommentArea from "../Comments/Comments";
import ImageComp from "../Image/Image";
import Likes from "../Likes/Likes";
import LikeArea from "../Like_Area/Like_area";
import WriteComment from "../WriteC/WriteC";
import "./posts.css"


function Posts(props) {
    const {condition, like,icon,time,name,post,img,likes,comments,commenter_img,commenter_name,its_comment}=props;
    return (
        
            <div>
                    <CommonCard>
                         <div className="body-post">
                <div className="user-header">
                    <ImageComp  img={`${icon}`}/>
                    <div className="user-name-title">
                        <h2 >{name}</h2>
                        <span className="time">{time}</span>
                    </div>
                </div>

                <div className="post">
                    <p>
                      {post}
                    </p>
                    <div className="post-img">
                      {props.id==1 ? <img src={`/images/${img.image}`}/> : <video src={`/images/${img.video}`} controls/>}
                    </div>
                </div>
                <hr />
                <div className="area">
                    <Likes  likes={likes} condition={condition} comment={comments}/>
                </div>

                <hr />
                <div className="area">
                    <LikeArea />
            
                </div>
                <hr />
                <CommentArea  image={"style-5.jpg"} like={like} commenter_img={commenter_img} commenter_name={commenter_name} its_comment={its_comment}/>
                <WriteComment image="cj.jpg"/>
            </div>
            </CommonCard>

            
           
            </div>
            



    )
}
export default Posts;
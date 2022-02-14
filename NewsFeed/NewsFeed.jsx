import Explore from "./Explorer/Explore";
import "./news.css"


function NewsFeed(){
    return(
        <div className="news-feed-container">
            <div className="img-1">
                <img src="/images/cj.jpg" alt=""  style={{width: 50+"px"}} />
                <div className="name" >
                    <h6 style={{color: "#1b1b1b"}}>ENG-CJ</h6>
                </div>
            </div>
            <div className="news-feed">
                <div className="news active hover">
                     <i class="fas fa-rss icon"></i>
                    <h5 className="title-new">News feed</h5>
                </div>

                <div className="messenger news hover">
                <i class="fab fa-facebook-messenger icon"></i>
                    <h5 className="title-new">Messenger</h5>
                </div>

                <div className="Watch news hover">
                {/* <i class="fa-solid fa-tv icon"></i> */}
                <i class="fas fa-tv icon"></i>
                    <h5 className="title-new hover">Watch</h5>
                </div>

                <div className="Marketplace news hover">
                <i class="fa-solid fa-briefcase icon"></i>
                    <h5 className="title-new">Marketplace</h5>
                </div>

                <Explore />
            </div>
        </div>
    )
}
export default NewsFeed;
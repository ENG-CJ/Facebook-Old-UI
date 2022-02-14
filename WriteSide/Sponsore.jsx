import ImageComp from "../Image/Image";
import "./Sp.css"

function Sponsore({margin}){
    return(
        <div className="spons-container">
            
            <div className="spon-card">
                <div className="image-spon">
                    <img src="/images/n-2.jpg" alt="" />
                </div>
                <div className="spon-content">
                    <div className="spon-title">
                        <h2>Madaxweyne Farmaajo</h2>
                        <div className="main-text">
                            <p>Find All Latest Articles And Watch Tv Shows Reports And Podcasts</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2 */}
            <div className="spon-card">
                <div className="image-spon">
                    <img src="/images/n-1.jpg" alt="" />
                </div>
                <div className="spon-content">
                    <div className="spon-title">
                        <h2>Hijab Is Our right</h2>
                        <div className="main-text">
                            <p>Social Media Hails Muskan Khan a Muslim Student For Confronting....</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* </div> */}
           
        </div>
    )
}
export default Sponsore;
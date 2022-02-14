import "./Ex.css"


function Explore(){
    return(
        <div className="exp-container">
            <div className="exp-title">
                <h4>Explore</h4>
            </div>
            <div className="exp-content">
            <div className="Marketplace news hover">
            <i class="fa-solid fa-user-group icon"></i>
                    <h5 className="title-new">Groups</h5>
            </div>

            <div className="Marketplace news hover">
            <i class="fa-solid fa-pager icon"></i>
                    <h5 className="title-new">Pages</h5>
            </div>

            <div className="Marketplace news hover">
            <i class="fa-solid fa-calendar-check icon"></i>
                    <h5 className="title-new">Events</h5>
            </div>

            <div className="Marketplace news hover">
            <i class="fa-brands fa-soundcloud icon"></i>
                    <h5 className="title-new">fundraisers</h5>
            </div>

            <div className="Marketplace news hover">
                <i class="fa-solid fa-briefcase icon"></i>
                    <h5 className="title-new">Jobs</h5>
            </div>
            </div>
        </div>
    )
}
export default Explore;
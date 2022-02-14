

import "./fbH.css"
function FbHeader(){
    return(
       <div className="container">
           <div className="header-nav">
               <div className="search-bar">
               <i class="fab fa-facebook-f"></i>
                   <input type="text" placeholder="Search" className="search" />
               </div>
               <div className="account-info">
                   <div className="user-log">
                       <div className="img">
                           <img src="/images/cj.jpg" alt="user" />
                           <div className="name">
                               <h6>ENG-CJ</h6>
                           </div>
                       </div>
                       <div className="home">
                           <h6>Home</h6>
                           <div className="home-user">
                           <i class="fas fa-users"></i>
                           </div>
                       </div>

                       <div className="notify">
                       <i class="fas fa-bell"></i>
                        <div className="mess">
                            <span>7</span>
                        </div>
                       </div>

                   </div>
               </div>
           </div>
       </div>
    )
}
export default FbHeader;
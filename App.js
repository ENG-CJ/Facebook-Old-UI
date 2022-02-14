
import "./app.css"
import CommonCard from "./Components/Facebook/Card-Common/CardC"
import Data from "./Components/Facebook/Date"
import FbCard from "./Components/Facebook/FbCard/FbCard"
import FbHeader from "./Components/Facebook/FbHeader/FbHeader"
import ImageComp from "./Components/Facebook/Image/Image"
import NewsFeed from "./Components/Facebook/NewsFeed/NewsFeed"
import CreatePost from "./Components/Facebook/Posts/Create/CrPost"
import Posts from "./Components/Facebook/Posts/Posts"
import Sponsore from "./Components/Facebook/WriteSide/Sponsore"
import Counter from "./Components/States/Counter/Counter"
import DataObject from "./Components/States/Slider/StdData"
import StudentSlider from "./Components/States/Slider/Student"

function App(){
  return(

    <div>
        
        <StudentSlider array={DataObject}/>

    </div>

















    // <>
    //     <div>
    //     <FbHeader/>
    //     <FbCard>
    //       <div className="news-feed-area">
    //       <NewsFeed/>
    //       </div>
         
    //      <div>
    //         <CommonCard>
    //           <div className="create-container">
    //           <CreatePost image="cj.jpg"/>
    //           </div>
               
    //         </CommonCard>
    //        <div className="area-posts">
    //          {
    //           Data.map((value)=>{

    //            return <Posts key={value.id}
    //            like={value.like}
    //            condition={value.condition}
    //            time ={value.time}
    //            icon={value.icon}
    //           id={value.id} 
    //            name={value.name} 
    //            post={value.post_text}
    //            img={{image : value.img, video : value.video}}
    //            likes={value.like_count}
    //            comments={value.comments}
    //            commenter_img={value.commenter_img}
    //            commenter_name={value.commenter_name}
    //            its_comment={value.its_comment}
    //            />
    //           })
    //          }
                
    //        </div>

          

         
    //      </div>

    //      <div className="spons-container">
    //      <Sponsore margin={30}/>
    //      {/* <Sponsore margin={30}/> */}
    //      </div>
           
          
           
           

       
        
    //     </FbCard>
    //   </div>
     
    // </>
  
   
  )
}



// //  <HeaderBank/>
// <ShowHeader/>
// <div className="cards">

// <BankCard>
//  <CardHeader>
//   <Title/>
//  </CardHeader>
//  <CardBody/>
//  <div className="btn-flex">
//      <Btns width={120} bg="#6c3fff" name="Overview"/>
//      <Btns name="Login" width={120}/>
//      <Btns name="Deposit" width={120}/>
    
//  </div>
  
// </BankCard>

// <BankCard>
//  <CardHeader>
//   <Title/>
//  </CardHeader>
//  <CardBody/>
//  <div className="btn-flex">
//      <Btns width={120} bg="#6c3fff" name="Overview"/>
//      <Btns name="Login" width={120}/>
//      <Btns name="Deposit" width={120}/>
    
//  </div>
  
// </BankCard>

// <BankCard>
//  <CardHeader>
//   <Title/>
//  </CardHeader>
//  <CardBody/>
//  <div className="btn-flex">
//      <Btns width={120} bg="#6c3fff" name="Overview"/>
//      <Btns name="Login" width={120}/>
//      <Btns name="Deposit" width={120}/>
    
//  </div>
  
// </BankCard>

// <BankCard>
//  <CardHeader>
//   <Title/>
//  </CardHeader>
//  <CardBody/>
//  <div className="btn-flex">
//      <Btns width={120} bg="#6c3fff" name="Overview"/>
//      <Btns name="Login" width={120}/>
//      <Btns name="Deposit" width={120}/>
    
//  </div>
  
// </BankCard>

// <BankCard>
//  <CardHeader>
//   <Title/>
//  </CardHeader>
//  <CardBody/>
//  <div className="btn-flex">
//      <Btns width={120} bg="#6c3fff" name="Overview"/>
//      <Btns name="Login" width={120}/>
//      <Btns name="Deposit" width={120}/>
    
//  </div>
  
// </BankCard>

// <BankCard>
//  <CardHeader>
//   <Title/>
//  </CardHeader>
//  <CardBody/>
//  <div className="btn-flex">
//      <Btns width={120} bg="#6c3fff" name="Overview"/>
//      <Btns name="Login" width={120}/>
//      <Btns name="Deposit" width={120}/>
    
//  </div>
  
// </BankCard>


// <BankCard>
//  <CardHeader>
//   <Title/>
//  </CardHeader>
//  <CardBody/>
//  <div className="btn-flex">
//      <Btns width={120} bg="#6c3fff" name="Overview"/>
//      <Btns name="Login" width={120}/>
//      <Btns name="Deposit" width={120}/>
    
//  </div>
  
// </BankCard>

// <BankCard>
//  <CardHeader>
//   <Title/>
//  </CardHeader>
//  <CardBody/>
//  <div className="btn-flex">
//      <Btns width={120} bg="#6c3fff" name="Overview"/>
//      <Btns name="Login" width={120}/>
//      <Btns name="Deposit" width={120}/>
    
//  </div>
  
// </BankCard>
// </div>

export default App
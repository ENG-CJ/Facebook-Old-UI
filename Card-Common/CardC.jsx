import "./Cr.css"

function CommonCard({children,bg,width,height,flex_1,margin,top}){
    return(
    <div className="common-card" style={{ marginRight: margin, width : width+"px", height: height, flex: flex_1}}>
        {/* <div className="card" > */}
        {children}
        {/* </div> */}
       
    </div>
    )
}
export default CommonCard;
import "./Img.css"

function ImageComp({img,width,height,border}){
    return(
        <div className="image-icon">
            <img src={`/images/${img}`} alt="" 
            style={{width: width, height: height,borderRadius: border}}/>
        </div>
    )
}
export default ImageComp;
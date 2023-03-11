import imgs from "../../json/imgs.json"
import ImgItem from "../ImgItem";

function ImgList(){
    return(
        <div className="row">
            {imgs.map(img=>(
                <ImgItem key={img.id} img={img}/> 
            ))}
        </div>
    );
}

export default ImgList;
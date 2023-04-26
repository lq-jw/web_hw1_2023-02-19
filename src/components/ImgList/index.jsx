import imgs from "../../json/imgs.json"
import ImgItem from "../ImgItem";
import Styles from "./ImgList.module.css"
import { Row , Col} from "antd";

function ImgList({imgs, isLoading}){
    return(
        <div className={`${Styles.section} ${Styles.box}`}>
            <Row gutter={[24, 24]} >
                {imgs.map(img=>(
                    <Col 
                        key={img.id}
                        sm= {{ span: 12}}
                        lg = {{ span: 6}}
                    >
                    <ImgItem key={img.id} img={img}/> 
                    </Col>
                ))}
            </Row>            
        </div>

    );
}

export default ImgList;
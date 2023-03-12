import imgs from "../../json/imgs.json"
import ImgItem from "../ImgItem";
import Styles from "./ImgList.module.css"
import { Row , Col} from "antd";

function ImgList(){
    return(
        <Row gutter={[24, 24]} className={Styles.section}>
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
    );
}

export default ImgList;